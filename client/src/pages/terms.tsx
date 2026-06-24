import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Gavel, Scale, AlertTriangle, UserCheck, ShieldCheck } from "lucide-react";

export default function Terms() {
  return (
    <div className="bg-white">
      <MetaTags 
        title="Termeni și Condiții - CalculatorPensie.com | Reguli de Utilizare"
        description="Termenii și condițiile de utilizare a platformei CalculatorPensie.com. Citește regulile de folosire a calculatoarelor noastre de pensie și disclaimerele legale."
        canonical="https://calculatorpensie.com/terms"
        keywords="termeni si conditii, reguli utilizare, disclaimer legal, calculatorpensie"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>
      
      <WebPageSchema 
        name="Termeni și Condiții - CalculatorPensie.com"
        description="Regulile oficiale și disclaimerele de utilizare pentru utilizatorii platformei noastre de calcul al pensiilor"
        url="https://calculatorpensie.com/terms"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Termeni și Condiții" }
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Termeni și Condiții de Utilizare
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prin accesarea și utilizarea CalculatorPensie.com, ești de acord cu acești termeni și disclaimere legale. Te rugăm să le citești cu atenție.
          </p>
        </div>
      </section>

      {/* Key Aspects Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Aspecte Cheie pe Care Trebuie Să Le Știi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Valoare Informativă</h3>
                <p className="text-gray-600 text-sm">
                  Toate rezultatele și calculele oferite pe site sunt simple simulări și estimări orientative. Ele nu înlocuiesc deciziile oficiale emise de CNPP.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Utilizare Gratuită</h3>
                <p className="text-gray-600 text-sm">
                  Platforma este 100% gratuită pentru toți utilizatorii care doresc să își planifice pensionarea sau să verifice formulele legislative.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Fără Răspundere Legală</h3>
                <p className="text-gray-600 text-sm">
                  Nu suntem răspunzători pentru deciziile financiare sau planurile de pensionare realizate pe baza estimărilor oferite de calculatoarele noastre.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Termenii Detaliați de Utilizare
          </h2>

          <div className="space-y-8">
            {/* Disclaimer */}
            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Info className="h-6 w-6 text-amber-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">1. Disclaimer și Limitarea Răspunderii</h3>
                </div>
                
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  <p>
                    CalculatorPensie.com este un site independent, cu scop strict educațional și informativ. <strong>Nu avem nicio afiliere oficială cu Casa Națională de Pensii Publice (CNPP) sau cu orice altă instituție guvernamentală din România.</strong>
                  </p>
                  <p>
                    Deși depunem eforturi constante pentru a menține formulele de calcul aliniate la normele oficiale, inclusiv Legea nr. 360/2023 privind sistemul public de pensii, sistemul de pensii conține numeroase variabile individuale (perioade asimilate, grupe de muncă, sporuri cu caracter permanent/nepermanent etc.). 
                  </p>
                  <p>
                    Prin urmare, calculele generate de platforma noastră nu reprezintă o confirmare oficială a pensiei dumneavoastră. Pentru decizii oficiale și calculul exact al drepturilor de pensie, aveți obligația de a vă adresa direct Casei Județene de Pensii de care aparțineți sau de a vă crea un cont securizat pe portalul oficial al CNPP (www.cnpp.ro).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Acceptable Use */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <UserCheck className="h-6 w-6 text-blue-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">2. Condiții și Reguli de Utilizare</h3>
                </div>
                
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>Utilizatorii se obligă să folosească platforma respectând următoarele reguli:</p>
                  <ul className="space-y-2 ml-4 list-disc">
                    <li>Să utilizeze calculatoarele doar în scopuri personale și non-comerciale.</li>
                    <li>Să nu folosească sisteme automate (roboți, crawlere) pentru a extrage date sau conținut din platformă într-un mod abuziv.</li>
                    <li>Să nu introducă date eronate în mod intenționat pentru a încerca să saboteze sau să blocheze funcționarea instrumentelor noastre.</li>
                    <li>Să respecte drepturile de proprietate intelectuală asupra designului, textelor și codului sursă ale CalculatorPensie.com.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Gavel className="h-6 w-6 text-purple-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">3. Proprietate Intelectuală</h3>
                </div>
                
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Întregul conținut al site-ului (inclusiv textul articolelor de blog, ghidurile de planificare, structura calculatoarelor, logo-urile, designul grafic și elementele de branding) este proprietatea exclusivă a CalculatorPensie.com și este protejat de legislația română și internațională privind drepturile de autor.
                  </p>
                  <p>
                    Este strict interzisă copierea, reproducerea, republicarea sau distribuirea oricărui text sau element grafic fără acordul nostru scris prealabil. Puteți, în schimb, să distribuiți link-uri directe către paginile și articolele noastre pe rețelele sociale sau pe site-urile dumneavoastră cu precizarea clară a sursei.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Reference */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <ShieldCheck className="h-6 w-6 text-green-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">4. Confidențialitatea Datelor</h3>
                </div>
                
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Folosirea platformei noastre implică respectarea Politicii de Confidențialitate. Deoarece toate calculele se fac în siguranță, local în browserul dumneavoastră, nu colectăm și nu stocăm datele dumneavoastră financiare (salariu, ani de cotizare etc.).
                  </p>
                  <p>
                    Pentru detalii suplimentare referitoare la modul de protejare a datelor personale și utilizarea fișierelor cookies, vă rugăm să vizitați pagina noastră de 
                    <a href="/privacy" className="text-blue-600 hover:text-blue-800 ml-1 underline font-medium">
                      Politică de Confidențialitate
                    </a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Scale className="h-6 w-6 text-red-600 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">5. Legea Aplicabilă și Jurisdicția</h3>
                </div>
                
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Acești termeni și condiții sunt guvernați și interpretați în conformitate cu <strong>legile din România</strong>.
                  </p>
                  <p>
                    Orice dispută sau neînțelegere care decurge din utilizarea CalculatorPensie.com va fi rezolvată pe cale amiabilă. În cazul în care acest lucru nu este posibil, competența de soluționare revine instanțelor judecătorești competente din București, România.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            Acești termeni și condiții de utilizare au fost actualizați ultima dată pe <strong>23 mai 2026</strong>.
            Utilizarea în continuare a site-ului reprezintă acceptul dumneavoastră implicit.
          </p>
        </div>
      </section>
    </div>
  );
}
