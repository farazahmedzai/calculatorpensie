import { Link } from "wouter";
import { Calculator, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

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
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  CalculatorPensie.com
                </span>
                <p className="text-sm text-blue-400 font-medium">#1 Calculator de Pensie din România</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Cel mai rapid, precis și ușor de folosit instrument de calcul pensie din România. 
              Depășim performanțele site-urilor guvernamentale și băncilor private prin tehnologie modernă și transparență completă.
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Urmărește-ne</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/calculatorpensie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/calculatorpensie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.youtube.com/calculatorpensie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="mailto:contact@calculatorpensie.com" 
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">🧮 Calculatoare</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></div>
                    Calculator Pensie
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-pensie-anticipata">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></div>
                    Pensie Anticipată
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-varsta-pensionare">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></div>
                    Vârstă Pensionare
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-puncte-pensie">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></div>
                    Calculator Puncte
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator-pensie-pilon-2">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></div>
                    Pensie Pilon II
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/?type=pillar3">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></div>
                    Contribuții Pilon III
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/program-excel-calcul-pensie">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></div>
                    Program Excel Calcul
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">📚 Resurse</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/planificare">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></div>
                    Planificarea Pensiei
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tipuri-pensii">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></div>
                    Tipuri de Pensii
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legislatie">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></div>
                    Legislație Pensii
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></div>
                    Blog & Știri
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">🏢 Companie</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/despre-noi">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></div>
                    Despre Noi
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/metodologie">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></div>
                    Metodologie Calcul
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></div>
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></div>
                    Confidențialitate
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></div>
                    Termeni și Condiții
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Legal Info */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h4 className="text-blue-400 font-semibold mb-3 flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  Informații Legale
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Valoarea punctului de pensie 2025:</strong> 2.031 Lei | <strong className="text-white">Valoarea Punctului de Referință (VPR) 2025:</strong> 91 Lei
                </p>
                <p className="text-gray-200 text-xs leading-relaxed">
                  <strong className="text-white">Disclaimer:</strong> Acest calculator oferă estimări informative bazate pe Legea 360/2023 și nu are valoare oficială. 
                  Pentru calculul exact al pensiei, consultați Casa Națională de Pensii Publice (CNPP) sau un consilier autorizat.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
              <h4 className="text-blue-300 font-semibold mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Contact Rapid
              </h4>
              <div className="space-y-3">
                <a href="mailto:contact@calculatorpensie.com" className="flex items-center hover:text-blue-300 transition-colors">
                  <Mail className="h-4 w-4 mr-3 text-blue-300" />
                  <span className="footer-text-visible text-sm">contact@calculatorpensie.com</span>
                </a>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-green-300" />
                  <span className="footer-text-visible text-sm">București, România</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-500">
            <div className="text-sm mb-4 md:mb-0">
              <p className="footer-text-visible">&copy; 2025 CalculatorPensie.com. Toate drepturile rezervate.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/metodologie">
                <span className="footer-text-visible hover:text-blue-300 transition-colors cursor-pointer">Metodologie</span>
              </Link>
              <Link href="/privacy">
                <span className="footer-text-visible hover:text-blue-300 transition-colors cursor-pointer">Privacy</span>
              </Link>
              <Link href="/terms">
                <span className="footer-text-visible hover:text-blue-300 transition-colors cursor-pointer">Terms</span>
              </Link>
              <Link href="/contact">
                <span className="footer-text-visible hover:text-blue-300 transition-colors cursor-pointer">Contact</span>
              </Link>
              <Link href="/faq">
                <span className="footer-text-visible hover:text-blue-300 transition-colors cursor-pointer">FAQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
