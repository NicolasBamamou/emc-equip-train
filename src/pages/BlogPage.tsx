
import React, { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, Filter } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import specializations from '@/data/specializations';

const BlogPage = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);

  // Extract unique specializations from blog posts
  const availableSpecializations = useMemo(() => {
    const allSpecs = blogPosts.flatMap(post => post.specializations || []);
    const uniqueSpecs = [...new Set(allSpecs)];
    return specializations.filter(spec => uniqueSpecs.includes(spec.id));
  }, []);

  // Filter blog posts based on selected specialization
  const filteredPosts = useMemo(() => {
    if (!selectedSpecialization) return blogPosts;
    return blogPosts.filter(post => 
      post.specializations?.includes(selectedSpecialization)
    );
  }, [selectedSpecialization]);

  const handleSpecializationFilter = (specId: string | null) => {
    setSelectedSpecialization(specId === selectedSpecialization ? null : specId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Expertise SIP</h1>
              <p className="text-lg md:text-xl">
                Aperçus de l'industrie minière, histoires de réussite et expertise technique couvrant nos spécialisations pour votre insertion professionnelle complète dans l'écosystème minier guinéen et au-delà.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">Filtrer par spécialisation :</span>
              </div>
              <Button
                variant={selectedSpecialization === null ? "default" : "outline"}
                size="sm"
                onClick={() => handleSpecializationFilter(null)}
                className="text-sm"
              >
                Tous les articles
              </Button>
              {availableSpecializations.map((spec) => (
                <Button
                  key={spec.id}
                  variant={selectedSpecialization === spec.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSpecializationFilter(spec.id)}
                  className="text-sm"
                >
                  {spec.title}
                </Button>
              ))}
            </div>
            
            {selectedSpecialization && (
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{filteredPosts.length}</span> article{filteredPosts.length > 1 ? 's' : ''} 
                  {selectedSpecialization && (
                    <>
                      {' '}pour la spécialisation{' '}
                      <span className="font-medium text-primary">
                        {availableSpecializations.find(s => s.id === selectedSpecialization)?.title}
                      </span>
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Aucun article trouvé pour cette spécialisation.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedSpecialization(null)}
                  className="mt-4"
                >
                  Voir tous les articles
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs font-medium">{post.category}</Badge>
                        {post.specializations && post.specializations.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {post.specializations.slice(0, 2).map((specId) => {
                              const spec = specializations.find(s => s.id === specId);
                              return spec ? (
                                <Badge 
                                  key={specId} 
                                  variant="outline" 
                                  className="text-xs cursor-pointer hover:bg-primary hover:text-white transition-colors"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSpecializationFilter(specId);
                                  }}
                                >
                                  {spec.title.length > 20 ? `${spec.title.substring(0, 20)}...` : spec.title}
                                </Badge>
                              ) : null;
                            })}
                            {post.specializations.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{post.specializations.length - 2}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                      <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4 flex-grow">
                      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-0 border-t flex flex-wrap justify-between items-center text-sm text-gray-500 gap-2">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDays size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-12">
                <Button variant="outline">Charger Plus d'Articles</Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
