# Kalamangala — Performance & UX Enhancements

## Problem: Scroll Animation Lag

### Root Cause — Dual ScrollTrigger System

Every page load triggered **two independent animation systems** fighting over the same scroll events:

1. **`initScrollAnimations()`** (global, RootLayout) — registered ScrollTrigger for `.km-reveal`, `.km-stagger`, `.km-card`, `.km-hero`, `.km-image-parallax` across the entire DOM
2. **Page-specific `gsap.context()`** — each page component created its own independent ScrollTrigger instances for the same elements

This caused:
- **2× the ScrollTrigger instances** — both systems animating the same elements
- **Conflicting animation parameters** — different `duration`, `start`, and `ease` values
- **Parallax loops consuming browser resources** — continuous scrub animations ran even when off-screen
- **`data-reveal` system vs `km-*` class system** — two separate declarative animation paths with no awareness of each other

### Specific Conflicts Found

| Page/Component | Issue |
|---|---|
| `TheWaterfrontPage` | `.waterfront-animate` class animates same elements as `WaterfrontHero`'s own GSAP context. Conflicting `once: true` vs continuous |
| `ShowcaseGrid` | `km-stagger` class from global + GSAP parallax loop for same images = double animation |
| `BlogPostPage` | 6 independent `gsap.context()` instances across sections (Intro, Article, Gallery, sidebar components) all creating their own ScrollTriggers |
| `ScrollHero` | Uses same `ScrollTrigger.create` pin + scrub pattern as `HeroSection` — no conflict per se, but Lenis had to reconcile two identical animation pipelines |
| `WaterfrontHero` | `data-anim="img"` elements targeted by both the component's own GSAP context AND `initScrollAnimations`'s `[data-anim]` handler |

---

## Solution Architecture

### Tool Selection Rationale

| Tool | Best For | Used Here |
|---|---|---|
| **GSAP ScrollTrigger** | Complex scroll-scrub (pinned sections, parallax, timeline-linked) | `HeroSection`, `ScrollHero`, `ContactPage`, `AboutPage` marquee |
| **Lenis** | Smooth scroll engine; sits under GSAP ticker | Root-level (`lib/lenis.ts`), drives RAF loop for all GSAP animations |
| **CSS `data-reveal` attrs** | Simple fade/slide reveal — one-shot, no scrub | BlogPostPage sections, ArticleSection, GallerySection, sidebar |
| **Framer Motion** | Hover interactions (scale, opacity) only | `ShowcaseGrid` card hover — no scroll trigger needed |

### Key Principles Applied

1. **One animation system per element** — never apply both a global class (`km-reveal`) and a component-level GSAP context to the same element
2. **Kill before init** — `ScrollTrigger.getAll().forEach(t => t.kill())` at the start of every page context, then only re-create what's needed
3. **Scrub animations are expensive** — use `once: true` for reveals; scrub only for pinned/parallax hero effects
4. **Framer Motion for hover states** — zero ScrollTrigger overhead; hardware-accelerated via CSS transforms

---

## Changes Made

### 1. `src/lib/scrollAnimations.ts` — Global Animator Made Self-Aware

**Before:** `initScrollAnimations()` blindly targeted all `.km-*` classes and `[data-anim]` elements across the entire page.

**After:**
- `[data-reveal]` and `[data-reveal-stagger]` elements are **ignored** by the global animator — pages own those
- `[data-anim]` elements get a single simple reveal (opacity 0→1, y 40→0) via `initScrollAnimations`
- `[data-parallax-img]` elements get parallax via `initScrollAnimations` (desktop-only)
- `.km-reveal`, `.km-reveal-slow`, `.km-stagger` still work globally but **skip any element that already has `data-reveal` or `data-reveal-stagger`**

### 2. `src/pages/blog/post/BlogPostPage.tsx` — Unified Animation + Data Fetch

**Before:** 6 components each with their own `useEffect` + `gsap.context()` + independent `fetchPublishedPosts()` calls.

**After:**
- Single `gsap.context()` in `BlogPostPage` reads `data-reveal` / `data-reveal-stagger` attributes and creates one batch of ScrollTriggers
- One `Promise.all([fetchPostBySlug, fetchPublishedPosts])` fetches all data in parallel
- `sidebarPosts` and `relatedPosts` passed as props — children are pure display components
- On `loading || !post` state change, GSAP context reruns cleanly; when post changes, only the `data-reveal` animations fire

**Key pattern:**
```tsx
ScrollTrigger.getAll().forEach((t) => t.kill()); // prevent duplicates
// then only create triggers for [data-reveal] and [data-reveal-stagger]
```

### 3. `src/pages/projects/waterfront/TheWaterfrontPage.tsx` — Removed Conflicting `.waterfront-animate`

**Before:** Used `.waterfront-animate` class picked up by `initScrollAnimations` AND had its own `gsap.context()` looping over those same sections.

