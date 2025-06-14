import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calculator, Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActiveLink = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { href: "/calculator", label: "Calculator", highlight: true },
    { href: "/planificare", label: "Planificare" },
    { href: "/tipuri-pensii", label: "Tipuri Pensii" },
    { href: "/legislatie", label: "Legislație" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ];

  const NavLink = ({ href, label, highlight = false, mobile = false }: { 
    href: string; 
    label: string; 
    highlight?: boolean; 
    mobile?: boolean; 
  }) => (
    <Link href={href}>
      <span
        className={`
          ${mobile ? 'block px-4 py-3 text-base rounded-lg' : 'text-sm px-4 py-2 rounded-lg'}
          font-medium transition-all duration-300 cursor-pointer relative group
          ${highlight 
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
          }
          ${isActiveLink(href) && !highlight ? 'text-blue-600 bg-blue-50' : ''}
          ${mobile ? 'hover:bg-blue-50 border border-transparent hover:border-blue-200' : ''}
        `}
        onClick={() => mobile && setMobileMenuOpen(false)}
      >
        {label}
        {!mobile && !highlight && (
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        )}
      </span>
    </Link>
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer group">
              <div className="bg-blue-600 p-2 rounded-lg mr-3 group-hover:bg-blue-700 transition-colors">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  CalculatorPensie.com
                </span>
                <p className="text-xs text-blue-600 font-medium">#1 Calculator de Pensie</p>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.href} 
                  href={link.href} 
                  label={link.label} 
                  highlight={link.highlight} 
                />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Calculator className="h-6 w-6 text-brand-blue mr-2" />
                    <span className="font-bold text-neutral-dark">CalculatorPensie.ro</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <NavLink 
                      key={link.href} 
                      href={link.href} 
                      label={link.label} 
                      highlight={link.highlight}
                      mobile 
                    />
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t">
                  <Link href="/calculator">
                    <Button 
                      className="w-full bg-brand-blue hover:bg-blue-700" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculează Pensia
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
