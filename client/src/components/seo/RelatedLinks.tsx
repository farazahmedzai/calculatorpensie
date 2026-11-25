// client/src/components/seo/RelatedLinks.tsx
//
// WHY THIS EXISTS
//   Audit finding: across all 20 blog articles there were only 24 internal links
//   to 5 distinct destinations. /calculator-pensie-pilon-2 and
//   /calculator-pensie-pilon-3 received ZERO internal links from any article,
//   and the two Pilon articles linked only to / . The money pages were not
//   receiving topical internal authority from the blog.
//
// HOW IT WORKS
//   Two deterministic, topical link sets:
//     1. A "tools" block that appears on EVERY article and links to the
//        calculator pages — so no article can be a dead end for the money pages.
//     2. A "related reading" block: same-category articles first, then others,
//        so every article gains sibling links it did not have.
//
//   A keyword map adds article-specific relevant tools, so the anchor context is
//   genuine rather than boilerplate repeated 20 times.
import { Link } from "wouter";
import { staticArticles } from "@/data/static-articles";

type Target = { href: string; label: string };

/** Fallback tools shown only when fewer than 2 topical tools match the article. */
const FALLBACK_TOOLS: Target[] = [
  { href: "/", label: "Calculator Pensie de Stat 2026" },
  { href: "/calculator-varsta-pensionare/", label: "Calculator Vârstă de Pensionare" },
];

/** Topical tool suggestions keyed by slug/title/category signals (max 3 shown). */
const TOPICAL_TOOLS: Array<{ match: RegExp; tool: Target }> = [
  { match: /pilon-?2|pilonul-?2|administrat/i, tool: { href: "/calculator-pensie-pilon-2/", label: "Calculator Pilonul II" } },
  { match: /pilon-?3|pilonul-?3|facultativ/i, tool: { href: "/calculator-pensie-pilon-3/", label: "Calculator Pilonul III" } },
  { match: /punct-referinta|vpr|indexare|stabilitate|puncte?/i, tool: { href: "/calculator-puncte-pensie/", label: "Calculator Puncte și VPR" } },
  { match: /varsta|pensionare|ies-la-pensie|femei|tabel/i, tool: { href: "/calculator-varsta-pensionare/", label: "Calculator Vârstă de Pensionare" } },
  { match: /anticipat|penalizar/i, tool: { href: "/calculator-pensie-anticipata/", label: "Calculator Pensie Anticipată" } },
  { match: /invaliditate|urmas/i, tool: { href: "/tipuri-pensii/", label: "Tipuri de Pensii în România" } },
  { match: /legislat|reforma|lege-360|lege|stat-2026/i, tool: { href: "/legislatie/", label: "Ghidul Legii 360/2023" } },
  { match: /excel|simulare|instrumente|brut|net/i, tool: { href: "/program-excel-calcul-pensie/", label: "Program Excel Calcul Pensie" } },
  { match: /planificare|minima|garantata/i, tool: { href: "/planificare/", label: "Ghid Planificare Pensie" } },
  { match: /cotizare|stagiul|vechime|contributii|cumparare/i, tool: { href: "/faq/", label: "Întrebări Frecvente Pensii" } },
  { match: /acte|dosar|cnpp|procedur|calcul/i, tool: { href: "/metodologie/", label: "Metodologia de Calcul CNPP" } },
];

interface Props {
  slug: string;
  title: string;
  category: string;
}

export default function RelatedLinks({ slug, title, category }: Props) {
  // 1. tools: prioritise topical matches for this article (capped at 3 to avoid sitewide repetition)
  const haystack = `${slug} ${title} ${category}`;
  const matched = TOPICAL_TOOLS
    .filter(t => t.match.test(haystack))
    .map(t => t.tool);

  const seen = new Set<string>();
  const uniqueMatched = matched.filter(t => {
    if (seen.has(t.href)) return false;
    seen.add(t.href);
    return true;
  });

  const tools = uniqueMatched.length >= 2
    ? uniqueMatched.slice(0, 3)
    : [...uniqueMatched, ...FALLBACK_TOOLS.filter(t => !seen.has(t.href))].slice(0, 3);

  // 2. related reading: same category first, then fill from the rest.
  const others = staticArticles.filter(a => a.published && a.slug !== slug);
  const sameCat = others.filter(a => a.category === category);
  const rest = others.filter(a => a.category !== category);
  const related = [...sameCat, ...rest].slice(0, 4);

  return (
    <aside className="mt-10">
      {/* Tools: appears on every article, so no article is a dead end. */}
      <section className="rounded-xl border border-blue-100 bg-blue-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-blue-900">Instrumente și resurse utile</h2>
        <p className="mb-4 text-gray-700">
          Calculează-ți situația exactă cu instrumentele noastre gratuite, actualizate
          conform Legii 360/2023:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {tools.map(t => (
            <li key={t.href}>
              <Link href={t.href} className="font-semibold text-blue-700 hover:underline">
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Related reading: sibling articles, same category prioritised. */}
      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Citește și</h2>
          <ul className="list-none space-y-2 pl-0">
            {related.map(a => (
              <li key={a.slug}>
                <Link href={`/blog/${a.slug}/`} className="font-medium text-brand-blue hover:underline">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </aside>
  );
}
