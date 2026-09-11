"use client";
import { useEffect } from "react";

/**
 * Fades each block of the page up as it comes into view.
 *
 * The canvases are absolutely positioned, so there is no markup to hang a
 * class on without editing every generated file. This walks the canvas's own
 * children once after mount instead, and only touches the ones that are still
 * below the fold — anything already on screen is left alone, so the page never
 * flashes empty.
 *
 * Elements that already carry an inline `transform` are skipped: the accordion
 * shift and the expanded case bodies use it to position themselves, and a
 * reveal would fight them.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Both trees are in the DOM; only one is displayed. Take the one that is
    // actually laid out - picking the hidden one gives every child a zero rect,
    // which reads as "already on screen" and reveals nothing.
    const canvas = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".only-desktop [style*='transform-origin'], .only-mobile [style*='transform-origin']",
      ),
    ).find((el) => el.offsetParent !== null || el.getBoundingClientRect().height > 0);
    if (!canvas) return;

    // The mobile canvases wrap everything in one group before the sections
    // start, so walk down past any single-child wrapper to reach them.
    let group: HTMLElement = canvas;
    while (group.children.length === 1 && group.firstElementChild instanceof HTMLElement) {
      group = group.firstElementChild;
    }

    const targets: HTMLElement[] = [];
    for (const el of Array.from(group.children)) {
      if (!(el instanceof HTMLElement)) continue;
      if (el.style.transform || el.dataset.noReveal !== undefined) continue;
      if (el.getBoundingClientRect().top < window.innerHeight) continue;   // already on screen
      el.classList.add("trx-reveal");
      targets.push(el);
    }
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("trx-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return null;
}
