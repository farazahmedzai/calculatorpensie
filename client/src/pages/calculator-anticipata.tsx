import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EarlyRetirementCalculator from "@/components/calculators/early-retirement-calculator";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { Info, HelpCircle } from "lucide-react";

export default function CalculatorAnticipataPage() {
  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags 
        title="Calculator Pensie Anticipată 2025 | Penalizări și Vârstă"
        description="Calculează penalizarea aplicată pentru pensionarea anticipată în România. Află vârsta minimă, stagiul necesar și procentul de reducere conform Legii 360/2023."
        canonical="https://calculatorpensie.com/calculator-pensie-anticipata"
        keywords="calculator pensie anticipata, pensie anticipata cu penalizare, varsta pensionare anticipata, legea pensiilor 360/2023"
      />
      
      <WebPageSchema 
        name="Calculator Pensie Anticipată cu Penalizare"
        description="Instrument online pentru calcularea penalizărilor și eligibilității pentru pensionare anticipată în România"
        url="https://calculatorpensie.com/calculator-pensie-anticipata"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Calculator", url: "https://calculatorpensie.com/calculator" },
          { name: "Pensie Anticipată" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculator Pensie Anticipată</h1>
          <p className="text-xl text-gray-700">
            Află dacă te poți pensiona mai devreme și calculează-ți penalizarea legală
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalculatorIcon className="h-5 w-5 text-brand-blue" />
              Calculator Penalizare Pensie Anticipată
            </CardTitle>
            <CardDescription>
              Introdu vârsta, sexul, stagiul de cotizare și lunile de anticipare pentru a calcula reducerea legală a pensiei
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EarlyRetirementCalculator />
          </CardContent>
        </Card>

        {/* Rich SEO Content */}
        <div className="bg-white rounded-lg p-8 shadow-sm prose prose-lg max-w-none">
          <h2>Ghid Complet: Condiții de Pensionare Anticipată în 2025</h2>
          <p>
            Pensionarea anticipată reprezintă dreptul asiguratului de a solicita pensionarea cu 
            <strong> maximum 5 ani înaintea vârstei standard de pensionare</strong>, conform prevederilor noii Legi nr. 360/2023. Această posibilitate vine la pachet cu o penalizare procentuală aplicată valorii finale a pensiei de stat.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r-lg">
            <h4 className="text-orange-900 font-bold mt-0 flex items-center gap-2">
              <Info className="h-5 w-5 text-orange-700" />
              Criteriul Esențial de Vechime:
            </h4>
            <p className="text-orange-950 mb-0">
              Nu poți solicita pensia anticipată decât dacă ai realizat <strong>stagiul complet de cotizare</strong> prevăzut de lege (35 de ani) sau l-ai depășit cu câțiva ani. Persoanele care nu au stagiul complet realizat nu pot ieși la pensie anticipată sub nicio formă.
            </p>
          </div>

          <h3>Cum se calculează penalizarea la pensia anticipată?</h3>
          <p>
            Recalcularea penalizării se realizează raportat la lunile de anticipare (până la 60 de luni) și la numărul de ani cu care ai depășit stagiul complet de cotizare (35 de ani). Procentul de penalizare lunară este determinat conform următoarei grile oficiale CNPP:
          </p>
          
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="bg-slate-100">
                <th className="border p-2">Perioada de depășire a stagiului complet</th>
                <th className="border p-2">Procent de penalizare lunară (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Până la 1 an</td>
                <td className="border p-2"><strong>0.40%</strong> pe lună de anticipare</td>
              </tr>
              <tr>
                <td className="border p-2">Între 1 și 2 ani</td>
                <td className="border p-2"><strong>0.35%</strong> pe lună de anticipare</td>
              </tr>
              <tr>
                <td className="border p-2">Între 2 și 3 ani</td>
                <td className="border p-2"><strong>0.30%</strong> pe lună de anticipare</td>
              </tr>
              <tr>
                <td className="border p-2">Între 3 și 4 ani</td>
                <td className="border p-2"><strong>0.25%</strong> pe lună de anticipare</td>
              </tr>
              <tr>
                <td className="border p-2">Între 4 și 5 ani</td>
                <td className="border p-2"><strong>0.20%</strong> pe lună de anticipare</td>
              </tr>
              <tr>
                <td className="border p-2">Între 5 și 8 ani</td>
                <td className="border p-2"><strong>0.15%</strong> pe lună de anticipare</td>
              </tr>
            </tbody>
          </table>

          <p>
            De îndată ce persoana împlinește vârsta standard de pensionare (sau stagiul de cotizare crește suficient), pensia anticipată se transformă din oficiu în pensie pentru limită de vârstă, iar <strong>penalizarea se elimină complet</strong> din acel moment.
          </p>

          <h3>Întrebări Frecvente (FAQ)</h3>
          <div className="space-y-4 mt-6">
            <div className="border-b pb-4">
              <h4 className="font-bold flex items-center gap-2">
                <HelpCircle className="h-4.5 w-4.5 text-brand-blue" />
                Care este penalizarea maximă?
              </h4>
              <p className="text-gray-700">
                Penalizarea maximă se aplică pentru perioada maximă de anticipare (5 ani / 60 de luni) la cota maximă de 0.40% pe lună, adică o reducere totală de <strong>24%</strong> din valoarea pensiei complete.
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold flex items-center gap-2">
                <HelpCircle className="h-4.5 w-4.5 text-brand-blue" />
                Se iau în calcul perioadele asimilate (facultate, armată)?
              </h4>
              <p className="text-gray-700">
                Nu. La calculul stagiului de cotizare necesar pentru acordarea pensiei anticipate <strong>nu se iau în considerare perioadele asimilate</strong> în care asiguratul nu a cotizat efectiv (de exemplu: anii de studii universitare la zi sau stagiul militar).
              </p>
            </div>
          </div>
        </div>

        {/* Ad block */}
        <div className="mt-8 flex justify-center">
          <div data-placement-id="revbid-square" id='revbid-square-4741' style={{minWidth: '300px', minHeight: '250px', textAlign: 'center'}}></div>
        </div>
      </div>
    </div>
  );
}

function CalculatorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}
