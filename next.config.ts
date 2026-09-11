import type { NextConfig } from "next";

/**
 * Two hand-off formats, from one codebase.
 *
 *   npm run build         -> .next/  — served by `npm start` (Node 20+) or any
 *                            Node host. Keeps Next's routing and headers.
 *   npm run build:static  -> out/    — plain .html/.css/.js/.webp files. Drop
 *                            them behind IIS, Apache, nginx, S3 or any CDN.
 *                            No Node runtime needed at all.
 *
 * Every route in this site is statically pre-rendered, so the two builds render
 * identically. Pick whichever suits the internal hosting restrictions.
 */
const isStatic = process.env.BUILD_TARGET === "static";

const nextConfig: NextConfig = {
  ...(isStatic
    ? {
        output: "export",
        // emit approach/index.html rather than approach.html, so a plain file
        // server resolves /approach with no rewrite rules
        trailingSlash: true,
      }
    : {}),
  // the site uses plain <img> with pre-sized WebP; no optimizer at runtime
  images: { unoptimized: true },
};

export default nextConfig;
