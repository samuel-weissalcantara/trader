import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://trader-gallery.example",
  compressHTML: true,
  // applyBaseStyles: false — the site already has a hand-written CSS reset
  // and design system in src/styles/global.css; Tailwind's Preflight would
  // fight it (e.g. stripping button/heading styles global.css relies on).
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  // "@/*" resolves via Astro's built-in tsconfig-paths support (reads the
  // "paths" entry in tsconfig.json) — no manual vite.resolve.alias needed.
});
