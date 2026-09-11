"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import Rich from "@/components/Rich";
import { useStageFit } from "@/components/useStageFit";
import { leaders, regional, experts } from "@/lib/about-data";
import PeopleRow from "@/components/PeopleRow";
import ContactForm from "@/components/ContactForm";
import MobContact from "@/components/mobile/MobContact";
import ContactModal from "@/components/ContactModal";
import ScrollTop from "@/components/ScrollTop";
import ScrollReveal from "@/components/ScrollReveal";

/** TriHelix Contact Us.dc.html — 1440x5344 design canvas, scaled to the viewport width.
 *  Press "G" to difference-blend the Figma reference over the page. */
export default function ContactPage() {
  const { stageRef, artRef } = useStageFit(1440, 5344);
  const [modalOpen, setModalOpen] = useState(true);
  const modalDisplay = modalOpen ? "block" : "none";
  const closeModal = () => setModalOpen(false);

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
            position: "absolute", top: 0, left: 0, width: 1440, height: 5344,
            transformOrigin: "0 0",
            backgroundImage: "url('/assets/about-bg.png')",
            backgroundSize: "1440px 5344px",
            backgroundRepeat: "no-repeat",
            color: "#ffffff",
          }}
        >



      <div style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "5344px" }}>

      {/* NAV */}
      <Link href={"/"} aria-label={"TriHelix home"} style={{ position: "absolute", left: "100px", top: "46px" }}><img src={"/assets/logo-big.webp"} alt={"TriHelix — Clarity. Delivered."} style={{ display: "block", width: "111px" }} /></Link>
      <div style={{ position: "absolute", left: "0", top: "46px", width: "1440px", height: "41px", pointerEvents: "none", fontSize: "16px", lineHeight: "21px", color: "#ffffff" }}>
        <Link className="navlink" href={"/approach"} style={{ position: "absolute", left: "863px", top: "10px", pointerEvents: "auto" }}>Our Approach</Link>
        <Link className="navlink" href={"/case-studies"} style={{ position: "absolute", left: "1001px", top: "10px", pointerEvents: "auto" }}>Case Studies</Link>
        <Link className="navlink" href={"/about"} style={{ position: "absolute", left: "1132px", top: "10px", pointerEvents: "auto" }}>About Us</Link>
        <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-blue" href={"/contact"} style={{ position: "absolute", left: "1225px", top: "0", pointerEvents: "auto", width: "120px", height: "41px", borderRadius: "999px", background: "#4499ff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>Contact Us</Link>
      </div>

      {/* HERO */}
      <h1 style={{ position: "absolute", left: "100px", top: "172px", margin: "0", fontSize: "68px", lineHeight: "75px", fontWeight: "400", letterSpacing: "0.1px", whiteSpace: "nowrap" }}>Built from experience.<br />Created for what comes next.</h1>
      <p style={{ position: "absolute", left: "100px", top: "352px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "32px", lineHeight: "42px", whiteSpace: "nowrap" }}>TriHelix brings together the depth of decades of enterprise<br />transformation experience with a team built to rethink what<br />transformation can mean in the age of AI.</p>
      <p style={{ position: "absolute", left: "100px", top: "512px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "24px", color: "rgba(255,255,255,0.86)", whiteSpace: "nowrap" }}>We work with organisations facing consequential questions about technology, business and change &mdash;<br />bringing experienced minds, diverse perspectives and a practical understanding of how enterprises<br />really work.</p>
      <p style={{ position: "absolute", left: "100px", top: "604px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18.3px", lineHeight: "24px", fontWeight: "600", whiteSpace: "nowrap" }}>We exist to help organisations navigate what comes next with greater confidence.</p>

      {/* WHY WE EXIST */}
      <img src={"/assets/about-hero-2.webp"} alt={""} style={{ position: "absolute", left: "742px", top: "752px", width: "597px", height: "553px", borderRadius: "20px" }} />
      <div style={{ position: "absolute", left: "100px", top: "770px", width: "90px", height: "40px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.92)" }}>The Why</div>
      <h2 style={{ position: "absolute", left: "100px", top: "826px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px" }}>Why we exist</h2>
      <p style={{ position: "absolute", left: "100px", top: "914px", margin: "0", fontSize: "29px", lineHeight: "42px", fontWeight: "400", whiteSpace: "nowrap" }}>AI has changed what organizations<br />can imagine.</p>
      <p style={{ position: "absolute", left: "100px", top: "1017px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17px", lineHeight: "23px", color: "rgba(255,255,255,0.88)", whiteSpace: "nowrap" }}>But for enterprise leaders, the difficult questions remain: What is worth<br />pursuing?</p>
      <p style={{ position: "absolute", left: "100px", top: "1083px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "17px", lineHeight: "21px", color: "rgba(255,255,255,0.88)", whiteSpace: "nowrap" }}>Where should we focus? What will create real value? And how do we make change<br />work in the reality of a complex organisation?</p>
      <p style={{ position: "absolute", left: "100px", top: "1146px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.88)", whiteSpace: "nowrap" }}>TriHelix was created to help answer those questions.<br />Our experience has taught us that meaningful transformation rarely comes from<br />technology alone. It requires an understanding of the business, the people, the<br />processes and the realities that sit behind every major decision.</p>
      <p style={{ position: "absolute", left: "100px", top: "1251px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", fontWeight: "600" }}>That&rsquo;s the perspective we bring to the table.</p>

      {/* THE EXPERIENCE */}
      <div style={{ position: "absolute", left: "100px", top: "1420px", width: "128px", height: "40px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.92)" }}>The Experience</div>
      <h2 style={{ position: "absolute", left: "100px", top: "1476px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px" }}>The depth behind Trihelix</h2>
      <p style={{ position: "absolute", left: "100px", top: "1580px", margin: "0", fontSize: "29.5px", lineHeight: "42px", fontWeight: "400", whiteSpace: "nowrap" }}>A new organisation with 25+ years<br />behind it.</p>
      <p style={{ position: "absolute", left: "100px", top: "1682px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "18px", lineHeight: "23.5px", color: "rgba(255,255,255,0.88)", whiteSpace: "nowrap" }}>TriHelix is part of Nihilent, a global technology and consulting<br />organisation with more than 25 years of enterprise transformation<br />experience across 50+ countries.</p>
      <p style={{ position: "absolute", left: "740px", top: "1582px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.88)", whiteSpace: "nowrap" }}>That heritage gives us something that cannot be manufactured quickly: experience<br />at scale.</p>
      <p style={{ position: "absolute", left: "740px", top: "1645px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.88)", whiteSpace: "nowrap" }}>Across decades of transformation, our teams have worked through changing<br />technologies, evolving business models and increasingly complex enterprise<br />environments. We&rsquo;ve seen organisations transform successfully &mdash; and we&rsquo;ve seen<br />where transformation gets stuck.</p>
      <p style={{ position: "absolute", left: "740px", top: "1750px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "21px", color: "rgba(255,255,255,0.88)", whiteSpace: "nowrap" }}>That experience shapes how we think, the questions we ask and the people we<br />bring into the room.</p>
      <p style={{ position: "absolute", left: "100px", top: "1869px", margin: "0", fontSize: "25.4px", lineHeight: "42px", fontWeight: "400", color: "rgba(255,255,255,0.94)" }}>TriHelix combines that institutional depth with a fresh perspective on the AI era.</p>
      <div style={{ position: "absolute", left: "100px", top: "1943px", width: "1240px", display: "grid", gridTemplateColumns: "427px 425px 388px" }}>
        <div>
          <div style={{ fontSize: "31px", lineHeight: "42px" }}>25+ Years</div>
          <div style={{ marginTop: "-2px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "31px", color: "rgba(255,255,255,0.9)" }}>Enterprise transformation<br />experience</div>
        </div>
        <div>
          <div style={{ fontSize: "31px", lineHeight: "42px" }}>50+ Countries</div>
          <div style={{ marginTop: "-2px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "31px", color: "rgba(255,255,255,0.9)" }}>Global experience across markets</div>
        </div>
        <div>
          <div style={{ fontSize: "31px", lineHeight: "42px" }}>Deep Expertise</div>
          <div style={{ marginTop: "-2px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "24px", lineHeight: "31px", color: "rgba(255,255,255,0.9)" }}>Business, technology, design, data<br />and transformation</div>
        </div>
      </div>

      {/* THE PEOPLE */}
      <div style={{ position: "absolute", left: "100px", top: "2198px", width: "104px", height: "40px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.34)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.92)" }}>The People</div>
      <h2 style={{ position: "absolute", left: "100px", top: "2254px", margin: "0", fontSize: "52px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.3px" }}>The People Behind TriHelix</h2>
      <p style={{ position: "absolute", left: "100px", top: "2341px", margin: "0", fontSize: "30px", lineHeight: "42px", fontWeight: "400", whiteSpace: "nowrap" }}>Experience matters. So does who<br />you bring into the room.</p>

      <div style={{ position: "absolute", left: "100px", top: "2504px", fontSize: "38px", lineHeight: "46px", fontWeight: "400" }}>Global Leadership</div>
      <PeopleRow people={leaders} top={2610} />

      <div style={{ position: "absolute", left: "100px", top: "3083px", fontSize: "38px", lineHeight: "46px", fontWeight: "400" }}>Regional Business Heads</div>
      <PeopleRow people={regional} top={3188} />

      <div style={{ position: "absolute", left: "100px", top: "3661px", fontSize: "38px", lineHeight: "46px", fontWeight: "400" }}>TriHelix Experts</div>
      <PeopleRow people={experts} top={3766} />

      {/* CTA */}
      <div style={{ position: "absolute", left: "100px", top: "4329px", width: "1240px", height: "441px", borderRadius: "24px", overflow: "hidden", backgroundColor: "#1668a8", backgroundImage: "url('assets/about-cta-grad.png')", backgroundSize: "100% 100%" }}>
        <h3 style={{ position: "absolute", left: "62px", top: "59px", margin: "0", fontSize: "68px", lineHeight: "76px", fontWeight: "400", letterSpacing: "0.1px", whiteSpace: "nowrap" }}>Let&rsquo;s talk about what<br />comes next.</h3>
        <p style={{ position: "absolute", left: "60px", top: "240px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "23.6px", lineHeight: "31px", fontWeight: "600", whiteSpace: "nowrap" }}>The right transformation opportunity may not be obvious yet.<br />That&rsquo;s where a conversation begins.</p>
        <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="cta cta-white" href={"/contact"} style={{ position: "absolute", left: "60px", top: "339px", width: "256px", height: "40px", borderRadius: "999px", background: "#ffffff", color: "#16161b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>Schedule your 60-minute call</Link>
      </div>

      {/* FOOTER */}
      <Link href={"/"} aria-label={"TriHelix home"} style={{ position: "absolute", left: "100px", top: "4890px", display: "block", width: "242px" }}><img src={"/assets/logo-big.webp"} alt={"TriHelix"} style={{ display: "block", width: "242px" }} /></Link>
      <p style={{ position: "absolute", left: "100px", top: "4983px", margin: "0", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12.5px", lineHeight: "20px", color: "rgba(255,255,255,0.7)" }}>TriHelix is a proprietary framework of Nihilent LTD.</p>
      <div style={{ position: "absolute", left: "100px", top: "5026px", width: "1240px", height: "1px", background: "rgba(255,255,255,0.16)" }}></div>
      <div style={{ position: "absolute", left: "100px", top: "5078px", width: "1240px", display: "grid", gridTemplateColumns: "212px 786px 242px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16.5px", lineHeight: "22px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "19px" }}>
          <Link className="navlink" href={"/approach"}>Our Approach</Link>
          <Link className="navlink" href={"/case-studies"}>Case Studies</Link>
          <Link className="navlink" href={"/about"}>About Us</Link>
          <Link onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("trx:contact")); }} className="navlink" aria-current="page" href={"/contact"}>Contact Us</Link>
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
      <p style={{ position: "absolute", left: "0", top: "5266px", width: "1440px", margin: "0", textAlign: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16.3px", lineHeight: "20px", color: "rgba(255,255,255,0.86)" }}>&copy; 2026 TriHelix. All rights reserved.</p>
      <div style={{ position: "absolute", left: "1208px", top: "5264px", display: "flex", alignItems: "center", gap: "22px" }}>
        <a className="social" href="https://www.linkedin.com/company/nihilent/" target="_blank" rel="noopener noreferrer" aria-label="TriHelix on LinkedIn"><img src="/assets/icon-linkedin.webp" alt="" style={{ display: "block", width: "22px" }} /></a>
        <a className="social" href="mailto:Info@nihilent.com" aria-label="Email Info@nihilent.com"><img src="/assets/icon-email.webp" alt="" style={{ display: "block", width: "22px" }} /></a>
        <a className="social" href="tel:+912039846100" aria-label="Call +91 (20) 3984 6100"><img src="/assets/icon-phone.webp" alt="" style={{ display: "block", width: "20px" }} /></a>
      </div>
      </div>

      <div onClick={closeModal} style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "5344px", display: modalDisplay, background: "rgba(4,4,12,0.55)", backdropFilter: "blur(9px) saturate(120%)", WebkitBackdropFilter: "blur(9px) saturate(120%)", cursor: "pointer" }}></div>

      <div style={{ position: "absolute", left: "96px", top: "175px", width: "1240px", height: "550px", borderRadius: "26px", display: `${modalDisplay}`, animation: "trx-pop .34s cubic-bezier(.22,.61,.36,1) both", backgroundColor: "#eef0f2", backgroundImage: "url(\'/assets/contact-modal-bg.webp\')", backgroundSize: "100% 100%", overflow: "hidden", boxShadow: "0 40px 90px rgba(0,0,0,0.45)", color: "#17181a" }}>
        <button type={"button"} onClick={closeModal} aria-label={"Close"} style={{ position: "absolute", left: "1170px", top: "39px", width: "28px", height: "28px", padding: "0", border: "0", background: "transparent", cursor: "pointer", color: "#17181a", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "30px", lineHeight: "28px", fontWeight: "300" }}>&#10005;</button>

        <div style={{ position: "absolute", left: "83px", top: "98px", fontSize: "56px", lineHeight: "62px", fontWeight: "400", letterSpacing: "0.2px", color: "#17181a" }}>Get in touch</div>
        <div style={{ position: "absolute", left: "83px", top: "174px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "16px", lineHeight: "22px", color: "#3d4045" }}>Book your free 60-minute conversation.</div>

        <div style={{ position: "absolute", left: "84px", top: "342px", display: "flex", gap: "21px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "15px", lineHeight: "21px", color: "#2b2e33" }}>
          <svg width={"16"} height={"20"} viewBox={"0 0 16 20"} fill={"none"} style={{ flex: "0 0 auto", marginTop: "3px" }}><path d={"M8 0.9C4.2 0.9 1.1 4 1.1 7.8c0 5.2 6.1 11 6.4 11.2.3.3.7.3 1 0 .3-.2 6.4-6 6.4-11.2C14.9 4 11.8.9 8 .9Zm0 10.2a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6Z"} fill={"#2b2e33"}></path></svg>
          <div>
            <div style={{ fontWeight: "600" }}>Nihilent Ltd.</div>
            <div>4th Floor, D&rsquo; Block, WEIKFIELD IT CITI</div>
            <div>INFO PARK, Pune - Nagar Rd, Sakore</div>
            <div>Nagar, Viman Nagar, Pune, Maharashtra</div>
            <div>411014</div>
          </div>
        </div>

        <ContactForm />
      </div>
  
        </div>
      </div>
      </div>
      <div className="only-mobile"><MobContact /></div>
    </>
  );
}
