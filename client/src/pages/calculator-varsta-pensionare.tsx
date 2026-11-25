import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { Calendar, CheckCircle } from "lucide-react";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/calculator-varsta-pensionare/"];

export default function CalculatorVarstaPage() {
  const [gender, setGender] = useState<string>("");
  const [birthYear, setBirthYear] = useState<number | null>(null);
  const [birthMonth, setBirthMonth] = useState<number | null>(null);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [result, setResult] = useState<{
    retirementAgeYears: number;
    retirementAgeMonths: number;
    retirementDate: string;
    minStage: number;
    fullStage: string;
    childReductionMonths: number;
  } | null>(null);

  const years = Array.from({ length: 50 }, (_, i) => 2005 - i);
  const months = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie",
  ];

  const handleCalculate = () => {
    if (!gender || !birthYear || !birthMonth) return;

    let ageYears = 65;
    let ageMonths = 0;
    const minStage = 15;
    let fullStage = "35 ani";
    let childReductionMonths = 0;

    if (gender === "female") {
      // Romanian female gradual schedule (Annex 5 of Law 360/2023)
      if (birthYear < 1961) {
        ageYears = 61;
        ageMonths = 6;
        fullStage = "31-32 ani";
      } else if (birthYear === 1961) {
        ageYears = 62;
        ageMonths = 0;
        fullStage = "32 ani și 4 luni";
      } else if (birthYear === 1962) {
        ageYears = 62;
        ageMonths = 4;
        fullStage = "32 ani și 10 luni";
      } else if (birthYear === 1963) {
        ageYears = 62;
        ageMonths = 7;
        fullStage = "33 ani și 3 luni";
      } else if (birthYear >= 1964 && birthYear <= 1966) {
        ageYears = 62;
        ageMonths = 10;
        fullStage = "33 ani și 8 luni";
      } else if (birthYear >= 1967 && birthYear <= 1969) {
        ageYears = 63;
        ageMonths = 6;
        fullStage = "34 ani";
      } else {
        // Cohorts reaching standard age >= 2035 equalize at 65 years
        ageYears = 65;
        ageMonths = 0;
        fullStage = "35 ani";
      }

      if (childrenCount > 0) {
        // Law 360/2023: 6 months per child up to 42 months (3y 6m for 7+ children)
        childReductionMonths = Math.min(childrenCount * 6, 42);
      }
    }

    const totalMonths = Math.max(58 * 12, ageYears * 12 + ageMonths - childReductionMonths);
    const finalYears = Math.floor(totalMonths / 12);
    const finalMonths = totalMonths % 12;

    const retirementYear = birthYear + finalYears + Math.floor((birthMonth - 1 + finalMonths) / 12);
    const retirementMonthIdx = (birthMonth - 1 + finalMonths) % 12;

    setResult({
      retirementAgeYears: finalYears,
      retirementAgeMonths: finalMonths,
      retirementDate: `${months[retirementMonthIdx]} ${retirementYear}`,
      minStage,
      fullStage,
      childReductionMonths,
    });
  };

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
          <h1 className="text-3xl font-bold mb-4">Calculator Vârstă de Pensionare 2026</h1>
          <p className="text-xl text-gray-700">
            Află anul și luna exactă a ieșirii la pensie pentru limită de vârstă (Anexa nr. 5, Legea 360/2023)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="text-lg">Date Personale</CardTitle>
              <CardDescription>Introdu sexul și data nașterii</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-xs text-green-800 bg-green-50 p-2.5 rounded border border-green-200">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-green-700" />
                <span className="font-semibold">Eșalonare oficială Anexa 5 · 2026</span>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Sexul</Label>
                <Select onValueChange={setGender}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Alege sexul" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Bărbat</SelectItem>
                    <SelectItem value="female">Femeie</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Anul Nașterii</Label>
                <Select onValueChange={(val) => setBirthYear(Number(val))}>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Alege anul" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((y) => (
                      <SelectItem key={y} value={y.toString()}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="month">Luna Nașterii</Label>
                <Select onValueChange={(val) => setBirthMonth(Number(val))}>
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Alege luna" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((m, idx) => (
                      <SelectItem key={idx} value={(idx + 1).toString()}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {gender === "female" && (
                <div className="space-y-2">
                  <Label htmlFor="children">Număr copii născuți și crescuți</Label>
                  <Select onValueChange={(val) => setChildrenCount(Number(val))} defaultValue="0">
                    <SelectTrigger id="children">
                      <SelectValue placeholder="0 copii" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0 copii (fără reducere)</SelectItem>
                      <SelectItem value="1">1 copil (-6 luni)</SelectItem>
                      <SelectItem value="2">2 copii (-1 an)</SelectItem>
                      <SelectItem value="3">3 copii (-1 an și 6 luni)</SelectItem>
                      <SelectItem value="4">4 copii (-2 ani)</SelectItem>
                      <SelectItem value="5">5 copii (-2 ani și 6 luni)</SelectItem>
                      <SelectItem value="6">6 copii (-3 ani)</SelectItem>
                      <SelectItem value="7">7+ copii (-3 ani și 6 luni)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Button
                type="button"
                onClick={handleCalculate}
                className="w-full bg-brand-blue hover:bg-blue-700"
                disabled={!gender || !birthYear || !birthMonth}
              >
                Află Data Pensionării
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            {result ? (
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Rezultat Estimativ Pensionare
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-gray-700 block text-sm">Vârsta standard estimată:</span>
                    <strong className="text-2xl text-slate-900">
                      {result.retirementAgeYears} ani{" "}
                      {result.retirementAgeMonths > 0 ? `și ${result.retirementAgeMonths} luni` : ""}
                    </strong>
                    {result.childReductionMonths > 0 && (
                      <span className="block text-xs text-green-700 mt-1">
                        Include reducerea legală de {result.childReductionMonths} luni pentru creșterea copiilor (cu stagiul complet îndeplinit).
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-700 block text-sm">Luna și anul estimat al ieșirii la pensie:</span>
                    <strong className="text-xl text-brand-blue block mt-1">{result.retirementDate}</strong>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-blue-200 pt-4">
                    <div>
                      <span className="text-xs text-gray-600 block">Stagiu minim contributiv:</span>
                      <strong className="text-sm text-slate-900">{result.minStage} ani</strong>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600 block">Stagiu complet orientativ:</span>
                      <strong className="text-sm text-slate-900">{result.fullStage}</strong>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="flex items-center justify-center p-8 text-center text-gray-600 border-dashed">
                <div>
                  <Calendar className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p>Selectează sexul, anul și luna nașterii pentru a calcula data estimată a pensionării.</p>
                </div>
              </Card>
            )}

            <div className="bg-white rounded-lg p-6 shadow-sm prose prose-sm max-w-none">
              <h2>Când ies la pensie în România? Eșalonarea Legea 360/2023</h2>
              <p>
                Conform <strong>Anexei nr. 5 din Legea nr. 360/2023</strong>, vârsta standard de pensionare va ajunge treptat la <strong>65 de ani atât pentru femei, cât și pentru bărbați</strong> până în ianuarie 2035.
              </p>

              <table className="w-full text-xs sm:text-sm border-collapse my-4">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="border p-2">Categorie</th>
                    <th className="border p-2">Vârstă Standard 2026</th>
                    <th className="border p-2">Țintă Finală 2035</th>
                    <th className="border p-2">Stagiu Minim / Complet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold">Bărbați</td>
                    <td className="border p-2">65 ani</td>
                    <td className="border p-2">65 ani</td>
                    <td className="border p-2">15 ani / 35 ani</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border p-2 font-semibold">Femei</td>
                    <td className="border p-2">~62 ani și 6-7 luni (creștere graduală)</td>
                    <td className="border p-2">65 ani (63 ani în 2030)</td>
                    <td className="border p-2">15 ani / 33-35 ani (spre 35 ani)</td>
                  </tr>
                </tbody>
              </table>

              <figure className="not-prose my-6">
                <img
                  src="/images/varsta-pensionare-femei-2026-2035.svg"
                  alt="Graficul cresterii graduale a varstei de pensionare pentru femei spre egalizarea cu barbatii la 65 ani in 2035 conform Anexei 5 Legea 360/2023"
                  width={1536}
                  height={864}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border border-slate-200 shadow-sm"
                />
              </figure>

              <h3>Reduceri legale ale vârstei de pensionare</h3>
              <ul>
                <li>
                  <strong>Femei care au născut și crescut copii (Art. 51 Legea 360/2023):</strong> reducere de 6 luni pentru primul copil, 1 an pentru 2 copii, până la <strong>3 ani și 6 luni pentru 7 sau mai mulți copii</strong> (cu condiția realizării stagiului complet de cotizare).
                </li>
                <li>
                  <strong>Condiții deosebite și speciale de muncă:</strong> reduceri proporționale conform perioadelor lucrate în grupele de risc.
                </li>
                <li>
                  <strong>Pensie anticipată:</strong> cu până la 5 ani mai devreme dacă ai realizat integral stagiul complet contributiv.
                </li>
              </ul>

              <div className="not-prose mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <Link href="/" className="p-3 border rounded bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold">
                  → Calculator Pensie Principal (VPR 81 Lei)
                </Link>
                <Link href="/calculator-pensie-anticipata/" className="p-3 border rounded bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold">
                  → Calculator Pensie Anticipată
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
