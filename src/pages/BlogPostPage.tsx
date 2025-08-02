import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
            <Link to="/blog">
              <Button>Retour au Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
                <ArrowLeft size={20} className="mr-2" />
                Retour au Blog
              </Link>
              
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <article className="lg:w-3/4">
                  <div className="mb-8 rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-64 md:h-96 object-cover"
                    />
                  </div>
                  
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Partager cet article</h3>
                      <Button variant="outline" size="sm">
                        <Share2 size={16} className="mr-2" />
                        Partager
                      </Button>
                    </div>
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:w-1/4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Articles Connexes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {blogPosts
                        .filter(p => p.id !== post.id && p.category === post.category)
                        .slice(0, 3)
                        .map(relatedPost => (
                          <Link 
                            key={relatedPost.id} 
                            to={`/blog/${relatedPost.id}`}
                            className="block group"
                          >
                            <div className="flex gap-3">
                              <img 
                                src={relatedPost.image} 
                                alt={relatedPost.title}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                                  {relatedPost.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                  {relatedPost.date}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Contactez-nous</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Vous avez des questions sur nos programmes de formation ?
                      </p>
                      <Link to="/contact">
                        <Button className="w-full">
                          Nous Contacter
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
