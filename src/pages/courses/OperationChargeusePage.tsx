import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Gauge, Truck, Cog } from 'lucide-react';

const OperationChargeusePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Wheel Loader Operation Theme */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500/20 text-green-100 border-green-400 mb-6">
              Conduite d'Équipements
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Opération de Chargeuse
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              Formation complète pour la conduite professionnelle de chargeuses sur pneus
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>3 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Débutant à Intermédiaire</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Permis Chargeuse</span>
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
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation pratique pour devenir opérateur de chargeuse qualifié. 
                    Maîtrisez les techniques de chargement, transport, déchargement 
                    et manœuvres spéciales avec différents types de chargeuses.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Inspection pré-opérationnelle",
                      "Commandes hydrauliques",
                      "Techniques de chargement",
                      "Transport de matériaux",
                      "Manœuvres en sécurité",
                      "Maintenance quotidienne",
                      "Optimisation des cycles",
                      "Communication terrain"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Gauge className="h-5 w-5" />
                    Compétences Opérationnelles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Conduite efficace en zone de chargement",
                      "Optimisation de la productivité",
                      "Coordination avec les autres équipements",
                      "Diagnostic de base des problèmes mécaniques"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Cog className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">1.800.000FG</div>
                    <p className="text-gray-600">Prix de la formation</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-medium">3 Semaines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau:</span>
                      <span className="font-medium">Débutant à Intermédiaire</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">80% Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Permis Chargeuse</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Âge minimum 19 ans</li>
                    <li>• Permis de conduire valide</li>
                    <li>• Examen médical d'aptitude</li>
                    <li>• Formation sécurité de base</li>
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

export default OperationChargeusePage;
