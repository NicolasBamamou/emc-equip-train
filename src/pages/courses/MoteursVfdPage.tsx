import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings, Zap, Gauge, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const MoteursVfdPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50">
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
                <Settings className="w-8 h-8" />
              </div>
              <Badge className="bg-teal-500/20 text-teal-100 border-teal-300/30 px-4 py-2 text-lg font-semibold">
                Moteurs & VFD
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Moteurs Électriques et
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {" "}Variateurs VFD
              </span>
            </h1>
            
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Approfondissez vos connaissances sur les moteurs électriques industriels et maîtrisez 
              l'utilisation des variateurs de fréquence pour l'optimisation énergétique et le contrôle de vitesse.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-teal-200" />
                <span className="font-semibold">4 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Gauge className="w-5 h-5 mr-2 text-teal-200" />
                <span className="font-semibold">Intermédiaire</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-teal-200" />
                <span className="font-semibold">2.800.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-teal-50 to-cyan-50/30">
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
                        <p className="text-teal-100">Formation en moteurs et variateurs</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation intermédiaire vous spécialise dans les moteurs électriques industriels et 
                        les variateurs de fréquence (VFD). Apprenez les technologies avancées de contrôle de vitesse, 
                        la programmation des variateurs et les techniques d'optimisation énergétique.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Settings, title: "Moteurs Industriels", desc: "Types et caractéristiques", color: "text-teal-600" },
                          { icon: Zap, title: "Principe VFD", desc: "Variateurs de fréquence", color: "text-cyan-600" },
                          { icon: Gauge, title: "Programmation", desc: "Paramétrage avancé", color: "text-sky-600" },
                          { icon: TrendingUp, title: "Optimisation", desc: "Économies d'énergie", color: "text-teal-700" }
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-sky-50/50">
                  <CardHeader className="bg-gradient-to-r from-cyan-600 to-sky-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-cyan-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Moteurs Électriques", details: "Types industriels et caractéristiques techniques" },
                          { week: "Semaine 2", topic: "Technologie VFD", details: "Principe et fonctionnement des variateurs" },
                          { week: "Semaine 3", topic: "Programmation VFD", details: "Paramétrage et configuration avancée" },
                          { week: "Semaine 4", topic: "Applications Pratiques", details: "Projets et optimisation énergétique" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-cyan-100 to-sky-100 text-cyan-700 border-cyan-300">
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
                          VFD &
                        </div>
                        <p className="text-teal-100">Moteurs Électriques</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certificat VFD & moteurs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Programmation variateurs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Optimisation énergétique</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-teal-200 to-cyan-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Contrôlez la vitesse
                      </p>
                      <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-200 shadow-xl bg-gradient-to-br from-sky-50 to-teal-50">
                  <CardHeader className="bg-gradient-to-r from-sky-600 to-teal-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>Économies d'énergie significatives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>Contrôle précis des moteurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>Réduction de l'usure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>Technologie d'avenir</span>
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

export default MoteursVfdPage;
