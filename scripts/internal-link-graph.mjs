#!/usr/bin/env node
// Adapted from Illyism/seo-skills internal-linking script for Vite + React + TS static-articles.
// Usage: node scripts/internal-link-graph.mjs > seo/internal-link-graph.json
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const PAGES = {
  "/": "client/src/pages/home.tsx",
  "/calculator-pensie-anticipata/": "client/src/pages/calculator-anticipata.tsx",
  "/calculator-varsta-pensionare/": "client/src/pages/calculator-varsta-pensionare.tsx",
  "/calculator-puncte-pensie/": "client/src/pages/calculator-puncte-pensie.tsx",
  "/calculator-pensie-pilon-2/": "client/src/pages/calculator-pilon-2.tsx",
  "/calculator-pensie-pilon-3/": "client/src/pages/calculator-pensie-pilon-3.tsx",
  "/program-excel-calcul-pensie/": "client/src/pages/program-excel-calcul-pensie.tsx",
  "/planificare/": "client/src/pages/guides/planificare.tsx",
  "/tipuri-pensii/": "client/src/pages/guides/tipuri-pensii.tsx",
  "/legislatie/": "client/src/pages/guides/legislatie.tsx",
  "/metodologie/": "client/src/pages/metodologie.tsx",
  "/faq/": "client/src/pages/faq.tsx",
  "/blog/": "client/src/pages/blog.tsx",
  "/despre-noi/": "client/src/pages/despre-noi.tsx",
  "/contact/": "client/src/pages/contact.tsx",
  "/privacy/": "client/src/pages/privacy.tsx",
  "/terms/": "client/src/pages/terms.tsx",
};

const MONEY = new Set([
  "/",
  "/calculator-pensie-anticipata/",
  "/calculator-varsta-pensionare/",
  "/calculator-puncte-pensie/",
  "/calculator-pensie-pilon-2/",
  "/calculator-pensie-pilon-3/",
  "/program-excel-calcul-pensie/",
]);

const norm = (p) => {
  const clean = String(p).split("?")[0].split("#")[0];
  if (!clean.startsWith("/")) return clean;
  if (clean.length > 1 && !clean.endsWith("/") && !/\.[a-z0-9]+$/i.test(clean)) {
    return clean + "/";
  }
  return clean;
};

const extractLinks = (text) => {
  const out = new Set();
  for (const re of [
    /\bhref\s*[:=]\s*\{?\s*["'`](\/[^"'`#\s}]*)/g,
    /<a\s+[^>]*href=["'](\/[^"'#\s]*)/g,
    /\]\((\/[^)\s#]*)/g,
  ]) {
    for (const m of text.matchAll(re)) {
      if (!m[1].includes("${") && !/\.(svg|png|jpg|webp|pdf|xml|json)$/i.test(m[1])) {
        out.add(norm(m[1]));
      }
    }
  }
  return [...out];
};

const headerText = readFileSync(resolve("client/src/components/layout/header.tsx"), "utf8");
const footerText = readFileSync(resolve("client/src/components/layout/footer.tsx"), "utf8");
const headerLinks = new Set(extractLinks(headerText));
const sitewide = new Set([...headerLinks, ...extractLinks(footerText)]);

const inbound = new Map();
const pageMap = new Map();

for (const [route, file] of Object.entries(PAGES)) {
  pageMap.set(route, file);
  const text = readFileSync(resolve(file), "utf8");
  for (const link of extractLinks(text)) {
    if (link !== route) {
      if (!inbound.has(link)) inbound.set(link, new Set());
      inbound.get(link).add(route);
    }
  }
}

// Parse static-articles cleanly from TypeScript file without executing extra imports
const articlesSrc = readFileSync(resolve("client/src/data/static-articles.ts"), "utf8");
const artRe = /slug:\s*"([^"]+)",[\s\S]*?content:\s*`([\s\S]*?)`,/g;
let match;
let articleCount = 0;
let upper40Pass = 0;
const anchorCounts = new Map();

while ((match = artRe.exec(articlesSrc)) !== null) {
  articleCount++;
  const slug = match[1];
  const route = `/blog/${slug}/`;
  const body = match[2];
  pageMap.set(route, `client/src/data/static-articles.ts#${slug}`);

  for (const link of extractLinks(body)) {
    if (link !== route) {
      if (!inbound.has(link)) inbound.set(link, new Set());
      inbound.get(link).add(route);
    }
  }

  const cut = Math.floor(body.length * 0.4);
  const upperLinks = extractLinks(body.slice(0, cut)).filter((u) => MONEY.has(u));
  if (upperLinks.length > 0) upper40Pass++;

  for (const aMatch of body.matchAll(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const href = norm(aMatch[1]);
    if (!MONEY.has(href)) continue;
    const anchor = aMatch[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
    if (!anchorCounts.has(href)) anchorCounts.set(href, new Map());
    const m = anchorCounts.get(href);
    m.set(anchor, (m.get(anchor) || 0) + 1);
  }
}

const rows = [...pageMap.entries()].map(([route, file]) => ({
  route,
  file,
  contextualInbound: inbound.get(route)?.size ?? 0,
  linkedFrom: [...(inbound.get(route) ?? [])],
  inHeader: headerLinks.has(route),
  inNavOrFooter: sitewide.has(route),
  money: MONEY.has(route),
  distinctAnchors: anchorCounts.get(route)?.size ?? 0,
})).sort((a, b) => a.contextualInbound - b.contextualInbound);

console.log(JSON.stringify({
  generatedAt: new Date().toISOString(),
  articlesTotal: articleCount,
  articlesWithUpper40MoneyLink: upper40Pass,
  orphanMoneyPages: rows.filter((r) => r.money && r.contextualInbound < 3).map((r) => r.route),
  moneyPagesSummary: rows.filter((r) => r.money),
  pages: rows,
}, null, 2));
