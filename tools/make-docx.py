# Paths resolve against the repository root. Adjust REPO if your checkout
# lives elsewhere.
import os
REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

"""Render BACKEND_INTEGRATION.md as the Word guide that ships with the code.

Keeps the two in step: edit the Markdown, re-run this, and the .docx follows.
Handles the subset of Markdown the guide actually uses - headings, paragraphs,
bullets, numbered lists, fenced code, tables, blockquotes and horizontal rules -
plus inline bold, italic and code spans.
"""
import os
import re

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, RGBColor

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "trihelix-v3", "BACKEND_INTEGRATION.md")
OUT = os.path.join(os.path.dirname(SRC), "TriHelix-Integration-Guide.docx")

BODY = "Calibri"
MONO = "Consolas"
INLINE = re.compile(r"(\*\*.+?\*\*|`[^`]+`|\*[^*]+\*|_[^_]+_)")


def runs(par, text):
    """Write text into a paragraph, honouring **bold**, *italic* and `code`."""
    for piece in INLINE.split(text):
        if not piece:
            continue
        if piece.startswith("**") and piece.endswith("**"):
            par.add_run(piece[2:-2]).bold = True
        elif piece.startswith("`") and piece.endswith("`"):
            r = par.add_run(piece[1:-1])
            r.font.name = MONO
            r.font.size = Pt(9.5)
            r.font.color.rgb = RGBColor(0xB0, 0x30, 0x60)
        elif len(piece) > 2 and piece[0] in "*_" and piece[-1] == piece[0]:
            par.add_run(piece[1:-1]).italic = True
        else:
            par.add_run(piece)


def code_block(doc, lines):
    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Pt(18)
    p.paragraph_format.space_after = Pt(10)
    r = p.add_run("\n".join(lines))
    r.font.name = MONO
    r.font.size = Pt(9)


def table(doc, rows):
    header, body = rows[0], rows[2:]          # rows[1] is the --- separator
    t = doc.add_table(rows=1, cols=len(header))
    t.style = "Light Grid Accent 1"
    t.alignment = WD_TABLE_ALIGNMENT.LEFT
    for i, h in enumerate(header):
        cell = t.rows[0].cells[i]
        cell.text = ""
        runs(cell.paragraphs[0], h)
        for r in cell.paragraphs[0].runs:
            r.bold = True
    for row in body:
        cells = t.add_row().cells
        for i, v in enumerate(row[:len(header)]):
            cells[i].text = ""
            runs(cells[i].paragraphs[0], v)
    doc.add_paragraph()


def split_row(line):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def main():
    md = open(SRC, encoding="utf-8").read().split("\n")
    doc = Document()
    normal = doc.styles["Normal"]
    normal.font.name = BODY
    normal.font.size = Pt(10.5)

    i = 0
    while i < len(md):
        line = md[i]

        if line.startswith("```"):
            j = i + 1
            while j < len(md) and not md[j].startswith("```"):
                j += 1
            code_block(doc, md[i + 1:j])
            i = j + 1
            continue

        if line.startswith("|") and i + 1 < len(md) and set(md[i + 1].replace("|", "").strip()) <= set("-: "):
            j = i
            rows = []
            while j < len(md) and md[j].startswith("|"):
                rows.append(split_row(md[j]))
                j += 1
            table(doc, rows)
            i = j
            continue

        if not line.strip():
            i += 1
            continue

        if re.fullmatch(r"-{3,}|_{3,}|\*{3,}", line.strip()):
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(6)
            i += 1
            continue

        m = re.match(r"(#{1,4})\s+(.*)", line)
        if m:
            doc.add_heading(re.sub(r"[*`]", "", m.group(2)), level=len(m.group(1)))
            i += 1
            continue

        if line.startswith(">"):
            p = doc.add_paragraph(style="Intense Quote")
            runs(p, line.lstrip("> ").strip())
            i += 1
            continue

        m = re.match(r"\s*[-*+]\s+(.*)", line)
        if m:
            runs(doc.add_paragraph(style="List Bullet"), m.group(1))
            i += 1
            continue

        m = re.match(r"\s*\d+[.)]\s+(.*)", line)
        if m:
            runs(doc.add_paragraph(style="List Number"), m.group(1))
            i += 1
            continue

        p = doc.add_paragraph()
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
        runs(p, line.strip())
        i += 1

    doc.save(OUT)
    print(f"{OUT}  ({os.path.getsize(OUT) / 1024:.0f} KB, {len(doc.paragraphs)} paragraphs)")


if __name__ == "__main__":
    main()
