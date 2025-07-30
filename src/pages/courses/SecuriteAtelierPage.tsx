import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, HardHat, Wrench, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const SecuriteAtelierPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-800 to-orange-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-amber-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Shield className="w-8 h-8" />
              </div>
              <Badge className="bg-amber-500/20 text-amber-100 border-amber-300/30 px-4 py-2 text-lg font-semibold">
                Sécurité Atelier
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Sécurité en
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {" "}Atelier Mécanique
              </span>
            </h1>
            
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Maîtrisez les bonnes pratiques de sécurité en atelier mécanique. Formation complète sur les EPI, 
              les procédures de sécurité et la prévention des accidents dans l'environnement de maintenance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-amber-200" />
                <span className="font-semibold">1 Semaine</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <HardHat className="w-5 h-5 mr-2 text-amber-200" />
                <span className="font-semibold">Débutant</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-amber-200" />
                <span className="font-semibold">600.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-amber-50/50">
                  <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-amber-100">Formation essentielle en sécurité atelier</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation essentielle vous prépare à travailler en toute sécurité dans un atelier mécanique. 
                        Apprenez les procédures de sécurité, l'utilisation des EPI, la prévention des accidents et les bonnes 
                        pratiques pour maintenir un environnement de travail sûr.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Shield, title: "Procédures de Sécurité", desc: "Protocoles et consignes", color: "text-amber-600" },
                          { icon: HardHat, title: "Équipements de Protection", desc: "EPI et matériel de sécurité", color: "text-orange-600" },
                          { icon: TrendingUp, title: "Prévention des Accidents", desc: "Identification et réduction des risques", color: "text-yellow-600" },
                          { icon: Wrench, title: "Bonnes Pratiques", desc: "Organisation et maintenance sécuritaire", color: "text-amber-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full`}></div>
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
                          { day: "Jour 1-2", topic: "Introduction à la sécurité en atelier", details: "Risques et responsabilités en atelier mécanique" },
                          { day: "Jour 3-4", topic: "Équipements de protection individuelle", details: "Sélection, utilisation et entretien des EPI" },
                          { day: "Jour 5-6", topic: "Procédures de sécurité et prévention", details: "Protocoles de travail et identification des dangers" },
                          { day: "Jour 7", topic: "Situations d'urgence et premiers secours", details: "Réponse aux accidents et procédures d'urgence" }
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
                <Card className="border-amber-200 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
                  <CardHeader className="bg-gradient-to-br from-amber-600 to-orange-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                          Sécurité
                        </div>
                        <p className="text-amber-100">Atelier Mécanique</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Attestation de sécurité en atelier</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Maîtrise des procédures de sécurité</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Utilisation correcte des EPI</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-amber-200 to-orange-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Travaillez en toute sécurité
                      </p>
                      <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50">
                  <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Réduisez drastiquement les accidents de travail</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Créez un environnement de travail sûr</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Respectez les normes de sécurité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>Protégez votre équipe et vous-même</span>
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

export default SecuriteAtelierPage;
