import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EarlyRetirementCalculator from "@/components/calculators/early-retirement-calculator";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { Link } from "wouter";
import { Info, HelpCircle, CheckCircle, Calculator } from "lucide-react";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/calculator-pensie-anticipata/"];

export default function CalculatorAnticipataPage() {
  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags
        title={PAGE_META.title}
        description={PAGE_META.description}
        canonical={PAGE_META.canonical}
        keywords={PAGE_META.keywords}
        schemaKind="calculator"
        schemaName={PAGE_META.schemaName}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculator Pensie Anticipată 2026 (Legea 360/2023)</h1>
          <p className="text-xl text-gray-700">
            Află dacă îndeplinești stagiul complet și calculează procentul exact de diminuare lunară
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-brand-blue" />
              Calculator Penalizare Pensie Anticipată (VPR 81 Lei)
            </CardTitle>
            <CardDescription>
              Introdu vârsta, sexul, venitul net, stagiul de cotizare contributiv și vârsta dorită de retragere
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-800 bg-green-50 p-3 rounded-md mb-6 border border-green-200">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 text-green-700" />
              <span className="font-semibold">
                Formule actualizate 2026: Legea nr. 360/2023 · VPR = 81 Lei · Grilă 0,15%–0,40%/lună
              </span>
            </div>
            <EarlyRetirementCalculator />
          </CardContent>
        </Card>

        <div className="bg-white rounded-lg p-8 shadow-sm prose prose-lg max-w-none">
          <h2>Cum funcționează pensia anticipată sub Legea 360/2023?</h2>
          <p>
            Pensionarea anticipată permite retragerea din activitate cu <strong>maximum 5 ani înaintea împlinirii vârstei standard</strong>, dacă ai realizat integral stagiul complet de cotizare contributiv (35 de ani pentru bărbați, iar pentru femei în creștere graduală spre 35 de ani conform Anexei 5).
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r-lg">
            <h3 className="text-orange-900 font-bold mt-0 flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-orange-700" />
              Regulă esențială privind vechimea:
            </h3>
            <p className="text-orange-950 mb-0">
              Pentru accesarea pensiei anticipate <strong>nu se iau în calcul perioadele asimilate</strong> (studii universitare la zi, stagiu militar), fiind necesară îndeplinirea stagiului complet exclusiv din perioade contributive.
            </p>
          </div>

          <h2>Grila Oficială a Penalizărilor în 2026 (Legea 360/2023)</h2>
          <p>
            Spre deosebire de vechea lege (care avea penalizări de până la 0,75%/lună), noua formulă aplică o diminuare cuprinsă între <strong>0,15% și 0,40% pe lună de anticipare</strong>, în funcție de cât de mult depășești stagiul complet de cotizare:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border p-3">Depășirea Stagiului Complet Contributiv</th>
                  <th className="border p-3">Penalizare Lunară</th>
                  <th className="border p-3">Impact pentru 12 Luni Anticipare</th>
                  <th className="border p-3">Impact Maxim (60 Luni)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Până la 1 an peste stagiu</td>
                  <td className="border p-3"><strong>0,40% / lună</strong></td>
                  <td className="border p-3">-4,8%</td>
                  <td className="border p-3 font-semibold text-red-700">-24,0%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3 font-medium">Între 1 și 2 ani peste stagiu</td>
                  <td className="border p-3"><strong>0,35% / lună</strong></td>
                  <td className="border p-3">-4,2%</td>
                  <td className="border p-3">-21,0%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Între 2 și 3 ani peste stagiu</td>
                  <td className="border p-3"><strong>0,30% / lună</strong></td>
                  <td className="border p-3">-3,6%</td>
                  <td className="border p-3">-18,0%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3 font-medium">Între 3 și 4 ani peste stagiu</td>
                  <td className="border p-3"><strong>0,25% / lună</strong></td>
                  <td className="border p-3">-3,0%</td>
                  <td className="border p-3">-15,0%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Între 4 și 5 ani peste stagiu</td>
                  <td className="border p-3"><strong>0,20% / lună</strong></td>
                  <td className="border p-3">-2,4%</td>
                  <td className="border p-3">-12,0%</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border p-3 font-medium">Peste 5 ani (5–8 ani peste stagiu)</td>
                  <td className="border p-3"><strong>0,15% / lună (0% la ≥8 ani)</strong></td>
                  <td className="border p-3">-1,8% (0% la ≥8 ani)</td>
                  <td className="border p-3 font-semibold text-green-700">-9,0% (sau 0%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            La împlinirea vârstei standard de pensionare, pensia anticipată se transformă din oficiu în pensie pentru limită de vârstă și <strong>diminuarea procentuală este eliminată integral</strong>.
          </p>

          <h3>Întrebări Frecvente despre Pensia Anticipată</h3>
          <div className="space-y-4 mt-6">
            <div className="border-b pb-4">
              <h4 className="font-bold flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-brand-blue" />
                Care este penalizarea maximă sub Legea 360/2023?
              </h4>
              <p className="text-gray-700">
                Penalizarea maximă este de <strong>24%</strong> (60 luni × 0,40%/lună), mai mică decât plafonul anterior de 30% din vechea lege.
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-brand-blue" />
                Se poate cumula pensia anticipată cu salariul?
              </h4>
              <p className="text-gray-700">
                Nu. Pe durata perceperii pensiei anticipate (până la împlinirea vârstei standard), beneficiarul nu poate cumula pensia cu venituri dintr-un contract individual de muncă.
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-brand-blue" />
                Mamele beneficiază de reducerea vârstei?
              </h4>
              <p className="text-gray-700">
                Da. Femeile care au născut și crescut copii beneficiază de reducerea vârstei standard cu câte 6 luni per copil (până la 3 ani și 6 luni pentru 7+ copii) după realizarea stagiului complet.
              </p>
            </div>
          </div>

          <Card className="mt-8 not-prose">
            <CardHeader>
              <CardTitle className="text-xl">Instrumente și ghiduri conexe</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link href="/calculator-varsta-pensionare/" className="text-brand-blue font-semibold underline">
                    Calculator Vârstă de Pensionare
                  </Link>{" "}
                  — află vârsta standard exactă înainte de a calcula lunile de anticipare.
                </li>
                <li>
                  <Link href="/calculator-puncte-pensie/" className="text-brand-blue font-semibold underline">
                    Calculator Puncte de Stabilitate
                  </Link>{" "}
                  — verifică bonusul pentru vechime peste 25 de ani.
                </li>
                <li>
                  <Link href="/blog/pensie-anticipata-fara-penalizare/" className="text-brand-blue font-semibold underline">
                    Pensie Anticipată Fără Penalizare
                  </Link>{" "}
                  — excepțiile legale și condițiile de stagiu suplimentar.
                </li>
                <li>
                  <Link href="/legislatie/" className="text-brand-blue font-semibold underline">
                    Legea Pensiilor 360/2023
                  </Link>{" "}
                  — cadrul juridic complet valabil în 2026.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
