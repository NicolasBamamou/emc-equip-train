
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
    title: "The Future of Heavy Equipment Operation: Automation and Human Skills",
    excerpt: "As technology advances, the role of heavy equipment operators is evolving. This article explores the balance between automated systems and essential human skills in modern construction.",
    date: "June 15, 2023",
    author: "Michael Thompson",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    category: "Industry Trends"
  },
  {
    id: 2,
    title: "Safety First: Essential Protocols for Heavy Equipment Operation",
    excerpt: "Safety remains the top priority in heavy equipment operation. Learn about the latest safety protocols and best practices for preventing workplace accidents.",
    date: "May 22, 2023",
    author: "Sarah Williams",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    category: "Safety"
  },
  {
    id: 3,
    title: "From Trainee to Expert: A Graduate's Journey in Crane Operation",
    excerpt: "Follow the inspiring journey of John Miller, an EMC graduate who went from trainee to senior crane operator at a major construction firm in just three years.",
    date: "April 10, 2023",
    author: "Robert Johnson",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    category: "Success Stories"
  },
  {
    id: 4,
    title: "Choosing the Right Heavy Equipment Training Program",
    excerpt: "With many training options available, how do you choose the right one? This guide helps prospective students evaluate programs based on key criteria.",
    date: "March 5, 2023",
    author: "Maria Rodriguez",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80",
    category: "Education"
  },
  {
    id: 5,
    title: "Sustainability in Heavy Equipment Operation: Reducing Environmental Impact",
    excerpt: "The construction industry is embracing sustainable practices. Learn how modern equipment and techniques are reducing environmental impact.",
    date: "February 18, 2023",
    author: "David Wilson",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    category: "Sustainability"
  },
  {
    id: 6,
    title: "Women in Heavy Equipment Operation: Breaking Barriers",
    excerpt: "Meet the women who are making their mark in the traditionally male-dominated field of heavy equipment operation.",
    date: "January 30, 2023",
    author: "Jennifer Martinez",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "Industry Spotlight"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">EMC Training Blog</h1>
              <p className="text-lg md:text-xl">
                Industry insights, success stories, and the latest in heavy equipment operation.
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
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
