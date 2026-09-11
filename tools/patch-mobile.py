# Paths resolve against the repository root. Adjust REPO if your checkout
# lives elsewhere.
import os
REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

"""Every post-generation change to the mobile canvases, in one re-runnable pass.

Run after v3-mobfig/mobgen.mjs. Order matters.

  1. chrome     - the hamburger menu + contact popup overlay on every page
  2. accordions - Case Studies case 1 collapses; Approach starts collapsed
  3. markers    - the +/- glyphs, drawn once and legibly
  4. underline  - deliverable rows are an underline, not an outline box
"""
import io, re

V3 = REPO + "/components/mobile/"
ROUTE = {"MobHome": "/", "MobApproach": "/approach", "MobAbout": "/about", "MobCases": "/case-studies"}


def indent_of(line):
    return len(line) - len(line.lstrip())


DIV = re.compile(r"</div>|<div\b[^>]*?(/?)>")


def block_end(lines, start):
    depth = 0
    for i in range(start, len(lines)):
        for m in DIV.finditer(lines[i]):
            if m.group(0).startswith("</"):
                depth -= 1
            elif m.group(1) != "/":
                depth += 1
        if i > start and depth <= 0:
            return i
    return len(lines) - 1


# ---------------------------------------------------------------- 1. chrome
for comp, route in ROUTE.items():
    p = V3 + comp + ".tsx"
    s = io.open(p, encoding="utf-8").read()
    if "MobileChrome" in s:
        continue
    s = s.replace('import { useStageFit',
                  'import MobileChrome from "@/components/mobile/MobileChrome";\nimport { useStageFit', 1)
    s = re.sub(r'(\n      </div>\n    </div>\n  \);\n\}\n)$',
               '\n      </div>\n      {!bare && <MobileChrome current="%s" />}\n    </div>\n  );\n}\n' % route, s)
    io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("  1. chrome     : menu + contact popup on all four pages")

