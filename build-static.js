import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

console.log("Building CalculatorPensie.com (Vite Client + Vite SSR Static Generation)...");

const rootDir = process.cwd();
const distDir = path.resolve(rootDir, "dist/public");
const ssrOutDir = path.resolve(rootDir, "dist/ssr");
const publicDir = path.resolve(rootDir, "public");

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
if (fs.existsSync(ssrOutDir)) {
  fs.rmSync(ssrOutDir, { recursive: true, force: true });
}

console.log("1. Building client bundle with Vite...");
execSync("npx vite build --mode production", { stdio: "inherit" });

console.log("2. Building SSR entry bundle with Vite...");
execSync(
  `npx vite build --ssr src/entry-server.tsx --outDir "${ssrOutDir}" --mode production`,
  { stdio: "inherit" }
);

console.log("3. Copying root public assets into dist/public...");
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
}

console.log("4. Rendering all routes with SSR HTML + unified metadata + @graph JSON-LD...");
execSync("npx tsx scripts/generate-meta-pages.ts", { stdio: "inherit" });

console.log("5. Verifying SSR content & canonical trailing slashes across every HTML page...");
execSync("node scripts/prerender-body.mjs", { stdio: "inherit" });

console.log("6. Running route coverage guard (no 404 traps)...");
execSync("node scripts/verify-routes-prerendered.mjs", { stdio: "inherit" });

// Only notify IndexNow during real production deploys (Netlify CI or explicit RUN_INDEXNOW=1)
if (process.env.NETLIFY === "true" || process.env.RUN_INDEXNOW === "1") {
  console.log("7. Submitting sitemap URLs to IndexNow...");
  execSync("node scripts/ping-indexnow.js", { stdio: "inherit" });
} else {
  console.log("7. Skipping IndexNow ping on local build (set RUN_INDEXNOW=1 to ping).");
}

console.log("Static SSR build completed cleanly! Output: dist/public");
