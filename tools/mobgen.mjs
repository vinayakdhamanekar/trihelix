// Paths resolve against the repository root. Adjust REPO if your checkout
// lives elsewhere.
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const REPO = join(dirname(fileURLToPath(import.meta.url)), "..");

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT_COMP = REPO + "/components/mobile";
const OUT_IMG = REPO + "/public/assets/mob";
mkdirSync(OUT_COMP, { recursive: true });
mkdirSync(OUT_IMG, { recursive: true });

const PAGES = [
  { dir: "TRX Home Mobile 3.0", comp: "MobHome", slug: "home", ref: "TRX Mob Home" },
  { dir: "TRX Approach Mobile 3.0", comp: "MobApproach", slug: "approach", ref: "TRX Mob Approach" },
  { dir: "TRX About Us Mobile 3.0", comp: "MobAbout", slug: "about", ref: "TRX Mob About Us" },
  { dir: "TRK  Case Studies Mobile 3.0", comp: "MobCases", slug: "cases", ref: "TRX Mob Case Studies" },
];

// The designs use iconify icons by name; these are the real paths for them.
const ICONS = {
  "akar-icons:linkedin-box-fill": {
    vb: "0 0 24 24",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  "mdi:gmail": {
    vb: "0 0 24 24",
    d: "M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z",
  },
  "basil:phone-solid": {
    vb: "0 0 24 24",
    d: "M6.5 3a2.5 2.5 0 0 0-2.5 2.5c0 8.008 6.492 14.5 14.5 14.5a2.5 2.5 0 0 0 2.5-2.5v-2.086a1 1 0 0 0-.62-.924l-3.64-1.456a1 1 0 0 0-1.152.29l-1.02 1.224a11.05 11.05 0 0 1-4.616-4.616l1.224-1.02a1 1 0 0 0 .29-1.152L9.51 3.62A1 1 0 0 0 8.586 3H6.5Z",
  },
  "ant-design:minus-circle-outlined": {
    vb: "0 0 1024 1024",
    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372zm176-404H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h352c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z",
  },
};

const WEIGHT = { Thin: 100, ExtraLight: 200, Light: 300, Regular: 400, Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900 };
const FAMILY = {
  "IBM Plex Sans": "var(--font-plex), system-ui, sans-serif",
  "Bricolage Grotesque": "var(--font-bricolage), var(--font-lexend), system-ui, sans-serif",
  "Asta Sans": "var(--font-lexend), system-ui, sans-serif",
  Poppins: "var(--font-plex), system-ui, sans-serif",
};

const key = (g) => g.sessionID + ":" + g.localID;
const hex = (h) => Buffer.from(Object.keys(h).map(Number).sort((a, b) => a - b).map((k) => h[k])).toString("hex");
const n2 = (v) => Math.round(v * 100) / 100;

function rgba(c, op) {
  const a = (c.a == null ? 1 : c.a) * (op == null ? 1 : op);
  const r = Math.round(c.r * 255), g = Math.round(c.g * 255), b = Math.round(c.b * 255);
  return a >= 0.999
    ? "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")
    : "rgba(" + r + "," + g + "," + b + "," + n2(a) + ")";
}
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
const lit = (s) =>
  "{ position: \"absolute\", " +
  Object.entries(s).map(([k, v]) => k + ": " + (typeof v === "number" ? v : JSON.stringify(v))).join(", ") +
  " }";

const bakeJobs = [];
const paints = (n) => (n.fillPaints || []).filter((p) => p.visible !== false);

/** A Figma GRADIENT_LINEAR paint as a CSS linear-gradient.
 *  The paint transform maps the unit node box into gradient space, where the
 *  ramp runs from (0,0) to (1,0). Invert it to get the two handle points back
 *  in node space, then project them onto CSS's own gradient line so the stop
 *  offsets land in exactly the same places Figma puts them. */
