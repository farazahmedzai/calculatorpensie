import fs from 'fs';

const filePath = 'client/src/data/static-articles.ts';
const content = fs.readFileSync(filePath, 'utf8');

const regex = /id:\s*'([^']+)'[\s\S]*?content:\s*`([\s\S]*?)`/g;
let match;
let allAbove1500 = true;

while ((match = regex.exec(content)) !== null) {
  const id = match[1];
  const textContent = match[2].replace(/<[^>]*>?/gm, ''); // strip HTML
  const wordCount = textContent.trim().split(/\s+/).length;
  console.log(`${id}: ${wordCount} words`);
  if (wordCount < 1500) allAbove1500 = false;
}

if (allAbove1500) {
  console.log('SUCCESS: All 20 articles are now over 1500 words!');
} else {
  console.log('WARNING: Some articles are still under 1500 words.');
}
