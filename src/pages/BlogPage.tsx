
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "L'Avenir de l'Opération d'Équipement Lourd : Automatisation et Compétences Humaines",
    excerpt: "À mesure que la technologie avance, le rôle des opérateurs d'équipement lourd évolue. Cet article explore l'équilibre entre les systèmes automatisés et les compétences humaines essentielles dans la construction moderne.",
    date: "15 juin 2023",
    author: "Michel Thompson",
    readTime: "8 min de lecture",
    image: "./images/good operator.jpg",
    category: "Tendances de l'Industrie"
  },
  {
    id: 2,
    title: "La Sécurité Avant Tout : Protocoles Essentiels pour l'Opération d'Équipement Lourd",
    excerpt: "La sécurité reste la priorité absolue dans l'opération d'équipement lourd. Découvrez les derniers protocoles de sécurité et les meilleures pratiques pour prévenir les accidents de travail.",
    date: "22 mai 2023",
    author: "Sarah Williams",
    readTime: "6 min de lecture",
    image: "./images/minig.jpg",
    category: "Sécurité"
  },
  {
    id: 3,
    title: "De Stagiaire à Expert : Le Parcours d'un Diplômé dans l'Opération de Grue",
            excerpt: "Suivez le parcours inspirant de Jean Dupont, un diplômé de SIP qui est passé de stagiaire à opérateur de grue senior dans une grande entreprise de construction en seulement trois ans.",
    date: "10 avril 2023",
    author: "Robert Johnson",
    readTime: "10 min de lecture",
    image: "./images/expert.jpg",
    category: "Histoires de Réussite"
  },
  {
    id: 4,
    title: "Choisir le Bon Programme de Formation d'Équipement Lourd",
    excerpt: "Avec de nombreuses options de formation disponibles, comment choisir la bonne ? Ce guide aide les futurs étudiants à évaluer les programmes selon des critères clés.",
    date: "5 mars 2023",
    author: "Maria Rodriguez",
    readTime: "7 min de lecture",
    image: "./images/smiling.jpg",
    category: "Éducation"
  },
  {
    id: 5,
    title: "Durabilité dans l'Opération d'Équipement Lourd : Réduire l'Impact Environnemental",
    excerpt: "L'industrie de la construction adopte des pratiques durables. Découvrez comment les équipements et techniques modernes réduisent l'impact environnemental.",
    date: "18 février 2023",
    author: "David Wilson",
    readTime: "9 min de lecture",
    image: "./images/durabity.jpg",
    category: "Durabilité"
  },
  {
    id: 6,
    title: "Femmes dans l'Opération d'Équipement Lourd : Briser les Barrières",
    excerpt: "Rencontrez les femmes qui font leur marque dans le domaine traditionnellement dominé par les hommes de l'opération d'équipement lourd.",
    date: "30 janvier 2023",
    author: "Jennifer Martinez",
    readTime: "8 min de lecture",
    image: "./images/women.jpg",
    category: "Projecteur sur l'Industrie"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Epertise Mining Consulting</h1>
              <p className="text-lg md:text-xl">
                Aperçus de l'industrie, histoires de réussite et les dernières nouveautés en matière d'opération d'équipement lourd.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                    </div>
                    <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0 border-t flex flex-wrap justify-between items-center text-sm text-gray-500">
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

            <div className="flex justify-center mt-12">
              <Button variant="outline">Charger Plus d'Articles</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
