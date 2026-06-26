import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { Calendar, Info, HelpCircle } from "lucide-react";

export default function CalculatorVarstaPage() {
  const [gender, setGender] = useState<string>("");
  const [birthYear, setBirthYear] = useState<number | null>(null);
  const [birthMonth, setBirthMonth] = useState<number | null>(null);
  const [result, setResult] = useState<{
    retirementAgeYears: number;
    retirementAgeMonths: number;
    retirementDate: string;
    minStage: number;
    fullStage: number;
  } | null>(null);

  const years = Array.from({ length: 50 }, (_, i) => 2008 - i);
  const months = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
  ];

  const handleCalculate = () => {
    if (!gender || !birthYear || !birthMonth) return;

    let ageYears = 65;
    let ageMonths = 0;
    let minStage = 15;
    let fullStage = 35;

    if (gender === "female") {
      // Romanian female gradual pension age increase schedule
      if (birthYear < 1958) {
        ageYears = 61;
        ageMonths = 0;
        fullStage = 31;
      } else if (birthYear === 1958) {
        ageYears = 61;
        ageMonths = 3;
        fullStage = 31;
      } else if (birthYear === 1959) {
        ageYears = 61;
        ageMonths = 6;
        fullStage = 31;
      } else if (birthYear === 1960) {
        ageYears = 62;
        ageMonths = 0;
        fullStage = 32;
      } else if (birthYear === 1961) {
        ageYears = 62;
        ageMonths = 4;
        fullStage = 32;
      } else if (birthYear === 1962) {
        ageYears = 62;
        ageMonths = 8;
        fullStage = 33;
      } else if (birthYear >= 1963 && birthYear < 1970) {
        ageYears = 63;
        ageMonths = 0;
        fullStage = 33;
      } else if (birthYear >= 1970) {
        // Equalization law target: gradual rise to 65 years by 2035
        ageYears = 65;
        ageMonths = 0;
        fullStage = 35;
      }
    } else {
      // Men: 65 years, 35 years stagiu complet
      ageYears = 65;
      ageMonths = 0;
      fullStage = 35;
    }

    // Estimate retirement date
    const birthDate = new Date(birthYear, birthMonth - 1, 15);
    const retirementDate = new Date(birthDate);
    retirementDate.setFullYear(retirementDate.getFullYear() + ageYears);
    retirementDate.setMonth(retirementDate.getMonth() + ageMonths);
    
    const formattedDate = retirementDate.toLocaleDateString("ro-RO", {
      year: "numeric",
      month: "long"
    });

    setResult({
      retirementAgeYears: ageYears,
      retirementAgeMonths: ageMonths,
      retirementDate: formattedDate,
      minStage,
      fullStage
    });
  };

  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags 
        title="Calculator Vârstă Pensionare 2026 | Data Exactă Limită de Vârstă"
        description="Calculează vârsta legală de pensionare în România pentru femei și bărbați. Află data exactă la care te poți pensiona și stagiul de cotizare necesar."
        canonical="https://calculatorpensie.com/calculator-varsta-pensionare"
        keywords="calculator varsta pensionare, cand ies la pensie, varsta pensionare femei romania, stagiu cotizare obligatoriu"
      />
      
      <WebPageSchema 
        name="Calculator Vârstă de Pensionare"
        description="Află când te poți pensiona în funcție de sex și data nașterii conform legislației din România"
        url="https://calculatorpensie.com/calculator-varsta-pensionare"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Calculator", url: "https://calculatorpensie.com/calculator" },
          { name: "Vârstă Pensionare" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculator Vârstă de Pensionare</h1>
          <p className="text-xl text-gray-700">
            Află exact anul și luna în care poți ieși la pensia standard pentru limită de vârstă
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Date Personale</CardTitle>
              <CardDescription>Introdu datele tale de naștere</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                      <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
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
                      <SelectItem key={idx} value={(idx + 1).toString()}>{m}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
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
              <Card className="bg-brand-blue bg-opacity-5 border-brand-blue border-opacity-10">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Rezultat Estimativ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-gray-600 block text-sm">Vârsta standard de pensionare:</span>
                    <strong className="text-2xl text-slate-800">
                      {result.retirementAgeYears} ani {result.retirementAgeMonths > 0 ? `și ${result.retirementAgeMonths} luni` : ""}
                    </strong>
                  </div>
                  <div>
                    <span className="text-gray-600 block text-sm">Data estimată a pensionării limită de vârstă:</span>
                    <strong className="text-xl text-brand-blue block mt-1">{result.retirementDate}</strong>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t pt-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Stagiu minim de cotizare:</span>
                      <strong className="text-sm">{result.minStage} ani</strong>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Stagiu complet de cotizare:</span>
                      <strong className="text-sm">{result.fullStage} ani</strong>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center p-8 text-center text-gray-500 border-dashed">
                <div>
                  <Calendar className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p>Completează datele din stânga pentru a calcula vârsta exactă de pensionare.</p>
                </div>
              </Card>
            )}

            {/* Explanatory tables */}
            <div className="bg-white rounded-lg p-6 shadow-sm prose prose-sm max-w-none">
              <h2>Când ies la pensie?</h2>
              <h3 className="font-bold text-slate-800 mt-4">Cadrul Legal în România (Legea 360/2023)</h3>
              <p>
                Conform legii, vârsta standard de pensionare este de <strong>65 de ani</strong> atât pentru bărbați, cât și pentru femei. Totuși, atingerea acestei vârste se realizează diferit:
              </p>
              <ul>
                <li><strong>Bărbații:</strong> Se pensionează la 65 de ani începând de mulți ani (stabil).</li>
                <li><strong>Femeile:</strong> Vârsta de pensionare crește gradual de la 61 de ani spre 63 de ani până în 2030, urmând ca apoi să crească gradual până la 65 de ani până în anul 2035 pentru a egala vârsta bărbaților.</li>
              </ul>
              <p>
                <strong>Reduceri de vârstă:</strong> Vârsta de pensionare poate fi redusă în cazul muncii în condiții deosebite/speciale de muncă, pentru mamele cu mai mulți copii (reducere de 6 luni pentru fiecare copil, până la maximum 3.5 ani) sau în cazul pensionării anticipate.
              </p>
              
              <figure className="mt-8 mb-4">
                <img 
                  src="/images/infografic-varsta-pensionare-2026.png" 
                  alt="Infografic Vârsta de Pensionare Femei și Bărbați România 2026-2035" 
                  className="w-full rounded-lg shadow-md border border-gray-100"
                  loading="lazy"
                />
                <figcaption className="text-center text-xs text-gray-500 mt-2">
                  Evoluția vârstei standard de pensionare conform Legii 360/2023.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
