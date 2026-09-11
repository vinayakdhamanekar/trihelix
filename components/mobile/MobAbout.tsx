"use client";
import MobileChrome from "@/components/mobile/MobileChrome";
import { leaders, regional, experts } from "@/lib/about-data";
import MobPeopleCard from "@/components/mobile/MobPeopleCard";
import Link from "next/link";
import { useStageFit } from "@/components/useStageFit";

/** Generated from "TRX About Us Mobile 3.0.fig" — a 393x6036 mobile design canvas.
 *  Every box, colour, font size and line break is read out of the Figma file;
 *  nothing here is eyeballed. Regenerate with v3-mobfig/mobgen.mjs. */
export default function MobAbout({ bare = false }: { bare?: boolean }) {
  const { stageRef, artRef } = useStageFit(393, 6036);
  return (
    <div ref={stageRef} style={{ position: "relative", width: "100%", overflow: "hidden", background: "#000000" }}>
      <div ref={artRef} style={{ position: "absolute", top: 0, left: 0, width: 393, height: 6036, transformOrigin: "0 0", color: "#ffffff", fontFamily: "var(--font-plex), system-ui, sans-serif" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "393px", height: "6036px", background: "#000000", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "1285px", top: "4907px", width: "2137px", height: "1837px", transform: "matrix(0,-1,-1,0,0,0)", transformOrigin: "0 0" }}>
            <img src="/assets/mob/about-4625087f0d-2137x1837.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: "393px", top: "0px", width: "393px", height: "677px", transform: "matrix(-1,0,0,1,0,0)", transformOrigin: "0 0" }}>
            <img src="/assets/mob/about-4625087f0d-393x677.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "29px", width: "89px", height: "33px" }}>
            <Link data-logolink href={"/"} aria-label={"TriHelix home"} style={{ display: "block", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "89px", height: "33px" }}>
              <img src="/assets/mob/about-d0da487457-89x33.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
            </Link>
          </div>
          <div style={{ position: "absolute", left: "349px", top: "30px", width: "28px", height: "18px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "28px", borderTop: "2px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "9px", width: "28px", borderTop: "2px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "18px", width: "28px", borderTop: "2px solid #ffffff" }} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "121px", width: "361px", height: "488px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "488px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "488px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "296px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 300, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Built from `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "41px", height: "48px", lineHeight: "48px" }}>{`experience. `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "82px", height: "48px", lineHeight: "48px" }}>{`Created for what `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "123px", height: "48px", lineHeight: "48px" }}>{`comes next.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "204px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`TriHelix brings together the depth of `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`decades of enterprise transformation `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`experience with a team built to rethink what `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "69px", height: "23.4px", lineHeight: "23.4px" }}>{`transformation can mean in the age of AI.`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "320px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Clarity. We work with organisations facing `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`consequential questions about technology, `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`business and change — bringing experienced `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`minds, diverse perspectives and a practical `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`understanding of how enterprises really work.`}</div>
                  <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}></div>
                  <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 500, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`We exist to help organisations navigate what `}</span></div>
                  <div style={{ position: "absolute", left: "0px", top: "147px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 500, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`comes next with greater confidence.`}</span></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "689px", width: "361px", height: "791px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "102px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "90px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                <div style={{ position: "absolute", left: "21px", top: "11px", width: "48px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0.24px", top: "0px", height: "16px", lineHeight: "16px" }}>{`The Why`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Why we exist`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "134px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`AI has changed what organizations can `}</div>
              <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`imagine.`}</div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "212px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`But for enterprise leaders, the difficult questions `}</div>
              <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`remain: What is worth pursuing? `}</div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "286px", width: "360px", height: "200px", borderRadius: "30px" }}>
              <img src="/assets/mob/about-76baeda96c-360x200.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", borderRadius: "30px" }} />
            </div>
            <div style={{ position: "absolute", left: "0px", top: "518px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Where should we focus? What will create real `}</div>
              <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`value? And how do we make change work in the `}</div>
              <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`reality of a complex organisation?`}</div>
              <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{``}</div>
              <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`TriHelix was created to help answer those `}</div>
              <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`questions.`}</div>
              <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{`Our experience has taught us that meaningful `}</div>
              <div style={{ position: "absolute", left: "0px", top: "147px", height: "21px", lineHeight: "21px" }}>{`transformation rarely comes from technology `}</div>
              <div style={{ position: "absolute", left: "0px", top: "168px", height: "21px", lineHeight: "21px" }}>{`alone. It requires an understanding of the `}</div>
              <div style={{ position: "absolute", left: "0px", top: "189px", height: "21px", lineHeight: "21px" }}>{`business, the people, the processes and the `}</div>
              <div style={{ position: "absolute", left: "0px", top: "210px", height: "21px", lineHeight: "21px" }}>{`realities that sit behind every major decision.`}</div>
              <div style={{ position: "absolute", left: "0px", top: "231px", height: "21px", lineHeight: "21px" }}>{``}</div>
              <div style={{ position: "absolute", left: "0px", top: "252px", height: "21px", lineHeight: "21px" }}>{`That's the perspective we bring to the table.`}</div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "2320px", width: "361px", height: "411px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`TriHelix combines that `}</div>
              <div style={{ position: "absolute", left: "0px", top: "31px", height: "31.2px", lineHeight: "31.2px" }}>{`institutional depth with a fresh `}</div>
              <div style={{ position: "absolute", left: "0px", top: "62px", height: "31.2px", lineHeight: "31.2px" }}>{`perspective on the AI era.`}</div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "109px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "125px", width: "361px", height: "60px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`25+ Years`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "39px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Enterprise transformation experience`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "201px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "217px", width: "361px", height: "81px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`50+ Countries`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "39px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Global experience across markets`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "314px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "330px", width: "361px", height: "81px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`Deep Expertise`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "39px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Business, technology, design, data and `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`transformation `}</div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "1560px", width: "361px", height: "680px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "150px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "127px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                <div style={{ position: "absolute", left: "21px", top: "11px", width: "85px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0.15px", top: "0px", height: "16px", lineHeight: "16px" }}>{`The Experience`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`The depth behind `}</div>
                <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`Trihelix`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "182px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`A new organisation with 25+ years  `}</div>
              <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`behind it. `}</div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "260px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`TriHelix is part of Nihilent, a global `}</div>
              <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`technology and consulting organisation with `}</div>
              <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`more than 25 years of enterprise `}</div>
              <div style={{ position: "absolute", left: "0px", top: "69px", height: "23.4px", lineHeight: "23.4px" }}>{`transformation experience across 50+ `}</div>
              <div style={{ position: "absolute", left: "0px", top: "92px", height: "23.4px", lineHeight: "23.4px" }}>{`countries.`}</div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "407px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`That heritage gives us something that cannot be `}</div>
              <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`manufactured quickly: experience at scale.`}</div>
              <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{``}</div>
              <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`Across decades of transformation, our teams have `}</div>
              <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`worked through changing technologies, evolving `}</div>
              <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`business models and increasingly complex `}</div>
              <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{`enterprise environments. We've seen `}</div>
              <div style={{ position: "absolute", left: "0px", top: "147px", height: "21px", lineHeight: "21px" }}>{`organisations transform successfully — and we've `}</div>
              <div style={{ position: "absolute", left: "0px", top: "168px", height: "21px", lineHeight: "21px" }}>{`seen where transformation gets stuck.`}</div>
              <div style={{ position: "absolute", left: "0px", top: "189px", height: "21px", lineHeight: "21px" }}>{``}</div>
              <div style={{ position: "absolute", left: "0px", top: "210px", height: "21px", lineHeight: "21px" }}>{`That experience shapes how we think, the `}</div>
              <div style={{ position: "absolute", left: "0px", top: "231px", height: "21px", lineHeight: "21px" }}>{`questions we ask and the people we bring into the `}</div>
              <div style={{ position: "absolute", left: "0px", top: "252px", height: "21px", lineHeight: "21px" }}>{`room.`}</div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "1560px", width: "361px", height: "680px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "150px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "127px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                <div style={{ position: "absolute", left: "21px", top: "11px", width: "85px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0.15px", top: "0px", height: "16px", lineHeight: "16px" }}>{`The Experience`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`The depth behind `}</div>
                <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`Trihelix`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "182px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`A new organisation with 25+ years  `}</div>
              <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`behind it. `}</div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "260px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`TriHelix is part of Nihilent, a global `}</div>
              <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`technology and consulting organisation with `}</div>
              <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`more than 25 years of enterprise `}</div>
              <div style={{ position: "absolute", left: "0px", top: "69px", height: "23.4px", lineHeight: "23.4px" }}>{`transformation experience across 50+ `}</div>
              <div style={{ position: "absolute", left: "0px", top: "92px", height: "23.4px", lineHeight: "23.4px" }}>{`countries.`}</div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "407px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`That heritage gives us something that cannot be `}</div>
              <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`manufactured quickly: experience at scale.`}</div>
              <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{``}</div>
              <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`Across decades of transformation, our teams have `}</div>
              <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`worked through changing technologies, evolving `}</div>
              <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`business models and increasingly complex `}</div>
              <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{`enterprise environments. We've seen `}</div>
              <div style={{ position: "absolute", left: "0px", top: "147px", height: "21px", lineHeight: "21px" }}>{`organisations transform successfully — and we've `}</div>
              <div style={{ position: "absolute", left: "0px", top: "168px", height: "21px", lineHeight: "21px" }}>{`seen where transformation gets stuck.`}</div>
              <div style={{ position: "absolute", left: "0px", top: "189px", height: "21px", lineHeight: "21px" }}>{``}</div>
              <div style={{ position: "absolute", left: "0px", top: "210px", height: "21px", lineHeight: "21px" }}>{`That experience shapes how we think, the `}</div>
              <div style={{ position: "absolute", left: "0px", top: "231px", height: "21px", lineHeight: "21px" }}>{`questions we ask and the people we bring into the `}</div>
              <div style={{ position: "absolute", left: "0px", top: "252px", height: "21px", lineHeight: "21px" }}>{`room.`}</div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "2811px", width: "361px", height: "344px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "150px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "104px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                <div style={{ position: "absolute", left: "21px", top: "11px", width: "62px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0.34px", top: "0px", height: "16px", lineHeight: "16px" }}>{`The People`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`The People Behind `}</div>
                <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`TriHelix`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "182px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Experience matters. So does who you bring `}</div>
              <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`into the room.`}</div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "260px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`TriHelix is built around people with deep `}</div>
              <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`experience across business transformation, `}</div>
              <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`technology, AI, design, strategy and enterprise `}</div>
              <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`change. `}</div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "3235px", width: "361px", height: "487px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "31px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`Global Leadership`}</div>
              </div>
            </div>
            <MobPeopleCard people={leaders} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "3802px", width: "361px", height: "509px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "31px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`Regional Business Heads`}</div>
              </div>
            </div>
            <MobPeopleCard people={regional} />
          </div>
          <div style={{ position: "absolute", left: "14px", top: "4391px", width: "361px", height: "486px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "31px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`TriHelix Experts`}</div>
              </div>
            </div>
            <MobPeopleCard people={experts} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "4972px", width: "361px", height: "458px", borderRadius: "30px" }}>
            <img src="/assets/mob/about-e4483f013f-361x458.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", borderRadius: "30px" }} />
            <div style={{ position: "absolute", left: "20px", top: "60px", width: "321px", height: "239px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Let’s talk about `}</div>
                <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`what comes `}</div>
                <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`next.`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "170px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`The right transformation opportunity `}</div>
                <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`may not obe obvious yet.`}</div>
                <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`That’s where a conversation begins.`}</div>
              </div>
            </div>
            <a href="/contact" style={{ position: "absolute", left: "20px", top: "339px", width: "256px", height: "41px", borderRadius: "30px", background: "#ffffff", textDecoration: "none" }}>
              <div style={{ position: "absolute", left: "20px", top: "10px", width: "80px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#000000", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your 60-minute call`}</div>
              </div>
            </a>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "5502px", width: "362px", height: "485.81px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "153.09px", height: "61.81px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "131.34px", height: "48.42px", overflow: "hidden" }}>
                <Link data-logolink href={"/"} aria-label={"TriHelix home"} style={{ display: "block", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "131.34px", height: "48.42px" }}>
                  <img src="/assets/mob/about-d0da487457-131x48.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                </Link>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "53.81px", width: "153.09px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "6.47px", color: "#cfcfcf", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "8.41px", lineHeight: "8.41px" }}>{`TriHelix is a proprietary framework of Nihilent LTD.`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "89.81px", width: "362px", height: "0px" }}>
              <div style={{ position: "absolute", left: "362px", top: "0px", width: "362px", transform: "matrix(-1,0,0,-1,0,0)", transformOrigin: "0 0", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
            </div>
            <div style={{ position: "absolute", left: "0px", top: "117.81px", width: "362px", height: "144px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "173px", height: "144px" }}>
                <Link data-footlink href={"/approach"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "77px", height: "36px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "10px", width: "77px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Our Approach`}</div>
                  </div>
                </Link>
                <Link data-footlink href={"/case-studies"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "36px", width: "173px", height: "36px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "10px", width: "71px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Case Studies`}</div>
                  </div>
                </Link>
                <Link data-footlink href={"/about"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "72px", width: "173px", height: "36px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "10px", width: "51px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`About Us`}</div>
                  </div>
                </Link>
                <Link data-footlink href={"/contact"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "108px", width: "173px", height: "36px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "10px", width: "60px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Contact Us`}</div>
                  </div>
                </Link>
              </div>
              <div style={{ position: "absolute", left: "190px", top: "0px", width: "174px", height: "108px" }}>
                <a data-footlink href={"#"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "174px", height: "36px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "10px", width: "76px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}><span style={{ fontWeight: 500, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "12px" }}>{`Privacy Policy`}</span></div>
                  </div>
                </a>
                <a data-footlink href={"#"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "36px", width: "174px", height: "36px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "10px", width: "72px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}><span style={{ fontWeight: 500, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "12px" }}>{`Terms of Use`}</span></div>
                  </div>
                </a>
                <a data-footlink href={"#"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "72px", width: "174px", height: "36px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "10px", width: "86px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}><span style={{ fontWeight: 500, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "12px" }}>{`Cookie Settings`}</span></div>
                  </div>
                </a>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "289.81px", width: "181px", height: "108px" }}>
              <a data-footlink href={"#"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "181px", height: "36px" }}>
                <div style={{ position: "absolute", left: "0px", top: "10px", width: "142px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}><span style={{ fontWeight: 500, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "12px" }}>{`Modern Slavery Act, 2015`}</span></div>
                </div>
              </a>
              <a data-footlink href={"#"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "36px", width: "181px", height: "36px" }}>
                <div style={{ position: "absolute", left: "0px", top: "10px", width: "158px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}><span style={{ fontWeight: 500, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "12px" }}>{`Carbon Neutrality Statement`}</span></div>
                </div>
              </a>
              <a data-footlink href={"#"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "72px", width: "181px", height: "36px" }}>
                <div style={{ position: "absolute", left: "0px", top: "10px", width: "181px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}><span style={{ fontWeight: 500, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "12px" }}>{`Carbon Reduction Plan Guidance`}</span></div>
                </div>
              </a>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "425.81px", width: "197px", height: "60px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "132px", height: "28px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "28px", height: "28px", overflow: "hidden" }}>
                  <img src="/assets/icon-linkedin.webp" alt="" style={{ position: "absolute", left: "0px", top: "0px", width: "28px", height: "28px" }} />
                </div>
                <div style={{ position: "absolute", left: "52px", top: "0px", width: "28px", height: "28px", overflow: "hidden" }}>
                  <img src="/assets/icon-email.webp" alt="" style={{ position: "absolute", left: "0px", top: "0px", width: "28px", height: "28px" }} />
                </div>
                <div style={{ position: "absolute", left: "104px", top: "0px", width: "28px", height: "28px", overflow: "hidden" }}>
                  <img src="/assets/icon-phone.webp" alt="" style={{ position: "absolute", left: "0px", top: "0px", width: "28px", height: "28px" }} />
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "44px", width: "197px", height: "16px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "197px", height: "16px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "197px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`© 2026 TriHelix. All rights reserved.`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!bare && <MobileChrome current="/about" />}
    </div>
  );
}
