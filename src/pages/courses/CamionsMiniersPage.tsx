import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Truck, Mountain, Cog, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const CamionsMiniersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-gray-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Truck className="w-8 h-8" />
              </div>
              <Badge className="bg-gray-500/20 text-gray-100 border-gray-300/30 px-4 py-2 text-lg font-semibold">
                Camions Miniers
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Maintenance de Camions Miniers
              <span className="bg-gradient-to-r from-blue-300 to-slate-400 bg-clip-text text-transparent">
                {" "}Belaz, Howo & Shacman
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Spécialisez-vous dans la maintenance des camions miniers lourds. Formation complète sur les spécificités 
              Belaz, Howo et Shacman avec leurs systèmes de transport, moteurs et équipements de manutention.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-gray-200" />
                <span className="font-semibold">2 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Mountain className="w-5 h-5 mr-2 text-gray-200" />
                <span className="font-semibold">Spécialisé</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-gray-200" />
                <span className="font-semibold">2.800.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-slate-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
                  <CardHeader className="bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-gray-100">Formation spécialisée camions miniers</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation spécialisée vous forme à la maintenance des camions miniers les plus utilisés dans 
                        l'industrie. Apprenez les spécificités techniques des camions Belaz, Howo et Shacman, leurs systèmes 
                        de transmission, de freinage et les particularités de leur maintenance en conditions extrêmes.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Truck, title: "Camions Belaz", desc: "Géants miniers biélorusses", color: "text-gray-600" },
                          { icon: Mountain, title: "Camions Howo", desc: "Solutions chinoises robustes", color: "text-slate-600" },
                          { icon: TrendingUp, title: "Camions Shacman", desc: "Technologies de transport lourd", color: "text-stone-600" },
                          { icon: Cog, title: "Maintenance Spécialisée", desc: "Procédures et outils dédiés", color: "text-gray-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-stone-50/50">
                  <CardHeader className="bg-gradient-to-r from-slate-600 to-stone-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-slate-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-slate-50 to-stone-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Maintenance Belaz", details: "Systèmes hydrauliques et transmissions géantes" },
                          { week: "Semaine 2", topic: "Maintenance Howo & Shacman", details: "Technologies chinoises et adaptations minières" },
                          { week: "Pratique", topic: "Diagnostic avancé", details: "Outils spécialisés et techniques de réparation" },
                          { week: "Expertise", topic: "Optimisation opérationnelle", details: "Maintenance préventive et gestion de flotte" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-500 to-stone-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-slate-100 to-stone-100 text-slate-700 border-slate-300">
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
                <Card className="border-gray-200 shadow-xl bg-gradient-to-br from-gray-50 to-slate-50">
                  <CardHeader className="bg-gradient-to-br from-gray-600 to-slate-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent mb-2">
                          Camions
                        </div>
                        <p className="text-gray-100">Miniers Lourds</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certification Belaz</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certification Howo</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certification Shacman</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-gray-200 to-slate-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Maîtrisez les géants miniers
                      </p>
                      <Button className="w-full bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-stone-200 shadow-xl bg-gradient-to-br from-stone-50 to-gray-50">
                  <CardHeader className="bg-gradient-to-r from-stone-600 to-gray-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />
                        <span>Maîtrisez les camions géants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />
                        <span>Optimisez la productivité minière</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />
                        <span>Réduisez les coûts de transport</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />
                        <span>Excellez en maintenance lourde</span>
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

export default CamionsMiniersPage;
