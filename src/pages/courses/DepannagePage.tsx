import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, SearchCheck, AlertTriangle, Bug, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const DepannagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-orange-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-red-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <SearchCheck className="w-8 h-8" />
              </div>
              <Badge className="bg-red-500/20 text-red-100 border-red-300/30 px-4 py-2 text-lg font-semibold">
                Résolution de Pannes
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Techniques de Dépannage &
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {" "}Recherche de Pannes
              </span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Développez vos compétences de diagnostic et de résolution de pannes. Formation avancée en méthodologies 
              de dépannage, outils de diagnostic et techniques de recherche systématique des défaillances.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-red-200" />
                <span className="font-semibold">1 Semaine</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Bug className="w-5 h-5 mr-2 text-red-200" />
                <span className="font-semibold">Avancé</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-red-200" />
                <span className="font-semibold">1.400.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-red-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-red-50/50">
                  <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-red-100">Formation avancée en résolution de pannes</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation avancée vous forme aux techniques expertes de dépannage et de recherche de pannes. 
                        Apprenez les méthodologies structurées, l'utilisation d'outils de diagnostic avancés et développez 
                        une approche systématique pour résoudre efficacement les problèmes complexes des engins lourds.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: SearchCheck, title: "Méthodologies de Diagnostic", desc: "Approches structurées et systématiques", color: "text-red-600" },
                          { icon: AlertTriangle, title: "Recherche de Pannes", desc: "Techniques d'investigation avancées", color: "text-orange-600" },
                          { icon: TrendingUp, title: "Outils de Diagnostic", desc: "Utilisation optimale des équipements", color: "text-yellow-600" },
                          { icon: Bug, title: "Études de Cas", desc: "Résolution pratique de pannes réelles", color: "text-red-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-yellow-50/50">
                  <CardHeader className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-orange-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { day: "Jour 1-2", topic: "Méthodologies de diagnostic structuré", details: "Approches systématiques et logiques" },
                          { day: "Jour 3-4", topic: "Outils et équipements de diagnostic", details: "Utilisation optimale des instruments" },
                          { day: "Jour 5-6", topic: "Techniques de recherche de pannes", details: "Stratégies d'investigation et validation" },
                          { day: "Jour 7", topic: "Études de cas pratiques", details: "Résolution de pannes complexes réelles" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.day}</h4>
                                <Badge className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 border-orange-300">
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
                <Card className="border-red-200 shadow-xl bg-gradient-to-br from-red-50 to-orange-50">
                  <CardHeader className="bg-gradient-to-br from-red-600 to-orange-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                          Expert
                        </div>
                        <p className="text-red-100">Dépannage</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Attestation expert dépannage</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Méthodologies de diagnostic validées</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Techniques de recherche de pannes</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-red-200 to-orange-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Devenez expert en résolution de pannes
                      </p>
                      <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 shadow-xl bg-gradient-to-br from-yellow-50 to-red-50">
                  <CardHeader className="bg-gradient-to-r from-yellow-600 to-red-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Résolvez rapidement les pannes complexes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Réduisez les temps d'immobilisation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Développez une approche méthodique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Excellez dans le diagnostic technique</span>
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

export default DepannagePage;
