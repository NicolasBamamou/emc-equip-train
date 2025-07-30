import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Scale, FileText, Globe, CheckCircle, PlayCircle, Award, Users, Clock, BookOpen, Target, Lightbulb } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ReglementationMinierePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-emerald-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Scale className="w-8 h-8" />
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-100 border-emerald-300/30 px-4 py-2 text-lg font-semibold">
                Conformité Réglementaire
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Réglementation Minière
              <span className="bg-gradient-to-r from-yellow-300 to-green-400 bg-clip-text text-transparent">
                {" "}& Conformité
              </span>
            </h1>
            
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Maîtrisez les réglementations minières locales et internationales pour assurer la conformité totale de vos opérations. 
              Formation complète sur le code minier guinéen et les standards internationaux (IFC, OHSAS).
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-emerald-200" />
                <span className="font-semibold">3 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Users className="w-5 h-5 mr-2 text-emerald-200" />
                <span className="font-semibold">Avancé</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-emerald-200" />
                <span className="font-semibold">3.000.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-emerald-50/50">
                  <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-emerald-100">Formation spécialisée en conformité réglementaire</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation avancée vous donne une maîtrise complète des réglementations minières. Apprenez à naviguer 
                        dans le complexe paysage juridique local et international, assurez la conformité de vos opérations et 
                        anticipez les évolutions réglementaires.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: FileText, title: "Code Minier Guinéen", desc: "Réglementation nationale complète", color: "text-emerald-600" },
                          { icon: Globe, title: "Standards Internationaux", desc: "IFC, OHSAS et bonnes pratiques", color: "text-teal-600" },
                          { icon: Scale, title: "Conformité", desc: "Procédures et audits de conformité", color: "text-green-600" },
                          { icon: CheckCircle, title: "Reporting", desc: "Rapports réglementaires et documentation", color: "text-cyan-600" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-teal-50/50">
                  <CardHeader className="bg-gradient-to-r from-teal-600 to-green-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-teal-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Code minier guinéen", details: "Textes de loi, décrets et arrêtés" },
                          { week: "Semaine 2", topic: "Réglementations internationales (IFC, OHSAS)", details: "Standards et bonnes pratiques mondiales" },
                          { week: "Semaine 3", topic: "Procédures de conformité", details: "Audits, contrôles et mise en conformité" },
                          { week: "Bonus", topic: "Audit réglementaire et reporting", details: "Documentation et rapports de conformité" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-teal-100 to-green-100 text-teal-700 border-teal-300">
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
                <Card className="border-emerald-200 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
                  <CardHeader className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                          Expert
                        </div>
                        <p className="text-emerald-100">Conformité Réglementaire Minière</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certification de conformité reconnue</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Maîtrise du code minier national</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Expertise standards internationaux</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-emerald-200 to-teal-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Devenez expert en conformité réglementaire
                      </p>
                      <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Évitez les sanctions et pénalités réglementaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Anticipez les évolutions du cadre juridique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Optimisez vos relations avec les autorités</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Sécurisez vos investissements miniers</span>
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

export default ReglementationMinierePage;
