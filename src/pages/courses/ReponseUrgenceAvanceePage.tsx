import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertCircle, Siren, Phone, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ReponseUrgenceAvanceePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-800 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-rose-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Siren className="w-8 h-8" />
              </div>
              <Badge className="bg-rose-500/20 text-rose-100 border-rose-300/30 px-4 py-2 text-lg font-semibold">
                Gestion de Crise
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Réponse d'Urgence Avancée
              <span className="bg-gradient-to-r from-yellow-300 to-red-400 bg-clip-text text-transparent">
                {" "}& Gestion de Crise
              </span>
            </h1>
            
            <p className="text-xl text-rose-100 mb-8 leading-relaxed">
              Développez vos compétences en gestion des situations d'urgence critiques et coordination des équipes de crise. 
              Formation avancée en planification d'urgence, communication de crise et leadership sous pression.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-rose-200" />
                <span className="font-semibold">5 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <AlertCircle className="w-5 h-5 mr-2 text-rose-200" />
                <span className="font-semibold">Expert</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-rose-200" />
                <span className="font-semibold">3.500.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-rose-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-rose-50/50">
                  <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-rose-100">Formation experte en gestion de crise</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation d'expert vous prépare à gérer les situations d'urgence les plus critiques dans l'industrie 
                        minière. Apprenez à coordonner les équipes de crise, à communiquer efficacement sous pression et à prendre 
                        des décisions stratégiques dans des contextes d'urgence complexes.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Siren, title: "Planification d'Urgence", desc: "Stratégies et plans d'intervention", color: "text-rose-600" },
                          { icon: Phone, title: "Communication de Crise", desc: "Coordination et transmission", color: "text-pink-600" },
                          { icon: TrendingUp, title: "Leadership sous Pression", desc: "Prise de décision rapide", color: "text-red-600" },
                          { icon: AlertCircle, title: "Gestion Multi-Équipes", desc: "Coordination des intervenants", color: "text-rose-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-red-50/50">
                  <CardHeader className="bg-gradient-to-r from-pink-600 to-red-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-pink-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Planification stratégique d'urgence", details: "Élaboration de plans d'intervention complets" },
                          { week: "Semaine 2", topic: "Communication et coordination de crise", details: "Systèmes de communication et protocoles" },
                          { week: "Semaine 3", topic: "Leadership et prise de décision", details: "Gestion du stress et décisions rapides" },
                          { week: "Semaine 4", topic: "Coordination multi-équipes", details: "Gestion simultanée d'intervenants multiples" },
                          { week: "Semaine 5", topic: "Simulations et mise en pratique", details: "Exercices pratiques de gestion de crise" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-pink-100 to-red-100 text-pink-700 border-pink-300">
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
                <Card className="border-rose-200 shadow-xl bg-gradient-to-br from-rose-50 to-pink-50">
                  <CardHeader className="bg-gradient-to-br from-rose-600 to-pink-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
                          Expert
                        </div>
                        <p className="text-rose-100">Gestion de Crise</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certification expert en gestion de crise</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Habilitation coordination d'urgence</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Leadership sous pression validé</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-rose-200 to-pink-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Devenez expert en gestion de crise
                      </p>
                      <Button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 shadow-xl bg-gradient-to-br from-red-50 to-rose-50">
                  <CardHeader className="bg-gradient-to-r from-red-600 to-rose-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Réduisez l'impact des situations critiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Coordonnez efficacement les équipes d'urgence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Prenez des décisions rapides et justes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Développez un leadership de crise</span>
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

export default ReponseUrgenceAvanceePage;
