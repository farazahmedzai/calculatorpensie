import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Gavel, ArrowRight, ExternalLink, Calendar, Calculator, FileText, TrendingUp } from "lucide-react";

export default function LegislatiePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-red to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Gavel className="h-8 w-8 mr-3" />
            <h1 className="text-4xl font-bold">Legea Pensiilor 2024 pe Înțelesul Tuturor</h1>
          </div>
          <p className="text-xl text-red-50 mb-8">
            Ghid complet despre legislația pensiilor din România, cu explicații clare, 
            actualizări legislative și resurse oficiale pentru înțelegerea drepturilor tale de pensionare.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/calculator">
              <Button size="lg" className="bg-white text-brand-red hover:bg-gray-50">
                <Calculator className="mr-2 h-5 w-5" />
                Calculează Pensia
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-red">
              <FileText className="mr-2 h-5 w-5" />
              Descarcă Legea Completă
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Latest Updates */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-800">Actualizări Legislative 2024</h3>
              <Badge className="ml-2 bg-blue-600">Nou</Badge>
            </div>
            <ul className="text-blue-700 space-y-2">
              <li>• <strong>Ianuarie 2024:</strong> Valoarea punctului de pensie a crescut la 81,8 RON</li>
              <li>• <strong>Ianuarie 2024:</strong> Vârsta de pensionare pentru femei ajunge la 63 de ani</li>
              <li>• <strong>2024:</strong> Modificări în calculul pensiilor de invaliditate</li>
            </ul>
          </div>

          {/* Overview */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2>Legea 263/2010 - Sistemul Unitar de Pensii Publice</h2>
            <p>
              Legea nr. 263/2010 privind sistemul unitar de pensii publice reprezintă cadrul legal 
              fundamental pentru sistemul de pensii din România. Această lege stabilește condițiile 
              de acordare, calculul și plata pensiilor din sistemul public.
            </p>

            <h3>Principiile Fundamentale ale Sistemului</h3>
            <p>
              Sistemul de pensii din România se bazează pe mai multe principii esențiale care 
              garantează echitatea și sustenabilitatea pe termen lung.
            </p>
          </div>

          {/* Key Legislative Areas */}
          <div className="space-y-8 mb-12">
            
            {/* Retirement Age */}
            <Card className="border-l-4 border-l-brand-red">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-brand-red mr-3" />
                    <CardTitle className="text-xl">Vârsta Standard de Pensionare</CardTitle>
                  </div>
                  <Badge variant="secondary">Actualizat 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3">Bărbați</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-blue-800">65 ani</p>
                      <p className="text-sm text-blue-600">Din 2015 - stabil</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Femei</h4>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-pink-800">63 ani</p>
                      <p className="text-sm text-pink-600">În 2024 (creștere graduală)</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Vârsta de pensionare pentru femei a crescut gradual din 2015, ajungând la 63 de ani în 2024. 
                  Pentru informații complete despre evoluția vârstei de pensionare, consultă 
                  <strong> tabelul nostru complet cu vârsta standard de pensionare în România</strong>.
                </p>
                <Link href="/blog/varsta-pensionare-romania">
                  <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                    Tabel Complet Vârste Pensionare <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contribution Period */}
            <Card className="border-l-4 border-l-brand-blue">
              <CardHeader>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-brand-blue mr-3" />
                  <CardTitle className="text-xl">Stagiul de Cotizare</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Minim</h4>
                    <p className="text-2xl font-bold text-blue-600">15 ani</p>
                    <p className="text-xs text-blue-600">Pentru dreptul la pensie</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Complet Bărbați</h4>
                    <p className="text-2xl font-bold text-green-600">35 ani</p>
                    <p className="text-xs text-green-600">Pentru pensie completă</p>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-pink-800">Complet Femei</h4>
                    <p className="text-2xl font-bold text-pink-600">30 ani</p>
                    <p className="text-xs text-pink-600">Pentru pensie completă</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Stagiul de cotizare include toate perioadele în care s-au plătit contribuții la sistemul public de pensii. 
                  Pentru detalii despre <strong>cum se calculează corect stagiul de cotizare</strong> și ce perioade se iau în considerare, 
                  citește ghidul nostru specializat.
                </p>
                <Link href="/blog/stagiu-cotizare-calcul">
                  <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
                    Ghid Calcul Stagiu Cotizare <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pension Indexation */}
            <Card className="border-l-4 border-l-brand-green">
              <CardHeader>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-brand-green mr-3" />
                  <CardTitle className="text-xl">Indexarea Pensiilor</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Formula de Indexare (din 2021)</h4>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-mono text-green-800">
                      Indexare = 50% × Inflația anuală + 50% × Creșterea salariului mediu brut
                    </p>
                    <p className="text-sm text-green-600 mt-2">
                      Aplicată anual în septembrie pentru menținerea puterii de cumpărare
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Indexarea pensiilor este mecanismul prin care se ajustează valoarea pensiilor pentru a compensa 
                  inflația și creșterea economică. Pentru înțelegerea completă a 
                  <strong> mecanismului și impactului indexării pensiilor</strong>, consultă analiza noastră detaliată.
                </p>
                <Link href="/blog/indexarea-pensiilor">
                  <Button variant="outline" className="text-brand-green border-brand-green hover:bg-brand-green hover:text-white">
                    Mecanism Indexare <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Work History Purchase */}
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-yellow-600 mr-3" />
                  <CardTitle className="text-xl">Cumpărarea Vechimii în Muncă</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Perioade Eligibile:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Studii universitare (maximum 5 ani)</li>
                      <li>• Studii liceale (maximum 4 ani)</li>
                      <li>• Serviciul militar obligatoriu</li>
                      <li>• Concedii de creștere copil</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cost și Condiții:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 25% din salariul mediu brut pe economie</li>
                      <li>• Plată în rate pe maximum 5 ani</li>
                      <li>• Cerere depusă cu minimum 5 ani înainte de pensionare</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Cumpărarea vechimii în muncă poate fi o strategie utilă pentru completarea stagiului de cotizare. 
                  Pentru detalii complete despre <strong>procedura și costurile cumpărării vechimii în muncă</strong>, 
                  consultă ghidul nostru pas cu pas.
                </p>
                <Link href="/blog/cumparare-vechime-munca">
                  <Button variant="outline" className="text-yellow-600 border-yellow-500 hover:bg-yellow-500 hover:text-white">
                    Procedură și Costuri <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

          </div>

          {/* Official Resources */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold mb-4">Resurse Oficiale</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://www.cnpp.ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h4 className="font-semibold">Casa Națională de Pensii Publice</h4>
                  <p className="text-sm text-gray-700">Site oficial CNPP cu legislație actualizată</p>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-700" />
              </a>
              
              <a 
                href="https://www.legis.md/cautare/getResults?doc_id=121830&lang=ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h4 className="font-semibold">Legea 263/2010</h4>
                  <p className="text-sm text-gray-700">Textul integral al legii pensiilor</p>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-700" />
              </a>
            </div>
            <p className="text-xs text-gray-700 mt-4">
              Conform <a href="https://www.cnpp.ro" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">
                legislației oficiale publicate de CNPP
              </a>, toate informațiile sunt actualizate conform normelor în vigoare.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2>Întrebări Frecvente despre Legislația Pensiilor</h2>
            
            <h3>1. Ce se întâmplă dacă nu am stagiul minim de cotizare?</h3>
            <p>
              Dacă nu ai stagiul minim de 15 ani, nu ai drept la pensie din sistemul public. 
              Poți beneficia de ajutorul social pentru pensionari, care este o prestație socială 
              diferită de pensie.
            </p>

            <h3>2. Pot lucra după ce m-am pensionat?</h3>
            <p>
              Da, poți lucra după pensionare. Pensia se suspendă dacă veniturile din muncă 
              depășesc salariul mediu brut pe economie. Pentru venituri mai mici, 
              pensia se recalculează.
            </p>

            <h3>3. Cum se calculează pensia în puncte?</h3>
            <p>
              Pensia = Punctajul anual mediu × Stagiul de cotizare × Valoarea punctului de pensie. 
              Punctajul anual se calculează ca raportul între salariul anual și salariul mediu 
              pe economie pentru acel an.
            </p>

            <h3>4. Ce înseamnă "pensie minimă garantată"?</h3>
            <p>
              Pensia minimă garantată este suma minimă pe care o poate primi un pensionar, 
              chiar dacă calculul matematic ar da o sumă mai mică. În 2024, aceasta este 
              de aproximativ 1.000 RON.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-brand-red bg-opacity-10 rounded-xl p-8 text-center border border-brand-red border-opacity-20">
            <h3 className="text-2xl font-bold text-brand-red mb-4">Calculează-ți Pensia Conform Legii</h3>
            <p className="text-gray-700 mb-6">
              Folosește calculatorul nostru actualizat conform legislației în vigoare pentru 
              a afla exact ce pensie vei avea în funcție de situația ta specifică.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" className="bg-brand-red hover:bg-red-700">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculează Pensia
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                  <FileText className="mr-2 h-5 w-5" />
                  Mai Multe Ghiduri
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
