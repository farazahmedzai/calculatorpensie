import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Search, Clock, Filter, BookOpen } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { getArticlesByCategory, searchArticles } from "@/data/static-articles";
import { ROUTES_META } from "@/data/routes-meta";
import { formatRoDate } from "@/lib/utils";

const PAGE_META = ROUTES_META["/blog/"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allArticles = getArticlesByCategory(selectedCategory);
  const articles = searchTerm ? searchArticles(searchTerm) : allArticles;

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory && article.published;
  });

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "planificare":
        return "text-brand-blue hover:text-blue-700";
      case "tipuri-pensii":
        return "text-brand-green hover:text-green-700";
      case "legislatie":
        return "text-brand-red hover:text-red-700";
      default:
        return "text-brand-blue hover:text-blue-700";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={PAGE_META.title}
        description={PAGE_META.description}
        canonical={PAGE_META.canonical}
        keywords={PAGE_META.keywords}
        schemaKind="collection"
        schemaName={PAGE_META.schemaName}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>

      <section className="bg-gradient-to-r from-neutral-dark to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-white">Blog Pensii România 2026</h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
            Ghiduri practice, analize legislative și exemple de calcul actualizate conform Legii nr. 360/2023.
          </p>
        </div>
      </section>

      <section className="py-8 bg-neutral-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-700" />
              <Input
                placeholder="Caută articole..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-700" />
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList>
                  <TabsTrigger value="all">Toate</TabsTrigger>
                  <TabsTrigger value="planificare">Planificare</TabsTrigger>
                  <TabsTrigger value="tipuri-pensii">Tipuri Pensii</TabsTrigger>
                  <TabsTrigger value="legislatie">Legislație</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                  <img
                    src={article.image || "/og-image.jpg"}
                    alt={article.title}
                    width={800}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        {getCategoryBadge(article.category)}
                        <span className="text-gray-700 text-sm">{formatRoDate(article.publishDate)}</span>
                      </div>
                      <CardTitle className={`text-xl mb-3 transition-colors ${getCategoryColor(article.category)}`}>
                        <Link href={`/blog/${article.slug}/`} className="hover:underline">
                          {article.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mb-4 line-clamp-3">{article.excerpt}</CardDescription>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-3 border-t pt-3 flex items-center justify-between">
                        <span className="flex items-center font-medium">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {article.readTime} min citire
                        </span>
                        <span className="font-semibold text-gray-800 truncate ml-2">{article.author.name}</span>
                      </div>
                      <div className="flex items-center justify-end">
                        <Link href={`/blog/${article.slug}/`}>
                          <Button variant="ghost" size="sm" className={`${getCategoryColor(article.category)} font-bold`}>
                            Citește mai mult →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nu s-au găsit articole</h3>
              <p className="text-gray-700 mb-6">
                {searchTerm
                  ? `Nu există articole care să conțină "${searchTerm}"`
                  : "Nu există articole în această categorie momentan."}
              </p>
              {searchTerm && (
                <Button onClick={() => setSearchTerm("")} variant="outline">
                  Șterge căutarea
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-neutral-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ghidurile Noastre Principale</h2>
            <p className="text-xl text-gray-700">Resurse structurate pentru fiecare aspect al sistemului de pensii</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Planificarea Pensiei</CardTitle>
                <CardDescription>Strategii pentru Pilonul I, II și III</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/planificare/">
                  <Button className="w-full bg-brand-blue hover:bg-blue-700">Vezi Ghidul</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Tipuri de Pensii</CardTitle>
                <CardDescription>Limită de vârstă, anticipată, invaliditate, urmaș</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tipuri-pensii/">
                  <Button className="w-full bg-brand-green hover:bg-green-700">Vezi Ghidul</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Legislație 2026</CardTitle>
                <CardDescription>Legea nr. 360/2023 și Legea nr. 141/2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/legislatie/">
                  <Button className="w-full bg-brand-red hover:bg-red-700">Vezi Ghidul</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
