#!/usr/bin/env node
/**
 * ping-indexnow.js — submit every URL in the built sitemap to IndexNow.
 *
 * WHY THIS EXISTS
 *   IndexNow is the instant-indexing protocol supported by Bing, Yandex, Seznam
 *   and Naver. Bing is also the search backend for ChatGPT's browsing, so a page
 *   indexed on Bing is a page that can be cited in an AI answer. For an
 *   informational site like this one, that is a durable discovery channel.
 *
 * WHAT WAS WRONG WITH THE PREVIOUS VERSION
 *   1. It was NEVER WIRED to the build, so it had never run. Dead code.
 *   2. It hardcoded 14 URLs and omitted all 20 blog articles — the exact pages
 *      that carry the long tail.
 *   3. It logged the HTTP status but did not fail loudly on a rejection, so a
 *      silent 403 would have looked like success.
 *
 * WHAT CHANGED
 *   - The URL list now comes from the BUILT sitemap, so it stays in sync
 *     automatically and covers every page, including new articles.
 *   - Responses are checked properly: 200 and 202 are success; 422 means the
 *     key or URL set is invalid; 403 means the key file is not reachable.
 *   - It never fails the build. IndexNow being down must not block a deploy.
 *
 * CAVEAT, stated honestly: this runs at the end of the Netlify BUILD, so it fires
 * while Netlify is publishing. IndexNow may fetch a page in the seconds before the
 * new version is live. That window is small and the next crawl corrects it. The
 * fully correct placement is a Netlify "Deploy succeeded" outgoing webhook; this is
 * the pragmatic version that needs no extra infrastructure.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const HOST = 'calculatorpensie.com';
const KEY = process.env.INDEXNOW_KEY || 'c7f96a3501a24d5ea3bc55625bf9892c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Read the URL list from the built sitemap. Falling back to a hardcoded list
// would put us back where we started, so an unreadable sitemap is a loud skip.
function urlsFromSitemap() {
  const candidates = [
    path.join(__dirname, '..', 'dist', 'public', 'sitemap.xml'),
    path.join(__dirname, '..', 'public', 'sitemap.xml'),
  ];
  for (const f of candidates) {
    if (!fs.existsSync(f)) continue;
    const xml = fs.readFileSync(f, 'utf-8');
    const locs = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map(m => m[1].trim());
    if (locs.length) return { urls: [...new Set(locs)], from: f };
  }
  return { urls: [], from: null };
}

const { urls, from } = urlsFromSitemap();
if (!urls.length) {
  console.warn('indexnow: no URLs found in the built sitemap — skipping submission.');
  process.exit(0);
}
console.log(`indexnow: ${urls.length} URLs from ${path.basename(from)}`);

// IndexNow requires every submitted URL to be on the host that owns the key.
const offHost = urls.filter(u => { try { return new URL(u).hostname.replace(/^www\./, '') !== HOST; } catch { return true; } });
if (offHost.length) {
  console.warn(`indexnow: ${offHost.length} URL(s) are not on ${HOST} and will be dropped: ${offHost.slice(0, 3).join(', ')}`);
}
const urlList = urls.filter(u => !offHost.includes(u));

// Verify the key file is actually reachable BEFORE submitting. A 403 from the
// IndexNow API is almost always "key file not found", and saying so up front is
// more useful than a bare status code.
try {
  const r = await fetch(KEY_LOCATION, { signal: AbortSignal.timeout(15000) });
  const body = (await r.text()).trim();
  if (!r.ok || body !== KEY) {
    console.warn(`indexnow: key file check FAILED — ${KEY_LOCATION} returned ${r.status}` +
      (body !== KEY ? ` and its content does not match the key` : ''));
    console.warn('indexnow: submission will almost certainly be rejected; continuing anyway so the deploy is not blocked.');
  } else {
    console.log('indexnow: key file verified reachable and correct.');
  }
} catch (e) {
  console.warn(`indexnow: could not verify the key file (${String(e.message).slice(0, 60)}) — continuing.`);
}

const payload = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList });

// api.indexnow.org fans out to every participating engine. The bing.com endpoint
// is submitted as well so Bing gets it directly even if the fan-out is slow.
const ENDPOINTS = ['https://api.indexnow.org/indexnow', 'https://www.bing.com/indexnow'];

const results = await Promise.all(ENDPOINTS.map(async (endpoint) => {
  try {
    const r = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: payload,
      signal: AbortSignal.timeout(20000),
    });
    // 200 = accepted, 202 = accepted pending key validation.
    const ok = r.status === 200 || r.status === 202;
    const note = ok ? 'accepted'
      : r.status === 400 ? 'bad request (malformed payload)'
      : r.status === 403 ? 'forbidden — the key file is not reachable at keyLocation'
      : r.status === 422 ? 'unprocessable — URLs do not belong to host, or key mismatch'
      : r.status === 429 ? 'rate limited — too many submissions'
      : `unexpected status`;
    console.log(`indexnow: ${endpoint} -> ${r.status} (${note}), ${urlList.length} URLs`);
    return { endpoint, status: r.status, ok };
  } catch (e) {
    console.warn(`indexnow: ${endpoint} -> network error: ${String(e.message).slice(0, 80)}`);
    return { endpoint, status: 0, ok: false };
  }
}));

if (!results.some(r => r.ok)) {
  console.warn('indexnow: no endpoint accepted the submission. The deploy is NOT blocked, but URLs were not pushed.');
}
console.log('indexnow: done.');
