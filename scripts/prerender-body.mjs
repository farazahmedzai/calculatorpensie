#!/usr/bin/env node
// scripts/prerender-body.mjs — give non-JS crawlers the real page content.
//
// WHY THIS EXISTS
//   The live site is a client-rendered React SPA. Its raw HTML is:
//       <body> <div id="root"></div> </body>
//   with no <noscript>. The existing scripts/generate-meta-pages.ts injects
//   route-specific META tags only — never body content. So Googlebot (which
//   renders JS) can index the site, but GPTBot / ClaudeBot / PerplexityBot /
//   CCBot — all of which the site's own robots.txt explicitly ALLOWS for GEO —
//   receive a blank page.
//
// WHAT IT DOES
//   1. Blog articles: injects the article's REAL body text (already present in
//      client/src/data/static-articles.ts, the same source React renders from)
//      into #root, plus an <h1>. This is the same text, not a summary.
//   2. Static routes: injects a <noscript> block carrying the route's own
//      description and an <h1>. No body copy is invented.
//
// SAFETY RULES (deliberate)
//   - It never invents prose. Anything injected is either the article's own
//     content string or the page's own meta description.
//   - Blog content goes in #root: React's createRoot() replaces it on mount, so
//     there is no hydration mismatch and no visual change.
//   - Static-route content goes in <noscript>: inert when JS runs, so it cannot
//     create a second <h1> in the rendered DOM.
//   - Idempotent: a marker comment prevents double-injection.
//   - Runs AFTER generate-meta-pages.ts so it augments the same files.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist', 'public');
const MARKER = '<!-- prerendered-body -->';

if (!fs.existsSync(DIST)) {
  console.error(`dist not found at ${DIST} — run the build first.`);
  process.exit(1);
}

/* ---------- load the article data (same source React uses) ---------- */
let staticArticles = [];
const articlesFile = path.join(ROOT, 'client', 'src', 'data', 'static-articles.ts');
if (fs.existsSync(articlesFile)) {
  const src = fs.readFileSync(articlesFile, 'utf8');
  // Extract the full field set per article. Doing this by text rather than by
  // importing avoids needing a TS loader in the build. Each article starts at
  // `id:` and the content is a backtick template literal.
  const chunks = src.split(/\n\s*\{\s*\n\s*id:\s*/).slice(1);
  for (const chunk of chunks) {
    const g = (re) => { const m = chunk.match(re); return m ? m[1].trim() : ''; };
    const slug = g(/slug:\s*"([^"]+)"/);
    if (!slug) continue;
    const contentMatch = chunk.match(/content:\s*`([\s\S]*?)`/);
    staticArticles.push({
      slug,
      title: g(/title:\s*"([^"]+)"/),
      excerpt: g(/excerpt:\s*"([^"]+)"/),
      category: g(/category:\s*"([^"]*)"/),
      published: !/published:\s*false/.test(chunk),
      content: contentMatch ? contentMatch[1].trim() : '',
    });
  }
}

/* Mirror the RelatedLinks component so the NON-JS HTML carries the same internal
 * links the React app renders. Without this the prerendered page omits them and
 * GPTBot/ClaudeBot/PerplexityBot see an article with no onward links. */
const escapeAttr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const CORE_TOOLS = [
  ['/', 'Calculator Pensie de Stat'],
  ['/calculator-varsta-pensionare/', 'Calculator Vârstă de Pensionare'],
  ['/calculator-pensie-anticipata/', 'Calculator Pensie Anticipată'],
  ['/calculator-puncte-pensie/', 'Calculator Puncte de Stabilitate'],
  ['/legislatie/', 'Ghidul Legislației (Legea 360/2023)'],
];
const TOPICAL_TOOLS = [
  [/pilon-?2|pilonul-?2/i, '/calculator-pensie-pilon-2/', 'Calculator Pilonul II'],
  [/pilon-?3|pilonul-?3|facultativ/i, '/calculator-pensie-pilon-3/', 'Calculator Pilonul III'],
  [/punct-referinta|vpr|indexare|puncte?/i, '/calculator-puncte-pensie/', 'Calculator Puncte de Pensie'],
  [/varsta|pensionare|ies-la-pensie/i, '/calculator-varsta-pensionare/', 'Când te poți pensiona'],
  [/anticipat/i, '/calculator-pensie-anticipata/', 'Pensie Anticipată: penalizări'],
  [/invaliditate|urmas/i, '/tipuri-pensii/', 'Tipuri de Pensii în România'],
  [/legislat|reforma|lege|stat-2026/i, '/legislatie/', 'Legea Pensiilor 2026'],
  [/excel|simulare|instrumente/i, '/program-excel-calcul-pensie/', 'Program Excel Calcul Pensie'],
  [/planificare|minima|garantata/i, '/planificare/', 'Planificare Pensie'],
  [/cotizare|stagiul|vechime|contributii/i, '/faq/', 'Întrebări Frecvente'],
  [/acte|dosar|cnpp|procedur/i, '/metodologie/', 'Metodologia de Calcul'],
];

