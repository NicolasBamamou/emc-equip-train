import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Shield, AlertTriangle, HardHat } from 'lucide-react';

const IntroSecuritePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 z-0">
            <img
              src="./images/expert.jpg"
              alt="Introduction à la Sécurité Minière"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-blue-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 mr-4 text-blue-300" />
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Cours Fondamental
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Introduction à la 
                <span className="text-blue-300 block">Sécurité Minière</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Découvrez les fondamentaux de la sécurité dans l'industrie minière et 
                développez une culture de sécurité solide dès le début de votre carrière.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">2 Semaines</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-3">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Débutant</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-3">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">1.200.000FG</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-bold mb-8 text-gray-900">Pourquoi ce cours ?</h2>
                  <div className="prose prose-lg text-gray-700 mb-8">
                    <p className="text-xl leading-relaxed mb-6">
                      La sécurité est la priorité absolue dans l'industrie minière. Ce cours fondamental 
                      vous donnera les connaissances essentielles pour identifier, comprendre et prévenir 
                      les risques sur votre lieu de travail.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Que vous soyez nouveau dans l'industrie ou que vous souhaitiez renforcer vos 
                      connaissances en sécurité, cette formation vous fournira une base solide pour 
                      travailler en toute sécurité dans l'environnement minier.
                    </p>
                  </div>

                  {/* Learning Objectives */}
                  <div className="bg-blue-50 rounded-xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
                      Objectifs d'apprentissage
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Comprendre les principes fondamentaux de la sécurité minière",
                        "Identifier les risques courants sur les sites miniers",
                        "Appliquer les procédures de sécurité de base",
                        "Développer une culture de sécurité personnelle",
                        "Reconnaître l'importance du signalement des incidents",
                        "Maîtriser les protocoles d'urgence de base"
                      ].map((objective, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Course Modules */}
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold mb-8 text-gray-900">Modules du cours</h3>
                    <div className="space-y-6">
                      {[
                        {
                          module: "Module 1",
                          title: "Fondamentaux de la Sécurité",
                          duration: "3 jours",
                          topics: ["Histoire de la sécurité minière", "Statistiques d'accidents", "Réglementations de base"]
                        },
                        {
                          module: "Module 2", 
                          title: "Identification des Risques",
                          duration: "4 jours",
                          topics: ["Types de dangers miniers", "Évaluation des risques", "Mesures préventives"]
                        },
                        {
                          module: "Module 3",
                          title: "Procédures et Protocoles",
                          duration: "3 jours", 
                          topics: ["Procédures de travail sécurisées", "Communication des risques", "Documentation"]
                        },
                        {
                          module: "Module 4",
                          title: "Culture de Sécurité",
                          duration: "4 jours",
                          topics: ["Responsabilité individuelle", "Travail d'équipe", "Amélioration continue"]
                        }
                      ].map((module, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-semibold text-gray-900">{module.module}: {module.title}</h4>
                            <span className="text-sm text-blue-600 font-medium">{module.duration}</span>
                          </div>
                          <ul className="text-gray-600 space-y-1">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    {/* Course Info Card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Informations du cours</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-semibold">Durée</div>
                            <div className="text-gray-600">2 Semaines (40 heures)</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-semibold">Niveau</div>
                            <div className="text-gray-600">Débutant</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-semibold">Prix</div>
                            <div className="text-gray-600">1.200.000 FG</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <HardHat className="w-5 h-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-semibold">Format</div>
                            <div className="text-gray-600">Présentiel + Pratique</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Certification */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
                      <div className="flex items-center mb-4">
                        <Award className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-bold text-blue-900">Certification</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        À la fin de cette formation, vous recevrez le <strong>Certificat de Sécurité Minière de Base</strong> 
                        reconnu par l'industrie.
                      </p>
                      <div className="bg-white bg-opacity-50 rounded-lg p-3 text-sm text-gray-600">
                        Valide 3 ans • Reconnu internationalement
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <Button size="lg" className="w-full" asChild>
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

        {/* Prerequisites & Next Steps */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-orange-500" />
                    Prérequis
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Aucune expérience préalable requise
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Capacité de lecture et d'écriture en français
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Motivation pour apprendre
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                    <ArrowLeft className="w-6 h-6 mr-3 text-blue-500 transform rotate-180" />
                    Étapes suivantes
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      Formation sur les EPI
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      Identification des dangers
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      Premiers secours
                    </li>
                  </ul>
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

export default IntroSecuritePage;
