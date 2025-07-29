import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Shield } from 'lucide-react';

const EPIPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center bg-gradient-to-r from-green-900 to-green-700">
          <div className="absolute inset-0 z-0">
            <img
              src="./images/expert.jpg"
              alt="Formation EPI"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-green-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 mr-4 text-green-300" />
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Cours Fondamental
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Formation sur les Équipements de Protection Individuelle (EPI)
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Apprenez à sélectionner, utiliser et maintenir les équipements de protection individuelle 
                essentiels à votre sécurité sur site minier.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">1 Semaine</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-3">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Débutant</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-3">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">800.000 FG</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-bold mb-8 text-gray-900">À propos de ce cours</h2>
                  <p className="text-xl leading-relaxed mb-6 text-gray-700">
                    Maîtrisez l'utilisation correcte des équipements de protection individuelle 
                    pour garantir votre sécurité dans l'environnement minier.
                  </p>

                  <div className="bg-green-50 rounded-xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-green-900 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                      Ce que vous apprendrez
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Types d'EPI et leurs utilisations",
                        "Inspection et maintenance des EPI",
                        "Normes et réglementations",
                        "Techniques de port correct"
                      ].map((objective, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Informations du cours</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-green-600 mr-3" />
                          <div>
                            <div className="font-semibold">Durée</div>
                            <div className="text-gray-600">1 Semaine</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-green-600 mr-3" />
                          <div>
                            <div className="font-semibold">Niveau</div>
                            <div className="text-gray-600">Débutant</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-green-600 mr-3" />
                          <div>
                            <div className="font-semibold">Prix</div>
                            <div className="text-gray-600">800.000 FG</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button size="lg" className="w-full bg-green-600 hover:bg-green-700" asChild>
                        <Link to="/admissions">S'inscrire maintenant</Link>
                      </Button>
                      <Button variant="outline" size="lg" className="w-full" asChild>
                        <Link to="/contact">Demander des infos</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EPIPage;
