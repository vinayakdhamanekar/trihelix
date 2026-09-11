# TriHelix Website — Integration & Hand-off Guide

For the internal team taking over hosting and building the Contact API.

| | |
|---|---|
| **Framework** | Next.js 16.3.4 (App Router), React 19.2.8, TypeScript |
| **Routes** | `/`, `/approach`, `/case-studies`, `/about`, `/contact` |
| **Rendering** | every route statically pre-rendered at build time |
| **Backend needed** | one REST endpoint, for the Contact form. Nothing else. |
| **Runtime deps** | `next`, `react`, `react-dom`. That is the whole list. |
| **External calls at runtime** | none — fonts are self-hosted, images are local |

---

## 1. The Contact API — the only backend you build

A static site cannot send an email itself. The site collects the form and POSTs
it as JSON to an endpoint **you host**. That endpoint is the entire backend.

### 1.1 Where the site sends it

One environment variable, read at build time:

```
NEXT_PUBLIC_CONTACT_API_URL=https://api.your-domain.internal/trihelix/contact
```

It is a URL, not a secret — it is visible in the browser, which is why it
carries the `NEXT_PUBLIC_` prefix. **Never put an API key in it.** If the
endpoint needs protecting, use origin allow-listing and rate limiting on your
side, not a client-side key.

If the variable is unset the form refuses to submit and says so on screen,
rather than failing silently.

### 1.2 Request

```http
POST /trihelix/contact
Content-Type: application/json
```

```json
{
  "firstName":   "Asha",
  "lastName":    "Rao",
  "designation": "Head of Data",
  "company":     "Nihilent",
  "email":       "asha.rao@nihilent.com",
  "phone":       "+91 98200 00000",
  "source":      "trihelix-website",
  "submittedAt": "2026-09-10T11:20:31.004Z"
}
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `firstName` | string | yes | |
| `lastName` | string | yes | |
| `designation` | string | yes | |
| `company` | string | yes | |
| `email` | string | yes | format-checked in the browser — **check it again server-side** |
| `phone` | string | no | empty string when not given |
| `source` | string | always sent | constant `"trihelix-website"`; lets you reuse the endpoint later |
| `submittedAt` | string | always sent | ISO 8601, from the visitor's clock — treat as a hint, stamp your own |

> **Reconciling with the original brief.** The brief listed Name, Designation,
> Company, Email ID and an optional mobile. The Figma frame splits Name into
> First and Last and calls the optional field Phone Number. The payload follows
> the design: `firstName + " " + lastName` is the brief's Name, `phone` is its
> optional mobile.

### 1.3 Response

- **2xx** — accepted. The page swaps the form for a thank-you panel.
- **anything else, or a network failure** — the page shows an inline error and
  keeps everything the visitor typed, so they can retry.

A body is not required. `{"ok":true}` is fine.

### 1.4 CORS

The browser calls you directly from the site's origin, so the endpoint must
answer a pre-flight:

```
Access-Control-Allow-Origin: https://<the site's real origin>
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

Answer `OPTIONS` with `204`. Use the real origin, not `*`.

### 1.5 What you must do server-side

1. **Re-validate every field.** Browser checks stop honest mistakes, not a
   crafted POST.
2. **Rate limit by IP.** This endpoint is public and unauthenticated.
3. **Escape before templating the email.** The values reach you verbatim.
4. **Drop anything with `company_website` populated.** That is a honeypot field,
   hidden off-screen. A real person never fills it. The site already discards
   those submissions before they reach you — if one arrives with that key set,
   it is a bot.

### 1.6 Where the form lives in the code

`components/ContactForm.tsx` — one component, three layouts:

| `layout` | Used by | Shape |
|---|---|---|
| `"desktop"` | `/contact` (the 1440 canvas) | two 328px columns, absolutely placed |
| `"modal"` | the in-place popup on every page | two fluid columns in normal flow |
| `"mobile"` | phones | one column |

All three share the same fields, validation, payload and states. Change the
contract in one place.

**There are no other forms and no other dynamic behaviour anywhere on the site.**

---

## 2. Hosting — pick one of two formats

Both come from this one repo and render identically.

### A. Static files — no Node runtime at all

```bash
npm ci
npm run build:static      # writes out/
```

