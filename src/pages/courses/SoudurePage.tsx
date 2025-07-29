import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Flame, Zap, Wrench } from 'lucide-react';

const SoudurePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Welding Theme with Fire Gradient */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-700 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        {/* Animated sparks effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-500/20 text-red-100 border-red-400 mb-6 backdrop-blur-sm">
              Techniques Avancées
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Soudure
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Industrielle</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Maîtrisez l'art de la soudure pour équipements lourds et structures métalliques
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center bg-black/40 backdrop-blur-lg border border-orange-300/30 rounded-xl px-6 py-4">
                <Clock className="h-6 w-6 mr-3 text-yellow-400" />
                <span className="font-bold text-lg">5 Semaines</span>
              </div>
              <div className="flex items-center bg-black/40 backdrop-blur-lg border border-orange-300/30 rounded-xl px-6 py-4">
                <Users className="h-6 w-6 mr-3 text-orange-400" />
                <span className="font-bold text-lg">Intermédiaire</span>
              </div>
              <div className="flex items-center bg-black/40 backdrop-blur-lg border border-orange-300/30 rounded-xl px-6 py-4">
                <Flame className="h-6 w-6 mr-3 text-red-400" />
                <span className="font-bold text-lg">Certification Soudure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Course Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Overview */}
              <Card className="border-orange-200 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Flame className="h-6 w-6" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Formation intensive en soudure industrielle pour l'industrie minière. 
                    Maîtrisez les techniques MIG, TIG, arc électrique et soudure sous protection 
                    gazeuse sur aciers haute résistance et alliages spéciaux.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-orange-200 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-800 text-xl">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Soudure MIG/MAG",
                      "Techniques TIG",
                      "Soudure à l'arc électrique",
                      "Protection gazeuse",
                      "Métallurgie de base",
                      "Contrôle qualité",
                      "Sécurité soudure",
                      "Réparation d'équipements"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100">
                        <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-orange-200 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2 text-xl">
                    <Wrench className="h-6 w-6" />
                    Compétences Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {[
                      "Soudage de structures métalliques lourdes",
                      "Réparation de châssis d'équipements miniers",
                      "Assemblage de composants haute résistance",
                      "Contrôle qualité par ressuage et radiographie"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-500">
                        <Zap className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Course Info Sidebar */}
            <div className="space-y-6">
              
              {/* Enrollment Card */}
              <Card className="border-orange-200 shadow-2xl bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-t-lg">
                  <CardTitle className="text-center text-xl">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center py-4">
                    <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      2.800.000FG
                    </div>
                    <p className="text-gray-600 font-medium">Prix de la formation</p>
                  </div>
                  
                  <Separator className="bg-gradient-to-r from-orange-200 to-red-200" />
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-2 rounded-lg bg-orange-50">
                      <span className="text-gray-600 font-medium">Durée:</span>
                      <span className="font-bold text-orange-700">5 Semaines</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-red-50">
                      <span className="text-gray-600 font-medium">Niveau:</span>
                      <span className="font-bold text-red-700">Intermédiaire</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-yellow-50">
                      <span className="text-gray-600 font-medium">Mode:</span>
                      <span className="font-bold text-yellow-700">90% Atelier</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-orange-50">
                      <span className="text-gray-600 font-medium">Certification:</span>
                      <span className="font-bold text-orange-700">Soudure Industrielle</span>
                    </div>
                  </div>
                  
                  <Separator className="bg-gradient-to-r from-orange-200 to-red-200" />
                  
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-2 border-orange-300 text-orange-700 hover:bg-orange-50 font-bold py-3 rounded-xl">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-orange-200 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Formation métallurgie de base
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Expérience manipulation outils
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      Formation sécurité obligatoire
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Aptitude physique confirmée
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

export default SoudurePage;
