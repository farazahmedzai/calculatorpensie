import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, TrendingDown, Equal, Calculator, Info } from "lucide-react";
import { Link } from "wouter";

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

const pensionScenarios: PensionScenario[] = [
  {
    id: "standard",
    name: "Pensie Standard",
    description: "Pensionarea la vârsta legală cu stagiul complet de cotizare",
    monthlyPension: 2850,
    retirementAge: 65,
    contributionYears: 35,
    advantages: [
      "Fără penalizări",
      "Beneficii complete de sănătate",
      "Posibilitatea de a lucra part-time"
    ],
    disadvantages: [
      "Pensionare târzie",
      "Risc de schimbări legislative",
      "Valoare reală scăzută din cauza inflației"
    ],
    color: "blue"
  },
  {
    id: "early",
    name: "Pensie Anticipată",
    description: "Pensionarea cu 3 ani mai devreme cu penalizare aplicată",
    monthlyPension: 2137,
    retirementAge: 62,
    contributionYears: 35,
    advantages: [
      "Pensionare mai devreme",
      "Mai mult timp liber",
      "Evitarea stresului de la muncă"
    ],
    disadvantages: [
      "Pensie cu 25% mai mică",
      "Penalizare permanentă",
      "Risc financiar crescut"
    ],
    color: "red"
  },
  {
    id: "delayed",
    name: "Pensie Întârziată",
    description: "Lucrul cu 3 ani peste vârsta de pensionare cu bonus",
    monthlyPension: 3420,
    retirementAge: 68,
    contributionYears: 38,
    advantages: [
      "Pensie cu 20% mai mare",
      "Venituri suplimentare din muncă",
      "Contribuții continue"
    ],
    disadvantages: [
      "Stres și oboseală crescută",
      "Mai puțin timp de pensie",
      "Risc de sănătate"
    ],
    color: "green"
  }
];