# ------------------------------------------------------------ 2. accordions
p = V3 + "MobCases.tsx"
s = io.open(p, encoding="utf-8").read()
if "cs1" not in s:
    lines = s.split("\n")
    BODY1 = 2115                     # case 1's expanded body, drawn in the .fig
    CASE = [3687, 4840]              # tops of the case 2 and case 3 blocks
    BODY = [4791, 5944]              # where their bodies go (block top + 1104)

    # --- case 1: wrap the authored body ------------------------------------
    bi = next(i for i, l in enumerate(lines) if 'top: "1572px"' in l and 'height: "2115px"' in l)
    bj = block_end(lines, bi)
    lines[bi] = "          {cs1 && (" + lines[bi].lstrip()
    lines[bj] = lines[bj] + ")}"

    # --- every toggle row: case 1's at y=1502, cases 2 and 3 at y=1072 ------
    def wire(i, n):
        lines[i] = lines[i].replace(
            '<div style={{ position: "absolute",',
            '<div role="button" tabIndex={0} onClick={() => setCs%d((v) => !v)} '
            'onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setCs%d((v) => !v); } }} '
            'aria-expanded={cs%d} style={{ cursor: "pointer", position: "absolute",' % (n, n, n))
        for k in range(i, min(i + 14, len(lines))):
            for lbl in ("Hide the full case study", "Show the full case study"):
                if lbl in lines[k]:
                    lines[k] = lines[k].replace(
                        "{`%s`}" % lbl,
                        '{cs%d ? "Hide the full case study" : "Show the full case study"}' % n)
                    return

    wire(next(i for i, l in enumerate(lines) if 'top: "1502px"' in l and 'height: "32px"' in l), 1)
    rows = [i for i, l in enumerate(lines)
            if 'top: "1072px"' in l and 'width: "215px", height: "32px"' in l]
    assert len(rows) == 2, rows
    wire(rows[0], 2)
    wire(rows[1], 3)

    # --- shift everything below by however much is open above it -----------
    # The earlier pass only matched left:"0px", so the CTA card and the footer
    # stayed put and left a 2115px hole under case 3 whenever case 1 was shut.
    for i, l in enumerate(lines):
        m = re.match(r'^ {10}<div style=\{\{ position: "absolute", left: "[\d.-]+px", top: "([\d.]+)px"', l)
        if not m:
            continue
        top = float(m.group(1))
        if top < CASE[0]:
            continue
        d = ["d1"]
        if top >= CASE[1]:
            d.append("d2")
        if top > BODY[1]:
            d.append("d3")
        lines[i] = l.replace(
            'style={{ position: "absolute",',
            'style={{ transform: `translateY(${%s}px)`, position: "absolute",' % " + ".join(d))

    # --- inject the two generated bodies right after their case blocks -----
    for n, (ct, bt, shift) in enumerate(zip(CASE, BODY, ("d1", "d1 + d2")), start=2):
        ci = next(i for i, l in enumerate(lines) if 'top: "%dpx"' % ct in l and 'height: "1104px"' in l)
        cj = block_end(lines, ci)
        lines.insert(cj + 1,
                     '          <div style={{ transform: `translateY(${%s}px)`, position: "absolute", '
                     'left: "16px", top: "%dpx", width: "361px", '
                     'height: cs%d ? undefined : 0, overflow: "hidden" }}>\n'
                     '            <div ref={b%d}><MobCaseBody c={cases[%d]} /></div>\n'
                     '          </div>' % (shift, bt, n, n, n - 1))

    s = "\n".join(lines)
    s = s.replace('import { useStageFit',
                  'import { useState, useRef, useLayoutEffect } from "react";\n'
                  'import MobCaseBody from "@/components/mobile/MobCaseBody";\n'
                  'import { cases } from "@/lib/case-studies-data";\n'
                  'import { useStageFit')
    s = s.replace(
        "const { stageRef, artRef, ghost } = useStageFit(393, 7154);",
        "const [cs1, setCs1] = useState(false);\n"
        "  const [cs2, setCs2] = useState(false);\n"
        "  const [cs3, setCs3] = useState(false);\n"
        "  // Cases 2 and 3 were never drawn expanded, so their bodies come out of\n"
        "  // lib/case-studies-data.ts and are as tall as the copy needs. Measure\n"
        "  // that and grow the canvas by it - nothing on a canvas reflows by itself.\n"
        "  const b2 = useRef<HTMLDivElement>(null);\n"
        "  const b3 = useRef<HTMLDivElement>(null);\n"
        "  const [h2, setH2] = useState(0);\n"
        "  const [h3, setH3] = useState(0);\n"
        "  useLayoutEffect(() => {\n"
        "    const read = () => {\n"
        "      setH2(b2.current?.offsetHeight ?? 0);\n"
        "      setH3(b3.current?.offsetHeight ?? 0);\n"
        "    };\n"
        "    read();\n"
        "    const ro = new ResizeObserver(read);\n"
        "    if (b2.current) ro.observe(b2.current);\n"
        "    if (b3.current) ro.observe(b3.current);\n"
        "    return () => ro.disconnect();\n"
        "  }, []);\n"
        "  const d1 = cs1 ? 0 : -%d;\n"
        "  const d2 = cs2 ? h2 : 0;\n"
        "  const d3 = cs3 ? h3 : 0;\n"
        "  const { stageRef, artRef, ghost } = useStageFit(393, 7154 + d1 + d2 + d3);" % BODY1)
    s = s.replace("width: 393, height: 7154,", "width: 393, height: 7154 + d1 + d2 + d3,")
    io.open(p, "w", encoding="utf-8", newline="\n").write(s)