function linearGradientCss(p, W, H) {
  const t = p.transform;
  const det = t.m00 * t.m11 - t.m01 * t.m10;
  if (!det || !W || !H) return null;
  const i00 = t.m11 / det, i01 = -t.m01 / det, i10 = -t.m10 / det, i11 = t.m00 / det;
  const i02 = -(i00 * t.m02 + i01 * t.m12), i12 = -(i10 * t.m02 + i11 * t.m12);
  const P = (x, y) => [(i00 * x + i01 * y + i02) * W, (i10 * x + i11 * y + i12) * H];
  const [x0, y0] = P(0, 0), [x1, y1] = P(1, 0);
  const dx = x1 - x0, dy = y1 - y0;
  const ang = Math.atan2(dx, -dy);                       // CSS: 0deg points up
  const ux = Math.sin(ang), uy = -Math.cos(ang);
  const L = Math.abs(W * Math.sin(ang)) + Math.abs(H * Math.cos(ang));
  const proj = (x, y) => ((x - W / 2) * ux + (y - H / 2) * uy) / L + 0.5;
  const t0 = proj(x0, y0), t1 = proj(x1, y1);
  const stops = (p.stops || []).map((st) => {
    const at = t0 + st.position * (t1 - t0);
    return rgba(st.color, p.opacity) + " " + n2(at * 100) + "%";
  });
  return "linear-gradient(" + n2((ang * 180) / Math.PI) + "deg, " + stops.join(", ") + ")";
}

function boxStyle(n, slug, imgs) {
  const s = {};
  const t = n.transform || { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: 0 };
  s.left = n2(t.m02) + "px";
  s.top = n2(t.m12) + "px";
  if (n.size) { s.width = n2(n.size.x) + "px"; s.height = n2(n.size.y) + "px"; }
  // Reproduce the node's linear part verbatim. atan2 is not enough: Figma also
  // uses pure mirrors (m00 = -1, m11 = 1), which a rotate() would flip vertically
  // as well and drop the node in the wrong place.
  if (Math.abs(t.m00 - 1) > 1e-4 || Math.abs(t.m11 - 1) > 1e-4 || Math.abs(t.m01) > 1e-4 || Math.abs(t.m10) > 1e-4) {
    s.transform = "matrix(" + [t.m00, t.m10, t.m01, t.m11, 0, 0].map(n2).join(",") + ")";
    s.transformOrigin = "0 0";
  }
  const r = n.rectangleTopLeftCornerRadius != null ? n.rectangleTopLeftCornerRadius : n.cornerRadius;
  if (r) {
    const a = n.rectangleTopLeftCornerRadius != null ? n.rectangleTopLeftCornerRadius : r;
    const b = n.rectangleTopRightCornerRadius != null ? n.rectangleTopRightCornerRadius : r;
    const c = n.rectangleBottomRightCornerRadius != null ? n.rectangleBottomRightCornerRadius : r;
    const d = n.rectangleBottomLeftCornerRadius != null ? n.rectangleBottomLeftCornerRadius : r;
    s.borderRadius = a === b && b === c && c === d
      ? n2(a) + "px"
      : n2(a) + "px " + n2(b) + "px " + n2(c) + "px " + n2(d) + "px";
  }
  if (n.opacity != null && n.opacity < 1) s.opacity = n2(n.opacity);

  for (const p of paints(n)) {
    if (p.type === "SOLID") s.background = rgba(p.color, p.opacity);
    else if (p.type === "GRADIENT_LINEAR" && p.transform && n.size) {
      const g = linearGradientCss(p, n.size.x, n.size.y);
      if (g) s.backgroundImage = s.backgroundImage ? s.backgroundImage + ", " + g : g;
    }
    else if (p.type === "IMAGE" && p.image) {
      const src = hex(p.image.hash);
      const name = slug + "-" + src.slice(0, 10) + "-" + Math.round(n.size.x) + "x" + Math.round(n.size.y);
      bakeJobs.push({
        page: slug, src, out: name, w: n.size.x, h: n.size.y,
        matrix: p.transform ? [p.transform.m00, p.transform.m10, p.transform.m01, p.transform.m11, p.transform.m02, p.transform.m12] : null,
        mode: p.imageScaleMode || "STRETCH", opacity: p.opacity == null ? 1 : p.opacity,
        filter: p.paintFilter || null,
      });
      imgs.push({ name, radius: s.borderRadius });
    }
  }
  const st = (n.strokePaints || []).filter((p) => p.visible !== false)[0];
  if (st && st.type === "SOLID" && n.strokeWeight && n.type !== "LINE") {
    s.border = n2(n.strokeWeight) + "px solid " + rgba(st.color, st.opacity);
  }
  for (const e of n.effects || []) {
    if (e.visible === false) continue;
    if (e.type === "BACKGROUND_BLUR" || e.type === "GLASS") s.backdropFilter = "blur(" + n2((e.radius || 0) / 2) + "px)";
    if (e.type === "DROP_SHADOW") {
      s.boxShadow = n2(e.offset.x) + "px " + n2(e.offset.y) + "px " + n2(e.radius) + "px " + n2(e.spread || 0) + "px " + rgba(e.color);
    }
  }
  return s;
}

