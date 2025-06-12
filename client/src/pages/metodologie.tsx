import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, ExternalLink, CheckCircle } from "lucide-react";

export default function Metodologie() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Metodologie de Calcul a Pensiei
          </h1>
          <p className="text-xl text-gray-600">
            Transparență completă asupra formulelor, datelor și surselor oficiale folosite în calculatorul nostru de pensie.
          </p>
        </div>
      </section>

      {/* Official Formula Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Formula Oficială CNPP
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Pensie = Punctaj Mediu Anual (PMA) × Valoarea Punctului de Pensie (VPP)
              </h3>
              <p className="text-lg text-blue-700">
                Această este formula oficială folosită de Casa Națională de Pensii Publice pentru calculul tuturor pensiilor de stat din România.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Punctaj Mediu Anual (PMA)</h3>
                <p className="text-gray-600 mb-4">
                  PMA se calculează pe baza:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Salariilor realizate pe perioada de cotizare</li>
                  <li>Stagiului de cotizare complet</li>
                  <li>Coeficientului de recalculare (1.265 pentru 2024)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Valoarea Punctului de Pensie (VPP)</h3>
                <p className="text-gray-600 mb-4">
                  Pentru anul 2024:
                </p>
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <p className="text-2xl font-bold text-green-800">2.031 Lei</p>
                  <p className="text-sm text-green-600">Valabilă din 1 ianuarie 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Surse de Date Oficiale
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Legea nr. 263/2010</h3>
                    <p className="text-gray-600 mb-3">
                      Legea sistemului unitar de pensii publice - documentul principal care reglementează calculul pensiilor în România.
                    </p>
                    <a 
                      href="https://legislatie.just.ro/Public/DetaliiDocument/125013" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Vezi documentul oficial <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Casa Națională de Pensii Publice (CNPP)</h3>
                    <p className="text-gray-600 mb-3">
                      Valorile punctului de pensie și parametrii de calcul sunt preluați direct de pe site-ul oficial CNPP.
                    </p>
                    <a 
                      href="https://cnpp.ro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Vizitează CNPP.ro <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hotărâri de Guvern</h3>
                    <p className="text-gray-600 mb-3">
                      Actualizările anuale ale valorii punctului de pensie sunt preluate din hotărârile oficiale de guvern publicate în Monitorul Oficial.
                    </p>
                    <a 
                      href="https://gov.ro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Guvernul României <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Procesul de Calcul
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Validarea Datelor de Intrare</h3>
                <p className="text-gray-600">
                  Verificăm că toate câmpurile sunt completate corect și că valorile introduse sunt în parametrii rezonabili.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Determinarea Vârstei de Pensionare</h3>
                <p className="text-gray-600">
                  Calculăm vârsta de pensionare pe baza sexului, condițiilor de muncă și parametrilor legali actuali.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Calculul Punctajului Mediu Anual</h3>
                <p className="text-gray-600">
                  Aplicăm formula oficială: (Salariu Mediu × Stagiu Cotizare × 1.265) / 100, cu limitarea la 75% din salariul mediu.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Aplicarea VPP Actual</h3>
                <p className="text-gray-600">
                  Înmulțim punctajul calculat cu valoarea punctului de pensie pentru 2024 (2.031 lei).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Afișarea Rezultatelor</h3>
                <p className="text-gray-600">
                  Prezentăm rezultatul final cu toate disclaimerele legale necesare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy & Limitations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Acuratețe și Limitări
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Ce Garantăm</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    Folosim exclusiv formulele oficiale CNPP
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    Valorile sunt actualizate la schimbările legislative
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    Calculele sunt transparente și verificabile
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Limitări</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Rezultatele sunt estimări pentru planificare</li>
                  <li>• Nu au valoare oficială sau legală</li>
                  <li>• Nu includ toate variabilele personale specifice</li>
                  <li>• Pot fi afectate de viitoarele schimbări legislative</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-yellow-800">Disclaimer Important</h3>
            <p className="text-yellow-700">
              Acest calcul este o estimare informativă și nu are valoare oficială. Pentru calculul exact al pensiei tale, 
              vă rugăm să consultați Casa Națională de Pensii Publice (CNPP) sau să vizitați o casă teritorială de pensii.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}