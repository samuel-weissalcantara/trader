import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AtSign } from "lucide-react";
import { cn } from "@/lib/utils";

// Adapted from a pasted shadcn/21st.dev reference component. Changes from
// the original: the internal header/logo/nav/mobile-menu is removed — the
// site already renders a sticky Header.astro on every page, so keeping the
// component's own nav would duplicate it. Text is fully prop-driven so the
// same component serves both the German (default) and English routes via
// src/data/i18n.ts. The accent circle is khaki-beige (the site's palette)
// rather than the reference's yellow, and the animations respect
// prefers-reduced-motion via useReducedMotion() below.

interface MinimalistHeroProps {
  eyebrow: string;
  mainText: string;
  quotes: string[];
  readMoreLabel: string;
  readMoreHref: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  instagramHref: string;
  instagramHandle: string;
  locationText: string;
  className?: string;
}

export const MinimalistHero = ({
  eyebrow,
  mainText,
  quotes,
  readMoreLabel,
  readMoreHref,
  imageSrc,
  imageAlt,
  overlayText,
  instagramHref,
  instagramHandle,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const reduceMotion = useReducedMotion();

  // When motion is reduced, render every motion.* element already in its
  // "animate" state (no transition) instead of skipping framer entirely —
  // keeps the exact same DOM/layout, just without the entrance animation.
  //
  // `animate` must always be provided, even in the reduced-motion branch:
  // useReducedMotion() resolves asynchronously, so the first paint can
  // mount with the *animated* initial values (e.g. opacity: 0) before the
  // hook flips reduceMotion to true. framer-motion only reads `initial` at
  // mount time — if the reduced-motion branch omits `animate`, there is no
  // target to transition to, and an element that mounted invisible stays
  // invisible forever. Setting initial === animate here means: no visible
  // jump either way, and it's never stuck off-screen regardless of timing.
  const animate = { opacity: 1, x: 0, y: 0, scale: 1 };
  const fx = (initial: object, delay = 0) =>
    reduceMotion
      ? { initial: animate, animate, transition: { duration: 0 } }
      : { initial, animate, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <div
      className={cn(
        "relative flex min-h-[calc(112svh-var(--header-h,81px))] w-full flex-col items-center justify-between overflow-hidden bg-background px-6 py-14 font-serif md:px-12 md:py-20",
        className
      )}
    >
      {/* Main content area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-10 md:grid-cols-3 md:gap-6">
        {/* Left blurb */}
        <motion.div {...fx({ opacity: 0, y: 28 })} className="z-20 order-2 text-center md:order-1 md:text-left">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
          <p className="mx-auto mt-3 max-w-xs font-mono text-sm leading-relaxed tracking-wide text-foreground-soft md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreHref}
            className="mt-4 inline-block font-mono text-sm font-bold uppercase tracking-widest text-foreground underline decoration-from-font underline-offset-4"
          >
            {readMoreLabel}
          </a>

          <div className="mx-auto mt-8 max-w-xs space-y-3 border-l border-border pl-4 text-left md:mx-0">
            {quotes.map((quote) => (
              <p key={quote} className="font-serif text-base italic leading-snug text-foreground-soft">
                “{quote}”
              </p>
            ))}
          </div>
        </motion.div>

        {/* Center image with circle */}
        <div className="relative order-1 flex h-full items-center justify-center md:order-2">
          <motion.div
            {...fx({ scale: 0.8, opacity: 0 }, 0.15)}
            className="absolute z-0 h-[280px] w-[280px] rounded-full bg-foreground-soft/85 md:h-[380px] md:w-[380px] lg:h-[460px] lg:w-[460px]"
          />
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-64 rounded-sm object-cover shadow-2xl shadow-black/60 md:w-80 lg:w-96"
            {...fx({ opacity: 0, y: 56 }, 0.3)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/400x600/402F23/E9DCCB?text=TRADER";
            }}
          />
        </div>

        {/* Right — big headline */}
        <motion.div
          {...fx({ opacity: 0, y: 28 }, 0.45)}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start md:text-left"
        >
          <h1 className="font-serif text-7xl italic leading-[0.95] text-foreground md:text-8xl lg:text-9xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Footer strip */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between border-t border-border pt-6">
        <motion.a
          {...fx({ opacity: 0, y: 28 }, 0.5)}
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-foreground-soft transition-colors hover:text-foreground"
        >
          <AtSign className="h-4 w-4" aria-hidden="true" />
          {instagramHandle}
        </motion.a>
        <motion.div
          {...fx({ opacity: 0, y: 28 }, 0.55)}
          className="font-mono text-sm uppercase tracking-widest text-foreground-soft"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
