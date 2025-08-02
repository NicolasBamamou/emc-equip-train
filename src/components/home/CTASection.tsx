
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Transformer Votre Avenir Professionnel dans l'Industrie Minière?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez les 2000+ diplômés SIP qui excellent dans leurs carrières. Choisissez parmi nos 7 spécialisations et bénéficiez d'un accompagnement jusqu'à l'emploi avec 85% de taux de placement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
            <Link to="/admissions">S'inscrire Maintenant</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
            <Link to="/contact">Contactez-Nous</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
