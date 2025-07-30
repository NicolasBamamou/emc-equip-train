import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Radar, Activity, Cpu, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const CapteursActionneuersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lime-800 to-green-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-lime-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Radar className="w-8 h-8" />
              </div>
              <Badge className="bg-lime-500/20 text-lime-100 border-lime-300/30 px-4 py-2 text-lg font-semibold">
                Capteurs & Actionneurs
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Capteurs Industriels et
              <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">
                {" "}Actionneurs
              </span>
            </h1>
            
            <p className="text-xl text-lime-100 mb-8 leading-relaxed">
              Explorez le monde des capteurs industriels et actionneurs, éléments essentiels des systèmes 
              automatisés modernes. Formation complète sur l'intégration et la maintenance préventive.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-lime-200" />
                <span className="font-semibold">3 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Activity className="w-5 h-5 mr-2 text-lime-200" />
                <span className="font-semibold">Intermédiaire</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-lime-200" />
                <span className="font-semibold">2.200.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-lime-50 to-green-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-lime-50/50">
                  <CardHeader className="bg-gradient-to-r from-lime-600 to-green-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-lime-100">Formation en automatisation industrielle</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation intermédiaire vous initie aux technologies de détection et d'actionnement industriel. 
                        Apprenez les différents types de capteurs, leurs applications, l'intégration avec les actionneurs 
                        et les techniques de diagnostic pour une maintenance efficace.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Radar, title: "Types de Capteurs", desc: "Température, pression, position", color: "text-lime-600" },
                          { icon: Activity, title: "Actionneurs", desc: "Pneumatiques, hydrauliques, électriques", color: "text-green-600" },
                          { icon: Cpu, title: "Intégration", desc: "Capteurs-actionneurs en automatisme", color: "text-emerald-600" },
                          { icon: TrendingUp, title: "Maintenance", desc: "Diagnostic et préventif", color: "text-lime-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-lime-50 to-green-50 border border-lime-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-lime-500 to-green-500 rounded-full`}></div>
                            <div>
                              <p className="font-semibold text-gray-800">{item.title}</p>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Curriculum */}
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-emerald-50/50">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-green-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Capteurs Industriels", details: "Types, principes et applications pratiques" },
                          { week: "Semaine 2", topic: "Actionneurs Avancés", details: "Technologies pneumatiques, hydrauliques et électriques" },
                          { week: "Semaine 3", topic: "Intégration Système", details: "Couplage capteurs-actionneurs et automatisation" },
                          { week: "Pratique", topic: "Maintenance Préventive", details: "Diagnostic et optimisation des performances" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-300">
                                  {module.topic}
                                </Badge>
                              </div>
                              <p className="text-gray-600">{module.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <Card className="border-lime-200 shadow-xl bg-gradient-to-br from-lime-50 to-green-50">
                  <CardHeader className="bg-gradient-to-br from-lime-600 to-green-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent mb-2">
                          Capteurs
                        </div>
                        <p className="text-lime-100">& Actionneurs</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certificat capteurs & actionneurs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Intégration automatisme</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Maintenance préventive</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-lime-200 to-green-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Automatisez l'industrie
                      </p>
                      <Button className="w-full bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200 shadow-xl bg-gradient-to-br from-emerald-50 to-lime-50">
                  <CardHeader className="bg-gradient-to-r from-emerald-600 to-lime-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Cœur de l'automatisation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Amélioration de la productivité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Maintenance prédictive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Compétences recherchées</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CapteursActionneuersPage;
