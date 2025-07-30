import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mountain, Triangle, AlertTriangle, Shield, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const StabilitePentesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stone-700 to-neutral-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-stone-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Mountain className="w-8 h-8" />
              </div>
              <Badge className="bg-stone-500/20 text-stone-100 border-stone-300/30 px-4 py-2 text-lg font-semibold">
                Stabilité des Pentes
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Stabilité des Pentes et
              <span className="bg-gradient-to-r from-stone-300 to-neutral-400 bg-clip-text text-transparent">
                {" "}Systèmes de Soutènement
              </span>
            </h1>
            
            <p className="text-xl text-stone-100 mb-8 leading-relaxed">
              Maîtrisez l'analyse de stabilité des pentes et les techniques de soutènement en mines. 
              Formation avancée en géotechnique et gestion des risques géologiques.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-stone-200" />
                <span className="font-semibold">4 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Mountain className="w-5 h-5 mr-2 text-stone-200" />
                <span className="font-semibold">Avancé</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-stone-200" />
                <span className="font-semibold">3.500.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-stone-50 to-neutral-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-stone-50/50">
                  <CardHeader className="bg-gradient-to-r from-stone-600 to-neutral-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-stone-100">Formation en géotechnique minière</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation avancée en géotechnique vous spécialise dans l'analyse de stabilité des 
                        pentes minières. Apprenez les techniques de soutènement, la surveillance géotechnique 
                        et la gestion proactive des risques géologiques pour des opérations sécurisées.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Triangle, title: "Analyse Stabilité", desc: "Méthodes géotechniques", color: "text-stone-600" },
                          { icon: Shield, title: "Soutènement", desc: "Techniques et matériaux", color: "text-neutral-600" },
                          { icon: AlertTriangle, title: "Surveillance", desc: "Monitoring continu", color: "text-gray-600" },
                          { icon: TrendingUp, title: "Gestion Risques", desc: "Prévention et mitigation", color: "text-stone-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-stone-50 to-neutral-50 border border-stone-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-stone-500 to-neutral-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
                  <CardHeader className="bg-gradient-to-r from-neutral-600 to-gray-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-neutral-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-neutral-50 to-gray-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Analyse de Stabilité", details: "Méthodes d'analyse et facteurs de sécurité" },
                          { week: "Semaine 2", topic: "Techniques Soutènement", details: "Boulonnage, treillis et structures de renfort" },
                          { week: "Semaine 3", topic: "Surveillance", details: "Instruments et monitoring géotechnique" },
                          { week: "Semaine 4", topic: "Gestion des Risques", details: "Prévention et plans d'urgence géotechniques" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-neutral-500 to-gray-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-neutral-100 to-gray-100 text-neutral-700 border-neutral-300">
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
                <Card className="border-stone-200 shadow-xl bg-gradient-to-br from-stone-50 to-neutral-50">
                  <CardHeader className="bg-gradient-to-br from-stone-600 to-neutral-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-stone-600 to-neutral-600 bg-clip-text text-transparent mb-2">
                          Stabilité
                        </div>
                        <p className="text-stone-100">des Pentes</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-stone-600" />
                        <span className="text-sm text-gray-700">Certificat stabilité des pentes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-stone-600" />
                        <span className="text-sm text-gray-700">Expert géotechnique minier</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-stone-600" />
                        <span className="text-sm text-gray-700">Spécialiste soutènement</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-stone-200 to-neutral-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Sécurisez les opérations
                      </p>
                      <Button className="w-full bg-gradient-to-r from-stone-600 to-neutral-600 hover:from-stone-700 hover:to-neutral-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-xl bg-gradient-to-br from-gray-50 to-stone-50">
                  <CardHeader className="bg-gradient-to-r from-gray-600 to-stone-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span>Sécurité critique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span>Prévention des accidents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span>Optimisation des coûts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span>Conformité réglementaire</span>
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

export default StabilitePentesPage;
