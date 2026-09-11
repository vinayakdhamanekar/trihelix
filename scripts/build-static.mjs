/**
 * `npm run build:static` — produces out/ as plain static files for internal
 * hosting: no Node runtime, no rewrite rules.
 *
 * A tiny wrapper rather than a `cross-env` dependency, so the hand-off repo
 * stays dependency-free and the command behaves the same on Windows and Linux.
 *
 * It also strips the internal design-review assets — the Figma reference
 * renders (public/ref), the section tiles (public/tiles) and the comparison
 * tool — roughly 33MB that exists only to diff the build against the design and
 * must not reach the client's server. Keep them with NEXT_PUBLIC_DESIGN_REVIEW=1.
 */
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const nextBin = createRequire(import.meta.url).resolve("next/dist/bin/next");
const review = process.env.NEXT_PUBLIC_DESIGN_REVIEW === "1";

const r = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  env: { ...process.env, BUILD_TARGET: "static" },
});
if (r.status !== 0) process.exit(r.status ?? 1);

if (!review) {
  for (const p of ["ref", "compare.html", "tiles"]) {
    const t = join("out", p);
    if (existsSync(t)) {
      rmSync(t, { recursive: true, force: true });
      console.log("stripped design-review asset: out/" + p);
    }
  }
}
console.log("\nStatic site written to out/ — copy its contents to the web root.");
