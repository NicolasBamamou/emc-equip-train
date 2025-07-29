import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, MessageSquare, Heart, Users2, Target, Lightbulb, Handshake } from 'lucide-react';

const TeamworkPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-50">
      <Header />
      
      {/* Hero Section - Teamwork Theme with Warm Colors */}
      <section className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Connection pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-4 h-4 bg-pink-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-4 h-4 bg-rose-300 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-300 rounded-full"></div>
          <div className="absolute top-60 right-1/3 w-4 h-4 bg-pink-400 rounded-full"></div>
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="10%" y1="20%" x2="25%" y2="60%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="75%" y1="40%" x2="65%" y2="70%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-28 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Badge className="bg-pink-500/20 text-pink-200 border-pink-400 px-8 py-3 text-lg font-bold backdrop-blur-sm">
                <Heart className="w-6 h-6 mr-3" />
                COMPÉTENCES HUMAINES
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-pink-200 to-rose-300 bg-clip-text text-transparent drop-shadow-2xl">
                TRAVAIL
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-200 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl">
                D'ÉQUIPE
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-pink-100 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Développez la cohésion et l'efficacité collaborative pour des projets miniers réussis
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-black/40 backdrop-blur-lg border border-pink-300/30 rounded-xl p-6 text-center">
                <Users2 className="h-10 w-10 mx-auto mb-4 text-pink-400" />
                <div className="text-2xl font-black text-white mb-2">3 Semaines</div>
                <div className="text-pink-200 text-sm font-semibold">Formation</div>
              </div>
              <div className="bg-black/40 backdrop-blur-lg border border-rose-300/30 rounded-xl p-6 text-center">
                <MessageSquare className="h-10 w-10 mx-auto mb-4 text-rose-400" />
                <div className="text-2xl font-black text-white mb-2">Débutant</div>
                <div className="text-rose-200 text-sm font-semibold">Accessible</div>
              </div>
              <div className="bg-black/40 backdrop-blur-lg border border-purple-300/30 rounded-xl p-6 text-center">
                <Handshake className="h-10 w-10 mx-auto mb-4 text-purple-400" />
                <div className="text-2xl font-black text-white mb-2">Interactif</div>
                <div className="text-purple-200 text-sm font-semibold">Format</div>
              </div>
              <div className="bg-black/40 backdrop-blur-lg border border-pink-300/30 rounded-xl p-6 text-center">
                <Target className="h-10 w-10 mx-auto mb-4 text-pink-400" />
                <div className="text-2xl font-black text-white mb-2">Cohésion</div>
                <div className="text-pink-200 text-sm font-semibold">Objectif</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-20">
          
          {/* Team Power Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-pink-50 to-purple-100">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-6">
                    <Users2 className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    LA FORCE DE L'ÉQUIPE
                  </h2>
                  <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    Un projet minier réussi repose sur une équipe soudée et des relations solides
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-pink-200">
                    <div className="text-4xl font-black text-pink-600 mb-3">+50%</div>
                    <div className="text-lg font-bold text-gray-700">Productivité</div>
                    <div className="text-sm text-gray-500 mt-2">Équipes cohésives</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-rose-200">
                    <div className="text-4xl font-black text-rose-600 mb-3">-70%</div>
                    <div className="text-lg font-bold text-gray-700">Conflits</div>
                    <div className="text-sm text-gray-500 mt-2">Communication efficace</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-purple-200">
                    <div className="text-4xl font-black text-purple-600 mb-3">90%</div>
                    <div className="text-lg font-bold text-gray-700">Satisfaction</div>
                    <div className="text-sm text-gray-500 mt-2">Employés motivés</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Course Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Team Building Modules */}
              <Card className="border-pink-200 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Users2 className="h-8 w-8" />
                    Modules de Développement d'Équipe
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid gap-6">
                    {[
                      {
                        title: "Communication Efficace",
                        icon: <MessageSquare className="h-8 w-8 text-pink-600" />,
                        description: "Techniques de communication claire et bienveillante",
                        focus: "FONDAMENTAL"
                      },
                      {
                        title: "Résolution de Conflits",
                        icon: <Handshake className="h-8 w-8 text-rose-600" />,
                        description: "Gestion constructive des désaccords",
                        focus: "ESSENTIEL"
                      },
                      {
                        title: "Leadership Partagé",
                        icon: <Target className="h-8 w-8 text-purple-600" />,
                        description: "Développer les leaders à tous les niveaux",
                        focus: "STRATÉGIQUE"
                      },
                      {
                        title: "Motivation Collective",
                        icon: <Heart className="h-8 w-8 text-pink-600" />,
                        description: "Créer un environnement motivant et positif",
                        focus: "VITAL"
                      }
                    ].map((module, index) => (
                      <div key={index} className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border-l-4 border-pink-500 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white rounded-xl shadow-md">
                            {module.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                              <Badge className="bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 border-pink-300 font-bold">
                                {module.focus}
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

              {/* Interactive Activities */}
              <Card className="border-rose-200 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-rose-600 to-purple-600 text-white">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Lightbulb className="h-8 w-8" />
                    Activités Pratiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-rose-800 mb-6">Exercices Collaboratifs</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-bold text-gray-800 mb-3">Simulations Terrain</h4>
                          {[
                            "Projet équipe urgence",
                            "Résolution problème complexe",
                            "Coordination multi-départements",
                            "Gestion crise collective"
                          ].map((activity, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-rose-100">
                              <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
                              <span className="font-medium text-gray-700 text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-bold text-gray-800 mb-3">Ateliers Interactifs</h4>
                          {[
                            "Jeux de rôle communication",
                            "Team building créatif",
                            "Feedback constructif",
                            "Planification collaborative"
                          ].map((workshop, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-purple-100">
                              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full"></div>
                              <span className="font-medium text-gray-700 text-sm">{workshop}</span>
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
              <Card className="border-pink-200 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                  <CardTitle className="text-center text-xl font-bold">Formation Humaine</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center py-6">
                    <div className="text-5xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                      1.500.000FG
                    </div>
                    <p className="text-gray-600 font-bold">Investissement Équipe</p>
                    <p className="text-sm text-gray-500 mt-2">*Tarif groupe disponible</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-pink-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-semibold">Durée:</span>
                        <span className="font-black text-pink-700">3 Semaines</span>
                      </div>
                    </div>
                    <div className="bg-rose-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-semibold">Niveau:</span>
                        <span className="font-black text-rose-700">Tous Niveaux</span>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-semibold">Format:</span>
                        <span className="font-black text-purple-700">100% Interactif</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    <Heart className="w-5 h-5 mr-2" />
                    RENFORCER L'ÉQUIPE
                  </Button>
                  
                  <Button variant="outline" className="w-full border-2 border-pink-300 text-pink-700 hover:bg-pink-50 font-bold py-3 rounded-xl">
                    Formation Groupe
                  </Button>
                </CardContent>
              </Card>

              {/* Team Benefits */}
              <Card className="border-rose-200 shadow-xl bg-gradient-to-br from-rose-50 to-purple-50">
                <CardHeader className="bg-gradient-to-r from-rose-600 to-purple-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Users2 className="h-6 w-6" />
                    Bénéfices Équipe
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="font-semibold">Cohésion renforcée</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                      <span className="font-semibold">Communication fluide</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="font-semibold">Conflits résolus</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="font-semibold">Motivation collective</span>
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

export default TeamworkPage;