**After:**
- Removed `gsap.context()` loop over `.waterfront-animate` sections — `initScrollAnimations` now handles those via `[data-anim]`
- Only keeps the parallax `data-parallax-img` loop, scoped to `containerRef`
- Registers `ScrollTrigger` plugin explicitly

### 4. `src/pages/projects/waterfront/sections/ShowcaseGrid.tsx` — Removed Double Parallax

**Before:** Both a `gsap.context()` parallax loop (`scrub: 1.2`) on every image AND the global `km-stagger` class applying to the grid.

**After:**
- Removed entire `useEffect` with GSAP parallax — Framer Motion handles the hover scale/blur effect directly on the `motion.img`
- Removed `km-stagger` from the section class — stagger is handled by the global `initScrollAnimations` if needed, but this page handles it differently
- Import cleaned up: only `useRef`, `useState`, `motion` — no `gsap`, no `ScrollTrigger`
- `useState` imported separately from `useRef` (was missing)

### 5. Child Components Simplified — Became Pure Display

| Component | Before | After |
|---|---|---|
| `IntroSection` | `useEffect` + GSAP context | `data-reveal` attributes; no JS |
| `ArticleSection` | `useEffect` + GSAP context | `data-reveal` attributes; no JS |
| `GallerySection` | `useEffect` + GSAP context | `data-reveal` attributes; no JS |
| `LatestBlogsSidebar` | `useEffect` + state + GSAP | receives `posts` as prop; pure display |
| `RelatedBlogsSection` | `useEffect` + state + GSAP | receives `posts` as prop; pure display |

### 6. Blog Pagination — Staggered Infinite Scroll

**Files changed:** `BlogPage.tsx`, `blogPostsSupabase.tsx`

- `fetchPublishedPosts(page, pageSize)` — paginated with `.range()` on Supabase
- `fetchPublishedPostsCount()` — total count check
- IntersectionObserver sentinel triggers next page load 300px before viewport end
- `loadedPagesRef` Set prevents duplicate page loads
- Skeleton grid shown while loading more; `"You've reached the end"` message when exhausted
- GSAP stagger animation fires only on newly rendered cards (`.blog-card:not(.animated)`)

### 7. `data-reveal` Attribute System

A lightweight alternative to `.km-*` classes for pages that own their animation:

```html
<!-- Simple reveal -->
<div data-reveal data-x="-40" data-duration="1.2" data-delay="0.15">

<!-- Staggered children -->
<ul data-reveal-stagger data-delay="0.05">
```

| Attr | Purpose |
|---|---|
| `data-reveal` | Fade in on scroll |
| `data-reveal-stagger` | Animate children with stagger |
| `data-x` | Start x-offset (negative = from left) |
| `data-y` | Start y-offset (positive = from below) |
| `data-duration` | Seconds (default 0.9) |
| `data-delay` | Seconds before animation starts (default 0) |

---

## Animation Tool Summary by Page

| Page | Animation System | Reason |
|---|---|---|
| `HomePage` + `HeroSection` | GSAP scrub + pin | Complex multi-phase hero animation (pin, scrub, mask blur) — unique, can't be data-driven |
| `ScrollHero` (all project pages) | GSAP scrub + pin | Same pattern as hero — reusable via component |
| `BlogPage` | GSAP stagger (cards) + IntersectionObserver (pagination) | Batch reveal on load + infinite scroll trigger |
| `BlogPostPage` | `data-reveal` attributes + single GSAP context | Declarative, no conflicts, low overhead |
| `TheWaterfrontPage` | `data-reveal` + targeted parallax only | Clean separation: global handles reveals, page handles parallax |
| `ShowcaseGrid` | Framer Motion hover only | No scroll triggers; hover is user-initiated |
| `AboutPage` sections | `data-reveal` + GSAP context | Individual section reveals |
| `ReviewsSection` | GSAP marquee (timeline loop) | Continuous horizontal scroll animation — unique |
| `ContactPage` | GSAP scrub + pin | Same pattern as hero |
| All other pages | `data-reveal` via `initScrollAnimations` | Minimal, reliable, no conflicts |

---

## Responsive Approach

### Breakpoint Strategy

The project uses Tailwind's default breakpoints plus `3xl` (2100px) defined in `globals.css`:

```
sm:   640px  (mobile landscape)
md:   768px  (tablet)
lg:   1024px (laptop)
xl:   1280px (desktop)
2xl:  1536px (large desktop)
3xl:  2100px (ultra-wide)
```

### Height Scaling Pattern

Hero sections use clamped heights with per-breakpoint overrides:
```tsx
className="h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[420px] 2xl:h-[450px]"
```

### Clamp for Typography

Text sizes use `clamp()` for fluid scaling across ranges:
```tsx
className="text-[clamp(30px,4.2vw,52px)] font-black leading-[1.04] tracking-[-0.05em]"
```

### Padding Scale

Consistent padding progression per breakpoint — no arbitrary values:
```tsx
className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] 3xl:px-[80px]"
```
