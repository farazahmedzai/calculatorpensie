import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { ArticleSchema } from "@/components/seo/StructuredData";

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: number;
  slug: string;
  published: boolean;
}

export default function BlogArticle() {
  const { slug } = useParams();

  const { data: article, isLoading, error } = useQuery<Article>({
    queryKey: [`/api/articles/${slug}`],
    enabled: !!slug,
  });

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
      />

      <BreadcrumbNavigation 
        items={[
          { name: "Acasă", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: article.title }
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
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 leading-tight">
                {article.title}
              </CardTitle>
              <p className="text-lg text-gray-600 mt-4">{article.excerpt}</p>
            </CardHeader>
          </Card>

          {/* Article content */}
          <Card>
            <CardContent className="pt-6">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-brand-blue prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
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