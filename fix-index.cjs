const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'client', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Remove maximum-scale=1
html = html.replace(/,\s*maximum-scale=1/g, '');

// Remove medal emoji
html = html.replace(/🥇 /g, '');

// Remove replit script
html = html.replace(/<!-- This is a replit script[^>]*-->\s*<script[^>]*replit-dev-banner\.js[^>]*><\/script>/g, '');
html = html.replace(/<script[^>]*replit-dev-banner\.js[^>]*><\/script>/g, '');

// The schema is huge, from line 30 to 172. We can use a regex to match from <!-- Schema.org WebApplication to the end of the last schema block.
// Or just remove all <script type="application/ld+json">...</script> and the comments before them.
html = html.replace(/<!-- Schema\.org[\s\S]*?<\/script>/g, '');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Fixed index.html');
