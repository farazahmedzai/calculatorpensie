import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema, HowToSchema } from "@/components/seo/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, RefreshCw, Shield } from "lucide-react";

export default function Metodologie() {
  return (
    <div className="bg-white">
      <MetaTags 
        title="Metodologie Calcul Pensie - Formulele Oficiale CNPP | CalculatorPensie.com"
        description="Descoperă metodologia completă de calcul a pensiei folosită de CalculatorPensie.com. Formulele oficiale CNPP, sursele legislative și transparența calculelor."
        canonical="https://calculatorpensie.com/metodologie"
        keywords="metodologie calcul pensie, formula pensie romania, cnpp, legea pensiilor, puncte de stabilitate, vpr 2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>
      
      <WebPageSchema 
        name="Metodologie Calcul Pensie - Formulele Oficiale"
        description="Metodologia completă și formulele oficiale folosite pentru calculul pensiei de stat în România"
        url="https://calculatorpensie.com/metodologie"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Metodologie" }
        ]}
      />
      
      <HowToSchema 
        name="Cum se calculează pensia de stat în România"
        description="Ghid complet pentru înțelegerea formulelor de calcul ale pensiei conform legislației CNPP în 2025"
        steps={[
          { name: "Calculează punctajul de contributivitate", text: "Raportează salariul tău brut lunar la salariul mediu brut național și însumează punctajele." },
          { name: "Adaugă punctele de stabilitate", text: "Aplică bonificația legală pentru stagiile de cotizare ce depășesc 25 de ani de muncă." },
          { name: "Aplică punctele asimilate", text: "Adaugă 0.25 puncte pe an pentru perioadele de studii la zi, serviciu militar sau concediu de creștere a copilului." },
          { name: "Înmulțește cu Valoarea Punctului de Referință (VPR)", text: "Înmulțește punctajul total de pensie cu valoarea oficială VPR, care este 91 Lei în 2025." }
        ]}
        totalTime="PT10M"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="h-14 w-14 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5.5xl font-extrabold mb-6 tracking-tight leading-tight">
            Metodologia Științifică de Calcul a Pensiei
          </h1>
          <p className="text-xl text-blue-200 max-w-3.5xl mx-auto font-medium leading-relaxed">
            Explicația detaliată, pas cu pas, a modului în care funcționează algoritmul nostru de estimare, bazat pe formulele oficiale din noua lege a pensiilor, **Legea nr. 360/2023** valabilă pentru 2025.
          </p>
        </div>
      </section>

      {/* Introduction to the PAYG System */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-800">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-2">
              1. Fundamentele Economice ale Sistemului de Pensii din România
            </h2>
            <p className="mb-6 leading-relaxed">
              Sistemul public de pensii din România funcționează pe principiul <strong>Pay-As-You-Go (PAYG)</strong>, bazat pe solidaritate intergenerațională. Aceasta înseamnă că taxele și contribuțiile de asigurări sociale (CAS) plătite de angajații activi astăzi sunt folosite direct și imediat pentru a finanța pensiile beneficiarilor actuali. 
            </p>
            <p className="mb-6 leading-relaxed">
              Deoarece nu există un "cont de economii individual" la stat unde banii tăi se acumulează (spre deosebire de Pilonul II și III), statul îți acordă în schimb **drepturi de creanță** exprimate sub formă de **puncte de pensie**. În momentul în care te vei pensiona, totalitatea punctelor acumulate de tine pe parcursul întregii activități profesionale este transformată într-o sumă lunară în Lei, înmulțită cu valoarea punctului de referință (VPR) de la acel moment.
            </p>
            <p className="mb-8 leading-relaxed">
              Pentru a asigura o estimare extrem de precisă, algoritmul platformei noastre simulează acest parcurs complex folosind formulele matematice oficiale stipulate în noua **Lege nr. 360/2023** (care a adus marea recalculare din septembrie 2024 și parametrii stabiliți pentru 2025).
            </p>
          </div>
        </div>
      </section>

      {/* Mathematical Formulas Section */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-950 mb-8 border-b pb-2">
            2. Definiția Matematică a Componentelor de Calcul
          </h2>

          <div className="space-y-8">
            {/* Concept 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-mono text-sm">A</span>
                Punctajul Lunar de Contributivitate (PL)
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Reprezintă raportul dintre salariul tău brut lunar (pentru care s-au plătit contribuții de asigurări sociale) și salariul mediu brut utilizat la fundamentarea bugetului asigurărilor sociale de stat din luna respectivă.
              </p>
              <div className="bg-slate-50 p-4 rounded font-mono text-center text-lg border mb-4 font-bold text-slate-800">
                Punctaj Lunar (PL) = Salariu Brut Lunar / Salariul Mediu Brut Oficial
              </div>
              <p className="text-xs text-slate-500 italic">
                De exemplu, dacă în luna respectivă ai avut un salariu brut de 8.417 Lei (salariul mediu pe economie estimat în 2025), punctajul tău lunar este exact 1,00. Dacă ai câștigat 16.834 Lei, punctajul tău lunar este de 2,00.
              </p>
            </div>

            {/* Concept 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-mono text-sm">B</span>
                Punctajul Anual (PA)
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Se obține prin însumarea punctajelor lunare realizate în anul calendaristic respectiv și împărțirea acestei sume la 12.
              </p>
              <div className="bg-slate-50 p-4 rounded font-mono text-center text-lg border mb-4 font-bold text-slate-800">
                Punctaj Anual (PA) = ∑ (PL pentru toate cele 12 luni) / 12
              </div>
            </div>

            {/* Concept 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-200 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-mono text-sm">C</span>
                Punctele de Stabilitate (Legea nr. 360/2023)
              </h3>
              <p className="text-slate-700 text-sm mb-4 leading-relaxed font-medium">
                Conform noii reforme legislative, persoanele care lucrează și cotizează peste 25 de ani în sistemul public primesc un bonus de **puncte de stabilitate** pentru a recompensa loialitatea în muncă:
              </p>
              <div className="bg-white p-4 rounded border border-blue-200 mb-4 space-y-2 text-sm text-slate-800">
                <div>• <strong>Pentru anii de muncă între 26 și 30:</strong> se adaugă <strong className="text-blue-600">0,50 puncte</strong> pe an.</div>
                <div>• <strong>Pentru anii de muncă între 31 și 35:</strong> se adaugă <strong className="text-blue-600">0,75 puncte</strong> pe an.</div>
                <div>• <strong>Pentru anii de muncă de peste 35:</strong> se adaugă <strong className="text-blue-600">1,00 punct</strong> pe an.</div>
              </div>
            </div>

            {/* Concept 4 - VPR */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-mono text-sm">D</span>
                Valoarea Punctului de Referință (VPR)
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Este indicatorul cu care se înmulțește numărul total de puncte acumulate pentru a stabili pensia lunară. În anul 2025, valoarea VPR este fixată oficial la **91 Lei**.
              </p>
              <div className="bg-slate-50 p-4 rounded font-mono text-center text-lg border mb-4 font-bold text-slate-800">
                Pensia Brută = (Puncte Contributivitate + Puncte Stabilitate + Puncte Asimilate) × VPR (91 Lei)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked Examples Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-2">
            3. Exemple Practice de Calcul (Conform Legii 360/2023)
          </h2>

          <div className="space-y-8">
            {/* Example 1 */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Studiu de Caz 1: Angajat Standard cu 38 de ani de cotizare</h3>
              <div className="prose prose-sm text-slate-700 space-y-4">
                <p>
                  Să luăm ca exemplu un bărbat care se pensionează la vârsta standard de 65 de ani, având un stagiu de cotizare complet de **38 de ani** și un salariu constant egal cu salariul mediu brut pe economie (rezultând 1 punct pe an = 38 de puncte din contributivitate).
                </p>
                <div className="bg-white p-4 rounded border">
                  <strong>Pasul 1: Calculul Punctelor de Stabilitate (PStab)</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Pentru primii 5 ani peste 25 (anii 26 - 30): 5 ani × 0,50 = 2,50 puncte</li>
                    <li>Pentru următorii 5 ani peste 30 (anii 31 - 35): 5 ani × 0,75 = 3,75 puncte</li>
                    <li>Pentru anii peste 35 (anii 36 - 38 = 3 ani): 3 ani × 1,00 = 3,00 puncte</li>
                    <li><strong>Total Puncte de Stabilitate</strong> = 2,50 + 3,75 + 3,00 = <strong>9,25 puncte</strong></li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                  <strong>Pasul 2: Calculul Punctajului Total de Pensie</strong>
                  <p className="mt-1">Puncte contributivitate = 38,00 puncte. La acestea se adaugă punctele de stabilitate:</p>
                  <p className="font-semibold text-slate-900 mt-1">Punctaj Total = 38,00 + 9,25 = 47,25 puncte de pensie.</p>
                </div>
                <div className="bg-white p-4 rounded border bg-blue-50/50 border-blue-200">
                  <strong>Pasul 3: Calculul Pensiei Finale (Valori 2025)</strong>
                  <p className="mt-1">Înmulțim Punctajul Total cu valoarea VPR (**91 Lei**):</p>
                  <p className="text-xl font-bold text-slate-900 mt-2">Pensie Brută = 47,25 × 91 Lei = 4.300 Lei/lună.</p>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Studiu de Caz 2: Angajată cu 30 de ani de cotizare și salariu dublu</h3>
              <div className="prose prose-sm text-slate-700 space-y-4">
                <p>
                  Luăm exemplul unei femei cu **30 de ani de cotizare** și un salariu mediu pe tot parcursul carierei dublu față de cel mediu național (rezultând 2.0 puncte pe an = 60 de puncte din contributivitate).
                </p>
                <div className="bg-white p-4 rounded border">
                  <strong>Pasul 1: Calculul Punctelor de Stabilitate (PStab)</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Ani de cotizare peste 25: 5 ani (anii 26 - 30).</li>
                    <li><strong>Total Puncte de Stabilitate</strong> = 5 ani × 0,50 = <strong>2,50 puncte</strong></li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                  <strong>Pasul 2: Calculul Punctajului Total de Pensie</strong>
                  <p className="mt-1">Puncte contributivitate = 60,00 puncte.</p>
                  <p className="font-semibold text-slate-900 mt-1">Punctaj Total = 60,00 + 2,50 = 62,50 puncte.</p>
                </div>
                <div className="bg-white p-4 rounded border bg-green-50/50 border-green-200">
                  <strong>Pasul 3: Calculul Pensiei Finale (Valori 2025)</strong>
                  <p className="text-xl font-bold text-slate-900 mt-2">Pensie Brută = 62,50 × 91 Lei = 5.688 Lei/lună.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical VPP Values */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-955 mb-8 border-b pb-2">
            4. Evoluția Istorică a Punctului de Referință și a Pensiei în România
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Sistemul public a trecut printr-o tranziție majoră de la calculul bazat pe Punctul de Pensie (Legea 263) la Punctul de Referință (Legea 360). Iată reperele istorice recente:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-800 border-collapse">
              <thead className="text-xs uppercase bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-6 py-3 border">An Calendaristic</th>
                  <th scope="col" className="px-6 py-3 border">Valoare Punct de Referință (VPR)</th>
                  <th scope="col" className="px-6 py-3 border">Valoare Punct Pensie</th>
                  <th scope="col" className="px-6 py-3 border">Act Normativ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 border font-semibold">2023</td>
                  <td className="px-6 py-4 border">-</td>
                  <td className="px-6 py-4 border">1.785 Lei</td>
                  <td className="px-6 py-4 border">OUG nr. 168/2022</td>
                </tr>
                <tr className="bg-slate-50 border-b">
                  <td className="px-6 py-4 border font-semibold">2024 (Sep)</td>
                  <td className="px-6 py-4 border">81 Lei</td>
                  <td className="px-6 py-4 border">2.031 Lei</td>
                  <td className="px-6 py-4 border">Legea nr. 360/2023</td>
                </tr>
                <tr className="bg-blue-50 border-b border-blue-200">
                  <td className="px-6 py-4 border font-semibold text-blue-900">2025</td>
                  <td className="px-6 py-4 border font-bold text-blue-900">91 Lei</td>
                  <td className="px-6 py-4 border font-bold text-blue-900">2.031 Lei</td>
                  <td className="px-6 py-4 border text-blue-800">Actualizat 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Special Conditions & Edge Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-2">
            5. Abordarea Cazurilor Speciale și a Excepțiilor
          </h2>
          
          <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-lg font-bold text-amber-900 mb-2">Pensionarea Anticipată</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                Persoanele care au realizat stagiul complet de cotizare se pot pensiona cu până la 5 ani înainte de vârsta standard. Penalizarea aplicată sub Legea 360/2023 este **variabilă (între 0,15% și 0,40% pentru fiecare lună de anticipare)**, în funcție de numărul de ani cu care a fost depășit stagiul complet. Algoritmul nostru scade automat cuantumul estimat cu procentajul corect bazat pe depășirea stagiului de cotizare.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-bold text-purple-900 mb-2">Reduceri pentru Femeile cu Copii (Legea nr. 360/2023)</h3>
              <p className="text-sm text-purple-800 leading-relaxed">
                Noua legislație aduce un suport real mamelor: vârsta standard de pensionare pentru femei se reduce cu **6 luni pentru fiecare copil** născut și crescut până la vârsta de 16 ani, reducerea maximă fiind de 3 ani și 6 luni. Această condiție este complet integrată în instrumentele noastre de simulare.
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
              <h3 className="text-lg font-bold text-rose-900 mb-2">Pensia de Invaliditate</h3>
              <p className="text-sm text-rose-800 leading-relaxed">
                Persoanele care și-au pierdut total sau parțial capacitatea de muncă din cauza unor boli au dreptul la pensie de invaliditate (Gradul I, II sau III). Calculul include indemnizații de însoțitor specifice (1.625 Lei în 2025 pentru Gradul I).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legislative References & E-E-A-T Guarantee */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-12 w-12 mx-auto mb-6 text-green-400" />
          <h2 className="text-3xl font-bold mb-4">Garanția de Autoritate și Transparență</h2>
          <p className="text-slate-300 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Metodologia noastră este auditată și revizuită în mod constant de specialiștii noștri financiari pentru a ne asigura că reflectă cu exactitate 100% din modificările oficiale din Monitorul Oficial al României.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700">✓ Auditat 2025</span>
            <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700">✓ Conform Legii 360/2023</span>
            <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700">✓ Calcule Local Securizate</span>
          </div>
        </div>
      </section>
    </div>
  );
}