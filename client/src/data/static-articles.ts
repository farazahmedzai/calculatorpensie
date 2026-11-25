// Static articles data for Vite + Netlify SSR build (upgraded with Proof KB, Unslop SEO & Upper-40% Internal Linking)

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
    title: "Top 5 Greșeli de Evitat în Planificarea Pensiei (2026)",
    excerpt:
      "Cele mai frecvente cinci greșeli făcute de salariați și PFA înainte de pensionare în 2026 și soluțiile concrete conform Legii 360/2023.",
    category: "planificare",
    publishDate: "2026-03-15",
    modifiedDate: "2026-11-26",
    readTime: 8,
    slug: "top-5-greseli-planificare-pensie",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>În 2026, cele mai mari pierderi la pensie provin din lipsa adeverințelor de vechime înainte de 2011, ratarea pragurilor de stabilitate de 25-35 ani (VPR 81 lei) și ignorarea reținerii CASS de 10% peste 3.000 lei. Poți testa impactul imediat cu <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul de pensie brută și netă 2026</a>.</p>

<h2>De ce apar diferențe mari la dosarul de pensionare?</h2>
<p>Diferențele apar deoarece Casa Națională de Pensii Publice (CNPP) calculează strict pe baza veniturilor declarate în Declarația 112 și a documentelor din arhivă, nu pe presupuneri. Un an lipsă sau neîncadrat la timp poate reduce atât punctajul contributiv, cât și bonificația de stabilitate din Legea nr. 360/2023.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Verifică-ți pensia netă înainte să depui dosarul</p>
  <p class="mt-1 text-sm text-slate-700">Introdu vechimea actuală și salariul pentru a vedea pensia estimată cu VPR 81 lei și taxele din 2026.</p>
  <a href="/calculator-puncte-pensie/" class="mt-3 inline-block font-semibold text-blue-700 underline">Calculează punctele contributive și de stabilitate -></a>
</aside>

<h2>1. Neverificarea stagiului din Declarația 112</h2>
<p>Mulți asigurați presupun că toate lunile lucrate apar automat în evidența CNPP. În practică, firme radiate înainte de 2011, erori REVISAL sau neplata CAS pot lăsa goluri în extrasul de vechime. Verificarea anuală a contului CNPP îți permite să ceri adeverințe rectificative cât timp arhivele sunt ușor accesibile.</p>

<h2>2. Retragerea chiar înainte de pragul de stabilitate</h2>
<p>Conform Art. 85 din Legea nr. 360/2023, anii contributivi lucrați peste pragul de 25 de ani primesc +0,50 puncte/an (anii 26-30), +0,75 puncte/an (anii 31-35) și +1,00 punct/an (peste 35 ani). Pensionarea cu 2-3 luni înainte de împlinirea unui an întreg peste 25 ani sau înaintea vârstei standard reduce definitiv venitul inițial. Verifică din timp cu <a href="/calculator-pensie-anticipata/" class="text-blue-700 hover:underline font-semibold">simulatorul penalizării la pensia anticipată</a>.</p>

<h2>3. Dependența exclusivă de Pilonul I</h2>
<p>Sistemul public funcționează pe solidaritate între generații (PAYG), iar înghețarea VPR la 81 lei în 2026 arată că rata de înlocuire a salariului rămâne limitată. Pentru echilibru, monitorizează <a href="/calculator-pensie-pilon-2/" class="text-blue-700 hover:underline font-semibold">acumularea din Pilonul II obligatoriu (4,75%)</a> și completează cu un plan facultativ.</p>

<h2>4. Ratarea deducerii de 400 EUR/an la Pilonul III</h2>
<p>Contribuțiile la Pilonul III beneficiază de deductibilitate fiscală de până la 400 EUR anual separat pentru angajat și pentru angajator. Nefolosirea plafonului înseamnă pierderea economiei anuale de impozit pe venit (10%).</p>

<h2>5. Calculul bugetului pe suma brută în locul pensiei nete</h2>
<p>Conform Legii nr. 141/2025, pensiile ce depășesc 3.000 lei suportă în 2026 atât CASS de 10% pe suma peste 3.000 lei, cât și impozit pe venit de 10% aplicat după deducerea CASS și a plafonului neimpozabil. La o pensie brută de 5.000 lei, pensia netă reală este 4.620 lei.</p>

<figure class="my-6">
  <img src="/images/calcul-pensie-neta-brut-2026.svg" alt="Comparatie pensie bruta versus pensie neta in 2026 cu CASS 10% si impozit 10% peste pragul de 3.000 lei" width="1536" height="864" loading="lazy" decoding="async" class="w-full h-auto rounded-lg border border-slate-200" />
</figure>

<h2>Checklist rapid de pregătire</h2>
<ul>
  <li>Descarcă raportul lunar din portalul CNPP și compară-l cu <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">tabelul Excel CSV de evidență pe ani</a>.</li>
  <li>Păstrează în siguranță carnetul de muncă original și adeverințele de sporuri permanente anterioare anului 2001.</li>
  <li>Verifică exact luna și anul retragerii în <a href="/calculator-varsta-pensionare/" class="text-blue-700 hover:underline font-semibold">calendarul oficial al vârstei de pensionare</a>.</li>
