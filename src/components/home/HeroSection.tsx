import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="hero-bg-overlay" />
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <img
              src="/sip-equip-train/images/Excavator.png"
              alt=""
              className="w-full h-full object-cover animate-fade-1"
            />
          </div>
          <div className="absolute inset-0">
            <img
              src="/sip-equip-train/images/Loader.png"
              alt=""
              className="w-full h-full object-cover animate-fade-2"
            />
          </div>
          <div className="absolute inset-0">
            <img
              src="/sip-equip-train/images/Dozer.png"
              alt=""
              className="w-full h-full object-cover animate-fade-3"
            />
          </div>
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Construisez Votre Avenir avec une Formation d'Équipement Experte
          </h1>
          <p className="text-lg md:text-xl mb-8">
            SIP propose des programmes de certification de premier plan pour les opérateurs d'équipement lourd. Transformez votre carrière avec une formation pratique dispensée par des professionnels certifiés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
