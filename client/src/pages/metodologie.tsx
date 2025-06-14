import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema, HowToSchema } from "@/components/seo/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, RefreshCw, Shield } from "lucide-react";

export default function Metodologie() {
  return (
    <div className="bg-white">
      <MetaTags 
        title="Metodologie Calcul Pensie - Formulele Oficiale CNPP | CalculatorPensie.com"
        description="Descoperă metodologia completă de calcul a pensiei folosită de CalculatorPensie.com. Formulele oficiale CNPP, sursele legislative și transparența calculelor."
        canonical="https://calculatorpensie.com/metodologie"
        keywords="metodologie calcul pensie, formula pensie romania, cnpp, legea pensiilor, punctaj mediu anual"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>
      
      <WebPageSchema 
        name="Metodologie Calcul Pensie - Formulele Oficiale"
        description="Metodologia completă și formulele oficiale folosite pentru calculul pensiei de stat în România"
        url="https://calculatorpensie.com/metodologie"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Metodologie" }
        ]}
      />
      
      <HowToSchema 
        name="Cum se calculează pensia de stat în România"
        description="Ghid complet pentru înțelegerea formulelor de calcul ale pensiei conform legislației CNPP"
        steps={[
          { name: "Calculează punctajul mediu anual", text: "Folosește formula PMA = suma punctajelor anuale / numărul de ani de cotizare" },
          { name: "Aplică valoarea punctului de pensie", text: "Înmulțește PMA cu valoarea actuală a punctului de pensie (2.031 lei în 2025)" },
          { name: "Ajustează pentru condiții speciale", text: "Aplică coeficienții pentru condiții deosebite sau speciale de muncă" },
          { name: "Calculează data pensionării", text: "Determină vârsta de pensionare pe baza sexului și stagiului de cotizare" }
        ]}
        totalTime="PT10M"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Metodologia de Calcul a Pensiei
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparența completă a formulelor și metodelor folosite în calculatoarele noastre de pensie, bazate pe legislația oficială românească.
          </p>
        </div>
      </section>

      {/* Main Formula Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Formula Oficială de Calcul a Pensiei de Stat
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-900 mb-4">
                Pensie = PMA × VPP
              </p>
              <p className="text-lg text-blue-700 mb-6">
                Punctaj Mediu Anual × Valoarea Punctului de Pensie
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">PMA (Punctaj Mediu Anual)</h4>
                  <p className="text-blue-700 text-sm">
                    Se calculează pe baza salariilor și perioadei de cotizare conform art. 46 din Legea 263/2010
                  </p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">VPP (Valoarea Punctului de Pensie)</h4>
                  <p className="text-blue-700 text-sm">
                    2.031 lei în 2025, stabilită prin Hotărârea Guvernului conform art. 44 din Legea 263/2010
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculation Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Pașii de Calcul Detaliat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Determinarea Vârstei de Pensionare</h3>
                <p className="text-gray-600 text-sm">
                  Bărbați: 65 ani (35 ani stagiu)<br/>
                  Femei: 63 ani (30 ani stagiu)<br/>
                  Ajustare pentru condiții speciale
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Calculul Punctajului Mediu Anual</h3>
                <p className="text-gray-600 text-sm">
                  PMA = (Suma punctajelor anuale) / (Stagiul total de cotizare în ani)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Aplicarea Valorii Punctului</h3>
                <p className="text-gray-600 text-sm">
                  Înmulțirea PMA cu VPP actual (2.031 lei în 2025)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Aplicarea Limitelor</h3>
                <p className="text-gray-600 text-sm">
                  Verificarea limitelor minime și maxime conform art. 47-48 din Legea 263/2010
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legislative Sources */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Surse Legislative Oficiale
          </h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Legea nr. 263/2010 privind sistemul unitar de pensii publice
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Legea fundamentală care reglementează sistemul de pensii din România, inclusiv formulele de calcul și condițiile de acordare.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Art. 44 - Valoarea punctului de pensie</li>
                      <li>• Art. 46 - Calculul punctajului mediu anual</li>
                      <li>• Art. 47-48 - Limitele pensiei</li>
                      <li>• Art. 65 - Vârsta standard de pensionare</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <RefreshCw className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Hotărâri de Guvern pentru Actualizări Anuale
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Documentele care stabilesc anual valoarea punctului de pensie și alte parametri relevanți.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• HG pentru stabilirea VPP în 2025: 2.031 lei</li>
                      <li>• Indicatori economici pentru indexare</li>
                      <li>• Actualizări privind condițiile speciale de muncă</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Normele de Aplicare CNPP
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Instrucțiunile tehnice emise de Casa Națională de Pensii Publice pentru aplicarea uniformă a legislației.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Normele pentru calculul stagiului de cotizare</li>
                      <li>• Instrucțiuni pentru condiții speciale de muncă</li>
                      <li>• Proceduri pentru pensia anticipată</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Condiții Speciale de Muncă
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Condiții Normale</h3>
                <p className="text-gray-600 mb-4">
                  Activități desfășurate în condiții standard de muncă
                </p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                  Fără reducere de vârstă
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Condiții Deosebite</h3>
                <p className="text-gray-600 mb-4">
                  Activități cu risc moderat sau solicitare fizică crescută
                </p>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">
                  Reducere cu 2 ani
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Condiții Speciale</h3>
                <p className="text-gray-600 mb-4">
                  Activități cu risc ridicat pentru sănătate și siguranță
                </p>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm">
                  Reducere cu 5 ani
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Update Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Procesul de Actualizare
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Cum Ne Asigurăm că Calculatoarele Sunt Actualizate
            </h3>
            
            <div className="space-y-4 text-blue-800">
              <div className="flex items-start gap-3">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-1">1</div>
                <p>Monitorizăm zilnic Monitorul Oficial pentru publicarea de noi acte normative</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-1">2</div>
                <p>Analizăm impactul modificărilor legislative asupra formulelor de calcul</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-1">3</div>
                <p>Actualizăm calculatoarele în maxim 24 ore de la publicarea modificărilor</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-1">4</div>
                <p>Testăm și validăm calculele pentru a asigura acuratețea rezultatelor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Disclaimer Metodologic</h3>
          <p className="text-yellow-700 text-sm mb-4">
            Toate calculele efectuate de CalculatorPensie.com se bazează pe legislația în vigoare și pe interpretarea oficială a CNPP. Rezultatele sunt estimări informatice și nu constituie confirmări oficiale ale pensiei viitoare.
          </p>
          <p className="text-yellow-700 text-sm">
            Pentru calcule exacte și oficiale, vă recomandăm să consultați direct Casa Națională de Pensii Publice (CNPP) sau să utilizați serviciile lor online oficiale.
          </p>
        </div>
      </section>
    </div>
  );
}