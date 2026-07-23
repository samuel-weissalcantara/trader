import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import "./turntable-hero.css";

// Hero built from the user's own Canva sketch: a DJ controller (left),
// espresso cup (right) and vinyl record (centered, lower) form a
// "turntable" scene. All three spin slowly at idle and speed up while the
// page scrolls. The scene pins via position:sticky (see .turntable-pin in
// the companion CSS), scales up slightly while pinned, then fades out as
// the next section reaches the top.
//
// disc.webp is a separate crop from the same source photo as
// controller.webp — these constants (read off the crop coordinates used to
// produce disc.webp, see scripts/process_hero_images.py) position the
// spinning disc exactly over the static jog-wheel platter in the
// controller image so the two line up as one shape.
const DISC_LEFT_PCT = 0.1624;
const DISC_TOP_PCT = 0.1411;
const DISC_DIAM_PCT = 0.6043;

const IDLE_DEG_PER_SEC = 6;
const SCROLL_BOOST = 0.6;
const MAX_SCALE = 1.08;
const FADE_START = 0.55;

interface TurntableHeroProps {
  eyebrow: string;
  headlinePart1: string;
  headlinePart2: string;
  className?: string;
}

export const TurntableHero = ({ eyebrow, headlinePart1, headlinePart2, className }: TurntableHeroProps) => {
  const reduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const discRef = useRef<HTMLDivElement>(null);
  const cupRef = useRef<HTMLDivElement>(null);
  const vinylRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    let raf = 0;
    let lastTime = performance.now();
    let lastScrollY = window.scrollY;
    let discDeg = 0;
    let cupDeg = 0;
    let vinylDeg = 0;

    const tick = (now: number) => {
      const dtSec = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      const boost = scrollDelta * SCROLL_BOOST;
      discDeg += IDLE_DEG_PER_SEC * dtSec + boost;
      cupDeg += IDLE_DEG_PER_SEC * 0.7 * dtSec + boost * 0.7;
      vinylDeg += IDLE_DEG_PER_SEC * 0.5 * dtSec + boost * 0.5;

      if (discRef.current) discRef.current.style.transform = `rotate(${discDeg}deg)`;
      if (cupRef.current) cupRef.current.style.transform = `rotate(${cupDeg}deg)`;
      if (vinylRef.current) vinylRef.current.style.transform = `translateX(-50%) rotate(${vinylDeg}deg)`;

      if (wrapperRef.current && pinRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        const scale = 1 + progress * (MAX_SCALE - 1);
        const opacity = progress < FADE_START ? 1 : Math.max(0, 1 - (progress - FADE_START) / (1 - FADE_START));
        pinRef.current.style.transform = `scale(${scale})`;
        pinRef.current.style.opacity = String(opacity);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  return (
    <div ref={wrapperRef} className={`turntable-hero ${className ?? ""}`} style={{ height: "180svh" }}>
      <div ref={pinRef} className="turntable-pin">
        <div className="turntable-copy">
          <p className="turntable-eyebrow">{eyebrow}</p>
          <h1 className="turntable-headline">
            {headlinePart1}
            <br />
            {headlinePart2}
          </h1>
        </div>

        <div className="turntable-scene">
          <div className="turntable-controller">
            <img src="/images/controller.webp" alt="" aria-hidden="true" />
            <div
              ref={discRef}
              className="turntable-disc"
              style={{
                left: `${DISC_LEFT_PCT * 100}%`,
                top: `${DISC_TOP_PCT * 100}%`,
                width: `${DISC_DIAM_PCT * 100}%`,
                aspectRatio: "1 / 1",
              }}
            >
              <img src="/images/disc.webp" alt="" aria-hidden="true" />
            </div>
          </div>

          <div ref={cupRef} className="turntable-cup">
            <img src="/images/cup.webp" alt="Espresso cup, top-down view" />
          </div>

          <div ref={vinylRef} className="turntable-vinyl">
            <img src="/images/vinyl.webp" alt="Vinyl record" />
          </div>
        </div>
      </div>
    </div>
  );
};
