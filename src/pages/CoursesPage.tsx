import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Award, Star } from 'lucide-react';
import specializations from '../data/specializations';

const CoursesPage = () => {
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
              <span className="text-primary font-semibold">Formations</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[250px] sm:min-h-[300px] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="hero-bg-overlay" />
            <div className="absolute inset-0">
              <div className="absolute inset-0">
                <img
                  src="/sip-equip-train/images/good operator.jpg"
                  alt=""
                  className="w-full h-full object-cover animate-fade-1"
                />
              </div>
              <div className="absolute inset-0">
                <img
                  src="/sip-equip-train/images/Loader operating.jpg"
                  alt=""
                  className="w-full h-full object-cover animate-fade-2"
                />
              </div>
              <div className="absolute inset-0">
                <img
                  src="/sip-equip-train/images/Team and loader.jpg"
                  alt=""
                  className="w-full h-full object-cover animate-fade-3"
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">Nos Formations</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Explorez nos spécialisations en formation professionnelle pour l'opération d'équipements lourds et la sécurité minière. Sélectionnez une spécialisation pour découvrir les cours proposés.
              </p>
            </div>
          </div>
        </section>

        {/* Specializations Grid */}
        <section className="py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 sm:mb-12">
              <h2 className="section-heading text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-primary drop-shadow-sm">Découvrez Nos Spécialisations</h2>
              <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed bg-blue-50 rounded-xl px-4 sm:px-6 py-4 shadow-sm">
                Explorez un éventail complet de spécialisations conçues pour répondre à tous les besoins du secteur minier moderne : opération d'équipements lourds, sécurité, mécanique, électricité, ingénierie, gestion, compétences humaines et culture digitale. Sélectionnez une spécialisation pour découvrir les parcours, modules et certifications proposés.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {specializations.map((spec) => (
                <div key={spec.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                  <img src={spec.image} alt={spec.title} className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover rounded-full mb-4 border-4 border-blue-100" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-primary leading-tight">{spec.title}</h3>
                  <p className="text-gray-700 mb-2 font-medium text-sm sm:text-base leading-relaxed">{spec.introduction}</p>
                  <div className="mb-2 w-full">
                    <span className="font-semibold text-sm sm:text-base">Cours phares :</span>
                    <ul className="list-disc pl-5 text-left text-gray-600 text-xs sm:text-sm">
                      {spec.coreCourses.map((course, i) => (
                        <li key={i} className="leading-relaxed">{course}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-2 w-full">
                    <span className="font-semibold text-sm sm:text-base">Certifications visées :</span>
                    <ul className="list-disc pl-5 text-left text-gray-600 text-xs sm:text-sm">
                      {spec.certifications.map((cert, i) => (
                        <li key={i} className="leading-relaxed">{cert}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <span className="font-semibold mr-2 text-sm sm:text-base">Note :</span>
                    <span className="text-yellow-500 text-base sm:text-lg">{'★'.repeat(Math.floor(spec.rating))}{spec.rating % 1 >= 0.5 ? '½' : ''}</span>
                    <span className="ml-2 text-gray-600 text-sm sm:text-base">({spec.rating.toFixed(1)})</span>
                  </div>
                  <Link
                    to={`/specialization/${spec.id}`}
                    className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    Voir les cours
                  </Link>
                </div>
              ))}
            </div>
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

export default CoursesPage;
