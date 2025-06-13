import { Link } from "wouter";
import { Calculator, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-brand-blue mr-3" />
              <span className="text-xl font-bold">CalculatorPensie.com</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Romania's #1 pension calculator - cel mai rapid, ușor de folosit și cuprinzător instrument de calcul pensie, 
              depășind atât site-urile guvernamentale (CNPP) cât și băncile private (BT, ING).
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/calculatorpensie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/calculatorpensie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com/calculatorpensie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-blue transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Calculatoare</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/calculator">
                  <span className="hover:text-white transition-colors cursor-pointer">Calculator Pensie Principal</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator?type=early">
                  <span className="hover:text-white transition-colors cursor-pointer">Pensie Anticipată</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator?type=pillar3">
                  <span className="hover:text-white transition-colors cursor-pointer">Contribuții Pilon III</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator?type=planning">
                  <span className="hover:text-white transition-colors cursor-pointer">Simulator Planificare</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ghiduri</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/planificare">
                  <span className="hover:text-white transition-colors cursor-pointer">Planificarea Pensiei</span>
                </Link>
              </li>
              <li>
                <Link href="/tipuri-pensii">
                  <span className="hover:text-white transition-colors cursor-pointer">Tipuri de Pensii</span>
                </Link>
              </li>
              <li>
                <Link href="/legislatie">
                  <span className="hover:text-white transition-colors cursor-pointer">Legislație</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-white transition-colors cursor-pointer">Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Companie</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/despre-noi">
                  <span className="hover:text-white transition-colors cursor-pointer">Despre Noi</span>
                </Link>
              </li>
              <li>
                <Link href="/metodologie">
                  <span className="hover:text-white transition-colors cursor-pointer">Metodologie Calcul</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="hover:text-white transition-colors cursor-pointer">Politica de Confidențialitate</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 CalculatorPensie.com. Toate drepturile rezervate.</p>
              <p className="mt-1">Actualizat conform legislației în vigoare din România. Valoarea punctului de pensie: 2.031 Lei (2024).</p>
              <p className="mt-1 text-xs">
                Acest calcul este o estimare informativă și nu are valoare oficială. Pentru calculul exact, consultați Casa Națională de Pensii Publice (CNPP).
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <Link href="/metodologie">
                <span className="hover:text-white transition-colors cursor-pointer">Metodologie</span>
              </Link>
              <Link href="/privacy">
                <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              </Link>
              <Link href="/contact">
                <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
