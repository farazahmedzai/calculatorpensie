import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Calculator, HelpCircle, Calendar, Users, TrendingUp, MapPin, ListCheck, Gavel } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { calculateStandardPension } from "@/lib/pension-calculations";
import { WebApplicationSchema, OrganizationSchema, WebSiteSchema } from "@/components/seo/StructuredData";
import FAQSection from "@/components/FAQSection";
import MetaTags from "@/components/seo/MetaTags";
import { trackCalculatorUsage } from "@/lib/analytics";

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

  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ['/api/articles/recent'],
  });

  const calculatePension = () => {
    if (!birthDate || !gender || !monthlySalary || !contributionYears || !workConditions) return;

    const currentAge = new Date().getFullYear() - new Date(birthDate).getFullYear();
    const standardRetirementAge = gender === "male" ? 65 : 63;
    
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

    // Track calculator usage for analytics
    trackCalculatorUsage('standard', result);
  };

  return (
    <div className="bg-white">
      <MetaTags 
        title="Calculator Pensie 2025 - Calculează Pensia de Stat (Pilon I) și Privată | CalculatorPensie.com"
        description="✅ Folosește cel mai simplu calculator de pensie online. Află vârsta de pensionare și estimează-ți pensia lunară (Pilon I și II) în mai puțin de 60 de secunde. Gratuit și precis!"
        canonical="https://calculatorpensie.com"
        keywords="calculator pensie, pensie romania, calculul pensiei, varsta pensionare, pilon 1, pilon 2, pilon 3, cnpp"
      />
      
      {/* Schema.org JSON-LD for SEO */}
      <WebApplicationSchema 
        name="Calculator Pensie Online România 2025"
        description="Cel mai precis calculator de pensie online din România. Calculează pensia de stat și vârsta de pensionare instant."
        url="https://calculatorpensie.com"
      />
      <OrganizationSchema 
        name="CalculatorPensie.com"
        url="https://calculatorpensie.com"
        description="Platforma #1 din România pentru calculul pensiilor și planificarea financiară pentru pensionare"
      />
      <WebSiteSchema 
        name="CalculatorPensie.com"
        url="https://calculatorpensie.com"
      />

      {/* Above-Fold Calculator Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calculator Pensie Online 2025: Află Vârsta și Valoarea Pensiei Tale
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Folosește cel mai precis calculator de pensie din România. Calculează instant pensia de stat și vârsta de pensionare bazate pe formulele oficiale CNPP.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Birth Date - Calendar Input */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Data Nașterii
                  </Label>
                  <Input
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
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Bărbat</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" >Femeie</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Monthly Salary - Number Input with Tooltip */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Salariu Brut Lunar Actual (RON)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Introdu salariul tău brut lunar în Lei RON</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    type="number"
                    placeholder="ex: 4500"
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

                {/* Contribution Years - Number Input with Tooltip */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <ListCheck className="h-4 w-4" />
                    Stagiu de Cotizare Actual (Ani)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Câți ani ai lucrat cu contract de muncă până acum?</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    type="number"
                    placeholder="ex: 15"
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

                {/* Work Conditions - Dropdown */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <Gavel className="h-4 w-4" />
                    Condiții de Muncă
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
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează condițiile de muncă" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normale">Normale</SelectItem>
                      <SelectItem value="deosebite">Deosebite (-2 ani)</SelectItem>
                      <SelectItem value="speciale">Speciale (-5 ani)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Results Display */}
                {calculationResult && (
                  <div className="md:col-span-2 lg:col-span-3 mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-4">Rezultatele Calculului</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-green-600">Vârsta Dvs. de Pensionare</p>
                        <p className="text-2xl font-bold text-green-800">{calculationResult.retirementAge}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-green-600">Data Estimată a Pensionării</p>
                        <p className="text-2xl font-bold text-green-800">{calculationResult.retirementDate}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-green-600">Estimare Pensie Lunară (Pilon I)</p>
                        <p className="text-2xl font-bold text-green-800">~{calculationResult.monthlyPension.toFixed(0)} RON</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Disclaimers */}
              <div className="mt-8 space-y-3 text-sm text-gray-600">
                <p className="flex items-start gap-2">
                  <span className="text-blue-600">ℹ️</span>
                  <span>Calcul bazat pe valoarea punctului de pensie de <strong>2.031 lei</strong>, valabil în 2025</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-orange-600">⚠️</span>
                  <span>Acest calcul este o estimare informativă și nu are valoare oficială. Pentru calculul exact, vă rugăm să consultați Casa Națională de Pensii Publice (CNPP).</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Calculator Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Cum Funcționează Calculatorul Nostru de Pensie?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Calculatorul nostru folosește formulele oficiale ale Casei Naționale de Pensii Publice (CNPP) pentru a-ți oferi o estimare precisă a pensiei tale de stat. Sistemul ia în considerare vârsta ta actuală, stagiul de cotizare, salariul și condițiile specifice de muncă conform <strong>Legii pensiilor nr. 263/2010</strong>.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Înțelegerea Sistemului de Pensii din România pe Scurt
            </h3>

            <p className="text-gray-600 mb-6">
              România are un sistem de pensii bazat pe trei piloni, fiecare cu un rol specific în asigurarea veniturilor la pensie:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-blue-800">Pilonul I: Pensia de Stat</h4>
                <p className="text-blue-700">Sistemul public obligatoriu administrat de CNPP. Reprezintă baza sistemului de pensii și este calculat folosind punctajul mediu anual și valoarea punctului de pensie.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-green-800">Pilonul II: Pensia Administrată Privat</h4>
                <p className="text-green-700">Sistemul obligatoriu de contribuții către fonduri private de pensii. Contribuția este de 3,75% din salariul brut pentru persoanele sub 35 de ani.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-purple-800">Pilonul III: Pensia Facultativă</h4>
                <p className="text-purple-700">Sistemul voluntar de economisire pentru pensie cu beneficii fiscale. Poți contribui până la 400 EUR anual cu deducere fiscală.</p>
              </div>
            </div>

            {/* Official Formula Display */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Formula Oficială de Calcul a Pensiei de Stat
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <p className="text-2xl font-bold text-blue-900 mb-4">
                  Pensie = Punctaj Mediu Anual (PMA) × Valoarea Punctului de Pensie (VPP)
                </p>
                <p className="text-lg text-blue-700">
                  Punctaj Mediu Anual se calculează pe baza salariilor și perioadei de cotizare, iar Valoarea Punctului de Pensie pentru 2025 este <strong>2.031 lei</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Rich Snippets */}
      <FAQSection />

      {/* Latest Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ultimele Articole despre Pensii</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rămâi la curent cu cele mai recente schimbări în legislația pensiilor și sfaturi pentru planificarea financiară
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 6).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime} min</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(article.publishDate).toLocaleDateString('ro-RO')}
                    </span>
                    <Link href={`/blog/${article.slug}`}>
                      <Button variant="outline" size="sm">
                        Citește mai mult
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Vezi Toate Articolele
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}