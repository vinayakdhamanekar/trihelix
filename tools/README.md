# Mobile canvas generator

`components/mobile/Mob{Home,Approach,About,Cases}.tsx` are generated from the
mobile design files and then patched for behaviour. These scripts are what
produced them.

They need the source design files (`.fig`), which are supplied separately - they
are large and are not part of this repository.

## Running

```bash
node mobgen.mjs            # design files -> the four canvases
python bake-images.py      # extract and bake the image fills
python patch-mobile.py     # re-apply behaviour on top of the generated output
```

`make-docx.py` is separate and needs no design files: it re-renders
`BACKEND_INTEGRATION.md` as `TriHelix-Integration-Guide.docx`, so editing the
Markdown and re-running it keeps the Word copy in step. Needs `python-docx`.

`patch-mobile.py` is idempotent. It re-applies, in order: the menu and popup
chrome, the two accordions, the +/- markers, the deliverable underlines, the
data-driven people rows, the circle social icons, the 16/80px grid corrections,
the clickable footer links, and the logo link.

Anywhere you see `<set-this-path>`, point it at your copy of the design files.

## If you are not regenerating

You do not need these at all. The generated components are committed and can be
edited directly - just remember that a regeneration would overwrite hand edits,
so anything structural belongs in the generator.
