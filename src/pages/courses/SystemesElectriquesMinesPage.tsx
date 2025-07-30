import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Power, Zap, Factory, CheckCircle, PlayCircle, Award, Clock, BookOpen, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const SystemesElectriquesMinesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-800 to-amber-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/courses" className="inline-flex items-center text-yellow-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Power className="w-8 h-8" />
              </div>
              <Badge className="bg-yellow-500/20 text-yellow-100 border-yellow-300/30 px-4 py-2 text-lg font-semibold">
                Systèmes Électriques Miniers
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Systèmes Électriques dans
              <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                {" "}les Mines
              </span>
            </h1>
            
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
              Spécialisez-vous dans les systèmes électriques spécifiques aux environnements miniers : 
              transformateurs, tableaux électriques, appareillage de puissance et distribution électrique.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-2 text-yellow-200" />
                <span className="font-semibold">4 Semaines</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Factory className="w-5 h-5 mr-2 text-yellow-200" />
                <span className="font-semibold">Intermédiaire</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-2 text-yellow-200" />
                <span className="font-semibold">3.000.000FG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-yellow-50 to-amber-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              
              {/* Course Overview */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-yellow-50/50">
                  <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Vue d'ensemble du cours</h2>
                        <p className="text-yellow-100">Formation en électricité minière</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cette formation spécialisée vous forme aux systèmes électriques complexes des sites miniers. 
                        Apprenez la conception, l'installation et la maintenance des transformateurs de puissance, 
                        des tableaux généraux et de l'appareillage électrique en environnement minier.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { icon: Power, title: "Transformateurs", desc: "Puissance en environnement minier", color: "text-yellow-600" },
                          { icon: Zap, title: "Tableaux TGBT", desc: "Distribution basse tension", color: "text-amber-600" },
                          { icon: Factory, title: "Appareillage", desc: "Protection et commande", color: "text-orange-600" },
                          { icon: TrendingUp, title: "Distribution", desc: "Réseaux électriques miniers", color: "text-yellow-700" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-100">
                            <div className={`w-3 h-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full`}></div>
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
                <Card className="border-none shadow-2xl mt-8 overflow-hidden bg-gradient-to-br from-white to-orange-50/50">
                  <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8" />
                      <div>
                        <h3 className="text-2xl font-bold">Programme de formation</h3>
                        <p className="text-amber-100">Modules détaillés du cours</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                      <div className="space-y-6">
                        {[
                          { week: "Semaine 1", topic: "Transformateurs de Puissance", details: "Technologies et applications minières" },
                          { week: "Semaine 2", topic: "Tableaux TGBT", details: "Conception et installation en mines" },
                          { week: "Semaine 3", topic: "Appareillage Électrique", details: "Protection et commande industrielle" },
                          { week: "Semaine 4", topic: "Distribution Minière", details: "Réseaux et maintenance préventive" }
                        ].map((module, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-gray-800">{module.week}</h4>
                                <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border-amber-300">
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
                <Card className="border-yellow-200 shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50">
                  <CardHeader className="bg-gradient-to-br from-yellow-600 to-amber-600 text-white">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">Certification</h3>
                        <div className="text-4xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-2">
                          Systèmes
                        </div>
                        <p className="text-yellow-100">Électriques Miniers</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certificat systèmes électriques miniers</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Expertise transformateurs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Maintenance TGBT</span>
                      </div>
                    </div>
                    <Separator className="bg-gradient-to-r from-yellow-200 to-amber-200 my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        Alimentez les mines
                      </p>
                      <Button className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 shadow-xl bg-gradient-to-br from-orange-50 to-yellow-50">
                  <CardHeader className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Pourquoi cette formation ?</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Spécialisation rare et recherchée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Environnements exigeants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Haute responsabilité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Rémunération attractive</span>
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

export default SystemesElectriquesMinesPage;
