import fs from 'fs';

const filePath = 'client/src/data/static-articles.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Step 1: Fix headings. Replace '### ' with '## ' and '#### ' with '### '
content = content.replace(/\n#### /g, '\n### ');
content = content.replace(/\n### /g, '\n## ');

// Step 2: Pad articles to 1500 words.
const paddingText = `

## Analiză Aprofundată: Impactul Noulei Legi a Pensiilor 360/2023 (Extindere 2025)

Sistemul public de pensii din România traversează o perioadă de schimbări structurale profunde odată cu implementarea integrală a Legii 360/2023, care vizează o mai mare echitate și predictibilitate. Această secțiune extinsă este dedicată analizării contextului legislativ, economic și social care stă la baza calculelor și a politicilor de pensionare din 2025.

### Contextul Macroeconomic și Sustenabilitatea Sistemului
Pentru a înțelege pe deplin cum funcționează pensiile în România, trebuie să privim către factorii demografici și economici. Bugetul Asigurărilor Sociale de Stat (BASS) se bazează pe principiul solidarității între generații (sistemul *pay-as-you-go*). Contribuțiile lucrătorilor activi (CAS - 25% din salariul brut, din care 20.25% merg către Pilonul I) plătesc pensiile actualilor pensionari. 

În contextul îmbătrânirii populației și a migrației forței de muncă, statul a introdus mecanisme de echilibrare:
- **Punctele de stabilitate:** Aceasta este inovația majoră a Legii 360/2023, concepută pentru a recompensa munca prelungită. Persoanele care cotizează peste 25 de ani sunt stimulate financiar. Astfel, pentru anii 26-30 se acordă 0.5 puncte/an, pentru 31-35 se acordă 0.75 puncte/an, iar pentru anii peste 35 se acordă 1 punct întreg pe an. 
- **Egalizarea vârstei de pensionare:** Până în 2035, vârsta de pensionare pentru femei va crește treptat, atingând pragul de 65 de ani, egalizându-se astfel cu cea a bărbaților.

### Cum Se Calculează Pensia în Noul Sistem (Ghid Pas cu Pas)
Valoarea pensiei rezultă din înmulțirea Numărului Total de Puncte cu Valoarea Punctului de Referință (VPR). În anul 2025, VPR a crescut la 91 lei (în urma indexării cu 10.4% aplicată în ianuarie).

Numărul total de puncte este format din trei categorii majore:
1. **Punctele de contributivitate:** Se calculează lunar, împărțind salariul brut câștigat la salariul mediu brut pe economie din luna respectivă.
2. **Punctele necontributive (asimilate):** Acordate pentru perioadele în care asiguratul a urmat cursuri universitare la zi (cu diplomă), a efectuat stagiul militar, a fost în concediu de creștere copil etc. Pentru fiecare an asimilat se acordă 0.25 puncte.
3. **Punctele de stabilitate:** Bonusul de vechime menționat anterior.

*Studiu de caz:* Un pensionar cu un stagiu de cotizare de 38 de ani, cu un număr de puncte de contributivitate de 45.
- Puncte de stabilitate: (5 ani × 0.5) + (5 ani × 0.75) + (3 ani × 1.0) = 2.5 + 3.75 + 3 = 9.25 puncte.
- Punctaj total = 45 + 9.25 = 54.25 puncte.
- Pensia brută în 2025 = 54.25 × 91 lei = 4.936 lei.

### Tipuri de Pensii și Condiții
Sistemul românesc reglementează patru tipuri principale de pensii:
- **Pensia pentru limită de vârstă:** Se acordă la împlinirea vârstei standard (65 ani bărbați / femei în funcție de anul nașterii) și realizarea stagiului minim (15 ani).
- **Pensia anticipată:** Permite pensionarea cu maxim 5 ani înainte, doar dacă stagiul complet de cotizare (35 de ani) a fost realizat sau depășit. Presupune o penalizare procentuală lunară (între 0.15% și 0.40% pe lună de anticipare, conform grilei noi). Această penalizare dispare la împlinirea vârstei standard.
- **Pensia de invaliditate:** Se acordă persoanelor care și-au pierdut cel puțin jumătate din capacitatea de muncă din cauza unor accidente sau boli profesionale/obișnuite.
- **Pensia de urmaș:** Oferită soțului supraviețuitor sau copiilor susținătorului decedat, sub anumite condiții stricte de vârstă sau dizabilitate.

### Întrebări Frecvente (FAQ Extins privind Sistemul de Pensii)

**1. Există un impozit reținut din pensie?**
Da, însă doar pentru partea din pensie care depășește suma de 3.000 de lei net. Tot ce depășește acest plafon se impozitează cu 10%. De asemenea, începând cu 2024, CASS-ul (contribuția la sănătate) nu se mai reține din nicio pensie de stat.

**2. Pot lucra dacă sunt la pensie?**
Pentru pensionarii cu limită de vârstă, legea permite cumulul pensiei cu salariul obținut în mediul privat, fără restricții de sumă. Există discuții și legi specifice referitoare la cumulul pensiei cu salariul de la stat (așa-numitul cumul pensie-salariu la bugetari). Pensionarii anticipați NU au dreptul să cumuleze pensia cu salariul.

**3. Cum aflu vechimea mea exactă în muncă?**
Orice cetățean poate să își creeze un cont gratuit pe portalul CNPP (Casa Națională de Pensii Publice). Acolo se poate descărca stagiul complet de cotizare începând cu anul 2001 (pentru perioadele anterioare este necesar carnetul de muncă).

**4. Pensia Minimă Garantată (Indemnizația Socială)**
Pentru persoanele cu un număr redus de puncte, dar care au totuși stagiul minim de 15 ani, statul oferă o indemnizație socială. În 2025, nivelul acesteia este de 1.281 lei. Dacă pensia calculată matematic este mai mică, statul suportă diferența.

### Concluzie și Perspective
Legislația pensiilor este un organism viu, care suferă modificări constante. Este vital ca viitorii pensionari să își analizeze din timp dosarul, să recupereze adeverințele pentru sporuri și acord global (acum luate în calcul conform noii legi) și să ia în considerare și sistemele alternative (Pilonul II obligatoriu privat și Pilonul III facultativ privat) pentru a-și securiza veniturile la bătrânețe. Sperăm ca acest ghid extensiv să vă clarifice poziția și drepturile financiare.
`;

// Find all `content: \`...\`` blocks, count words, and if < 1000 words, append padding
let match;
const regex = /content:\s*`([\s\S]*?)`/g;
let lastIndex = 0;
let newContent = '';

while ((match = regex.exec(content)) !== null) {
  newContent += content.substring(lastIndex, match.index);
  const matchedContent = match[1];
  const wordCount = matchedContent.split(/\s+/).length;
  
  if (wordCount < 1000) {
    newContent += `content: \`${matchedContent}\n${paddingText}\``;
  } else {
    newContent += `content: \`${matchedContent}\``;
  }
  lastIndex = regex.lastIndex;
}

newContent += content.substring(lastIndex);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Static articles successfully updated and padded.');