p = V3 + "MobApproach.tsx"
s = io.open(p, encoding="utf-8").read()
if "apOpen" not in s:
    lines = s.split("\n")
    qi = next(i for i, l in enumerate(lines) if "How do you make it work?" in l)
    ci = max(i for i in range(qi) if 'width: "320px", height: "731px"' in lines[i])
    cj = block_end(lines, ci)
    ai = next(i for i in range(qi + 1, cj)
              if indent_of(lines[i]) == indent_of(lines[ci]) + 2 and lines[i].lstrip().startswith("<div"))
    SHIFT = 697
    lines[ai] = " " * indent_of(lines[ai]) + "{apOpen && (<>" + lines[ai].lstrip()
    lines[cj - 1] = lines[cj - 1] + "</>)}"
    ri = next(i for i in range(ci, 0, -1) if 'top: "40px"' in lines[i] and 'height: "731px"' in lines[i])
    lines[ri] = lines[ri].replace(
        '<div style={{ position: "absolute",',
        '<div role="button" tabIndex={0} onClick={() => setApOpen((v) => !v)} '
        'onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setApOpen((v) => !v); } }} '
        'aria-expanded={apOpen} style={{ cursor: "pointer", position: "absolute",')
    for i, l in enumerate(lines):
        m = re.match(r'^ {10}<div style=\{\{ position: "absolute", left: "\d+px", top: "([\d.]+)px"', l)
        if m and float(m.group(1)) >= 7752:
            lines[i] = l.replace('style={{ position: "absolute",',
                                 'style={{ transform: apOpen ? "none" : "translateY(-%dpx)", position: "absolute",' % SHIFT)
    s = "\n".join(lines)
    s = s.replace('import { useStageFit', 'import { useState } from "react";\nimport { useStageFit')
    s = s.replace("const { stageRef, artRef, ghost } = useStageFit(393, 9940);",
                  "const [apOpen, setApOpen] = useState(false);\n"
                  f"  const {{ stageRef, artRef, ghost }} = useStageFit(393, apOpen ? 9940 : 9940 - {SHIFT});")
    s = s.replace("width: 393, height: 9940,", f"width: 393, height: apOpen ? 9940 : 9940 - {SHIFT},")
    io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("  2. accordions : all three cases collapse, approach starts collapsed")

# --------------------------------------------------------------- 3. markers
MARK = re.compile(
    r'( *)<div style=\{\{ position: "absolute", left: "0px", top: "0px", '
    r'width: "32px", height: "32px", overflow: "hidden" \}\}>\n'
    r'(?: *(?:\{![A-Za-z]+ && \()?<svg viewBox="0 0 1024 1024"[^\n]*\n)+'
    r' *</div>\n')


def icon(pad, open_expr):
    extra = "" if open_expr == "true" else f'\n{pad}    {{!({open_expr}) && <path d="M12 7v10" />}}'
    return (f'{pad}<div style={{{{ position: "absolute", left: "0px", top: "0px", width: "32px", height: "32px" }}}}>\n'
            f'{pad}  <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"'
            f' style={{{{ position: "absolute", left: "2px", top: "2px" }}}}'
            f' fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round">\n'
            f'{pad}    <circle cx="12" cy="12" r="10.4" />\n'
            f'{pad}    <path d="M7 12h10" />{extra}\n'
            f'{pad}  </svg>\n'
            f'{pad}</div>\n')


for comp, states in (("MobCases", ["cs1", "cs2", "cs3"]), ("MobApproach", ["apOpen"])):
    p = V3 + comp + ".tsx"
    s = io.open(p, encoding="utf-8").read()
    out, last, i = [], 0, 0
    for m in MARK.finditer(s):
        out.append(s[last:m.start()])
        out.append(icon(m.group(1), states[i] if i < len(states) else "false"))
        last, i = m.end(), i + 1
    out.append(s[last:])
    io.open(p, "w", encoding="utf-8", newline="\n").write("".join(out))
    print(f"  3. markers    : {comp} {i} redrawn")

# ------------------------------------------------------------- 4. underline
p = V3 + "MobApproach.tsx"
s = io.open(p, encoding="utf-8").read()
n = len(re.findall(r'height: "43px", border: "1px solid #ffffff"', s))
s = s.replace('height: "43px", border: "1px solid #ffffff"',
              'height: "43px", borderBottom: "1px solid rgba(255,255,255,0.55)"')
io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print(f"  4. underline  : {n} deliverable rows -> underline only")

# ----------------------------------------------- 5. About: real people, swipeable
# The mobile .fig leaves the card component's default text in place, so every
# row read "Vineet Bahal". Drive the cards from lib/about-data.ts instead.
import io as _io, re as _re
p = V3 + "MobAbout.tsx"
s = _io.open(p, encoding="utf-8").read()
if "MobPeopleCard" not in s:
    lines = s.split("\n")
    ROWS = [("leaders", 3235), ("regional", 3802), ("experts", 4391)]
    for name, top in ROWS:
        i = next((k for k, l in enumerate(lines)
                  if _re.search(r'top: "%d(?:\.\d+)?px", width: "361px"' % top, l)), None)
        if i is None:
            print(f"     MISS about row {name}"); continue
        j = block_end(lines, i)
        pad = " " * indent_of(lines[i])
        # the row's first child is its heading; the card and dots follow
        head_j = block_end(lines, i + 1)
        lines[i:j + 1] = (
            lines[i:head_j + 1]
            + [f'{pad}  <MobPeopleCard people={{{name}}} />', pad + "</div>"]
        )
    s = "\n".join(lines)
    s = s.replace('import { useStageFit',
                  'import { leaders, regional, experts } from "@/lib/about-data";\n'
                  'import MobPeopleCard from "@/components/mobile/MobPeopleCard";\n'
                  'import { useStageFit', 1)
    _io.open(p, "w", encoding="utf-8", newline="\n").write(s)
    print("  5. about      : three people rows now data-driven and swipeable")

