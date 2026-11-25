// Static articles data for Netlify SSR build

export interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  modifiedDate?: string;
  readTime: number;
  slug: string;
  published: boolean;
  content?: string;
  image?: string;
  author: Author;
}

export const authors = {
  alexandruPopescu: {
    name: "Redacția CalculatorPensie.com (Analiză Legislativă)",
    role: "Departamentul de Asigurări Sociale & Legislație CNPP",
    bio: "Echipa redacțională CalculatorPensie.com analizează aplicarea practică a Legii nr. 360/2023, a Legii nr. 141/2025 și a normelor Casei Naționale de Pensii Publice (CNPP), actualizând permanent parametrii de calcul pentru cititorii din România.",
    image: "https://calculatorpensie.com/logo.png",
  },
  elenaRadu: {
    name: "Departamentul Financiar & Pensii Private",
    role: "Analiză Economică, Fiscalitate & Pilonul II / III",
    bio: "Specialiștii noștri în finanțe personale și fiscalitate monitorizează cotele Pilonului II, facilitățile fiscale ale Pilonului III, impozitarea pensiilor și impactul inflației asupra veniturilor seniorilor.",
    image: "https://calculatorpensie.com/logo.png",
  },
};

export const staticArticles: Article[] = [
  {
    id: 1,
    title: "Top 5 Greșeli de Evitat în Planificarea Pensiei",
    excerpt:
      "Descoperă cele mai frecvente cinci greșeli pe care salariații și PFA-urile din România le fac înainte de pensionare și cum le poți corecta din timp.",
    category: "planificare",
    publishDate: "2026-03-15",
    modifiedDate: "2026-11-25",
    readTime: 8,
    slug: "top-5-greseli-planificare-pensie",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Planificarea retragerii din activitate este una dintre cele mai importante decizii financiare pe termen lung. O singură eroare administrativă sau amânarea deciziilor cu 5–10 ani poate reduce considerabil venitul lunar la bătrânețe. Mai jos analizăm cinci greșeli reale observate frecvent în România și soluțiile practice pentru fiecare. Poți testa scenariul tău imediat în <a href="/" class="text-blue-600 hover:underline font-semibold">calculatorul nostru de pensie 2026</a>.</p>

<h3>1. Neverificarea stagiului de cotizare și a declarației 112 înainte de depunerea dosarului</h3>
<p>Mulți asigurați presupun că toate lunile lucrate apar automat în evidența CNPP. În practică, firme radiată înainte de 2011, erori în REVISAL sau neplata CAS de către angajatori pot lăsa goluri în extrasul de vechime. Verificarea anuală a contului CNPP îți permite să soliciți adeverințe rectificative cât timp angajatorii sau arhivele sunt ușor de accesat.</p>

<h3>2. Ignorarea pragului de 25 de ani și a punctelor de stabilitate</h3>
<p>Sub Legea nr. 360/2023, anii contributivi lucrați peste pragul de 25 de ani generează puncte de stabilitate (+0,50 pct/an între 26–30 ani, +0,75 pct/an între 31–35 ani și +1,00 pct/an peste 35 de ani). Retragerea la 24 ani și 10 luni în locul împlinirii pragurilor superioare sau omiterea depunerii unor adeverințe vechi poate costa sute de lei lunar la pensie.</p>

<h3>3. Dependența exclusivă de Pilonul I (Pensia de Stat)</h3>
<p>Sistemul public funcționează pe solidaritate între generații (PAYG), iar presiunile demografice și înghețarea temporară a VPR la 81 lei arată de ce rata de înlocuire a salariului prin Pilonul I este limitată. Combinarea Pilonului I cu Pilonul II (4,75% redirecționat din brut) și economisirea facultativă (Pilonul III sau investiții diversificate) protejează nivelul de trai.</p>

<h3>4. Ratarea deductibilității fiscale de 400 EUR/an la Pilonul III</h3>
<p>Contribuțiile la pensia facultativă Pilon III sunt deductibile fiscal în limita a 400 EUR anual (aproximativ 166 lei/lună), separat atât pentru salariat, cât și pentru angajator. Nefolosirea acestui plafon înseamnă renunțarea la o economie directă de impozit pe venit.</p>

<h3>5. Subestimarea fiscalității pensiilor peste 3.000 Lei</h3>
<p>Începând cu august 2025 și pe parcursul anului 2026 (Legea nr. 141/2025), pensiile care depășesc plafonul de 3.000 lei suportă CASS de 10% pentru partea excedentară, pe lângă impozitul pe venit de 10% aplicat peste pragul neimpozabil. Când îți proiectezi bugetul de pensionar, calculează întotdeauna <strong>pensia netă</strong>, nu doar suma brută.</p>

<h3>Checklist rapid de verificare anuală</h3>
<ul>
  <li>Descarcă extrasul de stagiu din <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">portalul oficial CNPP</a> cel puțin o dată pe an.</li>
  <li>Păstrează în siguranță carnetul de muncă original și adeverințele de sporuri pentru perioadele anterioare anului 2001.</li>
  <li>Simulează impactul ieșirii anticipate cu <a href="/calculator-pensie-anticipata/" class="text-blue-600 hover:underline font-semibold">calculatorul de pensie anticipată</a> înainte de a depune cererea.</li>
</ul>
`,
  },
  {
    id: 2,
    title: "Ghid Complet: Cum să Calculezi Pensia de Stat în 2026",
    excerpt:
      "Formula oficială CNPP din Legea nr. 360/2023 cu VPR 81 lei, punctele de stabilitate, salariul mediu brut bugetar 9.192 lei și impozitarea netă în 2026.",
    category: "legislatie",
    publishDate: "2026-04-10",
    modifiedDate: "2026-11-25",
    readTime: 10,
    slug: "ghid-calcul-pensie-stat-2026",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Calculul pensiei de stat în România urmează formula unitară introdusă prin <strong>Legea nr. 360/2023</strong>. În anul 2026, <strong>Valoarea Punctului de Referință (VPR) este de 81 lei</strong> (menținută la nivelul din 2024–2025 prin OUG nr. 156/2024 și Legea nr. 141/2025), iar câștigul salarial mediu brut de fundamentare din bugetul asigurărilor sociale este de <strong>9.192 lei</strong>. Poți calcula estimarea ta gratuit în <a href="/" class="text-blue-600 hover:underline font-semibold">calculatorul principal de pensie</a>.</p>

<h3>Formula Oficială CNPP în 2026</h3>
<div class="bg-slate-50 p-4 rounded-lg my-6 border border-slate-200">
  <p class="font-bold text-slate-900">Pensia Brută = Număr Total de Puncte × VPR (81 Lei)</p>
  <p class="text-sm text-slate-700 mt-1">Unde <strong>Număr Total de Puncte</strong> = Puncte Contributivitate + Puncte Stabilitate + Puncte Asimilate.</p>
</div>

<h3>1. Punctele de Contributivitate</h3>
<p>Pentru fiecare lună lucrată, salariul tău brut se împarte la salariul mediu brut oficial din luna respectivă (9.192 lei reper bugetar 2026). Dacă câștigi exact media pe economie, acumulezi 1,00 punct/lună (și 1,00 punct anual după împărțirea celor 12 luni la 12).</p>

<h3>2. Punctele de Stabilitate (Legea 360/2023)</h3>
<p>Se acordă exclusiv pentru anii contributivi ce depășesc 25 de ani de muncă:</p>
<ul>
  <li><strong>+0,50 puncte/an</strong> pentru anii 26–30;</li>
  <li><strong>+0,75 puncte/an</strong> pentru anii 31–35;</li>
  <li><strong>+1,00 punct/an</strong> pentru fiecare an peste 35 de ani.</li>
</ul>

<h3>3. Punctele pentru Perioade Asimilate</h3>
<p>Facultatea absolvită la zi cu diplomă, stagiul militar obligatoriu și concediul pentru creșterea copilului (în condițiile legii) aduc câte <strong>0,25 puncte pe an</strong>.</p>

<h3>Exemple Concrete Calculate la VPR = 81 Lei</h3>
<table>
  <thead>
    <tr>
      <th>Scenariu</th>
      <th>Puncte Contributive</th>
      <th>Puncte Stabilitate</th>
      <th>Total Puncte</th>
      <th>Pensie Brută (× 81 Lei)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>15 ani stagiu minim (punctaj 1,00/an)</td>
      <td>15,00</td>
      <td>0,00</td>
      <td>15,00</td>
      <td><strong>1.281 Lei</strong> (completat la pensia minimă de la 1.215 Lei)</td>
    </tr>
    <tr>
      <td>35 ani stagiu complet (punctaj 1,00/an)</td>
      <td>35,00</td>
      <td>6,25</td>
      <td>41,25</td>
      <td><strong>3.341 Lei</strong></td>
    </tr>
    <tr>
      <td>40 ani stagiu (punctaj 1,00/an)</td>
      <td>40,00</td>
      <td>11,25</td>
      <td>51,25</td>
      <td><strong>4.151 Lei</strong></td>
    </tr>
  </tbody>
</table>

<h3>Impozitarea și CASS pentru Pensii în 2026</h3>
<p>Pensiile de până la <strong>3.000 lei</strong> nu datorează nici impozit pe venit, nici contribuție la sănătate (CASS). Pentru pensiile ce depășesc 3.000 lei, conform Legii nr. 141/2025 se reține <strong>10% CASS</strong> exclusiv pentru partea de peste 3.000 lei și <strong>10% impozit pe venit</strong> pe diferența rămasă peste pragul neimpozabil de 3.000 lei. Textele legislative oficiale pot fi consultate pe <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP.ro</a> și <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`,
  },
  {
    id: 3,
    title: "Pilonul III: Avantaje Fiscale și Strategii de Investiție",
    excerpt:
      "Cum funcționează pensia privată facultativă Pilon III în 2026: plafonul deductibil de 400 EUR/an, condițiile de retragere la 60 de ani și simulări.",
    category: "tipuri-pensii",
    publishDate: "2026-02-28",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "pilonul-3-avantaje-fiscale-strategii",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pilonul III de pensii facultative este cel mai simplu instrument reglementat din România prin care poți construi un venit suplimentar pentru vârsta pensionării beneficiind simultan de deduceri fiscale din impozitul pe venit. Poți simula evoluția fondului tău direct în <a href="/calculator-pensie-pilon-3/" class="text-blue-600 hover:underline font-semibold">calculatorul Pilon III</a>.</p>

<h3>Diferența dintre Pilonul II și Pilonul III</h3>
<p>În timp ce Pilonul II (4,75% din salariul brut) este obligatoriu pentru angajații sub 35 de ani la momentul aderării și redirecționează taxe deja plătite la CAS, <strong>Pilonul III este voluntar</strong>: alegi suma lunară (în limita legală de 15% din venitul brut) și poți modifica, suspenda sau relua contribuțiile oricând.</p>

<h3>Avantajul Fiscal de 400 EUR / An (Dublu cu Angajatorul)</h3>
<ul>
  <li><strong>Deductibilitate personală:</strong> Contribuțiile proprii de până la 400 EUR/an (~166 lei/lună) se scad din baza de calcul a impozitului pe venit (10%), generând o economie fiscală de ~200 lei anual dacă angajatorul aplică deducerea prin statul de plată.</li>
  <li><strong>Contribuție prin angajator:</strong> Separata de plafonul tău, angajatorul poate vira încă 400 EUR/an fără taxe salariale obișnuite.</li>
</ul>

<h3>Exemplu Comparativ de Acumulare (Până la 60 de Ani)</h3>
<table>
  <thead>
    <tr>
      <th>Contribuție Lunară</th>
      <th>Durată</th>
      <th>Total Depus</th>
      <th>Sold Estimat (randament 5%/an)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>166 Lei/lună (plafon deductibil)</td>
      <td>20 ani</td>
      <td>39.840 Lei</td>
      <td><strong>~68.200 Lei</strong></td>
    </tr>
    <tr>
      <td>166 Lei/lună</td>
      <td>30 ani</td>
      <td>59.760 Lei</td>
      <td><strong>~138.150 Lei</strong></td>
    </tr>
    <tr>
      <td>332 Lei/lună (angajat + angajator)</td>
      <td>25 ani</td>
      <td>99.600 Lei</td>
      <td><strong>~197.700 Lei</strong></td>
    </tr>
  </tbody>
</table>

<h3>Condiții de Retragere și Moștenire</h3>
<p>Fondurile acumulate în Pilonul III pot fi solicitate la împlinirea vârstei de <strong>60 de ani</strong> dacă ai efectuat cel puțin <strong>90 de contribuții lunare</strong>, fiind eligibile pentru plată unică sau eșalonată. În caz de invaliditate permanentă sau deces înainte de retragere, activul personal revine moștenitorilor legali.</p>
`,
  },
  {
    id: 4,
    title: "Pensia Anticipată 2026: Condiții, Penalizări și Excepții",
    excerpt:
      "Cine se poate pensiona cu până la 5 ani mai devreme sub Legea 360/2023, ce grilă de penalizări (0,15%–0,40%) se aplică și când dispare reducerea.",
    category: "legislatie",
    publishDate: "2026-10-15",
    modifiedDate: "2026-11-25",
    readTime: 8,
    slug: "pensie-anticipata-conditii-penalizari",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Sub Legea nr. 360/2023, fosta pensie anticipată și pensia anticipată parțială au fost unificate într-un singur tip de <strong>pensie anticipată</strong>, cu reduceri semnificativ mai blânde decât în legislația anterioară. Calculează imediat impactul financiar folosind <a href="/calculator-pensie-anticipata/" class="text-blue-600 hover:underline font-semibold">calculatorul de pensie anticipată</a>.</p>

<h3>Condiții Obligatorii de Eligibilitate în 2026</h3>
<ul>
  <li><strong>Maximum 5 ani</strong> înaintea împlinirii vârstei standard de pensionare prevăzute de Anexa 5.</li>
  <li><strong>Realizarea integrală a stagiului complet de cotizare contributiv</strong> (35 de ani pentru bărbați; pentru femei în creștere graduală conform Anexei 5).</li>
  <li><strong>Perioadele asimilate NU se iau în calcul:</strong> studiile universitare, armata și perioadele necontributive nu ajută la îndeplinirea stagiului necesar pentru anticipată.</li>
</ul>

<h3>Grila de Penalizări pe Lună de Anticipare (Art. 58 Legea 360/2023)</h3>
<table>
  <thead>
    <tr>
      <th>Ani realizați peste stagiul complet</th>
      <th>Diminuare / lună</th>
      <th>Diminuare pentru 3 ani (36 luni)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Până la 1 an</td><td>0,40%</td><td>14,4%</td></tr>
    <tr><td>1 – 2 ani</td><td>0,35%</td><td>12,6%</td></tr>
    <tr><td>2 – 3 ani</td><td>0,30%</td><td>10,8%</td></tr>
    <tr><td>3 – 4 ani</td><td>0,25%</td><td>9,0%</td></tr>
    <tr><td>4 – 5 ani</td><td>0,20%</td><td>7,2%</td></tr>
    <tr><td>5 – 8 ani (peste 5 ani)</td><td>0,15%</td><td>5,4%</td></tr>
  </tbody>
</table>

<h3>Când încetează penalizarea și ce interdicții există?</h3>
<p>Pe durata pensiei anticipate este interzis cumulul cu venituri dintr-un contract individual de muncă. Vestea bună este că <strong>la împlinirea vârstei standard de pensionare</strong>, pensia anticipată se transformă automat în pensie pentru limită de vârstă și <strong>penalizarea se elimină definitiv</strong>.</p>
`,
  },
  {
    id: 5,
    title: "Condiții Speciale și Deosebite de Muncă: Impact asupra Pensiei",
    excerpt:
      "Cum reduc grupele de muncă (condiții speciale și deosebite) vârsta standard de pensionare și ce sporuri de punctaj se acordă sub Legea 360/2023.",
    category: "legislatie",
    publishDate: "2026-09-20",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "conditii-speciale-munca-impact-pensie",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Asigurații care au lucrat în medii industriale cu risc ridicat, substanțe toxice, temperaturi extreme, radiații, minerit sau transport feroviar/aeronautic beneficiază de încadrări în <strong>condiții deosebite</strong> și <strong>condiții speciale de muncă</strong>, cu efect direct asupra reducerii vârstei standard de pensionare și creșterii punctajului.</p>

<h3>1. Condiții Deosebite vs. Condiții Speciale</h3>
<ul>
  <li><strong>Condiții deosebite de muncă (fosta Grupă II):</strong> acordă un stagiu suplimentar de <strong>4 luni</strong> pentru fiecare an lucrat integral și reducerea proporțională a vârstei standard (de regulă cu 4 luni pe an lucrat, în funcție de tranșa din lege) plus majorarea punctajelor aferente perioadei cu <strong>25%</strong> (respectiv prevederile specifice perioadelor de după aprilie 2001 / Legea 360).</li>
  <li><strong>Condiții speciale de muncă (fosta Grupă I):</strong> vizează mineritul subteran, siderurgia grea, aviația civilă, unitățile nucleare, acordând <strong>6 luni</strong> spor la stagiu per an lucrat, reducere mai accentuată a vârstei standard și punctaj suplimentar de până la <strong>50%</strong>.</li>
</ul>

<h3>Documente Doveditoare pentru Dosarul CNPP</h3>
<table>
  <thead>
    <tr>
      <th>Perioadă Lucrată</th>
      <th>Document Necesar la Dosar</th>
      <th>Observație</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Anterior 1 aprilie 2001</td>
      <td>Carnet de muncă + Adeverință tip grupă I/II cu temei legal</td>
      <td>Obligatorie menționarea ordinului/actului normativ de încadrare</td>
    </tr>
    <tr>
      <td>După 1 aprilie 2001</td>
      <td>Declarații nominale lunare (D112) raportate de angajator</td>
      <td>Se verifică în extrasul din contul CNPP (coloana D / S)</td>
    </tr>
  </tbody>
</table>

<p>Înainte de a planifica ieșirea la pensie, verifică încadrarea grupei de muncă în contul <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP.ro</a> și consultă <a href="/calculator-varsta-pensionare/" class="text-blue-600 hover:underline font-semibold">calculatorul vârstei de pensionare</a>.</p>
`,
  },
  {
    id: 6,
    title: "Stagiul de Cotizare: Cum să Îți Cumperi Vechime în Muncă (2026)",
    excerpt:
      "Ghid practic conform Art. 6 Legea 360/2023: limita de 6 ani retroactiv, costul de 25% din salariul minim brut (1.012,50 Lei/lună la 4.050 Lei) și pașii la CNPP.",
    category: "planificare",
    publishDate: "2026-08-10",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "stagiul-cotizare-cumparare-ani-munca",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Dacă îți lipsesc luni sau ani de vechime pentru a îndeplini <strong>stagiul minim contributiv de 15 ani</strong> ori pentru a completa stagiul pentru limită de vârstă, <strong>Legea nr. 360/2023 (Art. 6)</strong> îți permite să închei un contract de asigurare socială retroactivă cu Casa Teritorială de Pensii.</p>

<h3>Reguli Principale pentru Cumpărarea Vechimii în 2026</h3>
<ul>
  <li><strong>Limită maximă de 6 ani:</strong> Poți acoperi perioade de maximum <strong>6 ani calendaristici</strong> (72 de luni) anterioare lunii semnării contractului, în care nu ai fost asigurat în sistemul public.</li>
  <li><strong>Eligibilitate:</strong> Să nu ai calitatea de pensionar la data semnării contractului și să fi împlinit cel puțin 18 ani în perioadele vizate.</li>
  <li><strong>Valabilitate:</strong> Vechimea cumpărată se ia în calcul exclusiv pentru pensia pentru <strong>limită de vârstă</strong> (nu pentru pensia anticipată!).</li>
</ul>

<h3>Costul Cumpărării Vechimii în 2026</h3>
<p>Cota de contribuție socială (CAS) este de <strong>25%</strong> aplicată cel puțin asupra salariului de bază minim brut pe țară garantat în plată la data încheierii contractului.</p>
<table>
  <thead>
    <tr>
      <th>Bază de Calcul Minimă</th>
      <th>Cotă CAS</th>
      <th>Cost Lunar</th>
      <th>Cost pentru 1 An (12 luni)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Salariu minim brut 4.050 Lei</td>
      <td>25%</td>
      <td><strong>1.012,50 Lei/lună</strong></td>
      <td><strong>12.150 Lei/an</strong></td>
    </tr>
  </tbody>
</table>

<h3>Cum Procedezi Concret la Casa de Pensii?</h3>
<ol>
  <li>Programează-te la Casa Teritorială de Pensii de domiciliu (sau printr-un mandatar cu procură specială din diaspora).</li>
  <li>Prezintă actul de identitate și extrasul/verificarea perioadelor necotizate.</li>
  <li>Semnează contractul de asigurare socială și alege plata integrală sau în tranșe lunare pe durata contractului (max. 1 an de la încheiere).</li>
</ol>
<p>Poți verifica ce punctaj îți lipsește înainte de achiziție folosind <a href="/calculator-puncte-pensie/" class="text-blue-600 hover:underline font-semibold">calculatorul de puncte de pensie</a>.</p>
`,
  },
  {
    id: 7,
    title: "Pensia de Urmaș 2026: Drepturi, Procente și Documente",
    excerpt:
      "Cine are dreptul la pensie de urmaș în România, ce cote (50%, 75%, 100%) se acordă copiilor și soțului supraviețuitor și cum se depune dosarul.",
    category: "tipuri-pensii",
    publishDate: "2026-01-15",
    modifiedDate: "2026-11-25",
    readTime: 8,
    slug: "pensia-urmas-drepturi-proceduri",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pensia de urmaș oferă protecție financiară membrilor familiei (copiilor și soțului supraviețuitor) după decesul unui pensionar sau al unui asigurat care îndeplinea condițiile de pensionare în sistemul public din România.</p>

<h3>Cine Are Dreptul la Pensia de Urmaș?</h3>
<ul>
  <li><strong>Copiii:</strong> până la vârsta de <strong>16 ani</strong>, ori până la finalizarea studiilor liceale/universitare fără a depăși <strong>26 de ani</strong>, precum și pe toată durata invalidității de orice grad survenite în intervalul eligibil.</li>
  <li><strong>Soțul supraviețuitor:</strong> la împlinirea vârstei standard de pensionare, dacă durata căsătoriei a fost de cel puțin <strong>15 ani</strong> (pro-rata dacă între 10 și 15 ani: scădere cu 0,5% pentru fiecare lună lipsă), sau temporar 6 luni în lipsa veniturilor peste pragul legal.</li>
</ul>

<h3>Cotele Legale de Stabilire din Pensia Susținătorului</h3>
<table>
  <thead>
    <tr>
      <th>Număr Urmași Îndreptățiți</th>
      <th>Procent Acordat</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1 urmaș</td><td><strong>50%</strong> din pensia decedatului</td></tr>
    <tr><td>2 urmași</td><td><strong>75%</strong> (împărțit egal)</td></tr>
    <tr><td>3 sau mai mulți urmași</td><td><strong>100%</strong> (împărțit egal)</td></tr>
  </tbody>
</table>

<p>Dacă suma rezultată pe dosar se situează sub nivelul indemnizației sociale, pensia de urmaș poate beneficia de completarea până la plafonul minim garantat de 1.281 lei (împărțit pe beneficiari). Consultă <a href="/tipuri-pensii/" class="text-blue-600 hover:underline font-semibold">ghidul tipurilor de pensii</a> pentru detalii conexe.</p>
`,
  },
  {
    id: 8,
    title: "Reforma Sistemului de Pensii în 2026: Bilanț și Noutăți",
    excerpt:
      "Analiză practică asupra aplicării Legii nr. 360/2023 și Legii nr. 141/2025 în 2026: menținerea VPR la 81 lei, punctele de stabilitate și impozitarea CASS.",
    category: "legislatie",
    publishDate: "2026-07-20",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "reforma-sistem-pensii-2026",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Reforma sistemului public de pensii demarată prin <strong>Legea nr. 360/2023</strong> a schimbat fundamental modul în care fiecare an de muncă este valorificat la pensionare, punând accent pe principiul contributivității și pe bonificarea vechimii îndelungate prin punctele de stabilitate.</p>

<h3>Cum Arată Sistemul de Pensii în 2026</h3>
<ul>
  <li><strong>Menținerea VPR la 81 Lei:</strong> Deși formula inițială a legii prevedea o indexare anuală în ianuarie, prin OUG nr. 156/2024 și <strong>Legea nr. 141/2025</strong>, Valoarea Punctului de Referință a fost menținută la <strong>81 Lei</strong> și pe parcursul anului 2026.</li>
  <li><strong>Protecția pensiilor aflate deja în plată:</strong> Dacă în urma recalculării din 2024 a rezultat un cuantum mai mic decât suma în plată anterior, pensionarul a păstrat suma mai avantajoasă.</li>
  <li><strong>Taxare CASS pentru pensiile mari:</strong> Începând cu 1 august 2025 și până la 31 decembrie 2027, pensiile ce depășesc <strong>3.000 lei</strong> sunt supuse CASS de 10% exclusiv pentru diferența ce trece de 3.000 lei.</li>
  <li><strong>Tranziția treptată către 65 ani:</strong> Pentru femei, vârsta de pensionare continuă urcarea lunară din Anexa 5 spre ținta finală din 2035.</li>
</ul>

<p>Verifică efectul direct al reformei asupra dosarului tău folosind <a href="/" class="text-blue-600 hover:underline font-semibold">calculatorul de pensie 2026</a> și compară strategiile de ieșire în <a href="/legislatie/" class="text-blue-600 hover:underline font-semibold">secțiunea de legislație</a>.</p>
`,
  },
  {
    id: 9,
    title: "Calculul Pensiei pentru PFA, Profesii Liberale și Freelanceri (2026)",
    excerpt:
      "Cum se calculează vechimea și punctajul la pensie pentru PFA-uri în 2026: plafoanele CAS de 12 și 24 salarii minime brute și impactul asupra VPR.",
    category: "planificare",
    publishDate: "2026-06-15",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "calculul-pensiei-freelanceri-pfa",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Persoanele fizice autorizate (PFA), titularul de Întreprindere Individuală, profesiile liberale și freelancerii cu venituri independente nu contribuie automat pe întregul venit net, ci în funcție de plafoanele anuale reglementate de Codul Fiscal. Acest mecanism are un efect major asupra viitoarei pensii de stat.</p>

<h3>Plafoanele CAS (25%) pentru Venituri Independente</h3>
<table>
  <thead>
    <tr>
      <th>Venit Net Anual Realizat</th>
      <th>Bază Minimă de Calcul CAS</th>
      <th>Punctaj Anual Estimat (la 4.050 Lei minim brut vs. 9.192 Lei mediu)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sub 12 salarii minime brute</td>
      <td>Opțional (poți opta pentru cel puțin 12 salarii minime)</td>
      <td>0,00 puncte dacă nu optezi; ~0,44 pct/an dacă optezi</td>
    </tr>
    <tr>
      <td>Între 12 și 24 salarii minime brute</td>
      <td>Obligatoriu minimum <strong>12 salarii minime brute</strong></td>
      <td>~<strong>0,44 puncte/an</strong> (cu bază minimă aleasă)</td>
    </tr>
    <tr>
      <td>Peste 24 salarii minime brute</td>
      <td>Obligatoriu minimum <strong>24 salarii minime brute</strong></td>
      <td>~<strong>0,88 puncte/an</strong></td>
    </tr>
  </tbody>
</table>

<h3>De ce mulți freelanceri obțin pensii mici la stat?</h3>
<p>Contribuția la plafonul minim de 12 salarii minime brute (25% × salariul minim brut) acoperă stagiul de cotizare legal pentru acei ani, însă generează sub jumătate de punct de pensie pe an. Pentru o pensie similară unui angajat cu venit mediu, freelancerii au două opțiuni: alegerea unei baze CAS mai ridicate în Declarația Unică sau suplimentarea prin <strong>Pilonul III</strong> și investiții financiare private.</p>
<p>Poți verifica echivalentul în puncte folosind <a href="/calculator-puncte-pensie/" class="text-blue-600 hover:underline font-semibold">calculatorul punctelor de pensie</a>.</p>
`,
  },
  {
    id: 10,
    title: "Pensia Comunitară UE: Transferul și Totalizarea Vechimii din Străinătate",
    excerpt:
      "Ai lucrat în România și în alt stat UE (Italia, Spania, Germania, UK)? Află cum funcționează Regulamentul 883/2004, calculul pro-rata și depunerea dosarului.",
    category: "tipuri-pensii",
    publishDate: "2026-09-12",
    modifiedDate: "2026-11-25",
    readTime: 10,
    slug: "transfer-drepturi-pensie-ue",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Milioane de români au lucrat legal atât în România, cât și în state membre ale Uniunii Europene, SEE sau în țări cu acorduri bilaterale (precum Marea Britanie, Canada sau Israel). Contribuțiile plătite peste hotare <strong>nu se pierd</strong> și nu se „transferă” printr-un singur transfer bancar al fondului, ci se cumulează printr-un mecanism european clar: <strong>totalizarea perioadelor de asigurare</strong>.</p>

<h3>Cum Funcționează Totalizarea Stagiilor (Regulamentul CE 883/2004)?</h3>
<ol>
  <li><strong>Îndeplinirea stagiului minim:</strong> Dacă ai 10 ani lucrați în România și 8 ani în Germania, România va recunoaște totalul de 18 ani exclusiv pentru a îndeplini pragul minim de 15 ani necesar accesului la pensie.</li>
  <li><strong>Calculul pro-rata temporis:</strong> Fiecare țară îți plătește direct pensia corespunzătoare anilor contribuiți pe teritoriul său, la împlinirea vârstei legale din acel stat. Astfel vei primi două decizii și două plăți distincte.</li>
</ol>

<h3>Unde se Depune Dosarul de Pensie Comunitară?</h3>
<ul>
  <li><strong>Dacă locuiești în România:</strong> Depui cererea la Casa Teritorială de Pensii din județul de domiciliu, declarând toate perioadele lucrate în străinătate (formularele europene P1 / seria E200).</li>
  <li><strong>Dacă locuiești în străinătate:</strong> Depui o singură cerere la instituția de pensii din statul de reședință (ex: INPS Italia, INSS Spania, DRV Germania), iar aceasta contactează oficial CNPP din România.</li>
</ul>
<p>Nu uita că indemnizația socială minimă din România (1.281 lei) se acordă doar beneficiarilor cu domiciliul stabil în România.</p>
`,
  },
  {
    id: 11,
    title: "Optimizarea Fiscală a Contribuțiilor pentru Pensie (2026)",
    excerpt:
      "Cum reduci legal taxele în timp ce construiești o pensie privată: deduceri Pilon III, avantaje angajator-salariat și diferențe de impozitare la retragere.",
    category: "planificare",
    publishDate: "2026-05-18",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "optimizare-fiscala-contributii-pensie",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Construirea unei rezerve financiare pentru pensie nu ține doar de suma economisită, ci și de eficiența fiscală a fiecărui canal utilizat. În 2026, combinația optimă implică folosirea inteligentă a deducerilor salariale existente în Codul Fiscal.</p>

<h3>3 Pârghii Fiscale Disponibile în România</h3>
<ol>
  <li><strong>Pilonul III prin reținere pe statul de plată:</strong> Până la <strong>400 EUR/an</strong> (~166 lei/lună) contribuiți de angajat sunt deduși din venitul impozabil (economisind 10% impozit pe venit imediat).</li>
  <li><strong>Beneficiu extra-salarial de la angajator:</strong> Angajatorul poate contribui separat până la <strong>400 EUR/an</strong> către fondul tău Pilon III în cadrul plafonului de beneficii neimpozabile, sumă netaxată cu CAS și CASS.</li>
  <li><strong>Strategia mixtă cu investiții pe termen lung:</strong> Sumele peste plafonul de 400 EUR/an merită comparate între comisioanele fondurilor de pensii și instrumente cu impozit pe câștigul de capital de 1%/3% prin brokeri autorizați în România.</li>
</ol>

<p>Testează randamentul net și economia de impozit direct în <a href="/calculator-pensie-pilon-3/" class="text-blue-600 hover:underline font-semibold">calculatorul Pilon III</a> sau citește planul complet în <a href="/planificare/" class="text-blue-600 hover:underline font-semibold">ghidul de planificare</a>.</p>
`,
  },
  {
    id: 12,
    title: "Simulare Pensie Online vs. Extras Oficial CNPP: Ghid Practic",
    excerpt:
      "Cum să combini simulatoarele online cu extrasul oficial de stagiu de la CNPP și șablonul Excel pentru o estimare cât mai apropiată de decizia finală.",
    category: "tipuri-pensii",
    publishDate: "2026-04-20",
    modifiedDate: "2026-11-25",
    readTime: 8,
    slug: "simulare-pensie-instrumente-metode",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>De ce o simulare rapidă de 30 de secunde poate diferi uneori față de decizia finală emisă de Casa Teritorială de Pensii? Pentru că în decizia oficială intră istoricul exact din fiecare lună a carierei tale (care nu a avut același raport față de salariul mediu din anii respectivi).</p>

<h3>Metoda în 3 Pași pentru cea mai Precisă Estimare</h3>
<ol>
  <li><strong>Pasul 1 — Descarcă stagiile oficiale:</strong> Intră în contul <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP.ro</a> („Datele mele” → „Stagii de cotizare”) și citește punctajul total acumulat până în prezent.</li>
  <li><strong>Pasul 2 — Proiectează anii rămași până la pensionare:</strong> Folosește <a href="/calculator-puncte-pensie/" class="text-blue-600 hover:underline font-semibold">calculatorul de puncte de pensie</a> sau <a href="/program-excel-calcul-pensie/" class="text-blue-600 hover:underline font-semibold">tabelul nostru Excel CSV</a> pentru a estima punctele viitoare + bonusul de stabilitate.</li>
  <li><strong>Pasul 3 — Aplică VPR oficial și fiscalitatea netă:</strong> Înmulțește totalul cu <strong>81 Lei</strong> (VPR 2026) și verifică eventuala reținere de CASS 10% + impozit peste 3.000 lei.</li>
</ol>
<p>Pentru detalii pas cu pas despre crearea contului pe portalul Casei Naționale, consultă <a href="/blog/vizualizare-vechime-munca-cnpp/" class="text-blue-600 hover:underline font-semibold">ghidul vizualizare vechime CNPP</a>.</p>
`,
  },
  {
    id: 13,
    title: "Pensia Minimă Garantată în 2026: Condiții și Cuantum (1.281 Lei)",
    excerpt:
      "Află valoarea exactă a indemnizației sociale pentru pensionari în 2026 (1.281 lei), condițiile de rezidență și stagiu minim, impozitare și facilități sociale.",
    category: "tipuri-pensii",
    publishDate: "2026-04-20",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "pensie-minima-garantata-2026",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Indemnizația socială pentru pensionari, cunoscută drept <strong>pensia minimă garantată</strong>, asigură un venit lunar minim pentru pensionarii din sistemul public ale căror contribuții calculate pe baza punctelor de pensie rezultă sub pragul stabilit prin lege.</p>

<p>Sub <strong>Legea nr. 360/2023</strong> și bugetul asigurărilor sociale aplicabil în <strong>2026</strong>, plafonul pensiei minime garantate este menținut la <strong>1.281 Lei pe lună</strong>. Mai jos explicăm cine o primește, cum se calculează diferența de la buget și ce se întâmplă în cazul pensiilor de urmaș, CAP sau invaliditate.</p>

<h3>Evoluția Pensiei Minime Garantate (2020–2026)</h3>
<div class="overflow-x-auto my-6">
  <table class="w-full text-sm text-left border border-slate-200">
    <thead class="bg-slate-100">
      <tr>
        <th class="border p-2">Anul</th>
        <th class="border p-2">Valoare Pensie Minimă (Lei)</th>
        <th class="border p-2">Modificare (%)</th>
        <th class="border p-2">Baza Legală</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border p-2">2020–2021</td><td class="border p-2">800 Lei</td><td class="border p-2">+14% / 0%</td><td class="border p-2">OUG 135/2020</td></tr>
      <tr><td class="border p-2">2022</td><td class="border p-2">1.000 Lei</td><td class="border p-2">+25,0%</td><td class="border p-2">OUG 125/2021</td></tr>
      <tr><td class="border p-2">2023</td><td class="border p-2">1.125 Lei</td><td class="border p-2">+12,5%</td><td class="border p-2">OUG 168/2022</td></tr>
      <tr><td class="border p-2">2024–2025</td><td class="border p-2">1.281 Lei</td><td class="border p-2">+13,8% / înghețat</td><td class="border p-2">OUG 115/2023 &amp; OUG 156/2024</td></tr>
      <tr class="bg-blue-50"><td class="border p-2 font-bold">2026</td><td class="border p-2 font-bold">1.281 Lei</td><td class="border p-2">0,0% (Menținut)</td><td class="border p-2">Legea nr. 141/2025</td></tr>
    </tbody>
  </table>
</div>

<h3>Cum Funcționează Compensarea Diferenței?</h3>
<ol>
  <li>Casa de Pensii calculează întâi pensia reală contributivă: <code>Punctaj Total × VPR (81 Lei în 2026)</code>.</li>
  <li>Dacă suma rezultată este, de exemplu, 850 Lei, bugetul de stat adaugă automat o <strong>indemnizație socială de 431 Lei</strong>, rezultând suma în plată de <strong>1.281 Lei</strong>.</li>
</ol>

<h3>Condiții de Acordare</h3>
<ul>
  <li>Calitatea de pensionar în sistemul public (limită de vârstă, invaliditate sau urmaș) cu stagiul minim de 15 ani îndeplinit pentru limita de vârstă.</li>
  <li><strong>Domiciliul stabil în România</strong> (pensionarii stabiliți permanent în străinătate încasează exclusiv pensia calculată pe contributivitate).</li>
  <li>Totalul pensiilor cumulate să fie sub 1.281 Lei.</li>
</ul>

<h3>Fiscalitate și Facilități</h3>
<p>Pensia minimă de 1.281 Lei este sub pragul neimpozabil de 3.000 Lei, astfel încât <strong>nu se reține nici impozit, nici CASS</strong>. Pensionarii încadrați la acest nivel beneficiază și de compensarea de 90% pentru medicamentele din sublista B și de călătorii reduse pe calea ferată conform legislației sociale.</p>
`,
  },
  {
    id: 14,
    title: "Valoarea Punctului de Referință (VPR) în 2026: Cum Se Calculează",
    excerpt:
      "De ce VPR este stabilit la 81 lei în 2026 conform Legii 360/2023 și Legii 141/2025, cum s-a calculat la reforma din 2024 și cum afectează pensia lunară.",
    category: "legislatie",
    publishDate: "2026-05-02",
    modifiedDate: "2026-11-25",
    readTime: 8,
    slug: "calcul-punct-referinta-vpr",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Reforma pensiilor reglementată prin Legea nr. 360/2023 a introdus un indicator unic și transparent în locul punctului clasic de pensie: <strong>Valoarea Punctului de Referință (VPR)</strong>. În anul 2026, <strong>VPR este de 81 Lei</strong>.</p>

<h3>Cum a Rezultat Valoarea Inițială de 81 Lei?</h3>
<div class="bg-slate-50 p-4 rounded-lg my-6 border border-slate-200">
  <p class="font-bold text-slate-900">Formula Legală din septembrie 2024:</p>
  <p class="font-mono text-lg text-blue-700 font-bold">VPR = Valoarea Punctului de Pensie (2.032 Lei) / 25 = 81,28 → 81 Lei</p>
  <p class="text-xs text-slate-600 mt-2">De ce împărțit la 25? Noul sistem înmulțește suma totală a punctelor (în loc de punctajul mediu anual raportat la stagii diferite), iar stagiul de referință utilizat pentru tranziția matematică a fost de 25 de ani.</p>
</div>

<h3>De ce VPR a rămas 81 Lei în 2025 și 2026 (și nu 91 Lei)?</h3>
<p>Conform mecanismului de indexare din Legea 360/2023, VPR ar fi trebuit majorat anual în ianuarie cu inflația plus 50% din creșterea reală a salariului mediu brut (proiecțiile inițiale vehiculând o trecere spre ~91 lei). Totuși, prin măsurile fiscal-bugetare adoptate succesiv (OUG nr. 156/2024 și Legea nr. 141/2025), aplicarea indexării a fost suspendată, astfel că <strong>valoarea oficială în plată a VPR rămâne 81 Lei în 2026</strong>.</p>

<h3>Impact Concret asupra Pensiei</h3>
<p>Pentru fiecare punct suplimentar acumulat (din contributivitate sau stabilitate), pensia brută lunară crește cu exact <strong>81 Lei</strong>. De exemplu, un bonus de stabilitate de 6,25 puncte (aferent unui stagiu de 35 de ani) înseamnă <code>6,25 × 81 = 506 Lei</code> brut/lună în plus la pensie. Testează propriul punctaj în <a href="/calculator-puncte-pensie/" class="text-blue-600 hover:underline font-semibold">calculatorul de puncte</a>.</p>
`,
  },
  {
    id: 15,
    title: "Ghid Complet pentru Pensia de Invaliditate în 2026",
    excerpt:
      "Gradele I, II și III de invaliditate sub Legea 360/2023, dreptul de cumul cu munca și indemnizația pentru însoțitor (50% din salariul minim brut).",
    category: "tipuri-pensii",
    publishDate: "2026-03-10",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "ghid-pensie-invaliditate-2026",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pensia de invaliditate se acordă persoanelor care și-au pierdut total sau cel puțin jumătate din capacitatea de muncă din cauza accidentelor de muncă, bolilor profesionale sau bolilor obișnuite. Sub <strong>Legea nr. 360/2023</strong>, definițiile capacității de muncă au fost flexibilizate pentru a permite integrarea profesională acolo unde starea medicală o permite.</p>

<h3>Cele Trei Grade de Invaliditate</h3>
<ul>
  <li><strong>Gradul I:</strong> Deficiență funcțională gravă — persoana și-a pierdut capacitatea de muncă și capacitatea de autoîngrijire, necesitând supraveghere permanentă.</li>
  <li><strong>Gradul II:</strong> Deficiență funcțională accentuată — capacitate de muncă diminuată sever, dar cu capacitatea de autoîngrijire păstrată.</li>
  <li><strong>Gradul III:</strong> Deficiență funcțională medie — pierderea a cel puțin jumătate din capacitatea de muncă; permite desfășurarea de activități profesionale.</li>
</ul>

<h3>Indemnizația de Însoțitor pentru Gradul I (Legea 360/2023)</h3>
<p>Spre deosebire de legea veche (care raporta indemnizația la 80% din punctul de pensie), <strong>Legea nr. 360/2023</strong> stabilește cuantumul indemnizației pentru însoțitor acordate pensionarilor de invaliditate Gradul I prin CNPP la <strong>50% din salariul de bază minim brut pe țară garantat în plată</strong> (echivalentul a 2.025 lei la salariul minim brut de 4.050 lei).</p>

<h3>Stagiul Potențial și Trecerea la Limită de Vârstă</h3>
<p>La calculul pensiei de invaliditate se adaugă un stagiu potențial pentru anii ce ar mai fi rămas până la vârsta standard de pensionare. La împlinirea vârstei standard, beneficiarul trece din oficiu la pensia pentru limită de vârstă (păstrând cuantumul cel mai avantajos și dreptul la indemnizația de însoțitor acolo unde este aplicabil). Detalii oficiale sunt disponibile pe <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP.ro</a>.</p>
`,
  },
  {
    id: 16,
    title: "Cum și Când Se Indexează Pensiile în România (2025–2026)",
    excerpt:
      "Formula legală de indexare anuală a VPR (inflație + 50% creștere reală salariu mediu brut) și de ce indexarea a fost înghețată la 81 lei în 2025–2026.",
    category: "legislatie",
    publishDate: "2026-02-10",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "indexare-pensii-2026-2026",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Mecanismul de indexare a pensiilor publice are rolul de a proteja puterea de cumpărare a pensionarilor față de inflație. Însă între formula teoretică prevăzută de <strong>Legea nr. 360/2023</strong> și aplicarea bugetară din <strong>2025–2026</strong> există diferențe esențiale pe care orice asigurat trebuie să le cunoască.</p>

<h3>Formula Legală de Indexare a VPR</h3>
<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
  <p class="font-bold text-blue-900 mt-0">Art. 84 Legea nr. 360/2023:</p>
  <p class="font-mono text-base text-blue-800 font-bold mb-1">Majorare anuală = 100% Rata Medie Anuală a Inflației + 50% Creșterea Reală a Salariului Mediu Brut</p>
  <p class="text-xs text-slate-600 mb-0">Calculată pe baza datelor INS din anul anterior celui de referință.</p>
</div>

<h3>Ce S-a Aplicat Efectiv în 2025 și 2026?</h3>
<p>Deși formula prevedea creșterea automată în ianuarie, prin <strong>OUG nr. 156/2024</strong> și ulterior prin <strong>Legea nr. 141/2025</strong>, indexarea anuală a fost suspendată din motive de consolidare fiscal-bugetară. În consecință, <strong>VPR a rămas înghețat la 81 Lei</strong> atât în 2025, cât și în 2026.</p>

<h3>Evoluția Istorică a Punctului de Pensie și VPR (2018–2026)</h3>
<div class="overflow-x-auto my-6">
  <table class="w-full text-sm text-left border border-slate-200">
    <thead class="bg-slate-100">
      <tr>
        <th class="border p-2">Data Aplicării</th>
        <th class="border p-2">Punct Pensie</th>
        <th class="border p-2">VPR</th>
        <th class="border p-2">Act Normativ</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border p-2">1 Iulie 2018</td><td class="border p-2">1.100 Lei</td><td class="border p-2">-</td><td class="border p-2">OUG 114/2018</td></tr>
      <tr><td class="border p-2">1 Septembrie 2020</td><td class="border p-2">1.442 Lei</td><td class="border p-2">-</td><td class="border p-2">OUG 135/2020</td></tr>
      <tr><td class="border p-2">1 Ianuarie 2022</td><td class="border p-2">1.586 Lei</td><td class="border p-2">-</td><td class="border p-2">OUG 125/2021</td></tr>
      <tr><td class="border p-2">1 Ianuarie 2023</td><td class="border p-2">1.785 Lei</td><td class="border p-2">-</td><td class="border p-2">OUG 168/2022</td></tr>
      <tr><td class="border p-2">1 Ianuarie 2024</td><td class="border p-2">2.032 Lei</td><td class="border p-2">-</td><td class="border p-2">Legea 422/2023</td></tr>
      <tr><td class="border p-2">1 Septembrie 2024</td><td class="border p-2">N/A (tranziție)</td><td class="border p-2"><strong>81 Lei</strong></td><td class="border p-2">Legea nr. 360/2023</td></tr>
      <tr class="bg-blue-50"><td class="border p-2 font-bold">2025 – 2026</td><td class="border p-2">N/A</td><td class="border p-2 font-bold">81 Lei (înghețat)</td><td class="border p-2">OUG 156/2024 &amp; Legea 141/2025</td></tr>
    </tbody>
  </table>
</div>

<h3>Impactul Fiscal asupra Pensiilor Indexate (Pragul de 3.000 Lei)</h3>
<p>Pensiile de până la 3.000 lei rămân complet scutite de impozit și CASS. Pentru pensiile care depășesc 3.000 lei, în 2026 se reține CASS 10% pentru suma ce trece de 3.000 lei (Legea nr. 141/2025) plus impozitul pe venit de 10% pentru partea impozabilă peste 3.000 lei.</p>
`,
  },
  {
    id: 17,
    title: "Actele Necesare pentru Dosarul de Pensionare în 2026",
    excerpt:
      "Lista completă de documente pentru pensia la limită de vârstă, anticipată, invaliditate și urmaș, termenele CNPP de 45 de zile și recuperarea adeverințelor.",
    category: "planificare",
    publishDate: "2026-11-10",
    modifiedDate: "2026-11-25",
    readTime: 11,
    slug: "acte-necesare-dosar-pensionare",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pregătirea completă a dosarului administrativ de pensionare previne amânările de plată și asigură valorificarea tuturor sporurilor și perioadelor necontributive (facultate la zi, armată, creștere copil). Sub <strong>Legea nr. 360/2023</strong>, dosarul se depune la Casa Teritorială de Pensii din județul de domiciliu cu cel mult 30 de zile înainte sau începând cu data îndeplinirii condițiilor legale.</p>

<h3>1. Documente Obligatorii pentru Limită de Vârstă</h3>
<ul>
  <li><strong>Cererea-tip de înscriere la pensie</strong> (descărcabilă de pe portalul CNPP sau completată la ghișeu);</li>
  <li><strong>Carnetul de muncă</strong> (original și copie) pentru perioada anterioară datei de 1 ianuarie 2011;</li>
  <li><strong>Carnetul de muncă CAP / adeverințe</strong> pentru foștii lucrători în agricultură (dacă este cazul);</li>
  <li><strong>Acte de stare civilă:</strong> CI/BI, certificat de naștere și certificat de căsătorie (în original și copie);</li>
  <li><strong>Livretul militar</strong> (original și copie) pentru stagiul militar obligatoriu;</li>
  <li><strong>Diploma de studii universitare la zi</strong> și adeverința privind durata normală și forma de învățământ (frecvență);</li>
  <li><strong>Adeverințe de sporuri permanente și grupe de muncă (I/II)</strong> pentru veniturile neînscrise clar în carnetul de muncă înainte de aprilie 2001.</li>
</ul>

<h3>2. Documente Suplimentare pentru Pensia Anticipată</h3>
<p>Pe lângă actele de bază, trebuie anexată dovada încetării contractului individual de muncă (sau declarație/adeverință că la data deschiderii dreptului nu desfășori activități supuse asigurării incompatibile cu anticipata) și extrasul actualizat al stagiului contributiv.</p>

<h3>3. Sursa Evidențelor pe Perioade</h3>
<div class="overflow-x-auto my-6">
  <table class="w-full text-sm text-left border border-slate-200">
    <thead class="bg-slate-100">
      <tr>
        <th class="border p-2">Perioadă</th>
        <th class="border p-2">Sursă Oficială CNPP</th>
        <th class="border p-2">Adeverințe Suplimentare</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border p-2">Înainte de 1 aprilie 2001</td><td class="border p-2">Carnetul de muncă original</td><td class="border p-2">Da, pentru sporuri cu caracter permanent / grupe</td></tr>
      <tr><td class="border p-2">1 apr. 2001 – 31 dec. 2010</td><td class="border p-2">Baza electronică CNPP + Carnet</td><td class="border p-2">Doar dacă lipsesc luni din extrasul online</td></tr>
      <tr><td class="border p-2">După 1 ianuarie 2011</td><td class="border p-2">Sistem electronic D112 / REVISAL</td><td class="border p-2">Nu (raportare lunară digitală)</td></tr>
    </tbody>
  </table>
</div>

<h3>Termenul Legal de Emitere a Deciziei</h3>
<p>Casa Teritorială de Pensii are termen legal de <strong>45 de zile</strong> pentru emiterea deciziei de pensionare, plata pensiei făcându-se retroactiv de la data înregistrării cererii (dacă toate condițiile erau îndeplinite). Dacă lipsesc adeverințe de sporuri din arhive, poți depune dosarul inițial și solicita ulterior <strong>recalcularea</strong> pe măsură ce le obții.</p>
`,
  },
  {
    id: 18,
    title: "Pensionarea Anticipată Fără Penalizare în 2026: Excepții Legale",
    excerpt:
      "Cine se poate pensiona mai devreme fără reducerea cuantumului în 2026: mame cu mai mulți copii, condiții speciale, zone poluate și depășirea stagiului complet.",
    category: "tipuri-pensii",
    publishDate: "2026-08-25",
    modifiedDate: "2026-11-25",
    readTime: 8,
    slug: "pensie-anticipata-fara-penalizare",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Deși retragerea anticipată presupune de obicei o diminuare procentuală între 0,15% și 0,40% pe lună sub Legea nr. 360/2023, legislația românească păstrează categorii clare de asigurați care își pot reduce vârsta de ieșire la pensie <strong>fără nicio penalizare asupra cuantumului</strong>.</p>

<h3>Categorii Care Beneficiază de Reducerea Vârstei Fără Penalizare</h3>
<ul>
  <li><strong>Depășirea stagiului complet de cotizare (excepția pensionării nepenalizate pentru stagiul prelungit cu cel puțin 5–8 ani conform dispozițiilor tranzitorii / Art. 58):</strong> asigurații cu vechime contributivă excepțională se pot retrage mai devreme cu reducere zero sau minimă, conform tranșelor legale.</li>
  <li><strong>Femei care au născut și crescut copii (Art. 51 Legea 360/2023):</strong> cu stagiul complet realizat, beneficiază de reducerea vârstei standard cu 6 luni/copil (1 an pentru 2 copii, până la <strong>3 ani și 6 luni</strong> pentru 7+ copii) direct la pensia pentru limită de vârstă, fără penalizare.</li>
  <li><strong>Munca în condiții deosebite și speciale:</strong> persoanele din minerit subteran, siderurgie, radiologie, aviație civilă obțin reduceri cumulate de vârstă proporționale cu stagiul în grupă.</li>
  <li><strong>Zone cu poluare remanentă:</strong> locuitorii cu cel puțin 30 de ani de domiciliu în localitățile nominalizate expres prin lege (reducere de până la 2 ani fără penalizare).</li>
</ul>

<p>Verifică scenariul tău în <a href="/calculator-varsta-pensionare/" class="text-blue-600 hover:underline font-semibold">calculatorul vârstei de pensionare</a> și simulează varianta cu diminuare în <a href="/calculator-pensie-anticipata/" class="text-blue-600 hover:underline font-semibold">calculatorul pensiei anticipate</a>.</p>
`,
  },
  {
    id: 19,
    title: "Ghid Util: Cum Verifici Vechimea de Muncă Online pe Portalul CNPP",
    excerpt:
      "Pas cu pas: crearea contului pe cnpp.ro (ghişeu sau semnătură electronică), descărcarea raportului de stagii de cotizare și corectarea erorilor D112.",
    category: "planificare",
    publishDate: "2026-05-15",
    modifiedDate: "2026-11-25",
    readTime: 10,
    slug: "vizualizare-vechime-munca-cnpp",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Monitorizarea stagiului de cotizare direct în portalul oficial <strong>CNPP.ro</strong> îți permite să verifici lună de lună dacă angajatorii au declarat corect salariile brute, condițiile de muncă și contribuția CAS în Declarația 112.</p>

<h3>Pasul 1: Crearea și Activarea Contului CNPP</h3>
<ol>
  <li>Accesează <strong>cnpp.ro</strong> → secțiunea <strong>„Creare cont”</strong> și completează CNP-ul, numele, adresa și emailul exact conform cărții de identitate.</li>
  <li>Generează cererea PDF, tipărește-o și semnează-o (sau aplică o semnătură electronică calificată pentru activare la distanță).</li>
  <li>Prezintă-te o singură dată la orice Casă Teritorială de Pensii cu actul de identitate și cererea semnată (sau trimite cererea semnată electronic pe adresa de email a casei județene, util mai ales din diaspora).</li>
</ol>

<h3>Pasul 2: Generarea Raportului de Stagii de Cotizare</h3>
<ul>
  <li>După autentificare, intră în meniul <strong>„Datele mele” → „Stagii de cotizare” → „Generare document”</strong>.</li>
  <li>Poți solicita raportul lunar detaliat (cu salarii și punctaj lunar) sau situația sintetică pe ani.</li>
  <li>Documentul PDF devine disponibil în secțiunea „Rapoarte generate” în câteva minute.</li>
</ul>

<h3>Ce Lipsește Din Contul Online și Cum Corectezi Erorile?</h3>
<div class="overflow-x-auto my-6">
  <table class="w-full text-sm text-left border border-slate-200">
    <thead class="bg-slate-100">
      <tr>
        <th class="border p-2">Situație Identificată</th>
        <th class="border p-2">Explicație</th>
        <th class="border p-2">Acțiune Recomandată</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-2">Nu apare vechimea de dinainte de aprilie 2001</td>
        <td class="border p-2">Baza informatică CNPP a pornit în aprilie 2001</td>
        <td class="border p-2">Se dovedește prin carnetul de muncă original și adeverințe</td>
      </tr>
      <tr>
        <td class="border p-2">Lipsește o lună recentă (după 2001)</td>
        <td class="border p-2">Declarația D112 nedepusă ori rectificată întârziat</td>
        <td class="border p-2">Solicită verificarea la HR sau adresează-te ITM</td>
      </tr>
      <tr>
        <td class="border p-2">Salariu brut greșit sau grupă lipsă</td>
        <td class="border p-2">Eroare de raportare contabilă D112</td>
        <td class="border p-2">Depunerea declarației rectificative de către angajator</td>
      </tr>
    </tbody>
  </table>
</div>
<p>După descărcarea punctajului acumulat din CNPP, introdu totalul în <a href="/" class="text-blue-600 hover:underline font-semibold">calculatorul nostru de pensie</a> pentru a verifica cuantumul brut și net în 2026.</p>
`,
  },
  {
    id: 20,
    title: "Pilonul II de Pensii în 2026: Cotă 4,75%, Randament și Moștenire",
    excerpt:
      "Tot ce trebuie să știi despre pensia privată obligatorie Pilonul II în 2026: cota de 4,75% din salariul brut, opțiunile de retragere și dreptul la moștenire.",
    category: "tipuri-pensii",
    publishDate: "2026-05-30",
    modifiedDate: "2026-11-25",
    readTime: 9,
    slug: "pilonul-2-modificari-legislative",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pilonul II — sistemul de pensii administrate privat obligatorii — reprezintă al doilea pilon financiar al salariaților din România. Începând cu anul 2024 și menținută în <strong>2026</strong>, cota redirecționată automat din CAS (25%) către contul personal privat este de <strong>4,75% din salariul brut</strong>. Simulează acumularea ta în <a href="/calculator-pensie-pilon-2/" class="text-blue-600 hover:underline font-semibold">calculatorul Pilon II</a>.</p>

<h3>De ce 4,75% nu îți scade salariul net?</h3>
<p>Pentru salariații obișnuiți, cele 4,75 procente se virează direct din contribuția de 25% CAS pe care o plătești deja către sistemul de asigurări sociale: 20,25% rămân la bugetul public (Pilonul I), iar 4,75% intră într-un cont individual investit pe numele tău de către administratorul fondului ales.</p>

<h3>Avantaje Principale și Reguli de Plată</h3>
<ul>
  <li><strong>Proprietate privată și moștenire:</strong> Spre deosebire de Pilonul I, <strong>banii din Pilonul II sunt complet moștenibili</strong>. În cazul decesului participantului înainte de pensionare, activul net se transferă moștenitorilor legali sau testamentari.</li>
  <li><strong>Diversificare investițională:</strong> Fondurile Pilon II investesc preponderent în titluri de stat românești (~60–65%) și acțiuni listate pe burse locale și internaționale.</li>
  <li><strong>Modalități de încasare:</strong> La îndeplinirea condițiilor de pensionare pentru limită de vârstă (sau invaliditate), suma poate fi încasată integral într-o singură tranșă sau eșalonat în rate lunare (până la 5 ani), în conformitate cu normele ASF.</li>
</ul>

<p>Poți verifica fondul de pensii la care ești arondat accesând secțiunea „Află la ce fond ești” de pe site-ul Autorității de Supraveghere Financiară (<a href="https://asfromania.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">ASF</a>) sau solicitând detalii prin <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP</a>.</p>
`,
  },
];

export const getArticlesByCategory = (category: string): Article[] => {
  if (category === "all") return staticArticles.filter((a) => a.published);
  return staticArticles.filter((a) => a.published && a.category === category);
};

export const getRecentArticles = (limit: number = 3): Article[] => {
  return staticArticles
    .filter((a) => a.published)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return staticArticles.find((a) => a.slug === slug && a.published);
};

export const searchArticles = (searchTerm: string): Article[] => {
  const term = searchTerm.toLowerCase();
  return staticArticles.filter(
    (a) =>
      a.published &&
      (a.title.toLowerCase().includes(term) ||
        a.excerpt.toLowerCase().includes(term) ||
        a.content?.toLowerCase().includes(term))
  );
};
