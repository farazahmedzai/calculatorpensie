import fs from 'fs';

const filePath = 'client/src/data/static-articles.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The new paragraph to append to the end of every blog post with strong internal links
const interlinksHtml = `

<div class="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
  <h3 class="text-xl font-bold text-blue-900 mb-4">Instrumente și Resurse Utile</h3>
  <p class="text-gray-700 mb-4">Pentru a vă planifica mai bine viitorul financiar, vă recomandăm să utilizați instrumentele noastre gratuite, actualizate la zi conform Legii 360/2023:</p>
  <ul class="space-y-2 list-none pl-0">
    <li class="flex items-center"><span class="mr-2">👉</span> <a href="/" class="text-blue-700 font-bold hover:underline">Calculator Pensie de Stat 2025</a> - Estimează-ți instant pensia lunară.</li>
    <li class="flex items-center"><span class="mr-2">👉</span> <a href="/calculator-varsta-pensionare" class="text-blue-700 font-bold hover:underline">Calculator Vârstă de Pensionare</a> - Află exact anul și luna în care poți ieși la pensie.</li>
    <li class="flex items-center"><span class="mr-2">👉</span> <a href="/calculator-pensie-anticipata" class="text-blue-700 font-bold hover:underline">Calculator Pensie Anticipată</a> - Calculează penalizarea aplicată dacă ieși la pensie mai devreme.</li>
    <li class="flex items-center"><span class="mr-2">👉</span> <a href="/calculator-puncte-pensie" class="text-blue-700 font-bold hover:underline">Calculator Puncte de Stabilitate</a> - Vezi câte puncte bonus primești pentru vechimea în muncă.</li>
    <li class="flex items-center"><span class="mr-2">👉</span> <a href="/legislatie" class="text-blue-700 font-bold hover:underline">Ghidul Legislației (Legea 360/2023)</a> - Descoperă toate noutățile noului sistem public de pensii.</li>
  </ul>
</div>
`;

let match;
const regex = /content:\s*`([\s\S]*?)`/g;
let lastIndex = 0;
let newContent = '';

while ((match = regex.exec(content)) !== null) {
  newContent += content.substring(lastIndex, match.index);
  const matchedContent = match[1];
  
  if (!matchedContent.includes('Instrumente și Resurse Utile')) {
    newContent += `content: \`${matchedContent}\n${interlinksHtml}\``;
  } else {
    newContent += `content: \`${matchedContent}\``;
  }
  
  lastIndex = regex.lastIndex;
}

newContent += content.substring(lastIndex);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Internal links successfully appended to all articles.');
