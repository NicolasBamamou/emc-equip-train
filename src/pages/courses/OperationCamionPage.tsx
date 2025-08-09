import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Truck, Route, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationCamionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-r from-slate-800 to-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Button - Mobile Friendly */}
            <div className="flex justify-start mb-6">
              <Link to="/courses" className="inline-flex items-center text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
            </div>
            
            <Badge className="bg-slate-500/20 text-slate-100 border-slate-400 mb-4 sm:mb-6 text-sm">
              Conduite d'Équipements
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Opération de Camions Miniers
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Formation spécialisée pour la conduite de camions de transport minier lourds
            </p>
            
            {/* Mobile-optimized info badges */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
                <span className="text-sm sm:text-base">5 Semaines</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
                <span className="text-sm sm:text-base">Intermédiaire</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Book className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
                <span className="text-sm sm:text-base">Permis Camion Minier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Mobile Optimized */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          {/* Mobile-first: Stack content vertically on small screens, grid on large */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Course Content - Full width on mobile */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              
              {/* Overview Card */}
              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-slate-800 flex items-center gap-2 text-lg sm:text-xl">
                    <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Formation intensive pour devenir opérateur de camions miniers. 
                    Maîtrisez les techniques de conduite sécuritaire, chargement optimal, 
                    navigation minière et maintenance préventive des gros porteurs.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics Card */}
              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-slate-800 text-lg sm:text-xl">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      "Inspection pré-opérationnelle",
                      "Techniques de conduite",
                      "Chargement et déchargement",
                      "Navigation GPS minière",
                      "Règles de circulation",
                      "Maintenance préventive",
                      "Communication radio",
                      "Gestion du dispatching"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="w-2 h-2 bg-slate-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm sm:text-base">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills Card */}
              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-slate-800 flex items-center gap-2 text-lg sm:text-xl">
                    <Route className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600" />
                    Compétences Opérationnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      "Conduite sécuritaire sur pistes minières",
                      "Optimisation des cycles de transport",
                      "Coordination avec le centre de contrôle",
                      "Diagnostic des problèmes mécaniques de base"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                        <Navigation className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Course Info Sidebar - Mobile Optimized */}
            <div className="space-y-4 sm:space-y-6 order-first lg:order-last">
              
              {/* Enrollment Card - Enhanced for Mobile */}
              <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                <CardHeader className="bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-t-lg">
                  <CardTitle className="text-center text-lg sm:text-xl">Informations de Formation</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Price Section */}
                  <div className="text-center bg-slate-50 rounded-lg p-4 border-2 border-slate-200">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-700 mb-1">2.500.000FG</div>
                    <p className="text-gray-600 text-sm sm:text-base">Prix de la formation</p>
                    <div className="mt-2 text-xs sm:text-sm text-slate-500">
                      Paiement en 3 fois possible
                    </div>
                  </div>
                  
                  <Separator className="bg-slate-200" />
                  
                  {/* Course Details */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-gray-600 text-sm sm:text-base">Durée:</span>
                      <span className="font-medium text-slate-700 text-sm sm:text-base">5 Semaines</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-gray-600 text-sm sm:text-base">Niveau:</span>
                      <span className="font-medium text-slate-700 text-sm sm:text-base">Intermédiaire</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-gray-600 text-sm sm:text-base">Mode:</span>
                      <span className="font-medium text-slate-700 text-sm sm:text-base">90% Pratique</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 text-sm sm:text-base">Certification:</span>
                      <span className="font-medium text-slate-700 text-sm sm:text-base">Permis Camion</span>
                    </div>
                  </div>
                  
                  <Separator className="bg-slate-200" />
                  
                  {/* CTA Buttons - Mobile Optimized */}
                  <div className="space-y-3">
                    <Link to="/admissions">
                      <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 sm:py-4 text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all">
                        S'inscrire Maintenant
                      </Button>
                    </Link>
                    
                    <Link to="/contact">
                      <Button variant="outline" className="w-full border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all">
                        Demander des Informations
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites - Mobile Friendly */}
              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-slate-800 text-lg sm:text-xl">Prérequis</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {[
                      "Âge minimum 22 ans",
                      "Permis poids lourds catégorie C",
                      "Examen médical spécialisé",
                      "Formation sécurité minière obligatoire"
                    ].map((req, index) => (
                      <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
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

export default OperationCamionPage;
