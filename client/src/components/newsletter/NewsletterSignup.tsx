import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FileSpreadsheet, Rss, ArrowRight } from "lucide-react";

interface NewsletterSignupProps {
  compact?: boolean;
  title?: string;
  description?: string;
  className?: string;
}

export default function NewsletterSignup({
  compact = false,
  title = "Resurse Oficiale & Actualizări Pensii 2026",
  description = "Descarcă ghidul PDF cu formulele CNPP, simulatorul Excel și urmărește noutățile legislative prin RSS.",
  className = "",
}: NewsletterSignupProps) {
  if (compact) {
    return (
      <div className={`bg-blue-600 rounded-lg p-6 text-white ${className}`}>
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-blue-100 text-sm">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="/ghid-calcul-pensie-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Ghid PDF 2026
          </a>
          <Link href="/program-excel-calcul-pensie/">
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 border border-white/30 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer">
              <FileSpreadsheet className="h-4 w-4" />
              Tabel Excel CSV
            </span>
          </Link>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 border border-white/30 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            <Rss className="h-4 w-4" />
            Flux RSS 2026
          </a>
        </div>
      </div>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-6 w-6 mr-3 text-blue-600" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        <a href="/ghid-calcul-pensie-2026.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Descarcă Ghid PDF 2026
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
        <Link href="/program-excel-calcul-pensie/">
          <Button variant="outline">Program Excel Calcul Pensie</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
