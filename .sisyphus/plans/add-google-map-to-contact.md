# Plan: Add Embedded Google Map to Contact Page

## Objective
Insert an interactive Google Map iframe into the right column of the Contact page, positioned immediately after the "Get in Touch" paragraph and before the social links section.

## Files To Modify
- `src/pages/contact/sections/ContactSection.tsx`

## Tasks

### 1. Insert map container and iframe in right column
- Locate the right column `<div data-anim="fade-right" ...>` (around line 279).
- After the closing `</p>` of the "Get in Touch" description (line 286), insert a new `<div>` wrapper for the map.
- Container classes: `mt-6 aspect-video w-full overflow-hidden rounded-[12px] border border-foreground/10 shadow-sm`
- Add `data-anim="fade-up"` and `data-delay="0.25"` for GSAP reveal.

- Inside the container, add an `<iframe>` with:
  - `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.587221380144!2d77.771436!3d11.2540522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba97b79693c12e7%3A0x99fbcdf4cdd83f5!2sThe+Waterfront+by+Kalamangala!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin"`
  - `width="100%" height="100%"`
  - `style={{ border: 0 }}`
  - `allowFullScreen=""`
  - `loading="lazy"`
  - `referrerPolicy="no-referrer-when-downgrade"`
  - `title="Kalamangala Location"`
  - For accessibility: add `aria-label="Map showing Kalamangala location"`

### 2. Add fallback UI for iframe load failures (graceful degradation)
- Wrap the iframe in a container with `suppressHydrationWarning` if needed.
- Provide a fallback block that displays if iframe fails (optional via `onError` state). Simpler approach: below the iframe, show a static address text that is always visible and serves as a fallback.
- Add a small paragraph under the map container: `className="mt-3 text-sm text-foreground/70"` with content:
  `1 Saminathapuram, Muthur Main Road, Modakurichi (via), Erode 638104`
- This ensures users can still get the address even if map is blocked.

### 3. Maintain existing social links placement
- Ensure the social links `<div data-anim="fade-up" data-delay="0.25">` remains directly after the map container (no extra wrappers between map container and social links).

### 4. Responsive verification
- Map uses `aspect-video` (16:9) which is responsive by default.
- Container `w-full` ensures full width within the right column.
- Rounding (`rounded-[12px]`) and border consistent with card styling.
- Test at mobile (375px), tablet (768px), and desktop (1280px).

### 5. Build and lint
- Run `bun run build` to ensure no TypeScript errors.
- If lint warnings appear, address them.
- Verify `tsconfig` strict mode passes.

### 6. Scope guard
- Do not add custom markers, styled maps, or directions buttons.
- Do not replace iframe with a different provider without explicit approval.
- If Google Maps embedding requires an API key later, treat as a separate task.

## Acceptance Criteria
- Map displays on the Contact page in the right column, below the paragraph and above social links.
- Map container has rounded corners, border, and subtle shadow matching the design system.
- GSAP `fade-up` animation triggers when scrolling into view.
- No build or type errors.
- Map is interactive (allowFullScreen) and lazy-loads.

## Notes
- This uses Google Maps Embed API without a key for basic embedding (suitable for demonstration; production may require API key for higher quotas).
- Coordinates sourced from provided links: lat `11.2540522`, lng `77.771436`.
- If you prefer a different map provider (OpenStreetMap, Mapbox) or a static image placeholder, adjust the `<iframe>` `src` accordingly.
