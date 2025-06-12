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
                  <a className="hover:text-white transition-colors">Calculator Pensie Principal</a>
                </Link>
              </li>
              <li>
                <Link href="/calculator?type=early">
                  <a className="hover:text-white transition-colors">Pensie Anticipată</a>
                </Link>
              </li>
              <li>
                <Link href="/calculator?type=pillar3">
                  <a className="hover:text-white transition-colors">Contribuții Pilon III</a>
                </Link>
              </li>
              <li>
                <Link href="/calculator?type=planning">
                  <a className="hover:text-white transition-colors">Simulator Planificare</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ghiduri</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/planificare">
                  <a className="hover:text-white transition-colors">Planificarea Pensiei</a>
                </Link>
              </li>
              <li>
                <Link href="/tipuri-pensii">
                  <a className="hover:text-white transition-colors">Tipuri de Pensii</a>
                </Link>
              </li>
              <li>
                <Link href="/legislatie">
                  <a className="hover:text-white transition-colors">Legislație</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="hover:text-white transition-colors">Blog</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Companie</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/despre-noi">
                  <a className="hover:text-white transition-colors">Despre Noi</a>
                </Link>
              </li>
              <li>
                <Link href="/metodologie">
                  <a className="hover:text-white transition-colors">Metodologie Calcul</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="hover:text-white transition-colors">Politica de Confidențialitate</a>
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
                <a className="hover:text-white transition-colors">Metodologie</a>
              </Link>
              <Link href="/privacy">
                <a className="hover:text-white transition-colors">Privacy</a>
              </Link>
              <Link href="/contact">
                <a className="hover:text-white transition-colors">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
