"use client";
import { useState } from "react";
import useSwipe from "@/components/useSwipe";
import CircleArrow from "@/components/CircleArrow";
import type { Person } from "@/lib/about-data";

/**
 * One swipeable people card on the phone.
 *
 * The mobile .fig draws a single card per row and leaves the component's
 * default text in place, which is why every row read "Vineet Bahal" whoever
 * the photo showed. The names and roles come from lib/about-data.ts — the same
 * source the desktop rows use — and the dots the design already drew now move
 * through the row.
 *
 * Geometry is the design's: a 361x368 card at y=67 with 30px corners, the
 * portrait 360x253, a 20%-white rule at its foot, and 10px dots on a 18px
 * pitch, 12px below the card. Desktop's arrows sit beside its carousel, in
 * the canvas's generous side margins - there's no room for that here (the
 * card already spans nearly the full 393px viewport), so the same CircleArrow
 * used on desktop is instead overlaid on the card's photo, clear of the name
 * and role text below it.
 */
export default function MobPeopleCard({ people }: { people: Person[] }) {
  const [i, setI] = useState(0);
  const p = people[Math.min(i, people.length - 1)];
  const DOT = 10, DOT_GAP = 8;
  const dotsW = people.length * DOT + (people.length - 1) * DOT_GAP;
  const prev = () => setI((v) => Math.max(0, v - 1));
  const next = () => setI((v) => Math.min(people.length - 1, v + 1));
  const swipe = useSwipe(prev, next);

  return (
    <>
      <div
        {...swipe}
        style={{
          ...swipe.style,
          position: "absolute", left: "0px", top: "67px", width: "361px", height: "368px",
          borderRadius: "30px", background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)",
          overflow: "hidden",
        }}
      >
        <img
          src={p.img}
          alt=""
          style={{ position: "absolute", left: 0, top: 0, width: "361px", height: "253px", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", left: "0px", top: "253px", width: "361px", opacity: 0.2, borderTop: "1px solid #ffffff" }} />
        <div style={{ position: "absolute", left: "17px", top: "280px", width: "326px" }}>
          <div style={{ fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", lineHeight: "34px", color: "#ffffff" }}>
            {p.name}
          </div>
          <div style={{ marginTop: "9px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "18px", letterSpacing: "0.6px", textTransform: "uppercase", color: "rgba(255,255,255,0.86)" }}>
            {p.role}
          </div>
        </div>
      </div>

      {i > 0 && (
        <button
          type="button" onClick={prev} aria-label="Previous person"
          style={{ position: "absolute", left: "12px", top: "164.5px", width: "58px", height: "58px", padding: 0, border: 0, borderRadius: "999px", background: "transparent", cursor: "pointer", zIndex: 3 }}
        >
          <CircleArrow dir="left" />
        </button>
      )}
      {i < people.length - 1 && (
        <button
          type="button" onClick={next} aria-label="Next person"
          style={{ position: "absolute", left: "291px", top: "164.5px", width: "58px", height: "58px", padding: 0, border: 0, borderRadius: "999px", background: "transparent", cursor: "pointer", zIndex: 3 }}
        >
          <CircleArrow dir="right" />
        </button>
      )}

      <div style={{ position: "absolute", left: `${(361 - dotsW) / 2}px`, top: "447px", height: `${DOT}px` }}>
        {people.map((_, n) => (
          <button
            key={n}
            type="button"
            aria-label={`Show ${people[n].name}`}
            aria-current={n === i ? "true" : undefined}
            onClick={() => setI(n)}
            style={{
              position: "absolute", left: `${n * (DOT + DOT_GAP)}px`, top: 0, width: `${DOT}px`, height: `${DOT}px`,
              padding: 0, borderRadius: "50%", cursor: "pointer",
              border: n === i ? "0" : "1px solid #ffffff",
              background: n === i ? "#ffffff" : "transparent",
              opacity: n === i ? 0.8 : 1,
            }}
          />
        ))}
      </div>
    </>
  );
}
