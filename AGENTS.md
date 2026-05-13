# Kalamangala - Developer Notes

## Commands

- `bun run dev` — Dev server (Vite, port 5173)
- `bun run build` — `tsc -b && vite build` — typechecks before build
- `bun run lint` — ESLint
- `bun run preview` — Preview production build
- `npm run deploy` — GitHub Pages deploy (`gh-pages -d dist`)
- `npm run build:ghpages` — Builds with `base: "/kalamangala/"` for subdirectory deployment

## Deployment

- Vercel is configured (`vercel.json`) with SPA rewrites to `/index.html`
- GitHub Pages uses `VITE_DEPLOY_TARGET=ghpages` env var to switch `base` in `vite.config.ts:21`
- Both `npm run deploy` and the Vercel preview deploy to subdirectory `/kalamangala/` by default

## TypeScript Strictness

- `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`
- `verbatimModuleSyntax: true` — use `import type` for type-only imports, or TypeScript will error
- `noUncheckedSideEffectImports: true` — side-effect imports (e.g. GSAP `gsap.context`) must not be tree-shaken
- `erasableSyntaxOnly: true` — enums and namespace imports are disallowed

## Path Alias

- `@/*` maps to `./src/*` (defined in both `tsconfig.app.json` and `vite.config.ts`)

## Styling

**Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin, not a config file. Theme variables are defined in `globals.css` using CSS custom properties under `:root` and `.dark`, then referenced via `@theme` block.

Key design tokens (`globals.css:4-51`):
- `--background: #f4f2e3`, `--foreground: #1d322d` (cream/forest green palette)
- `--primary: #f3ac85`, `--card: #faf5ea`, `--footer: #1f3630`
- Custom fonts: Inter (sans), Pathway Gothic One (display), Satisfy (script)

Utility classes to know:
- `.site-shell` → `mx-auto w-full max-w-[1380px]`
- `.site-px` → `px-[30px]`
- `.skeleton-shimmer` — shimmer loading animation

## Animation System

GSAP + ScrollTrigger manages all scroll animations. Key classes applied to elements:
- `.km-reveal` / `.la-reveal` — fade up on scroll (82% viewport trigger)
- `.km-reveal-slow` — slower, heavier fade up
- `.km-stagger` — animates children sequentially (stagger 0.14s)
- `.km-card` / `.la-card` — card fade+scale
- `.km-fade-left` / `.km-fade-right` — directional fade
- `.km-hero` — hero timeline (media scale + text cascade)
- `.km-text-reveal` — word-by-word heading reveal
- `.km-image-parallax` — desktop-only parallax (disabled on mobile)
- `.km-pin-section` — desktop-only scroll pinning

`initScrollAnimations()` is called in `RootLayout.tsx` and uses a `MutationObserver` to handle lazy-loaded pages incrementally (avoids "blog page glitch" where existing animations would re-trigger).

FOUC prevention: `.km-reveal` elements have `opacity: 0` in CSS by default, revealed by GSAP. `globals.css:404-420` sets this, plus `prefers-reduced-motion` respects accessibility.

## Routing

React Router 7 (`createBrowserRouter`). All public routes are children of `RootLayout` (which provides Navbar + Footer + Lenis smooth scroll + scroll animations). Admin routes are separate root-level routes.

Key routes:
- `/` → Home
- `/about` → About
- `/blog` → Blog listing
- `/blog/:slug` → Single blog post
- `/contact` → Contact
- `/location-advantage` → Location page
- Project pages: `/the-waterfront`, `/amenities`, `/construction-company`, `/residential-plots-coimbatore`, `/top-real-estate-contractors-in-tiruchengode`, `/real-estate-karur`, `/tiruppur-villa-gated-community-plots`, `/real-estate-plots-in-tamilnadu`, `/realestate-construction-company-erode`, `/residential-layouts-erode`
- `/admin-kalamangala` → Login page
- `/admin-dashboard` → CMS (protected by `AdminRoute` guard)

All pages are lazy-loaded via `React.lazy` with `Suspense` + skeleton fallbacks defined in `PageSkeletons.tsx`.

## Architecture

- `src/api/` — `supabase.ts` (Supabase client + table constants), `axios.ts`
- `src/store/` — Zustand stores: `useAdminStore`, `useToastStore`, `useAppStore`, `useThemeStore`
- `src/components/` — shared UI (`button.tsx`, `ui/`, `layout/`, `skeletons/`)
- `src/pages/` — page components with `sections/` and `components/` subdirectories
- `src/lib/` — `scrollAnimations.ts`, `lenis.ts`, `logger.ts`
- `src/providers/` — `QueryProvider` (TanStack Query with 5min stale time)
- `src/types/` — Zod schemas (`schema.ts`)

## Supabase / CMS

- Blog posts stored in Supabase table `blog_posts` (see `SUPABASE_TABLE.BLOG_POSTS`)
- Storage bucket `blog-images` for thumbnail uploads
- Auth via `supabase.auth.signInWithPassword`
- `AdminRoute` component guards `/admin-dashboard`
- `AdminDashboardPage` fetches all posts (no auth filter on fetch — security relies on route guard)
- `BlogPostForm` supports create/edit with TipTap rich text editor, draft/publish workflow, image upload
- `fetchPublishedPosts()` filters by `published: true` for public listing

## Toast Notifications

`src/store/useToastStore.ts` — Zustand store with convenience helpers:
```ts
import { toast } from '@/store/useToastStore';
toast.success('Title', 'Message');
toast.error('Title', 'Message'); // 6s duration
toast.warning('Title', 'Message');
toast.info('Title', 'Message');
```
Rendered by `<Toaster />` component placed in `AdminLayout` and `RootLayout`.

## Linting

ESLint flat config (`eslint.config.js`) — ignores `dist/`. Extends `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`.

## No Test Framework

No Vitest, Jest, or Playwright configured.

## Stack

React 19, Vite 8, Tailwind CSS v4, React Router 7, Zustand, TanStack Query, TipTap (rich text), Supabase (auth + Postgres + Storage), Zod, React Hook Form, Lucide React, Framer Motion, GSAP + ScrollTrigger, Lenis (smooth scroll). Uses bun (npm also works).

## Project Structure

```
src/pages/
├── home/           # Homepage sections
├── about/          # About page with sections
├── contact/        # Contact page
├── location/       # Location advantage page
├── blog/           # Public blog listing + post pages
│   ├── data/blogPostsSupabase.tsx   # Supabase fetch functions
│   └── post/
│       ├── components/  # Sidebar, newsletter, related blogs
│       └── sections/    # Intro, article, gallery
├── admin/
│   ├── login/               # /admin-kalamangala
│   └── dashboard/
│       └── components/      # BlogPostForm, RichTextEditor
└── projects/               # 9 project subdirectories
    ├── waterfront/
    ├── amenities/
    ├── construction/
    ├── premium-plots/
    ├── erode-construction/
    ├── erode-luxury-layouts/
    ├── karur-real-estate/
    ├── tiruchengode-contractors/
    └── tiruppur-villa/
        └── tamilnadu-plots/
```

## Commit Convention

Format: `type:message` (lowercase, no period)

Types observed: `style:`, `feat:`, `chore:`, `setyle:` (historical typo preserved)
