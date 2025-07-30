import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Leaf, Wind, Shield, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const EmissionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lime-800 to-green-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-lime-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Leaf className="w-8 h-8" />
              </div>
              <Badge className="bg-lime-500/20 text-lime-100 border-lime-300/30 px-4 py-2 text-lg font-semibold">
                Environnement
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Émissions Moteurs &
              <span className="bg-gradient-to-r from-cyan-300 to-green-400 bg-clip-text text-transparent">
                {" "}Conformité Environnementale
              </span>
            </h1>
            
            <p className="text-xl text-lime-100 mb-8 leading-relaxed">
              Maîtrisez la gestion des émissions et la conformité environnementale. Formation complète sur les normes 
              d'émissions, les systèmes de dépollution et les réglementations environnementales des engins lourds.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-lime-200" />
                <span className="font-semibold">1 Semaine</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Shield className="w-5 h-5 mr-2 text-lime-200" />
                <span className="font-semibold">Avancé</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-lime-200" />
                <span className="font-semibold">1.200.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-lime-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-lime-50/50">
                  <CardHeader className="bg-gradient-to-r from-lime-600 to-green-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-lime-100">Formation spécialisée en conformité environnementale</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation spécialisée vous forme aux enjeux environnementaux des moteurs diesel. Apprenez 
                        à comprendre les normes d'émissions, à maintenir les systèmes de dépollution et à assurer la 
                        conformité environnementale des engins lourds selon les réglementations locales et internationales.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Leaf, title: "Normes d'Émissions", desc: "Réglementations locales et internationales", color: "text-lime-600" },
                          { icon: Wind, title: "Systèmes de Dépollution", desc: "DPF, SCR et technologies propres", color: "text-green-600" },
                          { icon: TrendingUp, title: "Contrôle des Émissions", desc: "Mesures et optimisation", color: "text-emerald-600" },
                          { icon: Shield, title: "Conformité Réglementaire", desc: "Respect des normes environnementales", color: "text-lime-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-lime-50 to-green-50 border border-lime-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-lime-500 to-green-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-emerald-50/50">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-green-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { day: "Jour 1-2", topic: "Normes et réglementations environnementales", details: "Standards locaux et internationaux d'émissions" },
                          { day: "Jour 3-4", topic: "Systèmes de dépollution modernes", details: "DPF, SCR, EGR et technologies avancées" },
                          { day: "Jour 5-6", topic: "Mesure et contrôle des émissions", details: "Outils de mesure et optimisation des performances" },
                          { day: "Jour 7", topic: "Conformité et certification", details: "Procédures de validation et certification" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.day}</h4>
                                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-300">
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
                <Card className="border-lime-200 shadow-xl bg-gradient-to-br from-lime-50 to-green-50">
                  <CardHeader className="bg-gradient-to-br from-lime-600 to-green-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent mb-2">
                          Émissions
                        </div>
                        <p className="text-lime-100">Conformité Environnement</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Attestation conformité environnementale</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Expertise systèmes de dépollution</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Contrôle des émissions validé</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-lime-200 to-green-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Protégez l'environnement
                      </p>
                      <Button className="w-full bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200 shadow-xl bg-gradient-to-br from-emerald-50 to-lime-50">
                  <CardHeader className="bg-gradient-to-r from-emerald-600 to-lime-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Respectez les normes environnementales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Optimisez les performances écologiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Réduisez l'impact environnemental</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Anticipez les réglementations futures</span>
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

export default EmissionsPage;
