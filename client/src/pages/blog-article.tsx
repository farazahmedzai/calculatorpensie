import { useParams, useRoute } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { ArticleSchema } from "@/components/seo/StructuredData";
import { getArticleBySlug } from "@/data/static-articles";
import { marked } from "marked";

export default function BlogArticle() {
  const params = useParams();
  const [match, routeParams] = useRoute("/blog/:slug");
  const slug = params?.slug || routeParams?.slug;

  const article = slug ? getArticleBySlug(slug) : undefined;
  const isLoading = false;
  const error = null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Articol nu a fost găsit</h1>
            <p className="text-gray-600 mb-8">Ne pare rău, articolul pe care îl căutați nu există sau a fost șters.</p>
            <Link href="/blog">
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
      case 'planificare':
        return <Badge className="bg-brand-blue">Planificare</Badge>;
      case 'tipuri-pensii':
        return <Badge className="bg-brand-green">Tipuri Pensii</Badge>;
      case 'legislatie':
        return <Badge className="bg-brand-red">Legislație</Badge>;
      default:
        return <Badge variant="secondary">General</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title={`${article.title} | CalculatorPensie.com`}
        description={article.excerpt}
        canonical={`https://calculatorpensie.com/blog/${article.slug}`}
        keywords={`${article.category}, pensii romania, ${article.title.toLowerCase()}`}
      />

      <ArticleSchema 
        headline={article.title}
        description={article.excerpt}
        datePublished={article.publishDate}
        dateModified={article.publishDate}
        author="CalculatorPensie.com"
        url={`https://calculatorpensie.com/blog/${article.slug}`}
        category={article.category}
      />

      <BreadcrumbNavigation 
        items={[
          { label: "Acasă", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.title }
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog button */}
          <div className="mb-6">
            <Link href="/blog">
              <Button variant="ghost" className="text-brand-blue hover:text-blue-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi la Blog
              </Button>
            </Link>
          </div>

          {/* Article header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {getCategoryBadge(article.category)}
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(article.publishDate).toLocaleDateString('ro-RO')}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime} min citire
                </div>
                <div className="text-sm text-gray-500 flex items-center">
                  <span className="w-1 h-1 bg-gray-300 rounded-full mx-2" />
                  Scris de: <strong className="text-gray-700 ml-1 font-semibold">{article.author.name}</strong>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                {article.title}
              </h1>
              <p className="text-lg text-gray-600 mt-4">{article.excerpt}</p>
            </CardHeader>
          </Card>

          {/* Article content */}
          <Card>
            <CardContent className="pt-6">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-brand-blue prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: article.content ? marked.parse(article.content) as string : "" }}
              />
            </CardContent>
          </Card>

          {/* Author Box */}
          <Card className="mt-8 border-l-4 border-l-brand-blue bg-neutral-light/30">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img 
                  src={article.author.image} 
                  alt={article.author.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-blue shadow-sm"
                />
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block">Autor Articol & Expert Revizuitor</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">{article.author.name}</h4>
                  <p className="text-xs text-gray-500 mb-2 font-medium">{article.author.role}</p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {article.author.bio}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related articles navigation */}
          <div className="mt-12 text-center">
            <Link href="/blog">
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