Copy the **contents of `out/`** to the web root. Plain `.html`, `.css`, `.js`,
`.webp`. Works behind IIS, Apache, nginx, S3 or any CDN. No rewrite rules
needed — routes are emitted as `approach/index.html`, so `/approach` resolves on
its own.

About **14 MB**, of which ~12 MB is imagery (four full-page background PNGs
account for most of it).

Choose this if internal infrastructure restricts running a Node process.

### B. Node server

```bash
npm ci
npm run build             # writes .next/
npm start                 # listens on :3000
```

Node 20+. Put it behind your usual reverse proxy. Choose this if you later want
Next's on-demand revalidation for a CMS (see §5).

### 2.1 What the hand-off build deliberately leaves out

`npm run build:static` strips three internal design-review artefacts that must
never reach a public server:

| Path | Size | What it is |
|---|---|---|
| `public/ref/` | ~13 MB | Figma renders + the annotated review pages |
| `public/tiles/` | ~25 MB | section tiles from an earlier comparison pass |
| `public/compare.html` | small | the internal design-comparison tool |

To keep them for an internal review deployment, build with
`NEXT_PUBLIC_DESIGN_REVIEW=1`. Leave it unset for production.

`public/review-points.json` is also review-only. It is small and harmless, but
delete it if you prefer a clean root.

---

## 3. Project structure

```
app/
  layout.tsx                 fonts, metadata, global CSS
  globals.css                reset, breakpoint switch, CTA/nav states, animations
  page.tsx                   /              1440 canvas + <MobHome/>
  approach/page.tsx          /approach      + <MobApproach/>
  case-studies/page.tsx      /case-studies  + <MobCases/>
  about/page.tsx             /about         + <MobAbout/>
  contact/page.tsx           /contact       + <MobContact/>
components/
  ContactForm.tsx            the working form: validation, POST, three layouts
  ContactModal.tsx           the in-place popup, opened by any CTA
  ScrollTop.tsx              resets scroll on client-side navigation
  PeopleRow.tsx              desktop leadership carousels
  Rich.tsx                   renders extracted rich-text values
  useStageFit.ts             scales a fixed design canvas to the viewport
  mobile/MobHome.tsx …       393px canvases, generated from the mobile .fig
  mobile/MobPeopleCard.tsx   the phone people card + dots
  mobile/MobileChrome.tsx    hamburger menu + mobile contact popup
  mobile/MobContact.tsx      /contact on a phone
lib/*-data.ts                extracted content — the CMS boundary
public/assets/               106 images, WebP/PNG
scripts/build-static.mjs     the static hand-off build
.env.example                 copy to .env.local and fill in
```

### 3.1 How the two layouts work

The site is **desktop-first**, as agreed. Each page renders two trees:

- `.only-desktop` — a fixed **1440px** canvas, scaled to the viewport width
- `.only-mobile` — a fixed **393px** canvas, generated from the mobile Figma file

`app/globals.css` switches them at **767px** with a media query. Both are in the
HTML, so there is no flash and no hydration mismatch; the hidden tree's CSS
background images are never fetched, so a phone never downloads the desktop page
washes.

