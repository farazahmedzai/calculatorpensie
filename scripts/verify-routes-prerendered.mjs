#!/usr/bin/env node
// verify-routes-prerendered.mjs — the guard that makes the 404 fallback safe.
//
// The site returns a real 404 for unknown paths (netlify.toml catch-all -> 404).
// That is only correct while every real route has its own prerendered
// index.html. This fails the build if one does not, so adding a route without
// prerendering cannot silently turn it into a 404.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist', 'public');

// Routes intentionally served by a 301 instead of a page.
const REDIRECTED = new Set([
  '/calculator', '/termeni', '/termeni-si-conditii', '/politica-confidentialitate',
]);

const app = fs.readFileSync(path.join(ROOT, 'client', 'src', 'App.tsx'), 'utf8');
const routes = [...app.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map(m => m[1])
  .filter(r => r !== '/' && !r.includes(':'))     // dynamic routes handled per-article
  .filter(r => !REDIRECTED.has(r));

const missing = [];
for (const r of routes) {
  const file = path.join(DIST, r.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(file)) missing.push(r);
}
// the homepage
if (!fs.existsSync(path.join(DIST, 'index.html'))) missing.push('/');

if (missing.length) {
  console.error('FAIL: these routes have no prerendered page, but the catch-all returns 404:');
  for (const m of missing) console.error('   ' + m);
  console.error('Fix: add the route to staticRoutes in scripts/generate-meta-pages.ts,');
  console.error('     or add a 301 for it in netlify.toml and to REDIRECTED above.');
  process.exit(1);
}
console.log(`route guard OK: all ${routes.length + 1} routes have a prerendered page.`);
