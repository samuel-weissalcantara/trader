# TRADER — Café & Gallery (Hamburg)

Marketing site for TRADER, a specialty coffee shop and gallery in Hamburg's
Schanze district. Built with [Astro](https://astro.build) — static output,
no client-side framework, a handful of small vanilla-JS islands for
interactivity (open/closed status, mobile nav, scroll reveals, gallery
lightbox).

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Swapping in real content

Everything content-related lives in **`src/data/site.ts`**: hours, address,
menu items, the marquee, the story copy, gallery images, and the current
exhibition. Update it in one place and every page picks it up.

### Photography

Images are placeholder-aware via `src/components/Frame.astro`. Any `src`
starting with `"placeholder:<category>:<seed>"` renders an art-directed
gradient placeholder instead of a broken image — this is how the whole site
runs today. To swap in real photography:

1. Drop images into `public/images/`.
2. In `src/data/site.ts`, change the relevant `src` from
   `"placeholder:space:1"` to `"/images/your-photo.jpg"`.

No component code needs to change — `Frame` detects real paths automatically.

### Logo

The header/footer currently render a typographic "TRADER" wordmark. Swap in
a real mark by editing `src/components/Header.astro` and `Footer.astro`.

## Structure

- `src/pages/index.astro` — homepage (Hero, Story, Menu, Gallery teaser, Visit)
- `src/pages/gallery.astro` — full gallery: current exhibition + filterable
  mood grid with a keyboard-navigable lightbox
- `src/components/` — shared UI (`Header`, `Footer`, `Frame`, `OpenStatus`,
  `Marquee`) and `sections/` for homepage blocks
- `src/data/site.ts` — single source of truth for content
- `src/styles/global.css` — design tokens (color, type, spacing) + resets
