import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Database, Lock, UserCheck, RefreshCw } from "lucide-react";

export default function Privacy() {
  return (
    <div className="bg-white">
      <MetaTags 
        title="Politică de Confidențialitate - CalculatorPensie.com | Protecția Datelor"
        description="Politica de confidențialitate a CalculatorPensie.com. Află cum protejăm datele tale personale și ce informații colectăm când folosești calculatoarele de pensie."
        canonical="https://calculatorpensie.com/privacy"
        keywords="politica confidentialitate, protectia datelor, gdpr, calculatorpensie"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>
      
      <WebPageSchema 
        name="Politică de Confidențialitate - CalculatorPensie.com"
        description="Politica detaliată de protecție a datelor și confidențialitate pentru utilizatorii platformei"
        url="https://calculatorpensie.com/privacy"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Politică Confidențialitate" }
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Politică de Confidențialitate
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparența și protecția datelor tale personale sunt prioritățile noastre. Află cum colectăm, folosim și protejăm informațiile tale.
          </p>
        </div>
      </section>

      {/* Key Points Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Principiile Noastre de Protecție a Datelor
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Calcule Locale</h3>
                <p className="text-gray-600 text-sm">
                  Toate calculele de pensie se efectuează local în browser-ul tău. Nu trimitem datele financiare pe servere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Stocare Minimă</h3>
                <p className="text-gray-600 text-sm">
                  Nu stocăm permanent informații personale sau financiare. Doar date anonimizate pentru îmbunătățirea serviciului.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Criptare HTTPS</h3>
                <p className="text-gray-600 text-sm">
                  Toate comunicațiile sunt criptate folosind HTTPS pentru protecția maximă a datelor în tranzit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Politica Detaliată de Confidențialitate
          </h2>

          <div className="space-y-8">
            {/* Data Collection */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Eye className="h-6 w-6 text-blue-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">1. Ce date colectăm</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Date pe care NU le colectăm:</h4>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Salariul tău exact sau alte informații financiare personale</li>
                      <li>• Data nașterii exactă sau alte date de identificare</li>
                      <li>• Rezultatele calculelor de pensie</li>
                      <li>• Istoricul calculelor efectuate</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Date pe care le colectăm (anonimizat):</h4>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Statistici de utilizare a calculatoarelor (fără date personale)</li>
                      <li>• Informații tehnice despre browser și dispozitiv</li>
                      <li>• Adresa IP (doar pentru securitate și statistici generale)</li>
                      <li>• Date de contact doar dacă ne contactezi voluntar</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Data */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <UserCheck className="h-6 w-6 text-green-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">2. Cum folosim datele</h3>
                </div>
                
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>Datele colectate în mod anonim sunt folosite exclusiv pentru:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Îmbunătățirea funcționalității calculatoarelor</li>
                    <li>• Monitorizarea performanței tehnice a site-ului</li>
                    <li>• Identificarea și corectarea erorilor</li>
                    <li>• Generarea de statistici generale de utilizare (fără identificare personală)</li>
                    <li>• Răspunsul la mesajele de contact (doar dacă ne contactezi)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Database className="h-6 w-6 text-purple-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">3. Cookies și tehnologii similare</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Cookies esențiale:</h4>
                    <p className="text-gray-600 text-sm">
                      Folosim doar cookies tehnice necesare pentru funcționarea calculatoarelor. 
                      Aceste cookies nu conțin informații personale și se șterg automat când închizi browser-ul.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Cookies de analiză (opționale):</h4>
                    <p className="text-gray-600 text-sm">
                      Cu acordul tău, folosim Google Analytics pentru statistici anonimizate de utilizare. 
                      Poți refuza aceste cookies fără să afectezi funcționalitatea site-ului.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Lock className="h-6 w-6 text-red-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">4. Securitatea datelor</h3>
                </div>
                
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>Implementăm următoarele măsuri de securitate:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Criptare HTTPS pentru toate comunicațiile</li>
                    <li>• Calcule efectuate local în browser (fără transmisie pe server)</li>
                    <li>• Servere securizate cu monitorizare continuă</li>
                    <li>• Backup-uri criptate pentru datele non-personale</li>
                    <li>• Acces restricționat la sistemele interne</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <RefreshCw className="h-6 w-6 text-orange-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">5. Drepturile tale (GDPR)</h3>
                </div>
                
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>Conform GDPR, ai următoarele drepturi:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Dreptul la informare:</strong> Să știi ce date colectăm și cum le folosim</li>
                    <li>• <strong>Dreptul de acces:</strong> Să soliciți o copie a datelor despre tine</li>
                    <li>• <strong>Dreptul la rectificare:</strong> Să corectezi datele incorecte</li>
                    <li>• <strong>Dreptul la ștergere:</strong> Să soliciți ștergerea datelor</li>
                    <li>• <strong>Dreptul la opoziție:</strong> Să te opui prelucrării datelor</li>
                    <li>• <strong>Dreptul la portabilitate:</strong> Să primești datele într-un format structurat</li>
                  </ul>
                  <p className="mt-3">
                    Pentru exercitarea acestor drepturi, ne poți contacta la 
                    <a href="mailto:privacy@calculatorpensie.com" className="text-blue-600 hover:text-blue-800 ml-1">
                      privacy@calculatorpensie.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Contact pentru Protecția Datelor
          </h2>
          
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ai întrebări despre confidențialitate?
              </h3>
              <p className="text-gray-600 mb-6">
                Pentru orice întrebare legată de protecția datelor, exercitarea drepturilor GDPR 
                sau raportarea problemelor de securitate, ne poți contacta direct.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Email dedicat protecției datelor:</p>
                <a 
                  href="mailto:privacy@calculatorpensie.com" 
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                >
                  privacy@calculatorpensie.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            Această politică de confidențialitate a fost actualizată ultima dată pe <strong>14 iunie 2025</strong>.
            Orice modificări importante vor fi comunicate prin intermediul site-ului.
          </p>
        </div>
      </section>
    </div>
  );
}