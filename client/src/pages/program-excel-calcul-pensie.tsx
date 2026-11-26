import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { Download, FileSpreadsheet, CheckCircle, Info } from "lucide-react";
import { Link } from "wouter";
import { AVERAGE_GROSS_SALARY_2026, OFFICIAL_VPR_2026 } from "@/lib/pension-calculations";
import { ROUTES_META } from "@/data/routes-meta";
import { trackDownload } from "@/lib/analytics";
import EmbedCalculatorBox from "@/components/features/EmbedCalculatorBox";

const PAGE_META = ROUTES_META["/program-excel-calcul-pensie/"];

export default function ProgramExcelPage() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();

    const csvRows = [
      ["# CalculatorPensie.com - Simulator Calcul Pensie Romania 2026"],
      ["# INSTRUCTIUNI: Editati coloana Salariu Brut (RON). Separator standard ; pentru Excel Romania."],
      [],
      ["An", "Salariu Brut Estimativ (RON)", "CAS Pilon II (4.75%)", "Punctaj Lunar Estimativ", "Punctaj Anual Estimativ", "Pensie Brută Acumulată / An (VPR 81 Lei)"],
      ["2025", "8620", "409.45", "0.9378", "0.9378", "75.96"],
      ["2026", "9192", "436.62", "1.0000", "1.0000", "81.00"],
      ["2027", "9500", "451.25", "1.0335", "1.0335", "83.71"],
      ["2028", "9900", "470.25", "1.0770", "1.0770", "87.24"],
      ["2029", "10300", "489.25", "1.1205", "1.1205", "90.76"],
      ["2030", "10700", "508.25", "1.1641", "1.1641", "94.29"],
      ["2031", "11200", "532.00", "1.2185", "1.2185", "98.70"],
      ["2032", "11700", "555.75", "1.2728", "1.2728", "103.10"],
      ["2033", "12200", "579.50", "1.3272", "1.3272", "107.50"],
      ["2034", "12700", "603.25", "1.3816", "1.3816", "111.91"],
      ["2035", "13200", "627.00", "1.4360", "1.4360", "116.32"],
      [],
      ["# Valori oficiale de referinta 2026:"],
      ["Castig Salarial Mediu Brut (Legea 44/2026)", String(AVERAGE_GROSS_SALARY_2026), "RON"],
      ["Valoarea Punctului de Referinta VPR (Legea 141/2025)", String(OFFICIAL_VPR_2026), "RON"],
    ];

    const csvString = csvRows.map((row) => row.join(";")).join("\n");
    const blob = new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), csvString], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Simulator_Calcul_Pensie_Romania_2026.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    trackDownload("Simulator_Calcul_Pensie_Romania_2026.csv");
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags
        title={PAGE_META.title}
        description={PAGE_META.description}
        canonical={PAGE_META.canonical}
        keywords={PAGE_META.keywords}
        schemaKind="calculator"
        schemaName={PAGE_META.schemaName}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Program Excel Calcul Pensie 2026 (Descărcare Gratuită)</h1>
          <p className="text-xl text-gray-700">
            Șablon tabelar compatibil Microsoft Excel, Google Sheets &amp; LibreOffice bazat pe VPR = {OFFICIAL_VPR_2026} Lei
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-green-600" />
                  Despre Șablonul Excel / CSV de Calcul Pensie
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h2 className="text-lg font-bold mt-0 text-slate-900">
                  Ce conține șablonul Excel și cum aplică formula oficială
                </h2>
                <p>
                  Acest fișier tabelar îți permite să introduci salariile brute lunare sau anuale pe parcursul carierei și să urmărești automat acumularea punctajului CNPP și contribuția către Pilonul II (4,75%). Pentru comparație cu simulatorul CNPP, citește și ghidul despre{" "}
                  <Link href="/blog/simulare-pensie-instrumente-metode/" className="text-blue-700 font-semibold underline">
                    instrumentele de simulare a pensiei în 2026
                  </Link>
                  .
                </p>

                <h3 className="font-bold text-slate-800">Parametri oficiali 2026 integrați:</h3>
                <ul>
                  <li>
                    <strong>Salariul mediu brut de referință:</strong> {AVERAGE_GROSS_SALARY_2026.toLocaleString("ro-RO")} RON (Legea nr. 44/2026).
                  </li>
                  <li>
                    <strong>Valoarea Punctului de Referință (VPR):</strong> {OFFICIAL_VPR_2026} RON (menținut în 2026 prin Legea nr. 141/2025; vezi explicația pentru{" "}
                    <Link href="/blog/calcul-punct-referinta-vpr/" className="text-blue-700 underline">
                      calculul VPR 81 Lei
                    </Link>
                    ).
                  </li>
                  <li>
                    <strong>Punctaj de contributivitate + stabilitate:</strong> compatibil cu formula din Legea nr. 360/2023.
                  </li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
                  <h3 className="text-base font-bold mt-0 text-blue-900 flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Cum folosești fișierul în 3 pași:
                  </h3>
                  <ol className="text-sm text-blue-950 mt-2 space-y-1.5 list-decimal list-inside font-medium">
                    <li>Apasă butonul de descărcare gratuită (nu solicită cont sau email).</li>
                    <li>Deschide fișierul `.csv` în Microsoft Excel (setările regionale în română folosesc automat separatorul <code>;</code>).</li>
                    <li>Adaptează coloana <em>Salariu Brut Estimativ</em> după istoricul tău din extrasul CNPP.</li>
                  </ol>
                </div>

                <h2 className="text-lg font-bold text-slate-900">Cum interpretezi coloanele din tabelul Excel?</h2>
                <p>
                  Fiecare rând anual împarte salariul brut realizat la câștigul salarial mediu brut pe economie ({AVERAGE_GROSS_SALARY_2026.toLocaleString("ro-RO")} lei în 2026), obținând punctajul anual. Suma punctelor anuale peste întreaga carieră se înmulțește cu {OFFICIAL_VPR_2026} Lei, iar după pragul de 3.000 lei brut reține că se aplică 10% CASS și 10% impozit.
                </p>
                <p className="text-xs text-slate-600">
                  Notă: pentru pregătirea documentelor oficiale la finalul simulării, consultă{" "}
                  <Link href="/blog/acte-necesare-dosar-pensionare/" className="text-blue-700 underline">
                    lista de acte necesare pentru dosarul de pensionare
                  </Link>{" "}
                  și{" "}
                  <Link href="/despre-noi/" className="text-blue-700 underline">
                    politica noastră editorială
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">
                Previzualizare Date Tabel (2025-2026)
              </h3>
              <div className="overflow-x-auto text-xs font-mono">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 text-left">
                      <th className="border p-2">An</th>
                      <th className="border p-2">Salariu Brut</th>
                      <th className="border p-2">Pilon II (4,75%)</th>
                      <th className="border p-2">Punctaj Anual</th>
                      <th className="border p-2">Valoare (VPR 81 Lei)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">2025</td>
                      <td className="border p-2">8.620 Lei</td>
                      <td className="border p-2">409,45 Lei</td>
                      <td className="border p-2">0,9378</td>
                      <td className="border p-2">75,96 Lei/an</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border p-2 font-bold">2026</td>
                      <td className="border p-2 font-bold">9.192 Lei</td>
                      <td className="border p-2 font-bold">436,62 Lei</td>
                      <td className="border p-2 font-bold">1,0000</td>
                      <td className="border p-2 font-bold">81,00 Lei/an</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Download className="h-5 w-5 text-brand-blue" />
                Descarcă Simulatorul
              </CardTitle>
              <CardDescription>Acces instant, gratuit, fără înregistrare</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleDownload} className="space-y-4">
                <Button type="submit" className="w-full bg-brand-blue hover:bg-blue-700 flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Descarcă Tabel 2026 (.CSV)
                </Button>
              </form>

              <a
                href="/ghid-calcul-pensie-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                Descarcă Ghidul PDF 2026
              </a>

              {downloadSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-800 text-xs flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  Descărcare pornită cu succes! Verifică folderul Downloads.
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="md:col-span-3 mt-4">
            <CardHeader>
              <CardTitle className="text-xl">Vezi și alte calculatoare</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <Link href="/" className="text-brand-blue font-semibold underline">
                    Calculator Pensie de Stat 2026
                  </Link>:{" "}
                  estimează rapid pensia online fără descărcare.
                </li>
                <li>
                  <Link href="/calculator-puncte-pensie/" className="text-brand-blue font-semibold underline">
                    Calculator Puncte de Pensie
                  </Link>:{" "}
                  calculează punctele de stabilitate pentru vechime &gt; 25 ani.
                </li>
                <li>
                  <Link href="/calculator-varsta-pensionare/" className="text-brand-blue font-semibold underline">
                    Calculator Vârstă de Pensionare
                  </Link>:{" "}
                  verifică data ieșirii la pensie conform Anexei 5.
                </li>
                <li>
                  <Link href="/metodologie/" className="text-brand-blue font-semibold underline">
                    Metodologia de Calcul CNPP
                  </Link>:{" "}
                  exemple matematice pas cu pas.
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="md:col-span-3 mt-2">
            <EmbedCalculatorBox
              title="Încorporează trimiterea către Programul Excel pe site-ul tău"
              targetPath="/program-excel-calcul-pensie/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