function relatedLinksHtml(article, all) {
  const hay = `${article.slug} ${article.title}`;
  const seen = new Set();
  const tools = [...CORE_TOOLS];
  for (const [re, href, label] of TOPICAL_TOOLS) {
    if (re.test(hay) && !tools.some(t => t[0] === href)) tools.push([href, label]);
  }
  const toolList = tools.filter(([href]) => { if (seen.has(href)) return false; seen.add(href); return true; }).slice(0, 7);

  const others = all.filter(a => a.published && a.slug !== article.slug);
  const same = others.filter(a => a.category && a.category === article.category);
  const rest = others.filter(a => !(a.category && a.category === article.category));
  const related = [...same, ...rest].slice(0, 4);

  return `
<aside>
<section>
<h2>Instrumente și resurse utile</h2>
<p>Calculează-ți situația exactă cu instrumentele noastre gratuite, actualizate conform Legii 360/2023:</p>
<ul>
${toolList.map(([href, label]) => `<li><a href="${escapeAttr(href)}">${escapeAttr(label)}</a></li>`).join('\n')}
</ul>
</section>
${related.length ? `<section>
<h2>Citește și</h2>
<ul>
${related.map(a => `<li><a href="/blog/${escapeAttr(a.slug)}/">${escapeAttr(a.title)}</a></li>`).join('\n')}
</ul>
</section>` : ''}
</aside>`;
}

const escapeHtml = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

// The article `content` fields are ALREADY HTML (<p>, <h3>, <a href=...>), not
// markdown. Running them through toBlocks() escaped the markup into visible
// "&lt;p&gt;" text — verified in the build output before this fix. So valid
// article HTML is injected verbatim. The only thing scrubbed is <script>,
// which has no business in body copy.
function articleHtml(text) {
  return String(text)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .trim();
}

const readTitle = html => (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1]?.trim() || '';
const readDesc = html => (html.match(/<meta\s+name=["']description["']\s+content=["']([^"]*)["']/i) || [])[1]?.trim() || '';

let articlesDone = 0, routesDone = 0, skipped = 0;

/* ---------- 1. blog articles: inject the real content into #root ---------- */
for (const a of staticArticles) {
  const file = path.join(DIST, 'blog', a.slug, 'index.html');
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(MARKER)) { skipped++; continue; }

  const title = readTitle(html);
  const blocks = articleHtml(a.content);
  if (!blocks) { skipped++; continue; }

  const body = `${MARKER}
<article>
<h1>${escapeHtml(title)}</h1>
${blocks}
</article>
${relatedLinksHtml(a, staticArticles)}`;

  // Replace the empty mount point with the prerendered article.
  if (/<div id="root">\s*<\/div>/i.test(html)) {
    html = html.replace(/<div id="root">\s*<\/div>/i, `<div id="root">${body}</div>`);
  } else if (html.includes('<div id="root">')) {
    html = html.replace('<div id="root">', `<div id="root">${body}`);
  } else {
    html = html.replace(/<body([^>]*)>/i, `<body$1><div id="root">${body}</div>`);
  }
  fs.writeFileSync(file, html, 'utf8');
  articlesDone++;
}

/* ---------- 2. static routes: a <noscript> summary ---------- *
 * Their body copy lives inside React components and cannot be extracted
 * reliably without a renderer, so nothing is invented here: the block carries
 * the page's own <h1> text and its own meta description, plus the sitemap's
 * internal links so a crawler can walk the site. */
// Every prerendered directory gets a <noscript> summary — including `blog`
// itself (the listing page at dist/public/blog/index.html). Only `assets` is
// skipped. The blog ARTICLE pages live one level deeper
// (dist/public/blog/<slug>/index.html) and are handled by the loop above, so
// they are never touched here.
const routes = fs.readdirSync(DIST, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => e.name)
  .filter(name => name !== 'assets');

const navLinks = fs.existsSync(path.join(DIST, 'sitemap.xml'))
  ? [...fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8').matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map(m => m[1])
  : [];

for (const route of [...routes, '.']) {
  const file = route === '.' ? path.join(DIST, 'index.html') : path.join(DIST, route, 'index.html');
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(MARKER)) { skipped++; continue; }

  const title = readTitle(html);
  const desc = readDesc(html);
  const nav = navLinks.length
    ? `\n<nav><ul>${navLinks.map(u => `<li><a href="${escapeHtml(u)}">${escapeHtml(u)}</a></li>`).join('')}</ul></nav>`
    : '';
  const body = `${MARKER}
<noscript>
<h1>${escapeHtml(title)}</h1>
<p>${escapeHtml(desc)}</p>${nav}
</noscript>`;

  html = html.replace(/<\/body>/i, `${body}\n</body>`);
  fs.writeFileSync(file, html, 'utf8');
  routesDone++;
}

console.log(`prerender-body: ${articlesDone} article page(s) given real content, ${routesDone} route(s) given a noscript summary, ${skipped} skipped.`);
if (!articlesDone && !routesDone && !skipped) console.log('nothing to do — is dist/public built?');
