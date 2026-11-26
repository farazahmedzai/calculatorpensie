import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ListCheck, ArrowRight, Calculator, Clock, Users, Heart, AlertCircle } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { MINIMUM_PENSION_2026, OFFICIAL_VPR_2026 } from "@/lib/pension-calculations";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/tipuri-pensii/"];

export default function TipuriPensiiPage() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={PAGE_META.title}
        description={PAGE_META.description}
        canonical={PAGE_META.canonical}
        keywords={PAGE_META.keywords}
        schemaKind="article"
        schemaName={PAGE_META.schemaName}
        articlePublishedTime={PAGE_META.datePublished}
        articleModifiedTime={PAGE_META.dateModified}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>

      <section className="bg-gradient-to-r from-brand-green to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <ListCheck className="h-8 w-8 mr-3" />
            <h1 className="text-4xl font-bold text-white">Tipuri de Pensii din Sistemul Public (2026)</h1>
          </div>
          <p className="text-xl text-white/95 mb-8 font-medium bg-black/20 p-4 rounded-lg">
            Ghid complet al celor patru categorii de pensii reglementate de Legea nr. 360/2023 (limită de vârstă, anticipată, invaliditate și urmaș), calculate în 2026 cu VPR de {OFFICIAL_VPR_2026} lei.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-white text-brand-green hover:bg-gray-50">
              <Calculator className="mr-2 h-5 w-5" />
              Calculează Pensia Ta
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Comparație între Categoriile de Pensii Publice (Legea 360/2023)
            </h2>
            <p className="text-gray-700 mb-5">
              Legea nr. 360/2023 a simplificat sistemul public eliminând fosta pensie anticipată parțială și stabilind patru tipuri distincte de prestații, calculate unitar pe bază de puncte înmulțite cu <strong>{OFFICIAL_VPR_2026} Lei</strong> (respectiv minimum social de <strong>{MINIMUM_PENSION_2026.toLocaleString("ro-RO")} Lei</strong> pentru beneficiarii eligibili).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-slate-200 bg-white">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="border p-3">Tip Pensie</th>
                    <th className="border p-3">Condiție Principală</th>
                    <th className="border p-3">Stagiu Necesar</th>
                    <th className="border p-3">Particularități 2026</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-semibold">Limită de vârstă</td>
                    <td className="border p-3">65 ani (B) / ~62a 7l (F, spre 65 în 2035)</td>
                    <td className="border p-3">Min. 15 ani (complet 35 ani)</td>
                    <td className="border p-3">Include puncte stabilitate &gt;25 ani + reduceri grupe/mame</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border p-3 font-semibold">Anticipată</td>
                    <td className="border p-3">Până la 5 ani înaintea vârstei standard</td>
                    <td className="border p-3">Stagiu complet exclusiv contributiv</td>
                    <td className="border p-3">Penalizare 0,15%-0,40%/lună (încetează la vârsta standard)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Invaliditate</td>
                    <td className="border p-3">Grad I, II sau III stabilit medical</td>
                    <td className="border p-3">Stagiu realizat + stagiu potențial</td>
                    <td className="border p-3">Cumulabilă cu anumite venituri; indemnizație însoțitor Grad I</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border p-3 font-semibold">Urmaș</td>
                    <td className="border p-3">Copii &lt;16/26 ani sau soț supraviețuitor</td>
                    <td className="border p-3">Susținător pensionar sau eligibil</td>
                    <td className="border p-3">50% (1 urmaș), 75% (2 urmași), 100% (3+ urmași)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Detalii pentru Fiecare Categorie de Pensie
            </h2>
            <div className="space-y-8">
              <Card className="border-l-4 border-l-brand-blue">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 text-brand-blue mr-3" />
                      <CardTitle className="text-xl">1. Pensia pentru Limită de Vârstă</CardTitle>
                    </div>
                    <Badge variant="secondary">Principală</Badge>
                  </div>
                  <CardDescription>Pensia standard acordată la împlinirea vârstei legale de pensionare</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-sm text-gray-700">
                    <div>
                      <h3 className="text-base font-semibold mb-2 text-gray-900">Condiții de Acordare:</h3>
                      <ul className="space-y-1">
                        <li>• Vârstă: 65 ani (bărbați); femei în creștere graduală spre 65 ani (Anexa 5)</li>
                        <li>• Stagiu minim contributiv: 15 ani</li>
                        <li>• Stagiu complet: 35 ani (cu eșalonare pentru femei)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-2 text-gray-900">Calcul 2026:</h3>
                      <ul className="space-y-1">
                        <li>• Formula: Număr Total Puncte × VPR</li>
                        <li>• VPR 2026: <strong>{OFFICIAL_VPR_2026} RON</strong></li>
                        <li>• Puncte de stabilitate pentru stagiul &gt; 25 ani</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Salariații din grupe speciale pot beneficia de reducerea vârstei standard conform{" "}
                    <Link href="/blog/conditii-speciale-munca-impact-pensie/" className="text-brand-blue font-semibold underline">
                      regulilor pentru condiții deosebite și speciale de muncă
                    </Link>
                    , iar persoanele cu pensie calculată sub pragul legal primesc{" "}
                    <Link href="/blog/pensie-minima-garantata-2026/" className="text-brand-blue font-semibold underline">
                      pensia minimă garantată de {MINIMUM_PENSION_2026.toLocaleString("ro-RO")} lei
                    </Link>
                    .
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/blog/ghid-calcul-pensie-stat-2026/">
                      <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
                        Citește Ghidul Complet <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/blog/acte-necesare-dosar-pensionare/">
                      <Button variant="outline">
                        Acte Necesare Dosar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-brand-red">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertCircle className="h-6 w-6 text-brand-red mr-3" />
                      <CardTitle className="text-xl">2. Pensia Anticipată (Legea 360/2023)</CardTitle>
                    </div>
                    <Badge variant="destructive">Cu până la 5 ani mai devreme</Badge>
                  </div>
                  <CardDescription>
                    Noua lege a unificat vechea pensie anticipată și cea parțială într-o singură categorie
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-sm text-gray-700">
                    <div>
                      <h3 className="text-base font-semibold mb-2 text-gray-900">Condiții:</h3>
                      <ul className="space-y-1">
                        <li>• Cu cel mult 5 ani înaintea vârstei standard</li>
                        <li>• Stagiu complet contributiv îndeplinit integral</li>
                        <li>• Perioadele asimilate nu intră în calculul de acces</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-2 text-gray-900">Penalizare Lunară:</h3>
                      <ul className="space-y-1">
                        <li>• Între 0,15% și 0,40% pe lună de anticipare</li>
                        <li>• Diminuarea încetează la vârsta standard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/blog/pensie-anticipata-conditii-penalizari/">
                      <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                        Ghid Pensie Anticipată <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/calculator-pensie-anticipata/">
                      <Button className="bg-brand-red hover:bg-red-700 text-white">
                        <Calculator className="mr-2 h-4 w-4" />
                        Calculează Penalizarea
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-brand-green">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Heart className="h-6 w-6 text-brand-green mr-3" />
                      <CardTitle className="text-xl">3. Pensia de Urmaș</CardTitle>
                    </div>
                    <Badge className="bg-brand-green text-white">Protecție Familie</Badge>
                  </div>
                  <CardDescription>Pensie acordată copiilor și soțului supraviețuitor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Se acordă copiilor până la 16 ani (sau 26 de ani pe durata studiilor) și soțului supraviețuitor la îndeplinirea condițiilor de durată a căsătoriei și vârstă/venit.
                  </p>
                  <Link href="/blog/pensia-urmas-drepturi-proceduri/">
                    <Button variant="outline" className="text-brand-green border-brand-green hover:bg-brand-green hover:text-white">
                      Detalii Complete <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-6 w-6 text-yellow-600 mr-3" />
                      <CardTitle className="text-xl">4. Pensia de Invaliditate</CardTitle>
                    </div>
                    <Badge className="bg-yellow-500 text-white">Grad I, II, III</Badge>
                  </div>
                  <CardDescription>Acordată persoanelor cu capacitatea de muncă diminuată sau pierdută</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Încadrarea se stabilește prin expertiză medicală în Gradul I (cu indemnizație de însoțitor egală cu 50% din salariul minim brut pe economie), Gradul II sau Gradul III.
                  </p>
                  <Link href="/blog/ghid-pensie-invaliditate-2026/">
                    <Button variant="outline" className="text-yellow-700 border-yellow-600 hover:bg-yellow-600 hover:text-white">
                      Ghid Pensie Invaliditate <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
