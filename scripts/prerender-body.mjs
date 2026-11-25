#!/usr/bin/env node
/**
 * prerender-body.mjs — verifies that every static route & blog article in
 * dist/public has real SSR HTML inside <div id="root">...</div>, matching
 * trailing-slash canonical, single @graph JSON-LD, and zero layout hacks.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist", "public");

function collectHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectHtmlFiles(full, files);
    } else if (entry.name === "index.html") {
      files.push(full);
    }
  }
  return files;
}

const files = collectHtmlFiles(DIST);
let errors = 0;

for (const file of files) {
  const relDir = path.relative(DIST, path.dirname(file)).replace(/\\/g, "/");
  const route = !relDir || relDir === "." ? "/" : `/${relDir}/`;
  const html = fs.readFileSync(file, "utf-8");

  const startIdx = html.indexOf('<div id="root">');
  const bodyEndIdx = html.lastIndexOf("</body>");
  const endDivIdx = bodyEndIdx > -1 ? html.lastIndexOf("</div>", bodyEndIdx) : -1;
  const innerHtml =
    startIdx > -1 && endDivIdx > startIdx ? html.slice(startIdx + '<div id="root">'.length, endDivIdx) : "";
  const rootTextLen = innerHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().length;

  if (rootTextLen < 400) {
    console.error(`FAIL ${route}: #root text length too short (${rootTextLen} chars)`);
    errors++;
  }
  if (/main\{min-height:/i.test(html)) {
    console.error(`FAIL ${route}: obsolete main{min-height} style still present`);
    errors++;
  }
  if (/className=/.test(innerHtml)) {
    console.error(`FAIL ${route}: raw React className= leaked into HTML`);
    errors++;
  }
  if (/\*\*[^*]+\*\*/.test(innerHtml)) {
    console.error(`FAIL ${route}: raw Markdown **bold** leaked into HTML`);
    errors++;
  }
  if (!/<link\s+rel=["']canonical["']\s+href=["']https:\/\/calculatorpensie\.com\/([^"']*\/)?["']/i.test(html)) {
    console.error(`FAIL ${route}: canonical missing trailing slash`);
    errors++;
  }
  const canonicals = html.match(/<link\s+rel=["']canonical["']/gi) || [];
  if (canonicals.length !== 1) {
    console.error(`FAIL ${route}: expected 1 canonical, found ${canonicals.length}`);
    errors++;
  }
  const schemas = html.match(/<script\b[^>]*type=["']application\/ld\+json["']/gi) || [];
  if (schemas.length !== 1) {
    console.error(`FAIL ${route}: expected 1 JSON-LD block, found ${schemas.length}`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`SSR verification failed with ${errors} error(s).`);
  process.exit(1);
}

const ssrDir = path.join(ROOT, "dist", "ssr");
if (fs.existsSync(ssrDir)) {
  fs.rmSync(ssrDir, { recursive: true, force: true });
}

console.log(`SSR content verified cleanly across all ${files.length} HTML pages!`);
