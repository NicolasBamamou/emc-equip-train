import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Disc3, Settings, Car, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const FreinagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-zinc-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-slate-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Disc3 className="w-8 h-8" />
              </div>
              <Badge className="bg-slate-500/20 text-slate-100 border-slate-300/30 px-4 py-2 text-lg font-semibold">
                Freinage & Suspension
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Systèmes de Freinage,
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {" "}Suspension & Direction
              </span>
            </h1>
            
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              Maîtrisez la maintenance et la réparation des systèmes critiques de sécurité. Formation complète sur 
              les freins hydrauliques et pneumatiques, les suspensions et les systèmes de direction des engins lourds.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-slate-200" />
                <span className="font-semibold">1 Semaine</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Car className="w-5 h-5 mr-2 text-slate-200" />
                <span className="font-semibold">Débutant</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-slate-200" />
                <span className="font-semibold">700.000FG</span>
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
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50/50">
                  <CardHeader className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-slate-100">Formation critique en systèmes de sécurité</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation critique couvre les systèmes essentiels à la sécurité des engins lourds. Apprenez 
                        à diagnostiquer, maintenir et réparer les systèmes de freinage, de suspension et de direction pour 
                        garantir la sécurité et les performances optimales des équipements miniers.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Disc3, title: "Systèmes de Freinage", desc: "Freins hydrauliques et pneumatiques", color: "text-slate-600" },
                          { icon: Settings, title: "Systèmes de Suspension", desc: "Ressorts et amortisseurs", color: "text-zinc-600" },
                          { icon: TrendingUp, title: "Direction Assistée", desc: "Systèmes de direction hydraulique", color: "text-gray-600" },
                          { icon: Car, title: "Diagnostic Complet", desc: "Tests et contrôles de sécurité", color: "text-slate-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-50 to-zinc-50 border border-slate-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-slate-500 to-zinc-500 rounded-full`}></div>
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
                  <CardHeader className="bg-gradient-to-r from-zinc-600 to-gray-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-zinc-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-zinc-50 to-gray-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { day: "Jour 1-2", topic: "Systèmes de freinage hydrauliques", details: "Maîtres-cylindres, étriers et plaquettes" },
                          { day: "Jour 3-4", topic: "Systèmes de freinage pneumatiques", details: "Compresseurs, valves et freins à air" },
                          { day: "Jour 5-6", topic: "Suspension et amortissement", details: "Ressorts, amortisseurs et géométrie" },
                          { day: "Jour 7", topic: "Direction et alignement", details: "Direction assistée et contrôles géométriques" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-zinc-500 to-gray-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.day}</h4>
                                <Badge className="bg-gradient-to-r from-zinc-100 to-gray-100 text-zinc-700 border-zinc-300">
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
                <Card className="border-slate-200 shadow-xl bg-gradient-to-br from-slate-50 to-zinc-50">
                  <CardHeader className="bg-gradient-to-br from-slate-600 to-zinc-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent mb-2">
                          Freinage
                        </div>
                        <p className="text-slate-100">& Suspension</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Attestation freinage et suspension</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Compétences en systèmes critiques</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Contrôles de sécurité validés</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-slate-200 to-zinc-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Garantissez la sécurité des engins
                      </p>
                      <Button className="w-full bg-gradient-to-r from-slate-600 to-zinc-600 hover:from-slate-700 hover:to-zinc-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-xl bg-gradient-to-br from-gray-50 to-slate-50">
                  <CardHeader className="bg-gradient-to-r from-gray-600 to-slate-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span>Assurez la sécurité opérationnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span>Prévenez les accidents mécaniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span>Optimisez les performances de conduite</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span>Maîtrisez les systèmes critiques</span>
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

export default FreinagePage;
