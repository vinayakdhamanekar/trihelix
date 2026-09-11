# TriHelix Website

Marketing site for TriHelix, a proprietary framework of Nihilent Ltd.
Next.js 16 (App Router) · React 19 · TypeScript.

Five pages, all statically pre-rendered: **Home**, **Our Approach**,
**Case Studies**, **About Us**, **Contact Us**.

---

## Quick start

```bash
npm ci          # install (uses the committed lockfile)
npm run dev     # http://localhost:3000
```

That is the whole setup. No database, no API keys, no services to sign up for.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build into `.next/` |
| `npm start` | Serve the production build (needs Node 20+) |
| `npm run build:static` | Static export into `out/` — plain HTML/CSS/JS, no Node at runtime |
| `npm run lint` | ESLint |

### The one environment variable

Copy `.env.example` to `.env.local` and set the Contact form's endpoint:

```
NEXT_PUBLIC_CONTACT_API_URL=https://api.your-domain.internal/trihelix/contact
```

Without it the form refuses to submit and says so on screen. The request and
response contract is in **`BACKEND_INTEGRATION.md`** (also supplied as
*TriHelix-Integration-Guide.docx*).

---

## How the pages are built

This is the one thing to understand before editing anything.

Each page renders **two independent layouts**, and CSS picks between them at
**767px**:

- `.only-desktop` — a fixed **1440px-wide** canvas
- `.only-mobile` — a fixed **393px-wide** canvas

Both trees are in the HTML at all times. Only one is displayed, so there is no
flash on load and no hydration mismatch, and the hidden tree's CSS background
images are never downloaded.

Inside each canvas, elements are **absolutely positioned at the exact
coordinates from the design**. `useStageFit(artW, artH)` then scales the whole
canvas with `zoom: viewportWidth / artW`.

It is `zoom`, not `transform: scale()`, on purpose. A transform rasterises the
canvas at its authored size and stretches the bitmap, so on any display wider
than 1440 the type and the icons go soft. `zoom` is a layout scale: the browser
re-renders text and vectors at the final size and they stay crisp.

**Nothing reflows — the page zooms.** That is deliberate: it is what keeps the
build pixel-faithful to the design at any window width.

### What that means when you edit

- To move something, change its `left` / `top` in **design pixels**, not
  viewport pixels. A canvas coordinate of `top: "2546px"` means 2546px down the
  1440-wide design, whatever size the browser window is.
- If a block gets taller, everything below it on that canvas must move down by
  the same amount, and the canvas height passed to `useStageFit` grows too.
  There is no automatic reflow to save you.
- Text that must not re-wrap carries `whiteSpace: "nowrap"` with explicit
  `<br />`. If you change the copy or the font size, check the wrap.

### Canvas sizes

| Page | Desktop | Mobile |
|---|---|---|
| Home | 1440 × 7340 | 393 × 8278 |
| Our Approach | 1440 × 8232 *(7806 with the accordion closed)* | 393 × 9940 *(9243 closed)* |
| Case Studies | 1440 × 8525 | 393 × 5039 all closed *(+2115 for case 1, plus the measured height of cases 2 and 3)* |
| About Us | 1440 × 5344 | 393 × 6036 |
| Contact Us | 1440 × 5344 | fluid |

---

## Where things live

```
app/
  layout.tsx                 fonts, metadata, global CSS
  globals.css                reset, the 767px switch, CTA/nav states, animations
  page.tsx                   /
  approach/page.tsx          /approach
  case-studies/page.tsx      /case-studies
  about/page.tsx             /about
  contact/page.tsx           /contact
  icon.png                   favicon

components/
  ContactForm.tsx            the form: fields, validation, POST, three layouts
  ContactModal.tsx           the popup any CTA opens, in place
  ScrollTop.tsx              puts you at the top after a route change
  PeopleRow.tsx              desktop leadership carousels
  Rich.tsx                   renders rich-text values out of lib/
  useStageFit.ts             scales a canvas to the viewport
  CircleArrow.tsx            the carousel arrow, drawn as a vector
  ScrollReveal.tsx           fades blocks up as they scroll into view
  useSwipe.ts                pointer-based swipe for the carousels
  mobile/
    MobHome.tsx …            the four 393px canvases
    MobCaseBody.tsx          cases 2 and 3 expanded, rendered from lib/
    MobContact.tsx           /contact on a phone
    MobPeopleCard.tsx        the phone people card and its dots
    MobileChrome.tsx         hamburger menu + mobile contact popup

lib/
  home-data.ts               carousel slides
  approach-data.ts           stages, cards, principles, deliverables
  case-studies-data.ts       all three case studies, every field
  about-data.ts              the 18 people, typed as `Person`

public/assets/               106 images (WebP/PNG)
scripts/build-static.mjs     the static export
```

---

## Editing content

Repeating content is **already separated from layout**. To change a case study,
a carousel slide or a person, edit `lib/*-data.ts` — the components only render
what they are given.

```ts
// lib/about-data.ts
export const leaders: Person[] = [
  { img: "/assets/p-lc.webp", name: "L C Singh (LC)", role: "FOUNDER & EXECUTIVE CHAIRMAN" },
  …
];
```

One-off headings and paragraphs are still inline in the page components,
because those components were generated from the design export. If you are
adding a CMS, `lib/*-data.ts` is the seam to start from — see §5 of
`BACKEND_INTEGRATION.md`.

