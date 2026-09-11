"use client";
import MobileChrome from "@/components/mobile/MobileChrome";
import { useState, useRef, useLayoutEffect } from "react";
import MobCaseBody from "@/components/mobile/MobCaseBody";
import { cases } from "@/lib/case-studies-data";
import Link from "next/link";
import { useStageFit } from "@/components/useStageFit";

/** Generated from "TRK  Case Studies Mobile 3.0.fig" — a 393x7154 mobile design canvas.
 *  Every box, colour, font size and line break is read out of the Figma file;
 *  nothing here is eyeballed. Regenerate with v3-mobfig/mobgen.mjs. */
export default function MobCases({ bare = false }: { bare?: boolean }) {
  const [cs1, setCs1] = useState(false);
  const [cs2, setCs2] = useState(false);
  const [cs3, setCs3] = useState(false);
  // Cases 2 and 3 were never drawn expanded, so their bodies come out of
  // lib/case-studies-data.ts and are as tall as the copy needs. Measure
  // that and grow the canvas by it - nothing on a canvas reflows by itself.
  const b2 = useRef<HTMLDivElement>(null);
  const b3 = useRef<HTMLDivElement>(null);
  const [h2, setH2] = useState(0);
  const [h3, setH3] = useState(0);
  useLayoutEffect(() => {
    const read = () => {
      setH2(b2.current?.offsetHeight ?? 0);
      setH3(b3.current?.offsetHeight ?? 0);
    };
    read();
    const ro = new ResizeObserver(read);
    if (b2.current) ro.observe(b2.current);
    if (b3.current) ro.observe(b3.current);
    return () => ro.disconnect();
  }, []);
  const d1 = cs1 ? 0 : -2115;
  const d2 = cs2 ? h2 : 0;
  const d3 = cs3 ? h3 : 0;
  const { stageRef, artRef } = useStageFit(393, 7154 + d1 + d2 + d3);
  return (
    <div ref={stageRef} style={{ position: "relative", width: "100%", overflow: "hidden", background: "#000000" }}>
      <div ref={artRef} style={{ position: "absolute", top: 0, left: 0, width: 393, height: 7154 + d1 + d2 + d3, transformOrigin: "0 0", color: "#ffffff", fontFamily: "var(--font-plex), system-ui, sans-serif" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "393px", height: "7154px", background: "#000000", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "393px", height: "2660px" }}>
            <img src="/assets/mob/cases-5a8cfa78fd-393x2660.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "29px", width: "89px", height: "33px" }}>
            <Link data-logolink href={"/"} aria-label={"TriHelix home"} style={{ display: "block", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "89px", height: "33px" }}>
              <img src="/assets/mob/cases-d0da487457-89x33.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
            </Link>
          </div>
          <div style={{ position: "absolute", left: "349px", top: "30px", width: "28px", height: "18px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "28px", borderTop: "2px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "9px", width: "28px", borderTop: "2px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "18px", width: "28px", borderTop: "2px solid #ffffff" }} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "121px", width: "361px", height: "293px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "293px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "293px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "293px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 300, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`From business `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "41px", height: "48px", lineHeight: "48px" }}>{`friction to AI that `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "82px", height: "48px", lineHeight: "48px" }}>{`works.`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "155px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Real transformation starts before the `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`technology. These engagements show how `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`TriHelix identifies where value is being lost, `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "69px", height: "23.4px", lineHeight: "23.4px" }}>{`validates where AI can make a difference, `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "92px", height: "23.4px", lineHeight: "23.4px" }}>{`and turns the opportunity into something `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "115px", height: "23.4px", lineHeight: "23.4px" }}>{`the business can actually use.`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "494px", width: "361px", height: "578px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "324px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "246px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "252px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                  <div style={{ position: "absolute", left: "21px", top: "11px", width: "210px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0.45px", top: "0px", height: "16px", lineHeight: "16px" }}>{`DIAGNOSTIC-LED TRANSFORMATION`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Eight weeks to `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`replace servicing `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`intuition with `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "144px", height: "48px", lineHeight: "48px" }}>{`evidence`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "278px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`TriHelix combines that institutional depth `}</div>
                <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`with a fresh perspective on the AI era.`}</div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "374px", width: "361px", height: "204px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "10px", width: "361px", height: "41px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#a3a3a3", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`INDUSTRY`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "20px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Luxury Retail & Commerce`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "61px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "71px", width: "361px", height: "41px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#a3a3a3", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`GEOGRAPHY`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "20px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`United Kingdom`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "122px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              <div style={{ position: "absolute", left: "0px", top: "132px", width: "361px", height: "62px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#a3a3a3", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`industry`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "20px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`World's leading reseller of Certified Pre-Owned `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`Timepieces`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "204px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
            </div>
          </div>
          <div style={{ transform: `translateY(${d1 + d2 + d3}px)`, position: "absolute", left: "16px", top: "6612px", width: "362px", height: "485.81px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "153.09px", height: "61.81px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "131.34px", height: "48.42px", overflow: "hidden" }}>
                <Link data-logolink href={"/"} aria-label={"TriHelix home"} style={{ display: "block", cursor: "pointer", position: "absolute", left: "0px", top: "0px", width: "131.34px", height: "48.42px" }}>
                  <img src="/assets/mob/cases-d0da487457-131x48.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
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
          <div style={{ position: "absolute", left: "16px", top: "1108px", width: "361px", height: "361px", borderRadius: "30px", background: "#d9d9d9", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "-110px", top: "-28px", width: "551px", height: "413px" }}>
              <img src="/assets/mob/cases-364bed9db2-551x413.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
            </div>
          </div>
          <div style={{ transform: `translateY(${d1 + d2 + d3}px)`, position: "absolute", left: "17px", top: "6026px", width: "357px", height: "486px", borderRadius: "40px" }}>
            <img src="/assets/mob/cases-1a3b91c97e-357x486.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", borderRadius: "40px" }} />
            <div style={{ position: "absolute", left: "20px", top: "60px", width: "315px", height: "285px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "315px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Let's talk about `}</div>
                <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`what comes `}</div>
                <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`next.`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "170px", width: "315px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Bring us the transformation challenge `}</div>
                <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`you're wrestling with. In 60 minutes, `}</div>
                <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`we'll help you understand what's really `}</div>
                <div style={{ position: "absolute", left: "0px", top: "69px", height: "23.4px", lineHeight: "23.4px" }}>{`at stake and what deserves attention `}</div>
                <div style={{ position: "absolute", left: "0px", top: "92px", height: "23.4px", lineHeight: "23.4px" }}>{`next.`}</div>
              </div>
            </div>
            <a href="/contact" style={{ position: "absolute", left: "20px", top: "385px", width: "256px", height: "41px", borderRadius: "30px", background: "#ffffff", textDecoration: "none" }}>
              <div style={{ position: "absolute", left: "20px", top: "10px", width: "80px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "16px", color: "#000000", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Schedule your 60-minute call`}</div>
              </div>
            </a>
          </div>
          {cs1 && (<div style={{ position: "absolute", left: "16px", top: "1572px", width: "361px", height: "2115px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
            <div style={{ position: "absolute", left: "0px", top: "21px", width: "361px", height: "2094px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`Servicing decisions on `}</div>
                <div style={{ position: "absolute", left: "0px", top: "34px", height: "34px", lineHeight: "34px" }}>{`high-value inventory rested `}</div>
                <div style={{ position: "absolute", left: "0px", top: "68px", height: "34px", lineHeight: "34px" }}>{`on tacit expertise. `}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "145px", width: "361px", height: "327px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`THE PROBLEM`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "33px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Experienced staff made sound calls, but the `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`reasoning lived in people's heads. Cost and `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`turnaround therefore varied from case to case, `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`while leadership struggled to explain why. There `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`was no baseline across people, process, data and `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`technology for the servicing lifecycle. `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{``}</div>
                  <div style={{ position: "absolute", left: "0px", top: "147px", height: "21px", lineHeight: "21px" }}>{`Nor was the historical data easily retrievable. Cost `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "168px", height: "21px", lineHeight: "21px" }}>{`data had been captured, but interrogating `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "189px", height: "21px", lineHeight: "21px" }}>{`it required manual analysis, so it rarely challenged `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "210px", height: "21px", lineHeight: "21px" }}>{`a live decision. The compound cost: unexplained `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "231px", height: "21px", lineHeight: "21px" }}>{`variance on high-value items and no defensible `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "252px", height: "21px", lineHeight: "21px" }}>{`operating case to put in front of group-level `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "273px", height: "21px", lineHeight: "21px" }}>{`scrutiny.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "515px", width: "361px", height: "264px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`OUR RESPONSE`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "33px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`A conversational AI layer `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`over consolidated servicing cost data, allowing `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`servicing managers to query historical costs in `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`natural language without an analyst in the loop. `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{``}</div>
                  <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`The scope was deliberately confined to the single `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{`domain with the strongest data readiness, enough `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "147px", height: "21px", lineHeight: "21px" }}>{`to prove whether an interrogable baseline could `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "168px", height: "21px", lineHeight: "21px" }}>{`change decisions without committing to a broader `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "189px", height: "21px", lineHeight: "21px" }}>{`platform first. The AI layer was built alongside the `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "210px", height: "21px", lineHeight: "21px" }}>{`diagnostic, within the same eight-week window.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "822px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", textTransform: "capitalize", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "34px", lineHeight: "34px" }}>{`How Trihelix shaped the `}</div>
                <div style={{ position: "absolute", left: "0px", top: "34px", height: "34px", lineHeight: "34px" }}>{`engagement`}</div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "933px", width: "361px", height: "180px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`WHAT WE DISCOVERED`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "33px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Built a four-dimension baseline - people, process, `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`data, technology - across the servicing lifecycle, `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`from 30+ stakeholder sessions, floor `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`walkthroughs, systems review and cost-data `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`analysis (Operational Flow + Data & System `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`Foundation). What surfaced was an evidence gap, `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{`not a technology gap.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "1156px", width: "361px", height: "180px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`HOW WE VALIDATED`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "33px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Ranked 10+ AI-led and process interventions on `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`an effort-versus-value matrix, co-created with `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`servicing leadership rather than presented to it `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`(Business & AI Priorities + Opportunities & Value). `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`One domain cleared the data-readiness bar for `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`immediate build; the rest were sequenced behind `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{`the foundations they depended on.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "1379px", width: "361px", height: "180px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`WHAT WE DELIVERED`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "33px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Shipped the working AI layer inside the eight-`}</div>
                  <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`week window, scoped to prove the interrogable-`}</div>
                  <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`baseline principle rather than the whole servicing `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`decision loop (People, Culture & `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`Institutionalization). Managers who had never `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "105px", height: "21px", lineHeight: "21px" }}>{`queried cost history could now interrogate it `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "126px", height: "21px", lineHeight: "21px" }}>{`themselves, with the scaling decision left open.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "1602px", width: "361px", height: "194px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`WHAT CHANGED`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "48px", width: "361px", height: "50px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Before`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "29px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Tacit expertise + inaccessible historical data `}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "123px", width: "361px", height: "71px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`After`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "29px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Evidence-based decisions + an interrogable `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`servicing baseline`}</div>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "1839px", width: "361px", height: "255px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
                <div style={{ position: "absolute", left: "0px", top: "25px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`THE CXO TAKEAWAY`}</div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "73px", width: "361px", height: "157px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 600, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Eight weeks did not buy an AI deployment. `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`It bought what a deployment needs first. `}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "52px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`A servicing operation described in facts rather `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`than defended by anecdote—and proof that the `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "42px", height: "21px", lineHeight: "21px" }}>{`client's own data could answer real questions. `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "63px", height: "21px", lineHeight: "21px" }}>{`Run the other way round, the same money can `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "84px", height: "21px", lineHeight: "21px" }}>{`fund a pilot nobody trusts. `}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "255px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              </div>
            </div>
          </div>)}
          <div role="button" tabIndex={0} onClick={() => setCs1((v) => !v)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setCs1((v) => !v); } }} aria-expanded={cs1} style={{ cursor: "pointer", position: "absolute", left: "16px", top: "1502px", width: "209px", height: "32px" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "32px", height: "32px" }}>
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" style={{ position: "absolute", left: "2px", top: "2px" }} fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round">
                <circle cx="12" cy="12" r="10.4" />
                <path d="M7 12h10" />
                {!(cs1) && <path d="M12 7v10" />}
              </svg>
            </div>
            <div style={{ position: "absolute", left: "41px", top: "5.5px", width: "168px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#4097ff", whiteSpace: "pre" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{cs1 ? "Hide the full case study" : "Show the full case study"}</div>
            </div>
          </div>
          <div style={{ transform: `translateY(${d1}px)`, position: "absolute", left: "0px", top: "3687px", width: "393px", height: "1104px" }}>
            <div style={{ position: "absolute", left: "16px", top: "63px", width: "361px", height: "578px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "324px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "246px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "252px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                    <div style={{ position: "absolute", left: "21px", top: "11px", width: "210px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0.45px", top: "0px", height: "16px", lineHeight: "16px" }}>{`DIAGNOSTIC-LED TRANSFORMATION`}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Giving field sales `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`back the time lost `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`to preparation and `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "144px", height: "48px", lineHeight: "48px" }}>{`reporting `}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "278px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`A voice-first Sales Copilot across mobile, `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`web, CarPlay, Android Auto and telephony`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "374px", width: "361px", height: "204px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
                <div style={{ position: "absolute", left: "0px", top: "10px", width: "361px", height: "62px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#a3a3a3", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`INDUSTRY`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "20px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Specialty Industrial Manufacturing | Adhesive `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`Solutions`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "82px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
                <div style={{ position: "absolute", left: "0px", top: "92px", width: "361px", height: "41px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#a3a3a3", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`GEOGRAPHY`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "20px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Germany / DACH, Europe `}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "143px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
                <div style={{ position: "absolute", left: "0px", top: "153px", width: "361px", height: "41px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#a3a3a3", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`industry`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "20px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Global B2B manufacturer; field-led sales motion `}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "204px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "16px", top: "676px", width: "361px", height: "361px", borderRadius: "30px", background: "#d9d9d9", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "-175px", top: "-28px", width: "550px", height: "413px" }}>
                <img src="/assets/mob/cases-ee2d7fb5ce-550x413.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
              </div>
            </div>
            <div role="button" tabIndex={0} onClick={() => setCs2((v) => !v)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setCs2((v) => !v); } }} aria-expanded={cs2} style={{ cursor: "pointer", position: "absolute", left: "16px", top: "1072px", width: "215px", height: "32px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "32px", height: "32px" }}>
                <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" style={{ position: "absolute", left: "2px", top: "2px" }} fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10.4" />
                  <path d="M7 12h10" />
                  {!(cs2) && <path d="M12 7v10" />}
                </svg>
              </div>
              <div style={{ position: "absolute", left: "41px", top: "5.5px", width: "174px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#4097ff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{cs2 ? "Hide the full case study" : "Show the full case study"}</div>
              </div>
            </div>
          </div>
          <div style={{ transform: `translateY(${d1}px)`, position: "absolute", left: "16px", top: "4791px", width: "361px", height: cs2 ? undefined : 0, overflow: "hidden" }}>
            <div ref={b2}><MobCaseBody c={cases[1]} /></div>
          </div>
          <div style={{ transform: `translateY(${d1 + d2}px)`, position: "absolute", left: "0px", top: "4840px", width: "393px", height: "1104px" }}>
            <div style={{ position: "absolute", left: "16px", top: "40px", width: "361px", height: "601px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "347px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", height: "246px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "150px", height: "38px", borderRadius: "40px", border: "1px solid #cfcfcf" }}>
                    <div style={{ position: "absolute", left: "21px", top: "11px", width: "108px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#ffffff", whiteSpace: "pre" }}>
                      <div style={{ position: "absolute", left: "0.32px", top: "0px", height: "16px", lineHeight: "16px" }}>{`AI SUCCESS STORY`}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "54px", width: "361px", fontFamily: "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif", fontWeight: 400, fontSize: "40px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "48px", lineHeight: "48px" }}>{`Making accounts `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "48px", height: "48px", lineHeight: "48px" }}>{`payable `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "96px", height: "48px", lineHeight: "48px" }}>{`autonomous `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "144px", height: "48px", lineHeight: "48px" }}>{`wherever it can be `}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "278px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "18px", color: "#ffffff", whiteSpace: "pre" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", height: "23.4px", lineHeight: "23.4px" }}>{`Multi-agent autonomous three-way `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "23px", height: "23.4px", lineHeight: "23.4px" }}>{`matching with human-in-the-loop variance `}</div>
                  <div style={{ position: "absolute", left: "0px", top: "46px", height: "23.4px", lineHeight: "23.4px" }}>{`handling.`}</div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0px", top: "397px", width: "361px", height: "204px" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
                <div style={{ position: "absolute", left: "0px", top: "10px", width: "361px", height: "41px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#a3a3a3", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`INDUSTRY`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "20px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Finance & Accounts Payable | cross-sector`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "61px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
                <div style={{ position: "absolute", left: "0px", top: "71px", width: "361px", height: "41px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#a3a3a3", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`GEOGRAPHY`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "20px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Global / Multi-region`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "122px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
                <div style={{ position: "absolute", left: "0px", top: "132px", width: "361px", height: "62px" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 500, fontSize: "12px", color: "#a3a3a3", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "16px", lineHeight: "16px" }}>{`industry`}</div>
                  </div>
                  <div style={{ position: "absolute", left: "0px", top: "20px", width: "361px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#ffffff", whiteSpace: "pre" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{`Global enterprise with a multi-location vendor `}</div>
                    <div style={{ position: "absolute", left: "0px", top: "21px", height: "21px", lineHeight: "21px" }}>{`ecosystem`}</div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "0px", top: "204px", width: "361px", opacity: 0.6, borderTop: "1px solid #ffffff" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "16px", top: "676px", width: "361px", height: "361px", borderRadius: "30px", background: "#d9d9d9", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "0px", top: "-10px", width: "508px", height: "381px" }}>
                <img src="/assets/mob/cases-b9b8a42b06-508x381.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
              </div>
            </div>
            <div role="button" tabIndex={0} onClick={() => setCs3((v) => !v)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setCs3((v) => !v); } }} aria-expanded={cs3} style={{ cursor: "pointer", position: "absolute", left: "16px", top: "1072px", width: "215px", height: "32px" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "32px", height: "32px" }}>
                <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" style={{ position: "absolute", left: "2px", top: "2px" }} fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10.4" />
                  <path d="M7 12h10" />
                  {!(cs3) && <path d="M12 7v10" />}
                </svg>
              </div>
              <div style={{ position: "absolute", left: "41px", top: "5.5px", width: "174px", fontFamily: "var(--font-plex), system-ui, sans-serif", fontWeight: 400, fontSize: "16px", color: "#4097ff", whiteSpace: "pre" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", height: "21px", lineHeight: "21px" }}>{cs3 ? "Hide the full case study" : "Show the full case study"}</div>
              </div>
            </div>
          </div>
          <div style={{ transform: `translateY(${d1 + d2}px)`, position: "absolute", left: "16px", top: "5944px", width: "361px", height: cs3 ? undefined : 0, overflow: "hidden" }}>
            <div ref={b3}><MobCaseBody c={cases[2]} /></div>
          </div>
        </div>
      </div>
      {!bare && <MobileChrome current="/case-studies" />}
    </div>
  );
}
