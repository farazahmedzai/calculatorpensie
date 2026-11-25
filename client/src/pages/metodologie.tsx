import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calculator, Shield } from "lucide-react";
import { AVERAGE_GROSS_SALARY_2026, OFFICIAL_VPR_2026 } from "@/lib/pension-calculations";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/metodologie/"];

export default function Metodologie() {
  return (
    <div className="bg-white">
      <MetaTags
        title={PAGE_META.title}
        description={PAGE_META.description}
        canonical={PAGE_META.canonical}
        keywords={PAGE_META.keywords}
        schemaKind="article"
        schemaName={PAGE_META.schemaName}
        articlePublishedTime={PAGE_META.datePublished}
        articleModifiedTime={PAGE_META.dateModified}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="h-14 w-14 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-white">
            Metodologia de Calcul a Pensiei (CNPP 2026)
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium leading-relaxed">
            Explicația matematică, pas cu pas, a algoritmului nostru de estimare, bazat pe formulele oficiale din{" "}
            <strong>Legea nr. 360/2023</strong> și parametrii bugetari valabili în <strong>2026</strong>.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-800">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-2">
              1. Fundamentele Economice ale Sistemului Public (PAYG)
            </h2>
            <p className="mb-6 leading-relaxed">
              Sistemul public de pensii din România funcționează pe principiul <strong>Pay-As-You-Go (PAYG)</strong>, bazat pe solidaritate între generații. Contribuțiile de asigurări sociale (CAS) plătite astăzi finanțează pensiile curente, în timp ce asiguratul acumulează{" "}
              <strong>puncte de pensie</strong>.
            </p>
            <p className="mb-6 leading-relaxed">
              La data pensionării, totalul punctelor acumulate (contributivitate + stabilitate + perioade asimilate) se înmulțește cu{" "}
              <strong>Valoarea Punctului de Referință (VPR = {OFFICIAL_VPR_2026} Lei în 2026)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Mathematical Formulas */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-2">
            2. Componentele Formulei Oficiale de Calcul
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-mono text-sm">
                  A
                </span>
                Punctajul Lunar de Contributivitate (PL)
              </h3>
              <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                Raportul dintre salariul tău brut lunar și câștigul salarial mediu brut utilizat la fundamentarea bugetului asigurărilor sociale din luna respectivă.
              </p>
              <div className="bg-slate-50 p-4 rounded font-mono text-center text-base border mb-4 font-bold text-slate-900">
                Punctaj Lunar (PL) = Salariu Brut Lunar / Câștig Salarial Mediu Brut Oficial
              </div>
              <p className="text-xs text-slate-600 italic">
                Exemplu 2026: La salariul mediu brut bugetar de {AVERAGE_GROSS_SALARY_2026.toLocaleString("ro-RO")} Lei (Legea nr. 44/2026), un salariu brut egal cu media națională generează 1,00 punct pe an.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-mono text-sm">
                  B
                </span>
                Punctajul Anual (PA)
              </h3>
              <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                Media aritmetică a punctajelor lunare realizate în cele 12 luni ale anului calendaristic.
              </p>
              <div className="bg-slate-50 p-4 rounded font-mono text-center text-base border font-bold text-slate-900">
                Punctaj Anual (PA) = Suma Punctajelor Lunare / 12
              </div>
            </div>

            <div className="bg-blue-50/50 p-8 rounded-lg shadow-sm border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-mono text-sm">
                  C
                </span>
                Punctele de Stabilitate (Art. 85 Legea nr. 360/2023)
              </h3>
              <p className="text-slate-800 text-sm mb-4 leading-relaxed font-medium">
                Pentru stagiul de cotizare contributiv ce depășește 25 de ani, se adaugă următoarele{" "}
                <strong>puncte de stabilitate</strong>:
              </p>
              <div className="bg-white p-4 rounded border border-blue-200 space-y-2 text-sm text-slate-800">
                <div>• <strong>Anii 26–30:</strong> <strong className="text-blue-700">+0,50 puncte</strong> / an</div>
                <div>• <strong>Anii 31–35:</strong> <strong className="text-blue-700">+0,75 puncte</strong> / an</div>
                <div>• <strong>Peste 35 ani:</strong> <strong className="text-blue-700">+1,00 punct</strong> / an</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-mono text-sm">
                  D
                </span>
                Valoarea Punctului de Referință (VPR = {OFFICIAL_VPR_2026} Lei în 2026)
              </h3>
              <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                În septembrie 2024 VPR a fost stabilit la <strong>81 Lei</strong> (2.032 Lei / 25). Prin OUG nr. 156/2024 și{" "}
                <strong>Legea nr. 141/2025</strong>, VPR rămâne înghețat la <strong>81 Lei</strong> pe parcursul anului 2026 (majorarea inițial prognozată spre 91 Lei fiind amânată prin măsuri bugetare).
              </p>
              <div className="bg-slate-50 p-4 rounded font-mono text-center text-base border font-bold text-slate-900">
                Pensia Brută = (Puncte Contributivitate + Puncte Stabilitate + Puncte Asimilate) × 81 Lei
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-2">
            3. Exemple Practice de Calcul în 2026 (VPR = 81 Lei)
          </h2>

          <div className="space-y-8">
            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Studiu de Caz 1: Stagiu complet de 38 de ani la salariu mediu național
                </h3>
                <p className="text-sm text-slate-700">
                  Un asigurat care se pensionează la 65 de ani cu <strong>38 de ani stagiu contributiv</strong> și 1,00 punct pe an (38,00 puncte de contributivitate):
                </p>
                <div className="bg-white p-4 rounded border text-sm">
                  <strong>Pasul 1 — Puncte de Stabilitate:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Anii 26–30 (5 ani × 0,50): 2,50 puncte</li>
                    <li>Anii 31–35 (5 ani × 0,75): 3,75 puncte</li>
                    <li>Anii 36–38 (3 ani × 1,00): 3,00 puncte</li>
                    <li><strong>Total stabilitate:</strong> <strong>9,25 puncte</strong></li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border text-sm">
                  <strong>Pasul 2 — Punctaj Total:</strong> 38,00 + 9,25 = <strong>47,25 puncte</strong>.
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200 text-sm">
                  <strong>Pasul 3 — Pensie Brută (VPR 81 Lei):</strong>{" "}
                  47,25 × 81 Lei = <strong>3.827 Lei brut/lună</strong> (net ~3.669 Lei după CASS 10% și impozit 10% peste 3.000 Lei).
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Studiu de Caz 2: Stagiu de 30 de ani cu punctaj 2,00/an
                </h3>
                <p className="text-sm text-slate-700">
                  Pentru <strong>30 de ani contributivi</strong> cu salariu dublu față de media pe economie (60,00 puncte contributive) și 5 ani peste pragul de 25 de ani:
                </p>
                <div className="bg-white p-4 rounded border text-sm">
                  <strong>Puncte stabilitate:</strong> 5 ani × 0,50 = <strong>2,50 puncte</strong> → Punctaj Total = <strong>62,50 puncte</strong>.
                </div>
                <div className="bg-green-50 p-4 rounded border border-green-200 text-sm">
                  <strong>Pensie Brută (VPR 81 Lei):</strong> 62,50 × 81 Lei = <strong>5.063 Lei brut/lună</strong>.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historical Table */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-2">
            4. Evoluția Punctului de Pensie și VPR
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-800 border-collapse bg-white">
              <thead className="text-xs uppercase bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3 border">Perioadă</th>
                  <th className="px-4 py-3 border">VPR (Legea 360)</th>
                  <th className="px-4 py-3 border">Punct Pensie Clasic</th>
                  <th className="px-4 py-3 border">Act Normativ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 border font-semibold">2023</td>
                  <td className="px-4 py-3 border">-</td>
                  <td className="px-4 py-3 border">1.785 Lei</td>
                  <td className="px-4 py-3 border">OUG nr. 168/2022</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="px-4 py-3 border font-semibold">Ian – Aug 2024</td>
                  <td className="px-4 py-3 border">-</td>
                  <td className="px-4 py-3 border">2.032 Lei</td>
                  <td className="px-4 py-3 border">Legea nr. 422/2023</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 border font-semibold">Sep 2024 – Dec 2025</td>
                  <td className="px-4 py-3 border font-bold">81 Lei</td>
                  <td className="px-4 py-3 border">Înlocuit cu VPR</td>
                  <td className="px-4 py-3 border">Legea 360/2023 &amp; OUG 156/2024</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 border font-bold text-blue-900">2026 (În vigoare)</td>
                  <td className="px-4 py-3 border font-bold text-blue-900">81 Lei</td>
                  <td className="px-4 py-3 border text-blue-900">N/A (VPR unic)</td>
                  <td className="px-4 py-3 border text-blue-900">Legea nr. 141/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Special cases */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-2">
            5. Cazuri Speciale și Reguli Fiscale 2026
          </h2>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Pensionarea Anticipată</h3>
            <p className="text-sm text-amber-900 leading-relaxed">
              Sub Legea nr. 360/2023, retragerea anticipată cu maximum 5 ani înaintea vârstei standard aplică o diminuare variabilă între{" "}
              <strong>0,15% și 0,40% pentru fiecare lună de anticipare</strong>, în funcție de depășirea stagiului complet contributiv.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-lg font-bold text-purple-900 mb-2">Reduceri pentru Mame</h3>
            <p className="text-sm text-purple-900 leading-relaxed">
              Vârsta standard de pensionare pentru femei se reduce cu{" "}
              <strong>6 luni pentru fiecare copil</strong> născut și crescut până la 16 ani (maximum 3 ani și 6 luni reducere), cu condiția realizării stagiului complet de cotizare.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-2">CASS și Impozit pe Pensii (2026)</h3>
            <p className="text-sm text-blue-900 leading-relaxed">
              Conform Legii nr. 141/2025, pensiile de până la 3.000 Lei sunt scutite integral. Pentru pensiile peste 3.000 Lei se aplică CASS 10% la suma ce depășește 3.000 Lei (în perioada 1 aug. 2025 – 31 dec. 2027) și impozit pe venit de 10% peste pragul neimpozabil de 3.000 Lei.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Shield className="h-12 w-12 mx-auto mb-4 text-green-400" />
          <h2 className="text-2xl font-bold mb-3 text-white">Verifică-ți Pensia Estimatată Acum</h2>
          <p className="text-slate-300 text-sm mb-6">
            Aplică aceste formule automat în simulatoarele noastre interactive.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm cursor-pointer">
                Calculator Pensie Principal
              </span>
            </Link>
            <Link href="/calculator-puncte-pensie/">
              <span className="inline-block bg-slate-800 border border-slate-600 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm cursor-pointer">
                Calculator Puncte Stabilitate
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
