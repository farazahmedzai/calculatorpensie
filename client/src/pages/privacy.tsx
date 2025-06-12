import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Database, Lock } from "lucide-react";

export default function Privacy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Politica de Confidențialitate
          </h1>
          <p className="text-xl text-gray-600">
            Transparență completă despre cum colectăm, folosim și protejăm datele tale personale pe CalculatorPensie.com.
          </p>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="bg-green-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">Nu Stocăm Date Personale</h3>
                <p className="text-gray-600">
                  Datele introduse în calculatorul de pensie nu sunt salvate permanent pe serverele noastre. Calculele se efectuează local în browser-ul tău.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Conexiune Securizată</h3>
                <p className="text-gray-600">
                  Toate comunicațiile cu site-ul nostru sunt protejate prin HTTPS și certificate SSL pentru securitate maximă.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Ce Date Colectăm și De Ce
          </h2>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                    <Database className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Date de Calculator (Nu Sunt Stocate)</h3>
                    <p className="text-gray-600 mb-4">
                      Când folosești calculatorul de pensie, introduci următoarele informații:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                      <li>Data nașterii</li>
                      <li>Sexul</li>
                      <li>Salariul brut lunar</li>
                      <li>Stagiul de cotizare</li>
                      <li>Condițiile de muncă</li>
                    </ul>
                    <div className="bg-green-50 border border-green-200 rounded p-4">
                      <p className="text-green-800 font-medium">
                        🔒 Aceste date nu sunt trimise pe server și nu sunt stocate. Calculele se fac în browser-ul tău.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Date de Utilizare (Anonime)</h3>
                    <p className="text-gray-600 mb-4">
                      Pentru îmbunătățirea site-ului, colectăm informații anonime despre:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                      <li>Paginile vizitate</li>
                      <li>Timpul petrecut pe site</li>
                      <li>Tipul de device și browser folosit</li>
                      <li>Țara de origine (fără adresa IP exactă)</li>
                    </ul>
                    <p className="text-sm text-gray-500">
                      Aceste date sunt anonimizate și nu pot fi asociate cu identitatea ta personală.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Data */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Formularul de Contact
          </h2>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Ce Stocăm Când Ne Contactezi</h3>
              <p className="text-gray-600 mb-4">
                Când trimiți un mesaj prin formularul de contact, stocăm temporar:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 mb-6">
                <li>Numele tău</li>
                <li>Adresa de email</li>
                <li>Subiectul și conținutul mesajului</li>
              </ul>
              
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Scopul Stocării:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                  <li>Pentru a-ți răspunde la întrebări</li>
                  <li>Pentru a îmbunătăți serviciile noastre</li>
                  <li>Pentru comunicare viitoare doar dacă ești de acord</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Cookies și Tehnologii Similare
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Cookies Esențiale</h3>
                <p className="text-gray-600">
                  Folosim cookies pentru funcționarea de bază a site-ului (preferințe de limbă, setări). 
                  Aceste cookies nu colectează informații personale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Cookies de Analiză</h3>
                <p className="text-gray-600">
                  Folosim Google Analytics pentru a înțelege cum folosesc vizitatorii site-ul. 
                  Aceste date sunt anonimizate și ne ajută să îmbunătățim experiența utilizatorilor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GDPR Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Drepturile Tale (GDPR)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Dreptul de Acces</h3>
                <p className="text-gray-600">
                  Poți solicita o copie a datelor personale pe care le avem despre tine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Dreptul de Ștergere</h3>
                <p className="text-gray-600">
                  Poți solicita ștergerea datelor tale personale în anumite condiții.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Dreptul de Rectificare</h3>
                <p className="text-gray-600">
                  Poți cere corectarea datelor inexacte sau incomplete.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Dreptul de Opoziție</h3>
                <p className="text-gray-600">
                  Poți să te opui procesării datelor tale în anumite circumstanțe.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">Exercitarea Drepturilor</h3>
            <p className="text-blue-700">
              Pentru a exercita orice dintre aceste drepturi, contactează-ne la: 
              <strong className="ml-1">contact@calculatorpensie.com</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Actualizări ale Politicii
          </h2>
          
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Această politică de confidențialitate poate fi actualizată periodic pentru a reflecta 
              schimbările în practicile noastre sau în cerințele legale.
            </p>
            
            <p className="mb-6">
              <strong>Ultima actualizare:</strong> Iunie 2025
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-800">
                Te vom anunța despre orice modificări importante prin plasarea unui anunț vizibil pe site-ul nostru 
                sau prin email, dacă ai fost de acord să primești comunicări de la noi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}