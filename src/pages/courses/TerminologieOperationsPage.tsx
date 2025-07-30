import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, Users, Settings, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const TerminologieOperationsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-700 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-slate-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Book className="w-8 h-8" />
              </div>
              <Badge className="bg-slate-500/20 text-slate-100 border-slate-300/30 px-4 py-2 text-lg font-semibold">
                Terminologie Minière
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Terminologie et
              <span className="bg-gradient-to-r from-slate-300 to-gray-400 bg-clip-text text-transparent">
                {" "}Opérations Minières
              </span>
            </h1>
            
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              Maîtrisez le vocabulaire technique et les opérations de base du secteur minier. 
              Acquérez les connaissances fondamentales pour communiquer efficacement dans l'industrie.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-slate-200" />
                <span className="font-semibold">2 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Book className="w-5 h-5 mr-2 text-slate-200" />
                <span className="font-semibold">Débutant</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-slate-200" />
                <span className="font-semibold">1.500.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-slate-50 to-gray-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50/50">
                  <CardHeader className="bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-slate-100">Formation en terminologie minière</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation fondamentale vous permettra de maîtriser le vocabulaire technique spécialisé 
                        du secteur minier et de comprendre les opérations unitaires essentielles. Développez votre 
                        capacité à communiquer efficacement avec les professionnels de l'industrie.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Book, title: "Vocabulaire Technique", desc: "Terminologie spécialisée", color: "text-slate-600" },
                          { icon: Settings, title: "Opérations Unitaires", desc: "Forage, minage, transport", color: "text-gray-600" },
                          { icon: Users, title: "Organisation", desc: "Structure des sites miniers", color: "text-zinc-600" },
                          { icon: TrendingUp, title: "Flux de Matières", desc: "Processus industriels", color: "text-slate-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-zinc-50/50">
                  <CardHeader className="bg-gradient-to-r from-gray-600 to-zinc-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-gray-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-gray-50 to-zinc-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Terminologie de Base", details: "Vocabulaire technique fondamental et communication" },
                          { week: "Semaine 2", topic: "Opérations Minières", details: "Forage, minage, chargement et transport des matériaux" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-500 to-zinc-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-gray-100 to-zinc-100 text-gray-700 border-gray-300">
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
                <Card className="border-slate-200 shadow-xl bg-gradient-to-br from-slate-50 to-gray-50">
                  <CardHeader className="bg-gradient-to-br from-slate-600 to-gray-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent mb-2">
                          Terminologie
                        </div>
                        <p className="text-slate-100">Minière</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-slate-600" />
                        <span className="text-sm text-gray-700">Certificat terminologie minière</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-slate-600" />
                        <span className="text-sm text-gray-700">Expert communication technique</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-slate-600" />
                        <span className="text-sm text-gray-700">Maîtrise opérations unitaires</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-slate-200 to-gray-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Parlez le langage des mines
                      </p>
                      <Button className="w-full bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-zinc-200 shadow-xl bg-gradient-to-br from-zinc-50 to-slate-50">
                  <CardHeader className="bg-gradient-to-r from-zinc-600 to-slate-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                        <span>Base essentielle du secteur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                        <span>Communication professionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                        <span>Compréhension opérationnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                        <span>Intégration facilitée</span>
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

export default TerminologieOperationsPage;
