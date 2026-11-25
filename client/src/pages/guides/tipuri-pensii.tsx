import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ListCheck, ArrowRight, Calculator, Clock, Users, Heart, AlertCircle } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { OFFICIAL_VPR_2026 } from "@/lib/pension-calculations";
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
            Ghid complet al categoriilor de pensii reglementate de Legea nr. 360/2023: limită de vârstă, anticipată, invaliditate și urmaș.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-white text-brand-green hover:bg-gray-50">
              <Calculator className="mr-2 h-5 w-5" />
              Calculează Pensia Ta
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 mb-12">
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
                    <h4 className="font-semibold mb-2 text-gray-900">Condiții de Acordare:</h4>
                    <ul className="space-y-1">
                      <li>• Vârstă: 65 ani (bărbați); femei în creștere graduală spre 65 ani (Anexa 5)</li>
                      <li>• Stagiu minim contributiv: 15 ani</li>
                      <li>• Stagiu complet: 35 ani (cu eșalonare pentru femei)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Calcul 2026:</h4>
                    <ul className="space-y-1">
                      <li>• Formula: Număr Total Puncte × VPR</li>
                      <li>• VPR 2026: <strong>{OFFICIAL_VPR_2026} RON</strong></li>
                      <li>• Puncte de stabilitate pentru stagiul &gt; 25 ani</li>
                    </ul>
                  </div>
                </div>
                <Link href="/blog/ghid-calcul-pensie-stat-2026/">
                  <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
                    Citește Ghidul Complet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
                    <h4 className="font-semibold mb-2 text-gray-900">Condiții:</h4>
                    <ul className="space-y-1">
                      <li>• Cu cel mult 5 ani înaintea vârstei standard</li>
                      <li>• Stagiu complet contributiv îndeplinit integral</li>
                      <li>• Perioadele asimilate nu intră în calculul de acces</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Penalizare Lunară:</h4>
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
      </section>
    </div>
  );
}
