import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Shield, Award } from "lucide-react";

export default function DespreNoi() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Despre CalculatorPensie.com
          </h1>
          <p className="text-xl text-gray-600">
            Misiunea noastră este să oferim românilor cel mai precis, rapid și ușor de folosit calculator de pensie online, outperformând atât site-urile guvernamentale cât și băncile private.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Misiunea Noastră
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Obiectivul Nostru</h3>
                <p className="text-gray-600">
                  Să devenim rezultatul #1 pe Google.ro pentru "Calculator Pensie" prin oferirea celei mai bune experiențe de calcul pensie din România.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-green-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Publicul Nostru</h3>
                <p className="text-gray-600">
                  Români cu vârsta între 30-65 ani, confuzi de sistemul complex de pensii și îngrijorați pentru viitorul lor financiar.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg text-gray-600">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">De Ce Existăm</h3>
            <p className="mb-4">
              Sistemul de pensii din România este complex și confuz pentru majoritatea cetățenilor. Site-urile oficiale ale CNPP sunt adesea lente și greu de navigat, iar băncile private oferă instrumente limitate care servesc în principal propriile lor produse.
            </p>
            
            <p className="mb-4">
              CalculatorPensie.com a fost creat pentru a umple acest gol, oferind:
            </p>
            
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Estimări gratuite și instantanee</strong> pentru pensia de stat (Pilon I)</li>
              <li><strong>Interfață curată, modernă și de încredere</strong> optimizată pentru dispozitive mobile</li>
              <li><strong>Calcule bazate pe formulele oficiale CNPP</strong> și legislația actuală</li>
              <li><strong>Transparență completă</strong> asupra metodologiei de calcul</li>
              <li><strong>Educație financiară</strong> prin ghiduri complete și actualizate</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Angajamentul Nostru</h3>
            <p>
              Ne angajăm să oferim liniște sufletească și claritate instantanee pentru planificarea pensiei tale. Toate calculele noastre sunt bazate pe legislația oficială română și sunt actualizate imediat la schimbările legale.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Valorile Noastre
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Transparență</h3>
                <p className="text-gray-600">
                  Toate formulele și metodologiile noastre sunt publice și verificabile. Nu ascundem nimic.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Precizie</h3>
                <p className="text-gray-600">
                  Folosim exclusiv formulele oficiale CNPP și valorile actuale ale punctului de pensie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Excelență</h3>
                <p className="text-gray-600">
                  Țintim să oferim cea mai bună experiență de calcul pensie din România.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ai Întrebări sau Sugestii?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Suntem aici să te ajutăm cu planificarea pensiei tale. Contactează-ne pentru orice întrebări sau feedback.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contactează-ne
          </a>
        </div>
      </section>
    </div>
  );
}