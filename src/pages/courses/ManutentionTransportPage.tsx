import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package, Truck, ArrowRightLeft, BarChart3, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ManutentionTransportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-sky-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-cyan-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Truck className="w-8 h-8" />
              </div>
              <Badge className="bg-cyan-500/20 text-cyan-100 border-cyan-300/30 px-4 py-2 text-lg font-semibold">
                Manutention & Transport
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Systèmes de Manutention et
              <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                {" "}Transport des Matériaux
              </span>
            </h1>
            
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              Optimisez les systèmes de transport et de manutention des matériaux extraits. 
              Maîtrisez les cycles de transport et la gestion logistique des opérations minières.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-cyan-200" />
                <span className="font-semibold">3 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Truck className="w-5 h-5 mr-2 text-cyan-200" />
                <span className="font-semibold">Intermédiaire</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-cyan-200" />
                <span className="font-semibold">2.400.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-cyan-50 to-sky-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-cyan-50/50">
                  <CardHeader className="bg-gradient-to-r from-cyan-600 to-sky-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-cyan-100">Formation en manutention minière</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation technique vous spécialise dans l'optimisation des systèmes de transport 
                        et manutention. Apprenez à choisir les équipements adaptés, optimiser les cycles de 
                        transport et gérer efficacement les stocks et la maintenance des équipements.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Truck, title: "Systèmes Transport", desc: "Camions et convoyeurs", color: "text-cyan-600" },
                          { icon: ArrowRightLeft, title: "Cycles Optimisés", desc: "Optimisation logistique", color: "text-sky-600" },
                          { icon: Package, title: "Gestion Stocks", desc: "Stockage et manutention", color: "text-blue-600" },
                          { icon: TrendingUp, title: "Maintenance", desc: "Équipements de transport", color: "text-cyan-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
                  <CardHeader className="bg-gradient-to-r from-sky-600 to-blue-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-sky-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Systèmes de Transport", details: "Camions, convoyeurs et choix technologiques" },
                          { week: "Semaine 2", topic: "Optimisation Cycles", details: "Cycles de transport et productivité" },
                          { week: "Semaine 3", topic: "Gestion & Maintenance", details: "Stocks, stockage et maintenance équipements" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 border-sky-300">
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
                <Card className="border-cyan-200 shadow-xl bg-gradient-to-br from-cyan-50 to-sky-50">
                  <CardHeader className="bg-gradient-to-br from-cyan-600 to-sky-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent mb-2">
                          Manutention
                        </div>
                        <p className="text-cyan-100">Transport</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-600" />
                        <span className="text-sm text-gray-700">Certificat manutention & transport</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-600" />
                        <span className="text-sm text-gray-700">Expert optimisation logistique</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-600" />
                        <span className="text-sm text-gray-700">Spécialiste gestion de flotte</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-cyan-200 to-sky-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Optimisez la logistique
                      </p>
                      <Button className="w-full bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Épine dorsale des opérations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Optimisation des coûts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Productivité accrue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Compétitivité industrielle</span>
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

export default ManutentionTransportPage;
