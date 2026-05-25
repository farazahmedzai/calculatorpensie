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
<p>Formula de calcul a pensiei de stat în România se bazează pe sistemul de puncte reglementat prin lege. Începând cu anul 2025, valoarea punctului de pensie este fixată la <strong>2.031 Lei</strong>, fiind calculată conform noii legi a pensiilor nr. 360/2023.</p>

<h3>Care sunt pașii oficiali de calcul?</h3>
<p>Pentru a determina valoarea brută a pensiei de stat pe care o vei primi lunar, algoritmul CNPP aplică următorul sistem format din trei pași principali:</p>

<div class="bg-slate-50 p-4 rounded-lg my-6 border border-slate-200">
  <p class="font-bold text-slate-900">Formula Generală:</p>
  <p class="font-mono text-lg text-blue-700 font-bold">Pensia Lunară = Punctaj Mediu Anual (PMA) × Valoarea Punctului de Pensie (2.031 Lei)</p>
</div>

<h3>1. Determinarea Punctajului Mediu Anual (PMA)</h3>
<p>Punctajul mediu anual reprezintă numărul de puncte pe care l-ai acumulat în medie pe an pe parcursul carierei tale. Se obține prin împărțirea sumei punctajelor tale anuale la stagiul complet de cotizare prevăzut de lege (35 de ani pentru bărbați și între 30-33 de ani pentru femei).</p>

<h3>2. Calculul Punctajului Anual (PA)</h3>
<p>Punctajul anual se determină prin împărțirea la 12 a sumei punctajelor lunare obținute în anul respectiv. Punctajul tău lunar se calculează raportând salariul tău brut la salariul mediu brut pe economie utilizat la fundamentarea bugetului asigurărilor sociale din acea lună. Dacă salariul tău este exact egal cu cel mediu brut, acumulezi exact 1 punct în acea lună.</p>

<h3>3. Noua Bonificație: Punctele de Stabilitate</h3>
<p>Dacă ai un stagiu de cotizare de peste 25 de ani, noua reformă adaugă puncte bonus direct la punctajul tău total:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>0,50 puncte pe an pentru anii de cotizare între 26 și 30;</li>
  <li>0,75 puncte pe an pentru anii de cotizare între 31 și 35;</li>
  <li>1,00 punct pe an pentru fiecare an care depășește stagiul de 35 de ani.</li>
</ul>

<p>Pentru a verifica istoricul tău oficial de cotizare și salariile înregistrate în baza de date, vizitează secțiunea dedicată de pe portalul <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP (Casa Națională de Pensii Publice)</a>. Pentru a citi legea oficială completă, consultă textul legii pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro (Portalul Legislativ al Ministerului Justiției)</a>.</p>
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
<p>Indemnizația socială pentru pensionari, cunoscută public sub denumirea de <strong>pensie minimă garantată</strong>, este un sprijin esențial oferit de statul român pentru a asigura un nivel minim de trai pentru toți pensionarii din sistemul public de pensii.</p>

<h3>Valoarea Pensiei Minime în 2025</h3>
<p>Începând cu anul 2025, cuantumul pensiei minime garantate în România este stabilit la valoarea oficială de <strong>1.281 Lei</strong> pe lună. Acest nivel a fost menținut de guvern pentru a sprijini pensionarii cu venituri din punctaje anuale reduse.</p>

<h3>Cine beneficiază de această măsură?</h3>
<p>Orice pensionar al sistemului public de pensii care are domiciliul în România și al cărui nivel total al veniturilor din pensii se situează sub pragul de 1.281 Lei. Statul acoperă automat diferența sub forma unei „indemnizații sociale”, astfel încât suma efectiv încasată de beneficiar să fie de exact 1.281 Lei lunar.</p>

<h3>Condiții de eligibilitate</h3>
<p>Pentru a beneficia de pensia minimă, solicitantul trebuie să îndeplinească următoarele criterii cumulative:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Să aibă calitatea oficială de pensionar în sistemul public de pensii român;</li>
  <li>Să aibă rezidența sau domiciliul stabil pe teritoriul României;</li>
  <li>Suma totală a pensiilor cuvenite sau aflate în plată să fie mai mică de 1.281 Lei.</li>
</ul>

<p>Diferența dintre pensia cuvenită din punctajul realizat și cuantumul minim garantat este suportată în întregime de la bugetul de stat. Pentru asistență directă și formulare, vă puteți adresa Casei Teritoriale de Pensii din județul dumneavoastră sau vizita portalul oficial <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP</a>. Pentru studiul legislativ, accesați textul legii pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
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
<p>Pentru a proteja pensionarii de eroziunea puterii de cumpărare cauzată de inflație, legislația românească prevede o indexare anuală automată a valorii pensiilor.</p>

<h3>Formula legală de indexare</h3>
<p>Conform regulilor stipulate în noul sistem public, valoarea punctului de referință (VPR) și valoarea punctului de pensie se indexează anual, în mod automat, în luna ianuarie a fiecărui an, cu următorul algoritm stabil:</p>