export default function PensionComparison() {
  const [selectedScenarios, setSelectedScenarios] = useState<string[]>(["standard"]);

  const toggleScenario = (scenarioId: string) => {
    setSelectedScenarios(prev => 
      prev.includes(scenarioId)
        ? prev.filter(id => id !== scenarioId)
        : [...prev, scenarioId]
    );
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-800',
          badge: 'bg-blue-600'
        };
      case 'red':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-800',
          badge: 'bg-red-600'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-800',
          badge: 'bg-green-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-800',
          badge: 'bg-gray-600'
        };
    }
  };

  const getComparisonIcon = (scenario: PensionScenario) => {
    const standardPension = pensionScenarios.find(s => s.id === "standard")?.monthlyPension || 0;
    if (scenario.monthlyPension > standardPension) return <TrendingUp className="h-4 w-4" />;
    if (scenario.monthlyPension < standardPension) return <TrendingDown className="h-4 w-4" />;
    return <Equal className="h-4 w-4" />;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Compară Scenariile de Pensionare
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Analizează diferitele opțiuni de pensionare și găsește strategia potrivită pentru situația ta financiară. 
            Fiecare scenariu are avantaje și dezavantaje specifice.
          </p>
        </div>

        {/* Scenario Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Selectează scenariile pentru comparație:</h3>
          <div className="flex flex-wrap gap-3">
            {pensionScenarios.map(scenario => {
              const isSelected = selectedScenarios.includes(scenario.id);
              const colors = getColorClasses(scenario.color);
              
              return (
                <Button
                  key={scenario.id}
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => toggleScenario(scenario.id)}
                  className={`${isSelected ? colors.badge + ' text-white' : ''}`}
                >
                  {scenario.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Scenarios Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pensionScenarios
            .filter(scenario => selectedScenarios.includes(scenario.id))
            .map(scenario => {
              const colors = getColorClasses(scenario.color);
              
              return (
                <Card key={scenario.id} className={`${colors.bg} ${colors.border} border-2`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className={`${colors.text} flex items-center`}>
                        {getComparisonIcon(scenario)}
                        <span className="ml-2">{scenario.name}</span>
                      </CardTitle>
                      <Badge className={colors.badge}>
                        {scenario.retirementAge} ani
                      </Badge>
                    </div>
                    <CardDescription className={colors.text}>
                      {scenario.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Key Metrics */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${colors.text}`}>Pensie lunară:</span>
                        <span className={`font-bold text-lg ${colors.text}`}>
                          {scenario.monthlyPension.toLocaleString('ro-RO')} RON
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${colors.text}`}>Vârsta pensionării:</span>
                        <span className={`font-semibold ${colors.text}`}>
                          {scenario.retirementAge} ani
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${colors.text}`}>Stagiu necesar:</span>
                        <span className={`font-semibold ${colors.text}`}>
                          {scenario.contributionYears} ani
                        </span>
                      </div>
                    </div>

                    <Separator />

                    {/* Advantages */}
                    <div>
                      <h4 className={`font-semibold text-sm mb-2 ${colors.text}`}>✅ Avantaje:</h4>
                      <ul className="space-y-1">
                        {scenario.advantages.map((advantage, index) => (
                          <li key={index} className={`text-xs ${colors.text}`}>
                            • {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Disadvantages */}
                    <div>
                      <h4 className={`font-semibold text-sm mb-2 ${colors.text}`}>⚠️ Dezavantaje:</h4>
                      <ul className="space-y-1">
                        {scenario.disadvantages.map((disadvantage, index) => (
                          <li key={index} className={`text-xs ${colors.text}`}>
                            • {disadvantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>

        {/* Summary Comparison Table */}
        {selectedScenarios.length > 1 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Comparație Rapidă</CardTitle>
              <CardDescription>
                Diferențele principale între scenariile selectate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Scenariu</th>
                      <th className="text-right py-3 px-4">Pensie Lunară</th>
                      <th className="text-right py-3 px-4">Vârsta</th>
                      <th className="text-right py-3 px-4">Diferența față de Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pensionScenarios
                      .filter(scenario => selectedScenarios.includes(scenario.id))
                      .map(scenario => {
                        const standardPension = pensionScenarios.find(s => s.id === "standard")?.monthlyPension || 0;
                        const difference = scenario.monthlyPension - standardPension;
                        const percentageDiff = ((difference / standardPension) * 100).toFixed(1);
                        
                        return (
                          <tr key={scenario.id} className="border-b">
                            <td className="py-3 px-4 font-medium">{scenario.name}</td>
                            <td className="text-right py-3 px-4 font-semibold">
                              {scenario.monthlyPension.toLocaleString('ro-RO')} RON
                            </td>
                            <td className="text-right py-3 px-4">{scenario.retirementAge} ani</td>
                            <td className={`text-right py-3 px-4 font-semibold ${
                              difference > 0 ? 'text-green-600' : difference < 0 ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              {difference > 0 ? '+' : ''}{difference.toLocaleString('ro-RO')} RON
                              <br />
                              <span className="text-xs">
                                ({difference > 0 ? '+' : ''}{percentageDiff}%)
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="text-center bg-blue-50 rounded-lg p-8">
          <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            Calculează Scenariul Tău Personal
          </h3>
          <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
            Folosește calculatoarele noastre pentru a determina exact care scenariu se potrivește 
            cel mai bine situației tale financiare și preferințelor personale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Calculator Principal
              </Button>
            </Link>
            <Link href="/calculator?type=early">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Pensie Anticipată
              </Button>
            </Link>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Notă Importantă</h4>
              <p className="text-yellow-700 text-sm">
                Aceste calcule sunt estimări bazate pe legislația actuală și pot varia în funcție de 
                schimbările legislative viitoare. Pentru o analiză detaliată, consultați un consilier 
                financiar autorizat sau Casa Națională de Pensii Publice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}