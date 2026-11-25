import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Gavel, ArrowRight, ExternalLink, Calendar, Calculator, FileText, TrendingUp } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { OFFICIAL_VPR_2026, MINIMUM_PENSION_2026 } from "@/lib/pension-calculations";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/legislatie/"];

export default function LegislatiePage() {
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

      <section className="bg-gradient-to-r from-brand-red to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Gavel className="h-8 w-8 mr-3 flex-shrink-0" />
            <h1 className="text-4xl font-bold text-white">Legislația Pensiilor Publice în România (2026)</h1>
          </div>
          <p className="text-xl text-white/95 mb-8 font-medium bg-black/20 p-4 rounded-lg">
            Sinteză actualizată a cadrului juridic aplicabil în 2026: Legea nr. 360/2023 privind sistemul public de pensii, VPR de {OFFICIAL_VPR_2026} lei și prevederile fiscale din Legea nr. 141/2025.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/">
              <Button size="lg" className="bg-white text-brand-red hover:bg-gray-50">
                <Calculator className="mr-2 h-5 w-5" />
                Calculează Pensia
              </Button>
            </Link>
            <a href="/ghid-calcul-pensie-2026.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-red">
                <FileText className="mr-2 h-5 w-5" />
                Descarcă Ghidul PDF 2026
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-blue-700 mr-2" />
              <h2 className="text-lg font-semibold text-blue-900 m-0">Actualizări Legislative 2026</h2>
              <Badge className="ml-2 bg-blue-700 text-white">Actualizat 2026</Badge>
            </div>
            <ul className="text-blue-900 space-y-2 text-sm">
              <li>
                • <strong>Valoarea Punctului de Referință (VPR):</strong> Rămâne fixată la{" "}
                <strong>{OFFICIAL_VPR_2026} Lei</strong> pe întreg parcursul anului 2026 (OUG nr. 156/2024 și Legea nr. 141/2025 au suspendat indexarea inițial prognozată spre 91 Lei).
              </li>
              <li>
                • <strong>CASS pentru pensii peste 3.000 Lei:</strong> Conform Legii nr. 141/2025 (1 aug. 2025-31 dec. 2027), se aplică 10% CASS exclusiv pentru suma ce depășește pragul de 3.000 Lei.
              </li>
              <li>
                • <strong>Egalizarea vârstei la femei:</strong> Creștere graduală conform Anexei 5 (~62 ani și 6-7 luni în 2026, spre 63 ani în 2030 și 65 ani în 2035).
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2>Legea nr. 360/2023: Sistemul Public de Pensii</h2>
            <p>
              Legea nr. 360/2023 este cadrul normativ principal aplicabil calculului pensiilor în România. Cuantumul pensiei rezultă din înmulțirea numărului total de puncte cu Valoarea Punctului de Referință (VPR).
            </p>

            <h3>Principalele 5 Prevederi Cheie în 2026</h3>
            <ul>
              <li>
                <strong>1. Punctele de Stabilitate:</strong> Pentru stagiul contributiv de peste 25 de ani se acordă bonificații de +0,50, +0,75 și +1,00 punct/an (
                <Link href="/calculator-puncte-pensie/" className="text-blue-700 underline">
                  calculează aici
                </Link>
                ).
              </li>
              <li>
                <strong>2. VPR = {OFFICIAL_VPR_2026} Lei:</strong> Indicator unic folosit în locul valorii clasice a punctului de pensie pentru determinarea cuantumului brut.
              </li>
              <li>
                <strong>3. Egalizarea treptată la 65 ani:</strong> Vârsta standard pentru femei urcă progresiv conform Anexei 5 până în anul 2035.
              </li>
              <li>
                <strong>4. Pensia anticipată simplificată:</strong> Penalizarea maximă este de 0,40%/lună (față de 0,75%/lună anterior), putând coborî până la 0,15%/lună pentru depășirea stagiului complet.
              </li>
              <li>
                <strong>5. Reduceri pentru mame:</strong> 6 luni reducere pentru fiecare copil născut și crescut până la 16 ani (maximum 3 ani și 6 luni), la îndeplinirea stagiului complet.
              </li>
            </ul>
          </div>

          <div className="space-y-8 mb-12">
            <Card className="border-l-4 border-l-brand-red">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-brand-red mr-3" />
                    <CardTitle className="text-xl">Vârsta Standard de Pensionare în 2026</CardTitle>
                  </div>
                  <Badge variant="secondary">Anexa nr. 5</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1 text-blue-900">Bărbați</h4>
                    <p className="text-2xl font-bold text-blue-800">65 ani</p>
                    <p className="text-sm text-blue-700">Stagiu complet: 35 ani · Stagiu minim: 15 ani</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1 text-pink-900">Femei (2026)</h4>
                    <p className="text-2xl font-bold text-pink-800">~62 ani și 6-7 luni</p>
                    <p className="text-sm text-pink-700">Crește gradual spre 65 ani în 2035 (Anexa 5)</p>
                  </div>
                </div>
                <Link href="/calculator-varsta-pensionare/">
                  <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                    Verifică Data Exactă în Calculator <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-brand-blue">
              <CardHeader>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-brand-blue mr-3" />
                  <CardTitle className="text-xl">Stagiul de Cotizare &amp; Cumpărarea Vechimii</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Stagiu Minim</h4>
                    <p className="text-2xl font-bold text-blue-700">15 ani</p>
                    <p className="text-xs text-blue-700">Prag de acces la pensia publică</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Stagiu Complet Bărbați</h4>
                    <p className="text-2xl font-bold text-green-700">35 ani</p>
                    <p className="text-xs text-green-700">Standard contributiv</p>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-pink-800">Stagiu Complet Femei</h4>
                    <p className="text-2xl font-bold text-pink-700">33+ → 35 ani</p>
                    <p className="text-xs text-pink-700">Egalizare graduală până în 2035</p>
                  </div>
                </div>
                <p>
                  Conform art. 6 din Legea nr. 360/2023, persoanele care nu au calitatea de pensionar pot cumpăra retroactiv vechime pentru cel mult <strong>6 ani</strong> anteriori semnării contractului de asigurare socială, achitând cota de 25% aplicată cel puțin la salariul minim brut pe țară.
                </p>
                <Link href="/blog/stagiul-cotizare-cumparare-ani-munca/">
                  <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
                    Ghid Cumpărare Vechime <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold mb-4">Surse Legislative Oficiale</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.cnpp.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h4 className="font-semibold">Casa Națională de Pensii Publice (CNPP)</h4>
                  <p className="text-sm text-gray-700">Portal oficial cu stagii de cotizare și comunicate</p>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-700" />
              </a>

              <a
                href="https://legislatie.just.ro/Public/DetaliiDocument/276548"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h4 className="font-semibold">Portal Legislativ Just.ro (Legea 360/2023)</h4>
                  <p className="text-sm text-gray-700">Textul oficial al Legii sistemului public de pensii</p>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2>Întrebări Esențiale</h2>
            <h3>Care este pensia minimă garantată în 2026?</h3>
            <p>
              Indemnizația socială pentru pensionari rămâne la <strong>{MINIMUM_PENSION_2026.toLocaleString("ro-RO")} Lei</strong> pe lună în 2026.
            </p>
            <h3>Cum se aplică indexarea pensiilor?</h3>
            <p>
              Formula prevăzută de Legea 360/2023 leagă actualizarea VPR de inflația anuală + 50% din creșterea reală a câștigului salarial mediu brut; aplicarea indexării în 2025 și 2026 a fost suspendată prin OUG nr. 156/2024 și Legea nr. 141/2025, menținând VPR la {OFFICIAL_VPR_2026} Lei.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
