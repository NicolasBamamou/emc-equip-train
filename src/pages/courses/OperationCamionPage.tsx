import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Truck, Route, Navigation } from 'lucide-react';

const OperationCamionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Mining Truck Operation Theme */}
      <section className="bg-gradient-to-r from-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-slate-500/20 text-slate-100 border-slate-400 mb-6">
              Conduite d'Équipements
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Opération de Camions Miniers
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8 leading-relaxed">
              Formation spécialisée pour la conduite de camions de transport minier lourds
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>5 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Intermédiaire</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Permis Camion Minier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Course Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Overview */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation intensive pour devenir opérateur de camions miniers. 
                    Maîtrisez les techniques de conduite sécuritaire, chargement optimal, 
                    navigation minière et maintenance préventive des gros porteurs.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
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
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center gap-2">
                    <Route className="h-5 w-5" />
                    Compétences Opérationnelles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Conduite sécuritaire sur pistes minières",
                      "Optimisation des cycles de transport",
                      "Coordination avec le centre de contrôle",
                      "Diagnostic des problèmes mécaniques de base"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Navigation className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Course Info Sidebar */}
            <div className="space-y-6">
              
              {/* Enrollment Card */}
              <Card className="border-slate-200 shadow-lg">
                <CardHeader className="bg-slate-50">
                  <CardTitle className="text-slate-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-600 mb-2">2.500.000FG</div>
                    <p className="text-gray-600">Prix de la formation</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-medium">5 Semaines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau:</span>
                      <span className="font-medium">Intermédiaire</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">90% Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Permis Camion Minier</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-slate-600 hover:bg-slate-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Âge minimum 22 ans</li>
                    <li>• Permis poids lourds catégorie C</li>
                    <li>• Examen médical spécialisé</li>
                    <li>• Formation sécurité minière obligatoire</li>
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

export default OperationCamionPage;
