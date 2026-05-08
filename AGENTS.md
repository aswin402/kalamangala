# Kalamangala - Developer Notes

## Commands

- `bun run dev` — Start dev server (Vite on port 5173)
- `bun run build` — Runs `tsc -b && vite build` (typecheck before build)
- `bun run lint` — ESLint
- `bun run preview` — Preview production build
- `npm run deploy` — Deploy to GitHub Pages (`gh-pages -d dist`)

## Build quirks

- `vite.config.ts:17` — `base: "/kalamangala/"` — deployed to subdirectory
- Build uses `tsc -b` (build mode, not `--noEmit`) before `vite build`

## TypeScript strictness

- `tsconfig.app.json:20` — `strict: true`
- `tsconfig.app.json:21` — `noUnusedLocals: true`
- `tsconfig.app.json:22` — `noUnusedParameters: true`
- `tsconfig.app.json:14` — `verbatimModuleSyntax: true` — use `import type` for type-only imports
- `tsconfig.app.json:25` — `noUncheckedSideEffectImports: true`

## Path alias

- `@/*` maps to `./src/*`

## Linting

ESLint (`eslint.config.js`) with `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`. `dist/` is ignored.

## No test framework

No Vitest, Jest, or Playwright configured. Testing is not part of the workflow.

## Stack

React 19, Vite 8, Tailwind CSS v4, React Router 7, Zustand, TanStack Query, TipTap (rich text), Supabase (auth + Postgres + Storage), Zod, React Hook Form, Lucide React, Framer Motion, GSAP, Lenis (smooth scroll). Uses bun (npm also works).

## Project structure (non-obvious)

```
src/pages/
├── admin/
│   ├── login/AdminLoginPage.tsx        # /admin-kalamangala — Supabase auth
│   └── dashboard/
│       ├── AdminDashboardPage.tsx      # /admin-dashboard — CMS table
│       └── components/
│           ├── BlogPostForm.tsx         # Create/edit modal
│           └── RichTextEditor.tsx       # TipTap editor
├── blog/
│   ├── BlogPage.tsx                     # /blog — public listing
│   ├── blog.css
│   ├── data/blogPostsSupabase.tsx      # Supabase fetch functions
│   └── post/
│       ├── BlogPostPage.tsx             # /blog/:slug — single post
│       ├── blog-post.css
│       ├── components/
│       │   ├── LatestBlogsSidebar.tsx
│       │   ├── NewsletterCard.tsx
│       │   └── RelatedBlogsSection.tsx
│       └── sections/
│           ├── IntroSection.tsx         # Hero: Title → Badges → Sub header → Body → Right image
│           ├── ArticleSection.tsx      # Renders post.body as HTML
│           └── GallerySection.tsx      # Hardcoded template images
└── home/, about/, contact/, location/, projects/
```

Supabase client at `src/api/supabase.ts`. Auth state at `src/store/useAdminStore.ts`.

## Commit convention

Format: `type:message` (lowercase, no period)

Types from git history: `style:`, `feat:`, `chore:`, `setyle:` (typo preserved in history)