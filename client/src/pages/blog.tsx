import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Search, Clock, Filter, BookOpen } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: number;
  slug: string;
  published: boolean;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: articles = [], isLoading } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
  });

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory && article.published;
  });

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'planificare':
        return 'text-brand-blue hover:text-blue-700';
      case 'tipuri-pensii':
        return 'text-brand-green hover:text-green-700';
      case 'legislatie':
        return 'text-brand-red hover:text-red-700';
      default:
        return 'text-brand-blue hover:text-blue-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-dark to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Blog CalculatorPensie.ro</h1>
          <p className="text-xl text-gray-200 mb-8">
            Ghiduri complete, analize și noutăți despre sistemul de pensii din România. 
            Rămâi informat cu experții noștri.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-neutral-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
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

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-16 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
                    alt={article.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      {getCategoryBadge(article.category)}
                      <span className="text-gray-700 text-sm">
                        {new Date(article.publishDate).toLocaleDateString('ro-RO')}
                      </span>
                    </div>
                    <CardTitle className={`text-xl mb-3 transition-colors ${getCategoryColor(article.category)}`}>
                      <Link href={`/blog/${article.slug}`}>
                        <a>{article.title}</a>
                      </Link>
                    </CardTitle>
                    <CardDescription className="mb-4 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime} min citire
                      </span>
                      <Link href={`/blog/${article.slug}`}>
                        <Button variant="ghost" size="sm" className={getCategoryColor(article.category)}>
                          Citește mai mult →
                        </Button>
                      </Link>
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
                {searchTerm ? 
                  `Nu există articole care să conțină "${searchTerm}"` : 
                  'Nu există articole în această categorie momentan.'
                }
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

      {/* Featured Guides */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ghidurile Noastre Complete</h2>
            <p className="text-xl text-gray-700">
              Resurse detaliate pentru fiecare aspect al sistemului de pensii
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-brand-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Planificarea Pensiei</CardTitle>
                <CardDescription>
                  Strategii complete pentru o pensie liniștită
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/planificare">
                  <Button className="w-full bg-brand-blue hover:bg-blue-700">
                    Vezi Ghidul
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-brand-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Tipuri de Pensii</CardTitle>
                <CardDescription>
                  Toate opțiunile disponibile în sistemul românesc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tipuri-pensii">
                  <Button className="w-full bg-brand-green hover:bg-green-700">
                    Vezi Ghidul
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-brand-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6l-2.4 3.2a1 1 0 000 1.2l2.4 3.2A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" />
                  </svg>
                </div>
                <CardTitle>Legislație</CardTitle>
                <CardDescription>
                  Legea pensiilor pe înțelesul tuturor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/legislatie">
                  <Button className="w-full bg-brand-red hover:bg-red-700">
                    Vezi Ghidul
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Nu Rata Niciun Articol Important</h2>
          <p className="text-xl text-blue-50 mb-8">
            Abonează-te la newsletter pentru a primi în email cele mai importante 
            actualizări despre sistemul de pensii din România.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Adresa ta de email" 
                className="flex-1 bg-white text-neutral-dark"
              />
              <Button 
                type="submit" 
                className="bg-brand-red hover:bg-red-700 whitespace-nowrap"
              >
                Abonează-te
              </Button>
            </div>
            <p className="text-sm text-blue-50 mt-4">
              🔒 Datele tale sunt protejate. Nu trimitem spam.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
