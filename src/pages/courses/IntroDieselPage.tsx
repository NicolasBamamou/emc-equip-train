import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Wrench, Cog, Monitor, Settings } from 'lucide-react';

const IntroDieselPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Technical/Industrial Style */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
          <div className="absolute inset-0 z-0">
            <img
              src="./images/Loader operating.jpg"
              alt="Formation Moteurs Diesel"
              className="w-full h-full object-cover opacity-20"
            />
            {/* Technical grid overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0V0z'/%3E%3C/g%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-orange-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center bg-orange-500 text-white px-4 py-2 rounded text-sm font-bold mr-4">
                  <Wrench className="w-4 h-4 mr-2" />
                  TECHNIQUE FONDAMENTAL
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur px-4 py-2 rounded text-sm font-semibold">
                  <Settings className="w-4 h-4 mr-2" />
                  Hands-On Training
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-orange-400">Introduction aux</span>
                <br />
                <span className="text-white">Moteurs Diesel</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
                Maîtrisez les fondamentaux des moteurs diesel utilisés dans l'industrie minière. 
                Formation pratique avec équipements réels.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-black/40 backdrop-blur border border-gray-600 rounded-lg px-6 py-3">
                  <Clock className="w-5 h-5 mr-3 text-orange-400" />
                  <span className="font-semibold">3 Semaines</span>
                </div>
                <div className="flex items-center bg-black/40 backdrop-blur border border-gray-600 rounded-lg px-6 py-3">
                  <Users className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="font-semibold">Débutant</span>
                </div>
                <div className="flex items-center bg-black/40 backdrop-blur border border-gray-600 rounded-lg px-6 py-3">
                  <Award className="w-5 h-5 mr-3 text-green-400" />
                  <span className="font-semibold">1.800.000 FG</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Formation Technique Complète</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Cette formation vous donnera une compréhension solide des moteurs diesel, 
                    depuis les principes de base jusqu'aux techniques de diagnostic avancées. 
                    Idéale pour débuter une carrière en mécanique d'engins lourds.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <Cog className="w-8 h-8 text-orange-600 mb-2" />
                      <div className="font-semibold text-gray-900">80% Pratique</div>
                      <div className="text-sm text-gray-600">Travail sur moteurs réels</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <Monitor className="w-8 h-8 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Outils Modernes</div>
                      <div className="text-sm text-gray-600">Équipements de diagnostic</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Équipements Étudiés</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Caterpillar 3406E",
                      "Cummins ISX15", 
                      "Detroit DD15",
                      "Volvo D13",
                      "Perkins 1106D",
                      "Deutz TCD 2015"
                    ].map((engine, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                          <span className="font-medium text-gray-800">{engine}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Modules */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold mb-12 text-gray-900 text-center">Modules Techniques</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Cog className="w-12 h-12 text-orange-500" />,
                      title: "Principes de Base",
                      duration: "Semaine 1",
                      topics: [
                        "Cycle de combustion 4 temps",
                        "Composants principaux",
                        "Systèmes de base",
                        "Sécurité atelier"
                      ]
                    },
                    {
                      icon: <Settings className="w-12 h-12 text-blue-500" />,
                      title: "Systèmes d'Injection",
                      duration: "Semaine 2",
                      topics: [
                        "Injection mécanique",
                        "Common Rail",
                        "Pompes d'injection",
                        "Injecteurs"
                      ]
                    },
                    {
                      icon: <Monitor className="w-12 h-12 text-green-500" />,
                      title: "Diagnostic & Maintenance",
                      duration: "Semaine 3",
                      topics: [
                        "Outils de diagnostic",
                        "Codes d'erreur",
                        "Maintenance préventive",
                        "Réparations courantes"
                      ]
                    }
                  ].map((module, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="mb-4">{module.icon}</div>
                      <div className="text-sm text-orange-600 font-semibold mb-2">{module.duration}</div>
                      <h4 className="text-xl font-bold mb-4 text-gray-900">{module.title}</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop & Tools */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Atelier & Équipements</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Formation dans un atelier moderne équipé des derniers outils de diagnostic 
                  et moteurs d'engins miniers réels.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-gray-900">Outils Professionnels</h3>
                  <div className="space-y-6">
                    {[
                      {
                        tool: "CAT Electronic Technician (ET)",
                        description: "Logiciel de diagnostic Caterpillar pour identification des pannes"
                      },
                      {
                        tool: "Cummins INSITE",
                        description: "Interface de diagnostic pour moteurs Cummins"
                      },
                      {
                        tool: "Multimètres & Oscilloscopes",
                        description: "Équipements de mesure électrique et électronique"
                      },
                      {
                        tool: "Outillage Spécialisé",
                        description: "Clés dynamométriques, extracteurs, outils spécifiques"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-2">{item.tool}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Horaires de Formation</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Théorie (Matin)</span>
                        <span className="font-semibold">8h00 - 12h00</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Pratique (Après-midi)</span>
                        <span className="font-semibold">13h00 - 17h00</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">Total par semaine</span>
                        <span className="font-semibold text-orange-600">40 heures</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="font-bold text-orange-900 mb-3 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Matériel Fourni
                    </h4>
                    <ul className="text-orange-800 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-orange-600" />
                        Kit d'outils de base
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-orange-600" />
                        Manuel technique
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-orange-600" />
                        Équipements de sécurité
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Commencez Votre Carrière Technique</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Devenez un technicien qualifié en moteurs diesel. Places limitées pour garantir 
              un apprentissage optimal avec un encadrement personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold" asChild>
                <Link to="/admissions">S'inscrire Maintenant</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
                <Link to="/contact">Visite de l'Atelier</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IntroDieselPage;
