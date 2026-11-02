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

/** Every calculator/tool page on the site. The first five are always shown. */
const CORE_TOOLS: Target[] = [
  { href: "/", label: "Calculator Pensie de Stat" },
  { href: "/calculator-varsta-pensionare/", label: "Calculator Vârstă de Pensionare" },
  { href: "/calculator-pensie-anticipata/", label: "Calculator Pensie Anticipată" },
  { href: "/calculator-puncte-pensie/", label: "Calculator Puncte de Stabilitate" },
  { href: "/legislatie/", label: "Ghidul Legislației (Legea 360/2023)" },
];

/** Extra tool suggestions keyed by words that appear in the article's slug/title. */
const TOPICAL_TOOLS: Array<{ match: RegExp; tool: Target }> = [
  { match: /pilon-?2|pilonul-?2/i, tool: { href: "/calculator-pensie-pilon-2/", label: "Calculator Pilonul II" } },
  { match: /pilon-?3|pilonul-?3|facultativ/i, tool: { href: "/calculator-pensie-pilon-3/", label: "Calculator Pilonul III" } },
  { match: /punct-referinta|vpr|indexare|puncte?/i, tool: { href: "/calculator-puncte-pensie/", label: "Calculator Puncte de Pensie" } },
  { match: /varsta|pensionare|ies-la-pensie/i, tool: { href: "/calculator-varsta-pensionare/", label: "Când te poți pensiona" } },
  { match: /anticipat/i, tool: { href: "/calculator-pensie-anticipata/", label: "Pensie Anticipată: penalizări" } },
  { match: /invaliditate|urmas/i, tool: { href: "/tipuri-pensii/", label: "Tipuri de Pensii în România" } },
  { match: /legislat|reforma|lege|stat-2026/i, tool: { href: "/legislatie/", label: "Legea Pensiilor 2026" } },
  { match: /excel|simulare|instrumente/i, tool: { href: "/program-excel-calcul-pensie/", label: "Program Excel Calcul Pensie" } },
  { match: /planificare|minima|garantata/i, tool: { href: "/planificare/", label: "Planificare Pensie" } },
  { match: /cotizare|stagiul|vechime|contributii/i, tool: { href: "/faq/", label: "Întrebări Frecvente" } },
  { match: /acte|dosar|cnpp|procedur/i, tool: { href: "/metodologie/", label: "Metodologia de Calcul" } },
];

interface Props {
  slug: string;
  title: string;
  category: string;
}

export default function RelatedLinks({ slug, title, category }: Props) {
  // 1. tools — always the five core, plus any topical ones for this article
  const haystack = `${slug} ${title}`;
  const extra = TOPICAL_TOOLS
    .filter(t => t.match.test(haystack))
    .map(t => t.tool)
    .filter(t => !CORE_TOOLS.some(c => c.href === t.href));

  const seen = new Set<string>();
  const tools = [...CORE_TOOLS, ...extra].filter(t => {
    if (seen.has(t.href)) return false;
    seen.add(t.href);
    return true;
  }).slice(0, 7);

  // 2. related reading — same category first, then fill from the rest.
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
