import type { Metadata } from "next";
import { Lexend, IBM_Plex_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

/** Per the 10-Sep review: the primary/display face is Bricolage Grotesque and
 *  the secondary/body face is IBM Plex Sans. Lexend stays loaded only as the
 *  metric-compatible fallback while Bricolage streams in. */
const lexend = Lexend({ variable: "--font-lexend", subsets: ["latin"], weight: ["300","400","500","600","700"], display: "swap" });
const plex = IBM_Plex_Sans({ variable: "--font-plex", subsets: ["latin"], weight: ["300","400","500","600","700"], display: "swap" });
/* The mobile 3.0 frames set their display type in Bricolage Grotesque. It needs
   the "opsz" axis or headlines come out at the wrong optical size. */
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], axes: ["opsz"], display: "swap" });

export const metadata: Metadata = {
  title: "TriHelix — Clarity. Delivered.",
  description: "TriHelix identifies where AI can actually impact revenue, cost or risk — with precision.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lexend.variable} ${plex.variable} ${bricolage.variable}`}>
      <body style={{ fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
