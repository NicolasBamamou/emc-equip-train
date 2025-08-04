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
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>
      </div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Added text shadow and background for better readability */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-2xl">
              Votre Insertion Professionnelle Complète dans l'Écosystème Minier
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 drop-shadow-lg">
              SIP propose des spécialisations certifiantes pour votre réussite professionnelle : opération d'équipements, sécurité minière, mécanique diesel, génie minier, électricité industrielle, gestion d'opérations et compétences transversales. Transformez votre carrière avec une formation complète dispensée par des experts reconnus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-md px-6 shadow-xl">
                <Link to="/courses">Découvrir Nos Formations</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm text-md border-white text-white hover:bg-white hover:text-primary px-6 shadow-xl">
                <Link to="/contact">Contactez-Nous</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