</ul>
`,
  },
  {
    id: 2,
    title: "Cum Calculezi Pensia de Stat în 2026 (Ghid Complet)",
    excerpt:
      "Formula oficială CNPP din Legea 360/2023 cu VPR 81 lei, puncte de stabilitate, salariul mediu brut 9.192 lei și calculul net după CASS.",
    category: "legislatie",
    publishDate: "2026-04-10",
    modifiedDate: "2026-11-26",
    readTime: 10,
    slug: "ghid-calcul-pensie-stat-2026",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>În 2026, pensia brută de stat se calculează înmulțind numărul total de puncte acumulate cu <strong>Valoarea Punctului de Referință (VPR = 81 lei)</strong>, raportând fiecare salariu brut lunar la salariul mediu brut bugetar de <strong>9.192 lei</strong>. Simulează rezultatul imediat în <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul online de pensie 2026</a>.</p>

<h2>Care este formula oficială CNPP în 2026?</h2>
<p>Formula introdusă prin Legea nr. 360/2023 adună punctele de contributivitate, punctele de stabilitate (peste 25 ani lucrați) și punctele asimilate, apoi înmulțește totalul cu VPR de 81 lei menținut prin OUG nr. 156/2024 și Legea nr. 141/2025.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Calculează punctajul total și venitul net în mână</p>
  <p class="mt-1 text-sm text-slate-700">Verifică automat atât punctele de stabilitate de după 25 ani de muncă, cât și reținerile CASS și impozit 2026.</p>
  <a href="/calculator-puncte-pensie/" class="mt-3 inline-block font-semibold text-blue-700 underline">Deschide calculatorul de puncte și stabilitate -></a>
</aside>

<h2>Cum se formează cele 3 categorii de puncte?</h2>
<p>Fiecare lună de activitate generează un punctaj egal cu raportul dintre venitul tău brut și câștigul salarial mediu brut pe economie din anul respectiv (9.192 lei în 2026 după Legea nr. 44/2026).</p>
<ul>
  <li><strong>Puncte de contributivitate:</strong> suma punctajelor anuale realizate prin contribuția CAS de 25% (un salariu egal cu media pe economie adună exact 1,00 punct/an).</li>
  <li><strong>Puncte de stabilitate (Art. 85):</strong> +0,50 pct/an pentru anii 26-30, +0,75 pct/an pentru anii 31-35 și +1,00 pct/an pentru fiecare an contributiv peste 35 de ani.</li>
  <li><strong>Perioade asimilate (0,25 pct/an):</strong> studiile universitare la zi finalizate, stagiul militar și perioadele legale necontributive.</li>
</ul>

<h2>Exemplu complet: 35 ani stagiu la salariu mediu pe economie</h2>
<p>Un salariat cu 35 ani contributivi și 1,00 punct/an acumulează 35,00 puncte contributive plus 6,25 puncte de stabilitate (5 ani × 0,50 + 5 ani × 0,75). Totalul de 41,25 puncte × 81 lei = <strong>3.341 lei pensie brută</strong>.</p>
<p>Pentru a trece de la brut la net în 2026: peste pragul de 3.000 lei rămân 341 lei, din care se rețin CASS 10% (34 lei) și impozit 10% din baza rămasă de 307 lei (31 lei), rezultând <strong>3.276 lei pensie netă</strong>. Dacă preferi evidența istorică an cu an, descarcă <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">șablonul Excel CSV pentru calculul pensiei</a>.</p>

<h2>Tabel comparativ Pensie Brută vs Netă în 2026</h2>
<div class="overflow-x-auto my-4">
  <table class="w-full text-sm border-collapse border border-slate-200">
    <thead>
      <tr class="bg-slate-100 text-left">
        <th class="border p-2.5">Puncte Totale</th>
        <th class="border p-2.5">Pensie Brută (× 81 Lei)</th>
        <th class="border p-2.5">CASS (10% &gt; 3.000)</th>
        <th class="border p-2.5">Impozit (10%)</th>
        <th class="border p-2.5">Pensie Netă</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border p-2.5">30,00 pct</td><td class="border p-2.5">2.430 Lei</td><td class="border p-2.5">0 Lei</td><td class="border p-2.5">0 Lei</td><td class="border p-2.5 font-bold">2.430 Lei</td></tr>
      <tr class="bg-slate-50"><td class="border p-2.5">43,21 pct</td><td class="border p-2.5">3.500 Lei</td><td class="border p-2.5">50 Lei</td><td class="border p-2.5">45 Lei</td><td class="border p-2.5 font-bold">3.405 Lei</td></tr>
      <tr><td class="border p-2.5">61,73 pct</td><td class="border p-2.5">5.000 Lei</td><td class="border p-2.5">200 Lei</td><td class="border p-2.5">180 Lei</td><td class="border p-2.5 font-bold">4.620 Lei</td></tr>
      <tr class="bg-slate-50"><td class="border p-2.5">86,42 pct</td><td class="border p-2.5">7.000 Lei</td><td class="border p-2.5">400 Lei</td><td class="border p-2.5">360 Lei</td><td class="border p-2.5 font-bold">6.240 Lei</td></tr>
    </tbody>
  </table>
</div>

<figure class="my-6">
  <img src="/images/calcul-pensie-neta-brut-2026.svg" alt="Graficul pensiei brute fata de pensia neta incasata in 2026 dupa deducerea CASS 10% si a impozitului 10% peste 3.000 lei" width="1536" height="864" loading="lazy" decoding="async" class="w-full h-auto rounded-lg border border-slate-200" />
</figure>

<h2>Nu uita de pensia privată Pilonul II</h2>
<p>Pe lângă pensia publică CNPP, salariații născuți după 1973 contribuie automat cu 4,75% din venitul brut către fondurile private. Poți estima suma cumulată pe termen lung folosind <a href="/calculator-pensie-pilon-2/" class="text-blue-700 hover:underline font-semibold">estimatorul de acumulare Pilonul II</a>.</p>
`,
  },
  {
    id: 3,
    title: "Pilonul III 2026: Deductibilitate și Strategii",
    excerpt:
      "Cum funcționează pensia facultativă Pilon III în 2026: plafon deductibil 400 EUR/an, retragere de la 60 de ani și randament comparativ.",
    category: "tipuri-pensii",
    publishDate: "2026-02-28",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "pilonul-3-avantaje-fiscale-strategii",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pilonul III îți permite în 2026 să economisești cu deductibilitate fiscală de <strong>400 EUR/an (~166 lei/lună)</strong> atât pentru angajat, cât și separat pentru angajator, banii putând fi încasați de la vârsta de <strong>60 de ani</strong>. Simulează imediat creșterea în <a href="/calculator-pensie-pilon-3/" class="text-blue-700 hover:underline font-semibold">calculatorul de pensie facultativă Pilon III</a>.</p>

<h2>Ce avantaje fiscale are Pilonul III față de economisirea clasică?</h2>
<p>Avantajul principal este scutirea de impozit pe venit (10%) pentru contribuțiile până la 400 EUR anual (~2.000 lei/an), ceea ce reduce costul net real al economisirii pentru orice salariat cu venituri impozabile.</p>

<aside class="not-prose my-6 rounded-xl border border-green-200 bg-green-50/70 p-5">
  <p class="font-bold text-slate-900">Vezi soldul Pilon III la 60 de ani și economia anuală de taxe</p>
  <p class="mt-1 text-sm text-slate-700">Testează contribuția lunară optimă de 166 lei (deductibilitate 100%) sau scenarii cu contribuție de angajator.</p>
  <a href="/calculator-pensie-pilon-3/" class="mt-3 inline-block font-semibold text-green-800 underline">Simulează acum acumularea Pilonul III -></a>
</aside>

<h2>Ce condiții legale trebuie să îndeplinești la retragere?</h2>
<p>Potrivit legislației pensiilor facultative supravegheate de ASF, activul acumulat poate fi accesat la împlinirea vârstei de 60 de ani dacă ai cel puțin 90 de contribuții lunare plătite și un activ care atinge pragul minim stabilit în prospectul fondului.</p>
<ul>
  <li><strong>Limită legală de contribuție:</strong> până la 15% din venitul salarial brut lunar.</li>
  <li><strong>Proprietate privată integrală:</strong> sumele investite sunt moștenibile fără excepție de către moștenitorii legali.</li>
  <li><strong>Flexibilitate totală:</strong> contribuțiile pot fi suspendate sau modificate oricând printr-o simplă notificare către administrator.</li>
</ul>

<h2>Exemplu de acumulare: 166 lei/lună vs 332 lei/lună</h2>
<p>La o contribuție de 166 lei/lună timpi de 25 de ani cu un randament mediu net de 5%/an, depunerile totale de 49.800 lei ajung la aproximativ 98.850 lei la vârsta de 60 ani. Dacă și angajatorul adaugă încă 166 lei/lună în cadrul plafonului său deductibil de 400 EUR/an, soldul estimat se dublează spre 197.700 lei.</p>

<h2>Cum combini Pilonul I, II și III pentru pensionare optimă?</h2>
<p>Pentru o imagine financiară completă, adună pensia publică din <a href="/" class="text-blue-700 hover:underline font-semibold">simulatorul principal Pilon I</a>, verifică contribuția obligatorie de 4,75% din <a href="/calculator-pensie-pilon-2/" class="text-blue-700 hover:underline font-semibold">proiecția fondului Pilon II</a> și folosește Pilonul III drept punte între 60 și 65 de ani fără a apela la o pensie anticipată penalizată.</p>
`,
  },
  {
    id: 4,
    title: "Pensia Anticipată 2026: Condiții și Penalizări",
    excerpt:
      "Cine se poate pensiona cu până la 5 ani mai devreme sub Legea 360/2023, grila completă de penalizare 0,15%-0,40%/lună și excepțiile fără penalizare.",
    category: "legislatie",
    publishDate: "2026-10-15",
    modifiedDate: "2026-11-26",
    readTime: 8,
    slug: "pensie-anticipata-conditii-penalizari",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Sub Legea nr. 360/2023, pensia anticipată permite retragerea cu <strong>cel mult 5 ani (60 luni)</strong> înaintea vârstei standard dacă ai îndeplinit integral stagiul complet contributiv (35 ani la bărbați), aplicând o penalizare între <strong>0,15% și 0,40% pe lună</strong>. Calculează diminuarea exactă cu <a href="/calculator-pensie-anticipata/" class="text-blue-700 hover:underline font-semibold">calculatorul de pensie anticipată 2026</a>.</p>

<h2>Care sunt condițiile obligatorii de stagiu în 2026?</h2>
<p>Legea 360/2023 a eliminat împărțirea în două pensii anticipate și cere îndeplinirea stagiului complet exclusiv din perioade contributive efectiv lucrate. Studiile universitare la zi și armata (perioade asimilate) nu intră la deschiderea dreptului de pensie anticipată, deși se valorifică ulterior la punctaj după împlinirea vârstei standard.</p>

<aside class="not-prose my-6 rounded-xl border border-orange-200 bg-orange-50/70 p-5">
  <p class="font-bold text-slate-900">Verifică vârsta standard și penalizarea totală</p>
  <p class="mt-1 text-sm text-slate-700">Află câte luni mai ai până la limita legală și cât scade exact pensia brută cu penalizarea actuală.</p>
  <a href="/calculator-pensie-anticipata/" class="mt-3 inline-block font-semibold text-orange-800 underline">Calculează penalizarea lunară și pensia anticipată -></a>
</aside>

<h2>Grila penalizărilor lunare sub Legea 360/2023</h2>
<p>Penalizarea maximă de 0,40%/lună este semnificativ mai redusă decât vechiul prag de 0,75%/lună și scade cu cât ai mai mulți ani lucrați peste stagiul complet:</p>
<ul>
  <li><strong>Până la 1 an peste stagiu:</strong> 0,40% / lună (maxim -24% la 60 luni).</li>
  <li><strong>Între 1 și 2 ani peste stagiu:</strong> 0,35% / lună (maxim -21%).</li>
  <li><strong>Între 2 și 3 ani peste stagiu:</strong> 0,30% / lună (maxim -18%).</li>
  <li><strong>Între 3 și 4 ani peste stagiu:</strong> 0,25% / lună (maxim -15%).</li>
  <li><strong>Între 4 și 5 ani peste stagiu:</strong> 0,20% / lună (maxim -12%).</li>
  <li><strong>Peste 5 ani (5-8 ani peste stagiu):</strong> 0,15% / lună, iar la depășirea cu 8 ani peste stagiu reducerea devine zero.</li>
</ul>

<figure class="my-6">
  <img src="/images/penalizari-pensie-anticipata-2026.svg" alt="Grila oficiala a penalizarilor lunare la pensia anticipata din Romania in 2026 intre 0,15% si 0,40% pe luna" width="1536" height="864" loading="lazy" decoding="async" class="w-full h-auto rounded-lg border border-slate-200" />
</figure>

<h2>Exemplu concret de calcul cu 24 luni anticipare</h2>
<p>Un salariat cu pensia standard calculată la 4.000 lei brut care a realizat 36,5 ani contributivi (1,5 ani peste stagiul complet) se încadrează la 0,35%/lună. Pentru 24 luni de anticipare rezultă 24 × 0,35% = 8,40% diminuare, adică -336 lei lunar până la împlinirea vârstei standard de 65 ani, când pensia revine automat la cuantumul întreg nepenalizat.</p>
<p>Verifică data exactă de referință în <a href="/calculator-varsta-pensionare/" class="text-blue-700 hover:underline font-semibold">calculatorul vârstei de pensionare Anexa 5</a> sau planifică tranziția cu o rezervă din <a href="/calculator-pensie-pilon-3/" class="text-blue-700 hover:underline font-semibold">economisirea facultativă Pilon III</a>.</p>
`,
  },
  {
    id: 5,
    title: "Condiții Speciale și Deosebite: Impact la Pensie",
    excerpt:
      "Cum reduc grupele de muncă (condiții speciale și deosebite) vârsta de pensionare și ce puncte suplimentare primești sub Legea 360/2023.",
    category: "legislatie",
    publishDate: "2026-09-20",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "conditii-speciale-munca-impact-pensie",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Asigurații cu activitate în condiții deosebite sau speciale de muncă primesc atât <strong>reducerea vârstei standard de pensionare</strong> (cu până la 10-13 ani la stagiul complet), cât și puncte suplimentare de contributivitate de <strong>0,25 sau 0,50 puncte/an</strong>. Verifică imediat data ieșirii cu <a href="/calculator-varsta-pensionare/" class="text-blue-700 hover:underline font-semibold">calculatorul pentru vârsta de pensionare 2026</a>.</p>

<h2>Ce beneficii acordă condițiile deosebite și speciale?</h2>
<p>Pentru fiecare an lucrat în grupă de risc se acordă atât majorare de punctaj (pentru vechimea trecută și actuală), cât și scăderea vârstei legale fără nicio penalizare asupra cuantumului.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Calculează impactul asupra punctajului și vârstei</p>
  <p class="mt-1 text-sm text-slate-700">Estimarea completă combină reducerea vârstei standard cu punctajul suplimentar aferent condițiilor de muncă.</p>
  <a href="/calculator-puncte-pensie/" class="mt-3 inline-block font-semibold text-blue-700 underline">Calculează punctele și pensia cu VPR 81 lei -></a>
</aside>

<h2>Diferența dintre condiții deosebite și condiții speciale</h2>
<table class="w-full text-sm border-collapse my-4">
  <thead>
    <tr class="bg-slate-100 text-left">
      <th class="border p-2.5">Tip Încadrare</th>
      <th class="border p-2.5">Contribuție Angajator CAS</th>
      <th class="border p-2.5">Spor Punctaj Legal</th>
      <th class="border p-2.5">Impact Vârstă (orientativ)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border p-2.5 font-semibold">Condiții Deosebite (fosta Gr. II)</td><td class="border p-2.5">+4% suplimentar</td><td class="border p-2.5">+0,25 pct / an lucrat</td><td class="border p-2.5">Reducere proporțională până la 7 ani</td></tr>
    <tr class="bg-slate-50"><td class="border p-2.5 font-semibold">Condiții Speciale (fosta Gr. I)</td><td class="border p-2.5">+8% suplimentar</td><td class="border p-2.5">+0,50 pct / an lucrat</td><td class="border p-2.5">Reducere substanțială până la 10-13 ani</td></tr>
  </tbody>
</table>

<figure class="my-6">
  <img src="/images/varsta-pensionare-femei-2026-2035.svg" alt="Grafic evolutie varsta standard de pensionare in Romania 2024-2035 conform Anexei 5 Legea 360/2023" width="1536" height="864" loading="lazy" decoding="async" class="w-full h-auto rounded-lg border border-slate-200" />
</figure>

<h2>Ce acte sunt necesare la dosarul CNPP?</h2>
<p>Pentru perioadele anterioare datei de 1 aprilie 2001 sunt obligatorii adeverințele emise de angajatori sau de deținătorii de arhive cu temeiul juridic exact al încadrării în Grupa I ori Grupa II. Pentru perioadele după 2001, încadrarea rezultă direct din declarațiile lunare nominale (D112) ale angajatorului.</p>
<p>Dacă ai lucrat atât în condiții speciale cât și normale, centralizează perioadele an cu an folosind <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">tabelul Excel CSV pentru evidența punctajului</a> sau rulează o simulare comparativă în <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul principal cu condiții speciale</a>.</p>
`,
  },
  {
    id: 6,
    title: "Cumpărare Vechime Pensie 2026: Cost și Pași CNPP",
    excerpt:
      "Ghid practic conform Art. 6 Legea 360/2023: limita de 6 ani retroactiv, costul de 1.012,50 Lei/lună la salariul minim 4.050 Lei și contractul la CNPP.",
    category: "planificare",
    publishDate: "2026-08-10",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "stagiul-cotizare-cumparare-ani-munca",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>În 2026 poți cumpăra retroactiv <strong>maximum 6 ani</strong> de vechime pentru pensia de limită de vârstă (Art. 6 Legea 360/2023), plătind <strong>25% din salariul minim brut (1.012,50 lei/lună la 4.050 lei)</strong>. Verifică mai întâi dacă pragul de 25 ani merită investiția în <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">calculatorul de puncte și stabilitate 2026</a>.</p>

<h2>Cine poate cumpăra vechime la pensie?</h2>
<p>Contractul de asigurare socială retroactivă se poate încheia de orice persoană care nu are calitatea de pensionar, exclusiv pentru perioade anterioare în care nu a realizat stagiu de cotizare în sistemul public românesc ori într-un stat UE cu care România aplică regulamente de coordonare.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Calculează dacă atingi stagiul minim sau punctele bonus</p>
  <p class="mt-1 text-sm text-slate-700">Adaugă anii lipsă în simulatorul nostru pentru a vedea diferența exactă la pensia brută cu VPR = 81 lei.</p>
  <a href="/calculator-puncte-pensie/" class="mt-3 inline-block font-semibold text-blue-700 underline">Testează punctajul cu ani cumpărați -></a>
</aside>

<h2>Cât costă 1 lună și 1 an de vechime în 2026?</h2>
<p>Baza lunară de calcul nu poate fi mai mică decât salariul de bază minim brut pe țară garantat în plată (4.050 lei), la care se aplică cota de 25% CAS:</p>
<ul>
  <li><strong>1 lună cumpărată:</strong> 1.012,50 lei (generează 4.050 / 9.192 / 12 ≈ 0,0367 puncte/lună).</li>
  <li><strong>1 an cumpărat (12 luni):</strong> 12.150 lei (adaugă ~0,44 puncte contributive = ~35,7 lei brut/lună, plus accesul la pensia minimă de 1.281 lei dacă îți lipsea stagiul minim de 15 ani).</li>
  <li><strong>Plafon maxim (6 ani):</strong> 72.900 lei, achitabil integral sau în tranșe lunare până la data pensionării.</li>
</ul>

<h2>Atenție: capcana pensiei anticipate</h2>
<p>Contractul de cumpărare retroactivă a vechimii este valorificat legal pentru îndeplinirea stagiului minim de 15 ani și pentru creșterea pensiei la limită de vârstă, însă nu este egal cu anii necesari pentru pensia anticipată decât în condițiile stricte ale legii. Verifică prima dată calendarul oficial cu <a href="/calculator-varsta-pensionare/" class="text-blue-700 hover:underline font-semibold">instrumentul pentru vârsta standard de pensionare</a>, iar pentru pensia estimată compară rezultatul în <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul principal de pensie</a>.</p>

<figure class="my-6">
  <img src="/images/puncte-stabilitate-legea-360-2026.svg" alt="Bonusurile in puncte de stabilitate si impactul in lei la VPR 81 Lei intre 25 si 45 ani de stagiu" width="1536" height="864" loading="lazy" decoding="async" class="w-full h-auto rounded-lg border border-slate-200" />
</figure>

<h2>Ce acte depui la Casa Teritorială de Pensii?</h2>
<p>Te prezinți la Casa de Pensii de domiciliu doar cu actul de identitate în original și copie, completezi declarația pe proprie răspundere privind perioadele neasigurate și semnezi contractul cu scadența de plată stabilită.</p>
`,
  },
  {
    id: 7,
    title: "Pensia de Urmaș 2026: Drepturi, Procente și Acte",
    excerpt:
      "Cine are dreptul la pensie de urmaș în România în 2026, ce cote de 50%, 75% sau 100% primesc copiii și soțul supraviețuitor și actele necesare.",
    category: "tipuri-pensii",
    publishDate: "2026-01-15",
    modifiedDate: "2026-11-26",
    readTime: 8,
    slug: "pensia-urmas-drepturi-proceduri",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pensia de urmaș în 2026 se calculează ca procent din pensia susținătorului decedat: <strong>50% pentru 1 urmaș</strong>, <strong>75% pentru 2 urmași</strong> și <strong>100% pentru 3 sau mai mulți urmași</strong>, acordată copiilor și soțului supraviețuitor. Estimează cuantumul de bază cu <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul de pensie de stat 2026</a>.</p>

<h2>Cine are dreptul legal la pensia de urmaș?</h2>
<p>Dreptul există dacă persoana decedată era pensionar sau îndeplinea condițiile de pensionare în sistemul public, beneficiarii fiind copiii și, în condiții specifice de vârstă și durată a căsătoriei, soțul supraviețuitor.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Verifică vârsta standard și comparația cu pensia proprie</p>
  <p class="mt-1 text-sm text-slate-700">Soțul supraviețuitor trebuie să aleagă între pensia proprie și pensia de urmaș calculată ca procent.</p>
  <a href="/calculator-varsta-pensionare/" class="mt-3 inline-block font-semibold text-blue-700 underline">Verifică vârsta legală de pensionare -></a>
</aside>

<h2>Condițiile pentru copii și pentru soțul supraviețuitor</h2>
<ul>
  <li><strong>Copiii:</strong> până la 16 ani necondiționat; până la 26 ani dacă își continuă studiile într-o formă de învățământ organizată potrivit legii; pe toată durata invalidității de orice grad survenite în aceste intervale.</li>
  <li><strong>Soțul supraviețuitor (durată căsătorie):</strong> la împlinirea vârstei standard de pensionare, dacă căsătoria a durat cel puțin 15 ani (reducere proporțională între 10 și 15 ani, sau necondiționat dacă decesul s-a produs printr-un accident de muncă/boală profesională).</li>
</ul>

<h2>Ce se întâmplă cu Pilonul II și Pilonul III în caz de deces?</h2>
<p>Spre deosebire de Pilonul I public (unde se aplică procentele de 50%, 75% sau 100%), întreaga sumă acumulată în conturile private ale defunctului din Pilonul II și Pilonul III revine 100% moștenitorilor legali sau testamentari sub formă de plată unică ori transfer în contul propriu. Poți estima acumularea folosind <a href="/calculator-pensie-pilon-2/" class="text-blue-700 hover:underline font-semibold">calculatorul fondului privat Pilonul II</a> sau vezi celelalte categorii în ghidul despre <a href="/tipuri-pensii/" class="text-blue-700 hover:underline font-semibold">tipurile de pensii CNPP</a>.</p>
`,
  },
  {
    id: 8,
    title: "Reforma Pensiilor 2026: Legea 360 și Legea 141",
    excerpt:
      "Bilanțul reformei pensiilor în 2026: înghețarea VPR la 81 lei, punctele de stabilitate peste 25 ani, CASS 10% peste 3.000 lei și egalizarea Anexei 5.",
    category: "legislatie",
    publishDate: "2026-07-20",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "reforma-sistem-pensii-2026",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>În 2026, sistemul public funcționează pe baza a trei piloni normativi activi: <strong>Legea nr. 360/2023</strong> (VPR și puncte de stabilitate), <strong>Legea nr. 141/2025</strong> (menținere VPR la 81 lei și CASS 10% peste 3.000 lei) și <strong>Legea nr. 44/2026</strong> (salariul mediu brut 9.192 lei). Testează imediat impactul în <a href="/" class="text-blue-700 hover:underline font-semibold">simulatorul pensiei adaptat la 2026</a>.</p>

<h2>Ce s-a schimbat concret față de vechea legislație?</h2>
<p>Recalcularea generală și noua formulă au eliminat indicele de corecție variabil și au introdus punctele bonus pentru stagiile de muncă lungi peste 25 de ani contributivi.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Vezi cum influențează punctele de stabilitate pensia ta</p>
  <p class="mt-1 text-sm text-slate-700">Verifică separat punctele contributive vs punctele bonus obținute după 25, 30 și 35 ani de muncă.</p>
  <a href="/calculator-puncte-pensie/" class="mt-3 inline-block font-semibold text-blue-700 underline">Calculează punctele de stabilitate pentru 2026 -></a>
</aside>

<h2>Cele 4 reguli esențiale valabile în 2026</h2>
<ol>
  <li><strong>VPR înghețat la 81 lei:</strong> OUG 156/2024 și Legea 141/2025 au amânat indexările programate inițial, păstrând VPR la 81 lei.</li>
  <li><strong>Salariul mediu brut bugetar 9.192 lei:</strong> raportarea veniturilor lunare din 2026 se face la această referință (1.00 punct pe an pentru salariul mediu).</li>
  <li><strong>CASS 10% + Impozit 10% peste 3.000 lei:</strong> pensiile până în 3.000 lei rămân integral netaxate, iar sumele excedentare plătesc CASS 10% și apoi impozit 10%.</li>
  <li><strong>Pensia anticipată unificată:</strong> penalizare între 0,15% și 0,40% pe lună (detalii complete în <a href="/calculator-pensie-anticipata/" class="text-blue-700 hover:underline font-semibold">estimatorul de pensie anticipată</a>).</li>
</ol>

<figure class="my-6">
  <img src="/images/calcul-pensie-neta-brut-2026.svg" alt="Impactul CASS 10% si al impozitului de 10% asupra pensiei nete in 2026 peste pragul de 3.000 lei" width="1536" height="864" loading="lazy" decoding="async" class="w-full h-auto rounded-lg border border-slate-200" />
</figure>

<h2>Ce ar trebui să urmărești pentru pensia privată?</h2>
<p>În paralel cu modificările publice, contribuția la Pilonul II rămâne 4,75% din venitul brut. Poți proiecta separat randamentul privat în <a href="/calculator-pensie-pilon-2/" class="text-blue-700 hover:underline font-semibold">calculatorul dedicat Pilonului II</a> sau descărca <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">fișierul Excel pentru simulări pe ani</a>.</p>
`,
  },
  {
    id: 9,
    title: "Calcul Pensie PFA și Freelanceri 2026 (Plafoane)",
    excerpt:
      "Cum acumulează vechime și puncte de pensie PFA-urile, Întreprinderile Individuale și freelancerii pe baza plafoanelor CAS de 12 și 24 salarii minime.",
    category: "planificare",
    publishDate: "2026-06-15",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "calculul-pensiei-freelanceri-pfa",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Un PFA care achită în 2026 contribuția CAS minimă de 25% la plafonul de <strong>12 salarii minime brute (48.600 lei/an)</strong> acumulează anual doar <strong>0,44 puncte de pensie (~35,7 lei brut/lună de pensie per an lucrat)</strong>, mult sub un salariat cu venit echivalent. Calculează scenariul tău în <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">calculatorul de punctaj CNPP și stabilitate</a>.</p>

<h2>Cum afectează plafoanele de 12 și 24 salarii pensia unui PFA?</h2>
<p>Spre deosebire de un salariat unde CAS se plătește la întregul venit brut, persoana fizică autorizată plătește 25% raportat strict la plafonul de 12 sau 24 salarii minime (4.050 lei × 12 = 48.600 lei, respectiv 24 = 97.200 lei).</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Verifică diferența între baza minimă și plafonul dublu</p>
  <p class="mt-1 text-sm text-slate-700">Vezi exact câte puncte acumulezi în sistemul public și cum completezi decalajul prin Pilon III deductibil.</p>
  <a href="/calculator-pensie-pilon-3/" class="mt-3 inline-block font-semibold text-blue-700 underline">Calculează alternativa Pilon III cu deducere fiscală -></a>
</aside>

<h2>Simulare comparativă PFA 2026 (35 ani stagiu)</h2>
<table class="w-full text-sm border-collapse my-4">
  <thead>
    <tr class="bg-slate-100 text-left">
      <th class="border p-2.5">Opțiune CAS PFA (Salariu Minim 4.050 Lei)</th>
      <th class="border p-2.5">CAS Plătit Anual (25%)</th>
      <th class="border p-2.5">Punctaj / An (raportat la 9.192 × 12)</th>
      <th class="border p-2.5">Pensie Brută după 35 Ani (+6,25 bonus)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border p-2.5 font-semibold">Plafon 12 salarii (48.600 lei)</td><td class="border p-2.5">12.150 lei/an</td><td class="border p-2.5">0,4406 pct</td><td class="border p-2.5">21,67 pct × 81 = 1.755 lei</td></tr>
    <tr class="bg-slate-50"><td class="border p-2.5 font-semibold">Plafon 24 salarii (97.200 lei)</td><td class="border p-2.5">24.300 lei/an</td><td class="border p-2.5">0,8812 pct</td><td class="border p-2.5 font-bold text-blue-800">37,09 pct × 81 = 3.004 lei</td></tr>
  </tbody>
</table>

<figure class="my-6">
  <img src="/images/puncte-stabilitate-legea-360-2026.svg" alt="Impactul punctelor de stabilitate peste 25 de ani asupra pensiei calculate pentru PFA si salariati" width="1536" height="864" loading="lazy" decoding="async" class="w-full h-auto rounded-lg border border-slate-200" />
</figure>

<h2>De ce trebuie un PFA să urmărească atent anii contributivi?</h2>
<p>Fiecare lună cu Declarația Unică achitată integral contează ca stagiu contributiv (inclusiv la calculul punctelor de stabilitate peste 25 ani!), însă suma efectivă rezultată din Pilonul I este mică dacă rămâi toată cariera pe plafonul minim. Pentru urmărirea anuală a bazei alese folosește <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">tabelul Excel CSV pentru punctajul anual</a> sau testează rapid în <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul principal de pensie 2026</a>.</p>
`,
  },
  {
    id: 10,
    title: "Pensia Comunitară UE: Totalizare Vechime 2026",
    excerpt:
      "Ai lucrat în România și în Italia, Spania, Germania sau UK? Află cum funcționează totalizarea stagiilor, calculul pro-rata și cererea prin CNPP.",
    category: "tipuri-pensii",
    publishDate: "2026-09-12",
    modifiedDate: "2026-11-26",
    readTime: 10,
    slug: "transfer-drepturi-pensie-ue",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Sub Regulamentul European nr. 883/2004, perioadele lucrate legal în România și în alte state UE/SEE sau Marea Britanie se <strong>cumulează (totalizează)</strong> pentru îndeplinirea stagiului minim de 15 ani, iar fiecare țară plătește cota sa <strong>pro-rata</strong> direct pensionarului. Estimează partea românească cu <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul pensiei de stat din România</a>.</p>

<h2>Se pierd anii lucrați dacă ai sub 15 ani într-o singură țară?</h2>
<p>Nu. Dacă ai 9 ani în România și 11 ani în Italia (total 20 ani, peste pragul minim românesc de 15 ani), România îți recunoaște accesul la pensie prin totalizare, dar achită strict cuantumul aferent celor 9 ani cotizați în România.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Verifică vârsta legală de pensionare din România</p>
  <p class="mt-1 text-sm text-slate-700">Fiecare stat aplică propria vârstă legală de pensionare conform Anexei naționale înainte de plata cotei pro-rata.</p>
  <a href="/calculator-varsta-pensionare/" class="mt-3 inline-block font-semibold text-blue-700 underline">Verifică data legală a pensionării în România -></a>
</aside>

<h2>Cum se calculează pensia pro-rata din România în 2026?</h2>
<ol>
  <li><strong>Calculul național:</strong> punctele realizate în România × VPR 81 lei.</li>
  <li><strong>Calculul teoretic totalizat:</strong> pensia ipotetică dacă întreaga carieră (România + străinătate) s-ar fi desfășurat în România, înmulțită cu raportul (stagiu România / stagiu total cumulat).</li>
  <li><strong>Acordarea sumei mai avantajoase:</strong> CNPP acordă automat valoarea mai mare dintre pensia națională pură și cea pro-rata.</li>
</ol>

<h2>Cum și unde depui un singur dosar pentru toate țările?</h2>
<p>Depui dosarul într-un singur loc: la instituția de pensii din statul în care ai domiciliul legal actual (Casa Teritorială de Pensii din România sau INPS Italia, Seguridad Social Spania, Deutsche Rentenversicherung Germania), completând formularele de legătură (E202 / SED P2000). Pentru a centraliza separat veniturile românești înainte de depunere, utilizează <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">fișierul Excel CSV pe ani de contribuție</a> și <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">simulatorul de puncte CNPP</a>.</p>
`,
  },
  {
    id: 11,
    title: "Optimizare Fiscală Contribuții Pensie 2026",
    excerpt:
      "Cum reduci taxele în 2026 construind un venit suplimentar pentru pensie: deducere Pilon III (400 EUR angajat + angajator), Pilon II și reguli CASS.",
    category: "planificare",
    publishDate: "2026-05-18",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "optimizare-fiscala-contributii-pensie",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Optimizarea fiscală a pensiei în 2026 combină deducerea dublă de <strong>400 EUR/an salariat + 400 EUR/an angajator</strong> la Pilonul III, cota gratuită de <strong>4,75% din brut în Pilonul II</strong> și calculul pragului neimpozabil de 3.000 lei. Verifică economia anuală cu <a href="/calculator-pensie-pilon-3/" class="text-blue-700 hover:underline font-semibold">calculatorul de deducere fiscală Pilon III</a>.</p>

<h2>Cum funcționează deducerea fiscală dublă la Pilonul III?</h2>
<p>Codul Fiscal acordă o scutire anuală separată atât salariatului (400 EUR/an reținuți din brut fără impozit de 10%), cât și angajatorului (până la 400 EUR/an neconsiderat avantaj salarial în plafonul de beneficii extrasalariale).</p>

<aside class="not-prose my-6 rounded-xl border border-green-200 bg-green-50/70 p-5">
  <p class="font-bold text-slate-900">Compară Pilonul II și Pilonul III în 2026</p>
  <p class="mt-1 text-sm text-slate-700">Vezi cum crește fondul privat fără cost net de contribuție vs economisirea facultativă deductibilă.</p>
  <a href="/calculator-pensie-pilon-2/" class="mt-3 inline-block font-semibold text-green-800 underline">Estimează acum acumularile în Pilonul II -></a>
</aside>

<h2>3 pârghii fiscale legale pentru angajați și companii</h2>
<ul>
  <li><strong>Contributivitate Pilon III prin angajator:</strong> 166 lei/lună dedicați pensiei facultative îți aduc în cont mai mult net investit decât acordarea aceleiași sume sub formă de bonus salarial brut taxat cu ~42%.</li>
  <li><strong>Verificarea reținerii 4,75% Pilon II:</strong> banii merg fără impozitare suplimentară din CAS-ul obligatoriu de 25% direct în contul personal privat.</li>
  <li><strong>Monitorizarea plafonului de 3.000 lei la pensia publică:</strong> peste 3.000 lei brut în 2026, pensia publică achită 10% CASS și 10% impozit pe excedent (vezi detaliile nete în <a href="/" class="text-blue-700 hover:underline font-semibold">simulatorul principal net/brut 2026</a> și în <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">tabelul Excel calcul pensie CSV</a>).</li>
</ul>

<h2>Impact estimat pe un orizont de 20 de ani</h2>
<p>Investind constant 400 EUR/an prin deducere de angajat și alți 400 EUR/an ca beneficiu de la angajator, economisești circa 400 lei anual în taxe și acumulezi o sumă estimată de ~136.000 lei la un randament compus de 5%/an, disponibilă la 60 ani fără a afecta pensia de stat din Pilonul I.</p>
`,
  },
  {
    id: 12,
    title: "Simulare Pensie Online vs Extras Oficial CNPP",
    excerpt:
      "De ce diferă uneori simularea online rapidă față de decizia CNPP și cum poți reproduce exact punctajul lunar cu tabelul Excel și extrasul de stagiu.",
    category: "planificare",
    publishDate: "2026-06-05",
    modifiedDate: "2026-11-26",
    readTime: 8,
    slug: "simulare-pensie-instrumente-metode",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>O simulare rapidă online folosește salariul actual ca medie pe carieră, în timp ce decizia CNPP calculează exact raportul <strong>Salariu Brut Lunar / Salariu Mediu Brut (9.192 lei în 2026)</strong> pentru fiecare din cele 400+ luni lucrate. Pentru calcul exact lună de lună, folosește <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">simulatorul Excel CSV pe ani de vechime</a>.</p>

<h2>De ce apar diferențe de 5-15% față de un calcul rapid?</h2>
<p>Fluctuațiile salariale de-a lungul carierei, perioadele de șomaj, concediile de creștere a copilului, sporurile permanente înainte de 2001 și indexările salariului mediu brut național modifică punctajul anual real față de salariul din prezent.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Descarcă tabelul CSV 2026 pentru calcul exact an cu an</p>
  <p class="mt-1 text-sm text-slate-700">Pre-configurat cu salariul mediu brut bugetar 9.192 lei și VPR 81 lei, fără înregistrare sau email.</p>
  <a href="/program-excel-calcul-pensie/" class="mt-3 inline-block font-semibold text-blue-700 underline">Descarcă gratuit Program Excel Calcul Pensie -></a>
</aside>

<h2>Cum obții estimarea cu precizie de 99% în 3 pași?</h2>
<ol>
  <li><strong>Pasul 1:</strong> Descarcă raportul "Stagii de cotizare lunare" din contul tău gratuit pe portalul oficial CNPP (vezi instrucțiunile din <a href="/blog/vizualizare-vechime-munca-cnpp/" class="text-blue-700 hover:underline font-semibold">ghidul contului CNPP online</a>).</li>
  <li><strong>Pasul 2:</strong> Introdu punctajul total cumulat din adeverință plus anii de stabilitate în <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">calculatorul de puncte de pensie 2026</a> (fiecare punct valorează 81 lei brut).</li>
  <li><strong>Pasul 3:</strong> Aplică reținerile fiscale din 2026 folosind <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul principal cu estimare netă după CASS</a>.</li>
</ol>

<h2>Când merită un simulator rapid online vs Excel CSV?</h2>
<p>Folosește calculatorul online instant pentru scenarii viitoare (de exemplu: cum crește pensia dacă mai lucrezi până la 65 de ani sau dacă treci la un salariu mai mare) și tabelul Excel atunci când ai extrasul istoric CNPP în față și vrei verificare auditată a fiecărui an.</p>
`,
  },
  {
    id: 13,
    title: "Pensia Minimă Garantată 2026: 1.281 Lei (Condiții)",
    excerpt:
      "Valoarea exactă a indemnizației sociale pentru pensionari în 2026 (1.281 lei), cine se califică cu minim 15 ani de stagiu și de ce nu plătește taxe.",
    category: "tipuri-pensii",
    publishDate: "2026-04-20",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "pensie-minima-garantata-2026",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>În anul 2026, pensia minimă garantată (indemnizația socială pentru pensionari) este de <strong>1.281 lei pe lună</strong> și se acordă persoanelor cu domiciliul în România care au îndeplinit stagiul minim de cotizare contributiv de <strong>15 ani</strong>. Verifică unde te situezi cu <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul online al pensiei de stat</a>.</p>

<h2>Cum se calculează completarea statului până la 1.281 lei?</h2>
<p>Dacă pensia rezultată strict din punctele de contributivitate × 81 lei este sub 1.281 lei (de exemplu 13,5 puncte × 81 lei = 1.094 lei), bugetul de stat acoperă lunar diferența de 187 lei astfel încât beneficiarul să încaseze 1.281 lei net.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Verifică dacă ai îndeplinit stagiul minim de 15 ani</p>
  <p class="mt-1 text-sm text-slate-700">Fără cel puțin 15 ani contributivi nu se deschide dreptul la pensie de limită de vârstă și la indemnizația minimă de 1.281 lei.</p>
  <a href="/calculator-varsta-pensionare/" class="mt-3 inline-block font-semibold text-blue-700 underline">Verifică vârsta și stagiul necesar pensionării -></a>
</aside>

<h2>Condiții cumulative și taxe aplicabile în 2026</h2>
<ul>
  <li><strong>Stagiu minim contributiv:</strong> cel puțin 15 ani realizați (cu excepția pensiei de invaliditate unde pragul diferă sau dispare după Legea 360/2023). Dacă îți lipsesc luni, poți completa prin <a href="/blog/stagiul-cotizare-cumparare-ani-munca/" class="text-blue-700 hover:underline font-semibold">cumpărarea vechimii la CNPP</a>.</li>
  <li><strong>Domiciliu stabil în România:</strong> la stabilirea dreptului se iau în calcul cumulul veniturilor din pensii publice și militare.</li>
  <li><strong>Zero taxe și CASS:</strong> fiind mult sub pragul de 3.000 lei, pensia minimă de 1.281 lei este scutită 100% de impozit pe venit și de contribuția la sănătate (CASS).</li>
</ul>

<h2>De ce contează diferența între pensia minimă și punctele reale?</h2>
<p>La creșterile viitoare ale VPR sau la acordarea de ajutoare, eventuala majorare se aplică mai întâi pensiei reale rezultate din puncte, și abia dacă aceasta depășește pragul social crește suma încasată efectiv. Calculează numărul exact de puncte în <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">calculatorul pentru punctajul tău real CNPP</a>.</p>
`,
  },
  {
    id: 14,
    title: "Valoarea Punctului de Referință (VPR) 2026: 81 Lei",
    excerpt:
      "Cum a rezultat VPR de 81 lei sub Legea 360/2023, de ce a rămas înghețat în 2026 prin Legea 141/2025 și ce înseamnă pentru calculul pensiei tale.",
    category: "legislatie",
    publishDate: "2026-05-02",
    modifiedDate: "2026-11-26",
    readTime: 8,
    slug: "calcul-punct-referinta-vpr",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>În anul 2026, <strong>Valoarea Punctului de Referință (VPR) este stabilită prin lege la 81 lei</strong> (2.032 lei punctul clasic / 25 stagiul standard), fiind menținută la același nivel prin OUG nr. 156/2024 și Legea nr. 141/2025. Calculează imediat impactul în <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">calculatorul de puncte și VPR 81 lei</a>.</p>

<h2>Cum a rezultat valoarea exactă de 81 lei?</h2>
<p>Legea nr. 360/2023 a împărțit valoarea anterioară a punctului de pensie (2.032 lei) la numărul de ani ai stagiului complet de cotizare folosit ca referință matematică (25 ani): <code>2.032 / 25 = 81,28 lei</code>, rotunjit prin lege la 81 lei.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Află cât valorează punctele tale acumulate în 2026</p>
  <p class="mt-1 text-sm text-slate-700">Înmulțim automat punctele de contributivitate și punctele de stabilitate cu VPR oficial de 81 lei și deducem taxele nete.</p>
  <a href="/" class="mt-3 inline-block font-semibold text-blue-700 underline">Calculează pensia brută și netă la VPR 81 lei -></a>
</aside>

<h2>De ce s-a suspendat creșterea VPR către 91 lei în 2025-2026?</h2>
<p>Deși textul inițial al Legii 360/2023 prevedea o formulă anuală de indexare la inflație plus 50% din creșterea reală a salariului mediu brut, ordonanțele fiscale și Legea nr. 141/2025 au suspendat aplicarea indexării în 2025 și 2026 pentru echilibrarea bugetului asigurărilor sociale. Prin urmare, toate deciziile de pensionare emise în 2026 folosesc exclusiv VPR = 81 lei.</p>

<figure class="my-6">
  <img src="/images/puncte-stabilitate-legea-360-2026.svg" alt="Valoarea in lei a punctelor de stabilitate la VPR oficial de 81 lei in 2026 pentru stagii de la 25 la 45 ani" width="1536" height="864" loading="lazy" decoding="async" class="w-full h-auto rounded-lg border border-slate-200" />
</figure>

<h2>Ce valoare are fiecare an lucrat la VPR = 81 lei?</h2>
<p>La salariul mediu brut bugetar de 9.192 lei din 2026, un an de muncă aduce 1,00 punct contributiv = <strong>81 lei/lună adăugați la pensia brută viitoare</strong>. Dacă ai depășit 35 ani contributivi, fiecare an suplimentar aduce 1,00 punct contributiv + 1,00 punct stabilitate = <strong>2,00 puncte totale (162 lei brut/lună)</strong> pentru un singur an de muncă! Urmărește evoluția anuală în <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">șablonul tabelar Excel CSV pentru calculul pensiei</a>.</p>
`,
  },
  {
    id: 15,
    title: "Pensia de Invaliditate 2026: Grade, Acte și Cumul",
    excerpt:
      "Gradele I, II și III de invaliditate sub Legea 360/2023, dreptul de cumul cu munca și indemnizația de însoțitor de 50% din salariul minim brut.",
    category: "tipuri-pensii",
    publishDate: "2026-03-10",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "ghid-pensie-invaliditate-2026",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Sub Legea nr. 360/2023, pensia de invaliditate se acordă persoanelor cu capacitatea de muncă pierdută total sau cu cel puțin 50% în gradele <strong>I, II sau III</strong>, beneficiind de stagiu potențial și de drept extins de <strong>cumul cu activitatea profesională</strong>. Simulează cuantumul punctelor acumulate în <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">calculatorul de puncte de pensie CNPP</a>.</p>

<h2>Care sunt cele 3 grade de invaliditate în 2026?</h2>
<p>Expertiza medicală a capacității de muncă din cadrul CNPP stabilește gradul în funcție de autonomia personală și compatibilitatea cu piața muncii:</p>
<ul>
  <li><strong>Gradul I:</strong> deficiență funcțională gravă, capacitate de autoservire pierdută; primește suplimentar indemnizație pentru însoțitor egală cu <strong>50% din salariul minim brut pe economie (2.025 lei/lună în 2026 la minimul de 4.050 lei)</strong>.</li>
  <li><strong>Gradul II:</strong> deficiență funcțională accentuată, cu capacitate de autoservire păstrată.</li>
  <li><strong>Gradul III:</strong> deficiență funcțională medie, permițând desfășurarea activității profesionale în condiții adaptate.</li>
</ul>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Verifică stagiul realizat și tranziția la limita de vârstă</p>
  <p class="mt-1 text-sm text-slate-700">La împlinirea vârstei standard, pensia de invaliditate devine din oficiu pensie pentru limită de vârstă dacă este mai avantajoasă.</p>
  <a href="/calculator-varsta-pensionare/" class="mt-3 inline-block font-semibold text-blue-700 underline">Verifică vârsta standard de trecere la pensie -></a>
</aside>

<h2>Noutate cheie sub Legea 360/2023: stagiul minim și cumulul</h2>
<p>Noua lege elimină cerința anterioară de stagiu minim legat strict de vârstă pentru acces și permite cumularea pensiei de invaliditate cu venituri din salarii sau activități independente pentru toate gradele (în condițiile prevăzute pentru capacitatea păstrată și fără anularea încadrării medicale fără evaluare). Pentru comparația tuturor categoriilor, consultă ghidul de <a href="/tipuri-pensii/" class="text-blue-700 hover:underline font-semibold">tipuri de pensii în România</a> sau estimează pensia standard cu <a href="/" class="text-blue-700 hover:underline font-semibold">simulatorul principal online 2026</a>.</p>
`,
  },
  {
    id: 16,
    title: "Indexarea Pensiilor 2025-2026: Reguli și Înghețare",
    excerpt:
      "Cum funcționează formula legală de indexare anuală a VPR (inflație + 50% creștere reală salariu mediu) și impactul înghețării la 81 lei în 2026.",
    category: "legislatie",
    publishDate: "2026-02-10",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "indexare-pensii-2026-2026",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Mecanismul teoretic din Legea nr. 360/2023 indexează VPR anual în ianuarie cu inflația medie anuală plus 50% din creșterea reală a salariului mediu brut, însă pentru <strong>2025 și 2026 indexarea a fost înghețată prin OUG 156/2024 și Legea 141/2025 la 81 lei</strong>. Calculează pensia reală cu <a href="/" class="text-blue-700 hover:underline font-semibold">simulatorul de pensie actualizat la VPR 81 lei</a>.</p>

<h2>De ce contează diferența dintre formula legală și legea bugetului?</h2>
<p>Legile bugetare anuale pot deroga temporar de la calendarul automat de majorare din Legea 360/2023. Din acest motiv, prognoza anterioară a unui punct de 91 lei nu se aplică în 2026, valoarea oficială în plată rămânând 81 lei.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Nu depinde exclusiv de deciziile anuale de indexare</p>
  <p class="mt-1 text-sm text-slate-700">Protejează puterea de cumpărare verificând acumularea investițională din Pilonul II și Pilonul III.</p>
  <a href="/calculator-pensie-pilon-2/" class="mt-3 inline-block font-semibold text-blue-700 underline">Proiectează randamentul privat din Pilonul II -></a>
</aside>

<h2>Cum te afectează înghețarea VPR dacă ieși la pensie în 2026?</h2>
<ul>
  <li><strong>Calculul la deschidere:</strong> pensia inițială se stabilește strict la 81 lei × total puncte.</li>
  <li><strong>Salariul mediu brut nou (9.192 lei):</strong> dacă lucrezi în continuare în 2026, ai nevoie de un salariu brut de 9.192 lei pentru a obține 1,00 punct contributiv (față de 8.620 lei în 2025).</li>
  <li><strong>Efectul stabilității:</strong> anii lucrați peste 35 ani adaugă +1,00 punct bonus pe an (+81 lei), compensând parțial lipsa indexării generale. Testează în <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">calculatorul pentru puncte bonus de stabilitate</a> sau urmărește sumele în <a href="/calculator-pensie-pilon-3/" class="text-blue-700 hover:underline font-semibold">calculatorul de pensie facultativă Pilon III</a>.</li>
</ul>
`,
  },
  {
    id: 17,
    title: "Actele Necesare pentru Dosarul de Pensie 2026",
    excerpt:
      "Lista completă de documente CNPP pentru pensia la limită de vârstă, anticipată și invaliditate, termenul de soluționare de 45 zile și recuperarea arhivelor.",
    category: "planificare",
    publishDate: "2026-11-10",
    modifiedDate: "2026-11-26",
    readTime: 11,
    slug: "acte-necesare-dosar-pensionare",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pentru deschiderea pensiei în 2026 depui la Casa Teritorială de Pensii cererea tip (Anexa la normele Legii 360/2023), <strong>actul de identitate</strong>, <strong>carnetul de muncă în original</strong> și <strong>adeverințele de sporuri anterioare anului 2001</strong>, decizia fiind emisă legal în 45 de zile. Simulează cuantumul așteptat înainte cu <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul pensiei brute și nete 2026</a>.</p>

<h2>Lista completă a documentelor de bază pentru dosar</h2>
<p>Pregătirea completă a dosarului din prima zi previne amânările de plată cu 2-4 luni și asigură includerea tuturor sporurilor cu caracter permanent sau nepermanent.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Verifică ziua exactă de depunere și calculul vechimii</p>
  <p class="mt-1 text-sm text-slate-700">Dosarul se depune de regulă începând cu data îndeplinirii condițiilor de vârstă și stagiu complet sau minim.</p>
  <a href="/calculator-varsta-pensionare/" class="mt-3 inline-block font-semibold text-blue-700 underline">Verifică data exactă a ieșirii la pensie -></a>
</aside>

<h2>Documente obligatorii + acte pentru perioade speciale</h2>
<ul>
  <li><strong>Cerere de pensionare</strong> (Anexa specifică pentru limită de vârstă sau <a href="/calculator-pensie-anticipata/" class="text-blue-700 hover:underline font-semibold">pensie anticipată cu calcul de penalizare</a>).</li>
  <li><strong>Carnetul de muncă</strong> (original + copie) și eventuale adeverințe de rectificare sau de stagiu pentru perioadele anterioare datei de 1 aprilie 2001.</li>
  <li><strong>Adeverințe de venituri brute / sporuri</strong> (prime, acord global, al 13-lea salariu) pentru perioadele anterioare lui 2001, conform modelelor din Anexele Legii 360/2023.</li>
  <li><strong>Acte stare civilă & copii:</strong> certificate naștere copii (inclusiv pentru reducerea de 6 luni/copil la mame), diplomă de licență + foaie matricolă/adeverință cursuri la zi, livret militar.</li>
</ul>

<h2>Ce faci dacă vechiul angajator a intrat în faliment?</h2>
<p>Adresează-te operatorului de arhivare privat autorizat care a preluat statele de plată (lista se găsește pe site-ul Arhivelor Naționale și al CNPP județean). Până la obținerea adeverințelor, poți nota istoricul complet al contractelor în <a href="/program-excel-calcul-pensie/" class="text-blue-700 hover:underline font-semibold">tabelul Excel CSV pentru dosarul de pensie</a> pentru a verifica dacă mai lipsește vreun an.</p>
`,
  },
  {
    id: 18,
    title: "Pensionare Anticipată Fără Penalizare 2026: Excepții",
    excerpt:
      "Cine se poate pensiona mai devreme fără reducerea cuantumului în 2026: depășirea stagiului cu 8 ani, mame cu copii, grupe speciale și zone poluate.",
    category: "tipuri-pensii",
    publishDate: "2026-08-25",
    modifiedDate: "2026-11-26",
    readTime: 8,
    slug: "pensie-anticipata-fara-penalizare",
    published: true,
    author: authors.alexandruPopescu,
    image:
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>În 2026 te poți pensiona mai devreme cu <strong>0% penalizare</strong> dacă ai depășit stagiul complet cu cel puțin <strong>8 ani</strong>, dacă ai lucrat în <strong>condiții speciale/deosebite</strong>, dacă ești mamă (6 luni reducere/copil) sau ai locuit 30 ani în zone poluate. Verifică pragurile în <a href="/calculator-varsta-pensionare/" class="text-blue-700 hover:underline font-semibold">calculatorul de vârstă și reduceri legale</a>.</p>

<h2>Cum funcționează depășirea stagiului complet fără diminuare?</h2>
<p>Legea nr. 360/2023 menține regula că persoanele care depășesc stagiul complet contributiv de 35 ani cu minimum 5 ani beneficiază de diminuarea minimă de 0,15%/lună, iar de la depășirea stagiului cu cel puțin 8 ani (ex. 43 ani contributivi) reducerea scade la zero, putând ieși cu până la 5 ani mai devreme la pensie întreagă.</p>

<aside class="not-prose my-6 rounded-xl border border-orange-200 bg-orange-50/70 p-5">
  <p class="font-bold text-slate-900">Verifică dacă intri la 0% penalizare sau ce cotă lunară se aplică</p>
  <p class="mt-1 text-sm text-slate-700">Introdu vechimea ta contributivă și vârsta dorită pentru a vedea instant procentul de diminuare.</p>
  <a href="/calculator-pensie-anticipata/" class="mt-3 inline-block font-semibold text-orange-800 underline">Testează acum calculatorul de pensie anticipată -></a>
</aside>

<h2>Toate cele 4 excepții legale fără penalizare în 2026</h2>
<ul>
  <li><strong>1. Mame cu copii (Art. 51):</strong> 6 luni reducere pentru 1 copil, 1 an pentru 2 copii, până la 3 ani și 6 luni pentru 7 sau mai mulți copii (cu stagiul complet realizat).</li>
  <li><strong>2. Condiții deosebite și speciale de muncă:</strong> scădere proporțională de 2 până la 13 ani din vârsta standard fără penalizare și cu puncte bonus suplimentare.</li>
  <li><strong>3. Localități afectate de poluare remanentă:</strong> 2 ani reducere din vârsta standard fără penalizare pentru persoanele cu minimum 30 ani de domiciliu în zonele prevăzute expres de lege (Baia Mare, Copșa Mică, Zlatna, Slatina, Târnăveni etc.).</li>
  <li><strong>4. Handicap grav/accentuat preexistent:</strong> reducere substanțială de vârstă și stagiu complet conform Legii 360/2023.</li>
</ul>

<figure class="my-6">
  <img src="/images/penalizari-pensie-anticipata-2026.svg" alt="Grila de reducere lunara la pensia anticipata si pragul cu 0% penalizare conform Legii 360/2023" width="1536" height="864" loading="lazy" decoding="async" class="w-full h-auto rounded-lg border border-slate-200" />
</figure>

<h2>Alternativa dacă îți lipsesc 1-2 ani de stagiu</h2>
<p>Dacă ai fi penalizat sever cu 0,40%/lună (14-24% din pensie), merită să acoperi diferența de venit pe termen scurt cu ajutorul fondului propriu acumulat în <a href="/calculator-pensie-pilon-3/" class="text-blue-700 hover:underline font-semibold">Pilonul III de la 60 de ani</a> în loc să reduci pensia publică din <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">punctajul acumulat Pilon I</a>.</p>
`,
  },
  {
    id: 19,
    title: "Cum Verifici Vechimea Online pe Portalul CNPP",
    excerpt:
      "Ghid pas cu pas pentru crearea contului pe cnpp.ro (ghişeu CNPP sau semnătură electronică), descărcarea stagiului de cotizare și verificarea D112.",
    category: "planificare",
    publishDate: "2026-05-15",
    modifiedDate: "2026-11-26",
    readTime: 10,
    slug: "vizualizare-vechime-munca-cnpp",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pe portalul oficial <strong>cnpp.ro</strong> poți descărca gratuit extrasul complet de <strong>stagii de cotizare lunare</strong> și punctajele declarate prin Declarația 112. După descărcarea PDF-ului oficial, calculează imediat pensia netă cu <a href="/" class="text-blue-700 hover:underline font-semibold">simulatorul principal de pensie 2026</a>.</p>

<h2>Cum activezi contul online CNPP în 2026?</h2>
<p>Accesul la datele personale de contribuții (Datele mele -> Stagii de cotizare) este disponibil fie prin identificare fizică o singură dată la ghișeul Casei de Pensii, fie 100% online cu semnătură electronică calificată.</p>

<aside class="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50/70 p-5">
  <p class="font-bold text-slate-900">Importă vechimea din raportul CNPP într-un tabel editabil</p>
  <p class="mt-1 text-sm text-slate-700">Folosește șablonul nostru CSV ca să aduni rapid punctajele pe ani și să verifici dacă ai atins pragul de 25-35 ani.</p>
  <a href="/program-excel-calcul-pensie/" class="mt-3 inline-block font-semibold text-blue-700 underline">Descarcă tabelul Excel Calcul Pensie 2026 -></a>
</aside>

<h2>Ce verifici obligatoriu în extrasul descărcat?</h2>
<ol>
  <li><strong>Total luni și ani contributivi:</strong> asigură-te că nu lipsesc luni între schimbările de job și că totalul include lunile lucrate corect după 2001.</li>
  <li><strong>Venitul brut lunar declarat în D112:</strong> compară fluturașii de salariu cu suma brută declarată de angajator.</li>
  <li><strong>Contribuția virată spre Pilonul II:</strong> verifică dacă fondul privat primește constant 4,75% (poți verifica paralel și cu <a href="/calculator-pensie-pilon-2/" class="text-blue-700 hover:underline font-semibold">calculatorul soldului privat Pilon II</a>).</li>
  <li><strong>Punctajul total acumulat până la zi:</strong> introdu suma punctelor în <a href="/calculator-puncte-pensie/" class="text-blue-700 hover:underline font-semibold">calculatorul de puncte și VPR 81 lei</a> pentru a verifica pensia acumulată deja.</li>
</ol>

<h2>Cum corectezi o lună lipsă din portalul CNPP?</h2>
<p>Dacă observi o lună neînregistrată deși ai lucrat cu contract individual de muncă, solicită de la angajator adeverință cu statele de plată și depunerea unei declarații rectificative D112 către ANAF, care sincronizează baza de date CNPP în câteva săptămâni.</p>
`,
  },
  {
    id: 20,
    title: "Pilonul II în 2026: Cotă 4,75%, Randament și Moștenire",
    excerpt:
      "Tot ce trebuie să știi despre pensia privată obligatorie Pilon II în 2026: cota de 4,75% din brut, cine participă, cum retragi banii și moștenirea.",
    category: "tipuri-pensii",
    publishDate: "2026-05-30",
    modifiedDate: "2026-11-26",
    readTime: 9,
    slug: "pilonul-2-modificari-legislative",
    published: true,
    author: authors.elenaRadu,
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>În anul 2026, Pilonul II redirecționează obligatoriu <strong>4,75% din salariul tău brut</strong> (din CAS-ul total de 25%) către un cont privat investit supravegheat de ASF, fiind <strong>100% proprietate personală și moștenibilă</strong>. Estimează suma acumulată până la 65 ani cu <a href="/calculator-pensie-pilon-2/" class="text-blue-700 hover:underline font-semibold">calculatorul pensiei private Pilonul II</a>.</p>

<h2>Cum influențează cota de 4,75% salariul net și pensia de stat?</h2>
<p>Viramentul spre Pilonul II nu scade salariul net din mână, ci împarte CAS-ul de 25% în 20,25% către bugetul public Pilon I și 4,75% către fondul privat pe numele tău. Punctajul public pe Pilonul I este ajustat proporțional, însă suma din Pilonul II se investește cu dobândă compusă pe decenii și rămâne activ moștenibil în familie.</p>

<aside class="not-prose my-6 rounded-xl border border-green-200 bg-green-50/70 p-5">
  <p class="font-bold text-slate-900">Vezi cât poți strânge în contul tău Pilon II și Pilon III</p>
  <p class="mt-1 text-sm text-slate-700">Simulează separat fondul obligatoriu (4,75%) și verifică suplimentarea opțională cu deducere de taxe.</p>
  <a href="/calculator-pensie-pilon-2/" class="mt-3 inline-block font-semibold text-green-800 underline">Calculează acum soldul Pilonul II 2026 -></a>
</aside>

<h2>Cum afli la ce fond Pilon II ești și cum retragi banii?</h2>
<ol>
  <li><strong>Verificare fond alocat:</strong> intră pe site-ul ASF ("Află la ce fond de pensii ești") cu CNP și nume, apoi instalează aplicația administratorului tău (NN, Allianz-Țiriac, Metropolitan Life, BCR, BRD, Generali sau Carpathia) pentru a vedea soldul exact la zi.</li>
  <li><strong>Condiția retragerii:</strong> odată cu deschiderea dreptului de pensie publică pentru limită de vârstă (verifică data în <a href="/calculator-varsta-pensionare/" class="text-blue-700 hover:underline font-semibold">calculatorul pentru vârsta standard de pensionare</a>), depui decizia CNPP la administrator pentru plată unică sau tranșe eșalonate.</li>
  <li><strong>Moștenirea contului:</strong> în cazul decesului participantului înainte de încasare, moștenitorii legali primesc suma cumulată integrală din unități de fond fără pierdere.</li>
</ol>

<h2>De ce merită să combini Pilonul II cu Pilonul III și simulatorul total?</h2>
<p>Pentru salariații din medii IT, construcții ori privat care vor o independență mai mare la 60 de ani, suplimentarea prin <a href="/calculator-pensie-pilon-3/" class="text-blue-700 hover:underline font-semibold">simulatorul Pilonului III deductibil fiscal</a> și urmărirea anuală în <a href="/" class="text-blue-700 hover:underline font-semibold">calculatorul complet Pilon I + taxe 2026</a> oferă imaginea reală a venitului de la pensie.</p>
`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return staticArticles.find((a) => a.slug === slug && a.published);
}

export function getArticlesByCategory(category: string): Article[] {
  if (!category || category === "all") {
    return staticArticles.filter((a) => a.published);
  }
  return staticArticles.filter((a) => a.published && a.category === category);
}

export function searchArticles(term: string): Article[] {
  const q = term.trim().toLowerCase();
  if (!q) return staticArticles.filter((a) => a.published);
  return staticArticles.filter(
    (a) =>
      a.published &&
      (a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        (a.content || "").toLowerCase().includes(q))
  );
}

export function getRecentArticles(limit = 6): Article[] {
  return staticArticles
    .filter((a) => a.published)
    .slice()
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}
