"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Client-side navigation was keeping the old scroll position, so clicking
 * "Case Studies" from a footer landed you mid-page and "About Us" landed near
 * the bottom. These pages are fixed canvases whose height is set after mount,
 * which defeats Next's own restoration, so put it back to the top explicitly —
 * unless the URL carries a hash, which is a deliberate jump.
 */
export default function ScrollTop() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo(0, 0);
    // the canvas sets its height a frame or two later; hold the top through that
    const t1 = requestAnimationFrame(() => window.scrollTo(0, 0));
    const t2 = setTimeout(() => window.scrollTo(0, 0), 120);
    return () => { cancelAnimationFrame(t1); clearTimeout(t2); };
  }, [pathname]);
  return null;
}
