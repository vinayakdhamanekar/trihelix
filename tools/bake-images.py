# Paths resolve against the repository root. Adjust REPO if your checkout
# lives elsewhere.
import os
REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

"""Render each Figma IMAGE fill into a bitmap the exact size of its node box.

The fill's transform maps the unit image box onto the unit node box, so the
inverse maps an output pixel back to a source pixel. The source is padded with
replicated edge pixels first, otherwise samples that fall outside it leave a
hard seam (see the figma-to-code skill).
"""
import json, os, sys
import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = REPO + "/public/assets/mob"
SUP = 2  # supersample so the canvas still looks sharp on a 3x phone
# Figma's "exposure" slider is not one stop per unit. Fitted against Figma's own
# render of the mobile frames: linear light * 2 ** (K_EXPOSURE * exposure).
K_EXPOSURE = float(os.environ.get("K_EXPOSURE", "4.25"))


def _to_linear(a):
    a = a / 255.0
    return np.where(a <= 0.04045, a / 12.92, ((a + 0.055) / 1.055) ** 2.4)


def _to_srgb(a):
    a = np.clip(a, 0.0, 1.0)
    return np.where(a <= 0.0031308, a * 12.92, 1.055 * a ** (1 / 2.4) - 0.055) * 255.0


def apply_paint_filter(im, flt):
    """Figma paintFilter: only exposure and vibrance are used by these designs."""
    if not flt:
        return im
    exp, vib = flt.get("exposure", 0.0), flt.get("vibrance", 0.0)
    if not exp and not vib:
        return im
    a = np.asarray(im).astype(float)
    rgb, alpha = a[:, :, :3], a[:, :, 3:]
    if exp:
        rgb = _to_srgb(_to_linear(rgb) * (2.0 ** (K_EXPOSURE * exp)))
    if vib:
        grey = rgb.mean(axis=2, keepdims=True)
        rgb = np.clip(grey + (rgb - grey) * (1.0 + vib), 0, 255)
    return Image.fromarray(np.concatenate([rgb, alpha], axis=2).astype("uint8"), "RGBA")

PAGE_DIR = {
    "home": "TRX Home Mobile 3.0",
    "approach": "TRX Approach Mobile 3.0",
    "about": "TRX About Us Mobile 3.0",
    "cases": "TRK  Case Studies Mobile 3.0",
}

os.makedirs(OUT, exist_ok=True)
jobs = json.load(open(os.path.join(ROOT, "bake-jobs.json")))
done = 0

for j in jobs:
    src = None
    for slug, d in PAGE_DIR.items():
        p = os.path.join(ROOT, "x", d, "images", j["src"])
        if os.path.exists(p):
            src = p
            break
    if src is None:
        print("MISSING", j["src"], j["out"])
        continue

    im = Image.open(src).convert("RGBA")
    W, H = int(round(j["w"] * SUP)), int(round(j["h"] * SUP))

    mode = j.get("mode", "STRETCH")
    if mode == "FIT":
        # Figma ignores the paint transform for FIT and simply contains the
        # image in the node box. Running FIT through the matrix like a STRETCH
        # is what squashed the case-study photos: case 1's matrix crops the
        # middle 50% of a 4096x2731 source and then crams it into a 551x413 box.
        sw, sh = im.size
        k = min(W / sw, H / sh)
        nw, nh = max(1, round(sw * k)), max(1, round(sh * k))
        scaled = im.resize((nw, nh), Image.LANCZOS)
        out = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        out.paste(scaled, ((W - nw) // 2, (H - nh) // 2))
    elif j["matrix"]:
        a, b, c, d, e, f = j["matrix"]          # svg order: m00 m10 m01 m11 m02 m12
        # Measured against Figma's own render (mtest.py): the fill matrix maps
        # the unit NODE box onto the unit IMAGE box, i.e. it is already the
        # output->input map PIL's AFFINE wants. Inverting it is wrong here.
        Mi = np.array([[a, c, e], [b, d, f], [0, 0, 1]], dtype=float)
        sw, sh = im.size
        pw, ph = sw, sh
        arr = np.pad(np.asarray(im), ((ph, ph), (pw, pw), (0, 0)), mode="edge")
        padded = Image.fromarray(arr)
        data = (
            sw * Mi[0, 0] / W, sw * Mi[0, 1] / H, sw * Mi[0, 2] + pw,
            sh * Mi[1, 0] / W, sh * Mi[1, 1] / H, sh * Mi[1, 2] + ph,
        )
        out = padded.transform((W, H), Image.AFFINE, data, resample=Image.BICUBIC)
    else:
        out = im.resize((W, H), Image.LANCZOS)

    out = apply_paint_filter(out, j.get("filter"))

    if j["opacity"] < 0.999:
        al = out.getchannel("A").point(lambda v: int(v * j["opacity"]))
        out.putalpha(al)

    out.save(os.path.join(OUT, j["out"] + ".webp"), quality=90, method=6)
    done += 1

print("baked", done, "of", len(jobs))
