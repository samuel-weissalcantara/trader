/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Plain CSS-var references — fine for base utilities (bg-x, text-x)
        // but do NOT support Tailwind's opacity-modifier syntax (x/60).
        background: "var(--paper)",
        muted: "var(--ink-soft)",
        border: "var(--line)",
        accent: "var(--sage)",
        "accent-deep": "var(--sage-dark)",
        clay: "var(--clay)",
        surface: "var(--surface)",
        chip: "var(--chip)",
        "on-chip": "var(--on-chip)",
        // Opacity-modifier-safe tokens (rgb(var(--x-rgb) / <alpha-value>)) —
        // needed because the hero component uses text-foreground/60 etc.
        foreground: "rgb(var(--ink-rgb) / <alpha-value>)",
        "foreground-soft": "rgb(var(--ink-soft-rgb) / <alpha-value>)",
        "background-solid": "rgb(var(--paper-rgb) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["Cormorant", "ui-serif", "Georgia", "serif"],
        mono: ["\"Space Mono\"", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
