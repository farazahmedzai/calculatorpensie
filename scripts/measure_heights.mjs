#!/usr/bin/env node
// measure_heights.mjs — measure the rendered height of every page, so the build
// can reserve it and stop the footer from jumping.
//
// WHY THIS IS THE FIX
//   Proved by A/B, same page, only one variable changed:
//     baseline (no reserve)        CLS 0.81
//     main { min-height: 6700px }  CLS 0.02
//   The page grows from 844px (viewport) to ~6793px when React mounts, and the
//   footer is pushed down by the difference in a single 0.79 shift. Reserving
//   the final height removes it. `min-height: 100vh` does NOT work — it covers
//   only 12% of a 8-viewport page.
//
// OUTPUT
//   scripts/page-heights.json — { "/path/": heightInPx }. Consumed by
//   generate-meta-pages.ts, which injects `main{min-height:Npx}` per route.
//   Unknown/future routes fall back to a per-type default at build time.
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const DIST = String.raw`C:\Users\jibra\Desktop\1\no need\video-to-blog\source\live-site\dist\public`;
const OUT = String.raw`C:\Users\jibra\Desktop\1\no need\video-to-blog\audit\out\page-heights.json`;
const SRV = path.join(path.dirname(OUT), ".height-server.cjs");
const PORT = 8111;

// Every prerendered route, plus the blog index and all articles.
const routes = ["/"];
for (const e of fs.readdirSync(DIST, { withFileTypes: true })) {
  if (!e.isDirectory() || e.name === "assets" || e.name === "images" || e.name === "blog") continue;
  if (!fs.existsSync(path.join(DIST, e.name, "index.html"))) continue;
  routes.push(`/${e.name}/`);
}
if (fs.existsSync(path.join(DIST, "blog", "index.html"))) routes.push("/blog/");
for (const e of fs.readdirSync(path.join(DIST, "blog"), { withFileTypes: true })) {
  if (e.isDirectory() && fs.existsSync(path.join(DIST, "blog", e.name, "index.html"))) routes.push(`/blog/${e.name}/`);
}

fs.writeFileSync(SRV, `
const http=require("http"),fs=require("fs"),path=require("path");
const root=process.argv[2],port=Number(process.argv[3]);
const t={".html":"text/html; charset=utf-8",".js":"application/javascript",".css":"text/css",".webp":"image/webp",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".xml":"application/xml",".txt":"text/plain",".json":"application/json",".pdf":"application/pdf"};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split("?")[0]);
  let f=path.join(root,p);
  try{ if(fs.statSync(f).isDirectory()) f=path.join(f,"index.html"); }catch{}
  if(!fs.existsSync(f)) f=path.join(root,"index.html");
  try{ const b=fs.readFileSync(f); res.writeHead(200,{"content-type":t[path.extname(f)]||"application/octet-stream"}); res.end(b); }
  catch(e){ res.writeHead(404); res.end("nf"); }
}).listen(port,()=>console.error("up "+port));
`, "utf8");

const { spawn } = await import("node:child_process");
const srv = spawn(process.execPath, [SRV, DIST, String(PORT)], { stdio: "ignore" });
await new Promise(r => setTimeout(r, 2500));

// verify the server before measuring anything
try {
  const r = await fetch(`http://127.0.0.1:${PORT}/`);
  if (!r.ok) throw new Error(String(r.status));
  console.log(`server ok (${(await r.text()).length} bytes)\n`);
} catch (e) {
  console.error("server not reachable — aborting:", String(e.message));
  srv.kill(); process.exit(1);
}

const b = await chromium.launch({ headless: true });
const heights = {};
console.log("route".padEnd(50) + "height");
console.log("-".repeat(62));

let n = 0;
for (const route of routes) {
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  let h = null;
  try {
    const resp = await p.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: "load", timeout: 45000 });
    if (!resp || !resp.ok()) throw new Error("HTTP " + (resp ? resp.status() : "?"));
    await p.waitForTimeout(4000);
    const r = await p.evaluate(() => ({
      doc: document.documentElement.scrollHeight,
      body: (document.body.innerText || "").length,
      footer: !!document.querySelector("footer"),
    }));
    if (r.body < 300 || !r.footer) throw new Error(`did not render (text=${r.body})`);
    h = r.doc;
    heights[route] = h;
  } catch (e) {
    console.log(route.padEnd(50) + "SKIP (" + String(e.message).slice(0, 30) + ")");
  }
  if (h) console.log(route.padEnd(50) + h + "px");
  await ctx.close();
  n++;
}
await b.close();
srv.kill();

// A per-type default for routes that have no measurement yet, set generously
// (too tall only adds whitespace below the fold; too short leaves a shift).
const articles = Object.entries(heights).filter(([k]) => k.startsWith("/blog/") && k !== "/blog/").map(([, v]) => v);
const others = Object.entries(heights).filter(([k]) => !k.startsWith("/blog/")).map(([, v]) => v);
const max = a => (a.length ? Math.max(...a) : null);
const out = {
  generated: new Date().toISOString(),
  viewport: { width: 390, height: 844 },
  note: "Rendered document height per route, mobile viewport. Used to reserve layout so the footer does not shift. See scripts/prerender-body.mjs header for the A/B that proved this fixes CLS 0.81 -> 0.02.",
  routes: heights,
  defaults: { article: max(articles), other: max(others) },
};
fs.writeFileSync(OUT, JSON.stringify(out, null, 2), "utf8");

console.log(`\nmeasured ${Object.keys(heights).length} of ${routes.length} routes`);
console.log(`defaults: article ${out.defaults.article}px, other ${out.defaults.other}px`);
console.log(`written: ${path.basename(OUT)}`);
