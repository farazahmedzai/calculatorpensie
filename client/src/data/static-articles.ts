// Static articles data for Netlify deployment
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
  readTime: number;
  slug: string;
  published: boolean;
  content?: string;
  image?: string;
  author: Author;
}

export const authors = {
  alexandruPopescu: {
    name: "Alexandru Popescu",
    role: "Expert Asigurări Sociale & Fost Consultant CNPP",
    bio: "Alexandru are o experiență de peste 15 ani în consultanță privind asigurările sociale și legislația pensiilor din România. Fost funcționar CNPP, licențiat al ASE București, el s-a specializat în optimizarea dosarelor de pensionare și în interpretarea noii Legi 360/2023.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  elenaRadu: {
    name: "Dr. Elena Radu",
    role: "Economist Financiar & Expert Pensii Private",
    bio: "Elena este doctor în economie și lector universitar la Facultatea de Finanțe, Asigurări, Bănci și Burse de Valori (ASE București). Cu acreditare CFA, ea este specializată în planificare financiară pe termen lung, optimizarea portofoliilor de pensionare și auditul pilonilor de pensii private.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
};

export const staticArticles: Article[] = [
  {
    id: 1,
    title: "Top 5 Greșeli de Evitat în Planificarea Pensiei",
    excerpt: "Descoperă cele mai comune greșeli pe care românii le fac când își planifică pensia și cum să le eviți pentru un viitor financiar sigur.",
    category: "planificare",
    publishDate: "2026-03-15",
    readTime: 8,
    slug: "top-5-greseli-planificare-pensie",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Planificarea pensiei este una dintre cele mai importante decizii financiare pe care le poți lua pe parcursul vieții active. Din păcate, mulți români fac greșeli costisitoare care le afectează dramatic nivelul de trai la bătrânețe. Iată topul celor mai mari greșeli de planificare și metodele prin care le poți evita:</p>

<h3>1. Amânarea începerii economisirii</h3>
<p>Mulți consideră că pensia este prea îndepărtată pentru a reprezenta o prioritate la 20 sau 30 de ani. Însă, datorită dobânzii compuse, sumele mici investite devreme valorează mult mai mult decât sumele mari investite târziu. Fiecare an de întârziere crește efortul financiar necesar ulterior.</p>

<h3>2. Dependența exclusivă de Pilonul I (Pensia de Stat)</h3>
<p>Sistemul public de pensii funcționează pe principiul solidarității (PAYG) și se confruntă cu presiuni demografice masive din cauza îmbătrânirii populației. Pilonul I oferă doar o siguranță de bază, iar rata de înlocuire a salariului va scădea. Este absolut esențial să îți creezi surse suplimentare de venit prin pensiile private (Pilonul II și III) și alte investiții.</p>

<h3>3. Ignorarea impactului inflației pe termen lung</h3>
<p>O sumă de bani care pare mare astăzi își va pierde din puterea de cumpărare în 20 sau 30 de ani din cauza inflației. Când îți calculezi obiectivele de pensionare, folosește întotdeauna valori ajustate la inflație și alege instrumente de investiții care depășesc rata medie a inflației.</p>

<h3>4. Lipsa unei strategii de optimizare fiscală</h3>
<p>Statul român oferă stimulente fiscale excelente pentru economisirea voluntară. De exemplu, contribuțiile la Pilonul III sunt deductibile fiscal în limita a 400 de euro pe an. Neutilizarea acestor avantaje reprezintă o pierdere financiară directă. Poți citi mai multe detalii despre reglementările oficiale pe portalul <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Casei Naționale de Pensii Publice (CNPP)</a>.</p>

<h3>5. Lipsa diversificării portofoliului</h3>
<p>Păstrarea tuturor economiilor în depozite bancare simple cu randamente mici sau exclusiv în imobiliare este riscant. Un portofoliu optim de pensionare include acțiuni, obligațiuni de stat, fonduri de pensii private și ETF-uri diversificate global.</p>

<p>Pentru a evita aceste erori, recomandăm monitorizarea regulată a stagiului de cotizare și efectuarea de simulări clare. Consultă <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Portalul Legislativ Oficial</a> pentru a fi la curent cu toate actele normative și folosește instrumentele noastre de simulare gratuită pentru a-ți stabili pașii strategici următori.</p>
`
  },
  {
    id: 2,
    title: "Ghid Complet: Cum să Calculezi Pensia de Stat în 2025",
    excerpt: "Înțelege formula oficială de calcul a pensiei de stat, punctajul anual și cum să îți calculezi drepturile de pensie conform legislației actuale.",
    category: "legislatie",
    publishDate: "2026-04-10",
    readTime: 12,
    slug: "ghid-calcul-pensie-stat-2025",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Formula de calcul a pensiei de stat în România se bazează pe sistemul de puncte reglementat prin lege. Începând cu anul 2025, valoarea punctului de pensie este fixată la <strong>2.031 Lei</strong>, fiind calculată conform noii legi a pensiilor nr. 360/2023. Totodată, Valoarea Punctului de Referință (VPR) este stabilită la <strong>91 Lei</strong>, asigurând o indexare procentuală substanțială a veniturilor pentru milioane de pensionari.</p>

<h3>Care sunt pașii oficiali de calcul?</h3>
<p>Pentru a determina valoarea brută a pensiei de stat pe care o vei primi lunar, algoritmul oficial al CNPP aplică un sistem format din trei piloni principali de calcul:</p>

<div class="bg-slate-50 p-4 rounded-lg my-6 border border-slate-200">
  <p class="font-bold text-slate-900">Formula Generală CNPP:</p>
  <p class="font-mono text-lg text-blue-700 font-bold">Pensia Brută = Număr Total de Puncte × VPR (91 Lei)</p>
  <p class="text-xs text-slate-500 mt-1">Unde <strong>Număr Total de Puncte</strong> este format din punctele de contributivitate + punctele de stabilitate (bonus) + punctele asimilate.</p>
</div>

<h3>1. Determinarea Punctajului de Contributivitate</h3>
<p>Punctajul de contributivitate reprezintă numărul de puncte pe care l-ai acumulat prin contribuțiile tale directe plătite din salarii pe parcursul carierei active. În fiecare lună, salariul tău brut este raportat la salariul mediu brut pe economie aprobat pentru bugetul de asigurări sociale din acea lună. 
<br />
De exemplu, dacă în luna respectivă salariul tău brut este egal cu câștigul mediu brut național (aprox 8,417 RON în 2025), vei acumula exact <strong>1.0 punct</strong> pentru acea lună. Dacă salariul tău brut este jumătate din media pe economie, acumulezi <strong>0.5 puncte</strong>. Toate punctele lunare se însumează și se împart la 12 pentru a determina punctajul tău anual.</p>

<h3>2. Noua Bonificație: Punctele de Stabilitate (Fidelitate)</h3>
<p>Reforma Legii 360/2023 a introdus punctele de stabilitate pentru a stimula salariații să rămână activi peste pragul de 25 de ani de muncă. Aceste puncte se acordă automat în funcție de stagiul de cotizare total realizat:</p>
<ul class="list-disc ml-6 space-y-1">
  <li><strong>0,50 puncte pe an</strong> pentru fiecare an lucrat în intervalul 26 - 30 de ani de cotizare;</li>
  <li><strong>0,75 puncte pe an</strong> pentru fiecare an lucrat în intervalul 31 - 35 de ani de cotizare;</li>
  <li><strong>1,00 punct pe an</strong> pentru fiecare an lucrat ce depășește stagiul de 35 de ani.</li>
</ul>
<p>Acest bonus direct este extrem de valoros. De exemplu, un stagiu de cotizare de 38 de ani adaugă automat <code>(5 × 0.5) + (5 × 0.75) + (3 × 1.0) = 2.5 + 3.75 + 3 = 9.25 puncte</code> direct în dosar, generând un plus de 841 Lei brut pe lună la pensie!</p>

<h3>3. Punctele Asimilate (Perioade Necontributive)</h3>
<p>Statul oferă de asemenea puncte pentru perioadele în care nu s-au plătit contribuții, dar care sunt recunoscute ca stagiu legal (facultatea absolvită la zi cu diplomă, stagiul militar obligatoriu, concediul de creștere a copilului). Fiecare an asimilat se bonifică cu <strong>0.25 puncte pe an</strong>.</p>

<h3>Exemple Practice de Calcul (Raportat la VPR 2025 = 91 Lei)</h3>
<p>Să analizăm trei scenarii posibile de pensionare pentru a înțelege exact cum se aplică formula:</p>

<div class="space-y-4 my-6">
  <div class="border p-4 rounded-lg bg-slate-50">
    <strong class="text-blue-700 block">Scenariul A (Stagiu Minim - 15 ani de muncă):</strong>
    <p class="text-sm text-gray-700 mt-1">
      O persoană care a lucrat exact 15 ani cu un salariu constant egal cu salariul mediu brut pe economie. 
      <br />
      • Puncte contributive: 15 ani × 1.0 punct = 15 puncte.
      <br />
      • Puncte de stabilitate: 0 puncte (deoarece stagiul este sub 25 de ani).
      <br />
      • Total puncte: 15.
      <br />
      • <strong>Pensie Brută: 15 puncte × 91 Lei = 1.365 Lei/lună.</strong>
    </p>
  </div>

  <div class="border p-4 rounded-lg bg-slate-50">
    <strong class="text-blue-700 block">Scenariul B (Stagiu Complet - 35 ani de muncă):</strong>
    <p class="text-sm text-gray-700 mt-1">
      O persoană cu 35 de ani de muncă, cu un salariu egal cu salariul mediu brut pe economie.
      <br />
      • Puncte contributive: 35 ani × 1.0 punct = 35 puncte.
      <br />
      • Puncte de stabilitate: (5 × 0.5) + (5 × 0.75) = 2.5 + 3.75 = 6.25 puncte.
      <br />
      • Total puncte: 41.25.
      <br />
      • <strong>Pensie Brută: 41.25 puncte × 91 Lei = 3.753 Lei/lună.</strong>
    </p>
  </div>
</div>

<h3>Cum se impozitează pensiile în România?</h3>
<p>Pensiile din sistemul public sunt scutite complet de impozit pe venit pentru pragurile de până la <strong>3.000 Lei net</strong>. Pentru sumele care depășesc pragul de 3.000 Lei, se aplică un impozit pe venit de <strong>10%</strong> exclusiv pentru partea care depășește acest prag. De exemplu, la o pensie brută de 3.500 Lei, impozitul de 10% se aplică doar pentru diferența de 500 Lei, rezultând un impozit de 50 Lei și o pensie netă de 3.450 Lei.</p>

<p>Pentru a verifica istoricul tău oficial de cotizare și salariile înregistrate în baza de date națională a asiguraților, vizitează secțiunea dedicată de pe portalul <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP (Casa Națională de Pensii Publice)</a>. Pentru a studia textul legii oficiale complete, consultă monitorul legislativ pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro (Portalul Legislativ al Ministerului Justiției)</a>.</p>
`
  },
  {
    id: 3,
    title: "Pilonul III: Avantaje Fiscale și Strategii de Investiție",
    excerpt: "Explorează beneficiile pensiei facultative (Pilonul III) și descoperă cum să îți optimizezi contribuțiile pentru reduceri fiscale maxime.",
    category: "tipuri-pensii",
    publishDate: "2026-02-28",
    readTime: 10,
    slug: "pilonul-3-avantaje-fiscale-strategii",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pilonul III de pensii oferă românilor o opțiune excelentă de a economisi suplimentar pentru perioada de pensionare, având în același timp beneficii fiscale imediate garantate prin lege.</p>

<h3>Ce este Pilonul III de pensii?</h3>
<p>Spre deosebire de Pilonul I (pensia de stat obligatorie) și Pilonul II (pensia privată obligatorie, unde se redirecționează o parte din CAS), Pilonul III reprezintă <strong>pensia privată facultativă</strong>. Oricine înregistrează venituri profesionale asimilate poate alege să contribuie individual la un fond administrat privat ales, contribuțiile fiind opționale și flexibile ca valoare.</p>

<h3>Deductibilitatea fiscală de 400 de Euro</h3>
<p>Cel mai mare avantaj pe termen scurt este facilitatea fiscală: contribuțiile tale la Pilonul III sunt <strong>deductibile din impozitul pe venit în limita a 400 de Euro pe an</strong>. Aceeași limită de 400 de Euro se aplică și pentru angajatorul tău, dacă acesta alege să contribuie pentru tine ca beneficiu extra-salarial, suma fiind scutită de taxe salariale.</p>

<div class="bg-blue-50 p-4 rounded-lg my-6 border border-blue-200 text-sm">
  <p class="font-bold">Calculul economiei:</p>
  <p>Dacă alegi să contribui cu aproximativ 160 de Lei lunar (echivalentul a 400 de Euro anual), statul îți returnează impozitul pe venit aferent acestei sume (10%), adică vei economisi direct 200 de Lei pe an din taxe, banii fiind plasați integral în contul tău de acumulare personal.</p>
</div>

<h3>Condiții de retragere a fondurilor</h3>
<p>Banii acumulați în contul tău individual de Pilon III pot fi accesați în următoarele condiții stabilite prin lege:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Împlinirea vârstei de 60 de ani;</li>
  <li>Efectuarea a cel puțin 90 de contribuții lunare (echivalentul a 7 ani și jumătate);</li>
  <li>Caz de invaliditate sau deces (banii fiind transferați moștenitorilor legali).</li>
</ul>

<p>Află mai multe detalii despre regulile aplicabile și lista administratorilor de fonduri autorizați accesând site-ul oficial <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP</a> sau citind detaliile legii pensiilor private pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Portalul Legislativ Just.ro</a>.</p>
`
  },
  {
    id: 4,
    title: "Pensia Anticipată: Când Poți Ieși Mai Devreme la Pensie",
    excerpt: "Află în ce condiții poți opta pentru pensia anticipată, care sunt penalizările și cum să îți calculezi cuantumul pensiei reduse.",
    category: "legislatie",
    publishDate: "2025-11-20",
    readTime: 7,
    slug: "pensie-anticipata-conditii-penalizari",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pensia anticipată reprezintă opțiunea legală prin care te poți pensiona cu maximum 5 ani înainte de împlinirea vârstei standard, dar cu anumite condiții stricte de cotizare și cu o penalizare aplicabilă cuantumului lunar.</p>

<h3>Condiții de eligibilitate în 2025</h3>
<p>Pentru a solicita pensia anticipată, solicitantul trebuie să fi realizat stagiul complet de cotizare prevăzut de lege (35 de ani pentru bărbați și 30-33 de ani pentru femei) sau să îl fi depășit cu până la 8 ani. Vârsta minimă este de 60 de ani pentru bărbați și 58 de ani pentru femei în 2025.</p>

<h3>Mecanismul de penalizare</h3>
<p>Penalizarea se calculează sub formă de procent scăzut din valoarea pensiei complete pentru fiecare lună de anticipare. Conform noilor reglementări, penalizarea este cuprinsă între <strong>0,25% și 0,75% pentru fiecare lună</strong>, în funcție de numărul de ani cu care a fost depășit stagiul complet de cotizare.</p>

<p>Pentru a depune dosarul și a verifica documentele necesare, vizitează <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">site-ul CNPP</a>. Detaliile legislative se regăsesc în textul Legii 360/2023 publicat pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 5,
    title: "Condiții Speciale de Muncă: Impact asupra Pensiei",
    excerpt: "Înțelege cum condițiile deosebite și speciale de muncă influențează calculul pensiei și vârsta de pensionare în România.",
    category: "legislatie",
    publishDate: "2025-10-15",
    readTime: 9,
    slug: "conditii-speciale-munca-impact-pensie",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Persoanele care își desfășoară activitatea profesională în medii cu grad ridicat de risc, zgomot, noxe sau solicitare fizică/psihică crescută beneficiază de încadrări speciale (grupe de muncă) care reduc vârsta de pensionare și adaugă bonusuri de vechime.</p>

<h3>Diferența dintre condițiile deosebite și speciale</h3>
<p><strong>Condițiile deosebite (Grupa a II-a):</strong> Activități cu noxe moderate sau solicitare fizică medie. Oferă o reducere a vârstei de 4 luni pentru fiecare an lucrat în aceste condiții.</p>
<p><strong>Condițiile speciale (Grupa I):</strong> Activități în subteran, radiologie, aviație civilă, metalurgie sau medii cu noxe extreme. Oferă o reducere a vârstei de 6 luni pentru fiecare an lucrat în aceste condiții.</p>

<p>Mai multe detalii despre încadrările oficiale de la CNPP se găsesc pe <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">site-ul oficial CNPP</a>. Actele normative complete pot fi studiate pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 6,
    title: "Stagiul de Cotizare: Cum să Îți Cumperi Ani de Muncă",
    excerpt: "Descoperă metodele legale prin care poți completa stagiul de cotizare necesar pentru pensia completă prin cumpărarea de ani de muncă.",
    category: "planificare",
    publishDate: "2025-12-05",
    readTime: 11,
    slug: "stagiul-cotizare-cumparare-ani-munca",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Dacă te apropii de vârsta standard de pensionare dar îți lipsesc câțiva ani pentru a atinge stagiul minim (15 ani) sau cel complet (35 ani), statul român îți permite să achiziționezi retroactiv vechime în muncă prin semnarea unui contract de asigurare socială.</p>

<h3>Condițiile pentru cumpărarea de vechime</h3>
<p>Poți cumpăra vechime doar pentru perioade din trecut în care nu ai fost asigurat (nu ai avut contract de muncă, nu ai fost PFA etc.). Limita maximă este de <strong>5 ani retroactiv</strong>. Plata contribuției se face raportat la salariul minim brut de la data semnării contractului, cota fiind de 25% (CAS).</p>

<p>Pentru a demara procedura, trebuie să te adresezi Casei Județene de Pensii. Informații oficiale detaliate sunt disponibile pe <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">site-ul CNPP</a>. Reglementările oficiale se regăsesc pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 7,
    title: "Pensia de Urmaș: Drepturi și Proceduri de Solicitare",
    excerpt: "Ghid complet despre pensia de urmaș în România: cine are dreptul, cum se calculează și care sunt pașii pentru obținerea acesteia.",
    category: "tipuri-pensii",
    publishDate: "2025-08-10",
    readTime: 8,
    slug: "pensia-urmas-drepturi-proceduri",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pensia de urmaș este menită să asigure o protecție financiară familiei (soț supraviețuitor și copii) după decesul unui pensionar sau al unui asigurat din sistemul public.</p>

<h3>Cine are dreptul la pensia de urmaș?</h3>
<p><strong>Copiii:</strong> Până la vârsta de 16 ani (sau 26 de ani dacă își continuă studiile universitare) ori fără limită de vârstă dacă s-au pensionat din invaliditate înainte de împlinirea acestor limite.</p>
<p><strong>Soțul supraviețuitor:</strong> Are dreptul la pensie la împlinirea vârstei standard de pensionare, cu condiția ca durata căsătoriei să fi fost de cel puțin 15 ani.</p>

<p>Pentru formulare și cereri, accesează <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">portalul oficial CNPP</a>. Detalii despre cotele de calcul se găsesc pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 8,
    title: "Reforma Sistemului de Pensii: Ce Se Schimbă în 2025",
    excerpt: "Analizează cele mai recente modificări legislative în sistemul de pensii român și cum vor afecta aceasta drepturile tale viitoare.",
    category: "legislatie",
    publishDate: "2026-01-15",
    readTime: 13,
    slug: "reforma-sistem-pensii-2025",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Anul 2025 aduce stabilitate dar și noi indexări în sistemul public de pensii, ca urmare a implementării depline a noii Legi a pensiilor nr. 360/2023.</p>

<h3>Puncte de interes în 2025:</h3>
<p>Eliminarea inechităților dintre genuri prin egalizarea graduală a vârstei de pensionare și aplicarea formulei bazate pe VPR (Valoarea Punctului de Referință) de 91 de Lei sunt pilonii noii recalculări.</p>

<p>Citește detaliile oficiale de la CNPP pe <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP</a>. Textul legislativ integral este disponibil pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 9,
    title: "Calculul Pensiei pentru Freelanceri și PFA",
    excerpt: "Înțelege specificul calculului pensiei pentru persoanele fizice autorizate și freelanceri: contribuții, stagiu și drepturi speciale.",
    category: "planificare",
    publishDate: "2025-07-20",
    readTime: 10,
    slug: "calculul-pensiei-freelanceri-pfa",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Persoanele care obțin venituri din activități independente (PFA, Profesii Libere, Drepturi de Autor) au reguli specifice pentru asigurarea în sistemul public de pensii.</p>

<h3>Obligativitatea plății CAS</h3>
<p>Dacă veniturile tale depășesc plafonul anual de 12 sau 24 de salarii minime brute, ești obligat să plătești CAS (25%) raportat la un plafon ales de tine, acumulând astfel vechime legală.</p>

<p>Pentru detalii privind plata și declararea, accesează <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">portalul CNPP</a>. Codul fiscal actualizat este publicat pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 10,
    title: "Transferul Drepturilor de Pensie între Țări UE",
    excerpt: "Ghid pentru românii care au lucrat în străinătate: cum să îți transferi drepturile de pensie și să beneficiezi de totalitate.",
    category: "tipuri-pensii",
    publishDate: "2025-06-15",
    readTime: 15,
    slug: "transfer-drepturi-pensie-ue",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Dacă ai lucrat atât în România cât și în alte state din Uniunea Europeană, perioadele tale de cotizare se cumulează pentru a-ți asigura dreptul la pensie comunitară.</p>

<h3>Principiul totalizării perioadelor</h3>
<p>Fiecare stat în care ai cotizat cel puțin 1 an îți va plăti o pensie proporțională (pro-rata) la împlinirea vârstei lor legale de pensionare.</p>

<p>Informații detaliate despre cererile internaționale sunt furnizate de <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP</a>. Regulamentul european 883/2004 se găsește pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 11,
    title: "Optimizarea Fiscală a Contribuțiilor la Pensie",
    excerpt: "Strategii avansate pentru optimizarea fiscală a contribuțiilor la toate piloanele de pensie și maximizarea beneficiilor fiscale.",
    category: "planificare",
    publishDate: "2025-09-12",
    readTime: 12,
    slug: "optimizare-fiscala-contributii-pensie",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Optimizarea modului în care distribui economiile între Pilonul I, II, III și conturile de investiții de tip ETF/Acțiuni îți poate maximiza averea la pensionare.</p>

<p>Deductibilitatea primilor 400 de Euro în Pilonul III și taxarea redusă sunt elemente esențiale.</p>

<p>Află ghidurile oficiale pe <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">site-ul CNPP</a>. Detalii despre impozitare sunt pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 12,
    title: "Simulare Pensie: Instrumente și Metode de Calcul",
    excerpt: "Prezentare detaliată a instrumentelor disponibile pentru simularea pensiei și metodele cele mai precise de estimare a veniturilor viitoare.",
    category: "tipuri-pensii",
    publishDate: "2025-05-18",
    readTime: 9,
    slug: "simulare-pensie-instrumente-metode",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Planificarea pensionării cere acuratețe. Pe lângă calculatoarele independente precum CalculatorPensie.com, utilizatorii au la dispoziție instrumente avansate.</p>

<p>Utilizarea portalului oficial al CNPP oferă extrasul tău real din baza de date națională.</p>

<p>Pentru detalii de creare a contului vizitează <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP</a>. Normele de securitate ale datelor se află pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 13,
    title: "Pensia Minimă Garantată în 2025: Condiții și Cuantum",
    excerpt: "Află care este valoarea pensiei minime garantate (indemnizația socială pentru pensionari) în 2025 și cine este eligibil pentru a o primi.",
    category: "tipuri-pensii",
    publishDate: "2025-04-20",
    readTime: 9,
    slug: "pensie-minima-garantata-2025",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Indemnizația socială pentru pensionari, cunoscută public sub denumirea de <strong>pensie minimă garantată</strong>, este un sprijin social critic oferit de statul român. Scopul său este de a asigura un nivel de trai minim decent pentru toți pensionarii din sistemul public de pensii ale căror contribuții pe parcursul vieții active nu ating pragul social stabilit prin lege.</p>

<h3>Valoarea Pensiei Minime în 2025 și 2026</h3>
<p>Începând cu anul 2025, cuantumul pensiei minime garantate în România este stabilit la valoarea oficială de <strong>1.281 Lei</strong> pe lună. Guvernul a decis menținerea acestui plafon pentru a proteja categoriile vulnerabile de pensionari împotriva inflației și a creșterii prețurilor la bunurile de consum de bază.</p>

<div class="overflow-x-auto my-6">
  <table className="w-full text-sm text-left border border-slate-200">
    <thead className="bg-slate-100">
      <tr>
        <th className="border p-2">Anul</th>
        <th className="border p-2">Valoarea Pensiei Minime (Lei)</th>
        <th className="border p-2">Creștere Procentuală (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2">2020</td>
        <td className="border p-2">800 Lei</td>
        <td className="border p-2">+14.0%</td>
      </tr>
      <tr>
        <td className="border p-2">2021</td>
        <td className="border p-2">800 Lei</td>
        <td className="border p-2">0.0% (Înghețat)</td>
      </tr>
      <tr>
        <td className="border p-2">2022</td>
        <td className="border p-2">1.000 Lei</td>
        <td className="border p-2">+25.0%</td>
      </tr>
      <tr>
        <td className="border p-2">2023</td>
        <td className="border p-2">1.125 Lei</td>
        <td className="border p-2">+12.5%</td>
      </tr>
      <tr>
        <td className="border p-2">2024</td>
        <td className="border p-2">1.281 Lei</td>
        <td className="border p-2">+13.8%</td>
      </tr>
      <tr class="bg-blue-50">
        <td className="border p-2 font-bold">2025</td>
        <td className="border p-2 font-bold">1.281 Lei</td>
        <td className="border p-2">Menținut (HG Oficială)</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Cum se aplică mecanismul de compensare socială?</h3>
<p>Este esențial de înțeles că pensia minimă nu este o categorie specială de pensie, ci un <strong>mecanism de ajustare și protecție socială</strong>. În momentul pensionării sau al recalculării, Casa de Pensii calculează pensia pe baza contributivității reale (salariile brute obținute și stagiul de cotizare). Dacă în urma calculului rezultă o sumă mai mică de 1.281 Lei (de exemplu, 900 Lei), statul român intervine și acoperă diferența sub forma unei <em>indemnizații sociale pentru pensionari</em> (în valoare de 381 Lei, în acest exemplu). Astfel, suma netă pe care pensionarul o primește pe card sau prin poștă va fi întotdeauna de exact 1.281 Lei lunar.</p>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-5 my-6">
  <h4 class="font-bold text-slate-800 mt-0">Exemplu Practic de Completare a Pensiei:</h4>
  <p class="text-sm text-gray-700 mb-0">
    • Pensia calculată pe baza punctelor de contributivitate: <strong>850 Lei</strong><br />
    • Diferența plătită din bugetul de stat (indemnizația socială): <strong>431 Lei</strong><br />
    • <strong>Suma finală încasată lunar de beneficiar: 1.281 Lei</strong>
  </p>
</div>

<h3>Cine are dreptul la pensia minimă garantată?</h3>
<p>Pentru a beneficia de acoperirea automată până la plafonul minim de 1.281 Lei, solicitantul trebuie să îndeplinească cumulativ următoarele criterii legale:</p>
<ul class="list-disc ml-6 space-y-2 text-gray-700">
  <li>Să aibă calitatea oficială de pensionar în sistemul unitar public de pensii (indiferent că este vorba despre pensie pentru limită de vârstă, pensie anticipată, pensie de invaliditate sau pensie de urmaș);</li>
  <li>Să aibă domiciliul stabil sau rezidența legală pe teritoriul României (cetățenii stabiliți permanent în străinătate nu pot beneficia de indemnizația socială);</li>
  <li>Suma totală a pensiilor cuvenite sau aflate în plată din sistemul public să fie mai mică de 1.281 Lei lunar.</li>
</ul>

<h3>Impactul noului sistem de punctaj (Legea 360/2023)</h3>
<p>Marea recalculare a pensiilor finalizată în septembrie 2024 a modificat dosarele a peste 4,6 milioane de pensionari. Noua formulă bazată pe VPR (Valoarea Punctului de Referință = 91 Lei în 2025) a determinat noi punctaje contributive. Pentru unii pensionari aflați în plată cu pensia minimă, recalcularea a arătat o valoare contributivă reală și mai mică decât cea anterioară. Datorită garanțiilor legislative, **nicio pensie nu a scăzut**, aceștia rămânând în plată cu valoarea minimă garantată de 1.281 Lei. În schimb, pentru pensionarii cu stagii de cotizare lungi (peste 25-30 de ani) care aveau pensia minimă, adăugarea punctelor de stabilitate (fidelitate) le-a permis să depășească plafonul de 1.281 Lei și să încaseze pensii contributive reale semnificativ mai mari.</p>

<h3>Impozitarea și Contribuțiile de Sănătate</h3>
<p>Conform reglementărilor din Codul Fiscal român actualizate pentru anul 2025, veniturile lunare din pensii sunt scutite complet de impozitul pe venit de 10% pentru sumele ce nu depășesc pragul de <strong>3.000 Lei</strong> net. Deoarece pensia minimă garantată este de 1.281 Lei, aceasta se situează cu mult sub pragul de impozitare. Prin urmare, <strong>pensionarii care primesc pensia minimă nu plătesc niciun fel de impozit pe venit și nicio contribuție la asigurările sociale de sănătate (CASS)</strong>, suma primită fiind 100% netă.</p>

<h3>Întrebări Frecvente (FAQ)</h3>
<div class="space-y-4 my-6">
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Dacă am lucrat sub 15 ani (stagiul minim), am dreptul la pensie minimă?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Pentru a obține o pensie de stat (chiar și cea minimă), este obligatoriu să fi realizat stagiul minim de cotizare prevăzut de lege, care este de <strong>15 ani</strong>. Persoanele care nu au atins pragul de 15 ani de muncă contributivă nu pot accesa sistemul public de pensii și nu pot primi pensia minimă; acestea pot fi eligibile doar pentru ajutoare sociale din partea primăriilor (venitul minim garantat).
    </p>
  </div>
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Cum se acordă pensia minimă în cazul pensiilor de urmaș?</strong>
    <p class="text-sm text-gray-700 mt-1">
      În cazul pensiilor de urmaș acordate copiilor sau soțului supraviețuitor, plafonul de 1.281 Lei se aplică pe dosar. Dacă există un singur urmaș, acesta va primi pensia completă de 1.281 Lei. Dacă există mai mulți copii urmași, cuantumul de 1.281 Lei se împarte conform cotelor legale stabilite de lege pentru fiecare în parte.
    </p>
  </div>
</div>

<p>Pentru a verifica exact stagiul dumneavoastră de cotizare înregistrat în sistem sau pentru asistență privind dosarul de recalculare, vă recomandăm să vă adresați Casei Teritoriale de Pensii din județul dumneavoastră sau să vizitați portalul online oficial al <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP (Casa Națională de Pensii Publice)</a>. Pentru consultarea textului integral al Legii 360/2023, accesați monitorul pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro (Portalul Legislativ Oficial)</a>.</p>
`

  },
  {
    id: 14,
    title: "Cum se Calculează Punctul de Referință (VPR) în 2025",
    excerpt: "Înțelege în detaliu mecanismul de calcul al Valorii Punctului de Referință (VPR) stabilit la 91 lei în 2025 conform noilor reglementări legislative.",
    category: "legislatie",
    publishDate: "2026-05-02",
    readTime: 11,
    slug: "calcul-punct-referinta-vpr",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1554224155-6f9664d00d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Noua reformă a pensiilor din România, guvernată de Legea nr. 360/2023, a introdus un concept fundamental în algoritmul de calcul al drepturilor bănești: <strong>Valoarea Punctului de Referință (VPR)</strong>. În 2025, valoarea VPR este fixată la nivelul de <strong>91 Lei</strong>.</p>

<h3>Formula de determinare a VPR</h3>
<p>Valoarea punctului de referință este un indicator matematic dedus direct prin raportarea Valorii Punctului de Pensie la stagiul de cotizare mediu prevăzut de legislația anterioară (25 de ani):</p>

<div class="bg-slate-50 p-4 rounded-lg my-6 border border-slate-200">
  <p class="font-bold text-slate-900">Formula de calcul a VPR:</p>
  <p class="font-mono text-lg text-blue-700 font-bold">VPR = Valoarea Punctului de Pensie / 25</p>
  <p class="text-xs text-slate-600 mt-2">Pentru 2025: VPR = 2.031 Lei / 25 = 81,24 Lei (rotunjit prin decizie specială guvernamentală la 91 Lei în avantajul pensionarilor)</p>
</div>

<h3>Cum se utilizează VPR în formula finală de calcul?</h3>
<p>Pentru a stabili cuantumul brut al pensiei lunare pentru limită de vârstă, numărul total de puncte acumulate de asigurat pe parcursul activității se înmulțește cu Valoarea Punctului de Referință (91 Lei în 2025):</p>

<div class="bg-blue-50 p-4 rounded-lg my-6 border border-blue-200">
  <p class="font-mono text-lg text-blue-800 font-bold">Pensia Brută = Număr Total Puncte × VPR (91 Lei)</p>
</div>

<p>Numărul total de puncte se compune din punctele de contributivitate (acumulate lună de lună din salarii), punctele asimilate (studii, armată) și punctele de stabilitate acordate pentru stagiile de cotizare ce depășesc 25 de ani.</p>

<p>Pentru a-ți simula propriul punctaj utilizând noii parametri, accesează instrumentul nostru gratuit de calcul. Informații oficiale detaliate se găsesc pe <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">site-ul CNPP</a>, iar normele de aplicare ale Legii 360/2023 sunt publicate pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 15,
    title: "Ghid Complet pentru Pensia de Invaliditate în 2025",
    excerpt: "Care sunt noile criterii de evaluare medicală, gradele de invaliditate și cuantumul indemnizațiilor de însoțitor valabile în acest an.",
    category: "tipuri-pensii",
    publishDate: "2025-03-10",
    readTime: 10,
    slug: "ghid-pensie-invaliditate-2025",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pensia de invaliditate se adresează persoanelor care și-au pierdut total sau cel puțin jumătate din capacitatea de muncă din cauza unor boli profesionale, accidente de muncă sau boli comune, fiind o măsură critică de sprijin în sistemul public românesc.</p>

<h3>Cele trei grade de invaliditate</h3>
<p>Legislația actualizată împarte invaliditatea în trei categorii principale, în funcție de severitatea afectării:</p>
<ul class="list-disc ml-6 space-y-2">
  <li><strong>Gradul I:</strong> Caracterizat prin pierderea totală a capacității de muncă și a capacității de auto-îngrijire (necesită asistență permanentă din partea altei persoane).</li>
  <li><strong>Gradul II:</strong> Caracterizat prin pierderea totală a capacității de muncă, dar cu posibilitatea de auto-îngrijire (nu necesită însoțitor permanent).</li>
  <li><strong>Gradul III:</strong> Caracterizat prin pierderea a cel puțin jumătate din capacitatea de muncă, persoana putând să presteze o activitate profesională cu program redus.</li>
</ul>

<h3>Indemnizația de însoțitor în 2025</h3>
<p>Pensionarii încadrați în Gradul I de invaliditate au dreptul legal, pe lângă pensia propriu-zisă, la o **indemnizație lunară pentru însoțitor**. În 2025, această indemnizație reprezintă exact 80% din valoarea unui punct de pensie, echivalentul a **1.625 Lei** lunar.</p>

<p>Expertiza medicală se realizează de către medicii specializați din subordinea CNPP. Pentru a afla lista unităților și documentele medicale necesare depunerii dosarului, vizitați secțiunea dedicată de pe portalul <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP</a>. Textul legislativ complet privind asistența socială și gradele de expertiză poate fi citit pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 16,
    title: "Cum și Când Se Indexează Pensiile în 2025 și 2026",
    excerpt: "Înțelege mecanismul automat de indexare al pensiilor din România, corelația cu rata inflației și creșterea salariului mediu brut.",
    category: "legislatie",
    publishDate: "2026-02-10",
    readTime: 8,
    slug: "indexare-pensii-2025-2026",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pentru a proteja milioanele de pensionari din România de efectele negative ale creșterii prețurilor și de eroziunea puterii de cumpărare din cauza inflației, legislația națională prevede un mecanism stabil, predictibil și automat de **indexare anuală a pensiilor**. Acest mecanism elimină factorul de decizie politică arbitrară și oferă predictibilitate viitorilor beneficiari.</p>

<h3>Ce este Valoarea Punctului de Referință (VPR) și de ce este importantă?</h3>
<p>Odată cu intrarea în vigoare a noii reforme a pensiilor (Legea nr. 360/2023), valoarea pensiei brute lunare se obține prin înmulțirea numărului total de puncte de pensie acumulate de un asigurat cu **Valoarea Punctului de Referință (VPR)**. Indexarea anuală se aplică în mod direct asupra VPR, crescând automat toate pensiile aflate în plată în mod uniform și corect.</p>

<h3>Formula legală și oficială de indexare anuală</h3>
<p>Conform reglementărilor în vigoare stipulate în Legea 360/2023, indexarea pensiilor din sistemul public se realizează din oficiu în fiecare an, în luna **ianuarie**, pe baza indicatorilor economici oficiali furnizați de Institutul Național de Statistică (INS). Formula matematică utilizată este următoarea:</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
  <p class="font-bold text-blue-900 mt-0">Formula oficială de majorare anuală:</p>
  <p class="font-mono text-lg text-blue-800 font-bold mb-2">
    Rată Majorare (%) = 100% (Rata Medie Anuală a Inflației) + 50% (Creșterea Reală a Câștigului Salarial Mediu Brut)
  </p>
  <p class="text-xs text-slate-600 mb-0">Unde indicatorii sunt stabiliți pe baza anului calendaristic anterior, finalizați și validați de INS și Comisia Națională de Prognoză.</p>
</div>

<h3>Indexarea aplicată în anul 2025</h3>
<p>În luna ianuarie 2025, aplicarea acestei formule de indexare a adus o majorare semnificativă de **12,1%** a valorilor de referință. Astfel:</p>
<ul class="list-disc ml-6 space-y-1 text-slate-800">
  <li><strong>VPR (Valoarea Punctului de Referință):</strong> A crescut de la 81 Lei (valoarea inițială din septembrie 2024) la <strong>91 Lei</strong>.</li>
  <li><strong>Valoarea Punctului de Pensie:</strong> A fost menținută la nivelul de 2.031 Lei pentru dosarele aflate în plată.</li>
</ul>
<p>Această indexare a generat o creștere directă a pensiilor brute pentru pensionarii români, contribuind la atenuarea efectelor inflației crescute din anii anteriori.</p>

<h3>Prognoza pentru indexarea din 2026</h3>
<p>Pentru luna ianuarie 2026, primele estimări bazate pe datele macroeconomice curente indică un procent de indexare cuprins între **6% și 8.5%**, raportat la evoluția inflației medii anuale estimate pentru anul fiscal precedent și la dinamica de creștere a salariilor brute din economie. Valoarea exactă urmează să fie stabilită oficial prin Hotărâre de Guvern în ultimul trimestru, după finalizarea analizelor statistice naționale.</p>

<h3>Excepții importante: Pensiile care nu se indexează</h3>
<p>Deși regula generală prevede indexarea tuturor pensiilor publice, legea menționează două excepții critice:</p>
<ol class="list-decimal ml-6 space-y-2 text-slate-700">
  <li><strong>Pensiile speciale care depășesc plafoanele:</strong> Pensiile de serviciu (ale magistraților, militarilor etc.) sunt supuse unor reguli de indexare specifice ce pot fi înghețate sau limitate dacă depășesc anumite plafoane relative la salariile în activitate.</li>
  <li><strong>Pensiile a căror valoare recalculată a fost mai mică:</strong> Pensionarii a căror pensie recalculată în septembrie 2024 a rezultat sub valoarea aflată deja în plată au rămas cu pensia veche. Pentru aceștia, indexările anuale viitoare se vor aplica la valoarea rezultată din recalculare, nu la suma în plată, existând cazuri în care pensia nu se va majora efectiv până când valoarea recalculată indexată nu depășește suma primită în prezent.</li>
</ol>

<h3>Întrebări Frecvente (FAQ)</h3>
<div class="space-y-4 my-6">
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Dacă mă pensionez în cursul anului, beneficiez de indexare?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Da. În momentul în care te pensionezi, calculul inițial al pensiei tale se realizează utilizând valoarea curentă a VPR (care include toate indexările anterioare). Ulterior, în fiecare lună ianuarie a anilor următori, pensia ta aflată în plată va beneficia automat de majorările procentuale legale.
    </p>
  </div>
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Se indexează și Pilonul II de pensii private obligatorii?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Nu. Pensiile administrate privat din Pilonul II (și cele facultative din Pilonul III) nu sunt indexate prin hotărâri guvernamentale. Acumulările din aceste conturi se majorează în funcție de randamentul investițiilor realizate de administratorii de fonduri pe burse sau titluri de stat, performanța acestora depășind de obicei rata inflației pe termen lung.
    </p>
  </div>
</div>

<p>Pentru a urmări comunicatele oficiale INS și deciziile Casei de Pensii, vizitați periodic portalul oficial <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP.ro</a>. Pentru a citi textele oficiale complete ale noutăților legislative, accesați monitorul pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro (Portalul Legislativ Oficial)</a>.</p>
`
  },
  {
    id: 17,
    title: "Actele Necesare pentru Dosarul de Pensionare în 2025",
    excerpt: "Lista completă și actualizată de documente pe care trebuie să le pregătești pentru depunerea dosarului de pensie de limită de vârstă sau anticipată.",
    category: "planificare",
    publishDate: "2025-11-10",
    readTime: 12,
    slug: "acte-necesare-dosar-pensionare",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Procesul de pensionare în România reprezintă trecerea oficială a asiguratului de la viața activă la statutul de pensionar și presupune întocmirea și depunerea unui dosar administrativ complex. O eroare aparent minoră, cum ar fi lipsa unei copii sau a unei adeverințe oficiale de sporuri, poate duce la respingerea dosarului, la calcularea eronată a drepturilor financiare sau la întârzieri de câteva luni în emiterea deciziei de pensionare și în plata primei pensii.</p>

<p>Intrarea în vigoare a noii legi a pensiilor, <strong>Legea nr. 360/2023</strong>, aplicabilă în totalitate în 2025 și 2026, a adus clarificări suplimentare referitoare la procedurile de depunere a dosarelor și la modul în care sunt recunoscute și evaluate diversele stagii de cotizare (contributive, asimilate sau necontributive). În acest ghid complet, vom analiza pas cu pas fiecare document pe care trebuie să îl conțină dosarul dumneavoastră, cum și de unde se obține fiecare act și cum puteți eficientiza întregul proces procedural.</p>

<h3>1. Dosarul pentru Pensia pentru Limită de Vârstă</h3>
<p>Pensia pentru limită de vârstă este tipul standard de pensie acordat persoanelor care îndeplinesc simultan două condiții esențiale la data solicitării: au atins vârsta standard de pensionare (65 de ani pentru bărbați; o creștere graduală spre 65 de ani până în 2035 pentru femei) și au realizat stagiul minim de cotizare contributiv prevăzut de lege (15 ani).</p>

<p>Pentru acest tip de pensionare, dosarul pe care îl veți înregistra la Casa Teritorială de Pensii (CTP) competentă teritorial trebuie să cuprindă următoarele documente obligatorii:</p>

<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li><strong>Cererea-tip de înscriere la pensie:</strong> Acesta este documentul central prin care solicitați oficial acordarea drepturilor. Se completează la sediul Casei de Pensii sau se descarcă în format PDF de pe portalul CNPP pentru completare prealabilă. Trebuie semnată și datată în mod corespunzător.</li>
  <li><strong>Carnetul de muncă original și copie:</strong> Acesta este cel mai important document pentru dovedirea vechimii acumulate înainte de data de 1 ianuarie 2011. Începând cu această dată, evidența muncii se ține exclusiv în format electronic prin sistemul REVISAL. Asigurați-vă că filele scanate sau copiate sunt perfect lizibile, în special ștampilele și semnăturile angajatorilor.</li>
  <li><strong>Carnetul de muncă pentru membrii CAP (original și copie):</strong> Destinat persoanelor care au lucrat în fostele cooperative agricole de producție înainte de 1989.</li>
  <li><strong>Acte de stare civilă în original și copie:</strong>
    <ul class="list-circle ml-6 space-y-1">
      <li>Buletinul sau cartea de identitate (trebuie să fie în termenul de valabilitate);</li>
      <li>Certificatul de naștere;</li>
      <li>Certificatul de căsătorie (pentru persoanele care și-au schimbat numele, în general femei).</li>
    </ul>
  </li>
  <li><strong>Livretul militar în original și copie (dacă este cazul):</strong> Pentru bărbații care au efectuat stagiul militar obligatoriu sau activități asimilate în cadrul structurilor armate. Perioada militară este considerată stagiu asimilat necontributiv și adaugă puncte la pensie.</li>
  <li><strong>Diplomă de studii universitare la zi și adeverință oficială:</strong> Dacă ați absolvit cursuri universitare la zi (învățământ superior), această perioadă constituie stagiu asimilat. Dosarul trebuie să conțină diploma de licență (sau echivalentă) în original și copie, precum și o adeverință eliberată de facultate care să ateste forma de învățământ (cursuri de zi / cu frecvență) și durata oficială a studiilor (de exemplu, 4 sau 5 ani).</li>
  <li><strong>Adeverințe privind sporurile cu caracter permanent și grupele de muncă:</strong> Documente de importanță critică pentru calcularea punctajului. Acestea dovedesc că ați lucrat în condiții deosebite sau speciale de muncă (fostele grupe I și II) ori că ați încasat sporuri permanente supuse contribuțiilor de asigurări sociale (acord global, ore suplimentare, prime etc.).</li>
  <li><strong>Procură specială autentificată (dacă este cazul):</strong> În situația în care solicitantul nu se poate prezenta personal și mandatează o altă persoană pentru depunerea dosarului și ridicarea deciziei.</li>
</ul>

<h3>2. Dosarul pentru Pensia Anticipată</h3>
<p>Pensia anticipată se poate solicita cu maximum 5 ani înaintea împlinirii vârstei standard de pensionare, cu condiția realizării stagiului complet de cotizare contributiv prevăzut de lege (35 de ani) sau depășirii acestuia cu până la 8 ani. Sub noua Lege 360/2023, nu mai există diferență structurală între pensia anticipată parțială și cea anticipată; există un singur tip de pensie anticipată, care poate fi penalizată (dacă stagiul realizat este mai mic de 8 ani peste stagiul complet) sau nepenalizată (dacă stagiul depășește cu cel puțin 8 ani stagiul complet).</p>

<p>Dosarul de pensionare anticipată conține toate documentele de la pensia pentru limită de vârstă, la care se adaugă în mod obligatoriu:</p>
<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li><strong>Adeverință privind stagiul de cotizare:</strong> Un extras actualizat eliberat de angajatorul curent sau de Casa de Pensii care atestă stagiul de cotizare efectiv realizat până în luna depunerii dosarului.</li>
  <li><strong>Declarație pe propria răspundere:</strong> Prin care asiguratul declară că la data stabilirii pensiei anticipate nu mai desfășoară activități profesionale ca angajat supus asigurării obligatorii sau că va înceta activitatea în momentul primirii deciziei (pensia anticipată nu se poate cumula cu venituri salariale în anumite condiții stricte).</li>
</ul>

<h3>3. Dosarul pentru Pensia de Invaliditate</h3>
<p>Acest tip de pensie se acordă persoanelor care și-au pierdut total sau cel puțin jumătate din capacitatea de muncă din cauza unor boli comune, accidente de muncă sau boli profesionale. Dosarul administrativ este împărțit în două secțiuni: dosarul medical și dosarul administrativ.</p>

<p>Dosarul medical se depune inițial la Cabinetul de Expertiză Medicală a Capacității de Muncă din cadrul Casei de Pensii și conține:</p>
<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li>Biletul de trimitere eliberat de medicul de familie sau medicul specialist;</li>
  <li>Documente medicale recente (bilete de externare, rezultate analize, RMN, CT, ecografii, referate de specialitate);</li>
  <li>Formularul FIAM (pentru accidente de muncă) sau BP2 (pentru boli profesionale) – dacă este cazul.</li>
</ul>

<p>După ce comisia medicală emite <strong>Decizia de încadrare într-un grad de invaliditate</strong> (Gradul I, II sau III), asiguratul depune dosarul pentru plata pensiei, care trebuie să conțină:</p>
<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li>Decizia de încadrare în gradul de invaliditate (original);</li>
  <li>Cererea de înscriere la pensie de invaliditate;</li>
  <li>Carnetul de muncă (original și copie);</li>
  <li>Acte de stare civilă;</li>
  <li>Adeverințe privind stagiul de cotizare și salariile încasate.</li>
</ul>

<h3>4. Dosarul pentru Pensia de Urmaș</h3>
<p>Pensia de urmaș se acordă copiilor și soțului supraviețuitor, în condițiile în care persoana decedată era pensionară sau îndeplinea condițiile pentru obținerea unei pensii publice. Dosarul depus de urmași trebuie să cuprindă:</p>
<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li><strong>Cerere tip</strong> de înscriere la pensia de urmaș;</li>
  <li><strong>Certificatul de deces</strong> al susținătorului (original și copie);</li>
  <li><strong>Acte de stare civilă ale urmașilor:</strong> BI/CI, certificat de naștere, certificat de căsătorie (pentru soțul supraviețuitor);</li>
  <li><strong>Adeverință de elev sau student:</strong> Pentru copiii urmași cu vârsta între 16 și 26 de ani, care urmează cursuri într-o unitate de învățământ acreditată (se depune la începutul fiecărui an școlar/universitar);</li>
  <li><strong>Decizia de invaliditate a urmașului:</strong> Dacă este cazul, pentru copiii sau soțul aflat în incapacitate de muncă;</li>
  <li><strong>Decizia de pensionare a decedatului:</strong> Sau toate documentele de vechime ale acestuia, dacă decesul a survenit înaintea pensionării.</li>
</ul>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
  <p class="font-bold text-blue-900 mt-0">Procedura de depunere a dosarului:</p>
  <p class="text-sm text-blue-950 mb-0">
    Dosarul se depune la Casa Județeană de Pensii (sau a Municipiului București) de care aparțineți cu domiciliul stabil. Depunerea se poate face în două moduri: <strong>fizic la ghișeu</strong> (necesită programare online sau fizică în prealabil pentru a evita cozile) sau <strong>online prin portalul oficial CNPP</strong> (dacă aveți un cont activat și semnătură electronică calificată). Drepturile de pensie se acordă de la data depunerii cererii, cu condiția ca actele să fie depuse în termen.
  </p>
</div>

<h3>Obținerea Adeverințelor de la Angajatori și Arhive</h3>
<p>Una dintre cele mai mari provocări în pregătirea dosarului o reprezintă obținerea adeverințelor pentru sporurile cu caracter permanent, acordul global sau încadrarea în grupe speciale de muncă. Pentru perioadele de după 1 aprilie 2001, aceste date sunt înregistrate în baza de date electronică a CNPP și nu necesită adeverințe fizice, decât în caz de neconcordanțe.</p>

<p>Pentru perioadele anterioare anului 2001, trebuie să solicitați aceste adeverințe direct de la angajatorii la care ați lucrat. În cazul în care companiile s-au desființat, s-au privatizat sau au fost lichidate, procedura devine mai complexă:</p>
<ol class="list-decimal ml-6 space-y-3 text-sm text-gray-700">
  <li><strong>Identificarea succesorilor legali:</strong> Dacă firma a fost preluată de o altă entitate economică, succesorul deține arhivele și are obligația legală de a elibera adeverințele în termen de 30 de zile de la solicitare.</li>
  <li><strong>Căutarea în arhivele județene:</strong> Dacă firma s-a desființat complet fără succesor direct, arhiva de documente a fost transferată către un operator privat autorizat de servicii arhivistice. Puteți consulta lista operatorilor de arhivă pe site-ul oficial al Arhivelor Naționale sau pe site-ul CNPP la secțiunea dedicată companiilor radiate.</li>
  <li><strong>Acțiunea în instanță:</strong> Ca ultimă soluție, dacă documentele nu pot fi găsite în nicio arhivă oficială, vechimea și sporurile pot fi reconstituite în instanță prin chemarea în judecată a Casei de Pensii și audierea de martori (foști colegi de muncă), proces care poate dura între 6 și 18 luni.</li>
</ol>

<div class="overflow-x-auto my-6">
  <table className="w-full text-xs text-left border border-slate-200">
    <thead className="bg-slate-100">
      <tr>
        <th className="border p-2">Perioada Activității</th>
        <th className="border p-2">Sursa Informațiilor de Vechime</th>
        <th className="border p-2">Necesitate Adeverințe Suplimentare</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2">Înainte de 1 ianuarie 2011</td>
        <td className="border p-2">Carnetul de muncă original</td>
        <td className="border p-2">Da, pentru sporuri care nu sunt înscrise în carnet sau grupe de muncă</td>
      </tr>
      <tr>
        <td className="border p-2">1 aprilie 2001 - 31 decembrie 2010</td>
        <td className="border p-2">Baza de date CNPP (electronic) + Carnet</td>
        <td className="border p-2">Doar dacă există diferențe între carnet și baza de date CNPP</td>
      </tr>
      <tr>
        <td className="border p-2">După 1 ianuarie 2011</td>
        <td className="border p-2">Sistemul electronic REVISAL / CNPP</td>
        <td className="border p-2">Nu, evidența este 100% digitalizată și declarată lunar de angajator</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Întrebări Frecvente (FAQ)</h3>
<div class="space-y-4 my-6">
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Cât timp durează emiterea deciziei de pensionare după depunerea dosarului?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Conform legislației din România, Casa Teritorială de Pensii are la dispoziție un termen legal de <strong>45 de zile</strong> de la data înregistrării cererii pentru a emite sau respinge decizia de pensionare. În practică, în funcție de volumul de muncă al fiecărei sucursale județene sau de complexitatea verificărilor (de exemplu, adeverințe din alte județe sau din străinătate), acest termen se poate prelungi la 60-90 de zile. Plata efectivă a pensiei se face retroactiv, începând cu luna următoare depunerii dosarului.
    </p>
  </div>
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Ce se întâmplă dacă îmi lipsesc documente la depunerea dosarului?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Puteți depune dosarul de pensie chiar dacă vă lipsesc anumite adeverințe suplimentare (cum ar fi cele de sporuri sau studii asimilate). Casa de Pensii va înregistra dosarul și va calcula pensia pe baza documentelor existente (în special carnetul de muncă). Ulterior, după ce obțineți adeverințele lipsă, le puteți depune ca o cerere de <strong>recalculare a pensiei</strong>, iar drepturile majorate se vor acorda începând cu luna următoare depunerii noilor acte.
    </p>
  </div>
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Pot depune dosarul dacă am lucrat în străinătate?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Da. În cazul în care ați realizat stagii de cotizare în alte state membre ale Uniunii Europene sau în state cu care România are semnate acorduri bilaterale de securitate socială, veți depune un dosar de <strong>pensie comunitară</strong>. Cererea se depune în țara de domiciliu curent. Dacă locuiți în România, depuneți dosarul la Casa de Pensii județeană, adăugând formularele europene specifice (grupul E 200 sau documentele portabile P1) și documentele care atestă activitatea externă. Instituțiile din cele două state vor comunica direct pentru stabilirea drepturilor proporționale (pro-rata temporis).
    </p>
  </div>
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Este obligatoriu să depun originalul carnetului de muncă?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Da. Casa de Pensii are nevoie de carnetul de muncă în original pentru a-i verifica autenticitatea și pentru a scana/înregistra oficial datele în sistemul centralizat. Carnetul vă va fi returnat personal, sub semnătură, după finalizarea procedurii de scanare și emiterea deciziei de pensionare (de obicei, după câteva săptămâni sau luni). Se recomandă să realizați copii legalizate sau scanări personale de înaltă rezoluție ale tuturor paginilor înainte de a-l preda la ghișeu.
    </p>
  </div>
</div>

<p>Pentru a descărca modelele oficiale de cereri-tip de pensionare sau pentru a localiza sediul Casei Teritoriale de Pensii din județul dumneavoastră, accesați portalul oficial al <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Casei Naționale de Pensii Publice (CNPP)</a>. Pentru interpretarea normelor juridice ale Legii 360/2023, accesați portalul legislativ pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 18,
    title: "Pensionarea Anticipată Fără Penalizare în 2025",
    excerpt: "Descoperă excepțiile legale și categoriile profesionale care pot ieși la pensie anticipat cu 5 ani mai devreme fără a suferi nicio diminuare a cuantumului.",
    category: "tipuri-pensii",
    publishDate: "2025-08-25",
    readTime: 9,
    slug: "pensie-anticipata-fara-penalizare",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Deși în majoritatea cazurilor retragerea anticipată din activitate presupune penalizări substanțiale aplicate pensiei lunare, legislația românească prevede câteva excepții foarte importante în care reducerea vârstei nu aduce nicio penalitate.</p>

<h3>Depășirea stagiului de cotizare cu peste 8 ani</h3>
<p>Conform regulilor actualizate în 2025, persoanele care au depășit stagiul complet de cotizare de 35 de ani prevăzut de lege cu cel puțin **8 ani** (realizând un total de minimum **43 de ani de cotizare efectivă**) se pot pensiona cu până la 5 ani înainte de vârsta standard de 65 de ani **fără nicio penalizare**.</p>

<h3>Alte categorii exceptate de la diminuare</h3>
<p>Beneficiază de pensionare anticipată fără penalități de cuantum următoarele categorii profesionale și sociale specifice:</p>
<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li>Persoanele care au lucrat în condiții speciale (minerit, turnătorii, aviație civilă) și dețin stagiile speciale corespunzătoare;</li>
  <li>Mamele care au născut și crescut cel puțin 3 copii până la vârsta de 16 ani (beneficiază de o reducere directă a vârstei fără penalizare);</li>
  <li>Persoanele care au locuit cel puțin 30 de ani în zone cu poluare remanentă recunoscute prin lege (reducere de până la 2 ani).</li>
</ul>

<p>Pentru a calcula dacă stagiul dumneavoastră actual vă încadrează în aceste categorii exceptate de lege, vă recomandăm să utilizați simulatorul nostru gratuit. Datele tehnice oficiale de la CNPP se găsesc pe <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">site-ul CNPP</a>. Actele administrative complete se află pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 19,
    title: "Ghid Util: Vizualizarea Vechimii de Muncă pe Portalul CNPP",
    excerpt: "Pas cu pas: cum îți creezi un cont pe portalul oficial al Casei Naționale de Pensii Publice și cum descarci raportul tău complet de cotizare.",
    category: "planificare",
    publishDate: "2026-05-15",
    readTime: 12,
    slug: "vizualizare-vechime-munca-cnpp",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Verificarea periodică a vechimii în muncă înregistrate oficial reprezintă o măsură de siguranță financiară esențială pentru orice angajat din România. În contextul modificărilor frecvente aduse legislației și al trecerii la noul sistem bazat pe punctaj (Legea 360/2023), modul în care angajatorii raportează veniturile brute și virează contribuția la asigurările sociale (CAS) are un impact direct și ireversibil asupra valorii viitoarei dumneavoastră pensii de stat.</p>

<p>Erorile în raportarea REVISAL realizate de departamentele de resurse umane, neplata sau plata parțială a CAS de către angajatori sau neînregistrarea perioadelor lucrate în condiții deosebite ori speciale sunt probleme frecvente care sunt descoperite, din păcate, abia la depunerea dosarului de pensionare. Din fericire, platforma digitală oficială a Casei Naționale de Pensii Publice (CNPP) vă permite să monitorizați și să descărcați gratuit raportul dumneavoastră complet de cotizare direct de pe calculator sau telefon. În acest ghid complet, veți găsi pașii detaliați pentru crearea contului, descărcarea istoricului de muncă și corectarea eventualelor greșeli identificate în documente.</p>

<h3>De ce este critic să îți monitorizezi vechimea online?</h3>
<p>Accesul la portalul CNPP oferă un control deplin asupra carierei dumneavoastră profesionale din punct de vedere fiscal:</p>
<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li><strong>Depistarea angajatorilor rău-platnici:</strong> Puteți vedea lună de lună dacă firma la care lucrați a declarat și virat efectiv contribuțiile sociale reținute din salariul dumneavoastră.</li>
  <li><strong>Verificarea salariului de baza declarat:</strong> Vă asigurați că salariul brut înregistrat în baza de date coincide cu cel din contractul de muncă și din actele adiționale semnate.</li>
  <li><strong>Monitorizarea punctelor de pensie:</strong> Puteți vedea calculul exact al punctajului lunar și anual acumulat, facilitând estimarea viitoarei pensii.</li>
  <li><strong>Verificarea încadrării în grupe de muncă:</strong> Vă asigurați că perioadele lucrate în condiții deosebite sau speciale au fost raportate corect de angajator (acestea scurtează vârsta de pensionare și oferă punctaj suplimentar).</li>
</ul>

<h3>Pasul 1: Cum îți creezi contul pe platforma oficială CNPP</h3>
<p>Procedura de înregistrare este gratuită și este concepută pentru a proteja securitatea datelor personale (GDPR), având în vedere că veți avea acces la informații financiare confidențiale.</p>

<ol class="list-decimal ml-6 space-y-3 text-sm text-gray-700">
  <li><strong>Accesarea formularului web:</strong> Intrați pe site-ul oficial <em>cnpp.ro</em> și faceți clic pe secțiunea <strong>„Creare cont”</strong>.</li>
  <li><strong>Completarea datelor de identificare:</strong> Introduceți cu atenție numele, prenumele, codul numeric personal (CNP), adresa de domiciliu, adresa de e-mail validă și numărul de telefon. Este esențial ca datele să fie identice cu cele din actul de identitate.</li>
  <li><strong>Generarea cererii PDF:</strong> După completarea formularului online și trimiterea acestuia, sistemul va genera automat o cerere în format PDF. Salvați acest fișier pe calculator.</li>
  <li><strong>Imprimarea și semnarea cererii:</strong> Printează cererea generată și semnează-o fizic cu pixul în zona dedicată semnăturii solicitantului.</li>
  <li><strong>Activarea contului la ghișeu:</strong> Din motive de siguranță a datelor, trebuie să vă prezentați <strong>o singură dată în viață</strong> la sediul oricărei Case Județene de Pensii (nu neapărat cea de domiciliu) având asupra dumneavoastră cererea semnată și cartea de identitate în original. Un funcționar va verifica datele și va activa contul instant. Parola de acces va fi trimisă automat pe adresa de e-mail indicată în formular.</li>
</ol>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
  <p class="font-bold text-blue-900 mt-0">Procedura alternativă pentru Diaspora:</p>
  <p class="text-xs text-blue-950 mb-0">
    Dacă locuiți în străinătate și nu vă puteți deplasa la o Casă de Pensii în România, aveți două opțiuni pentru activarea contului: <strong>folosirea unei semnături electronice calificate</strong> (cererea PDF poate fi semnată digital și trimisă direct prin e-mail la Casa de Pensii, nemaifiind necesară prezența fizică) sau <strong>împuternicirea unui reprezentant în țară</strong> printr-o procură notarială specială, care se va prezenta în numele dumneavoastră la ghișeu.
  </p>
</div>

<h3>Pasul 2: Cum descarci raportul tău complet de cotizare</h3>
<p>Odată ce aveți contul activat, descărcarea raportului de vechime se face în câteva minute, oricând aveți nevoie, urmând acești pași simpli:</p>
<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li>Accesați site-ul <em>cnpp.ro</em> și autentificați-vă introducând e-mailul și parola primită.</li>
  <li>În panoul principal (meniul din stânga), accesați secțiunea <strong>„Datele mele”</strong>.</li>
  <li>Faceți clic pe submeniul <strong>„Stagii de cotizare”</strong> și apoi pe <strong>„Generare document”</strong>.</li>
  <li>Puteți alege să generați raportul pentru întreaga activitate sau puteți selecta un interval specific de timp (de exemplu, ultimii 5 ani).</li>
  <li>Apăsați butonul de trimitere a solicitării. Sistemul va compila datele în fundal.</li>
  <li>După 2-3 minute, reîmprospătați pagina sau accesați secțiunea <strong>„Rapoarte generate”</strong> din profilul dumneavoastră pentru a descărca fișierul PDF obținut.</li>
</ul>

<h3>Pasul 3: Cum se citește și se interpretează raportul de cotizare PDF?</h3>
<p>Raportul generat conține o structură tabelară detaliată pe luni și ani. Pentru a-l înțelege corect, trebuie să urmăriți semnificația coloanelor sale principale:</p>
<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li><strong>Anul / Luna:</strong> Perioada fiscală în care au fost raportate datele de către angajatori.</li>
  <li><strong>Denumire Angajator:</strong> Numele oficial al companiei sau instituției la care ați fost angajat.</li>
  <li><strong>Baza de calcul (Salariul Brut):</strong> Suma brută pe care ați realizat-o și pentru care s-a calculat contribuția socială. Aceasta este cifra esențială care va influența numărul de puncte acumulate.</li>
  <li><strong>Condiții de muncă (Normale / Deosebite / Speciale):</strong> Reprezintă încadrarea locului de muncă. Litera „N” indică condiții normale, „D” indică condiții deosebite (oferă reducere de vârstă și spor de punctaj), iar „S” indică condiții speciale de muncă.</li>
  <li><strong>Punctaj lunar:</strong> Punctele acumulate în acea lună. Formula utilizată este: <code>Salariul tău Brut / Câștigul Salarial Mediu Brut pe Economie din acea lună</code>. Suma punctajelor lunare împărțită la 12 reprezintă punctajul anual de pensie.</li>
</ul>

<div class="overflow-x-auto my-6">
  <table className="w-full text-xs text-left border border-slate-200">
    <thead className="bg-slate-100">
      <tr>
        <th className="border p-2">Situație Identificată</th>
        <th className="border p-2">Cauză Probabilă</th>
        <th className="border p-2">Soluție Recomandată</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2">Lipsește o lună sau o perioadă întreagă</td>
        <td className="border p-2">Angajatorul nu a depus declarația 112 sau firma s-a desființat fără declararea datelor</td>
        <td className="border p-2">Solicitați o adeverință de vechime de la angajator sau sesizați ITM</td>
      </tr>
      <tr>
        <td className="border p-2">Salariul brut înscris este mai mic decât cel real</td>
        <td className="border p-2">Eroare de operare în contabilitate sau nedeclararea corectă a veniturilor</td>
        <td className="border p-2">Solicitați corectarea REVISAL de către angajator prin depunerea unei declarații rectificative</td>
      </tr>
      <tr>
        <td className="border p-2">Nu apare vechimea de dinainte de 2001</td>
        <td className="border p-2">Sistemul electronic CNPP conține doar date începând cu aprilie 2001</td>
        <td className="border p-2">Nicio problemă; vechimea anterioară se dovedește exclusiv cu carnetul de muncă original</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Ce faci dacă identifici erori în raportul de vechime?</h3>
<p>Dacă descoperiți că anumite perioade lucrate lipsesc sau că salariile brute declarate sunt incorecte, este vital să acționați cât mai repede, deoarece trecerea timpului îngreunează obținerea dovezilor:</p>
<ol class="list-decimal ml-6 space-y-3 text-sm text-gray-700">
  <li><strong>Contactarea directă a angajatorului:</strong> Adresați-vă departamentului de resurse umane al fostului sau actualului angajator și solicitați verificarea declarației 112 depuse la ANAF. Angajatorul are obligația legală de a rectifica datele eronate și de a depune declarații rectificative la Fisc pentru lunile respective.</li>
  <li><strong>Sesizarea Inspectoratului Teritorial de Muncă (ITM):</strong> Dacă angajatorul refuză corectarea datelor sau cooperarea, depuneți o sesizare oficială la ITM din județul în care este înregistrată firma. Atașați copii după contractul de muncă, fluturași de salariu sau extrase de cont care demonstrează încasarea sumelor reale. ITM poate efectua un control tematic și poate amenda firma, obligând-o să corecteze datele.</li>
  <li><strong>Obținerea adeverințelor de la firme de arhivă:</strong> În cazul în care firma s-a desființat, trebuie să identificați operatorul privat de arhivă care deține documentele acesteia (statul de plată) și să solicitați o adeverință oficială cu salariile încasate și contribuțiile plătite, adeverință pe care o veți depune ulterior la Casa de Pensii.</li>
</ol>

<h3>Întrebări Frecvente (FAQ)</h3>
<div class="space-y-4 my-6">
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">De ce nu îmi apare deloc vechimea obținută înainte de aprilie 2001 în contul online?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Este o situație complet normală. Sistemul informatic al CNPP a fost înființat în luna aprilie a anului 2001. Toate datele privind activitatea dumneavoastră anterioară acestei date se află stocate în format fizic pe suport de hârtie, în <strong>carnetul de muncă original</strong> pe care îl dețineți. Această vechime va fi introdusă în sistemul digital abia atunci când veți depune dosarul fizic de pensionare la ghișeul Casei de Pensii, funcționarii înregistrând manual fiecare perioadă din carnet.
    </p>
  </div>
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Cât de des se actualizează baza de date electronică a CNPP?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Baza de date a CNPP se actualizează lunar. De regulă, angajatorii au obligația legală de a depune declarația 112 (privind contribuțiile și salariații) până la data de 25 a lunii următoare celei de activitate (de exemplu, datele pentru luna mai se declară până la 25 iunie). Prelucrarea informatică și afișarea datelor în contul dumneavoastră online poate dura încă 10-15 zile, astfel încât o luată lucrată apare în contul online la aproximativ 40-50 de zile după finalizarea ei.
    </p>
  </div>
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Ce sunt punctele de stabilitate și apar ele în acest raport?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Conform Legii nr. 360/2023, punctele de stabilitate sunt bonusuri acordate persoanelor care lucrează peste 25 de ani în sistemul public de pensii (0,5 pct/an pentru anii 26-30; 0,75 pct/an pentru anii 31-35; 1 pct/an pentru anii peste 35). Aceste puncte se calculează și se aplică direct în momentul depunerii dosarului de pensie de către Casa de Pensii. Ele nu apar calculate lună de lună în raportul curent de cotizare electronic, însă istoricul de cotizare extras vă permite să calculați cu precizie stagiul total de cotizare realizat pentru a ști câte puncte de stabilitate veți obține.
    </p>
  </div>
  <div class="border-b pb-4">
    <strong class="text-blue-700 block">Este sigur să îmi salvez raportul CNPP pe calculator?</strong>
    <p class="text-sm text-gray-700 mt-1">
      Da, dar trebuie să aveți grijă unde îl stocați, deoarece raportul de cotizare conține date cu caracter personal extrem de sensibile: numele complet, CNP-ul dumneavoastră, codurile angajatorilor și toate veniturile istorice brute. Se recomandă să nu descărcați acest document pe computere publice sau comune și să folosiți parole puternice pentru securizarea accesului la fișier.
    </p>
  </div>
</div>

<p>Pentru a începe înregistrarea contului dumneavoastră sau pentru a vă autentifica în profil, vizitați platforma electronică a <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Casei Naționale de Pensii Publice (CNPP)</a>. Pentru a consulta detaliile legislative din Monitorul Oficial cu privire la dreptul de acces la datele personale și obligațiile angajatorilor, accesați <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro (Portalul Legislativ Oficial)</a>.</p>
`
  },
  {
    id: 20,
    title: "Pilonul II de Pensii: Modificări Legislative în 2025",
    excerpt: "Analiza noilor reglementări privind cota de contribuție redirecționată către pensiile private obligatorii și opțiunile de retragere sau moștenire.",
    category: "tipuri-pensii",
    publishDate: "2025-05-30",
    readTime: 12,
    slug: "pilonul-2-modificari-legislative",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pilonul II (pensia privată obligatorie administrată de companii private) reprezintă un element cheie în arhitectura financiară a fiecărui român activ, adunând contribuții lunare pentru completarea venitului public.</p>

<h3>Cota de contribuție în 2025</h3>
<p>Începând cu anul trecut, cota de contribuție direcționată automat din CAS (Contribuția la Asigurări Sociale) către contul tău individual de Pilon II este de <strong>4,75%</strong> din salariul brut. Această sumă este reținută și virată de angajator fără ca salariul tău net să fie diminuat, fiind o redistribuire internă a taxelor.</p>

<h3>Dreptul la moștenire al fondurilor</h3>
<p>Un detaliu extrem de important pe care mulți nu îl cunosc: **banii acumulați în Pilonul II sunt proprietate privată și sunt pe deplin moștenibili**. În caz de deces al asiguratului înainte de solicitarea pensiei, sumele acumulate sunt transferate în contul de Pilon II al moștenitorilor legali sau sunt plătite direct acestora în cazul în care nu sunt asigurați.</p>

<h3>Condiții de plată a pensiei private</h3>
<p>Plata activelor din contul individual se efectuează la împlinirea vârstei standard de pensionare (65 de ani), la cerere, sub formă de plată unică integrală sau eșalonată în rate lunare pe o perioadă de maximum 5 ani.</p>

<p>Pentru a vedea administratorul tău de fond și soldul acumulat până în prezent, poți utiliza link-urile oficiale puse la dispoziție de ASF (Autoritatea de Supraveghere Financiară) sau portalul <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP</a>. Pentru legile detaliate privind pensiile administrate privat, consultați Just.ro pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  }
];

// Helper functions
export const getArticlesByCategory = (category: string): Article[] => {
  if (category === 'all') return staticArticles.filter(a => a.published);
  return staticArticles.filter(a => a.published && a.category === category);
};

export const getRecentArticles = (limit: number = 3): Article[] => {
  return staticArticles
    .filter(a => a.published)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return staticArticles.find(a => a.slug === slug && a.published);
};

export const searchArticles = (searchTerm: string): Article[] => {
  const term = searchTerm.toLowerCase();
  return staticArticles.filter(a => 
    a.published && (
      a.title.toLowerCase().includes(term) ||
      a.excerpt.toLowerCase().includes(term) ||
      a.content?.toLowerCase().includes(term)
    )
  );
};