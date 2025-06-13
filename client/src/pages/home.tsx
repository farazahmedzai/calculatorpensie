import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Calculator, HelpCircle, Calendar, Users, TrendingUp, MapPin, ListCheck, Gavel, FastForward, PiggyBank, ChartLine, Clock } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { calculateStandardPension } from "@/lib/pension-calculations";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: number;
  slug: string;
}

export default function Home() {
  // Calculator state
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [contributionYears, setContributionYears] = useState("");
  const [workConditions, setWorkConditions] = useState("");
  const [calculationResult, setCalculationResult] = useState<{
    retirementAge: string;
    retirementDate: string;
    monthlyPension: number;
  } | null>(null);

  // Schema.org structured data for SEO
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculator Pensie Online România 2024",
    "description": "Cel mai precis calculator de pensie online din România. Calculează pensia de stat și vârsta de pensionare instant.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "RON"
    },
    "featureList": [
      "Calculul pensiei de stat (Pilon I)",
      "Calculul pensiei anticipate",
      "Calculul contribuțiilor Pilon III",
      "Estimarea vârstei de pensionare"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "La ce vârstă mă pot pensiona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vârsta de pensionare depinde de sex și istoricul de cotizare. Bărbații se pot pensiona la 65 ani cu 35 ani stagiu, femeile la 63 ani cu 30 ani stagiu (2024). Folosește calculatorul nostru pentru data exactă de pensionare bazată pe situația ta specifică."
        }
      },
      {
        "@type": "Question",
        "name": "Care este valoarea punctului de pensie în 2024?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Începând cu 1 ianuarie 2024, valoarea punctului de pensie este de 2.031 lei, conform legislației oficiale."
        }
      },
      {
        "@type": "Question",
        "name": "Cum se calculează pensia anticipată?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Poți ieși la pensie cu câțiva ani mai devreme, dar cu o penalizare de 0.25% pe lună pentru fiecare lună de anticipare. Bărbații pot ieși la 62 ani, femeile la 60 ani, cu minimum 15 ani stagiu de cotizare."
        }
      }
    ]
  };

  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ['/api/articles/recent'],
  });

  const calculatePension = () => {
    if (!birthDate || !gender || !monthlySalary || !contributionYears || !workConditions) return;

    const currentAge = new Date().getFullYear() - new Date(birthDate).getFullYear();
    const standardRetirementAge = gender === "male" ? 65 : 63;
    const minimumContribution = gender === "male" ? 35 : 30;
    
    // Adjust for work conditions
    let adjustedRetirementAge = standardRetirementAge;
    if (workConditions === "deosebite") adjustedRetirementAge -= 2;
    if (workConditions === "speciale") adjustedRetirementAge -= 5;

    const result = calculateStandardPension({
      currentAge,
      monthlyIncome: parseFloat(monthlySalary),
      contributionYears: parseInt(contributionYears),
      retirementAge: adjustedRetirementAge
    });

    const retirementYear = new Date().getFullYear() + (adjustedRetirementAge - currentAge);
    const retirementMonth = new Date(birthDate).getMonth();
    const monthNames = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", 
                       "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

    setCalculationResult({
      retirementAge: `${adjustedRetirementAge} ani`,
      retirementDate: `${monthNames[retirementMonth]} ${retirementYear}`,
      monthlyPension: result
    });
  };

  return (
    <div className="bg-white">
      {/* Schema.org JSON-LD for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Above-Fold Calculator Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* H1 - Exact from Project Brief */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Calculator Pensie Online 2024: Află Vârsta și Valoarea Pensiei Tale
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Folosește cel mai simplu calculator de pensie online. Află vârsta de pensionare și estimează-ți pensia lunară (Pilon I și II) în mai puțin de 60 de secunde. Gratuit și precis!
            </p>
          </div>

          {/* Above-Fold Calculator - Required Input Fields */}
          <Card className="max-w-4xl mx-auto bg-white shadow-xl">
            <CardContent className="p-8">
              <TooltipProvider>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Data Nașterii - Date Picker */}
                  <div className="space-y-2">
                    <Label htmlFor="birthDate" className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Data Nașterii
                    </Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={birthDate}
                      onChange={(e) => {
                        setBirthDate(e.target.value);
                        if (e.target.value && gender && monthlySalary && contributionYears && workConditions) {
                          calculatePension();
                        }
                      }}
                      className="w-full"
                    />
                  </div>

                  {/* Sex - Radio Buttons (Bărbat/Femeie) */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Sex
                    </Label>
                    <RadioGroup
                      value={gender}
                      onValueChange={(value) => {
                        setGender(value);
                        if (birthDate && value && monthlySalary && contributionYears && workConditions) {
                          calculatePension();
                        }
                      }}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Bărbat</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Femeie</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Salariu Brut Lunar Actual (RON) */}
                  <div className="space-y-2">
                    <Label htmlFor="salary" className="text-sm font-medium flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Salariu Brut Lunar Actual (RON)
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Acest salariu este folosit pentru estimare</p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Input
                      id="salary"
                      type="number"
                      placeholder="Ex: 3500"
                      value={monthlySalary}
                      onChange={(e) => {
                        setMonthlySalary(e.target.value);
                        if (birthDate && gender && e.target.value && contributionYears && workConditions) {
                          calculatePension();
                        }
                      }}
                      className="w-full"
                    />
                  </div>

                  {/* Stagiu de Cotizare Actual (Ani) */}
                  <div className="space-y-2">
                    <Label htmlFor="contribution" className="text-sm font-medium flex items-center gap-2">
                      <Calculator className="h-4 w-4" />
                      Stagiu de Cotizare Actual (Ani)
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Câți ani ai lucrat cu contract de muncă până acum?</p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Input
                      id="contribution"
                      type="number"
                      placeholder="Ex: 15"
                      value={contributionYears}
                      onChange={(e) => {
                        setContributionYears(e.target.value);
                        if (birthDate && gender && monthlySalary && e.target.value && workConditions) {
                          calculatePension();
                        }
                      }}
                      className="w-full"
                    />
                  </div>

                  {/* Condiții de Muncă - Dropdown */}
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      Condiții de Muncă
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Poate reduce vârsta de pensionare</p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Select
                      value={workConditions}
                      onValueChange={(value) => {
                        setWorkConditions(value);
                        if (birthDate && gender && monthlySalary && contributionYears && value) {
                          calculatePension();
                        }
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selectează condițiile de muncă" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normale">Normale</SelectItem>
                        <SelectItem value="deosebite">Deosebite</SelectItem>
                        <SelectItem value="speciale">Speciale</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Results Display - Instant Results */}
                {calculationResult && (
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold mb-4 text-blue-900">Rezultatele Calculului</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Vârsta Dvs. de Pensionare</p>
                        <p className="text-2xl font-bold text-blue-900">{calculationResult.retirementAge}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Data Estimată a Pensionării</p>
                        <p className="text-2xl font-bold text-blue-900">{calculationResult.retirementDate}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Estimare Pensie Lunară (Pilon I)</p>
                        <p className="text-3xl font-bold text-green-600">
                          ~{calculationResult.monthlyPension.toLocaleString('ro-RO')} RON
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Required Disclaimers */}
                <div className="mt-6 space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Calcul bazat pe valoarea punctului de pensie de 2.031 lei, valabil în 2024</strong>
                  </p>
                  <p className="text-xs">
                    Acest calcul este o estimare informativă și nu are valoare oficială. Pentru calculul exact, vă rugăm să consultați Casa Națională de Pensii Publice (CNPP).
                  </p>
                </div>
              </TooltipProvider>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* H2 Section 1: Cum Funcționează Calculatorul Nostru de Pensie? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cum Funcționează Calculatorul Nostru de Pensie?
          </h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Calculatorul nostru de pensie folosește formulele oficiale ale Casei Naționale de Pensii Publice (CNPP) pentru a-ți oferi o estimare precisă a pensiei tale viitoare. Instrumentul nostru este actualizat conform cu <strong>legea pensiilor</strong> în vigoare și folosește <strong>valoarea punctului de pensie 2024</strong> de 2.031 lei.
            </p>
            <p className="mb-4">
              Prin introducerea datelor despre <strong>stagiul de cotizare</strong> și salariul tău actual, calculatorul determină punctajul mediu anual și aplică formula oficială pentru <strong>calculul pensiei</strong>. Toate estimările sunt bazate pe legislația curentă și pe valorile oficiale publicate de CNPP.
            </p>
            <p>
              Rezultatele oferă o imagine clară asupra viitorului tău financiar, ajutându-te să iei decizii informate despre planificarea pensiei tale.
            </p>
          </div>
        </div>
      </section>

      {/* H2 Section 2: Înțelegerea Sistemului de Pensii din România pe Scurt */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Înțelegerea Sistemului de Pensii din România pe Scurt
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sistemul de pensii din România se bazează pe 3 piloni, iar calculatorul nostru se concentrează în principal pe Pilonul I, pensia de stat, care constituie fundamentul pentru toată lumea.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilonul I */}
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pilonul I: Pensia de Stat (Publică și Obligatorie)</h3>
                <p className="text-gray-600">
                  Aceasta este pensia la care contribuie toată lumea care lucrează legal. Se definește prin termeni cheie: <strong>stagiu de cotizare</strong>, <strong>punctaj mediu anual</strong> și <strong>valoarea punctului de pensie</strong>. Este baza sistemului de pensii românesc.
                </p>
              </CardContent>
            </Card>

            {/* Pilonul II */}
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="bg-green-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">II</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pilonul II: Pensia Administrată Privat (Obligatorie)</h3>
                <p className="text-gray-600">
                  O parte din contribuția la stat (CAS) este redirecționată automat către un fond privat. Pensia finală va fi suma dintre Pilon I + Pilon II. Keywords: <strong>pensie pilonul 2</strong>, <strong>contributii sociale</strong>, <strong>fond de pensii</strong>.
                </p>
              </CardContent>
            </Card>

            {/* Pilonul III */}
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="bg-purple-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">III</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pilonul III: Pensia Facultativă (Opțională)</h3>
                <p className="text-gray-600">
                  Un plan suplimentar, opțional de economisire pentru pensie, similar cu un cont personal de economii, dar cu avantaje fiscale. Keywords: <strong>pensie pilonul 3</strong>, <strong>pensie facultativă</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* H2 Section 3: Factori Cheie în Calculul Pensiei Tale */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Factori Cheie în Calculul Pensiei Tale
          </h2>

          {/* H3: Vârsta Standard de Pensionare și Stagiul de Cotizare */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Vârsta Standard de Pensionare și Stagiul de Cotizare
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Vârsta de pensionare nu este fixă și depinde de sex și numărul total de ani lucrați. Iată tabelul cu vârstele standard de pensionare conform legii românești actuale:
            </p>
            
            {/* Required HTML table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sex</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vârsta Standard</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stagiu Minim</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pensie Anticipată</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bărbați</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">65 ani</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">35 ani</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">62 ani (cu penalizare)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Femei</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">63 ani</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">30 ani</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">60 ani (cu penalizare)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* H3: Formula Oficială de Calcul */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Formula Oficială de Calcul a Pensiei de Stat
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <p className="text-2xl font-bold text-blue-900 mb-4">
                Pensie = Punctaj Mediu Anual (PMA) × Valoarea Punctului de Pensie (VPP)
              </p>
              <p className="text-lg text-blue-700">
                Punctaj Mediu Anual se calculează pe baza salariilor și perioadei de cotizare, iar Valoarea Punctului de Pensie pentru 2024 este <strong>2.031 lei</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 Section 4: FAQ - Critical for Rich Snippets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Întrebări Frecvente (FAQ) despre Calculul Pensiei
          </h2>
          
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                La ce vârstă mă pot pensiona?
              </h3>
              <p className="text-gray-600">
                Vârsta de pensionare depinde de sex și istoricul de cotizare. Bărbații se pot pensiona la 65 ani cu 35 ani stagiu, femeile la 63 ani cu 30 ani stagiu (2024). Folosește calculatorul nostru pentru data exactă de pensionare bazată pe situația ta specifică.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Cum se calculează pensia anticipată?
              </h3>
              <p className="text-gray-600">
                Poți ieși la pensie cu câțiva ani mai devreme, dar cu o penalizare de 0.25% pe lună pentru fiecare lună de anticipare. Bărbații pot ieși la 62 ani, femeile la 60 ani, cu minimum 15 ani stagiu de cotizare. Keywords: <strong>pensie anticipata</strong>, <strong>pensie anticipata partial</strong>.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Care este valoarea punctului de pensie în 2024?
              </h3>
              <p className="text-gray-600">
                Începând cu 1 ianuarie 2024, valoarea punctului de pensie este de <strong>2.031 lei</strong>, conform legislației oficiale. Această valoare este folosită în calculatorul nostru pentru estimări precise.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Pot să-mi măresc pensia?
              </h3>
              <p className="text-gray-600">
                Da, prin contribuirea la Pilonul III (pensia facultativă), prin lucrul mai mulți ani sau prin continuarea muncii după vârsta standard de pensionare. Fiecare an suplimentar de muncă mărește punctajul mediu anual și implicit pensia.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Unde pot vedea stagiul meu de cotizare oficial?
              </h3>
              <p className="text-gray-600">
                Poți verifica stagiul de cotizare exact creând un cont online pe portalul Casei Naționale de Pensii Publice (CNPP.ro) sau vizitând o casă teritorială de pensii cu actul de identitate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-brand-blue text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Sigur și Confidențial</h3>
              <p className="text-neutral-medium">Datele tale sunt protejate conform GDPR</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-green text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Actualizat Conform Legii</h3>
              <p className="text-neutral-medium">Formula bazată pe legislația în vigoare</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-red text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">50,000+ Utilizatori</h3>
              <p className="text-neutral-medium">Calculatorul de încredere al românilor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="calculator" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planifică-ți Viitorul: Unelte și Resurse Esențiale</h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Utilizează calculatoarele noastre specializate pentru a-ți planifica perfect tranziția la pensie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Calculator Pensie Anticipată</h3>
                <p className="text-neutral-medium mb-4">
                  Calculează penalizarea pentru pensionarea anticipată și află dacă îți convine această opțiune.
                </p>
                <Button 
                  className="w-full bg-brand-blue hover:bg-blue-700"
                  onClick={() => window.location.href = '/calculator?type=early'}
                >
                  Calculează Acum
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Calculator Contribuții Pilon III</h3>
                <p className="text-neutral-medium mb-4">
                  Optimizează contribuțiile la pilonul III pentru a-ți maximiza economia fiscală.
                </p>
                <Button 
                  className="w-full bg-brand-green hover:bg-green-700"
                  onClick={() => window.location.href = '/calculator?type=pillar3'}
                >
                  Calculează Acum
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-red-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Simulator Planificare Pensie</h3>
                <p className="text-neutral-medium mb-4">
                  Vizualizează diferite scenarii și strategii pentru planificarea pensiei tale.
                </p>
                <Button 
                  className="w-full bg-brand-red hover:bg-red-700"
                  onClick={() => window.location.href = '/calculator?type=planning'}
                >
                  Simulează Acum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Învață Totul Despre Sistemul de Pensii din România</h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Ghidurile noastre complete te ajută să înțelegi și să navighezi cu succes sistemul de pensii românesc
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Silo 1: Planificarea Pensiei */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" 
                alt="Financial planning workspace" 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="bg-brand-blue text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Planificarea Pensiei</h3>
                <p className="text-neutral-medium mb-4">
                  Ghid complet pentru planificarea pensiei în România, strategii de investiții și evitarea greșelilor comune.
                </p>
                
                <div className="space-y-2 mb-6">
                  <span 
                    className="block text-brand-blue hover:underline text-sm cursor-pointer"
                    onClick={() => window.location.href = '/blog/top-5-greseli-planificare-pensie'}
                  >
                    → Top 5 Greșeli de Evitat în Planificarea Pensiei
                  </span>
                  <span 
                    className="block text-brand-blue hover:underline text-sm cursor-pointer"
                    onClick={() => window.location.href = '/blog/pilonul-ii-vs-pilonul-iii'}
                  >
                    → Pilonul II vs. Pilonul III: Ghid de Decizie
                  </span>
                  <span 
                    className="block text-brand-blue hover:underline text-sm cursor-pointer"
                    onClick={() => window.location.href = '/blog/strategii-investitii-pensie'}
                  >
                    → Strategii de Investiții pentru o Pensie Liniștită
                  </span>
                </div>
                
                <Button 
                  className="w-full bg-brand-blue hover:bg-blue-700"
                  onClick={() => window.location.href = '/planificare'}
                >
                  Vezi Ghidul Complet
                </Button>
              </CardContent>
            </Card>

            {/* Silo 2: Tipuri de Pensii */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" 
                alt="Senior couple planning retirement" 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="bg-brand-green text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <ListCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tipuri de Pensii</h3>
                <p className="text-neutral-medium mb-4">
                  Ghid exhaustiv despre toate tipurile de pensii disponibile în sistemul public din România.
                </p>
                
                <div className="space-y-2 mb-6">
                  <span 
                    className="block text-brand-green hover:underline text-sm cursor-pointer"
                    onClick={() => window.location.href = '/blog/pensie-limita-varsta'}
                  >
                    → Totul despre Pensia pentru Limită de Vârstă
                  </span>
                  <span 
                    className="block text-brand-green hover:underline text-sm cursor-pointer"
                    onClick={() => window.location.href = '/blog/pensie-anticipata-partiala'}
                  >
                    → Ghid Detaliat: Pensia Anticipată Parțială
                  </span>
                  <span 
                    className="block text-brand-green hover:underline text-sm cursor-pointer"
                    onClick={() => window.location.href = '/blog/pensie-urmas'}
                  >
                    → Pensia de Urmaș: Condiții de Acordare și Calcul
                  </span>
                </div>
                
                <Button 
                  className="w-full bg-brand-green hover:bg-green-700"
                  onClick={() => window.location.href = '/tipuri-pensii'}
                >
                  Vezi Ghidul Complet
                </Button>
              </CardContent>
            </Card>

            {/* Silo 3: Legislație și Resurse */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" 
                alt="Legal documents and books" 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="bg-brand-red text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Gavel className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Legislație și Resurse</h3>
                <p className="text-neutral-medium mb-4">
                  Legea pensiilor pe înțelesul tuturor, cu actualizări legislative și resurse oficiale.
                </p>
                
                <div className="space-y-2 mb-6">
                  <span 
                    className="block text-brand-red hover:underline text-sm cursor-pointer"
                    onClick={() => window.location.href = '/blog/varsta-pensionare-romania'}
                  >
                    → Vârsta Standard de Pensionare în România: Tabel Complet
                  </span>
                  <span 
                    className="block text-brand-red hover:underline text-sm cursor-pointer"
                    onClick={() => window.location.href = '/blog/stagiu-cotizare-calcul'}
                  >
                    → Cum se Calculează Corect Stagiul de Cotizare?
                  </span>
                  <span 
                    className="block text-brand-red hover:underline text-sm cursor-pointer"
                    onClick={() => window.location.href = '/blog/indexarea-pensiilor'}
                  >
                    → Indexarea Pensiilor: Mecanism și Impact
                  </span>
                </div>
                
                <Button 
                  className="w-full bg-brand-red hover:bg-red-700"
                  onClick={() => window.location.href = '/legislatie'}
                >
                  Vezi Ghidul Complet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ultimele Articole de pe Blog</h2>
            <p className="text-xl text-neutral-medium">Rămâi la curent cu toate noutățile din sistemul de pensii</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.length > 0 ? (
              articles.slice(0, 3).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
                    alt="Article illustration" 
                    className="w-full h-48 object-cover" 
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`text-white text-xs px-3 py-1 rounded-full ${
                        article.category === 'planificare' ? 'bg-brand-blue' :
                        article.category === 'tipuri-pensii' ? 'bg-brand-green' : 'bg-brand-red'
                      }`}>
                        {article.category === 'planificare' ? 'Planificare' :
                         article.category === 'tipuri-pensii' ? 'Tipuri Pensii' : 'Legislație'}
                      </span>
                      <span className="text-neutral-medium text-sm ml-3">
                        {new Date(article.publishDate).toLocaleDateString('ro-RO')}
                      </span>
                    </div>
                    <h3 
                      className="text-xl font-semibold mb-3 hover:text-brand-blue transition-colors cursor-pointer"
                      onClick={() => window.location.href = `/blog/${article.slug}`}
                    >
                      {article.title}
                    </h3>
                    <p className="text-neutral-medium mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-medium">
                        <Clock className="inline h-4 w-4 mr-1" />
                        {article.readTime} min citire
                      </span>
                      <span 
                        className="text-brand-blue font-medium hover:underline cursor-pointer"
                        onClick={() => window.location.href = `/blog/${article.slug}`}
                      >
                        Citește mai mult →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-medium text-lg">Nu există articole disponibile momentan.</p>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-neutral-dark text-white hover:bg-neutral-700"
              onClick={() => window.location.href = '/blog'}
            >
              Vezi Toate Articolele →
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <svg className="w-16 h-16 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <h2 className="text-3xl font-bold mb-4">Rămâi la Curent cu Schimbările Legislative</h2>
            <p className="text-xl mb-8 text-blue-100">
              Primește săptămânal în email cele mai importante actualizări despre sistemul de pensii din România
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Adresa ta de email" 
                  className="flex-1 px-4 py-3 rounded-lg text-neutral-dark focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-brand-red text-white hover:bg-red-700 whitespace-nowrap"
                >
                  Abonează-te
                </Button>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                🔒 Datele tale sunt protejate. Nu trimitem spam.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
