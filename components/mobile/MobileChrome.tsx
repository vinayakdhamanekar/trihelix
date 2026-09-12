"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

/**
 * The two mobile overlays from the 10-Sep review: the hamburger menu that
 * slides in from the right, and the "Get in touch" popup.
 *
 * Both sit outside the scaled 393 canvas so they can be `position: fixed` —
 * inside it, the canvas's own transform would turn `fixed` into `absolute` and
 * the panel would scroll away with the page.
 *
 * The tap target is pinned to the top-right corner rather than to canvas
 * coordinates, so it stays over the drawn hamburger at any phone width.
 */
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "Our Approach" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About Us" },
];

export default function MobileChrome({ current }: { current?: string }) {
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);

  // the page must not scroll behind an open overlay
  useEffect(() => {
    const lock = menu || contact;
    const prev = document.body.style.overflow;
    if (lock) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [menu, contact]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenu(false); setContact(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* sits over the hamburger the canvas draws */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={menu}
        onClick={() => setMenu(true)}
        style={{
          position: "fixed", top: 0, right: 0, width: 68, height: 68,
          border: 0, background: "transparent", cursor: "pointer", zIndex: 40,
        }}
      />

      {/* ---------------------------------------------------------- menu */}
      {menu && (
        <>
          <div
            onClick={() => setMenu(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 50 }}
          />
          <nav
            aria-label="Main"
            style={{
              position: "fixed", top: 0, right: 0, bottom: 0, width: "72%", maxWidth: 300,
              background: "#08080e", borderTopLeftRadius: 18, borderBottomLeftRadius: 18,
              zIndex: 51, padding: "24px 0 32px",
              boxShadow: "-24px 0 60px rgba(0,0,0,0.5)",
              animation: "trx-slide .28s cubic-bezier(.22,.61,.36,1) both",
              display: "flex", flexDirection: "column",
            }}
          >
            <button
              type="button" aria-label="Close menu" onClick={() => setMenu(false)}
              style={{
                alignSelf: "flex-end", marginRight: 22, width: 34, height: 34, padding: 0,
                border: 0, background: "transparent", color: "#ffffff", cursor: "pointer",
              }}
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>

            <div style={{ marginTop: 26, padding: "0 22px" }}>
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenu(false)}
                  aria-current={current === l.href ? "page" : undefined}
                  style={{
                    display: "block", padding: "18px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.24)",
                    fontFamily: "var(--font-plex), system-ui, sans-serif",
                    fontSize: 17, lineHeight: "24px", color: "#ffffff",
                    textDecoration: current === l.href ? "underline" : "none",
                    textUnderlineOffset: 5,
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={() => { setMenu(false); setContact(true); }}
              style={{
                margin: "34px 0 0 22px", width: 150, height: 44, border: 0, borderRadius: 999,
                background: "#4097ff", color: "#ffffff", cursor: "pointer",
                fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: 16,
              }}
            >
              Contact Us
            </button>
          </nav>
        </>
      )}

      {/* ------------------------------------------------------- contact */}
      {contact && (
        <>
          <div
            onClick={() => setContact(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 60,
              background: "rgba(4,4,12,0.55)",
              backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            }}
          />
          <div
            role="dialog" aria-modal="true" aria-label="Get in touch"
            style={{
              position: "fixed", left: 16, right: 16, top: 24, bottom: 24,
              display: "flex", flexDirection: "column", justifyContent: "center",
              overflowY: "auto", zIndex: 61,
              borderRadius: 26, padding: "26px 22px 30px", color: "#17181a",
              background: "linear-gradient(160deg, #f2f5f9 0%, #dde6f0 46%, #b7cadf 100%)",
              boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
              animation: "trx-pop .34s cubic-bezier(.22,.61,.36,1) both",
            }}
          >
            <button
              type="button" aria-label="Close" onClick={() => setContact(false)}
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
        </>
      )}
    </>
  );
}
