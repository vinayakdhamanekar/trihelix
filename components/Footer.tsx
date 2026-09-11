import Link from "next/link";

/**
 * Shared footer, positioned against each page's own design canvas via `top`
 * (the logo's y). Every other piece is a fixed offset from that anchor -
 * these offsets were previously hand-copied into five separate page files
 * with small drift between them (19px vs 20px link gaps, etc). `current`
 * marks which nav link gets aria-current="page".
 *
 * Every piece carries data-no-reveal: ScrollReveal.tsx fades in below-the-fold
 * elements via an IntersectionObserver with a -12% bottom rootMargin, and
 * content sitting this close to the true bottom of the page can never scroll
 * past that shrunk trigger line - it gets opacity:0 on mount and never
 * receives .trx-in, so the copyright/social row silently never appears.
 */
const OFFSET = { tagline: 93, divider: 136, grid: 188, copyright: 376, social: 374 };

type FooterLink = "approach" | "case-studies" | "about" | "contact";

export default function Footer({ top, current }: { top: number; current?: FooterLink }) {
  const aria = (key: FooterLink) => (current === key ? { "aria-current": "page" as const } : {});

  return (
    <>
      <Link href={"/"} aria-label={"TriHelix home"} data-no-reveal="" style={{ position: "absolute", left: "100px", top: `${top}px`, display: "block", width: "242px" }}><img src={"/assets/logo-big.webp"} alt={"TriHelix"} style={{ display: "block", width: "242px" }} /></Link>
      <p data-no-reveal="" style={{ position: "absolute", left: "100px", top: `${top + OFFSET.tagline}px`, margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12.5px", lineHeight: "20px", color: "rgba(255,255,255,0.7)" }}>TriHelix is a proprietary framework of Nihilent LTD.</p>
      <div data-no-reveal="" style={{ position: "absolute", left: "100px", top: `${top + OFFSET.divider}px`, width: "1240px", height: "1px", background: "rgba(255,255,255,0.16)" }}></div>
      <div data-no-reveal="" style={{ position: "absolute", left: "100px", top: `${top + OFFSET.grid}px`, width: "1240px", display: "grid", gridTemplateColumns: "212px 786px 242px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16.5px", lineHeight: "22px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "19px" }}>
          <Link className="navlink" href={"/approach"} {...aria("approach")}>Our Approach</Link>
          <Link className="navlink" href={"/case-studies"} {...aria("case-studies")}>Case Studies</Link>
          <Link className="navlink" href={"/about"} {...aria("about")}>About Us</Link>
          <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="navlink" href={"/contact"} {...aria("contact")}>Contact Us</Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "19px" }}>
          <a className="navlink navlink-on" href={"#"}>Privacy Policy</a>
          <a className="navlink navlink-on" href={"#"}>Terms of Use</a>
          <a className="navlink navlink-on" href={"#"}>Cookie Settings</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "19px", whiteSpace: "nowrap" }}>
          <a className="navlink navlink-on" href={"#"}>Modern Slavery Act, 2015</a>
          <a className="navlink navlink-on" href={"#"}>Carbon Neutrality Statement</a>
          <a className="navlink navlink-on" href={"#"}>Carbon Reduction Plan Guidance</a>
        </div>
      </div>
      <p data-no-reveal="" style={{ position: "absolute", left: "0", top: `${top + OFFSET.copyright}px`, width: "1440px", margin: "0", textAlign: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16.3px", lineHeight: "20px", color: "rgba(255,255,255,0.86)" }}>&copy; 2026 TriHelix. All rights reserved.</p>
      <div data-no-reveal="" style={{ position: "absolute", left: "1208px", top: `${top + OFFSET.social}px`, display: "flex", alignItems: "center", gap: "22px" }}>
        <a className="social" href="https://www.linkedin.com/company/nihilent/" target="_blank" rel="noopener noreferrer" aria-label="TriHelix on LinkedIn"><img src="/assets/icon-linkedin.webp" alt="" style={{ display: "block", width: "22px" }} /></a>
        <a className="social" href="mailto:Info@nihilent.com" aria-label="Email Info@nihilent.com"><img src="/assets/icon-email.webp" alt="" style={{ display: "block", width: "22px" }} /></a>
        <a className="social" href="tel:+912039846100" aria-label="Call +91 (20) 3984 6100"><img src="/assets/icon-phone.webp" alt="" style={{ display: "block", width: "20px" }} /></a>
      </div>
    </>
  );
}
