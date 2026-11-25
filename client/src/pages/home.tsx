import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Calculator,
  Calendar,
  Users,
  TrendingUp,
  ListCheck,
  Gavel,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "wouter";
import {
  AVERAGE_GROSS_SALARY_2026,
  calculateStandardPension,
  MINIMUM_PENSION_2026,
  OFFICIAL_VPR_2026,
} from "@/lib/pension-calculations";
import FAQSection from "@/components/FAQSection";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import PensionComparison from "@/components/features/PensionComparison";
import NewsletterSignup from "@/components/newsletter/NewsletterSignup";
import PerformanceTracker from "@/components/analytics/PerformanceTracker";
import { trackCalculatorUsage } from "@/lib/analytics";
import { getRecentArticles, type Article } from "@/data/static-articles";
import { ROUTES_META } from "@/data/routes-meta";
import { formatRoDate } from "@/lib/utils";

const HOME_META = ROUTES_META["/"];

export default function Home() {
  const [birthDate, setBirthDate] = useState("1985-05-15");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [incomeType, setIncomeType] = useState<"gross" | "net">("gross");
  const [monthlySalary, setMonthlySalary] = useState("9192");
  const [contributionYears, setContributionYears] = useState("15");
  const [workConditions, setWorkConditions] = useState("normale");
  const [calcError, setCalcError] = useState<string | null>(null);
  const [calculationResult, setCalculationResult] = useState<{
    retirementAge: string;
    retirementDate: string;
    monthlyPension: number;
    netMonthlyPension: number;
    stabilityPoints: number;
    totalPoints: number;
  } | null>(null);

  const articles = getRecentArticles(6);

  const runCalculation = (overrides?: {
    birthDate?: string;
    gender?: "male" | "female";
    incomeType?: "gross" | "net";
    monthlySalary?: string;
    contributionYears?: string;
    workConditions?: string;
  }) => {
    const bd = overrides?.birthDate ?? birthDate;
    const g = overrides?.gender ?? gender;
    const it = overrides?.incomeType ?? incomeType;
    const ms = overrides?.monthlySalary ?? monthlySalary;
    const cy = overrides?.contributionYears ?? contributionYears;
    const wc = overrides?.workConditions ?? workConditions;

    setCalcError(null);
    if (!bd || !g || !ms || !cy || !wc) {
      setCalcError("Completează toate câmpurile pentru a calcula estimarea pensiei.");
      return;
    }

    const parsedSalary = parseFloat(ms);
    const parsedYears = parseInt(cy, 10);
    if (!Number.isFinite(parsedSalary) || parsedSalary <= 0) {
      setCalcError("Introdu o valoare validă pentru salariul lunar.");
      return;
    }
    if (!Number.isFinite(parsedYears) || parsedYears < 0) {
      setCalcError("Introdu un stagiu de cotizare valid.");
      return;
    }

    const birth = new Date(bd);
    if (Number.isNaN(birth.getTime())) {
      setCalcError("Data nașterii nu este validă.");
      return;
    }

    const currentYear = 2026;
    const currentAge = currentYear - birth.getFullYear();
    const standardRetirementAge = g === "male" ? 65 : 63;

    let adjustedRetirementAge = standardRetirementAge;
    if (wc === "deosebite") adjustedRetirementAge -= 2;
    if (wc === "speciale") adjustedRetirementAge -= 5;

    try {
      const result = calculateStandardPension({
        currentAge,
        monthlyIncome: parsedSalary,
        incomeType: it,
        contributionYears: parsedYears,
        retirementAge: adjustedRetirementAge,
      });

      const retirementYear = currentYear + Math.max(0, adjustedRetirementAge - currentAge);
      const retirementMonth = birth.getMonth();
      const monthNames = [
        "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
        "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie",
      ];

      setCalculationResult({
        retirementAge: `${adjustedRetirementAge} ani`,
        retirementDate: `${monthNames[retirementMonth]} ${retirementYear}`,
        monthlyPension: result.monthlyPension,
        netMonthlyPension: result.netMonthlyPension,
        stabilityPoints: result.stabilityPoints,
        totalPoints: result.totalPoints,
      });

      trackCalculatorUsage("standard", result.monthlyPension);
    } catch (err: any) {
      setCalculationResult(null);
      setCalcError(err?.message || "Verifică datele introduse.");
    }
  };

  return (
    <div className="bg-white">
      <PerformanceTracker page="/" title={HOME_META.title} />
      <MetaTags
        title={HOME_META.title}
        description={HOME_META.description}
        canonical={HOME_META.canonical}
        keywords={HOME_META.keywords}
        schemaKind="calculator"
        schemaName={HOME_META.schemaName}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>

      {/* Above-Fold Calculator Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calculator Pensie România 2026 (Legea 360/2023)
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto font-medium">
              Simulează rapid pensia de stat, vârsta de pensionare și punctele de stabilitate pe baza formulelor oficiale CNPP și a Valorii Punctului de Referință de{" "}
              <strong>{OFFICIAL_VPR_2026} lei</strong> în 2026.
            </p>
            <p className="text-sm text-gray-700 max-w-3xl mx-auto mt-3">
              CalculatorPensie.com este un instrument independent, neafiliat Casei Naționale de Pensii Publice (CNPP). Pentru istoricul oficial al contribuțiilor tale, consultă{" "}
              <a
                href="https://www.cnpp.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue font-semibold underline hover:text-blue-700"
              >
                portalul CNPP (cnpp.ro)
              </a>
              .
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="flex items-center text-sm text-green-800 bg-green-50 p-3 rounded-md mb-6 border border-green-200">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 text-green-700" />
                <span className="font-semibold">
                  Parametri actualizați 2026: VPR = {OFFICIAL_VPR_2026} Lei (Legea 141/2025) | Salariu Mediu Brut = {AVERAGE_GROSS_SALARY_2026.toLocaleString("ro-RO")} Lei
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  runCalculation();
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="home-birthdate" className="text-sm font-semibold flex items-center gap-2 text-gray-900">
                      <Calendar className="h-4 w-4" />
                      Data Nașterii
                    </Label>
                    <Input
                      id="home-birthdate"
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-gray-900">
                      <Users className="h-4 w-4" />
                      Sex
                    </Label>
                    <RadioGroup
                      value={gender}
                      onValueChange={(value) => setGender(value as "male" | "female")}
                      className="flex gap-4 pt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="text-gray-900 font-medium">Bărbat</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="text-gray-900 font-medium">Femeie</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="home-salary" className="text-sm font-semibold flex items-center gap-2 text-gray-900">
                        <TrendingUp className="h-4 w-4" />
                        Salariu Lunar ({incomeType === "gross" ? "Brut" : "Net"} RON)
                      </Label>
                      <div className="inline-flex rounded-md border border-gray-300 text-xs overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setIncomeType("gross")}
                          className={`px-2 py-0.5 font-semibold ${
                            incomeType === "gross" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                          }`}
                        >
                          Brut
                        </button>
                        <button
                          type="button"
                          onClick={() => setIncomeType("net")}
                          className={`px-2 py-0.5 font-semibold ${
                            incomeType === "net" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                          }`}
                        >
                          Net
                        </button>
                      </div>
                    </div>
                    <Input
                      id="home-salary"
                      type="number"
                      placeholder={incomeType === "gross" ? "ex: 9192" : "ex: 5400"}
                      value={monthlySalary}
                      onChange={(e) => setMonthlySalary(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="home-years" className="text-sm font-semibold flex items-center gap-2 text-gray-900">
                      <ListCheck className="h-4 w-4" />
                      Stagiu de Cotizare Actual (Ani)
                    </Label>
                    <Input
                      id="home-years"
                      type="number"
                      min={0}
                      max={50}
                      placeholder="ex: 15"
                      value={contributionYears}
                      onChange={(e) => setContributionYears(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="home-conditions" className="text-sm font-semibold flex items-center gap-2 text-gray-900">
                      <Gavel className="h-4 w-4" />
                      Condiții de Muncă
                    </Label>
                    <Select value={workConditions} onValueChange={setWorkConditions}>
                      <SelectTrigger id="home-conditions">
                        <SelectValue placeholder="Selectează condițiile de muncă" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normale">Normale</SelectItem>
                        <SelectItem value="deosebite">Deosebite (-2 ani)</SelectItem>
                        <SelectItem value="speciale">Speciale (-5 ani)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      <Calculator className="w-5 h-5 mr-2" />
                      Calculează Pensia
                    </Button>
                  </div>
                </div>
              </form>

              {calcError && (
                <div className="mt-6 flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{calcError}</span>
                </div>
              )}

              {calculationResult && (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">
                    Rezultatul Estimării Tale (Conform Legii 360/2023)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center bg-white p-3 rounded border border-green-100">
                      <p className="text-xs text-green-700">Vârstă Pensionare</p>
                      <p className="text-xl font-bold text-green-900">{calculationResult.retirementAge}</p>
                      <p className="text-xs text-gray-600">{calculationResult.retirementDate}</p>
                    </div>
                    <div className="text-center bg-white p-3 rounded border border-green-100">
                      <p className="text-xs text-green-700">Punctaj Total Estimat</p>
                      <p className="text-xl font-bold text-green-900">{calculationResult.totalPoints.toFixed(2)} pct</p>
                      <p className="text-xs text-gray-600">
                        Stabilitate: +{calculationResult.stabilityPoints.toFixed(2)} pct
                      </p>
                    </div>
                    <div className="text-center bg-white p-3 rounded border border-green-100">
                      <p className="text-xs text-green-700">Pensie Brută (VPR {OFFICIAL_VPR_2026} Lei)</p>
                      <p className="text-2xl font-bold text-green-900">
                        ~{calculationResult.monthlyPension.toLocaleString("ro-RO")} RON
                      </p>
                    </div>
                    <div className="text-center bg-white p-3 rounded border border-green-100">
                      <p className="text-xs text-blue-700">Net Estimat (după taxe 2026)</p>
                      <p className="text-2xl font-bold text-blue-900">
                        ~{calculationResult.netMonthlyPension.toLocaleString("ro-RO")} RON
                      </p>
                      <p className="text-xs text-gray-600">CASS + impozit &gt; 3.000 lei</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                <Link href="/calculator-varsta-pensionare/" className="p-2.5 rounded border bg-slate-50 hover:bg-blue-50 text-blue-700 font-medium text-center">
                  Calculator Vârstă Pensionare →
                </Link>
                <Link href="/calculator-pensie-anticipata/" className="p-2.5 rounded border bg-slate-50 hover:bg-blue-50 text-blue-700 font-medium text-center">
                  Calculator Pensie Anticipată →
                </Link>
                <Link href="/calculator-puncte-pensie/" className="p-2.5 rounded border bg-slate-50 hover:bg-blue-50 text-blue-700 font-medium text-center">
                  Calculator Puncte Stabilitate →
                </Link>
              </div>

              <div className="mt-6 space-y-2 text-sm text-slate-700">
                <p>
                  <strong>Notă metodologică:</strong> Calculul utilizează formula din <strong>Legea nr. 360/2023</strong>{" "}
                  împreună cu <strong>VPR = {OFFICIAL_VPR_2026} lei</strong> (valabil în 2026 conform OUG nr. 156/2024 și Legii nr. 141/2025) și salariul mediu brut bugetar de{" "}
                  <strong>{AVERAGE_GROSS_SALARY_2026.toLocaleString("ro-RO")} lei</strong>.
                </p>
                <p className="text-xs text-slate-600">
                  Acest calculator oferă o estimare orientativă și nu înlocuiește decizia oficială de pensionare emisă de Casa Națională de Pensii Publice (CNPP).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Calculator Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Cum Funcționează Calculul Pensiei în România în 2026?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-800 mb-6 font-medium">
              Sistemul public de pensii se bazează pe principiul contributivității reglementat prin <strong>Legea nr. 360/2023</strong>. Cuantumul lunar al pensiei se obține înmulțind numărul total de puncte acumulate cu Valoarea Punctului de Referință (VPR).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg mb-2 text-blue-900">Pilonul I: Pensia de Stat</h3>
                <p className="text-sm text-blue-900">
                  Sistemul public obligatoriu administrat de CNPP. Punctajul lunar se determină raportând venitul brut la câștigul salarial mediu brut pe economie ({AVERAGE_GROSS_SALARY_2026.toLocaleString("ro-RO")} lei în 2026).
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold text-lg mb-2 text-green-900">Pilonul II: Pensia Privată</h3>
                <p className="text-sm text-green-900">
                  Contribuția obligatorie de 4,75% din venitul brut, direcționată din CAS-ul de 25% către contul tău privat administrat de fonduri autorizate ASF.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-lg mb-2 text-purple-900">Pilonul III: Pensia Facultativă</h3>
                <p className="text-sm text-purple-900">
                  Economisire voluntară cu deductibilitate fiscală de până la 400 EUR anual atât pentru angajat, cât și pentru angajator.
                </p>
              </div>
            </div>

            <div className="mb-10 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Formula Oficială de Calcul CNPP (2026)
              </h3>
              <p className="text-2xl font-bold text-blue-900 mb-3">
                Pensie Brută = Număr Total de Puncte × {OFFICIAL_VPR_2026} Lei (VPR)
              </p>
              <p className="text-base text-blue-800 font-medium mb-0">
                Număr Total de Puncte = Puncte de Contributivitate + Puncte de Stabilitate (pentru stagiu &gt; 25 ani) + Puncte Asimilate. Valoarea VPR rămâne înghețată la <strong>81 lei</strong> în 2026 (majorarea prognozată la 91 lei fiind suspendată prin OUG 156/2024 și Legea 141/2025).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legislative Parameters 2026 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
            Parametri Oficiali Pensii România — 2026
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Valoare Punct Referință (VPR)</h3>
              <p className="text-3xl font-bold text-blue-700 mb-2">{OFFICIAL_VPR_2026} Lei</p>
              <p className="text-sm text-gray-700">
                Menținut la 81 lei pentru anul 2026 conform Legii nr. 141/2025 (punctul clasic anterior a fost 2.032 lei / 25).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Pensie Minimă Garantată</h3>
              <p className="text-3xl font-bold text-green-700 mb-2">{MINIMUM_PENSION_2026.toLocaleString("ro-RO")} Lei</p>
              <p className="text-sm text-gray-700">
                Indemnizația socială minimă garantată de stat pentru pensionarii cu domiciliul în România.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Câștig Salarial Mediu Brut</h3>
              <p className="text-3xl font-bold text-purple-700 mb-2">{AVERAGE_GROSS_SALARY_2026.toLocaleString("ro-RO")} Lei</p>
              <p className="text-sm text-gray-700">
                Repere oficiale din Legea bugetului asigurărilor sociale de stat pe anul 2026 (Legea nr. 44/2026).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">
              Contribuții Sociale și Impozitarea Pensiilor în 2026
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
              <div>
                <h4 className="text-base font-semibold mb-2 text-blue-900">Contribuția de Asigurări Sociale (CAS) la Salarii</h4>
                <ul className="space-y-1.5">
                  <li>• <strong>Angajat:</strong> 25% din întregul salariu brut (din care 4,75% merge către Pilonul II).</li>
                  <li>• <strong>Angajator:</strong> 2,25% contribuție asiguratorie pentru muncă (CAM), plus 4%/8% pentru condiții deosebite/speciale.</li>
                  <li>• <strong>PFA:</strong> 25% aplicat la plafonul de 12 sau 24 salarii minime brute, în funcție de venitul net.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-2 text-green-900">CASS și Impozit aplicate Pensiilor (Legea 141/2025)</h4>
                <ul className="space-y-1.5">
                  <li>• <strong>Sub 3.000 lei:</strong> scutire completă — zero impozit pe venit și zero CASS.</li>
                  <li>• <strong>CASS 10%:</strong> se aplică exclusiv sumei care depășește plafonul de 3.000 lei (până la 31 dec. 2027).</li>
                  <li>• <strong>Impozit 10%:</strong> aplicat bazei impozabile ce depășește plafonul lunar de 3.000 lei.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section eagerly rendered for SSR */}
      <FAQSection />

      {/* Pension Comparison Section */}
      <PensionComparison />

      {/* Free Resources Banner (zero phantom API form) */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup className="bg-white/10 backdrop-blur-sm border-white/20" compact />
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Ultimele Ghiduri și Analize despre Pensii</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Articole explicative despre Legea 360/2023, VPR 81 lei, calculul vechimii CNPP și pensiile private
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article: Article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.readTime} min</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                      <Link href={`/blog/${article.slug}/`} className="hover:text-blue-700">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-xs text-gray-600 font-medium">
                      {formatRoDate(article.publishDate)}
                    </span>
                    <Link href={`/blog/${article.slug}/`}>
                      <Button variant="outline" size="sm">Citește</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Vezi Toate Cele 20 de Articole
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
