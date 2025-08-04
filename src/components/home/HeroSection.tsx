import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-[600px] flex items-center overflow-hidden">
      {/* Left side - Images with creative masking */}
      <div className="absolute inset-0 lg:w-3/5 w-full z-0">
        <div className="relative h-full">
          {/* Animated background images */}
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
          
          {/* Creative diagonal overlay that reveals images */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/30 to-gray-900/90 lg:to-gray-900"></div>
          
          {/* Animated geometric overlay */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Right side - Text content with glassmorphism */}
      <div className="relative z-10 w-full lg:w-2/5 lg:ml-auto">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:text-left text-center lg:max-w-none max-w-2xl mx-auto">
            {/* Glassmorphism card for text */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-500 rounded-full opacity-80"></div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                Votre Insertion Professionnelle Complète dans l'Écosystème Minier
              </h1>
              <p className="text-base md:text-lg mb-6 text-gray-100 leading-relaxed">
                Formations certifiantes en équipements lourds, sécurité minière et compétences techniques. Transformez votre carrière avec nos experts reconnus.
              </p>
              
              {/* Enhanced buttons with hover effects */}
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-start justify-center">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <Link to="/courses">Découvrir Nos Formations</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <Link to="/contact">Contactez-Nous</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay for better text readability on small screens */}
      <div className="absolute inset-0 bg-black/40 lg:hidden"></div>
    </div>
  );
};

export default HeroSection;
