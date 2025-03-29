
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-30"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80")' }}
      ></div>
      <div className="relative container mx-auto px-4 py-24 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Build Your Future with Expert Equipment Training
          </h1>
          <p className="text-lg md:text-xl mb-8">
            EMC Training provides industry-leading certification programs for heavy equipment operators. Transform your career with hands-on training from certified professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-md px-6">
              <Link to="/courses">Explore Our Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-md border-white text-white hover:text-primary px-6">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
