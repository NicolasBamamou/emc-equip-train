import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Microscope, Heart, Activity, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const HygieneIndustriellePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-teal-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Heart className="w-8 h-8" />
              </div>
              <Badge className="bg-teal-500/20 text-teal-100 border-teal-300/30 px-4 py-2 text-lg font-semibold">
                Santé au Travail
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Hygiène Industrielle
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {" "}& Santé au Travail
              </span>
            </h1>
            
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Maîtrisez l'évaluation et le contrôle des risques pour la santé dans l'environnement industriel. 
              Formation complète en surveillance des expositions, prévention des maladies professionnelles et promotion de la santé.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-teal-200" />
                <span className="font-semibold">4 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Activity className="w-5 h-5 mr-2 text-teal-200" />
                <span className="font-semibold">Spécialisé</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-teal-200" />
                <span className="font-semibold">3.000.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-teal-50/50">
                  <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-teal-100">Formation spécialisée en hygiène industrielle</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation spécialisée vous forme à identifier, évaluer et contrôler les facteurs environnementaux 
                        qui peuvent affecter la santé des travailleurs. Apprenez la surveillance des expositions, l'évaluation 
                        des risques sanitaires et la mise en place de mesures préventives efficaces.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Microscope, title: "Évaluation des Expositions", desc: "Mesure et analyse des contaminants", color: "text-teal-600" },
                          { icon: Heart, title: "Surveillance Santé", desc: "Suivi médical et dépistage", color: "text-cyan-600" },
                          { icon: TrendingUp, title: "Prévention Maladies", desc: "Stratégies préventives ciblées", color: "text-blue-600" },
                          { icon: Activity, title: "Promotion Santé", desc: "Programmes de bien-être au travail", color: "text-teal-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full`}></div>
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
                  <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-cyan-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Évaluation des risques sanitaires", details: "Identification et quantification des dangers" },
                          { week: "Semaine 2", topic: "Techniques de mesure et surveillance", details: "Équipements et méthodes d'échantillonnage" },
                          { week: "Semaine 3", topic: "Prévention des maladies professionnelles", details: "Stratégies d'intervention et contrôles" },
                          { week: "Semaine 4", topic: "Promotion de la santé au travail", details: "Programmes de bien-être et sensibilisation" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border-cyan-300">
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
                <Card className="border-teal-200 shadow-xl bg-gradient-to-br from-teal-50 to-cyan-50">
                  <CardHeader className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                          HST
                        </div>
                        <p className="text-teal-100">Hygiène Santé Travail</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certification hygiène industrielle</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Expertise en surveillance santé</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Compétences en prévention</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-teal-200 to-cyan-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Devenez expert en santé au travail
                      </p>
                      <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-teal-50">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Prévenez les maladies professionnelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Améliorez la santé des travailleurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Respectez les normes sanitaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Créez un environnement de travail sain</span>
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

export default HygieneIndustriellePage;
