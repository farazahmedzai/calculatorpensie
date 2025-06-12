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
    { href: "/blog", label: "Blog" },
  ];

  const NavLink = ({ href, label, highlight = false, mobile = false }: { 
    href: string; 
    label: string; 
    highlight?: boolean; 
    mobile?: boolean; 
  }) => (
    <Link href={href}>
      <a
        className={`
          ${mobile ? 'block px-3 py-2 text-base' : 'text-sm'}
          font-medium transition-colors
          ${highlight ? 'text-brand-blue hover:text-blue-700' : 'text-neutral-medium hover:text-neutral-dark'}
          ${isActiveLink(href) ? (highlight ? 'text-brand-blue' : 'text-neutral-dark') : ''}
        `}
        onClick={() => mobile && setMobileMenuOpen(false)}
      >
        {label}
      </a>
    </Link>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <Calculator className="h-8 w-8 text-brand-blue mr-3" />
              <span className="text-xl font-bold text-neutral-dark">CalculatorPensie.ro</span>
            </a>
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
