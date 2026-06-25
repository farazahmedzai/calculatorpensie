const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

content = content.replace(/<loc>(https:\/\/calculatorpensie\.com\/[^<]+[^/])<\/loc>/g, '<loc>$1/</loc>');

fs.writeFileSync(sitemapPath, content, 'utf8');
console.log('Updated sitemap.xml to have trailing slashes');
