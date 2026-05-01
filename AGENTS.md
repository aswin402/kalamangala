# Kalamangala - Developer Notes

## Commands

- `bun run dev` - Start dev server (Vite on port 5173)
- `bun run build` - **Runs `tsc -b && vite build`** (typecheck before build)
- `bun run lint` - ESLint
- `bun run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Build quirks

- `vite.config.ts:17` - `base: "/kalamangala/"` - deployed to subdirectory
- Build uses `tsc -b` (build mode, not --noEmit) before vite build

## TypeScript strictness

- `tsconfig.app.json:21-22` - `noUnusedLocals: true`, `noUnusedParameters: true`
- `tsconfig.app.json:14` - `verbatimModuleSyntax: true` - use `import type` for types

## Path alias

- `@/*` maps to `./src/*`

## No test framework

- No Vitest, Jest, or Playwright configured
- Testing is not part of the workflow

## Stack

- React 19, Vite 8, Tailwind CSS v4, React Router 7, Zustand, TanStack Query
- Uses bun (npm also works)