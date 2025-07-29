import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Star, BookOpen, Globe, TrendingUp } from 'lucide-react';

const ISO45001Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - More sophisticated for advanced course */}
        <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
            <img
              src="./images/expert.jpg"
              alt="ISO 45001 Formation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-blue-200 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mr-4">
                  <Star className="w-4 h-4 mr-2" />
                  COURS AVANCÉ
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
                  <Globe className="w-4 h-4 mr-2" />
                  Certification Internationale
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">ISO 45001</span>
                <br />
                <span className="text-3xl md:text-4xl font-normal text-blue-200">
                  Systèmes de Gestion Santé & Sécurité
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
                Devenez un expert certifié en management de la santé et sécurité au travail. 
                Maîtrisez la norme internationale la plus reconnue dans l'industrie.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/10 backdrop-blur border border-white/20 rounded-xl px-6 py-3">
                  <Clock className="w-5 h-5 mr-3 text-blue-300" />
                  <span className="font-semibold">4 Semaines Intensives</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur border border-white/20 rounded-xl px-6 py-3">
                  <TrendingUp className="w-5 h-5 mr-3 text-green-300" />
                  <span className="font-semibold">Niveau Expert</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur border border-white/20 rounded-xl px-6 py-3">
                  <Award className="w-5 h-5 mr-3 text-yellow-300" />
                  <span className="font-semibold">3.500.000 FG</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
                  <Link to="/admissions">Démarrer la Formation</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black" asChild>
                  <Link to="/contact">Consultation Gratuite</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Pourquoi choisir cette formation ?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Une formation complète qui vous prépare à devenir Lead Auditor ISO 45001 
                  et à transformer la culture sécurité de votre organisation.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: <Award className="w-12 h-12 text-yellow-500" />,
                    title: "Certification Reconnue",
                    description: "Obtenez une certification ISO 45001 Lead Auditor reconnue mondialement par les employeurs et organismes de certification."
                  },
                  {
                    icon: <BookOpen className="w-12 h-12 text-blue-500" />,
                    title: "Expertise Pratique",
                    description: "Apprenez par la pratique avec des études de cas réels de l'industrie minière et des exercices d'audit."
                  },
                  {
                    icon: <TrendingUp className="w-12 h-12 text-green-500" />,
                    title: "Évolution de Carrière",
                    description: "Accédez à des postes de responsable HSE, auditeur interne/externe, consultant en sécurité."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="mb-6">{benefit.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Curriculum */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-bold mb-12 text-gray-900">Programme de Formation Détaillé</h2>
                  
                  <div className="space-y-8">
                    {[
                      {
                        week: "Semaine 1",
                        title: "Fondamentaux ISO 45001",
                        modules: [
                          "Introduction à la norme ISO 45001:2018",
                          "Structure HLS (High Level Structure)",
                          "Exigences et clauses principales",
                          "Contexte organisationnel et parties intéressées"
                        ]
                      },
                      {
                        week: "Semaine 2", 
                        title: "Mise en Œuvre du SMSST",
                        modules: [
                          "Planification et évaluation des risques",
                          "Objectifs et planification des actions",
                          "Support et ressources nécessaires",
                          "Communication et consultation"
                        ]
                      },
                      {
                        week: "Semaine 3",
                        title: "Audit et Évaluation",
                        modules: [
                          "Principes et techniques d'audit",
                          "Planification et réalisation d'audits",
                          "Rédaction de rapports d'audit",
                          "Gestion des non-conformités"
                        ]
                      },
                      {
                        week: "Semaine 4",
                        title: "Certification et Amélioration",
                        modules: [
                          "Revue de direction et amélioration continue",
                          "Processus de certification",
                          "Cas pratiques et simulations",
                          "Examen de certification"
                        ]
                      }
                    ].map((week, index) => (
                      <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                        <div className="flex items-center mb-6">
                          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-blue-600 font-semibold">{week.week}</div>
                            <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {week.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{module}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-6">
                    {/* Course Stats */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-6">Informations Clés</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">Durée totale</span>
                          <span className="font-bold">160 heures</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">Format</span>
                          <span className="font-bold">Hybride</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">Participants max</span>
                          <span className="font-bold">12 personnes</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-100">Langue</span>
                          <span className="font-bold">Français/Anglais</span>
                        </div>
                      </div>
                    </div>

                    {/* Prerequisites */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Prérequis</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          3+ ans d'expérience en HSE
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          Formation sécurité de base
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          Anglais technique (lecture)
                        </li>
                      </ul>
                    </div>

                    {/* Instructor */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Formateur Expert</h3>
                      <div className="flex items-center mb-4">
                        <img 
                          src="./images/trainer.jpg" 
                          alt="Expert Formateur"
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-bold text-gray-900">Dr. Mamadou Diallo</div>
                          <div className="text-sm text-gray-600">Lead Auditor ISO 45001</div>
                          <div className="text-sm text-blue-600">15+ ans d'expérience</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Expert reconnu en systèmes de management HSE avec plus de 100 audits réalisés.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
                        <Link to="/admissions">S'inscrire maintenant</Link>
                      </Button>
                      <Button variant="outline" size="lg" className="w-full" asChild>
                        <Link to="/contact">Demander le programme</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials & ROI */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Témoignages & Résultats</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Cette formation a transformé notre approche sécurité. Nous avons réduit les incidents de 40% en 6 mois."
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Sarah Touré</strong> - Responsable HSE, Mining Corp
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Excellent ROI. Mon salaire a augmenté de 60% après la certification ISO 45001."
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Ibrahim Camara</strong> - Auditeur Senior HSE
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Garantie de Satisfaction</h3>
                <p className="text-blue-100">
                  Si vous n'êtes pas satisfait de la formation dans les 7 premiers jours, 
                  nous vous remboursons intégralement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ISO45001Page;
