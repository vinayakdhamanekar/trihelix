"use client";
import { useId, useState } from "react";

/**
 * The working "Get in touch" form.
 *
 * Pixel geometry is taken straight from the 3.0 contact frame — the two-column
 * 328px grid, the 50/47px gaps, the underline inputs and the 168x38 blue pill.
 * Everything else here is behaviour the design cannot express: field types,
 * required-ness, validation, the POST, and the three UI states.
 *
 * The backend is NOT part of this repo. The internal team hosts a small REST
 * endpoint that turns a submission into an email; this component posts JSON to
 * whatever `NEXT_PUBLIC_CONTACT_API_URL` points at. See BACKEND_INTEGRATION.md
 * for the exact request and response contract.
 */

export type ContactPayload = {
  firstName: string;
  lastName: string;
  designation: string;
  company: string;
  email: string;
  /** Optional, per the brief. */
  phone: string;
  source: string;
  submittedAt: string;
};

/** Mirrors the six fields in the Figma frame, left-to-right, top-to-bottom. */
const FIELDS = [
  { key: "firstName", label: "First Name", type: "text", autoComplete: "given-name", required: true },
  { key: "lastName", label: "Last Name", type: "text", autoComplete: "family-name", required: true },
  { key: "designation", label: "Designation", type: "text", autoComplete: "organization-title", required: true },
  { key: "company", label: "Company Name", type: "text", autoComplete: "organization", required: true },
  { key: "email", label: "Email ID", type: "email", autoComplete: "email", required: true },
  { key: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", required: false },
] as const;

type Key = (typeof FIELDS)[number]["key"];
const EMPTY: Record<Key, string> = {
  firstName: "", lastName: "", designation: "", company: "", email: "", phone: "",
};

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputStyle: React.CSSProperties = {
  marginTop: 12, width: 328, height: 21, padding: "0 2px", border: 0,
  borderBottom: "1px solid #9aa0a6", background: "transparent",
  fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 17, color: "#17181a", outline: "none",
};
const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 15, lineHeight: "21px", color: "#2b2e33",
};

/**
 * `layout: "desktop"` places the form on the 1440 canvas exactly where the
 * Figma frame puts it. `layout: "mobile"` stacks the same fields in normal
 * flow, for the phone page that has no Figma frame yet.
 */
export default function ContactForm({ layout = "desktop" }: { layout?: "desktop" | "mobile" | "modal" }) {
  const mobile = layout === "mobile";
  const modal = layout === "modal";
  const flow = mobile || modal;   // laid out in normal flow, not on the canvas
  const uid = useId();
  const [values, setValues] = useState<Record<Key, string>>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Key, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState("");   // honeypot: real people never fill this

  const set = (k: Key, v: string) => {
    setValues((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<Key, string>> = {};
    for (const f of FIELDS) {
      const v = values[f.key].trim();
      if (f.required && !v) next[f.key] = "Required";
    }
    if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) {
      next.email = "Enter a valid email address";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (trap) return;                       // silently drop bots
    if (!validate()) return;
    if (!ENDPOINT) {
      setState("error");
      setMessage("The form endpoint is not configured yet. Set NEXT_PUBLIC_CONTACT_API_URL.");
      return;
    }
    setState("sending");
    const payload: ContactPayload = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      designation: values.designation.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      source: "trihelix-website",
      submittedAt: new Date().toISOString(),
    };
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setState("sent");
      setValues(EMPTY);
    } catch {
      setState("error");
      setMessage("We could not send that just now. Please try again, or email us directly.");
    }
  }

  if (state === "sent") {
    return (
      <div
        role="status"
        style={
          flow
            ? { fontFamily: "'IBM Plex Sans', sans-serif", color: "#17181a" }
            : { position: "absolute", left: 485, top: 100, width: 706,
                fontFamily: "'IBM Plex Sans', sans-serif", color: "#17181a" }
        }
      >
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 28, lineHeight: "36px" }}>
          Thank you — we have your details.
        </div>
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: "24px", color: "#3d4045" }}>
          Someone from TriHelix will be in touch to book your free 60-minute conversation.
        </p>
        <button
          type="button"
          className="cta cta-onlight"
          onClick={() => setState("idle")}
          style={{
            marginTop: 26, width: mobile ? "100%" : 190, height: mobile ? 46 : 40,
            border: 0, borderRadius: 999,
            background: "#4499ff", color: "#ffffff",
            fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15, cursor: "pointer",
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div
        style={
          flow
            ? { display: "grid",
                gridTemplateColumns: modal ? "repeat(auto-fit, minmax(240px, 1fr))" : "1fr",
                columnGap: 50, rowGap: modal ? 34 : 26,
                fontFamily: "'IBM Plex Sans', sans-serif" }
            : { position: "absolute", left: 485, top: 100, width: 706,
                display: "grid", gridTemplateColumns: "328px 328px",
                columnGap: 50, rowGap: 47, fontFamily: "'IBM Plex Sans', sans-serif" }
        }
      >
        {FIELDS.map((f) => {
          const id = `${uid}-${f.key}`;
          const err = errors[f.key];
          return (
            <div key={f.key}>
              <label htmlFor={id} style={labelStyle}>
                {f.label}
                {!f.required && <span style={{ color: "#8a9099" }}> (optional)</span>}
              </label>
              <input
                id={id}
                name={f.key}
                type={f.type}
                autoComplete={f.autoComplete}
                required={f.required}
                aria-invalid={err ? true : undefined}
                aria-describedby={err ? id + "-err" : undefined}
                value={values[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                style={{
                  ...inputStyle,
                  ...(flow ? { width: "100%", height: mobile ? 30 : 26, fontSize: mobile ? 16 : 17 } : null),
                  borderBottomColor: err ? "#d0342c" : "#9aa0a6",
                }}
              />
              {err && (
                <div id={id + "-err"} style={{ marginTop: 6, fontSize: 13, color: "#d0342c" }}>
                  {err}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Honeypot — off-screen, not announced, never filled by a person. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={trap}
        onChange={(e) => setTrap(e.target.value)}
        style={{ position: "absolute", left: -9999, top: 0, width: 1, height: 1, opacity: 0 }}
      />

      <button
        type="submit"
        className="cta cta-onlight"
        disabled={state === "sending"}
        style={{
          ...(flow
            ? { marginTop: modal ? 34 : 30, width: mobile ? "100%" : 190, height: mobile ? 46 : 40 }
            : { position: "absolute", left: 485, top: 412, width: 190, height: 38 }),
          border: 0, borderRadius: 999, background: "#4499ff", color: "#ffffff",
          fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15,
          cursor: state === "sending" ? "default" : "pointer",
          opacity: state === "sending" ? 0.65 : 1,
        }}
      >
        {state === "sending" ? "Sending…" : "Book your free call"}
      </button>

      {state === "error" && (
        <div
          role="alert"
          style={{
            ...(flow
              ? { marginTop: 14 }
              : { position: "absolute", left: 671, top: 419, width: 520 }),
            fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14,
            lineHeight: "20px", color: "#d0342c",
          }}
        >
          {message}
        </div>
      )}
    </form>
  );
}
