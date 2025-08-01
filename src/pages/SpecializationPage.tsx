import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, BookOpen, Award, Star, Clock, Users } from 'lucide-react';
import specializations from '../data/specializations';
import SpecializationDetail from '../components/SpecializationDetail';
import LoadingSpinner from '../components/LoadingSpinner';

const SpecializationPage = () => {
  const { specializationId } = useParams<{ specializationId: string }>();
  
  // Find the specialization
  const specialization = specializations.find(spec => spec.id === specializationId);
  
  if (!specialization) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Spécialisation non trouvée</h1>
            <p className="text-gray-600 mb-8 text-sm sm:text-base">La spécialisation que vous recherchez n'existe pas.</p>
            <LoadingSpinner text="Redirection..." />
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
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link to="/courses" className="text-gray-500 hover:text-gray-700 transition-colors">
                Formations
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-primary font-semibold">{specialization.title}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[300px] sm:min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={specialization.image}
              alt={specialization.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link 
                to="/courses" 
                className="inline-flex items-center text-white hover:text-blue-200 mb-4 text-sm sm:text-base transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {specialization.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                {specialization.introduction}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-2 text-sm sm:text-base">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold">{specialization.courses?.length || 0} cours</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-2 text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold">{specialization.certifications.length} certifications</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-2 text-sm sm:text-base">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold">{specialization.rating.toFixed(1)}/5</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Content */}
        <section className="py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <SpecializationDetail spec={specialization} />
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-50 py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">
                Prêt à commencer votre formation ?
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                Rejoignez des milliers d'étudiants qui ont déjà transformé leur carrière avec nos formations spécialisées.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" asChild className="text-sm sm:text-base">
                  <Link to="/admissions">S'inscrire maintenant</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-sm sm:text-base">
                  <Link to="/contact">Demander plus d'informations</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpecializationPage; 