<div class="bg-slate-50 p-4 rounded-lg my-6 border border-slate-200 text-sm">
  <p class="font-bold">Formula oficială de ajustare anuală:</p>
  <p class="font-mono text-blue-700 font-bold">Procent Indexare = 100% din Rata Medie a Inflației + 50% din Creșterea Reală a Salariului Mediu Brut pe Economie</p>
</div>

<h3>Indexări realizate și planificate</h3>
<p>În 2025, această formulă a asigurat o majorare semnificativă a punctului de pensie la valoarea istorică de 2.031 Lei. Pentru anul 2026, calendarul de monitorizare a indicatorilor INS (Institutul Național de Statistică) indică o aplicare similară în prima lună a anului, menținând trendul ascendent pentru sprijinul seniorilor.</p>

<p>Pentru a urmări comunicatele statistice oficiale și valorile finale validate de guvern, vizitați periodic portalul <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Casei Naționale de Pensii (CNPP)</a> sau Portalul Legislativ al Guvernului României pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
`
  },
  {
    id: 17,
    title: "Actele Necesare pentru Dosarul de Pensionare în 2025",
    excerpt: "Lista completă și actualizată de documente pe care trebuie să le pregătești pentru depunerea dosarului de pensie de limită de vârstă sau anticipată.",
    category: "planificare",
    publishDate: "2025-11-10",
    readTime: 10,
    slug: "acte-necesare-dosar-pensionare",
    published: true,
    author: authors.alexandruPopescu,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Pregătirea dosarului de pensionare este un pas procedural care necesită atenție maximă pentru a evita întârzieri în emiterea deciziei și plata drepturilor bănești cuvenite.</p>

<h3>Lista documentelor obligatorii</h3>
<p>Pentru pensia pentru limită de vârstă sau pensia anticipată, dosarul depus la Casa Teritorială de Pensii trebuie să includă obligatoriu următoarele acte:</p>
<ul class="list-disc ml-6 space-y-2 text-sm text-gray-700">
  <li><strong>Cerere tip</strong> pentru înscrierea la pensie (se obține de la sediu sau online);</li>
  <li><strong>Carnetul de muncă</strong> în original și copie (pentru perioadele de activitate anterioare datei de 1 ianuarie 2011);</li>
  <li><strong>Acte de stare civilă:</strong> buletin/carte de identitate, certificat de naștere și de căsătorie (original și copie);</li>
  <li><strong>Diplomă de studii universitare</strong> (cursuri de zi) și adeverință care să ateste durata studiilor (dacă este cazul, pentru adăugarea stagiilor asimilate);</li>
  <li><strong>Livretul militar</strong> (original și copie, pentru bărbați);</li>
  <li><strong>Adeverințe speciale</strong> privind sporurile cu caracter permanent sau grupele de muncă obținute în carieră.</li>
</ul>

<h3>Recomandare utilă</h3>
<p>Începeți colectarea adeverințelor cu cel puțin 6 luni înainte de data eligibilității, în special dacă ați lucrat în companii care au fost privatizate sau lichidate, caz în care arhivele pot fi dificil de localizat.</p>

<p>Pentru a descărca listele oficiale de formulare de la CJP, accesați site-ul oficial <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP</a>. Normele tehnice privind certificarea vechimii se regăsesc pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
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
    readTime: 7,
    slug: "vizualizare-vechime-munca-cnpp",
    published: true,
    author: authors.elenaRadu,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480",
    content: `
<p>Unul dintre cele mai utile instrumente digitale puse la dispoziție de statul român este portalul online al CNPP, care permite fiecărui cetățean activ să își verifice istoricul de cotizare fără a se deplasa la ghișee.</p>

<h3>Pasul 1: Crearea contului de utilizator</h3>
<p>Pentru a avea acces la datele tale personale de asigurări sociale, trebuie să parcurgi următorii pași de înregistrare pe portalul cnpp.ro:</p>
<ul class="list-disc ml-6 space-y-1 text-sm text-gray-700">
  <li>Accesează site-ul și completează formularul online cu datele tale de identificare (nume, prenume, CNP, email);</li>
  <li>Printează cererea generată automat de sistem;</li>
  <li>Mergi o singură dată la orice Casă Județeană de Pensii cu cererea printată și buletinul în original pentru activarea definitivă a contului (o măsură strictă de protecție a datelor personale).</li>
</ul>

<h3>Pasul 2: Descărcarea raportului de cotizare</h3>
<p>După activare, te poți autentifica oricând în cont. În meniul principal, accesează secțiunea **„Datele mele”** ➡️ **„Stagii de cotizare”** și solicită generarea unui raport complet. În câteva minute, vei primi în format PDF un tabel detaliat pe luni și ani cu toate salariile declarate de angajatori și punctele de pensie acumulate.</p>

<p>Recomandăm verificarea acestui raport anual pentru a corecta din timp eventualele erori de raportare ale companiilor. Accesați portalul direct pe <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">CNPP.ro</a>. Normele de securitate ale prelucrării datelor cu caracter personal se găsesc pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Just.ro</a>.</p>
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