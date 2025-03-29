
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
            Construisez Votre Avenir avec une Formation d'Équipement Experte
          </h1>
          <p className="text-lg md:text-xl mb-8">
            EMC Formation propose des programmes de certification de premier plan pour les opérateurs d'équipement lourd. Transformez votre carrière avec une formation pratique dispensée par des professionnels certifiés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-md px-6">
              <Link to="/courses">Découvrir Nos Formations</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-md border-white text-white hover:text-primary px-6">
              <Link to="/contact">Contactez-Nous</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
