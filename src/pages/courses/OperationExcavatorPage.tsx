import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Truck, Gauge, Settings } from 'lucide-react';

const OperationExcavatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Excavator Operation Theme */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500/20 text-orange-100 border-orange-400 mb-6">
              Conduite d'Équipements
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Opération d'Excavatrice
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
              Formation complète pour la conduite professionnelle d'excavatrices minières
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>4 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Débutant à Intermédiaire</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Permis Excavatrice</span>
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
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation intensive pour devenir opérateur d'excavatrice qualifié. 
                    Maîtrisez les techniques de creusement, chargement, terrassement 
                    et maintenance sur différents types d'excavatrices minières.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Inspection pré-opérationnelle",
                      "Commandes hydrauliques",
                      "Techniques de creusement",
                      "Chargement de camions",
                      "Travail en sécurité",
                      "Maintenance préventive",
                      "Optimisation du cycle",
                      "Communication terrain"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Gauge className="h-5 w-5" />
                    Compétences Opérationnelles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Opération sécuritaire en terrain minier",
                      "Maximisation du rendement horaire",
                      "Coordination avec le dispatching",
                      "Diagnostic des problèmes mécaniques"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Settings className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">2.000.000FG</div>
                    <p className="text-gray-600">Prix de la formation</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-medium">4 Semaines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau:</span>
                      <span className="font-medium">Débutant à Intermédiaire</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">85% Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Permis Excavatrice</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Âge minimum 20 ans</li>
                    <li>• Permis de conduire poids lourds</li>
                    <li>• Examen médical complet</li>
                    <li>• Formation sécurité minière</li>
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

export default OperationExcavatorPage;
