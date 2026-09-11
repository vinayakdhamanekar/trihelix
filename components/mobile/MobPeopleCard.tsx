"use client";
import { useState } from "react";
import useSwipe from "@/components/useSwipe";
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
 * portrait 360x253, a 20%-white rule at its foot, and 16px dots on a 36px
 * pitch centred under the card.
 */
export default function MobPeopleCard({ people }: { people: Person[] }) {
  const [i, setI] = useState(0);
  const p = people[Math.min(i, people.length - 1)];
  const dotsW = people.length * 16 + (people.length - 1) * 20;
  const swipe = useSwipe(
    () => setI((v) => Math.max(0, v - 1)),
    () => setI((v) => Math.min(people.length - 1, v + 1)),
  );

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

      <div style={{ position: "absolute", left: `${(361 - dotsW) / 2}px`, top: "471px", height: "16px" }}>
        {people.map((_, n) => (
          <button
            key={n}
            type="button"
            aria-label={`Show ${people[n].name}`}
            aria-current={n === i ? "true" : undefined}
            onClick={() => setI(n)}
            style={{
              position: "absolute", left: `${n * 36}px`, top: 0, width: "16px", height: "16px",
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
