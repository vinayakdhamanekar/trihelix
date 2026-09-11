"use client";
import MobileChrome from "@/components/mobile/MobileChrome";
import { useState } from "react";
import Link from "next/link";
import { useStageFit } from "@/components/useStageFit";

/** Generated from "TRX Approach Mobile 3.0.fig" — a 393x9940 mobile design canvas.
 *  Every box, colour, font size and line break is read out of the Figma file;
 *  nothing here is eyeballed. Regenerate with v3-mobfig/mobgen.mjs. */
export default function MobApproach({ bare = false }: { bare?: boolean }) {
  const [apOpen, setApOpen] = useState(false);
  const { stageRef, artRef } = useStageFit(393, apOpen ? 9940 : 9940 - 697);
  return (
    <div ref={stageRef} style={{ position: "relative", width: "100%", overflow: "hidden", background: "#000000" }}>
      <div ref={artRef} style={{ position: "absolute", top: 0, left: 0, width: 393, height: apOpen ? 9940 : 9940 - 697, transformOrigin: "0 0", color: "#ffffff", fontFamily: "var(--font-plex), system-ui, sans-serif" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "393px", height: "9940px", background: "#000000", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "895px", top: "0px", width: "895px", height: "2152px", transform: "matrix(-1,0,0,1,0,0)", transformOrigin: "0 0" }}>
            <img src="/assets/mob/approach-880480b78c-895x2152.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "29px", width: "89px", height: "33px" }}>
            <Link data-logolink href={"/"} aria-label={"TriHelix home"} style={{ display: "block", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "89px", height: "33px" }}>
              <img src="/assets/mob/approach-d0da487457-89x33.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
            </Link>
          </div>
          <div style={{ position: "absolute", left: "346px", top: "30px", width: "28px", height: "18px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "28px", borderTop: "2px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "9px", width: "28px", borderTop: "2px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "18px", width: "28px", borderTop: "2px solid #ffffff" }} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "121px", width: "361px", height: "653.32px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "498.32px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "498.32px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "183px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 300, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Don’t start with the `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "41px", height: "48px", lineHeight: "48px" }}>{`wrong problem.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "114px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Organizations often look for an AI solution `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`before understanding where the actual `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`problem lies.`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "207px", width: "362px", height: "99.32px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "78px", height: "82px" }}>
                    <div style={{ position: "absolute", left: "4px", top: "0px", width: "70px", height: "66px" }}>
                      <img src="/assets/mob/approach-b4ca0dbb5a-70x66.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", left: "0px", top: "66px", width: "78px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "19.15px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Signals`}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "98px", top: "0px", width: "75px", height: "82px" }}>
                    <div style={{ position: "absolute", left: "2.5px", top: "0px", width: "70px", height: "66px" }}>
                      <img src="/assets/mob/approach-b4ca0dbb5a-70x66.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", left: "0px", top: "66px", width: "75px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "19.54px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Clarity`}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "193px", top: "0px", width: "75px", height: "83px" }}>
                    <div style={{ position: "absolute", left: "-0.5px", top: "0px", width: "76px", height: "67px" }}>
                      <img src="/assets/mob/approach-b4ca0dbb5a-76x67.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", left: "0px", top: "67px", width: "75px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "14px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Decision`}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "288px", top: "0px", width: "74px", height: "99.32px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "74px", height: "67.32px" }}>
                      <img src="/assets/mob/approach-b4ca0dbb5a-74x67.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", left: "0px", top: "67.32px", width: "74px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "13.38px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Realised `}</div>
                      <div style={{ position: "absolute", left: "21.62px", top: "16px", height: "16px", lineHeight: "16px" }}>{`Value`}</div>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "330.32px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`The friction may be in people, workflows, or `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`technology. TriHelix starts by detecting that `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`friction.  `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{` `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`We understand what is getting in the way of the `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`business outcome first. Only then do `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{`we determine whether AI is the right answer, or `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "147px", height: "21px", lineHeight: "21px" }}>{`whether the better answer lies elsewhere.`}</div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "530.32px", width: "361px", height: "123px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`AI-enabled where it matters. Human-led, `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`always.`}</div>
              </div>
              <a href="/contact" style={{ position: "absolute", left: "0px", top: "82px", width: "175px", height: "41px", borderRadius: "30px", background: "#4097ff", textDecoration: "none" }}>
                <div style={{ position: "absolute", left: "20px", top: "10px", width: "80px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your call`}</div>
                </div>
              </a>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "854.32px", width: "361px", height: "1078px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "466px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "198px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "91px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                  <div style={{ position: "absolute", left: "21px", top: "11px", width: "49px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0.18px", top: "0px", height: "16px", lineHeight: "16px" }}>{`The Idea`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Diagnose the `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`friction before you `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`deploy the AI`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "230px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", textTransform: "uppercase", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`TriHelix is enterprise `}</div>
                <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`transformation, built on AI. `}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "308px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`But we never lead with AI.`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "361px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`We diagnose where people, workflow and `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`technology actually break. Only then do we bring `}</div>
                <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`AI to the friction that deserves it. `}</div>
                <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{` Most transformations invert this, starting with the `}</div>
                <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`technology and working backward to justify it`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "522px", width: "330px", height: "208px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "172px", height: "31px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "172px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`How most firms work`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "47px", width: "330px", height: "61px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
                <div style={{ position: "absolute", left: "20px", top: "20px", width: "283px", height: "21px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "283px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{` AI → Use Case → Automation → People`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "124px", width: "330px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "8px", top: "0px", height: "21px", lineHeight: "21px" }}>{"\u2022"}</div>
                <div style={{ position: "absolute", left: "24px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Start with an AI product or platform `}</div>
                <div style={{ position: "absolute", left: "8px", top: "21px", height: "21px", lineHeight: "21px" }}>{"\u2022"}</div>
                <div style={{ position: "absolute", left: "24px", top: "21px", height: "21px", lineHeight: "21px" }}>{`Hunt for a use case to justify it `}</div>
                <div style={{ position: "absolute", left: "8px", top: "42px", height: "21px", lineHeight: "21px" }}>{"\u2022"}</div>
                <div style={{ position: "absolute", left: "24px", top: "42px", height: "21px", lineHeight: "21px" }}>{`Automate the existing workflow as-is `}</div>
                <div style={{ position: "absolute", left: "8px", top: "63px", height: "21px", lineHeight: "21px" }}>{"\u2022"}</div>
                <div style={{ position: "absolute", left: "24px", top: "63px", height: "21px", lineHeight: "21px" }}>{`Discover the people problem too late `}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "786px", width: "330px", height: "292px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "156px", height: "31px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "156px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`How TriHelix works`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "47px", width: "330px", height: "103px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
                <div style={{ position: "absolute", left: "20px", top: "20px", width: "283px", height: "63px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "283px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`People + Workflow + Technology → `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`Friction → Value → AI / Non-AI → `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`Outcome `}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "166px", width: "330px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "8px", top: "0px", height: "21px", lineHeight: "21px" }}>{"\u2022"}</div>
                <div style={{ position: "absolute", left: "24px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Diagnose people, workflow and `}</div>
                <div style={{ position: "absolute", left: "24px", top: "21px", height: "21px", lineHeight: "21px" }}>{`technology friction first `}</div>
                <div style={{ position: "absolute", left: "8px", top: "42px", height: "21px", lineHeight: "21px" }}>{"\u2022"}</div>
                <div style={{ position: "absolute", left: "24px", top: "42px", height: "21px", lineHeight: "21px" }}>{`Locate where value is actually trapped `}</div>
                <div style={{ position: "absolute", left: "8px", top: "63px", height: "21px", lineHeight: "21px" }}>{"\u2022"}</div>
                <div style={{ position: "absolute", left: "24px", top: "63px", height: "21px", lineHeight: "21px" }}>{`Ask where AI genuinely removes the `}</div>
                <div style={{ position: "absolute", left: "24px", top: "84px", height: "21px", lineHeight: "21px" }}>{`friction `}</div>
                <div style={{ position: "absolute", left: "8px", top: "105px", height: "21px", lineHeight: "21px" }}>{"\u2022"}</div>
                <div style={{ position: "absolute", left: "24px", top: "105px", height: "21px", lineHeight: "21px" }}>{`Say plainly when AI is not the answer `}</div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "2012.32px", width: "361px", height: "1512px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "472px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "472px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "246px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "91px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                    <div style={{ position: "absolute", left: "21px", top: "11px", width: "49px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0.18px", top: "0px", height: "16px", lineHeight: "16px" }}>{`The Idea`}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Three stages. One `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`connected path `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`from ambition to `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "144px", height: "48px", lineHeight: "48px" }}>{`realized value.`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "278px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Transformation decisions should not begin `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`with a solution.`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "356px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`They should begin with the question: What is `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`standing between the business and the outcome `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`it is trying to achieve?`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "451px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`TriHelix follows a deliberate progression.`}</div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "504px", width: "361px", height: "1008px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "307px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
                <div style={{ position: "absolute", left: "20px", top: "20px", width: "321px", height: "257px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", height: "76px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "21px", width: "81px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Sense`}</div>
                    </div>
                    <div style={{ position: "absolute", left: "220px", top: "0px", width: "101px", height: "76px" }}>
                      <img src="/assets/mob/approach-80e8ffa0df-101x76.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "92px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Find the problem worth solving.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "131px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Identify the signals that matter. Understand `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`strategic priorities, constraints, and `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`opportunities that deserve leadership `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`attention.`}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}></div>
                    <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 700, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`60 Minutes`}</span></div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "339px", width: "361px", height: "330px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
                <div style={{ position: "absolute", left: "20px", top: "20px", width: "321px", height: "280px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", height: "76px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "21px", width: "106px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Validate`}</div>
                    </div>
                    <div style={{ position: "absolute", left: "220px", top: "0px", width: "101px", height: "76px" }}>
                      <img src="/assets/mob/approach-9e0add0d9e-101x76.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "92px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Know what is worth`}</div>
                    <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`pursuing.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "154px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Turn clarity into a decision. Determine which `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`opportunities are worth pursuing, what it `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`will take to make them work, and where `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`value can realistically be created.`}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}></div>
                    <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 700, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`3 Weeks `}</span></div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "701px", width: "361px", height: "307px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
                <div style={{ position: "absolute", left: "20px", top: "20px", width: "321px", height: "257px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", height: "76px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "21px", width: "105px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Execute`}</div>
                    </div>
                    <div style={{ position: "absolute", left: "220px", top: "0px", width: "101px", height: "76px" }}>
                      <img src="/assets/mob/approach-5a0102d8c2-101x76.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "92px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Turn the decision into realized value.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "131px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Deliver priority initiatives while building the `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`adoption and organizational capability `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`required to scale them.`}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}></div>
                    <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}></div>
                    <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 700, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`90 Days  `}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "3620.32px", width: "361px", height: "962px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "341px", height: "110px" }}>
              <div style={{ position: "absolute", left: "0px", top: "31px", width: "149px", height: "48px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "39px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`01`}</div>
                </div>
                <div style={{ position: "absolute", left: "47px", top: "5px", width: "102px", height: "38px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "102px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "32px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "38.4px", lineHeight: "38.4px" }}>{`SENSE`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "191px", top: "-20px", width: "150px", height: "150px" }}>
                <img src="/assets/Sense.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "142px", width: "361px", height: "409px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "68px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Find the problem worth `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "34px", height: "34px", lineHeight: "34px" }}>{`solving`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "100px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`You don't need to arrive with a perfectly `}</div>
                <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`defined transformation brief.`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "178px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Bring the ambition, challenge, opportunity—or `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`simply the question you're trying to answer.`}</div>
                <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{``}</div>
                <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`TriHelix arrives prepared, using available business `}</div>
                <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`and market context to make the conversation `}</div>
                <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`focused from the beginning.`}</div>
                <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{``}</div>
                <div style={{ position: "absolute", left: "0px", top: "147px", height: "21px", lineHeight: "21px" }}>{`Together, we identify the signals behind the `}</div>
                <div style={{ position: "absolute", left: "0px", top: "168px", height: "21px", lineHeight: "21px" }}>{`noise and determine what deserves deeper `}</div>
                <div style={{ position: "absolute", left: "0px", top: "189px", height: "21px", lineHeight: "21px" }}>{`investigation across five dimensions: business, `}</div>
                <div style={{ position: "absolute", left: "0px", top: "210px", height: "21px", lineHeight: "21px" }}>{`data, operations, technology, and people. `}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "583px", width: "361px", height: "187px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`What you will receive - `}</div>
                <div style={{ position: "absolute", left: "0px", top: "31px", height: "31.2px", lineHeight: "31.2px" }}>{`Deliverables`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "86px", width: "361px", height: "101px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "43px", borderBottom: "1px solid rgba(255,255,255,0.55)" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`An Executive-Level Strategic Pulse  `}</div>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "59px", width: "361px", height: "42px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Priority Problem and Opportunity Areas`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "802px", width: "361px", height: "160px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
              <div style={{ position: "absolute", left: "20px", top: "20px", width: "321px", height: "120px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", height: "63px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{` A focused conversation designed to help `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`surface the problem or opportunity that `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`matters enough to take forward.`}</div>
                  </div>
                </div>
                <a href="/contact" style={{ position: "absolute", left: "0px", top: "79px", width: "175px", height: "41px", borderRadius: "30px", background: "#4097ff", textDecoration: "none" }}>
                  <div style={{ position: "absolute", left: "20px", top: "10px", width: "80px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your call`}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "4662.32px", width: "361px", height: "1014px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "110px" }}>
              <div style={{ position: "absolute", left: "0px", top: "31px", width: "197px", height: "48px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "49px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`02`}</div>
                </div>
                <div style={{ position: "absolute", left: "57px", top: "5px", width: "140px", height: "38px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "140px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "32px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "38.4px", lineHeight: "38.4px" }}>{`VALIDATE`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "239px", top: "-20px", width: "150px", height: "150px" }}>
                <img src="/assets/Validate.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "142px", width: "361px", height: "423px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "102px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Know what is worth `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "34px", height: "34px", lineHeight: "34px" }}>{`pursuing before you `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "68px", height: "34px", lineHeight: "34px" }}>{`commit.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "134px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Clarity tells you where to look.`}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`Validation tells you whether something is worth `}</div>
                <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`pursuing.`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "229px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Our 3-Week Deep Dive Diagnostic takes the `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`priority areas identified in Sense and investigates `}</div>
                <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`them in greater depth.`}</div>
                <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`We examine the business need, operational `}</div>
                <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`reality, data and technology foundation, `}</div>
                <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`organizational capability and potential value.`}</div>
                <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}></div>
                <div style={{ position: "absolute", left: "0px", top: "147.25px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`Fixed Scope. Fixed Investment. Clear `}</span></div>
                <div style={{ position: "absolute", left: "0px", top: "170.25px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`Decision.`}</span></div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "597px", width: "361px", height: "246px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`What you will receive - `}</div>
                <div style={{ position: "absolute", left: "0px", top: "31px", height: "31.2px", lineHeight: "31.2px" }}>{`Deliverables`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "86px", width: "361px", height: "160px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "43px", borderBottom: "1px solid rgba(255,255,255,0.55)" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`AI Ambition & Readiness Snapshot`}</div>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "59px", width: "361px", height: "43px", borderBottom: "1px solid rgba(255,255,255,0.55)" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Growth Levers and Key Challenges`}</div>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "118px", width: "361px", height: "42px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Prioritized Initiative Scoped for Execution `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "875px", width: "361px", height: "139px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
              <div style={{ position: "absolute", left: "20px", top: "20px", width: "321px", height: "99px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", height: "42px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`A practical basis for deciding what to fund, `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`prove, defer or scale.`}</div>
                  </div>
                </div>
                <a href="/contact" style={{ position: "absolute", left: "0px", top: "58px", width: "175px", height: "41px", borderRadius: "30px", background: "#4097ff", textDecoration: "none" }}>
                  <div style={{ position: "absolute", left: "20px", top: "10px", width: "80px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your call`}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "5756.32px", width: "361px", height: "1916px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "110px" }}>
              <div style={{ position: "absolute", left: "0px", top: "31px", width: "197px", height: "48px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "50px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`03`}</div>
                </div>
                <div style={{ position: "absolute", left: "58px", top: "5px", width: "139px", height: "38px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "139px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "32px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "38.4px", lineHeight: "38.4px" }}>{`EXECUTE`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "239px", top: "-20px", width: "150px", height: "150px" }}>
                <img src="/assets/Execute.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "142px", width: "361px", height: "363px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "68px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`90 days to measurable, `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "34px", height: "34px", lineHeight: "34px" }}>{`trusted AI.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "100px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`A successful proof of concept is not the end goal.`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "153px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`The goal is to create value that can be adopted, `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`integrated, measured, and scaled. `}</div>
                <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{``}</div>
                <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`TriHelix brings technology, experience, and `}</div>
                <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`adoption together in a focused 90-day delivery `}</div>
                <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`sprint. `}</div>
                <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{``}</div>
                <div style={{ position: "absolute", left: "0px", top: "147px", height: "21px", lineHeight: "21px" }}>{`The priorities pursued here are informed by the `}</div>
                <div style={{ position: "absolute", left: "0px", top: "168px", height: "21px", lineHeight: "21px" }}>{`strategic context established in Sense and the `}</div>
                <div style={{ position: "absolute", left: "0px", top: "189px", height: "21px", lineHeight: "21px" }}>{`opportunities validated in the Deep Dive.`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "537px", width: "361px", height: "365px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`What you will receive - `}</div>
                <div style={{ position: "absolute", left: "0px", top: "31px", height: "31.2px", lineHeight: "31.2px" }}>{`Deliverables`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "86px", width: "361px", height: "279px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "43px", borderBottom: "1px solid rgba(255,255,255,0.55)" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`A working MVP or validated priority solution`}</div>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "59px", width: "361px", height: "43px", borderBottom: "1px solid rgba(255,255,255,0.55)" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Defined success measures`}</div>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "118px", width: "361px", height: "43px", borderBottom: "1px solid rgba(255,255,255,0.55)" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Evidence of value against business outcomes`}</div>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "177px", width: "361px", height: "43px", borderBottom: "1px solid rgba(255,255,255,0.55)" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Adoption and organizational enablement`}</div>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "236px", width: "361px", height: "43px", borderBottom: "1px solid rgba(255,255,255,0.55)" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "42px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`A roadmap for organization-wide rollout`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "934px", width: "361px", height: "139px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
              <div style={{ position: "absolute", left: "20px", top: "20px", width: "321px", height: "99px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", height: "42px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`1-2 Priority Initiatives. 90 Days. Measurable `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`Outcomes.`}</div>
                  </div>
                </div>
                <a href="/contact" style={{ position: "absolute", left: "0px", top: "58px", width: "175px", height: "41px", borderRadius: "30px", background: "#4097ff", textDecoration: "none" }}>
                  <div style={{ position: "absolute", left: "20px", top: "10px", width: "80px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your call`}</div>
                  </div>
                </a>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "1105px", width: "360px", height: "811px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div role="button" tabIndex={0} onClick={() => setApOpen((v) => !v)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setApOpen((v) => !v); } }} aria-expanded={apOpen} style={{ cursor: "pointer", position: "absolute", left: "0px", top: "40px", width: "360px", height: "731px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "32px", height: "32px" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" style={{ position: "absolute", left: "2px", top: "2px" }} fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10.4" />
                    <path d="M7 12h10" />
                    {!(apOpen) && <path d="M12 7v10" />}
                  </svg>
                </div>
                <div style={{ position: "absolute", left: "40px", top: "0px", width: "320px", height: "731px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "320px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`How do you make it work?`}</div>
                  </div>
                  {apOpen && (<><div style={{ position: "absolute", left: "0px", top: "39px", width: "320px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Build the solution. Make it adoptable. `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "21.25px", height: "23.4px", lineHeight: "23.4px" }}></div>
                    <div style={{ position: "absolute", left: "11px", top: "44.25px", height: "23.4px", lineHeight: "23.4px" }}>{"\u2022"}</div>
                    <div style={{ position: "absolute", left: "27px", top: "44.25px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`HUMAN-IN-THE-LOOP`}</span>{` `}<span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Judgment `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "67px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`stays human; the model assists where it `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "88px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`earns trust. Solutions are designed `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "109px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`around real users, real decisions, `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "130px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`and real business contexts. `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "151.25px", height: "23.4px", lineHeight: "23.4px" }}></div>
                    <div style={{ position: "absolute", left: "11px", top: "174.25px", height: "23.4px", lineHeight: "23.4px" }}>{"\u2022"}</div>
                    <div style={{ position: "absolute", left: "27px", top: "174.25px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`DESIGNED AROUND THE WAY `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "197.25px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`PEOPLE WORK`}</span>{` `}<span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Transformation should `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "220px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`not create `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "241px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`unnecessary behavioral change. Where `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "262px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`possible, solutions fit existing ways of `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "283px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`working while making it easier for `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "304px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`people to perform tasks, make `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "325px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`decisions, or access what they need. `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "346px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Where change is necessary, it is `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "367px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`supported deliberately. `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "388.25px", height: "23.4px", lineHeight: "23.4px" }}></div>
                    <div style={{ position: "absolute", left: "11px", top: "411.25px", height: "23.4px", lineHeight: "23.4px" }}>{"\u2022"}</div>
                    <div style={{ position: "absolute", left: "27px", top: "411.25px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`ADOPTION BUILT IN`}</span>{` `}<span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Technology only `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "434px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`creates value when the people expected `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "455px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`to use it actually adopt it. Through MC³, `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "476px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Nihilent's patented Change Management `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "497px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Framework, adoption is built into `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "518px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`execution so that people, leadership, `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "539px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`and the wider organization are prepared `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "560px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`to sustain the change. `}</span></div>
                    <div style={{ position: "absolute", left: "0px", top: "581.25px", height: "23.4px", lineHeight: "23.4px" }}></div>
                    <div style={{ position: "absolute", left: "11px", top: "604.25px", height: "23.4px", lineHeight: "23.4px" }}>{"\u2022"}</div>
                    <div style={{ position: "absolute", left: "27px", top: "604.25px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`MEASURE SUCCESS FROM THE `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "627.25px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`OUTSET `}</span><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Success measures are defined `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "650px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`from the beginning and tested against `}</span></div>
                    <div style={{ position: "absolute", left: "27px", top: "671px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`agreed business outcomes. `}</span></div>
                  </div></>)}
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "811px", width: "360px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
            </div>
          </div>
          <div style={{ transform: apOpen ? "none" : "translateY(-697px)", position: "absolute", left: "16px", top: "7752.32px", width: "360px", height: "1089px" }}>
            <div style={{ position: "absolute", left: "360px", top: "0px", width: "360px", height: "399px", transform: "matrix(-1,0,0,1,0,0)", transformOrigin: "0 0", borderRadius: "30px" }}>
              <img src="/assets/mob/approach-21b2525ef1-360x399.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", borderRadius: "30px" }} />
            </div>
            <div style={{ position: "absolute", left: "0px", top: "463px", width: "360px", height: "626px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", height: "112px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", height: "112px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Why Trihelix `}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "58px", width: "451px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`We diagnose before we prescribe.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "91px", width: "451px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Four principles shape every engagement.`}</span></div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "144px", width: "360px", height: "385px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", height: "73px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`01 DIAGNOSTIC-FIRST`}</span></div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "31px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`We understand the friction before proposing the `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`solution.`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "97px", width: "360px", height: "73px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`02 OUTCOMES OVER HEADCOUNT`}</span></div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "31px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`We focus on measurable value recovered—not the `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`size of the team deployed.`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "194px", width: "360px", height: "115px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`03  WE BUILD AI`}</span></div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "31px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`From data engineering and model development to `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`MLOps and productisation, we build what the `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`business needs—not simply advise on what others `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`should build.`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "333px", width: "360px", height: "52px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}><span style={{ fontWeight: 600, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "18px" }}>{`04 HONEST COUNSEL`}</span></div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "31px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`If AI isn't the answer, we say so.`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "561px", width: "360px", height: "65px" }}>
                <div style={{ position: "absolute", left: "0px", top: "9.5px", width: "360px", height: "46px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`No transformation for transformation's sake. `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`Only what moves the business forward.`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ transform: apOpen ? "none" : "translateY(-697px)", position: "absolute", left: "16px", top: "8921px", width: "359px", height: "390px", borderRadius: "30px" }}>
            <img src="/assets/mob/approach-35e148b49e-359x390.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", borderRadius: "30px" }} />
            <div style={{ position: "absolute", left: "20px", top: "60px", width: "319px", height: "191px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "319px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Start with `}</div>
                <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`clarity.`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "122px", width: "319px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Request your complimentary 60-`}</div>
                <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`Minute Sense Conversation.`}</div>
                <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`Focused. Prepared. No commitment.`}</div>
              </div>
            </div>
            <a href="/contact" style={{ position: "absolute", left: "20px", top: "291px", width: "256px", height: "41px", borderRadius: "30px", background: "#ffffff", textDecoration: "none" }}>
              <div style={{ position: "absolute", left: "20px", top: "10px", width: "80px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#000000", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your 60-minute call`}</div>
              </div>
            </a>
          </div>
          <div style={{ transform: apOpen ? "none" : "translateY(-697px)", position: "absolute", left: "16px", top: "9391px", width: "362px", height: "485.81px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "153.09px", height: "61.81px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "131.34px", height: "48.42px", overflow: "hidden" }}>
                <Link data-logolink href={"/"} aria-label={"TriHelix home"} style={{ display: "block", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "131.34px", height: "48.42px" }}>
                  <img src="/assets/mob/approach-d0da487457-131x48.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
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
                <Link data-footlink href={"/approach"} style={{ textDecoration: "none", color: "inherit", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "76px", height: "36px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "10px", width: "76px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
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
      {!bare && <MobileChrome current="/approach" />}
    </div>
  );
}
