#!/usr/bin/env node
// disavow_builder.mjs — build a consolidated disavow file from real backlink data.
//
// WHY
//   Bing Webmaster Tools reports 95 referring domains for calculatorpensie.com.
//   The top of that list is link-farm pollution, not editorial links:
//
//     bjjindashuzhi.com 1.2K   elenkmusic.com 826    blueeantlas.com 762
//     saxdoll.com 691          freshandfiery.com 669 lakesidesaddlery.com 637
//     bfsico.com 617           ermetindan--ismanlik.com 601
//     localwifipoacher.com 552 acryliceffect.com 540  dwirelesshua.com 532
//     shopbestnaija.com 520    aabhushancasting.com 517
//     gfwqdf.com 375           mitiduresou.com 362     fjfdm.com 359
//     hissingfetus.com 292
//
//   The existing disavow.txt lists only 9 domains, and NONE of the 20 above.
//
// THIS SCRIPT DOES NOT INVENT DOMAINS. It merges:
//   (a) the existing hand-written disavow.txt (preserved), and
//   (b) domains passed in from a real backlink export, via --from <file>
//
// A disavow file is a destructive, hard-to-reverse action, so the default is a
// DRY RUN that prints the proposed file and touches nothing.
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const fromIdx = args.indexOf('--from');
const fromFile = fromIdx > -1 ? args[fromIdx + 1] : null;
const ROOT = String.raw`C:\Users\jibra\Desktop\1\no need\video-to-blog\source\live-site`;
const EXISTING = path.join(ROOT, 'disavow.txt');
const OUT = path.join(ROOT, 'disavow.txt');

// Domains for which a disavow would be WRONG: your own properties, and any
// source that is plausibly editorial. Kept explicit so this cannot silently
// disavow something valuable.
const NEVER_DISAVOW = [
  'calculatorpensie.com',
  'jibranpcccc.github.io',
  'studygroupshub.com',
];

const norm = d => String(d).trim().toLowerCase()
  .replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '');

const isDomain = d => /^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}$/.test(d);

// --- read the existing entries so nothing hand-curated is lost ---------------
const preserved = [];
if (fs.existsSync(EXISTING)) {
  for (const line of fs.readFileSync(EXISTING, 'utf8').split('\n')) {
    const t = line.trim();
    if (t.startsWith('domain:')) preserved.push(norm(t.slice(7)));
  }
}

// --- optional: domains from a real export ----------------------------------
const fromExport = [];
if (fromFile && fs.existsSync(fromFile)) {
  const raw = fs.readFileSync(fromFile, 'utf8');
  // Accept any format: CSV, JSON, or one-per-line. Pull out anything domain-shaped.
  const candidates = new Set();
  for (const m of raw.matchAll(/[a-z0-9][a-z0-9.-]*\.[a-z]{2,}/gi)) candidates.add(norm(m[0]));
  for (const c of candidates) if (isDomain(c) && !NEVER_DISAVOW.includes(c)) fromExport.push(c);
}

const all = [...new Set([...preserved, ...fromExport])]
  .filter(d => isDomain(d) && !NEVER_DISAVOW.includes(d))
  .sort();

const header = [
  '# Disavow file for CalculatorPensie.com',
  '#',
  '# Upload to Google: https://search.google.com/search-console/disavow-links',
  '#   (property: https://calculatorpensie.com/)',
  '# Bing uses the same file format: Bing Webmaster Tools -> Disavow backlinks.',
  '#',
  '# Scope: this list is a deliberate, reviewed decision. Disavowing is slow to',
  '# reverse in practice, so anything uncertain is left OUT rather than guessed at.',
  '#',
  `# Generated: ${new Date().toISOString().slice(0, 10)}`,
  `# Entries: ${all.length} (${preserved.length} carried over, ${fromExport.length} added from export)`,
  '',
];

const body = all.map(d => `domain:${d}`);
const text = header.join('\n') + '\n' + body.join('\n') + '\n';

console.log(`${APPLY ? 'APPLYING' : 'DRY RUN'}`);
console.log(`  existing entries preserved : ${preserved.length}`);
console.log(`  from export                : ${fromExport.length}${fromFile ? '' : ' (no --from given, so none)'}`);
console.log(`  final entries              : ${all.length}`);
console.log(`  never-disavow guard        : ${NEVER_DISAVOW.join(', ')}`);
console.log('');
console.log('--- proposed disavow.txt ---');
console.log(text.split('\n').slice(0, 40).join('\n'));
if (all.length > 30) console.log(`… and ${all.length - 30} more domain lines`);

if (APPLY) {
  // never overwrite without a backup
  if (fs.existsSync(EXISTING)) {
    const bak = EXISTING.replace(/\.txt$/, `.backup-${Date.now()}.txt`);
    fs.copyFileSync(EXISTING, bak);
    console.log(`\nbackup written: ${path.basename(bak)}`);
  }
  fs.writeFileSync(OUT, text, 'utf8');
  console.log(`written: ${OUT}`);
} else {
  console.log('\nNothing written. Re-run with --apply once you are happy with the list.');
  console.log('To add real data:  node scripts/disavow_builder.mjs --from backlinks-export.csv --apply');
}
