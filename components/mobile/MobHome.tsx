"use client";
import { useEffect, useRef, useState } from "react";
import MobileChrome from "@/components/mobile/MobileChrome";
import Link from "next/link";
import { useStageFit } from "@/components/useStageFit";
import useSwipe from "@/components/useSwipe";
import CircleArrow from "@/components/CircleArrow";
import { slides } from "@/lib/home-data";

/** Generated from "TRX Home Mobile 3.0.fig" — a 393x8326 mobile design canvas.
 *  Every box, colour, font size and line break is read out of the Figma file;
 *  nothing here is eyeballed. Regenerate with v3-mobfig/mobgen.mjs. */
export default function MobHome({ bare = false }: { bare?: boolean }) {
  const { stageRef, artRef } = useStageFit(393, 8482);
  const [slide, setSlide] = useState(0);
  const track = useRef<HTMLDivElement | null>(null);
  const CARD_W = 357;
  const CARD_GAP = 16;
  const SLIDE_STEP = CARD_W + CARD_GAP;
  const go = (i: number) => setSlide(((i % slides.length) + slides.length) % slides.length);
  useEffect(() => {
    if (track.current) track.current.style.transform = `translateX(${-slide * SLIDE_STEP}px)`;
  }, [slide, SLIDE_STEP]);
  const prev = () => go(slide - 1);
  const next = () => go(slide + 1);
  const swipe = useSwipe(prev, next);
  return (
    <div ref={stageRef} style={{ position: "relative", width: "100%", overflow: "hidden", background: "#000000" }}>
      <div ref={artRef} style={{ position: "absolute", top: 0, left: 0, width: 393, height: 8482, transformOrigin: "0 0", color: "#ffffff", fontFamily: "var(--font-plex), system-ui, sans-serif" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "393px", height: "8530px", background: "#000000", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "419.53px", top: "5681.94px", width: "2234.67px", height: "444.83px", transform: "matrix(0,1,-1,0,0,0)", transformOrigin: "0 0" }}>
            <img src="/assets/mob/home-b04a6f9f54-2235x445.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: "405.88px", top: "2480.92px", width: "1311.81px", height: "402.16px", transform: "matrix(0,1,-1,0,0,0)", transformOrigin: "0 0" }}>
            <img src="/assets/mob/home-b04a6f9f54-1312x402.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: "-1573px", top: "-3px", width: "2038px", height: "986px" }}>
            <img src="/assets/mob/home-0c3c668f03-2038x986.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "29px", width: "89px", height: "33px" }}>
            <Link data-logolink href={"/"} aria-label={"TriHelix home"} style={{ display: "block", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "89px", height: "33px" }}>
              <img src="/assets/mob/home-d0da487457-89x33.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
            </Link>
          </div>
          <div style={{ position: "absolute", left: "349px", top: "30px", width: "28px", height: "18px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "28px", borderTop: "2px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "9px", width: "28px", borderTop: "2px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "18px", width: "28px", borderTop: "2px solid #ffffff" }} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "121px", width: "361px", height: "447px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "312px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "312px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "265px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 300, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Most AI investment `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "41px", height: "48px", lineHeight: "48px" }}>{`goes where it’s `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "82px", height: "48px", lineHeight: "48px" }}>{`easy, not where `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "123px", height: "48px", lineHeight: "48px" }}>{`it matters.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "196px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`TriHelix identifies where AI can actually `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`impact revenue, cost or risk — with `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`precision. `}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "289px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Clarity. Delivered.`}</div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "344px", width: "361px", height: "103px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your first call. 60 min. Free. `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`No obligation.`}</div>
              </div>
              <a href="/contact" style={{ position: "absolute", left: "0px", top: "62px", width: "175px", height: "41px", borderRadius: "30px", background: "#4097ff", textDecoration: "none" }}>
                <div style={{ position: "absolute", left: "20px", top: "10px", width: "80px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your call`}</div>
                </div>
              </a>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "648px", width: "361px", height: "259px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(25.5px)" }}>
            <div style={{ position: "absolute", left: "28px", top: "32px", width: "304px", height: "195px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "239px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`25+ Years of  Experience`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "39px", width: "304px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "57px", width: "239px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Patented MC³ Framework`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "96px", width: "304px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "114px", width: "239px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Enterprise Engineering`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "153px", width: "304px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "171px", width: "304px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Global Transformation Experience`}</div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "1047px", width: "361px", height: "736px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "383px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "246px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "84px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                  <div style={{ position: "absolute", left: "21px", top: "11px", width: "42px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0.13px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Friction`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`The hardest part of `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`transformation `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`isn't knowing what `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "144px", height: "48px", lineHeight: "48px" }}>{`to change.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "278px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`It's getting everything to change at the same time. `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{``}</div>
                <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`TriHelix brings these pieces together—so `}</div>
                <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`transformation moves beyond initiatives to `}</div>
                <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`outcomes.`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "415px", width: "361px", height: "321px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "60px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`THE TECHNOLOGY WORKS`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "39px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`But adoption doesn’t.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "84px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "108px", width: "361px", height: "81px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`THE PILOT SHOWS PROMISE`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "39px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`But scaling it across the enterprise becomes a `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`different problem.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "213px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "237px", width: "361px", height: "60px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "24px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "31.2px", lineHeight: "31.2px" }}>{`THE STRATEGY IS CLEAR`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "39px", width: "146px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`But execution stalls.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "321px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "1863px", width: "361px", height: "961px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "266px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "96px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                <div style={{ position: "absolute", left: "21px", top: "11px", width: "54px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0.47px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Approach`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", height: "212px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Start small. Prove `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`value. Then go big.`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "128px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`TriHelix replaces the traditional leap with a `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`progressive path. Build understanding first. Prove `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`the opportunity next. Scale what works with `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`confidence.`}</div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "298px", width: "361px", height: "663px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "212px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
                <div style={{ position: "absolute", left: "20px", top: "20px", width: "321px", height: "162px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", height: "76px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "21px", width: "81px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Sense`}</div>
                    </div>
                    <div style={{ position: "absolute", left: "220px", top: "0px", width: "101px", height: "76px" }}>
                      <img src="/assets/mob/home-80e8ffa0df-101x76.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "76px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Find the opportunity.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "99px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`60-minute CXO conversation`}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`Understand the ambition, constraints and `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`friction.`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "236px", width: "361px", height: "212px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
                <div style={{ position: "absolute", left: "20px", top: "20px", width: "321px", height: "162px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", height: "76px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "21px", width: "106px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Validate`}</div>
                    </div>
                    <div style={{ position: "absolute", left: "220px", top: "0px", width: "101px", height: "76px" }}>
                      <img src="/assets/mob/home-9e0add0d9e-101x76.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "76px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Prove what matters.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "99px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`3-week diagnostic`}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`Test assumptions, identify priorities and `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`define the path to value.`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "472px", width: "361px", height: "191px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
                <div style={{ position: "absolute", left: "20px", top: "20px", width: "321px", height: "141px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "321px", height: "76px" }}>
                    <div style={{ position: "absolute", left: "0px", top: "21px", width: "106px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Execute`}</div>
                    </div>
                    <div style={{ position: "absolute", left: "220px", top: "0px", width: "101px", height: "76px" }}>
                      <img src="/assets/mob/home-5a0102d8c2-101x76.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "76px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Make it real.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "99px", width: "321px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`90- day sprint. Deploy 1-2 priority initiatives `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`and measure what changes.`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "3880px", width: "360px", height: "1019px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", height: "362px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "80px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                <div style={{ position: "absolute", left: "21px", top: "11px", width: "38px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0.34px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Engine`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "54px", width: "360px", height: "308px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Transformation `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`happens at the `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`intersection of `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "144px", height: "48px", lineHeight: "48px" }}>{`three things.`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "224px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Our advantage comes from bringing People, `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`Technology and Workflow into the same `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`transformation conversation—so what gets built is `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`valuable, usable and adopted.`}</div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "394px", width: "360px", height: "625px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", height: "144px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", height: "144px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`PEOPLE`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`But execution stalls.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "73px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Patented MC³, a structured approach to moving `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`people from intent to adoption to sustained `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`capability.`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "176px", width: "360px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "208px", width: "360px", height: "165px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", height: "165px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`TECHNOLOGY`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Technology we actually build.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "73px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Connect technology, processes and people `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`around how work actually gets done—turning new `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`capabilities into everyday business outcomes.`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "405px", width: "360px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "437px", width: "360px", height: "188px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", height: "188px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`WORKFLOWS`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Make transformation work in the flow of `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`work.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "96px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Enterprise engineering across data, AI, MLOps `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`and productisation. If AI isn't the right answer, `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`we'll tell you before you spend on it.`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "4979px", width: "359px", height: "778px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "359px", height: "334px", borderRadius: "34px" }}>
              <img src="/assets/mob/home-0720d7c4e4-359x334.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", borderRadius: "34px" }} />
            </div>
            <div style={{ position: "absolute", left: "0px", top: "366px", width: "359px", height: "412px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "359px", height: "339px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "359px", height: "102px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "113px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                    <div style={{ position: "absolute", left: "21px", top: "11px", width: "71px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0.01px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Framework`}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "54px", width: "359px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Patented MC³`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "122px", width: "359px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`The MC3® framework is a structured change `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`methodology designed to move people from `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`initial awareness to sustained operational `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "69px", height: "23.4px", lineHeight: "23.4px" }}>{`capability. `}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "234px", width: "359px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#000000", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}><span style={{ color: "#ffffff", fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`Since 2003, this patented model has been an `}</span></div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}><span style={{ color: "#ffffff", fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`integral driver of Nihilent’s business `}</span></div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}><span style={{ color: "#ffffff", fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`transformation work, helping organizations `}</span></div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}><span style={{ color: "#ffffff", fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`successfully navigate complex change by aligning `}</span></div>
                  <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}><span style={{ color: "#ffffff", fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`performance with exec`}</span><span style={{ fontWeight: 400, fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "16px" }}>{`ution`}</span></div>
                </div>
              </div>
            </div>
          </div>
          {/* Matches the desktop pattern: a "Learn more about TriHelix
              Approach" CTA between the Approach section and Case Studies,
              with equal 40px space above and below it. */}
          <Link href={"/approach"} style={{ position: "absolute", left: "16px", top: "2864px", height: "44px", padding: "0 24px", borderRadius: "999px", background: "#4097ff", color: "#ffffff", display: "inline-flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "15px", textDecoration: "none" }}>Learn more about TriHelix Approach</Link>
          <div style={{ position: "absolute", left: "16px", top: "2988px", width: "357px", height: "772px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "357px", height: "335px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "357px", height: "198px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "120px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                  <div style={{ position: "absolute", left: "21px", top: "11px", width: "78px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0.25px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Case Studies`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "54px", width: "357px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Ideas are easy. `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`Making them work `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`is harder.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "230px", width: "357px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Real transformation isn’t measured by the size of `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`the programme. It’s measured by what changes `}</div>
                <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`in the business. Explore how TriHelix has turned `}</div>
                <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`targeted interventions into measurable `}</div>
                <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`outcomes.`}</div>
              </div>
            </div>
            {/* Swipeable, matching the desktop carousel: same useSwipe hook,
                same track-translateX approach, one card per view since the
                section is exactly one card wide on mobile. */}
            <div {...swipe} style={{ position: "absolute", left: "0px", top: "367px", width: "357px", height: "357px", overflow: "hidden", ...swipe.style }}>
              <div ref={track} style={{ position: "absolute", left: "0", top: "0", display: "flex", gap: "16px", transition: "transform 520ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {slides.map((s, i) => (
                  <Link key={i} href={"/case-studies"} className="case-link" style={{ position: "relative", width: "357px", height: "357px", borderRadius: "30px", overflow: "hidden", flex: "0 0 auto", display: "block", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.8)" }}>
                    {i === 0 ? (
                      <div style={{ position: "absolute", left: "-18px", top: "-150px", width: "443px", height: "612px", borderRadius: "14.01px" }}>
                        <img src="/assets/mob/home-f161caf250-443x612.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", borderRadius: "14.01px" }} />
                      </div>
                    ) : (
                      <img src={s.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center" }} />
                    )}
                    <div style={{ position: "absolute", left: "0px", top: "168px", width: "357px", height: "189px", backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0) 11.18%, #000000 100%)" }} />
                    <div style={{ position: "absolute", left: "20px", right: "20px", bottom: "20px" }}>
                      <div style={{ fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "26px", lineHeight: "31px", color: "#ffffff" }}>{s.title}</div>
                      <div style={{ marginTop: "8px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "14px", lineHeight: "19px", color: "rgba(255,255,255,0.94)" }}>{s.body}</div>
                      <span className="readlink" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "10px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                        <span className="readlink-text">Read case study</span>
                        <span aria-hidden="true" className="arrow-icon" style={{ fontSize: "16px", lineHeight: 1, display: "inline-block" }}>&rsaquo;</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {slide > 0 && (
              <button type="button" onClick={prev} aria-label="Previous case study" style={{ position: "absolute", left: "12px", top: "517.5px", width: "58px", height: "58px", padding: 0, border: 0, borderRadius: "999px", background: "transparent", cursor: "pointer", zIndex: 2 }}>
                <CircleArrow dir="left" />
              </button>
            )}
            {slide < slides.length - 1 && (
              <button type="button" onClick={next} aria-label="Next case study" style={{ position: "absolute", left: "287px", top: "517.5px", width: "58px", height: "58px", padding: 0, border: 0, borderRadius: "999px", background: "transparent", cursor: "pointer", zIndex: 2 }}>
                <CircleArrow dir="right" />
              </button>
            )}
            <div style={{ position: "absolute", left: "134.5px", top: "756px", display: "flex", alignItems: "center", gap: "20px" }}>
              {slides.map((_, i) => (
                <button key={i} type="button" onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} style={{ width: "16px", height: "16px", padding: 0, borderRadius: "50%", cursor: "pointer", border: "1px solid #ffffff", background: slide === i ? "#ffffff" : "transparent", opacity: slide === i ? 1 : 0.8 }}></button>
              ))}
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "5797px", width: "360px", height: "741px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", height: "358px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "107px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                <div style={{ position: "absolute", left: "21px", top: "11px", width: "65px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0.18px", top: "0px", height: "16px", lineHeight: "16px" }}>{`Perspective`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "54px", width: "360px", height: "304px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`We don’t just `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`advise on what’s `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`possible. We build `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "144px", height: "48px", lineHeight: "48px" }}>{`it.`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "212px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Our advantage comes from bringing People, `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`Technology and Design into the same `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`transformation conversation- so what gets `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "69px", height: "23.4px", lineHeight: "23.4px" }}>{`built is valuable, usable and adopted.`}</div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "390px", width: "360px", height: "351px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "20px", width: "360px", height: "63px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Full-stack engineering`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "42px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Data → AI → MLOps → productisation`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "103px", width: "360px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "123px", width: "360px", height: "84px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Production, not prototypes`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "42px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Enterprise systems that actually operate in the `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`real world.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "227px", width: "360px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "247px", width: "360px", height: "84px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "360px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Honest AI counsel`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "42px", width: "360px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`If AI isn't the right answer, we'll tell you before `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`you invest.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "351px", width: "360px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "6618px", width: "359px", height: "597px", borderRadius: "30px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)" }}>
            <div style={{ position: "absolute", left: "20px", top: "50px", width: "319px", height: "317px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "319px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Built on 25+ `}</div>
                <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`years of `}</div>
                <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`transformation `}</div>
                <div style={{ position: "absolute", left: "0px", top: "144px", height: "48px", lineHeight: "48px" }}>{`experience.`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "212px", width: "319px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`AI can create enormous value—but not `}</div>
                <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`every problem needs AI. We help leaders `}</div>
                <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`make informed decisions before committing `}</div>
                <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`significant resources, and build only where `}</div>
                <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`the business case is real`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "20px", top: "417px", width: "319px", height: "130px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "319px", height: "55px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "97px", height: "55px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "97px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 600, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`2,800+`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "34px", width: "97px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`professionals`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "167px", top: "0px", width: "88px", height: "55px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "88px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 600, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`50+`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "34px", width: "88px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", textTransform: "uppercase", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`countries`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "75px", width: "259px", height: "55px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "86px", height: "55px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "86px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 600, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`15+`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "34px", width: "86px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", textTransform: "uppercase", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`locations`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "167px", top: "0px", width: "92px", height: "55px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "92px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 600, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`18,00+`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "34px", width: "92px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", textTransform: "uppercase", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`customers`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "7295px", width: "359px", height: "534px", borderRadius: "30px" }}>
            <img src="/assets/mob/home-5ac8d5a645-359x534.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", borderRadius: "30px" }} />
            <div style={{ position: "absolute", left: "20px", top: "60px", width: "319px", height: "333px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "319px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Start with a `}</div>
                <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`conversation. `}</div>
                <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`Not a `}</div>
                <div style={{ position: "absolute", left: "0px", top: "144px", height: "48px", lineHeight: "48px" }}>{`commitment.`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "218px", width: "319px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Bring us the transformation challenge `}</div>
                <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`you're wrestling with. In 60 minutes, `}</div>
                <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`we'll help you understand what's really `}</div>
                <div style={{ position: "absolute", left: "0px", top: "69px", height: "23.4px", lineHeight: "23.4px" }}>{`at stake and what deserves attention `}</div>
                <div style={{ position: "absolute", left: "0px", top: "92px", height: "23.4px", lineHeight: "23.4px" }}>{`next.`}</div>
              </div>
            </div>
            <a href="/contact" style={{ position: "absolute", left: "20px", top: "433px", width: "256px", height: "41px", borderRadius: "30px", background: "#ffffff", textDecoration: "none" }}>
              <div style={{ position: "absolute", left: "20px", top: "10px", width: "80px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#000000", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your 60-minute call`}</div>
              </div>
            </a>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "7969px", width: "362px", height: "485.81px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "153.09px", height: "61.81px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "131.34px", height: "48.42px", overflow: "hidden" }}>
                <Link data-logolink href={"/"} aria-label={"TriHelix home"} style={{ display: "block", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "131.34px", height: "48.42px" }}>
                  <img src="/assets/mob/home-d0da487457-131x48.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
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
      {!bare && <MobileChrome current="/" />}
    </div>
  );
}
