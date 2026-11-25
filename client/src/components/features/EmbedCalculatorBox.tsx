import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Code2, Copy } from "lucide-react";

interface EmbedCalculatorBoxProps {
  title?: string;
  targetPath?: string;
  widgetLabel?: string;
}

export default function EmbedCalculatorBox({
  title = "Adaugă CalculatorPensie.com pe site-ul tău",
  targetPath = "/",
  widgetLabel = "CalculatorPensie.com",
}: EmbedCalculatorBoxProps) {
  const [copied, setCopied] = useState(false);

  const normalizedPath = targetPath.startsWith("/") ? targetPath : `/${targetPath}`;
  const snippet = `<div style="padding:14px;border:1px solid #cbd5e1;border-radius:10px;background:#f8fafc;font-family:system-ui,sans-serif;max-width:460px">\n  <strong>Simulează pensia pentru 2026 (VPR 81 Lei)</strong>\n  <p style="margin:6px 0;font-size:14px;color:#334155">Calculează gratuit pensia brută, pensia netă după CASS și punctele de stabilitate conform Legii 360/2023.</p>\n  <a href="https://calculatorpensie.com${normalizedPath}" target="_blank" rel="noopener" style="font-weight:700;color:#1d4ed8;text-decoration:underline">${widgetLabel}</a>\n</div>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  return (
    <Card className="border-slate-200 bg-slate-50/70 not-prose">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
          <Code2 className="h-5 w-5 text-blue-600" />
          {title}
        </CardTitle>
        <CardDescription>
          Citează sau integrează gratuit trimiterea către simulator în bloguri HR, ghiduri financiare sau intranete de companie.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <pre className="overflow-x-auto rounded-md border border-slate-200 bg-white p-3 text-xs text-slate-800">
          <code>{snippet}</code>
        </pre>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-slate-600">
            Atribuire recomandată:{" "}
            <a href="https://calculatorpensie.com/" className="font-semibold text-blue-700 underline">
              CalculatorPensie.com
            </a>
          </span>
          <Button type="button" variant="outline" size="sm" onClick={handleCopy} className="gap-1.5 bg-white">
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
            {copied ? "Cod HTML copiat" : "Copiază cod HTML"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
