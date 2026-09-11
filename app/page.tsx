"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import React from "react";
import Rich from "@/components/Rich";
import CircleArrow from "@/components/CircleArrow";
import useSwipe from "@/components/useSwipe";
import { useStageFit } from "@/components/useStageFit";
import { slides } from "@/lib/home-data";
import MobHome from "@/components/mobile/MobHome";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import ScrollReveal from "@/components/ScrollReveal";

/** TriHelix Home.dc.html — 1440x7340 design canvas, scaled to the viewport width.
 *  Press "G" to difference-blend the Figma reference over the page. */
export default function HomePage() {
  const { stageRef, artRef } = useStageFit(1440, 7440);
  const [slide, setSlide] = useState(0);
  const track = useRef<HTMLDivElement | null>(null);
  const SLIDE_STEP = 702 + 46;
  const go = (i: number) => setSlide(((i % 3) + 3) % 3);
  // Move the track in an effect rather than inside the click handler: the
  // handlers are built during render, and reading a ref there is not allowed.
  useEffect(() => {
    if (track.current) track.current.style.transform = `translateX(${-slide * SLIDE_STEP}px)`;
  }, [slide, SLIDE_STEP]);
  const trackRef = track;
  const dots = [0, 1, 2].map((i) => ({ go: () => go(i), bg: slide === i ? "#ffffff" : "rgba(255,255,255,0)" }));
  const prev = () => go(slide - 1);
  const next = () => go(slide + 1);
  const swipe = useSwipe(prev, next);

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
            position: "absolute", top: 0, left: 0, width: 1440, height: 7440,
            transformOrigin: "0 0",
            backgroundImage: "url('/assets/home-bg.png')",
            backgroundSize: "1440px 7340px",
            backgroundRepeat: "no-repeat",
            color: "#ffffff",
          }}
        >

      {/* The base backgroundImage above is a single static image, painted once
          at its native 0,0 position - it never moved when the Case Studies and
          Engine-onward sections below were pushed down (twice) to add more
          breathing room. These two layers re-align it to the content's new
          position, each sourcing the same image shifted up by exactly the
          delta its section was pushed down by, so the gradient-to-black
          transition baked into the artwork lines up with the content again
          instead of appearing early, mid-section. */}
      <div style={{ position: "absolute", left: "0", top: "2585px", width: "1440px", height: "724px", backgroundImage: "url('/assets/home-bg.png')", backgroundSize: "1440px 7340px", backgroundPosition: "0 -2576px", backgroundRepeat: "no-repeat" }}></div>
      <div style={{ position: "absolute", left: "0", top: "3290px", width: "1440px", height: "4150px",  backgroundSize: "1440px 7340px", backgroundPosition: "0 -3240px", backgroundRepeat: "no-repeat" }}></div>

      {/* ============ NAV ============ */}
      <Link href={"/"} aria-label={"TriHelix home"} style={{ position: "absolute", left: "100px", top: "46px" }}><img src={"/assets/logo-big.webp"} alt={"TriHelix — Clarity. Delivered."} style={{ display: "block", width: "111px" }} /></Link>
      <div style={{ position: "absolute", left: "0", top: "46px", width: "1440px", height: "41px", pointerEvents: "none", fontSize: "16px", lineHeight: "21px", color: "#ffffff" }}>
        <Link className="navlink" href={"/approach"} style={{ position: "absolute", left: "863px", top: "10px", pointerEvents: "auto" }}>Our Approach</Link>
        <Link className="navlink" href={"/case-studies"} style={{ position: "absolute", left: "1001px", top: "10px", pointerEvents: "auto" }}>Case Studies</Link>
        <Link className="navlink" href={"/about"} style={{ position: "absolute", left: "1132px", top: "10px", pointerEvents: "auto" }}>About Us</Link>
        <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-blue" href={"/contact"} style={{ position: "absolute", left: "1225px", top: "0", pointerEvents: "auto", width: "120px", height: "41px", borderRadius: "999px", background: "#4499ff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>Contact Us</Link>
      </div>

      {/* ============ HERO ============ */}
      <h1 className="rise" style={{ position: "absolute", left: "100px", top: "190.5px", margin: "0", fontSize: "68px", lineHeight: "79.5px", fontWeight: "400", letterSpacing: "0.1px", whiteSpace: "nowrap" }}>Most AI investment goes<br />where it&rsquo;s easy, not where it<br />matters.</h1>
      <p className="rise" style={{ position: "absolute", left: "100px", top: "449px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "34px", whiteSpace: "nowrap" }}>TriHelix identifies where AI can actually impact revenue, cost or risk &mdash; with precision.</p>
      <p className="rise" style={{ position: "absolute", left: "100px", top: "506px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "23.6px", lineHeight: "28px", fontWeight: "600" }}>Clarity. Delivered.</p>
      <p style={{ position: "absolute", left: "100px", top: "560px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "22px", color: "rgba(255,255,255,0.86)" }}>Schedule your first call. 60 min. Free. No obligation.</p>
      <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-blue" href={"/contact"} style={{ position: "absolute", left: "100px", top: "607px", width: "175px", height: "41px", borderRadius: "999px", background: "#4499ff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>Schedule your call</Link>

      <div className="rise" style={{ position: "absolute", left: "100px", top: "750px", width: "1240px", height: "166px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.10)", display: "grid", gridTemplateColumns: "276px 298px 308px 358px", alignItems: "center", fontSize: "26px", lineHeight: "37px", textAlign: "center" }}>
        <div>25+ Years of<br />Experience</div>
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}>Patented MC&sup3;<br />Framework</div>
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}>Enterprise<br />Engineering</div>
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}>Global Transformation<br />Experience</div>
      </div>

      {/* ============ FRICTION ============ */}
      <div style={{ position: "absolute", left: "100px", top: "1132px", height: "39px", padding: "0 15px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.92)" }}>Friction</div>
      <h2 style={{ position: "absolute", left: "100px", top: "1190px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>The hardest part of transformation isn&rsquo;t knowing<br />what to change.</h2>
      <p style={{ position: "absolute", left: "100px", top: "1355px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "30px", whiteSpace: "nowrap" }}>It&rsquo;s getting everything to change at the same time.<br />TriHelix brings these pieces together&mdash;so transformation moves beyond initiatives to outcomes.</p>
      <div style={{ position: "absolute", left: "100px", top: "1503px", width: "1240px", display: "grid", gridTemplateColumns: "430px 460px 350px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
        <div>
          <div style={{ fontSize: "32px", lineHeight: "38px" }}>THE STRATEGY IS CLEAR</div>
          <div style={{ marginTop: "10px", fontSize: "15px", lineHeight: "22px", fontWeight: "600" }}>But execution stalls.</div>
        </div>
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.16)", paddingLeft: "38px" }}>
          <div style={{ fontSize: "32px", lineHeight: "38px" }}>THE TECHNOLOGY<br />WORKS</div>
          <div style={{ marginTop: "10px", fontSize: "15px", lineHeight: "22px", fontWeight: "600" }}>But adoption doesn&rsquo;t.</div>
        </div>
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.16)", paddingLeft: "46px" }}>
          <div style={{ fontSize: "32px", lineHeight: "38px" }}>THE PILOT SHOWS<br />PROMISE</div>
          <div style={{ marginTop: "10px", fontSize: "15px", lineHeight: "22px", fontWeight: "600" }}>But scaling it across the enterprise becomes a<br />different problem.</div>
        </div>
      </div>

      {/* ============ APPROACH ============ */}
      <div style={{ position: "absolute", left: "100px", top: "1751px", height: "39px", padding: "0 15px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.92)" }}>Approach</div>
      <h2 style={{ position: "absolute", left: "100px", top: "1809px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>Start small. Prove value. Then go big.</h2>
      <p style={{ position: "absolute", left: "100px", top: "1906px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "30px", whiteSpace: "nowrap" }}>TriHelix replaces the traditional leap with a progressive path. Build understanding first. Prove<br />the opportunity next. Scale what works with confidence.</p>
      <div style={{ position: "absolute", left: "100px", top: "2006px", width: "1240px", display: "grid", gridTemplateColumns: "388px 388px 388px", justifyContent: "space-between" }}>
        <div className="rise rise-1" style={{ position: "relative", height: "416px", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.17)", pointerEvents: "none" }}>
          <img src={"/assets/Sense.png"} alt={""} style={{ position: "absolute", left: "20px", top: "67px", width: "140px" }} />
          <div style={{ position: "absolute", left: "39px", top: "212px", fontSize: "40px", lineHeight: "44px" }}>Sense</div>
          <div style={{ position: "absolute", left: "39px", top: "274px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "26px" }}>Find the opportunity.</div>
          <div style={{ position: "absolute", left: "38px", top: "315px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.9)" }}>60-minute CXO conversation<br />Understand the ambition, constraints and<br />friction.</div>
        </div>
        <div className="rise rise-1" style={{ position: "relative", height: "416px", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.17)", pointerEvents: "none" }}>
          <img src={"/assets/Validate.png"} alt={""} style={{ position: "absolute", left: "20px", top: "67px", width: "140px" }} />
          <div style={{ position: "absolute", left: "39px", top: "212px", fontSize: "40px", lineHeight: "44px" }}>Validate</div>
          <div style={{ position: "absolute", left: "39px", top: "274px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "26px" }}>Prove what matters.</div>
          <div style={{ position: "absolute", left: "38px", top: "315px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.9)" }}>3-week diagnostic<br />Test assumptions, identify priorities and<br />define the path to value.</div>
        </div>
        <div className="rise rise-1" style={{ position: "relative", height: "416px", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.17)", pointerEvents: "none" }}>
          <img src={"/assets/Execute.png"} alt={""} style={{ position: "absolute", left: "24px", top: "67px", width: "140px" }} />
          <div style={{ position: "absolute", left: "39px", top: "212px", fontSize: "40px", lineHeight: "44px" }}>Execute</div>
          <div style={{ position: "absolute", left: "39px", top: "274px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "26px" }}>Make it real.</div>
          <div style={{ position: "absolute", left: "38px", top: "315px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.9)" }}>90- day sprint. Deploy 1-2 priority<br />initiatives and measure what changes.</div>
        </div>
      </div>

      {/* Review 10-Sep: the three cards needed somewhere to go. */}
      <Link className="cta cta-blue" href={"/approach"} style={{ position: "absolute", left: "100px", top: "2481px", width: "302px", height: "41px", borderRadius: "999px", background: "#4499ff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>Learn more about TriHelix Approach</Link>

      {/* ============ CASE CAROUSEL ============ */}
      {/* CASE-LABEL */}
      {/* CASE-LABEL */}
<div style={{ position: "absolute", left: "100px", top: "2621px", height: "39px", padding: "0 15px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.92)" }}>Case Studies</div>
<h2 style={{ position: "absolute", left: "100px", top: "2678px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>Ideas are easy.<br />Making them<br />work is harder.</h2>
<p style={{ position: "absolute", left: "100px", top: "2904px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "31px", whiteSpace: "nowrap" }}>Real transformation isn&rsquo;t measured<br />by the size of the programme. It&rsquo;s<br />measured by what changes in the<br />business. Explore how TriHelix has<br />turned targeted interventions into<br />measurable outcomes.</p>
<div {...swipe} style={{ position: "absolute", left: "630px", top: "2616px", width: "810px", height: "509px", overflow: "hidden", ...swipe.style }}>
        <div ref={trackRef} style={{ position: "absolute", left: "0", top: "0", display: "flex", gap: "46px", transition: "transform 520ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
          {slides.map((slide, i) => (<React.Fragment key={i}>
            <Link href={"/case-studies"} className="case-link"  style={{ position: "relative", width: "702px", height: "509px", borderRadius: "26px", overflow: "hidden", flex: "0 0 auto", display: "block" }}>
              <img src={`${slide.img}`} alt={""} style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", objectFit: "fill" }} />
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "260px", background: "linear-gradient(to top, rgba(0,0,0,0.66), rgba(0,0,0,0))" }}></div>
              <div style={{ position: "absolute", left: "40px", right: "40px", bottom: "34px" }}>
                <div style={{ fontSize: "31px", lineHeight: "40px", color: "#ffffff" }}><Rich v={slide.title} /></div>
                <div style={{ marginTop: "10px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "15px", lineHeight: "20px", color: "rgba(255,255,255,0.94)" }}><Rich v={slide.body} /></div>
                <span className="readlink" style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "14px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: "#ffffff" }}><span className="readlink-text">Read case study</span> <span aria-hidden="true" className="arrow-icon" style={{ fontSize: "17px", lineHeight: 1, display: "inline-block" }}>&rsaquo;</span></span>
                
              </div>
            </Link>
          </React.Fragment>))}
        </div>
      </div>
      {slide > 0 && (
        <button type={"button"} onClick={prev} aria-label={"Previous case study"} style={{ position: "absolute", left: "536px", top: "2804px", width: "58px", height: "58px", padding: "0", border: "0", borderRadius: "999px", background: "transparent", cursor: "pointer" }}>
          <CircleArrow dir="left" />
        </button>
      )}
      <button type={"button"} onClick={next} aria-label={"Next case study"} style={{ position: "absolute", left: "1368px", top: "2804px", width: "58px", height: "58px", padding: "0", border: "0", borderRadius: "999px", background: "transparent", cursor: "pointer" }}>
        <CircleArrow dir="right" />
      </button>
      {/* Dots and the "View case studies" button share one bottom edge
          (3160px) so the section closes on a single clean line, with a
          deliberate 180px gap before the Engine section - replacing what
          was an unintentional 177px/2px-misaligned gap left over from
          earlier, unrelated spacing edits. */}
      <div style={{ position: "absolute", left: "941px", top: "3146px", display: "flex", gap: "28px" }}>
        {dots.map((dot, i) => (<React.Fragment key={i}>
          <button type={"button"} onClick={dot.go} style={{ width: "14px", height: "14px", padding: "0", borderRadius: "999px", cursor: "pointer", border: "1px solid rgba(255,255,255,0.9)", background: `${dot.bg}` }}></button>
        </React.Fragment>))}
      </div>

      <Link className="cta cta-white" href={"/case-studies"} style={{ position: "absolute", left: "100px", top: "3119px", width: "196px", height: "41px", borderRadius: "999px", background: "#ffffff", color: "#16161b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>View case studies</Link>

      {/* ============ ENGINE ============ */}
      <div style={{ position: "absolute", left: "100px", top: "3290px", height: "39px", padding: "0 15px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.92)" }}>Engine</div>
      <h2 style={{ position: "absolute", left: "100px", top: "3348px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>Transformation happens at the intersection of<br />three things.</h2>
      <p style={{ position: "absolute", left: "100px", top: "3513px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "30px", whiteSpace: "nowrap" }}>Our advantage comes from bringing People, Technology and Workflow into the same transformation conversation&mdash;<br />so what gets built is valuable, usable and adopted.</p>
      <img src={"/assets/People.png"} alt={""} style={{ position: "absolute", left: "129px", top: "3654px", width: "142px" }} />
      <img src={"/assets/Technology.png"} alt={""} style={{ position: "absolute", left: "553px", top: "3638px", width: "151px" }} />
      <img src={"/assets/Workflows.png"} alt={""} style={{ position: "absolute", left: "985px", top: "3634px", width: "145px" }} />
      <div style={{ position: "absolute", left: "100px", top: "3842px", width: "1240px", display: "grid", gridTemplateColumns: "388px 420px 432px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
        <div>
          <div style={{ fontSize: "32px", lineHeight: "38px" }}>PEOPLE</div>
          <div style={{ fontSize: "15px", lineHeight: "22px", fontWeight: "600" }}>But execution stalls.</div>
          <div style={{ marginTop: "29px", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.9)" }}>Patented MC&sup3;, a structured approach to moving<br />people from intent to adoption to sustained<br />capability.</div>
        </div>
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.16)", paddingLeft: "40px" }}>
          <div style={{ fontSize: "32px", lineHeight: "38px" }}>TECHNOLOGY</div>
          <div style={{ fontSize: "15px", lineHeight: "22px", fontWeight: "600" }}>Technology we actually build.</div>
          <div style={{ marginTop: "29px", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.9)" }}>Connect technology, processes and people around<br />how work actually gets done&mdash;turning new<br />capabilities into everyday business outcomes.</div>
        </div>
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.16)", paddingLeft: "54px" }}>
          <div style={{ fontSize: "32px", lineHeight: "38px" }}>WORKFLOWS</div>
          <div style={{ fontSize: "15px", lineHeight: "22px", fontWeight: "600" }}>Make transformation work in the flow of<br />work.</div>
          <div style={{ marginTop: "29px", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.9)" }}>Enterprise engineering across data, AI, MLOps and<br />productisation. If AI isn&rsquo;t the right answer, we&rsquo;ll tell<br />you before you spend on it.</div>
        </div>
      </div>

      {/* ============ MC3 ============ */}
      <img src={"/assets/home-mc3-2.webp"} alt={"MC³ framework"} style={{ position: "absolute", left: "838px", top: "4194px", width: "496px", height: "590px", borderRadius: "18px" }} />
      <div style={{ position: "absolute", left: "100px", top: "4256px", height: "39px", padding: "0 15px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.92)" }}>Framework</div>
      <h2 style={{ position: "absolute", left: "100px", top: "4311px", margin: "0", fontSize: "53.5px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px" }}>Patented MC&sup3;</h2>
      <p style={{ position: "absolute", left: "100px", top: "4408px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "30px", fontWeight: "600" }}>The MC3&reg; framework is a structured change<br />methodology designed to move people from<br />initial awareness to sustained operational<br />capability.</p>
      <p style={{ position: "absolute", left: "100px", top: "4563px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "22px", color: "rgba(255,255,255,0.88)" }}>Since 2003, this patented model has been an integral driver<br />of Nihilent&rsquo;s business transformation work, helping<br />organizations successfully navigate complex change by<br />aligning performance with execution</p>

      {/* ============ PERSPECTIVE ============ */}
      <img src={"/assets/home-office-2.webp"} alt={""} style={{ position: "absolute", left: "100px", top: "4964px", width: "494px", height: "550px", borderRadius: "20px", objectFit: "cover" }} />
      <div style={{ position: "absolute", left: "740px", top: "5048px", height: "39px", padding: "0 15px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.92)" }}>Perspective</div>
      <h2 style={{ position: "absolute", left: "741px", top: "5106px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>We don&rsquo;t just advise on<br />what&rsquo;s possible. We<br />build it.</h2>
      <p style={{ position: "absolute", left: "740px", top: "5335px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "31px", whiteSpace: "nowrap" }}>Our advantage comes from bringing People, Technology<br />and Design into the same transformation conversation-<br />so what gets built is valuable, usable and adopted.</p>

      <div style={{ position: "absolute", left: "100px", top: "5580px", width: "1240px", height: "1px", background: "rgba(255,255,255,0.16)" }}></div>
      <div style={{ position: "absolute", left: "100px", top: "5620px", width: "1240px", display: "grid", gridTemplateColumns: "416px 418px 406px" }}>
        <div>
          <div style={{ fontSize: "29.7px", lineHeight: "34px" }}>Full-stack engineering</div>
          <div style={{ marginTop: "29px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17.5px", lineHeight: "21px", color: "rgba(255,255,255,0.88)" }}>Data &rarr; AI &rarr; MLOps &rarr; productisation</div>
        </div>
        <div>
          <div style={{ fontSize: "29.7px", lineHeight: "34px" }}>Production, not prototypes</div>
          <div style={{ marginTop: "29px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17.5px", lineHeight: "21px", color: "rgba(255,255,255,0.88)" }}>Enterprise systems that actually operate in the<br />real world.</div>
        </div>
        <div>
          <div style={{ fontSize: "29.7px", lineHeight: "34px" }}>Honest AI counsel</div>
          <div style={{ marginTop: "29px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17.5px", lineHeight: "21px", color: "rgba(255,255,255,0.88)" }}>If AI isn&rsquo;t the right answer, we&rsquo;ll tell you before<br />you invest.</div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "100px", top: "5764px", width: "1240px", height: "1px", background: "rgba(255,255,255,0.16)" }}></div>

      {/* ============ BUILT ON 25+ ============ */}
      <div style={{ position: "absolute", left: "100px", top: "5842px", width: "1240px", height: "512px", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.10)" }}>
        <h3 style={{ position: "absolute", left: "61px", top: "81px", margin: "0", fontSize: "53px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>Built on 25+ years of transformation<br />experience.</h3>
        <p style={{ position: "absolute", left: "61px", top: "258px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "22.3px", lineHeight: "30px", whiteSpace: "nowrap" }}>AI can create enormous value&mdash;but not every problem needs AI. We help leaders make informed decisions<br />before committing significant resources, and build only where the business case is real</p>
        <div style={{ position: "absolute", left: "61px", top: "359px", width: "1150px", display: "grid", gridTemplateColumns: "258px 260px 258px 366px" }}>
          <div>
            <div style={{ fontSize: "55px", lineHeight: "60px" }}>2,800+</div>
            <div style={{ marginTop: "6px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "24px", color: "rgba(255,255,255,0.86)" }}>professionals</div>
          </div>
          <div>
            <div style={{ fontSize: "55px", lineHeight: "60px" }}>50+</div>
            <div style={{ marginTop: "6px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "24px", color: "rgba(255,255,255,0.86)" }}>countries</div>
          </div>
          <div>
            <div style={{ fontSize: "55px", lineHeight: "60px" }}>15+</div>
            <div style={{ marginTop: "6px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "24px", color: "rgba(255,255,255,0.86)" }}>locations</div>
          </div>
          <div>
            <div style={{ fontSize: "55px", lineHeight: "60px" }}>18,00+</div>
            <div style={{ marginTop: "6px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "24px", color: "rgba(255,255,255,0.86)" }}>customers</div>
          </div>
        </div>
      </div>

      {/* ============ CTA ============ */}
      <div style={{ position: "absolute", left: "100px", top: "6442px", width: "1240px", height: "439px", borderRadius: "24px", overflow: "hidden", backgroundColor: "#9c4a10", backgroundImage: "url('assets/home-cta-grad-2.webp')", backgroundSize: "100% 100%" , border: "1px solid rgba(255,255,255,0.14)"}}>
        <h3 style={{ position: "absolute", left: "61px", top: "60px", margin: "0", fontSize: "68.7px", lineHeight: "78px", fontWeight: "400", letterSpacing: "0.1px", whiteSpace: "nowrap" }}>Start with a conversation.<br />Not a commitment.</h3>
        <p style={{ position: "absolute", left: "61px", top: "238px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "30px", fontWeight: "500", whiteSpace: "nowrap" }}>Bring us the transformation challenge you&rsquo;re wrestling with. In 60 minutes, we&rsquo;ll help you<br />understand what&rsquo;s really at stake and what deserves attention next.</p>
        <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-white" href={"/contact"} style={{ position: "absolute", left: "60px", top: "339px", width: "256px", height: "40px", borderRadius: "999px", background: "#ffffff", color: "#16161b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>Schedule your 60-minute call</Link>
      </div>

      {/* ============ FOOTER ============ */}
      <Footer top={6984} />

        </div>
      </div>
      </div>
      <div className="only-mobile"><MobHome /></div>
    </>
  );
}
