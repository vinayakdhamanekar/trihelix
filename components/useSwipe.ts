"use client";
import { useRef } from "react";

/**
 * Horizontal swipe for the carousels.
 *
 * Pointer events, so one code path covers finger, pen and mouse-drag. A gesture
 * only counts once it has travelled 45px sideways and stayed flatter than it is
 * tall — otherwise a vertical scroll that drifts a little would flick the
 * carousel. Returns props to spread onto the element that should catch it.
 */
export default function useSwipe(onPrev: () => void, onNext: () => void) {
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  // A swipe that ends on a card would otherwise also fire the card's link.
  const swiped = useRef(false);

  return {
    onClickCapture(e: React.MouseEvent) {
      if (!swiped.current) return;
      swiped.current = false;
      e.preventDefault();
      e.stopPropagation();
    },
    style: { touchAction: "pan-y" as const },
    onPointerDown(e: React.PointerEvent) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      start.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
    },
    onPointerUp(e: React.PointerEvent) {
      const s = start.current;
      start.current = null;
      if (!s || s.id !== e.pointerId) return;
      const dx = e.clientX - s.x;
      const dy = e.clientY - s.y;
      if (Math.abs(dx) < 45 || Math.abs(dx) <= Math.abs(dy)) return;
      swiped.current = true;
      (dx < 0 ? onNext : onPrev)();
    },
    onPointerCancel() {
      start.current = null;
    },
  };
}
