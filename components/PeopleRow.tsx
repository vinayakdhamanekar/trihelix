"use client";
import { useState } from "react";
import CircleArrow from "@/components/CircleArrow";
import useSwipe from "@/components/useSwipe";
import type { Person } from "@/lib/about-data";

/**
 * One row of people cards, swiped with the same circle arrows the home page
 * carousel uses. The left arrow only appears once you have moved off the first
 * card, exactly as the 10-Sep review asks.
 *
 * Card geometry is read out of TRX About Us 3.0.fig: 386x394, 30px corners, a
 * 10% white fill under a Glass effect (radius 100), no outer stroke, and one
 * hairline at y=253 at 20% white. The build previously had an outer border AND
 * a panel border, which is the "double line" in the review.
 */
const CARD_W = 386;
const GAP = 40;
const STEP = CARD_W + GAP;
const VIEW = 1340;                       // 100 -> 1440 on the design canvas
const PER_VIEW = Math.floor((VIEW + GAP) / STEP);   // 3 whole cards visible

export default function PeopleRow({ people, top }: { people: Person[]; top: number }) {
  const [i, setI] = useState(0);
  const max = Math.max(0, people.length - PER_VIEW);
  const at = Math.min(i, max);
  const go = (d: number) => setI((v) => Math.min(max, Math.max(0, v + d)));
  const swipe = useSwipe(() => go(-1), () => go(1));

  return (
    <>
      <div {...swipe} style={{ position: "absolute", left: "100px", top: `${top}px`, width: `${VIEW}px`, overflow: "hidden", ...swipe.style }}>
        <div
          style={{
            display: "flex", gap: `${GAP}px`,
            transform: `translateX(${-at * STEP}px)`,
            transition: "transform 520ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {people.map((p, n) => (
            <div
              key={n}
              style={{
                position: "relative", width: `${CARD_W}px`, height: "394px", flex: "0 0 auto",
                borderRadius: "30px", overflow: "hidden",
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(50px) saturate(140%)",
                WebkitBackdropFilter: "blur(50px) saturate(140%)",
              }}
            >
              <img src={p.img} alt="" style={{ position: "absolute", left: 0, top: 0, width: `${CARD_W}px`, height: "253px", objectFit: "cover" }} />
              <div style={{ position: "absolute", left: 0, top: "253px", width: `${CARD_W}px`, height: "1px", background: "rgba(255,255,255,0.20)" }} />
              <div style={{ position: "absolute", left: "30px", top: "279px", width: "330px", fontSize: "26px", lineHeight: "30px" }}>{p.name}</div>
              <div style={{ position: "absolute", left: "30px", top: "321px", width: "336px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13.5px", lineHeight: "17px", letterSpacing: "1.2px", color: "rgba(255,255,255,0.86)" }}>{p.role}</div>
            </div>
          ))}
        </div>
      </div>

      {at > 0 && (
        <button
          type="button" onClick={() => go(-1)} aria-label="Previous people"
          style={{ position: "absolute", left: "36px", top: `${top + 168}px`, width: "58px", height: "58px", padding: 0, border: 0, borderRadius: "999px", background: "transparent", cursor: "pointer", zIndex: 3 }}
        >
          <CircleArrow dir="left" />
        </button>
      )}
      {at < max && (
        <button
          type="button" onClick={() => go(1)} aria-label="More people"
          style={{ position: "absolute", left: "1346px", top: `${top + 168}px`, width: "58px", height: "58px", padding: 0, border: 0, borderRadius: "999px", background: "transparent", cursor: "pointer", zIndex: 3 }}
        >
          <CircleArrow dir="right" />
        </button>
      )}
    </>
  );
}
