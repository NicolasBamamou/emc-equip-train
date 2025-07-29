import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Shield, Globe, Eye, Target, AlertTriangle, CheckCircle } from 'lucide-react';

const SecuriteMinierePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      {/* Hero Section - Security/Safety Theme with Dark Professional Look */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Security grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400 px-6 py-2 text-lg font-bold backdrop-blur-sm">
                <AlertTriangle className="w-5 h-5 mr-2" />
                FORMATION CRITIQUE
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-center mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-2xl">
                SÉCURITÉ
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">MINIÈRE</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-center text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Protection et prévention pour environnements à haut risque
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/50 backdrop-blur-lg border border-blue-300/30 rounded-2xl p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl font-black text-white mb-2">6 Semaines</div>
                <div className="text-blue-200 font-semibold">Formation Intensive</div>
              </div>
              <div className="bg-black/50 backdrop-blur-lg border border-cyan-300/30 rounded-2xl p-6 text-center">
                <Eye className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
                <div className="text-3xl font-black text-white mb-2">Certification</div>
                <div className="text-cyan-200 font-semibold">Sécurité Industrielle</div>
              </div>
              <div className="bg-black/50 backdrop-blur-lg border border-teal-300/30 rounded-2xl p-6 text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-teal-400" />
                <div className="text-3xl font-black text-white mb-2">Zéro Accident</div>
                <div className="text-teal-200 font-semibold">Objectif Formation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-20">
          
          {/* Critical Importance Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-12">
                <AlertTriangle className="h-20 w-20 mx-auto mb-6 text-yellow-300" />
                <h2 className="text-5xl font-black mb-6">FORMATION PRIORITAIRE</h2>
                <p className="text-2xl font-light opacity-90 max-w-3xl mx-auto">
                  La sécurité en milieu minier n'est pas négociable. Chaque décision peut sauver des vies.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-black mb-4 text-yellow-300">0</div>
                  <div className="text-xl font-bold">Accident Toléré</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black mb-4 text-yellow-300">24/7</div>
                  <div className="text-xl font-bold">Vigilance Continue</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black mb-4 text-yellow-300">100%</div>
                  <div className="text-xl font-bold">Conformité Exigée</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Course Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Safety Modules */}
              <Card className="border-slate-200 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-800 to-blue-800 text-white">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Shield className="h-8 w-8" />
                    Modules de Sécurité Critiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid gap-6">
                    {[
                      {
                        title: "Identification des Risques",
                        icon: <Eye className="h-8 w-8 text-red-600" />,
                        description: "Reconnaissance immédiate des dangers potentiels",
                        priority: "CRITIQUE"
                      },
                      {
                        title: "Procédures d'Urgence",
                        icon: <AlertTriangle className="h-8 w-8 text-orange-600" />,
                        description: "Réaction rapide en situation de crise",
                        priority: "VITAL"
                      },
                      {
                        title: "Équipements de Protection",
                        icon: <Shield className="h-8 w-8 text-blue-600" />,
                        description: "Utilisation correcte des EPI",
                        priority: "ESSENTIEL"
                      },
                      {
                        title: "Communication Sécurité",
                        icon: <Globe className="h-8 w-8 text-green-600" />,
                        description: "Protocoles de communication d'urgence",
                        priority: "OBLIGATOIRE"
                      }
                    ].map((module, index) => (
                      <div key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border-l-4 border-slate-600">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white rounded-lg shadow-md">
                            {module.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-slate-800">{module.title}</h3>
                              <Badge className="bg-red-100 text-red-700 border-red-300 font-bold">
                                {module.priority}
                              </Badge>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{module.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Practical Training */}
              <Card className="border-blue-200 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Target className="h-8 w-8" />
                    Formation Pratique Immersive
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-blue-800 mb-4">Simulations Réalistes</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Évacuation d'urgence",
                          "Incendie souterrain",
                          "Effondrement de galerie",
                          "Fuite de gaz toxique",
                          "Accident d'équipement",
                          "Secours en hauteur"
                        ].map((simulation, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span className="font-medium text-gray-700">{simulation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Course Info Sidebar */}
            <div className="space-y-6">
              
              {/* Enrollment Card */}
              <Card className="border-slate-200 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-slate-800 to-blue-900 text-white">
                  <CardTitle className="text-center text-xl font-bold">Formation Sécurité</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center py-6">
                    <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                      2.200.000FG
                    </div>
                    <p className="text-gray-600 font-bold">Investissement Sécurité</p>
                    <p className="text-sm text-gray-500 mt-2">*Obligatoire pour tous les employés</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-semibold">Durée:</span>
                        <span className="font-black text-slate-700">6 Semaines</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-semibold">Niveau:</span>
                        <span className="font-black text-blue-700">Tous Niveaux</span>
                      </div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-semibold">Priorité:</span>
                        <span className="font-black text-red-700">MAXIMUM</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    INSCRIPTION OBLIGATOIRE
                  </Button>
                  
                  <Button variant="outline" className="w-full border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold py-3 rounded-xl">
                    Calendrier de Formation
                  </Button>
                </CardContent>
              </Card>

              {/* Safety Requirements */}
              <Card className="border-red-200 shadow-xl bg-red-50/50">
                <CardHeader className="bg-red-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6" />
                    Exigences Légales
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-semibold">Formation obligatoire par la loi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-semibold">Renouvellement annuel</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-semibold">Certification internationale</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-semibold">Audit de conformité</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SecuriteMinierePage;
