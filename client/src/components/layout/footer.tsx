import { Link } from "wouter";
import { Calculator, Mail, MapPin } from "lucide-react";
import { OFFICIAL_VPR_2026, MINIMUM_PENSION_2026 } from "@/lib/pension-calculations";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  CalculatorPensie.com
                </span>
                <p className="text-sm text-blue-400 font-medium">
                  Simulatoare Pensii România · Legea 360/2023
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Platformă independentă de calcul estimativ și informare privind sistemul public și privat de pensii din România. Toate calculele se execută local în browser.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Calculatoare</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Calculator Pensie
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-pensie-anticipata/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Pensie Anticipată
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-varsta-pensionare/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Vârstă Pensionare
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-puncte-pensie/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Calculator Puncte
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-pensie-pilon-2/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Pensie Pilon II
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-pensie-pilon-3/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Calculator Pilon III
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/program-excel-calcul-pensie/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Program Excel Calcul
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Resurse</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/planificare/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Planificarea Pensiei
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tipuri-pensii/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Tipuri de Pensii
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legislatie/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Legislație Pensii
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Blog &amp; Ghiduri
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Informații</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/despre-noi/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Despre Noi
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/metodologie/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Metodologie Calcul
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Confidențialitate
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms/">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer block">
                    Termeni și Condiții
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h4 className="text-blue-400 font-semibold mb-3">
                  Parametri Oficiali &amp; Disclaimer (2026)
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Valoarea Punctului de Referință (VPR) 2026:</strong> {OFFICIAL_VPR_2026} Lei |{" "}
                  <strong className="text-white">Pensia Minimă Garantată:</strong> {MINIMUM_PENSION_2026.toLocaleString("ro-RO")} Lei
                </p>
                <p className="text-gray-200 text-xs leading-relaxed">
                  <strong className="text-white">Disclaimer:</strong> CalculatorPensie.com este un site independent, neafiliat CNPP. Calculele oferă estimări orientative conform Legii nr. 360/2023 și Legii nr. 141/2025 și nu înlocuiesc decizia oficială a Casei Teritoriale de Pensii.
                </p>
              </div>
            </div>

            <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
              <h4 className="text-blue-300 font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="mailto:contact@calculatorpensie.com" className="flex items-center hover:text-blue-300 transition-colors">
                  <Mail className="h-4 w-4 mr-3 text-blue-300" />
                  <span className="text-white text-sm font-medium">contact@calculatorpensie.com</span>
                </a>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-green-300" />
                  <span className="text-white text-sm font-medium">București, România</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-600">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              &copy; 2026 CalculatorPensie.com. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <Link href="/metodologie/" className="hover:text-blue-300">Metodologie</Link>
              <Link href="/privacy/" className="hover:text-blue-300">Confidențialitate</Link>
              <Link href="/terms/" className="hover:text-blue-300">Termeni</Link>
              <Link href="/contact/" className="hover:text-blue-300">Contact</Link>
              <Link href="/faq/" className="hover:text-blue-300">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
