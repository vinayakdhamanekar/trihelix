"use client";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

/**
 * "Schedule your call" opens the form where you already are, rather than
 * navigating to /contact and leaving you wherever you had scrolled to.
 *
 * Any CTA raises a `trx:contact` event; this listens for it. The CTAs keep
 * their real href, so they still work with JavaScript off and still read as
 * links to a crawler.
 *
 * It sits near the top of the viewport, as asked in the 10-Sep review.
 */
export default function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("trx:contact", show);
    return () => window.removeEventListener("trx:contact", show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 90,
          background: "rgba(4,4,12,0.55)",
          backdropFilter: "blur(9px) saturate(120%)",
          WebkitBackdropFilter: "blur(9px) saturate(120%)",
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get in touch"
        style={{
          position: "fixed", zIndex: 91,
          // centred by margin, not by transform: the entrance animation owns
          // `transform` and would wipe a translateX out from under it
          left: 0, right: 0, margin: "0 auto", top: 40,
          width: "min(1240px, calc(100vw - 32px))",
          maxHeight: "calc(100svh - 80px)", overflowY: "auto",
          borderRadius: 26, color: "#17181a",
          backgroundColor: "#eef0f2",
          backgroundImage: "url('/assets/contact-modal-bg.webp')",
          backgroundSize: "cover", backgroundPosition: "center",
          boxShadow: "0 40px 90px rgba(0,0,0,0.45)",
          animation: "trx-pop .34s cubic-bezier(.22,.61,.36,1) both",
        }}
      >
        <button
          type="button" aria-label="Close" onClick={() => setOpen(false)}
          style={{
            position: "absolute", right: 26, top: 24, width: 34, height: 34, padding: 0,
            border: 0, background: "transparent", color: "#17181a", cursor: "pointer",
          }}
        >
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
        <div className="trx-modal-grid">
          {/* Review 10-Sep: the left column carries the address and the
              response promise, and sits centred against the form. */}
          <div style={{ alignSelf: "center" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 52, lineHeight: "62px", fontWeight: 400, letterSpacing: "0.2px" }}>
              Get in touch
            </div>
            <p style={{ margin: "10px 0 0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 16, lineHeight: "22px", color: "#3d4045" }}>
              Book your free 60-minute conversation.
            </p>
            <p style={{ margin: "6px 0 0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15, lineHeight: "21px", fontWeight: 600, color: "#17181a" }}>
              We reply within one business day.
            </p>
            <div style={{ display: "flex", gap: 21, marginTop: 34, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15, lineHeight: "21px", color: "#2b2e33" }}>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: 3 }}>
                <path d="M8 0.9C4.2 0.9 1.1 4 1.1 7.8c0 5.2 6.1 11 6.4 11.2.3.3.7.3 1 0 .3-.2 6.4-6 6.4-11.2C14.9 4 11.8.9 8 .9Zm0 10.2a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6Z" fill="#2b2e33" />
              </svg>
              <div>
                <div style={{ fontWeight: 600 }}>Nihilent Ltd.</div>
                <div>4th Floor, D&rsquo; Block, WEIKFIELD IT CITI</div>
                <div>INFO PARK, Pune - Nagar Rd, Sakore</div>
                <div>Nagar, Viman Nagar, Pune, Maharashtra</div>
                <div>411014</div>
              </div>
            </div>
          </div>
          <ContactForm layout="modal" />
        </div>
      </div>
    </>
  );
}
