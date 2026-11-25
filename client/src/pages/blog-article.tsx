import { useParams, useRoute, Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import RelatedLinks from "@/components/seo/RelatedLinks";
import { getArticleBySlug } from "@/data/static-articles";
import { formatRoDate } from "@/lib/utils";
import { marked } from "marked";

export default function BlogArticle() {
  const params = useParams();
  const [, routeParams] = useRoute("/blog/:slug");
  const slug = params?.slug || routeParams?.slug;

  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Articolul nu a fost găsit</h1>
            <p className="text-gray-600 mb-8">Ne pare rău, articolul pe care îl căutați nu există.</p>
            <Link href="/blog/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi la Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "planificare":
        return <Badge className="bg-brand-blue text-white">Planificare</Badge>;
      case "tipuri-pensii":
        return <Badge className="bg-brand-green text-white">Tipuri Pensii</Badge>;
      case "legislatie":
        return <Badge className="bg-brand-red text-white">Legislație</Badge>;
      default:
        return <Badge variant="secondary">General</Badge>;
    }
  };

  const renderedBody = article.content ? (marked.parse(article.content) as string) : "";

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={`${article.title} | CalculatorPensie.com`}
        description={article.excerpt}
        canonical={`https://calculatorpensie.com/blog/${article.slug}/`}
        ogImage={article.image}
        keywords={`${article.category}, pensii romania, ${article.title.toLowerCase()}`}
        schemaKind="article"
        schemaName={article.title}
        articleAuthor={article.author.name}
        articlePublishedTime={article.publishDate}
        articleModifiedTime={article.modifiedDate || "2026-11-25"}
        articleSection={article.category}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation
          items={[
            { label: "Acasă", href: "/" },
            { label: "Blog", href: "/blog/" },
            { label: article.title },
          ]}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/blog/">
              <Button variant="ghost" className="text-brand-blue hover:text-blue-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi la Blog
              </Button>
            </Link>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {getCategoryBadge(article.category)}
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  Actualizat: {formatRoDate(article.modifiedDate || article.publishDate)}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime} min citire
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mx-2" />
                  Autor: <strong className="text-gray-800 ml-1 font-semibold">{article.author.name}</strong>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                {article.title}
              </h1>
              <p className="text-lg text-gray-700 mt-4">{article.excerpt}</p>
            </CardHeader>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-brand-blue prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: renderedBody }}
              />
            </CardContent>
          </Card>

          <Card className="mt-8 border-l-4 border-l-brand-blue bg-neutral-light/30">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img
                  src="/logo.png"
                  alt={article.author.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-blue shadow-sm"
                />
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block">
                    Autor Articol &amp; Verificare Legislativă
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mt-1">{article.author.name}</h2>
                  <p className="text-xs text-gray-600 mb-2 font-medium">{article.author.role}</p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{article.author.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <RelatedLinks slug={article.slug} title={article.title} category={article.category} />

          <div className="mt-12 text-center">
            <Link href="/blog/">
              <Button size="lg" className="bg-brand-blue hover:bg-blue-700">
                Citește mai multe articole
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
