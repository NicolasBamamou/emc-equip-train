import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Zap, Battery, Wrench, CircuitBoard, Settings, CheckCircle } from 'lucide-react';

const ElectriqueIndustriellePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50">
      <Header />
      
      {/* Hero Section - Electrical Theme with Electric Colors */}
      <section className="relative bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Electric circuit pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-amber-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-orange-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-60 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Circuit lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="10%" y1="20%" x2="25%" y2="60%" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
            <line x1="75%" y1="40%" x2="65%" y2="70%" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
            <line x1="30%" y1="30%" x2="70%" y2="30%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-28 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Badge className="bg-yellow-500/20 text-yellow-200 border-yellow-400 px-8 py-3 text-lg font-bold backdrop-blur-sm">
                <Zap className="w-6 h-6 mr-3" />
                HAUTE TENSION
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-yellow-200 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl">
                ÉLECTRIQUE
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent drop-shadow-2xl">
                INDUSTRIELLE
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-yellow-100 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Maîtrisez les systèmes électriques complexes des installations minières modernes
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-black/40 backdrop-blur-lg border border-yellow-300/30 rounded-xl p-6 text-center">
                <Battery className="h-10 w-10 mx-auto mb-4 text-yellow-400" />
                <div className="text-2xl font-black text-white mb-2">6 Semaines</div>
                <div className="text-yellow-200 text-sm font-semibold">Intensive</div>
              </div>
              <div className="bg-black/40 backdrop-blur-lg border border-amber-300/30 rounded-xl p-6 text-center">
                <CircuitBoard className="h-10 w-10 mx-auto mb-4 text-amber-400" />
                <div className="text-2xl font-black text-white mb-2">Expert</div>
                <div className="text-amber-200 text-sm font-semibold">Niveau</div>
              </div>
              <div className="bg-black/40 backdrop-blur-lg border border-orange-300/30 rounded-xl p-6 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4 text-orange-400" />
                <div className="text-2xl font-black text-white mb-2">Haute Tension</div>
                <div className="text-orange-200 text-sm font-semibold">Spécialité</div>
              </div>
              <div className="bg-black/40 backdrop-blur-lg border border-yellow-300/30 rounded-xl p-6 text-center">
                <Settings className="h-10 w-10 mx-auto mb-4 text-yellow-400" />
                <div className="text-2xl font-black text-white mb-2">Certification</div>
                <div className="text-yellow-200 text-sm font-semibold">Électricien</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-20">
          
          {/* Power Systems Focus */}
          <div className="max-w-6xl mx-auto mb-20">
            <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-100">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl mb-6">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    PUISSANCE & PRÉCISION
                  </h2>
                  <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    Gérez les systèmes électriques critiques qui alimentent l'industrie minière
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-yellow-200">
                    <div className="text-4xl font-black text-yellow-600 mb-3">400V</div>
                    <div className="text-lg font-bold text-gray-700">Haute Tension</div>
                    <div className="text-sm text-gray-500 mt-2">Jusqu'à 25kV</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-amber-200">
                    <div className="text-4xl font-black text-amber-600 mb-3">MW</div>
                    <div className="text-lg font-bold text-gray-700">Puissance</div>
                    <div className="text-sm text-gray-500 mt-2">Méga installations</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-orange-200">
                    <div className="text-4xl font-black text-orange-600 mb-3">24/7</div>
                    <div className="text-lg font-bold text-gray-700">Continuité</div>
                    <div className="text-sm text-gray-500 mt-2">Service non-stop</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Course Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Electrical Systems */}
              <Card className="border-yellow-200 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <CircuitBoard className="h-8 w-8" />
                    Systèmes Électriques Industriels
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid gap-6">
                    {[
                      {
                        title: "Distribution Haute Tension",
                        icon: <Zap className="h-8 w-8 text-yellow-600" />,
                        description: "Réseaux 6kV à 25kV, transformateurs de puissance",
                        voltage: "HAUTE TENSION"
                      },
                      {
                        title: "Moteurs Industriels",
                        icon: <Settings className="h-8 w-8 text-amber-600" />,
                        description: "Moteurs AC/DC haute puissance, variateurs",
                        voltage: "PUISSANCE"
                      },
                      {
                        title: "Automatismes Électriques",
                        icon: <CircuitBoard className="h-8 w-8 text-orange-600" />,
                        description: "PLC, SCADA, contrôle process industriel",
                        voltage: "INTELLIGENT"
                      },
                      {
                        title: "Protection & Sécurité",
                        icon: <Battery className="h-8 w-8 text-yellow-600" />,
                        description: "Relais de protection, mise à la terre, sécurité",
                        voltage: "CRITIQUE"
                      }
                    ].map((system, index) => (
                      <div key={index} className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white rounded-xl shadow-md">
                            {system.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-gray-800">{system.title}</h3>
                              <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 border-yellow-300 font-bold">
                                {system.voltage}
                              </Badge>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{system.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Practical Training */}
              <Card className="border-amber-200 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Wrench className="h-8 w-8" />
                    Formation Pratique Sécurisée
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-amber-800 mb-6">Équipements d'Entraînement</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-bold text-gray-800 mb-3">Panneaux Électriques</h4>
                          {[
                            "Tableaux MT/BT industriels",
                            "Cellules de commutation",
                            "Armoires de contrôle moteurs",
                            "Systèmes de protection"
                          ].map((equipment, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-amber-100">
                              <CheckCircle className="h-5 w-5 text-amber-600" />
                              <span className="font-medium text-gray-700 text-sm">{equipment}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-bold text-gray-800 mb-3">Équipements Mobiles</h4>
                          {[
                            "Bancs d'essai moteurs",
                            "Analyseurs de réseaux",
                            "Oscilloscopes industriels",
                            "Mégohmmètres haute tension"
                          ].map((tool, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-orange-100">
                              <CheckCircle className="h-5 w-5 text-orange-600" />
                              <span className="font-medium text-gray-700 text-sm">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Course Info Sidebar */}
            <div className="space-y-6">
              
              {/* Enrollment Card */}
              <Card className="border-yellow-200 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
                  <CardTitle className="text-center text-xl font-bold">Formation Électrique</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center py-6">
                    <div className="text-5xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-3">
                      3.200.000FG
                    </div>
                    <p className="text-gray-600 font-bold">Formation Spécialisée</p>
                    <p className="text-sm text-gray-500 mt-2">*Équipements haute technologie inclus</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-semibold">Durée:</span>
                        <span className="font-black text-yellow-700">6 Semaines</span>
                      </div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-semibold">Niveau:</span>
                        <span className="font-black text-amber-700">Expert</span>
                      </div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-semibold">Sécurité:</span>
                        <span className="font-black text-orange-700">Maximum</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    <Zap className="w-5 h-5 mr-2" />
                    ÉLECTRIFIER MA CARRIÈRE
                  </Button>
                  
                  <Button variant="outline" className="w-full border-2 border-yellow-300 text-yellow-700 hover:bg-yellow-50 font-bold py-3 rounded-xl">
                    Visite Laboratoire
                  </Button>
                </CardContent>
              </Card>

              {/* Safety Requirements */}
              <Card className="border-orange-200 shadow-xl bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Battery className="h-6 w-6" />
                    Exigences Sécurité
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-semibold">Habilitation électrique B2V</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <span className="font-semibold">EPI spécialisés fournis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-semibold">Procédures de consignation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-semibold">Secours d'urgence</span>
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

export default ElectriqueIndustriellePage;