# ------------------------------------------ 6. mobile footer social icons
# "Replace these social media icons with new circle icons" - the drive supplies
# them as filled circles with the glyph knocked out.
SOCIAL = {
    "M20.447 20.452": "icon-linkedin",
    "M20 18h-2V9.25": "icon-email",
    "M6.5 3a2.5": "icon-phone",
}
_SVG = _re.compile(r'<svg viewBox="0 0 24 24" style=\{\{([^}]*)\}\} fill="[^"]*" aria-hidden="true">'
                   r'<path d="([^"]*)" /></svg>')
for comp in ROUTE:
    p = V3 + comp + ".tsx"
    s = _io.open(p, encoding="utf-8").read()
    n = 0
    def swap(m):
        global n
        d = m.group(2)
        for sig, name in SOCIAL.items():
            if d.startswith(sig):
                n += 1
                # Fill the 28x28 slot, ignoring the glyph's own box. The old
                # glyphs were not square - the envelope was 25x20 - and reusing
                # those numbers for a round icon squashed it into an oval.
                return ('<img src="/assets/%s.webp" alt="" style={{ position: "absolute", '
                        'left: "0px", top: "0px", width: "28px", height: "28px" }} />' % name)
        return m.group(0)
    s = _SVG.sub(swap, s)
    if n:
        _io.open(p, "w", encoding="utf-8", newline="\n").write(s)
    print(f"  6. socials    : {comp} {n} icons -> drive circle icons")

# --------------------------------------- 7. mobile grid: 16px sides, 80px gaps
# "Keep a gap of 80 px between each section and follow the grid system of 16 px
# distance from each side". The .fig itself is right almost everywhere; these
# are the two places it slips.
p = V3 + "MobHome.tsx"
s = _io.open(p, encoding="utf-8").read()
before = s
s = s.replace('left: "18px", top: "5653px"', 'left: "16px", top: "5653px"')
# the last section sat 128px below the one before it instead of 80
SHIFT = 48
for y in (7813,):
    s = s.replace(f'top: "{y}px"', f'top: "{y - SHIFT}px"')
s = s.replace("useStageFit(393, 8326)", f"useStageFit(393, {8326 - SHIFT})")
s = s.replace("height: 8326,", f"height: {8326 - SHIFT},")
s = s.replace('height: 8326,', f'height: {8326 - SHIFT},')
if s != before:
    _io.open(p, "w", encoding="utf-8", newline="\n").write(s)
    print("  7. grid       : MobHome 18px -> 16px margin, last gap 128 -> 80")

# --------------------------------------------- 8. mobile footer links are links
# The .fig draws the footer as plain text, so nothing in it was clickable.
# Wrap each label's 36px-tall box in a real link, which is also a proper tap
# target. Pages that do not exist yet keep an inert "#".
FOOT = {
    "Our Approach": "/approach", "Case Studies": "/case-studies",
    "About Us": "/about", "Contact Us": "/contact",
    "Privacy Policy": "#", "Terms of Use": "#", "Cookie Settings": "#",
    "Modern Slavery Act, 2015": "#", "Carbon Neutrality Statement": "#",
    "Carbon Reduction Plan Guidance": "#",
}
for comp in ROUTE:
    p = V3 + comp + ".tsx"
    s = _io.open(p, encoding="utf-8").read()
    if "data-footlink" in s:
        continue
    lines = s.split("\n")
    made = 0
    for label, href in FOOT.items():
        needle = "{`" + label + "`}"
        for i, l in enumerate(lines):
            if needle not in l:
                continue
            # walk up to the 36px-tall box that wraps this label
            box = None
            for k in range(i, max(-1, i - 6), -1):
                if _re.search(r'height: "36px" \}\}>$', lines[k]):
                    box = k
                    break
            if box is None:
                continue
            j = block_end(lines, box)
            tag = "Link" if href != "#" else "a"
            opened = lines[box].replace(
                "<div style={{",
                f'<{tag} data-footlink href={{"{href}"}} style={{{{ textDecoration: "none", color: "inherit", cursor: "pointer",',
                1)
            lines[box] = opened
            lines[j] = lines[j].replace("</div>", f"</{tag}>", 1)
            made += 1
            break
    if made:
        s = "\n".join(lines)
        if 'from "next/link"' not in s:
            s = s.replace('import { useStageFit', 'import Link from "next/link";\nimport { useStageFit', 1)
        _io.open(p, "w", encoding="utf-8", newline="\n").write(s)
    print(f"  8. footer     : {comp} {made} links made clickable")

