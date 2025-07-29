import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Cog, Settings, Wrench } from 'lucide-react';

const TransmissionAutomatiquePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Transmission Theme */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-purple-500/20 text-purple-100 border-purple-400 mb-6">
              Systèmes de Transmission
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transmission Automatique
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Maîtrisez les systèmes de transmission automatique des équipements lourds
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>4 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Avancé</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Certification Transmission</span>
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
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Cog className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation approfondie sur les transmissions automatiques des équipements 
                    miniers. Apprenez les convertisseurs de couple, boîtes planétaires, 
                    systèmes hydrauliques et techniques de diagnostic avancées.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Convertisseurs de couple",
                      "Trains épicycloïdaux",
                      "Systèmes hydrauliques",
                      "Électronique de gestion",
                      "Diagnostic informatisé",
                      "Calibrage et réglages",
                      "Maintenance prédictive",
                      "Réparations complexes"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Compétences Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Diagnostic des transmissions automatiques",
                      "Réparation des convertisseurs de couple",
                      "Programmation des modules électroniques",
                      "Calibrage des pressions hydrauliques"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Wrench className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-purple-200 shadow-lg">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">2.500.000FG</div>
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
                      <span className="font-medium">Avancé</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Théorique + Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Transmission</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Expérience en mécanique avancée</li>
                    <li>• Connaissances hydrauliques</li>
                    <li>• Formation électronique recommandée</li>
                    <li>• 2+ ans d'expérience maintenance</li>
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

export default TransmissionAutomatiquePage;