/** One div per Figma line, at its exact x / lineY, with spans for per-character overrides. */
function textNode(n, indent, styleByKey) {
  const dtd = n.derivedTextData;
  const chars = (n.textData && n.textData.characters) || "";
  if (!dtd || !dtd.baselines || !dtd.baselines.length) return "";
  const base = paints(n)[0];
  const baseColor = base && base.type === "SOLID" ? rgba(base.color, base.opacity) : "#ffffff";
  // An override often carries no properties of its own, only a reference to a
  // shared text style. Resolve it, or every run renders at the node's own size.
  const resolve = (o) => {
    const k = o && o.styleIdForText && o.styleIdForText.assetRef && o.styleIdForText.assetRef.key;
    const sh = k && styleByKey.get(k);
    if (!sh) return o || {};
    return {
      fontName: o.fontName || sh.fontName,
      fontSize: o.fontSize != null ? o.fontSize : sh.fontSize,
      // NOT the shared style's fill: those styles carry a black swatch that
      // Figma does not paint here. Only an explicit override colour counts.
      fillPaints: o.fillPaints,
      letterSpacing: o.letterSpacing || sh.letterSpacing,
    };
  };
  const table = new Map(((n.textData.styleOverrideTable) || []).map((o) => [o.styleID, resolve(o)]));
  const csid = n.textData.characterStyleIDs || null;

  const w = boxStyle({ transform: n.transform, size: n.size, opacity: n.opacity }, "", []);
  delete w.height;
  w.fontFamily = FAMILY[n.fontName.family] || "var(--font-plex), sans-serif";
  w.fontWeight = WEIGHT[n.fontName.style] != null ? WEIGHT[n.fontName.style] : 400;
  if (/Italic/.test(n.fontName.style)) w.fontStyle = "italic";
  w.fontSize = n2(n.fontSize) + "px";
  w.color = baseColor;
  if (n.letterSpacing && n.letterSpacing.value) {
    w.letterSpacing = n.letterSpacing.units === "PERCENT"
      ? n2(n.letterSpacing.value / 100) + "em"
      : n2(n.letterSpacing.value) + "px";
  }
  if (n.textCase === "UPPER") w.textTransform = "uppercase";
  else if (n.textCase === "LOWER") w.textTransform = "lowercase";
  else if (n.textCase === "TITLE") w.textTransform = "capitalize";
  w.whiteSpace = "pre";

  const paraMeta = (n.textData.lines) || [];
  const paraOf = (i) => {
    let p = 0;
    for (let k = 0; k < i; k++) if (chars.charCodeAt(k) === 10) p++;
    return p;
  };
  let lastPara = -1;
  const pad = " ".repeat(indent);
  const lines = dtd.baselines.map((bl) => {
    const ls = {
      left: n2(bl.position.x) + "px", top: n2(bl.lineY) + "px",
      height: n2(bl.lineHeight) + "px", lineHeight: n2(bl.lineHeight) + "px",
    };
    let inner = "";
    const from = bl.firstCharacter;
    let to = bl.endCharacter;
    while (to > from && /[\n\r]/.test(chars[to - 1])) to--;
    if (csid) {
      const runs = [];
      for (let i = from; i < to; i++) {
        const id = csid[i] == null ? -1 : csid[i];
        if (!runs.length || runs[runs.length - 1].id !== id) runs.push({ id, s: i, e: i + 1 });
        else runs[runs.length - 1].e = i + 1;
      }
      inner = runs.map((r) => {
        const txt = chars.slice(r.s, r.e);
        const ov = table.get(r.id);
        const st = {};
        if (ov) {
          const f = (ov.fillPaints || []).filter((p) => p.visible !== false)[0];
          if (f && f.type === "SOLID") st.color = rgba(f.color, f.opacity);
          if (ov.fontName) {
            st.fontWeight = WEIGHT[ov.fontName.style] != null ? WEIGHT[ov.fontName.style] : 400;
            st.fontFamily = FAMILY[ov.fontName.family] || w.fontFamily;
          }
          if (ov.fontSize) st.fontSize = n2(ov.fontSize) + "px";
        }
        const body = "{`" + esc(txt) + "`}";
        if (!Object.keys(st).length) return body;
        return "<span style={{ " + Object.entries(st).map(([k, v]) => k + ": " + JSON.stringify(v)).join(", ") + " }}>" + body + "</span>";
      }).join("");
    } else {
      inner = "{`" + esc(chars.slice(from, to)) + "`}";
    }
    // Figma draws list bullets itself; the baselines only carry the indented text.
    const pi = paraOf(bl.firstCharacter);
    const meta = paraMeta[pi];
    let marker = "";
    if (meta && meta.lineType === "UNORDERED_LIST" && pi !== lastPara) {
      const ms = { left: n2(bl.position.x - 16) + "px", top: n2(bl.lineY) + "px",
                   height: n2(bl.lineHeight) + "px", lineHeight: n2(bl.lineHeight) + "px" };
      marker = pad + "  <div style={" + lit(ms) + "}>{\"\\u2022\"}</div>\n";
    }
    lastPara = pi;
    return marker + pad + "  <div style={" + lit(ls) + "}>" + inner + "</div>";
  }).join("\n");

  return pad + "<div style={" + lit(w) + "}>\n" + lines + "\n" + pad + "</div>";
}