---

## Fonts

Loaded through `next/font/google` and **self-hosted at build time** — the
browser never calls Google.

| Role | Family |
|---|---|
| Primary / display | Bricolage Grotesque *(variable, `opsz` axis)* |
| Secondary / body | IBM Plex Sans |
| Fallback | Lexend |

Both primaries are open source and free for commercial use. Bricolage Grotesque
**must** keep its `opsz` axis declared in `app/layout.tsx` or headlines render at
the wrong optical size.

---

## Interactive behaviour

| Where | What |
|---|---|
| Home carousel | 3 cards, 748px per step; dots track position; arrows appear only when there is somewhere to go; each card links to Case Studies |
| About / Contact | three people carousels — 10, 6 and 2 people |
| Our Approach | "How do you make it work?" is an accordion, closed by default; the page shortens by 426px while closed |
| Case Studies (mobile) | all three cases start collapsed and expand independently. Case 1's body comes from the design file; cases 2 and 3 render from `lib/case-studies-data.ts` through `MobCaseBody`, and their height is measured at runtime so the canvas grows to fit |
| Any CTA | fires a `trx:contact` event and `ContactModal` opens **where you are**, rather than navigating. The CTAs keep a real `href`, so they still work with JavaScript disabled |
| Mobile | hamburger opens a slide-in menu; its Contact button opens the popup |
| Carousels | swipe with finger, pen or mouse-drag (`useSwipe`). A drag that finishes on a card swallows the click so the card's link does not fire |
| Reveal on scroll | `ScrollReveal` fades each block up as it arrives. Only blocks that start below the fold are touched, so nothing above it flashes |

### A trap worth knowing

The desktop nav bar spans the full 1440px and sits above the logo in the stacking
order, so it carries `pointerEvents: "none"` and each link inside it opts back in
with `pointerEvents: "auto"`. If you add a link to the header, **give it
`pointerEvents: "auto"`** or it will not be clickable.

---

## The mobile canvases are generated

`components/mobile/Mob{Home,Approach,About,Cases}.tsx` are produced from the
mobile design files by a generator, then patched for behaviour. **Small edits by
hand are fine, but anything structural should go into the generator**, or the
next regeneration will overwrite it.

The generator and its patch script are supplied separately in `tools/`, along
with notes on running them. They need the source design files, which are not part
of this repository.

`MobContact.tsx`, `MobPeopleCard.tsx` and `MobileChrome.tsx` are hand-written and
safe to edit directly.

---

## Deploying

Two formats, same repo, identical output. Full detail in
`BACKEND_INTEGRATION.md` §2.

**Static** — no Node at runtime:

```bash
npm run build:static     # -> out/
```

Copy the contents of `out/` to the web root. Routes are emitted as
`approach/index.html`, so no rewrite rules are needed. About 14 MB.

**Node server:**

```bash
npm run build && npm start    # :3000, Node 20+
```

---

## Browser support

Evergreen Chrome, Edge, Firefox and Safari. The design leans on
`backdrop-filter` for its glass panels; browsers without it fall back to a flat
translucent panel, which degrades cleanly.

---

## Known open items

1. **Contact Us has no mobile design file.** `MobContact.tsx` is hand-built so
   the form is usable on a phone. Replace it when the design exists.
2. **Three assets were never supplied** and are substituted: the Approach
   deliverable icons (extracted from the design file), the accordion +/− glyphs
   (drawn inline), and the Case Studies CTA card artwork (a 1px edge instead).
   The Approach page's three stage icons on mobile exported as unreadable 150px
   crops, so the page uses the full desktop artwork for them.
3. **The Home mobile design reads "18,00+"** where "1,800+" appears to be
   intended. Rendered as designed rather than silently corrected — confirm with
   the designer.
4. **Privacy Policy, Terms of Use and Cookie Settings** link to `#`; those pages
   do not exist yet. Social links are live.
5. **Set `NEXT_PUBLIC_CONTACT_API_URL`** before go-live.
6. **Cases 2 and 3 have no expanded mobile design.** The mobile design file
   draws only case 1 open, so `MobCaseBody` renders the other two from
   `lib/case-studies-data.ts` at case 1's rhythm. Replace it if those frames
   are drawn later.

---

## How this build compares to the design files

Every page is diffed full-length against its Figma 3.0 export, with the
accordions opened so the two line up. Mean absolute difference out of 255:

| Page | Desktop | Mobile |
|---|---|---|
| Home | 9.5 | 13.9 |
| Our Approach | 10.4 | 11.4 |
| Case Studies | 21.6 | *no mobile export supplied* |
| About Us | 8.0 | 12.3 |
| Contact Us | 9.2 | *no mobile export supplied* |

Around 8–14 is the floor for a headless 1× screenshot against a Figma render:
the two rasterise text differently, so even a perfect page scores there.

**Case Studies reads higher for a known reason.** The three case blocks were
pushed down by 55, 25 and 27px to clear a column overlap the design file has,
and the Problem/Response copy is now 16px instead of 18px. Realign each band by
that cumulative offset and the difference collapses — 52.3 → 8.1 at y=7500,
30.7 → 1.5 at y=3500. It is offset, not damage.

---

© 2026 TriHelix. TriHelix is a proprietary framework of Nihilent Ltd.
