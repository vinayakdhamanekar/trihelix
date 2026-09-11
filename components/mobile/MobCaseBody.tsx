import Rich from "@/components/Rich";
import type { ReactNode } from "react";

/**
 * The expanded body of a case study on a phone.
 *
 * Case 1 was authored in the mobile design file, so its body is baked into
 * MobCases.tsx at exact coordinates. Cases 2 and 3 were never drawn expanded —
 * this renders them from lib/case-studies-data.ts instead, reproducing case 1's
 * rhythm exactly: 361px column, a hairline on top, 21px before the heading,
 * 43px between blocks, label at 18/23.4 with its copy 33px below at 16/21.
 *
 * It lays out in normal flow rather than absolute coordinates, because the copy
 * length differs per case. MobCases measures the rendered height and grows the
 * canvas by that much.
 */

const PLEX = "var(--font-plex), system-ui, sans-serif";
const BRIC = "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif";
const GAP = 43;

function Head({ children, caps }: { children: ReactNode; caps?: boolean }) {
  return (
    <div
      style={{
        fontFamily: BRIC, fontWeight: 400, fontSize: "28px", lineHeight: "34px",
        color: "#ffffff", marginBottom: `${GAP}px`,
        textTransform: caps ? "capitalize" : undefined,
      }}
    >
      {children}
    </div>
  );
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: `${GAP}px` }}>
      <div style={{ fontFamily: PLEX, fontWeight: 400, fontSize: "18px", lineHeight: "23.4px", color: "#ffffff" }}>
        {label}
      </div>
      <div style={{ marginTop: "10px", fontFamily: PLEX, fontWeight: 400, fontSize: "16px", lineHeight: "21px", color: "#ffffff" }}>
        {children}
      </div>
    </div>
  );
}

type CaseLike = {
  sectionHead: unknown;
  problem: unknown;
  response: unknown;
  discovered: unknown;
  validated: unknown;
  delivered: unknown;
  before: unknown;
  after: unknown;
  takeawayBold: unknown;
  takeawayBody: unknown;
};

export default function MobCaseBody({ c }: { c: CaseLike }) {
  const rule = { height: "1px", background: "#ffffff", opacity: 0.6 } as const;

  return (
    <div style={{ width: "361px" }}>
      <div style={rule} />
      <div style={{ paddingTop: "21px" }}>
        <Head><Rich v={c.sectionHead} /></Head>

        <Block label="THE PROBLEM"><Rich v={c.problem} /></Block>
        <Block label="OUR RESPONSE"><Rich v={c.response} /></Block>

        <Head caps>How Trihelix shaped the engagement</Head>

        <Block label="WHAT WE DISCOVERED"><Rich v={c.discovered} /></Block>
        <Block label="HOW WE VALIDATED"><Rich v={c.validated} /></Block>
        <Block label="WHAT WE DELIVERED"><Rich v={c.delivered} /></Block>

        <div style={{ marginBottom: `${GAP}px` }}>
          <div style={{ fontFamily: PLEX, fontWeight: 400, fontSize: "18px", lineHeight: "23.4px", color: "#ffffff" }}>
            WHAT CHANGED
          </div>
          {([["Before", c.before], ["After", c.after]] as const).map(([k, v]) => (
            <div key={k} style={{ marginTop: "25px" }}>
              <div style={{ fontFamily: PLEX, fontWeight: 600, fontSize: "18px", lineHeight: "23.4px", color: "#ffffff" }}>{k}</div>
              <div style={{ marginTop: "6px", fontFamily: PLEX, fontWeight: 400, fontSize: "16px", lineHeight: "21px", color: "#ffffff" }}>
                <Rich v={v} />
              </div>
            </div>
          ))}
        </div>

        <div style={rule} />
        <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
          <div style={{ fontFamily: PLEX, fontWeight: 400, fontSize: "18px", lineHeight: "23.4px", color: "#ffffff" }}>
            THE CXO TAKEAWAY
          </div>
          <div style={{ marginTop: "25px", fontFamily: PLEX, fontWeight: 600, fontSize: "18px", lineHeight: "23.4px", color: "#ffffff" }}>
            <Rich v={c.takeawayBold} />
          </div>
          <div style={{ marginTop: "6px", fontFamily: PLEX, fontWeight: 400, fontSize: "16px", lineHeight: "21px", color: "#ffffff" }}>
            <Rich v={c.takeawayBody} />
          </div>
        </div>
        <div style={rule} />
      </div>
    </div>
  );
}
