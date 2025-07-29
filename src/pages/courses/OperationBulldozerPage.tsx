import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Truck, Gauge, Wrench } from 'lucide-react';

const OperationBulldozerPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Bulldozer Operation Theme */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-500/20 text-yellow-100 border-yellow-400 mb-6">
              Conduite d'Équipements
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Opération de Bulldozer
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Formation complète pour la conduite sécuritaire et efficace des bulldozers
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>3 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Débutant</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Permis Bulldozer</span>
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
              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation pratique pour devenir opérateur de bulldozer qualifié. 
                    Apprenez les techniques de nivellement, poussage, déblaiement 
                    et maintenance préventive en respectant les normes de sécurité.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Inspection pré-opérationnelle",
                      "Commandes et contrôles",
                      "Techniques de nivellement",
                      "Poussage et déblaiement",
                      "Travail en pente",
                      "Maintenance préventive",
                      "Sécurité opérationnelle",
                      "Communication chantier"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <Gauge className="h-5 w-5" />
                    Compétences Opérationnelles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Conduite sécuritaire en terrain difficile",
                      "Optimisation du rendement de production",
                      "Maintenance préventive quotidienne",
                      "Coordination avec les autres équipements"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Wrench className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-yellow-200 shadow-lg">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="text-yellow-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">1.500.000FG</div>
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
                      <span className="font-medium">Débutant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">80% Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Permis Bulldozer</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-yellow-200 text-yellow-700 hover:bg-yellow-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Âge minimum 18 ans</li>
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

export default OperationBulldozerPage;
