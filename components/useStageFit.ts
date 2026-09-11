"use client";
import { useCallback, useEffect, useRef, useState } from "react";


/**
 * Scales the fixed 1440px design canvas to the stage width, exactly as the
 * design export did: scale = stageWidth / 1440, stage height = ART_H * scale.
 * Also mirrors the export's ghost overlay — press "G" to difference-blend the
 * Figma render over the page.
 */
export function useStageFit(artW: number, artH: number) {
  const stage = useRef<HTMLDivElement | null>(null);
  const art = useRef<HTMLDivElement | null>(null);
  const [ghost, setGhost] = useState(0);

  const fit = useCallback(() => {
    const s = stage.current, a = art.current;
    if (!s || !a) return;
    const w = s.clientWidth;
    if (!w) return;
    const k = w / artW;
    // `zoom`, not `transform: scale`. A transform rasterises the canvas at its
    // authored size and then stretches the bitmap, so on any display wider than
    // 1440 the type and the icons come out soft. `zoom` is a layout scale: the
    // browser re-renders text and vectors at the final size, so they stay crisp
    // at any width.
    a.style.zoom = String(k);
    a.style.transform = "";
    s.style.height = `${artH * k}px`;
  }, [artW, artH]);

  useEffect(() => {
    fit();
    const ro = new ResizeObserver(fit);
    if (stage.current) ro.observe(stage.current);
    window.addEventListener("resize", fit);
    window.addEventListener("load", fit);
    document.addEventListener("visibilitychange", fit);
    const t1 = setTimeout(fit, 300), t2 = setTimeout(fit, 1500);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "g" || e.key === "G") setGhost((g) => (g ? 0 : 0.55));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
      window.removeEventListener("load", fit);
      document.removeEventListener("visibilitychange", fit);
      window.removeEventListener("keydown", onKey);
      clearTimeout(t1); clearTimeout(t2);
    };
  }, [fit]);

  return { stageRef: stage, artRef: art, ghost, fit };
}