Canvas heights (the design's own frame sizes):

| Route | Desktop | Mobile |
|---|---|---|
| `/` | 1440 × 7340 | 393 × 8278 |
| `/approach` | 1440 × 8232 (7806 with the accordion closed) | 393 × 9940 (9243 closed) |
| `/case-studies` | 1440 × 8525 | 393 × 7154 (5039 with case 1 closed) |
| `/about` | 1440 × 5344 | 393 × 6036 |
| `/contact` | 1440 × 5344 | fluid |

`useStageFit(artW, artH)` sets `transform: scale(viewportWidth / artW)` on the
canvas and gives the stage the resulting height. Nothing reflows; the page zooms.
That is deliberate — it is what keeps the build pixel-faithful to the Figma.

### 3.2 Interactive behaviour

| Where | What |
|---|---|
| Home carousel | 3 cards, 748px per step, dots track position, arrows appear contextually; each card links to `/case-studies` |
| About / Contact | three people carousels, 10 / 6 / 2 people, arrows appear contextually |
| Approach | "How do you make it work?" accordion — closed by default; the page shortens by 426px while closed |
| Case Studies (mobile) | case 1 collapses; the page shortens by 2115px |
| Any CTA | raises a `trx:contact` event; `ContactModal` opens in place. CTAs keep their real `href`, so they still work with JavaScript off |
| Mobile | hamburger opens a slide-in menu; its Contact button opens the popup |

---

## 4. Fonts

Loaded through `next/font/google`, self-hosted at build time — no runtime request
to Google.

| Role | Family | Weights |
|---|---|---|
| Primary / display | **Bricolage Grotesque** | variable, `opsz` axis |
| Secondary / body | **IBM Plex Sans** | 300–700 |
| Fallback | Lexend | 300–700 |

Both primaries are open source and free for commercial use. Bricolage Grotesque
needs its `opsz` axis declared or headlines render at the wrong optical size —
that is already done in `app/layout.tsx`.

---

## 5. Future Headless CMS

Next.js was chosen for this. Current state, stated plainly:

- **Repeating collections are already extracted** into `lib/*-data.ts`:
  `slides` (home carousel), `cases` (three case studies with every field),
  `stagesCards` / `stages` / `principles` / `deliverables` (Approach),
  `leaders` / `regional` / `experts` (18 people, typed as `Person`).
  Point these at a CMS and the components need no change.
- **One-off headings and paragraphs are still inline** in the page components,
  because those components are generated from the design export. Extracting them
  is mechanical but touches every page, so it was left for the CMS work rather
  than done speculatively against a pixel-verified build.

Recommended path:

1. Model each page as a document whose fields mirror the existing exports.
2. Turn the page components into server components that fetch, and pass the same
   shapes down. `"use client"` is only needed for the carousels, the accordions
   and the form.
3. Use `revalidateTag` / `revalidatePath` from a CMS webhook for auto-publish,
   and Next's draft mode for marketing preview. **This needs hosting format B.**

---

## 6. Regenerating the mobile pages

The four mobile canvases are **generated**, not hand-written. If the mobile
Figma files change:

```bash
cd v3-mobfig && node mobgen.mjs          # regenerate the four canvases
python review-r2/patch-mobile.py         # re-apply the behavioural patches
```

`patch-mobile.py` is idempotent and re-applies, in order: the menu/popup chrome,
the two accordions, the +/− markers, the deliverable underlines, the data-driven
people rows, the circle social icons, and the 16/80px grid corrections. Do not
hand-edit `components/mobile/Mob*.tsx` — a regeneration will overwrite it.

---

## 7. Known open items

1. **Contact Us has no mobile Figma frame.** `components/mobile/MobContact.tsx`
   is hand-built from a screenshot so the form is usable on a phone. Replace it
   when the frame exists.
2. **No Figma render supplied for Case Studies mobile**, so it is the one mobile
   page that has not been diffed against the design.
3. **Three assets were never supplied** and are substituted: the Approach
   deliverable icons (baked out of the `.fig` instead), the +/− glyphs (drawn
   inline from the same icon family), and the Case Studies CTA card artwork (a
   1px edge added instead).
4. **The Home mobile frame reads "18,00+"** where "1,800+" is presumably meant.
   Rendered as designed rather than silently corrected — confirm with the
   designer.
5. **Footer social links** point at LinkedIn / `Info@nihilent.com` /
   `+91 (20) 3984 6100`. Privacy, Terms and Cookie Settings have no pages yet
   and currently link to `#`.
6. **Set `NEXT_PUBLIC_CONTACT_API_URL`** before go-live, or the form cannot
   submit.

---

## 8. Verification already done

- Both builds compile clean; TypeScript passes; ESLint reports **0 errors**.
- Every page diffed against its Figma render, full page, at 1440 and 393:
  desktop mean error 3.4–11.4 / 255, mobile 11.1–12.0 / 255.
- The form was driven end-to-end in a real browser: required-field errors,
  invalid-email rejection, a successful POST, the thank-you state, and the exact
  JSON in §1.2 landing on a test endpoint.
- CTA hover states, nav underline states, carousel stepping, both accordions,
  the in-place popup and scroll-on-navigation all confirmed by measuring the
  live DOM, not by eye.
- No console errors and no failed requests on any route at either width.

---

## 9. Contacts and links

- **Live build:** https://trihelix-frontend.vercel.app/
- **Design-review tool** (internal): `/compare.html` — Figma or the annotated
  review pages on the left, the live build on the right, with a checklist of
  every review point and its status.
