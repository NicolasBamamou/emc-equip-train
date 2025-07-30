import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Layers, Cog, Building2, Route, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ConceptionPlanificationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-indigo-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Building2 className="w-8 h-8" />
              </div>
              <Badge className="bg-indigo-500/20 text-indigo-100 border-indigo-300/30 px-4 py-2 text-lg font-semibold">
                Conception & Planification
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Conception de Mines et
              <span className="bg-gradient-to-r from-indigo-300 to-blue-400 bg-clip-text text-transparent">
                {" "}Planification de l'Aménagement
              </span>
            </h1>
            
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Maîtrisez les principes de conception et de planification des mines pour optimiser l'extraction. 
              Apprenez à concevoir des fosses efficaces et à planifier l'aménagement minier.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-indigo-200" />
                <span className="font-semibold">4 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Building2 className="w-5 h-5 mr-2 text-indigo-200" />
                <span className="font-semibold">Intermédiaire</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-indigo-200" />
                <span className="font-semibold">3.000.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-indigo-50 to-blue-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-indigo-50/50">
                  <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-indigo-100">Formation en conception minière</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation avancée vous apprend les principes fondamentaux de la conception de mines. 
                        Optimisez les contours de fosses, planifiez les pentes et gradins, et maîtrisez le 
                        séquençage d'exploitation pour une extraction efficace et sécurisée.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Layers, title: "Conception Fosses", desc: "Principes et optimisation", color: "text-indigo-600" },
                          { icon: Cog, title: "Pentes & Gradins", desc: "Stabilité et géotechnique", color: "text-blue-600" },
                          { icon: Route, title: "Accès & Infrastructure", desc: "Planification intégrée", color: "text-purple-600" },
                          { icon: TrendingUp, title: "Séquençage", desc: "Optimisation temporelle", color: "text-indigo-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full`}></div>
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
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-blue-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Principes de Conception", details: "Bases théoriques et méthodologie de conception" },
                          { week: "Semaine 2", topic: "Optimisation Pentes", details: "Angles, gradins et considérations géotechniques" },
                          { week: "Semaine 3", topic: "Infrastructure", details: "Planification accès, routes et installations" },
                          { week: "Semaine 4", topic: "Séquençage", details: "Optimisation temporelle de l'exploitation" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-300">
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
                <Card className="border-indigo-200 shadow-xl bg-gradient-to-br from-indigo-50 to-blue-50">
                  <CardHeader className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                          Conception
                        </div>
                        <p className="text-indigo-100">de Mines</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600" />
                        <span className="text-sm text-gray-700">Certificat conception de mines</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600" />
                        <span className="text-sm text-gray-700">Expert planification minière</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600" />
                        <span className="text-sm text-gray-700">Spécialiste optimisation</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-indigo-200 to-blue-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Concevez l'avenir minier
                      </p>
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 shadow-xl bg-gradient-to-br from-purple-50 to-indigo-50">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Cœur de l'ingénierie minière</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Optimisation des ressources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Sécurité des opérations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Rentabilité maximale</span>
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

export default ConceptionPlanificationPage;