function build(page) {
  const nc = JSON.parse(readFileSync("x/" + page.dir + "/design.json", "utf8")).nodeChanges;
  const byId = new Map(nc.map((n) => [key(n.guid), n]));
  const kids = new Map();
  for (const n of nc) {
    if (!n.parentIndex) continue;
    const p = key(n.parentIndex.guid);
    if (!kids.has(p)) kids.set(p, []);
    kids.get(p).push(n);
  }
  for (const [, a] of kids) a.sort((x, y) => (x.parentIndex.position < y.parentIndex.position ? -1 : 1));

  const root = nc.filter((n) => n.type === "FRAME" && n.size && Math.abs(n.size.x - 393) < 3)
    .sort((a, b) => b.size.y - a.size.y)[0];
  const styleByKey = new Map(nc.filter((n) => n.styleType === "TEXT" && n.key).map((n) => [n.key, n]));



  /** Expand a component instance: render the symbol's own subtree, with each
   *  node's overrides applied. Overrides are addressed by `overrideKey`, and a
   *  re-typed label's baselines live in the instance's derivedSymbolData, not
   *  on the symbol's own (still original) text node. */
  function instance(inst, sym, indent) {
    const sd = inst.symbolData;
    const last = (gp) => key(gp.guids[gp.guids.length - 1]);
    const ovByKey = new Map((sd.symbolOverrides || []).map((o) => [last(o.guidPath), o]));
    const derByKey = new Map((inst.derivedSymbolData || []).map((d) => [last(d.guidPath), d]));

    const apply = (node) => {
      const k = node.overrideKey && key(node.overrideKey);
      const o = k && ovByKey.get(k);
      const d = k && derByKey.get(k);
      if (!o && !d) return node;
      return Object.assign({}, node, {
        size: (o && o.size) || node.size,
        fillPaints: (o && o.fillPaints) || node.fillPaints,
        textData: (o && o.textData) || node.textData,
        derivedTextData: (d && d.derivedTextData) || node.derivedTextData,
      });
    };

    // the root box takes the instance's own placement and size
    const rootNode = apply(sym);
    const merged = Object.assign({}, rootNode, {
      transform: inst.transform,
      size: inst.size || rootNode.size,
      opacity: inst.opacity,
      fillPaints: paints(inst).length ? inst.fillPaints : rootNode.fillPaints,
    });
    const imgs = [];
    const s = boxStyle(merged, page.slug, imgs);
    if (sym.frameMaskDisabled !== true) s.overflow = "hidden";

    const pad = " ".repeat(indent);
    const walk = (node, ind) => emit(apply(node), ind);
    const inner = [
      ...imgs.map((i) =>
        pad + '  <img src="/assets/mob/' + i.name + '.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />'),
      ...(kids.get(key(sym.guid)) || []).map((c) => walk(c, indent + 2)).filter(Boolean),
    ].join("\n");

    // The CTA pill is the one component that is a link: a solid-filled symbol
    // whose only child is its label.
    const symKids = kids.get(key(sym.guid)) || [];
    const isButton = symKids.length === 1 && symKids[0].type === "TEXT" &&
      (sym.fillPaints || []).some((p) => p.type === "SOLID");
    const tag = isButton ? 'a href="/contact"' : "div";
    const close = isButton ? "a" : "div";
    if (isButton) s.textDecoration = "none";
    return pad + "<" + tag + " style={" + lit(s) + "}>\n" + inner + "\n" + pad + "</" + close + ">";
  }

  function emit(n, indent) {
    if (n.visible === false) return "";
    const pad = " ".repeat(indent);
    if (n.type === "TEXT") return textNode(n, indent, styleByKey);

    if (n.type === "VECTOR") {
      const parent = byId.get(key(n.parentIndex.guid));
      const ico = ICONS[parent && parent.name] || ICONS[n.name];
      const s = boxStyle({ transform: n.transform, size: n.size, opacity: n.opacity }, page.slug, []);
      const f = paints(n)[0];
      const col = f && f.type === "SOLID" ? rgba(f.color, f.opacity) : "#ffffff";
      if (!ico) return pad + "<div style={" + lit(Object.assign({}, s, { background: col })) + "} />";
      return pad + '<svg viewBox="' + ico.vb + '" style={' + lit(s) + '} fill="' + col + '" aria-hidden="true"><path d="' + ico.d + '" /></svg>';
    }

    if (n.type === "INSTANCE" && n.symbolData) {
      const sym = byId.get(key(n.symbolData.symbolID));
      if (sym) return instance(n, sym, indent);
    }

    const imgs = [];
    const s = boxStyle(n, page.slug, imgs);
    if (n.type === "ELLIPSE") s.borderRadius = "50%";
    // Figma frames have "clip content" on unless frameMaskDisabled says otherwise;
    // without this, oversized photo fills spill over the copy beneath them.
    if (n.type === "FRAME" && n.frameMaskDisabled !== true) s.overflow = "hidden";
    if (n === root) { s.left = "0px"; s.top = "0px"; s.overflow = "hidden"; }
    if (n.type === "LINE") {
      const st = (n.strokePaints || []).filter((p) => p.visible !== false)[0];
      delete s.height;
      s.borderTop = n2(n.strokeWeight || 1) + "px solid " + (st ? rgba(st.color, st.opacity) : "rgba(255,255,255,.2)");
      return pad + "<div style={" + lit(s) + "} />";
    }

    const inner = [
      ...imgs.map((i) =>
        pad + '  <img src="/assets/mob/' + i.name + '.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block"' +
        (i.radius ? ", borderRadius: " + JSON.stringify(i.radius) : "") + " }} />"),
      ...(kids.get(key(n.guid)) || []).map((c) => emit(c, indent + 2)).filter(Boolean),
    ].join("\n");

    return inner
      ? pad + "<div style={" + lit(s) + "}>\n" + inner + "\n" + pad + "</div>"
      : pad + "<div style={" + lit(s) + "} />";
  }

  const body = emit(root, 8);
  const H = Math.round(root.size.y);
  // Only Home, Approach and About have a Figma render to difference against.
  const hasRef = existsSync(join(REPO + "/public/ref/mobile", page.ref + ".webp"));
  const ghostImg = hasRef
    ? '        {DESIGN_REVIEW && <img src="/ref/mobile/' + page.ref + '.webp" alt="" style={{ position: "absolute", left: 0, top: 0, width: 393, height: ' + H + ', opacity: ghost, pointerEvents: "none", zIndex: 99, mixBlendMode: "difference" }} />}\n'
    : "";
  const tsx = '"use client";\n' +
    'import { useStageFit' + (hasRef ? ", DESIGN_REVIEW" : "") + ' } from "@/components/useStageFit";\n\n' +
    '/** Generated from "' + page.dir + '.fig" — a 393x' + H + ' mobile design canvas.\n' +
    " *  Every box, colour, font size and line break is read out of the Figma file;\n" +
    " *  nothing here is eyeballed. Regenerate with v3-mobfig/mobgen.mjs. */\n" +
    "export default function " + page.comp + "({ bare = false }: { bare?: boolean }) {\n" +
    "  const { stageRef, artRef, ghost } = useStageFit(393, " + H + ");\n" +
    "  return (\n" +
    '    <div ref={stageRef} style={{ position: "relative", width: "100%", overflow: "hidden", background: "#000000" }}>\n' +
    '      <div ref={artRef} style={{ position: "absolute", top: 0, left: 0, width: 393, height: ' + H + ', transformOrigin: "0 0", color: "#ffffff", fontFamily: "var(--font-plex), system-ui, sans-serif" }}>\n' +
    ghostImg +
    body + "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  );\n" +
    "}\n";
  writeFileSync(join(OUT_COMP, page.comp + ".tsx"), tsx);
  console.log(page.comp, "->", H + "px tall,", nc.length, "nodes");
}

for (const p of PAGES) build(p);
const seen = new Map();
for (const j of bakeJobs) if (!seen.has(j.out)) seen.set(j.out, j);
writeFileSync("bake-jobs.json", JSON.stringify([...seen.values()], null, 1));
console.log("bake jobs:", seen.size);
