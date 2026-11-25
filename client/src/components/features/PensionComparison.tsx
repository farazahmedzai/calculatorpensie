import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Equal, Calculator } from "lucide-react";
import { Link } from "wouter";
import { OFFICIAL_VPR_2026 } from "@/lib/pension-calculations";

interface PensionScenario {
  id: string;
  name: string;
  description: string;
  monthlyPension: number;
  retirementAge: number;
  contributionYears: number;
  advantages: string[];
  disadvantages: string[];
  color: string;
}

// Computed deterministically at 1.00 contributory point/year × VPR 81 Lei + stability bonus
// 35y: (35 + 6.25 stability) × 81 = 3,341 Lei
// 32y early (-3y = 36 months × 0.40% = 14.4%): (32 + 4.00) × 81 × 0.856 = 2,496 Lei
// 38y delayed (+3y): (38 + 9.25 stability) × 81 = 3,827 Lei
const pensionScenarios: PensionScenario[] = [
  {
    id: "standard",
    name: "Pensie Standard (65 ani)",
    description: "Retragere la vârsta standard cu stagiu complet de 35 de ani (salariu mediu brut)",
    monthlyPension: Math.round((35 + 6.25) * OFFICIAL_VPR_2026),
    retirementAge: 65,
    contributionYears: 35,
    advantages: [
      "Zero penalizări lunare aplicate",
      "+6,25 puncte de stabilitate incluse",
      "Drept deplin de cumul pensie cu salariul",
    ],
    disadvantages: [
      "Retragere la vârsta legală deplină",
      "Supusă CASS 10% pentru partea peste 3.000 lei",
    ],
    color: "blue",
  },
  {
    id: "early",
    name: "Pensie Anticipată (62 ani)",
    description: "Retragere cu 3 ani (36 luni) mai devreme, stagiul complet realizat",
    monthlyPension: Math.round((35 + 6.25) * OFFICIAL_VPR_2026 * (1 - (36 * 0.40) / 100)),
    retirementAge: 62,
    contributionYears: 35,
    advantages: [
      "Ieșire din activitate cu 36 de luni mai devreme",
      "Penalizarea dispare automat la împlinirea vârstei standard",
    ],
    disadvantages: [
      "Diminuare de 14,4% până la vârsta standard",
      "Nu se poate cumula cu salariul în perioada de anticipare",
    ],
    color: "red",
  },
  {
    id: "delayed",
    name: "Prelungire Activitate (68 ani)",
    description: "Continuarea contribuțiilor cu +3 ani peste vârsta standard (38 ani stagiu)",
    monthlyPension: Math.round((38 + 9.25) * OFFICIAL_VPR_2026),
    retirementAge: 68,
    contributionYears: 38,
    advantages: [
      "+1,00 punct de stabilitate pentru fiecare an peste 35",
      "Cuantum brut cu ~14,5% mai mare decât la 65 ani",
      "Total puncte: 47,25 puncte × 81 lei",
    ],
    disadvantages: [
      "Perioadă mai scurtă de încasare a pensiei",
    ],
    color: "green",
  },
];

export default function PensionComparison() {
  const [selectedScenarios, setSelectedScenarios] = useState<string[]>([
    "standard",
    "early",
    "delayed",
  ]);

  const toggleScenario = (scenarioId: string) => {
    setSelectedScenarios((prev) =>
      prev.includes(scenarioId)
        ? prev.length > 1
          ? prev.filter((id) => id !== scenarioId)
          : prev
        : [...prev, scenarioId]
    );
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", badge: "bg-blue-600" };
      case "red":
        return { bg: "bg-red-50", border: "border-red-200", text: "text-red-900", badge: "bg-red-600" };
      case "green":
        return { bg: "bg-green-50", border: "border-green-200", text: "text-green-900", badge: "bg-green-600" };
      default:
        return { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-900", badge: "bg-gray-600" };
    }
  };

  const standardPension = pensionScenarios.find((s) => s.id === "standard")?.monthlyPension || 0;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comparație Scenarii de Pensionare 2026 (VPR = {OFFICIAL_VPR_2026} Lei)
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Exemplu calculat la salariu egal cu salariul mediu brut pe economie (1,00 punct/an) și stagiul complet de 35 de ani.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {pensionScenarios.map((scenario) => {
            const isSelected = selectedScenarios.includes(scenario.id);
            const colors = getColorClasses(scenario.color);
            return (
              <Button
                key={scenario.id}
                type="button"
                variant={isSelected ? "default" : "outline"}
                onClick={() => toggleScenario(scenario.id)}
                className={isSelected ? `${colors.badge} text-white` : ""}
              >
                {scenario.name}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {pensionScenarios
            .filter((s) => selectedScenarios.includes(s.id))
            .map((scenario) => {
              const colors = getColorClasses(scenario.color);
              return (
                <Card key={scenario.id} className={`${colors.bg} ${colors.border} border-2`}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className={`${colors.text} flex items-center text-lg`}>
                        {scenario.monthlyPension > standardPension ? (
                          <TrendingUp className="h-4 w-4 mr-2 flex-shrink-0" />
                        ) : scenario.monthlyPension < standardPension ? (
                          <TrendingDown className="h-4 w-4 mr-2 flex-shrink-0" />
                        ) : (
                          <Equal className="h-4 w-4 mr-2 flex-shrink-0" />
                        )}
                        {scenario.name}
                      </CardTitle>
                      <Badge className={`${colors.badge} text-white flex-shrink-0`}>
                        {scenario.retirementAge} ani
                      </Badge>
                    </div>
                    <CardDescription className={`${colors.text} opacity-90`}>
                      {scenario.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center border-b border-black/10 pb-3">
                      <span className={`text-sm font-medium ${colors.text}`}>Pensie brută estimată:</span>
                      <span className={`font-bold text-xl ${colors.text}`}>
                        {scenario.monthlyPension.toLocaleString("ro-RO")} RON
                      </span>
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase mb-1 ${colors.text}`}>Avantaje:</p>
                      <ul className={`text-sm space-y-1 ${colors.text}`}>
                        {scenario.advantages.map((adv, idx) => (
                          <li key={idx}>• {adv}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase mb-1 ${colors.text}`}>Limitări:</p>
                      <ul className={`text-sm space-y-1 ${colors.text}`}>
                        {scenario.disadvantages.map((dis, idx) => (
                          <li key={idx}>• {dis}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>

        <div className="text-center">
          <Link href="/calculator-pensie-anticipata/">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
              <Calculator className="mr-2 h-4 w-4" />
              Simulează Pensia Anticipată în Detaliu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
