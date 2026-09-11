"use client";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import MobAbout from "@/components/mobile/MobAbout";

/**
 * /contact on a phone, per the 10-Sep mobile review:
 *
 *   - "Get in touch" and its subtext live inside the popup form, not above it
 *   - the page behind is blurred, the same way the desktop popup does it
 *   - the card wears the gradient artwork from the drive, not plain white
 *   - the address block is gone
 *
 * It mirrors the desktop, where /contact is the About page with the popup over
 * it. MobAbout is rendered `bare` so its own menu chrome stays out of the way.
 */
export default function MobContact() {
  const router = useRouter();

  return (
    <div style={{ position: "relative", background: "#04040c", minHeight: "100svh" }}>
      <div aria-hidden style={{ filter: "blur(9px)", pointerEvents: "none" }}>
        <MobAbout bare />
      </div>

      <div
        style={{
          position: "fixed", inset: 0, zIndex: 60,
          background: "rgba(4,4,12,0.55)",
          backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
        }}
        onClick={() => router.push("/")}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get in touch"
        style={{
          position: "fixed", left: 16, right: 16, top: 24, bottom: 24,
          // Not `justify-content: center`. On a phone the form is taller than
          // the card, and a centred flex column in a scroll container pushes
          // its own top out of reach - the card opened already scrolled past
          // the "Get in touch" title. Top-aligned, it opens at the title.
          display: "flex", flexDirection: "column", justifyContent: "flex-start",
          overflowY: "auto", overscrollBehavior: "contain", zIndex: 61,
          borderRadius: 26, padding: "26px 22px 30px", color: "#17181a",
          backgroundColor: "#eef0f2",
          backgroundImage: "url('/assets/contact-modal-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
          animation: "trx-pop .34s cubic-bezier(.22,.61,.36,1) both",
        }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => router.push("/")}
          style={{
            position: "absolute", right: 18, top: 18, width: 32, height: 32, padding: 0,
            border: 0, background: "transparent", color: "#17181a", cursor: "pointer",
          }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        <div style={{ fontFamily: "var(--font-bricolage), var(--font-lexend), sans-serif", fontSize: 34, lineHeight: "42px", fontWeight: 300 }}>
          Get in touch
        </div>
        <p style={{ margin: "6px 0 22px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: 15, lineHeight: "22px", color: "#3d4045" }}>
          Book your free 60-minute conversation.
        </p>
        <ContactForm layout="mobile" />
      </div>
    </div>
  );
}
