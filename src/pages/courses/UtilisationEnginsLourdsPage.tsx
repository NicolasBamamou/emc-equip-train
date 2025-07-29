import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Truck, Construction, Shield } from 'lucide-react';

const UtilisationEnginsLourdsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Equipment Safety Theme */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-500/20 text-yellow-100 border-yellow-400 mb-6">
              Sécurité Équipements
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Utilisation Sécurisée des Engins Lourds
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Maîtrisez l'utilisation sécuritaire des équipements miniers lourds
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
                <span>Certification Opérateur</span>
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
                    Formation complète sur l'utilisation sécurisée des engins lourds dans l'environnement 
                    minier. Apprenez les protocoles de sécurité, les procédures opérationnelles et les 
                    techniques de prévention des accidents.
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
                      "Procédures de démarrage",
                      "Techniques de conduite sécuritaire",
                      "Communication sur chantier",
                      "Maintenance préventive",
                      "Gestion des situations d'urgence",
                      "Réglementation et conformité",
                      "Formation pratique sur terrain"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Equipment Types */}
              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <Construction className="h-5 w-5" />
                    Équipements Couverts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Excavateurs hydrauliques",
                      "Bulldozers et niveleuses",
                      "Chargeuses sur pneus",
                      "Camions miniers articulés"
                    ].map((equipment, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{equipment}</span>
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
                    <div className="text-3xl font-bold text-yellow-600 mb-2">2.200.000FG</div>
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
                      <span className="font-medium">Pratique Terrain</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Opérateur Sécurisé</span>
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
                    <li>• Formation sécurité de base</li>
                    <li>• Expérience opérationnelle</li>
                    <li>• Certificat médical d'aptitude</li>
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

export default UtilisationEnginsLourdsPage;
