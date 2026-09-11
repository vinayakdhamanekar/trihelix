"use client";
import Link from "next/link";
import React from "react";
import Rich from "@/components/Rich";
import { useStageFit } from "@/components/useStageFit";
import { cases } from "@/lib/case-studies-data";
import MobCases from "@/components/mobile/MobCases";
import ContactModal from "@/components/ContactModal";
import ScrollTop from "@/components/ScrollTop";
import ScrollReveal from "@/components/ScrollReveal";

/** TriHelix Case Studies.dc.html — 1440x8418 design canvas, scaled to the viewport width.
 *  Press "G" to difference-blend the Figma reference over the page. */
export default function CaseStudiesPage() {
  const { stageRef, artRef } = useStageFit(1440, 8525);

  return (
    <>
      <ScrollTop />
      <ScrollReveal />
      <ContactModal />
      <div className="only-desktop">
      <div ref={stageRef} style={{ position: "relative", width: "100%", overflow: "hidden", background: "#04040c" }}>
        <div
          ref={artRef}
          style={{
            position: "absolute", top: 0, left: 0, width: 1440, height: 8525,
            transformOrigin: "0 0",
            backgroundImage: "url('/assets/case-bg.png')",
            backgroundSize: "1440px 8418px",
            backgroundRepeat: "no-repeat",
            color: "#ffffff",
          }}
        >



      {/* NAV */}
      <Link href={"/"} aria-label={"TriHelix home"} style={{ position: "absolute", left: "100px", top: "46px" }}><img src={"/assets/logo-big.webp"} alt={"TriHelix — Clarity. Delivered."} style={{ display: "block", width: "111px" }} /></Link>
      <div style={{ position: "absolute", left: "0", top: "46px", width: "1440px", height: "41px", pointerEvents: "none", fontSize: "16px", lineHeight: "21px", color: "#ffffff" }}>
        <Link className="navlink" href={"/approach"} style={{ position: "absolute", left: "863px", top: "10px", pointerEvents: "auto" }}>Our Approach</Link>
        <Link className="navlink" aria-current="page" href={"/case-studies"} style={{ position: "absolute", left: "1001px", top: "10px", pointerEvents: "auto" }}>Case Studies</Link>
        <Link className="navlink" href={"/about"} style={{ position: "absolute", left: "1132px", top: "10px", pointerEvents: "auto" }}>About Us</Link>
        <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-blue" href={"/contact"} style={{ position: "absolute", left: "1225px", top: "0", pointerEvents: "auto", width: "120px", height: "41px", borderRadius: "999px", background: "#4499ff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>Contact Us</Link>
      </div>

      {/* HERO */}
      <h1 className="rise" style={{ position: "absolute", left: "100px", top: "206px", margin: "0", fontSize: "68px", lineHeight: "76px", fontWeight: "400", letterSpacing: "0.1px", whiteSpace: "nowrap" }}>From business friction to AI<br />that works.</h1>
      <p style={{ position: "absolute", left: "100px", top: "394px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "31px", whiteSpace: "nowrap" }}>Real transformation starts before the technology. These engagements show how TriHelix<br />identifies where value is being lost, validates where AI can make a difference, and turns the<br />opportunity into something the business can actually use.</p>
      <p style={{ position: "absolute", left: "100px", top: "519px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17px", lineHeight: "22px", letterSpacing: "0.4px", color: "rgba(255,255,255,0.86)" }}>AI SUCCESS STORIES &middot; DIAGNOSTIC-LED TRANSFORMATION</p>

      {/* CASE BLOCKS */}
      {cases.map((cs, i) => (<React.Fragment key={i}>
        <div id={`case-${i + 1}`} style={{ position: "absolute", left: "0", top: `${cs.top}px`, width: "1440px", height: "2355px", scrollMarginTop: "40px" }}>
          <div style={{ position: "absolute", left: "100px", top: "0", height: "38px", padding: "0 17px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.4)", display: "inline-flex", alignItems: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", fontWeight: "600", letterSpacing: "0.7px", color: "rgba(255,255,255,0.94)" }}><Rich v={cs.pill} /></div>
          <div style={{ position: "absolute", left: "100px", top: `${cs.yHead}px`, fontSize: "52px", lineHeight: "67px", fontWeight: "400", letterSpacing: "0.3px", whiteSpace: "nowrap" }}><Rich v={cs.headline} /></div>
          <div style={{ position: "absolute", left: "100px", top: `${cs.ySub}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "22px", lineHeight: "30px", fontWeight: "600", whiteSpace: "nowrap" }}><Rich v={cs.subline} /></div>

          <div style={{ position: "absolute", left: "513px", top: `${cs.yMeta}px`, width: "1px", height: "82px", background: "rgba(255,255,255,0.22)" }}></div>
          <div style={{ position: "absolute", left: "926px", top: `${cs.yMeta}px`, width: "1px", height: "82px", background: "rgba(255,255,255,0.22)" }}></div>
          <div style={{ position: "absolute", left: "100px", top: `${cs.yMeta}px`, width: "1240px", display: "grid", gridTemplateColumns: "413px 413px 414px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
            <div>
              <div style={{ fontSize: "14px", lineHeight: "20px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.68)" }}>INDUSTRY</div>
              <div style={{ marginTop: "9px", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.94)" }}><Rich v={cs.industry} /></div>
            </div>
            <div style={{ paddingLeft: "34px" }}>
              <div style={{ fontSize: "14px", lineHeight: "20px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.68)" }}>GEOGRAPHY</div>
              <div style={{ marginTop: "9px", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.94)" }}><Rich v={cs.geography} /></div>
            </div>
            <div style={{ paddingLeft: "34px" }}>
              <div style={{ fontSize: "14px", lineHeight: "20px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.68)" }}>CLIENT PROFILE</div>
              <div style={{ marginTop: "9px", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.94)" }}><Rich v={cs.client} /></div>
            </div>
          </div>

          <img src={`${cs.photo}`} alt={""} style={{ position: "absolute", left: "100px", top: `${cs.yPhoto}px`, width: "1240px", height: "500px", borderRadius: "30px", objectFit: "cover" }} />

          <div style={{ position: "absolute", left: "100px", top: `${cs.ySection}px`, fontSize: "30px", lineHeight: "42px", fontWeight: "400", whiteSpace: "nowrap" }}><Rich v={cs.sectionHead} /></div>

          <div style={{ position: "absolute", left: "100px", top: `${cs.yProbLbl}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.68)" }}>THE PROBLEM</div>
          <div style={{ position: "absolute", left: "100px", top: `${cs.yProb}px`, width: "600px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "23px", color: "#ffffff" }}><Rich v={cs.problem} /></div>
          <div style={{ position: "absolute", left: "740px", top: `${cs.yProbLbl}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.68)" }}>OUR RESPONSE</div>
          <div style={{ position: "absolute", left: "740px", top: `${cs.yProb}px`, width: "620px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "23px", color: "#ffffff" }}><Rich v={cs.response} /></div>

          <div style={{ position: "absolute", left: "100px", top: `${cs.yHow}px`, fontSize: "33px", lineHeight: "40px", fontWeight: "400", letterSpacing: "0.3px" }}>HOW TRIHELIX SHAPED THE ENGAGEMENT</div>
          <div style={{ position: "absolute", left: "100px", top: `${cs.yCol}px`, width: "1240px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "40px" }}>
            <div>
              <div style={{ fontSize: "25px", lineHeight: "32px" }}>What we discovered</div>
              <div style={{ marginTop: "11px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "25px", color: "#ffffff" }}><Rich v={cs.discovered} /></div>
            </div>
            <div>
              <div style={{ fontSize: "25px", lineHeight: "32px" }}>How we validated</div>
              <div style={{ marginTop: "11px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "25px", color: "#ffffff" }}><Rich v={cs.validated} /></div>
            </div>
            <div>
              <div style={{ fontSize: "25px", lineHeight: "32px" }}>What we delivered</div>
              <div style={{ marginTop: "11px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "25px", color: "#ffffff" }}><Rich v={cs.delivered} /></div>
            </div>
          </div>

          <div style={{ position: "absolute", left: "100px", top: `${cs.yDiv1}px`, width: "1240px", height: "1px", background: "rgba(255,255,255,0.18)" }}></div>
          <div style={{ position: "absolute", left: "100px", top: `${cs.yWcLbl}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "30px", fontWeight: "500", color: "rgba(255,255,255,0.72)" }}>WHAT CHANGED</div>
          <div style={{ position: "absolute", left: "526px", top: `${cs.yWcHead}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "30px", fontWeight: "500" }}>BEFORE</div>
          <div style={{ position: "absolute", left: "952px", top: `${cs.yWcHead}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "30px", fontWeight: "500" }}>AFTER</div>
          <div style={{ position: "absolute", left: "526px", top: `${cs.yWcVal}px`, width: "400px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "25px", color: "#ffffff" }}><Rich v={cs.before} /></div>
          <div style={{ position: "absolute", left: "952px", top: `${cs.yWcVal}px`, width: "400px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "25px", color: "#ffffff" }}><Rich v={cs.after} /></div>

          <div style={{ position: "absolute", left: "100px", top: `${cs.yDiv2}px`, width: "1240px", height: "1px", background: "rgba(255,255,255,0.18)" }}></div>
          <div style={{ position: "absolute", left: "100px", top: `${cs.yCxoLbl}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "30px", fontWeight: "500", color: "rgba(255,255,255,0.72)" }}>THE CXO TAKEAWAY</div>
          <div style={{ position: "absolute", left: "526px", top: `${cs.yCxoBold}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17px", lineHeight: "24px", fontWeight: "600" }}><Rich v={cs.takeawayBold} /></div>
          <div style={{ position: "absolute", left: "526px", top: `${cs.yCxoBody}px`, width: "814px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "25px", color: "#ffffff" }}><Rich v={cs.takeawayBody} /></div>
        </div>
      </React.Fragment>))}

      {/* CTA */}
      <div style={{ position: "absolute", left: "100px", top: "7501px", width: "1240px", height: "440px", borderRadius: "24px", overflow: "hidden", backgroundColor: "#4b3f9e", backgroundImage: "url('assets/case-cta-grad-2.webp')", backgroundSize: "100% 100%" , border: "1px solid rgba(255,255,255,0.14)"}}>
        <h3 style={{ position: "absolute", left: "62px", top: "59px", margin: "0", fontSize: "68px", lineHeight: "76px", fontWeight: "400", letterSpacing: "0.1px", whiteSpace: "nowrap" }}>Let&rsquo;s talk about what<br />comes next.</h3>
        <p style={{ position: "absolute", left: "60px", top: "240px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "23.6px", lineHeight: "31px", fontWeight: "600", whiteSpace: "nowrap" }}>The right transformation opportunity may not be obvious yet.<br />That&rsquo;s where a conversation begins.</p>
        <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-white" href={"/contact"} style={{ position: "absolute", left: "60px", top: "339px", width: "256px", height: "40px", borderRadius: "999px", background: "#ffffff", color: "#16161b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>Schedule your 60-minute call</Link>
      </div>

      {/* FOOTER */}
      <Link href={"/"} aria-label={"TriHelix home"} style={{ position: "absolute", left: "100px", top: "8071px", display: "block", width: "242px" }}><img src={"/assets/logo-big.webp"} alt={"TriHelix"} style={{ display: "block", width: "242px" }} /></Link>
      <p style={{ position: "absolute", left: "100px", top: "8164px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12.5px", lineHeight: "20px", color: "rgba(255,255,255,0.7)" }}>TriHelix is a proprietary framework of Nihilent LTD.</p>
      <div style={{ position: "absolute", left: "100px", top: "8207px", width: "1240px", height: "1px", background: "rgba(255,255,255,0.16)" }}></div>
      <div style={{ position: "absolute", left: "100px", top: "8259px", width: "1240px", display: "grid", gridTemplateColumns: "212px 786px 242px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16.5px", lineHeight: "22px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "19px" }}>
          <Link className="navlink" href={"/approach"}>Our Approach</Link>
          <Link className="navlink" aria-current="page" href={"/case-studies"}>Case Studies</Link>
          <Link className="navlink" href={"/about"}>About Us</Link>
          <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="navlink" href={"/contact"}>Contact Us</Link>
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
      <p style={{ position: "absolute", left: "0", top: "8447px", width: "1440px", margin: "0", textAlign: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16.3px", lineHeight: "20px", color: "rgba(255,255,255,0.86)" }}>&copy; 2026 TriHelix. All rights reserved.</p>
      <div style={{ position: "absolute", left: "1208px", top: "8445px", display: "flex", alignItems: "center", gap: "22px" }}>
        <a className="social" href="https://www.linkedin.com/company/nihilent/" target="_blank" rel="noopener noreferrer" aria-label="TriHelix on LinkedIn"><img src="/assets/icon-linkedin.webp" alt="" style={{ display: "block", width: "22px" }} /></a>
        <a className="social" href="mailto:Info@nihilent.com" aria-label="Email Info@nihilent.com"><img src="/assets/icon-email.webp" alt="" style={{ display: "block", width: "22px" }} /></a>
        <a className="social" href="tel:+912039846100" aria-label="Call +91 (20) 3984 6100"><img src="/assets/icon-phone.webp" alt="" style={{ display: "block", width: "20px" }} /></a>
      </div>
  
        </div>
      </div>
      </div>
      <div className="only-mobile"><MobCases /></div>
    </>
  );
}
