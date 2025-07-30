import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Zap, Eye, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const LectureSchemasPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-violet-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <FileText className="w-8 h-8" />
              </div>
              <Badge className="bg-violet-500/20 text-violet-100 border-violet-300/30 px-4 py-2 text-lg font-semibold">
                Lecture de Schémas
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Lecture de Schémas Électriques
              <span className="bg-gradient-to-r from-violet-300 to-purple-400 bg-clip-text text-transparent">
                {" "}et Symboles
              </span>
            </h1>
            
            <p className="text-xl text-violet-100 mb-8 leading-relaxed">
              Développez vos compétences en lecture et interprétation des schémas électriques. Maîtrisez 
              la symbolisation normalisée pour comprendre et analyser les installations électriques complexes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-violet-200" />
                <span className="font-semibold">2 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Eye className="w-5 h-5 mr-2 text-violet-200" />
                <span className="font-semibold">Débutant</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-violet-200" />
                <span className="font-semibold">1.400.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-violet-50 to-purple-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-violet-50/50">
                  <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-violet-100">Formation en lecture de schémas</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation essentielle vous enseigne à lire et interpréter les schémas électriques industriels. 
                        Apprenez la symbolisation normalisée, les conventions de représentation et développez votre capacité 
                        d'analyse pour comprendre les circuits électriques complexes.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: FileText, title: "Symboles Normalisés", desc: "Standards internationaux", color: "text-violet-600" },
                          { icon: Eye, title: "Lecture de Plans", desc: "Schémas industriels complexes", color: "text-purple-600" },
                          { icon: Zap, title: "Circuits Puissance", desc: "Schémas de commande", color: "text-fuchsia-600" },
                          { icon: TrendingUp, title: "Exercices Pratiques", desc: "Cas d'étude réels", color: "text-violet-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-fuchsia-50/50">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-purple-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Symboles et Normes", details: "Apprentissage des symboles électriques standardisés" },
                          { week: "Semaine 2", topic: "Analyse de Schémas", details: "Lecture de plans électriques industriels" },
                          { week: "Pratique", topic: "Exercices Dirigés", details: "Interprétation de schémas complexes" },
                          { week: "Validation", topic: "Projet d'Analyse", details: "Étude complète d'installation électrique" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-700 border-purple-300">
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
                <Card className="border-violet-200 shadow-xl bg-gradient-to-br from-violet-50 to-purple-50">
                  <CardHeader className="bg-gradient-to-br from-violet-600 to-purple-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          Lecture
                        </div>
                        <p className="text-violet-100">de Schémas</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Attestation lecture de schémas</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Maîtrise des symboles</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Analyse de circuits</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-violet-200 to-purple-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Déchiffrez les schémas
                      </p>
                      <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-fuchsia-200 shadow-xl bg-gradient-to-br from-fuchsia-50 to-violet-50">
                  <CardHeader className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                        <span>Compréhension des circuits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                        <span>Diagnostic efficace</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                        <span>Communication technique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                        <span>Autonomie professionnelle</span>
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

export default LectureSchemasPage;
