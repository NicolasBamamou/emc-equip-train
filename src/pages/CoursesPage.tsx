import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import specializations from '../data/specializations';
import SpecializationDetail from '../components/SpecializationDetail';

const CoursesPage = () => {
  const [selectedSpec, setSelectedSpec] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Section Héro */}
        <section className="relative min-h-[300px] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="hero-bg-overlay" />
            <div className="absolute inset-0">
              <div className="absolute inset-0">
                <img
                  src="/emc-equip-train/images/good operator.jpg"
                  alt=""
                  className="w-full h-full object-cover animate-fade-1"
                />
              </div>
              <div className="absolute inset-0">
                <img
                  src="/emc-equip-train/images/Loader operating.jpg"
                  alt=""
                  className="w-full h-full object-cover animate-fade-2"
                />
              </div>
              <div className="absolute inset-0">
                <img
                  src="/emc-equip-train/images/Team and loader.jpg"
                  alt=""
                  className="w-full h-full object-cover animate-fade-3"
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Formations</h1>
              <p className="text-lg md:text-xl">
                Explorez nos spécialisations en formation professionnelle pour l'opération d'équipements lourds et la sécurité minière. Sélectionnez une spécialisation pour découvrir les cours proposés.
              </p>
            </div>
          </div>
        </section>

        {/* Spécialisations ou Détail */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Si aucune spécialisation sélectionnée, afficher la grille */}
            {!selectedSpec && (
              <div>
            <div className="mb-12">
                  <h2 className="section-heading text-center text-3xl md:text-4xl font-extrabold mb-4 text-primary drop-shadow-sm">Découvrez Nos Spécialisations</h2>
                  <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed bg-blue-50 rounded-xl px-6 py-4 shadow-sm">
                    Explorez un éventail complet de spécialisations conçues pour répondre à tous les besoins du secteur minier moderne : opération d'équipements lourds, sécurité, mécanique, électricité, ingénierie, gestion, compétences humaines et culture digitale. Sélectionnez une spécialisation pour découvrir les parcours, modules et certifications proposés.
              </p>
            </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {specializations.map((spec) => (
                    <div key={spec.id} className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                      <img src={spec.image} alt={spec.title} className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-blue-100" />
                      <h3 className="text-2xl font-bold mb-2 text-primary">{spec.title}</h3>
                      <p className="text-gray-700 mb-2 font-medium">{spec.introduction}</p>
                      <div className="mb-2">
                        <span className="font-semibold">Cours phares :</span>
                        <ul className="list-disc pl-5 text-left text-gray-600">
                          {spec.coreCourses.map((course, i) => (
                            <li key={i}>{course}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Certifications visées :</span>
                        <ul className="list-disc pl-5 text-left text-gray-600">
                          {spec.certifications.map((cert, i) => (
                            <li key={i}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <span className="font-semibold mr-2">Note :</span>
                        <span className="text-yellow-500 text-lg">{'★'.repeat(Math.floor(spec.rating))}{spec.rating % 1 >= 0.5 ? '½' : ''}</span>
                        <span className="ml-2 text-gray-600">({spec.rating.toFixed(1)})</span>
                      </div>
                      <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                        onClick={() => setSelectedSpec(spec.id)}
                      >
                        Voir les cours
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Si une spécialisation est sélectionnée, afficher ses cours */}
            {selectedSpec && (
              <div>
                <button
                  className="mb-8 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-semibold"
                  onClick={() => setSelectedSpec(null)}
                >
                  ← Retour aux spécialisations
                </button>
                {specializations.map((spec) =>
                  spec.id === selectedSpec ? (
                    <SpecializationDetail key={spec.id} spec={spec} />
                  ) : null
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
