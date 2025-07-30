import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Monitor, Database, BarChart3, Brain, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const LogicielsPlanificationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Monitor className="w-8 h-8" />
              </div>
              <Badge className="bg-blue-500/20 text-blue-100 border-blue-300/30 px-4 py-2 text-lg font-semibold">
                Logiciels Planification
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Formation aux Logiciels de
              <span className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
                {" "}Planification Minière
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Maîtrisez les logiciels professionnels de planification et de modélisation minière : 
              Surpac, Datamine, Micromine et MineSched. Formation complète aux outils digitaux.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-blue-200" />
                <span className="font-semibold">6 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Monitor className="w-5 h-5 mr-2 text-blue-200" />
                <span className="font-semibold">Avancé</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-blue-200" />
                <span className="font-semibold">4.500.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-blue-100">Formation aux logiciels professionnels</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation avancée vous permet de maîtriser les logiciels de référence du secteur 
                        minier. Apprenez la modélisation 3D avec Surpac et Datamine, la planification avec MineSched 
                        et l'optimisation avec Micromine. Formation pratique sur projets réels.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Database, title: "Logiciels Miniers", desc: "Introduction aux outils", color: "text-blue-600" },
                          { icon: BarChart3, title: "Modélisation 3D", desc: "Surpac et Datamine", color: "text-indigo-600" },
                          { icon: Brain, title: "Planification", desc: "MineSched avancé", color: "text-purple-600" },
                          { icon: TrendingUp, title: "Optimisation", desc: "Simulation et analyse", color: "text-blue-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-purple-50/50">
                  <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-indigo-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaines 1-2", topic: "Introduction Logiciels", details: "Découverte et bases des outils miniers" },
                          { week: "Semaines 3-4", topic: "Modélisation 3D", details: "Surpac et Datamine - projets pratiques" },
                          { week: "Semaines 5-6", topic: "Planification", details: "MineSched et optimisation avancée" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-300">
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
                <Card className="border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                          Logiciels
                        </div>
                        <p className="text-blue-100">Planification</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-700">Certification logiciels planification</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-700">Expert Surpac/Datamine</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-700">Spécialiste MineSched</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-blue-200 to-indigo-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Maîtrisez les outils pros
                      </p>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Standards de l'industrie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Efficacité maximale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Avantage concurrentiel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Employabilité renforcée</span>
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

export default LogicielsPlanificationPage;
