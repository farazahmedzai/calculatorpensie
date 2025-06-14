import MetaTags from "@/components/seo/MetaTags";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Award } from "lucide-react";

export default function DespreNoi() {
  return (
    <div className="bg-white">
      <MetaTags 
        title="Despre Noi - CalculatorPensie.com | Misiunea și Echipa Noastră"
        description="Află mai multe despre CalculatorPensie.com, misiunea noastră de a oferi calculatoare de pensie precise și resurse educaționale pentru românii care își planifică viitorul financiar."
        canonical="https://calculatorpensie.com/despre-noi"
        keywords="despre calculatorpensie, misiune pensii romania, echipa calculatoare pensie"
      />
      
      <OrganizationSchema 
        name="CalculatorPensie.com"
        url="https://calculatorpensie.com"
        description="Platforma #1 din România pentru calculul pensiilor și planificarea financiară pentru pensionare"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Despre CalculatorPensie.com
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Misiunea noastră este să oferim românilor cele mai precise instrumente de calcul al pensiei și să simplificăm înțelegerea sistemului complex de pensii din România.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Misiunea Noastră</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ne-am propus să devenim resursa de încredere #1 din România pentru calculul pensiilor și planificarea financiară pentru pensionare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Precizie</h3>
                <p className="text-gray-600 text-sm">
                  Folosim exclusiv formulele oficiale CNPP și legislația actualizată pentru calcule precise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Siguranță</h3>
                <p className="text-gray-600 text-sm">
                  Nu stocăm date personale. Toate calculele se fac local în browser-ul tău.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Accesibilitate</h3>
                <p className="text-gray-600 text-sm">
                  Oferim instrumente gratuite și ușor de folosit pentru toți românii.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expertiză</h3>
                <p className="text-gray-600 text-sm">
                  Echipa noastră monitorizează constant schimbările legislative pentru actualizări prompte.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Povestea Noastră</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              CalculatorPensie.com a fost creat din nevoia de a oferi românilor un instrument simplu și precis pentru calculul pensiei de stat. Am observat că multe persoane sunt confuze în privința sistemului de pensii și nu știu cum să-și estimeze venitul viitor la pensionare.
            </p>

            <p className="text-gray-700 mb-6">
              Platforma noastră s-a născut în 2025 cu obiectivul clar de a democratiza accesul la informațiile despre pensii și de a oferi calculatoare bazate pe formulele oficiale ale Casei Naționale de Pensii Publice (CNPP).
            </p>

            <p className="text-gray-700 mb-6">
              Ne diferențiem prin transparența completă a metodologiei de calcul, actualizarea constantă conform schimbărilor legislative și prin oferirea unei experiențe de utilizare simplă și intuitivă.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Valorile Noastre</h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Transparență Completă</h3>
              <p className="text-blue-800">
                Explicăm clar metodologia de calcul și oferim acces la formulele și sursele legislative folosite. Nu ascundem nimic în spatele unei "cutii negre".
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Educație Financiară</h3>
              <p className="text-green-800">
                Pe lângă calculatoare, oferim ghiduri educaționale pentru a ajuta românii să înțeleagă sistemul de pensii și să ia decizii informate pentru viitorul lor financiar.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Actualizare Continuă</h3>
              <p className="text-purple-800">
                Monitorizăm constant schimbările din Legea pensiilor și actualizăm calculatoarele și informațiile imediat ce apar modificări legislative.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Serviciu Gratuit</h3>
              <p className="text-orange-800">
                Credem că accesul la instrumentele de planificare financiară nu ar trebui să fie un privilegiu. Toate calculatoarele și ghidurile noastre sunt complet gratuite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Angajamentul Nostru</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ne angajăm să menținem CalculatorPensie.com ca fiind cea mai de încredere și mai precisă resursă pentru calculul pensiilor din România.
          </p>
          
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <p className="text-xl font-semibold mb-4">
              "Viitorul tău financiar merită cele mai bune instrumente de planificare."
            </p>
            <p className="text-blue-100">
              - Echipa CalculatorPensie.com
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Disclaimer Important</h3>
          <p className="text-yellow-700 text-sm">
            CalculatorPensie.com oferă instrumente de estimare bazate pe legislația actuală. Rezultatele sunt orientative și nu constituie consiliere financiară oficială. Pentru calcule exacte și consiliere personalizată, consultați Casa Națională de Pensii Publice (CNPP) sau un consultant financiar autorizat.
          </p>
        </div>
      </section>
    </div>
  );
}