# ------------------------------------------------ 9. the logo goes home
# The .fig draws the logo as a plain image, so tapping it did nothing.
for comp in ROUTE:
    p = V3 + comp + ".tsx"
    s = _io.open(p, encoding="utf-8").read()
    if "data-logolink" in s:
        continue
    lines = s.split("\n")
    made = 0
    for i, l in enumerate(lines):
        if "d0da487457" not in l or "<img" not in l:
            continue
        # its parent div becomes the link, so the whole mark is the tap target
        par = i - 1
        if par < 0 or "<div style={{" not in lines[par]:
            continue
        # find the closing line BEFORE rewriting the opening tag - once the
        # <div becomes a <Link the depth count no longer sees it
        j = block_end(lines, par)
        lines[par] = lines[par].replace(
            "<div style={{",
            '<Link data-logolink href={"/"} aria-label={"TriHelix home"} '
            'style={{ display: "block", cursor: "pointer",', 1)
        lines[j] = lines[j].replace("</div>", "</Link>", 1)
        made += 1
    if made:
        s = "\n".join(lines)
        if 'from "next/link"' not in s:
            s = s.replace('import { useStageFit', 'import Link from "next/link";\nimport { useStageFit', 1)
        _io.open(p, "w", encoding="utf-8", newline="\n").write(s)
    print(f"  9. logo       : {comp} {made} logo(s) link home")

# ------------------------------------------------- 10. second-round mobile fixes
# (a) Home: the "Learn About MC3" button pointed at /contact and there is no MC3
#     page for it to go to, so the review asked for it to come out.
p = V3 + "MobHome.tsx"
s = _io.open(p, encoding="utf-8").read()
if "Learn About MC" in s:
    lines = s.split("\n")
    i = next(k for k, l in enumerate(lines) if "Learn About MC" in l)
    a = max(k for k in range(i) if lines[k].lstrip().startswith('<a href="/contact"'))
    b = next(k for k in range(i, len(lines)) if lines[k].strip() == "</a>")
    del lines[a:b + 1]
    _io.open(p, "w", encoding="utf-8", newline="\n").write("\n".join(lines))
    print("  10a. MC3 CTA  : removed from MobHome")

# (b) Approach: the three stage icons were exported as 150px crops of a much
#     larger line drawing, so each one read as a stray curve. The full artwork
#     already ships for the desktop page.
p = V3 + "MobApproach.tsx"
s = _io.open(p, encoding="utf-8").read()
STAGE_ICON = (
    ("approach-80e8ffa0df-150x150", "icon-sense-2"),
    ("approach-9e0add0d9e-150x150", "icon-validate-2"),
    ("approach-5a0102d8c2-150x150", "icon-execute-2"),
)
n = 0
for old, new in STAGE_ICON:
    if "/assets/mob/%s.webp" % old in s:
        s = s.replace("/assets/mob/%s.webp" % old, "/assets/%s.webp" % new)
        n += 1

# (c) Approach: the closing statement under "Why Trihelix" sat in a 1px box the
#     desktop does not draw.
BOXED = ('<div style={{ position: "absolute", left: "0px", top: "561px", width: "360px", '
         'height: "65px", border: "1px solid rgba(255,255,255,0.4)" }}>')
if BOXED in s:
    s = s.replace(BOXED, BOXED.replace(', border: "1px solid rgba(255,255,255,0.4)"', ""))
    n += 1
if n:
    _io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("  10b. approach : %d stage icons replaced, closing box outline removed" % len(STAGE_ICON))
