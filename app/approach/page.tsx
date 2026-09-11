"use client";
import Link from "next/link";
import React, { useState } from "react";
import Rich from "@/components/Rich";
import { useStageFit } from "@/components/useStageFit";
import { stagesCards, stages, principles } from "@/lib/approach-data";
import { deliverables } from "@/lib/approach-data";
import MobApproach from "@/components/mobile/MobApproach";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import ScrollReveal from "@/components/ScrollReveal";

/** TriHelix Approach.dc.html — 1440x8232 design canvas, scaled to the viewport width.
 *  Press "G" to difference-blend the Figma reference over the page. */
export default function ApproachPage() {
  const [open, setOpen] = useState(false);
  const { stageRef, artRef } = useStageFit(1440, open ? 8232 : 8232 - 426);

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
            position: "absolute", top: 0, left: 0, width: 1440, height: open ? 8232 : 8232 - 426,
            transformOrigin: "0 0",
            color: "#ffffff",
          }}
        >

      {/* Background image covers from the top of the canvas down through the
          end of the "How do you make it work?" accordion section (the
          divider right after it, same top value as that divider below),
          then stops - nothing from WHY TRIHELIX onward uses the image. */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "1440px", height: open ? "6286px" : "5932px", backgroundImage: "url('/assets/approach-bg.png')", backgroundSize: "1440px 8232px", backgroundRepeat: "no-repeat" }}></div>


      {/* NAV */}
      <Link href={"/"} aria-label={"TriHelix home"} style={{ position: "absolute", left: "100px", top: "46px" }}><img src={"/assets/logo-big.webp"} alt={"TriHelix — Clarity. Delivered."} style={{ display: "block", width: "111px" }} /></Link>
      <div style={{ position: "absolute", left: "0", top: "46px", width: "1440px", height: "41px", pointerEvents: "none", fontSize: "16px", lineHeight: "21px", color: "#ffffff" }}>
        <Link className="navlink" aria-current="page" href={"/approach"} style={{ position: "absolute", left: "863px", top: "10px", pointerEvents: "auto" }}>Our Approach</Link>
        <Link className="navlink" href={"/case-studies"} style={{ position: "absolute", left: "1001px", top: "10px", pointerEvents: "auto" }}>Case Studies</Link>
        <Link className="navlink" href={"/about"} style={{ position: "absolute", left: "1132px", top: "10px", pointerEvents: "auto" }}>About Us</Link>
        <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-blue" href={"/contact"} style={{ position: "absolute", left: "1225px", top: "0", pointerEvents: "auto", width: "120px", height: "41px", borderRadius: "999px", background: "#4499ff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>Contact Us</Link>
      </div>

      {/* HERO */}
      <h1 className="rise" style={{ position: "absolute", left: "100px", top: "200px", margin: "0", fontSize: "68px", lineHeight: "76px", fontWeight: "400", letterSpacing: "0.1px", whiteSpace: "nowrap" }}>Don&rsquo;t start with the<br />wrong problem.</h1>
      <p style={{ position: "absolute", left: "100px", top: "381px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "23.5px", lineHeight: "31.5px", fontWeight: "600", whiteSpace: "nowrap" }}>Organizations often look for an AI<br />solution before understanding where<br />the actual problem lies.</p>
      <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-blue" href={"/contact"} style={{ position: "absolute", left: "100px", top: "562px", width: "175px", height: "41px", borderRadius: "999px", background: "#4499ff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>Schedule your call</Link>
      <p style={{ position: "absolute", left: "848px", top: "221px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap" }}>The friction may be in people, workflows, or<br />technology. TriHelix starts by detecting that friction.</p>
      <p style={{ position: "absolute", left: "848px", top: "284px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap" }}>We understand what is getting in the way of the business outcome<br />first. Only then do we determine whether AI is the right answer, or<br />whether the better answer lies elsewhere.</p>
      <p style={{ position: "absolute", left: "848px", top: "361px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", fontWeight: "600" }}>AI-enabled where it matters. Human-led, always.</p>
      <img src={"/assets/Signal.png"} alt={""} style={{ position: "absolute", left: "670px", top: "458px", width: "133px" }} />
      <img src={"/assets/Clarity.png"} alt={""} style={{ position: "absolute", left: "843px", top: "458px", width: "133px" }} />
      <img src={"/assets/Decision.png"} alt={""} style={{ position: "absolute", left: "1014px", top: "460px", width: "133px" }} />
      <img src={"/assets/RealizedValue.png"} alt={""} style={{ position: "absolute", left: "1189px", top: "460px", width: "133px" }} />
      <div style={{ position: "absolute", left: "670px", top: "582px", width: "133px", textAlign: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.92)" }}>Signals</div>
      <div style={{ position: "absolute", left: "843px", top: "582px", width: "133px", textAlign: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.92)" }}>Clarity</div>
      <div style={{ position: "absolute", left: "1014px", top: "582px", width: "133px", textAlign: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.92)" }}>Decision</div>
      <div style={{ position: "absolute", left: "1176px", top: "582px", width: "159px", textAlign: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.92)" }}>Realised Value</div>

      {/* THE IDEA */}
      <div style={{ position: "absolute", left: "100px", top: "731px", width: "92px", height: "38px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.92)" }}>The Idea</div>
      <h2 style={{ position: "absolute", left: "100px", top: "787px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>Diagnose the<br />friction before you<br />deploy the AI</h2>
      <p style={{ position: "absolute", left: "833px", top: "783px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "32px", lineHeight: "42px", fontWeight: "400", whiteSpace: "nowrap" }}>TRIHELIX IS ENTERPRISE<br />TRANSFORMATION, BUILT ON AI.</p>
      <p style={{ position: "absolute", left: "833px", top: "882px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", fontWeight: "600" }}>But we never lead with AI.</p>
      <p style={{ position: "absolute", left: "833px", top: "919px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap" }}>We diagnose where people, workflow and technology actually break.<br />Only then do we bring AI to the friction that deserves it.<br />Most transformations invert this, starting with the technology and<br />working backward to justify it</p>
      <div style={{ position: "absolute", left: "100px", top: "1050px", width: "1240px", height: "1px", background: "rgba(255,255,255,0.18)" }}></div>

      <div style={{ position: "absolute", left: "100px", top: "1101px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "20px", lineHeight: "26px", fontWeight: "600" }}>How most firms work</div>
      <div style={{ position: "absolute", left: "740px", top: "1101px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "20px", lineHeight: "26px", fontWeight: "600" }}>How TriHelix works</div>
      <div style={{ position: "absolute", left: "100px", top: "1160px", width: "599px", height: "110px", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)" }}>
        <div style={{ position: "absolute", left: "41px", top: "41px", fontFamily: "IBM Plex Sans',  sans-serif", fontSize: "17.5px", lineHeight: "24px", color: "rgba(255,255,255,0.94)" }}>AI &rarr; Use Case &rarr; Automation &rarr; People</div>
      </div>
      <div style={{ position: "absolute", left: "740px", top: "1160px", width: "600px", height: "110px", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)" }}>
        <div style={{ position: "absolute", left: "41px", top: "30px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17.5px", lineHeight: "24px", color: "rgba(255,255,255,0.94)" }}>People + Workflow + Technology &rarr; Friction &rarr;<br />Value &rarr; AI / Non-AI &rarr; Outcome</div>
      </div>
      <ul style={{ position: "absolute", left: "100px", top: "1299px", margin: "0", padding: "0 0 0 27px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17.5px", lineHeight: "23px", color: "rgba(255,255,255,0.92)", listStyle: "disc" }}>
        <li>Start with an AI product or platform</li>
        <li>Hunt for a use case to justify it</li>
        <li>Automate the existing workflow as-is</li>
        <li>Discover the people problem too late</li>
      </ul>
      <ul style={{ position: "absolute", left: "740px", top: "1299px", margin: "0", padding: "0 0 0 27px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17.5px", lineHeight: "23px", color: "rgba(255,255,255,0.92)", listStyle: "disc" }}>
        <li>Diagnose people, workflow and technology friction first</li>
        <li>Locate where value is actually trapped</li>
        <li>Ask where AI genuinely removes the friction</li>
        <li>Say plainly when AI is not the answer</li>
      </ul>

      {/* THE ENGINE */}
      <div style={{ position: "absolute", left: "100px", top: "1542px", width: "86px", height: "38px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.92)" }}>Stages</div>
      <h2 style={{ position: "absolute", left: "100px", top: "1598px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>Three stages. One<br />connected path from<br />ambition to realized value.</h2>
      <p style={{ position: "absolute", left: "880px", top: "1596px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "23.5px", lineHeight: "30px", fontWeight: "600", whiteSpace: "nowrap" }}>Transformation decisions should<br />not begin with a solution.</p>
      <p style={{ position: "absolute", left: "880px", top: "1676px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "23px", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap" }}>They should begin with the question: What is standing<br />between the business and the outcome it is trying to<br />achieve?</p>
      <p style={{ position: "absolute", left: "880px", top: "1768px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "23px", fontWeight: "600" }}>TriHelix follows a deliberate progression.</p>

      <div style={{ position: "absolute", left: "100px", top: "1869px", width: "1240px", display: "flex", gap: "38px" }}>
        {stagesCards.map((c, i) => (<React.Fragment key={i}>
          <div style={{ position: "relative", width: "388px", height: "368px", flex: "0 0 auto", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.07)" }}>
            <img src={`${c.icon}`} alt={""} style={{ position: "absolute", left: "277px", top: "23px", width: "110px" }} />
            <div style={{ position: "absolute", left: "29px", top: "49px", fontSize: "40px", lineHeight: "48px" }}><Rich v={c.title} /></div>
            <div style={{ position: "absolute", left: "29px", top: "132px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "23.5px", lineHeight: "31px", fontWeight: "600" }}><Rich v={c.head} /></div>
            <div style={{ position: "absolute", left: "29px", top: "210px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "15px", lineHeight: "21px", color: "rgba(255,255,255,0.86)" }}><Rich v={c.body} /></div>
            <div style={{ position: "absolute", left: "28px", top: "316px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16.3px", lineHeight: "21px", fontWeight: "600" }}><Rich v={c.duration} /></div>
          </div>
        </React.Fragment>))}
      </div>

      {/* STAGES 01 / 02 / 03 */}
      {stages.map((s, i) => (<React.Fragment key={i}>
        <div style={{ position: "absolute", left: "0", top: "0", width: "1440px" }}>
          {/* VALIDATE sits where the shared approach-bg.png's diagonal glow has
              already swept over to the right edge (unlike SENSE/EXECUTE, which
              get more of it), leaving this section's left side flat black.
              Adding a matching glow here rather than repositioning the shared
              background, which would misalign the other two stages. */}
          {i === 1 && (
            <div aria-hidden="true" style={{ position: "absolute", left: "0", top: `${s.yNum - 60}px`, width: "900px", height: "1120px", background: "radial-gradient(ellipse 620px 620px at 15% 45%, rgba(124,58,237,0.30), transparent 68%)", pointerEvents: "none" }} />
          )}
          <div style={{ position: "absolute", left: "100px", top: `${s.yNum}px`, fontSize: "72px", lineHeight: "76px", fontWeight: "400" }}><Rich v={s.num} /></div>
          <div style={{ position: "absolute", left: "100px", top: `${s.yName}px`, fontSize: "54px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px" }}><Rich v={s.name} /></div>
          <img src={`${s.icon}`} alt={""} style={{ position: "absolute", left: `${s.iconX}px`, top: `${s.iconY}px`, width: `${s.iconW}px` }} />
          <div style={{ position: "absolute", left: "100px", top: `${s.yHead}px`, fontSize: "38.7px", lineHeight: "47px", fontWeight: "400", whiteSpace: "nowrap" }}><Rich v={s.head} /></div>
          <div style={{ position: "absolute", left: "100px", top: `${s.ySub}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "23px", lineHeight: "31px", fontWeight: "600", whiteSpace: "nowrap" }}><Rich v={s.sub} /></div>
          <div style={{ position: "absolute", left: "740px", top: `${s.yRight}px`, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "25px", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap" }}><Rich v={s.right} /></div>
          <div style={{ position: "absolute", left: "100px", top: `${s.yHr}px`, width: "1240px", height: "1px", background: "rgba(255,255,255,0.18)" }}></div>
          <div style={{ position: "absolute", left: "100px", top: `${s.yDelTitle}px`, fontSize: "29.5px", lineHeight: "40px", fontWeight: "400" }}>What you will receive - Deliverables</div>
          {deliverables[i].map((dv, j) => (<React.Fragment key={j}>
            <img src={`/${dv.icon}`} alt={""} style={{ position: "absolute", left: `${dv.x}px`, top: `${dv.y}px`, width: `${dv.w}px`, height: `${dv.h}px` }} />
            <div style={{ position: "absolute", left: `${dv.lx}px`, top: `${dv.ly}px`, width: `${dv.lw}px`, textAlign: ("center" in dv && dv.center) ? "center" : "left", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "23px", color: "rgba(255,255,255,0.92)" }}>{dv.label}</div>
          </React.Fragment>))}
          <div style={{ position: "absolute", left: "100px", top: `${s.yBar}px`, width: "1240px", height: "82px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.07)" }}>
            <div style={{ position: "absolute", left: "53px", top: "33px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17px", lineHeight: "24px", color: "rgba(255,255,255,0.94)" }}><Rich v={s.barText} /></div>
            <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-blue" href={"/contact"} style={{ position: "absolute", left: "1014px", top: "22px", width: "177px", height: "38px", borderRadius: "999px", background: "#4499ff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>Schedule your call</Link>
          </div>
        </div>
      </React.Fragment>))}

      {/* ACCORDION — collapsed by default (10-Sep review) */}
      <div style={{ position: "absolute", left: "100px", top: "5724px", width: "1240px", height: "1px", background: "rgba(255,255,255,0.4)" }}></div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="ap-accordion-body"
        style={{ position: "absolute", left: "100px", top: open ? "5766px" : "5753px", width: "1239px", height: "50px", padding: "0", border: "0", background: "transparent", color: "inherit", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "18px", font: "inherit" }}
      >
        <svg viewBox="0 0 1024 1024" width="30" height="30" fill="currentColor" aria-hidden="true" style={{ flex: "0 0 auto" }}>
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" />
          <path d="M688 480H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h352c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
          {!open && <path d="M544 336v352c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8V336c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8z" />}
        </svg>
        <span style={{ fontSize: "22.5px", lineHeight: "34px", fontWeight: 400 }}>How do you make it work?</span>
      </button>
      <div id="ap-accordion-body" hidden={!open}>
      <p style={{ position: "absolute", left: "149px", top: "5817px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "22px", color: "rgba(255,255,255,0.9)" }}>Build the solution. Make it adoptable.</p>
      <ul style={{ position: "absolute", left: "158px", top: "5863px", margin: "0", padding: "0 0 28px 18px", width: "840px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "24px", color: "rgba(255,255,255,0.9)", listStyle: "disc" }}>
        <li style={{ marginBottom: "29px" }}><b>HUMAN-IN-THE-LOOP</b> Judgment stays human; the model assists where it earns trust.<br />Solutions are designed around real users, real decisions, and real business contexts.</li>
        <li style={{ marginBottom: "29px" }}><b>DESIGNED AROUND THE WAY PEOPLE WORK</b> Transformation should not create<br />unnecessary behavioral change. Where possible, solutions fit existing ways of working<br />while making it easier for people to perform tasks, make decisions, or access what they<br />need. Where change is necessary, it is supported deliberately.</li>
        <li style={{ marginBottom: "29px" }}><b>ADOPTION BUILT IN</b> Technology only creates value when the people expected to use<br />it actually adopt it. Through MC&sup3;, Nihilent&rsquo;s patented Change Management Framework,<br />adoption is built into execution so that people, leadership, and the wider organization<br />are prepared to sustain the change.</li>
        <li><b>MEASURE SUCCESS FROM THE OUTSET</b> Success measures are defined from the<br />beginning and tested against agreed business outcomes.</li>
           
      </ul>

      </div>
      <div style={{ position: "absolute", left: "100px", top: open ? "6286px" : "5832px", width: "1240px", height: "1px", background: "rgba(255,255,255,0.4)" }}></div>

      {/* everything below the accordion rides up while it is closed, so the
          fixed canvas has no hole in it */}
      {/* Everything below the accordion rides up while it is closed. No
          transition: the canvas height changes in the same frame, so an
          animated slide left the content moving across a gradient that had
          already jumped - the "gradient shift" in the 10-Sep review. */}
      <div style={{ transform: open ? "none" : "translateY(-426px)" }}>
      {/* WHY TRIHELIX */}
      <img src={"/assets/ap-why-2.webp"} alt={""} style={{ position: "absolute", left: "100px", top: "6510px", width: "500px", height: "560px", borderRadius: "18px" }} />
      <h2 style={{ position: "absolute", left: "633px", top: "6520px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px" }}>Why Trihelix</h2>
      <p style={{ position: "absolute", left: "633px", top: "6593px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "23.1px", lineHeight: "32px", fontWeight: "600" }}>We diagnose before we prescribe.</p>
      <p style={{ position: "absolute", left: "633px", top: "6635px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "22px", color: "rgba(255,255,255,0.9)" }}>Four principles shape every engagement.</p>
      <div style={{ position: "absolute", left: "633px", top: "6703px", width: "707px", display: "grid", gridTemplateColumns: "336px 371px", rowGap: "47px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
        {principles.map((p, i) => (<React.Fragment key={i}>
          <div>
            <div style={{ fontSize: "18px", lineHeight: "22px", fontWeight: "700" }}><Rich v={p.title} /></div>
            <div style={{ marginTop: "10px", fontSize: "18px", lineHeight: "22px", color: "rgba(255,255,255,0.9)" }}><Rich v={p.body} /></div>
          </div>
        </React.Fragment>))}
      </div>
      <div style={{ position: "absolute", left: "633px", top: "6985px", width: "707px", height: "1px", background: "rgba(255,255,255,0.18)" }}></div>
      <p style={{ position: "absolute", left: "633px", top: "7013px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17px", lineHeight: "24px", color: "rgba(255,255,255,0.94)" }}>No transformation for transformation&rsquo;s sake. Only what moves the business forward.</p>

      {/* CTA */}
      <div style={{ position: "absolute", left: "100px", top: "7216px", width: "1240px", height: "440px", borderRadius: "24px", overflow: "hidden", backgroundColor: "#6b1f22", backgroundImage: "url('assets/ap-cta-bg.webp')", backgroundSize: "100% 100%" , border: "1px solid rgba(255,255,255,0.14)"}}>
        <h3 style={{ position: "absolute", left: "60px", top: "59px", margin: "0", fontSize: "68px", lineHeight: "76px", fontWeight: "400", letterSpacing: "0.1px" }}>Start with clarity.</h3>
        <p style={{ position: "absolute", left: "60px", top: "165px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "22px", lineHeight: "32px", fontWeight: "600", whiteSpace: "nowrap" }}>Request your complimentary 60-Minute Sense Conversation.<br />Focused. Prepared. No commitment.</p>
        <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-white" href={"/contact"} style={{ position: "absolute", left: "60px", top: "264px", width: "256px", height: "40px", borderRadius: "999px", background: "#ffffff", color: "#16161b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>Schedule your 60-minute call</Link>
      </div>

      {/* FOOTER */}
      <Footer top={7777} current="approach" />

        </div>
      </div>
      </div>
      </div>
      <div className="only-mobile"><MobApproach /></div>
    </>
  );
}
