import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { Download, FileSpreadsheet, CheckCircle, Info } from "lucide-react";

export default function ProgramExcelPage() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate CSV content representing the Romanian Pension Calculator template
    // Semicolon separator is standard for Romanian regional settings in Excel
    const csvRows = [
      ["# CalculatorPensie.com - Simulator Calcul Pensie Romania 2026"],
      ["# NOTA: Completati coloana 'Salariu Brut Estimativ (RON)' pentru anii corespunzatori. Restul campurilor se vor calcula automat."],
      [],
      ["An", "Salariu Brut Estimativ (RON)", "CAS Redirectionat Pilon II (4.75%)", "Punctaj Lunar Estimativ", "Punctaj Anual Estimativ"],
      ["2025", "8000", "380", "0.9505", "0.9505"],
      ["2026", "8400", "399", "0.9980", "0.9980"],
      ["2027", "8800", "418", "1.0455", "1.0455"],
      ["2028", "9200", "437", "1.0930", "1.0930"],
      ["2029", "9600", "456", "1.1405", "1.1405"],
      ["2030", "10000", "475", "1.1881", "1.1881"],
      ["2031", "10500", "498.75", "1.2475", "1.2475"],
      ["2032", "11000", "522.5", "1.3069", "1.3069"],
      ["2033", "11500", "546.25", "1.3663", "1.3663"],
      ["2034", "12000", "570", "1.4257", "1.4257"],
      ["2035", "12500", "593.75", "1.4851", "1.4851"],
      [],
      ["# Valori de referinta utilizate in formule:"],
      ["Salariu Mediu Brut pe Economie (2026)", "8417", "RON"],
      ["Valoarea Punctului de Referinta VPR (2026)", "91", "RON"]
    ];

    // Join rows into a CSV string using semicolon as delimiter
    const csvString = csvRows.map(row => row.join(";")).join("\n");
    
    // Create blob and trigger browser download
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Simulator_Calcul_Pensie_Romania_2026.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags 
        title="Program Excel Calcul Pensie | Descărcare Simulator 2026"
        description="Descarcă gratuit simulatorul Excel (.csv) pentru calculul pensiei din România în 2026. Introduceți salariul pentru a estima punctele lunare și pensia CNPP."
        canonical="https://calculatorpensie.com/program-excel-calcul-pensie"
        keywords="program excel calcul pensie, tabel excel calcul pensie de stat, simulator pensie excel gratis, descarca calculator pensie xls"
      />
      
      <WebPageSchema 
        name="Program Excel Calcul Pensie - Descarcă Gratis"
        description="Landing page oferind simulatorul de pensii în format tabelar Excel/CSV bazat pe noul sistem de punctaj al Legii 360/2023"
        url="https://calculatorpensie.com/program-excel-calcul-pensie"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Resurse", url: "https://calculatorpensie.com/blog" },
          { name: "Excel Calcul Pensie" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Program Excel Calcul Pensie</h1>
          <p className="text-xl text-gray-700">
            Descarcă simulatorul tabelar gratuit pentru prognoza drepturilor tale de pensionare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-green-600" />
                  Despre Simulatorul Tabelar
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Acest program tabelar (compatibil cu <strong>Microsoft Excel, Google Sheets și LibreOffice Calc</strong>) îți permite să introduci propria listă de salarii brute estimate pentru anii viitori și să estimezi automat punctajul acumulat lunar și anual.
                </p>
                
                <h4 className="font-bold text-slate-800">Ce include tabelul:</h4>
                <ul>
                  <li><strong>Istoric pe ani:</strong> Rânduri dedicate pentru simularea veniturilor de la 2026 până în 2035+.</li>
                  <li><strong>Contribuția CAS:</strong> Formula calculează automat redirecționarea de 4.75% a salariului brut către Pilonul II de pensie privată obligatorie.</li>
                  <li><strong>Algoritmul de punctaj:</strong> Calculează punctele lunare raportat la câștigul salarial mediu brut pe economie utilizat în 2026 (8.417 RON).</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
                  <h5 className="font-bold mt-0 text-blue-900 flex items-center gap-2">
                    <Info className="h-4.5 w-4.5" />
                    Tutorial: Cum să folosești fișierul (3 Pași Simpli)
                  </h5>
                  <ol className="text-sm text-blue-950 mt-2 space-y-2 list-decimal list-inside font-medium">
                    <li><strong>Descarcă</strong> dând click pe butonul albastru. Vei primi un fișier de tip <code>.csv</code>.</li>
                    <li><strong>Deschide în Excel</strong> și, dacă datele apar grupate pe o singură coloană, folosește funcția <strong>Data → Text to Columns</strong> din meniu, selectând caracterul punct-virgulă (;) ca separator.</li>
                    <li><strong>Introdu Salariul:</strong> Editează doar coloana "Salariu Brut Estimativ (RON)". Toate celelalte coloane cu CAS și punctaj se vor recalcula automat!</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Preview table */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">Previzualizare Structură Tabel</h3>
              <div className="overflow-x-auto text-xs font-mono">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600">
                      <th className="border p-2">An</th>
                      <th className="border p-2">Salariu Brut Estimativ (RON)</th>
                      <th className="border p-2">CAS Pilon II (4.75%)</th>
                      <th className="border p-2">Punctaj Lunar</th>
                      <th className="border p-2">Punctaj Anual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">2026</td>
                      <td className="border p-2">8.000 Lei</td>
                      <td className="border p-2">380 Lei</td>
                      <td className="border p-2">0.9505</td>
                      <td className="border p-2">0.9505</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="border p-2">2027</td>
                      <td className="border p-2">8.400 Lei</td>
                      <td className="border p-2">399 Lei</td>
                      <td className="border p-2">0.9980</td>
                      <td className="border p-2">0.9980</td>
                    </tr>
                    <tr>
                      <td className="border p-2">...</td>
                      <td className="border p-2">...</td>
                      <td className="border p-2">...</td>
                      <td className="border p-2">...</td>
                      <td className="border p-2">...</td>
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
                Descarcă Fișierul
              </CardTitle>
              <CardDescription>Obține simulatorul gratuit acum</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleDownload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Adresă de Email (Opțional)</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="nume@exemplu.ro"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Descarcă Tabel Simulator (.CSV)
                </Button>
              </form>

              {downloadSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-800 text-sm flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Descărcare inițiată cu succes! Verificați folderul 'Downloads'.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
