import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import "./turntable-hero.css";

// Hero built from the user's own Canva sketch: a DJ controller (left) with
// a vinyl record overlaid on its jog wheel, and an espresso cup (right),
// form a "turntable" scene. The controller itself is static; the vinyl and
// the cup spin slowly at idle and speed up while the page scrolls. The
// scene pins via position:sticky (see .turntable-pin in the companion
// CSS), scales up slightly while pinned, then unpins and fades out as it
// scrolls away naturally, finishing right as the Story section arrives.
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
  const cupRef = useRef<HTMLDivElement>(null);
  const vinylRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    let raf = 0;
    let lastTime = performance.now();
    let lastScrollY = window.scrollY;
    let cupDeg = 0;
    let vinylDeg = 0;

    const tick = (now: number) => {
      const dtSec = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      const boost = scrollDelta * SCROLL_BOOST;
      cupDeg += IDLE_DEG_PER_SEC * 0.7 * dtSec + boost * 0.7;
      vinylDeg += IDLE_DEG_PER_SEC * 0.5 * dtSec + boost * 0.5;

      if (cupRef.current) cupRef.current.style.transform = `rotate(${cupDeg}deg)`;
      if (vinylRef.current) vinylRef.current.style.transform = `translate(-50%, -50%) rotate(${vinylDeg}deg)`;

      if (wrapperRef.current && pinRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const innerH = window.innerHeight;
        // "total" is the scroll distance while the scene is still pinned
        // (position:sticky) — used to drive the scale-up. Once that's used
        // up the element unpins and scrolls away normally; the fade is
        // tied to *that* natural scroll-off distance (rect.top past
        // -total) rather than to the pin buffer, so opacity only reaches 0
        // right as the scene actually leaves the viewport — not before,
        // which previously left a blank pinned gap before Story appeared.
        const total = rect.height - innerH;
        const pinProgress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        const scale = 1 + pinProgress * (MAX_SCALE - 1);

        let opacity = 1;
        if (total > 0 && -rect.top > total) {
          const scrolledPast = -rect.top - total;
          opacity = Math.max(0, 1 - scrolledPast / innerH);
        }

        pinRef.current.style.transform = `scale(${scale})`;
        pinRef.current.style.opacity = String(opacity);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  return (
    <div ref={wrapperRef} className={`turntable-hero ${className ?? ""}`} style={{ height: "115svh" }}>
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
