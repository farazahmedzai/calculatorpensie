#!/usr/bin/env node

import https from 'https';

const key = 'c7f96a3501a24d5ea3bc55625bf9892c';
const host = 'calculatorpensie.com';
const keyLocation = `https://${host}/${key}.txt`;

const urls = [
  `https://${host}/`,
  `https://${host}/calculator-pensie-anticipata/`,
  `https://${host}/calculator-varsta-pensionare/`,
  `https://${host}/calculator-puncte-pensie/`,
  `https://${host}/calculator-pensie-pilon-2/`,
  `https://${host}/calculator-pensie-pilon-3/`,
  `https://${host}/program-excel-calcul-pensie/`,
  `https://${host}/planificare/`,
  `https://${host}/tipuri-pensii/`,
  `https://${host}/legislatie/`,
  `https://${host}/metodologie/`,
  `https://${host}/faq/`,
  `https://${host}/despre-noi/`,
  `https://${host}/blog/`
];

const payload = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList: urls
});

const endpoints = [
  'api.indexnow.org',
  'www.bing.com'
];

console.log(`Submitting ${urls.length} URLs to IndexNow endpoints...`);

endpoints.forEach(endpoint => {
  const req = https.request({
    hostname: endpoint,
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  }, (res) => {
    console.log(`[${endpoint}] Response status: ${res.statusCode}`);
  });

  req.on('error', (e) => {
    console.warn(`[${endpoint}] Ping notification: ${e.message}`);
  });

  req.write(payload);
  req.end();
});
