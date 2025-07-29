import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Truck, Fuel, Wrench } from 'lucide-react';

const SystemeRefroidissementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Cooling System Theme */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-cyan-500/20 text-cyan-100 border-cyan-400 mb-6">
              Systèmes Mécaniques
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Système de Refroidissement
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Formation spécialisée sur les systèmes de refroidissement des équipements miniers
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>2 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Intermédiaire</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Certification Refroidissement</span>
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
              <Card className="border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-cyan-800 flex items-center gap-2">
                    <Fuel className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation complète sur les systèmes de refroidissement des moteurs diesel. 
                    Maîtrisez les radiateurs, pompes à eau, thermostats, ventilateurs et 
                    techniques de maintenance des circuits de refroidissement.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-cyan-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Principes de refroidissement",
                      "Types de radiateurs",
                      "Pompes à eau et circulation",
                      "Thermostats et régulation",
                      "Ventilateurs et refroidisseurs",
                      "Liquides de refroidissement",
                      "Diagnostic des pannes",
                      "Maintenance préventive"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-cyan-800 flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Compétences Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Diagnostic des problèmes de surchauffe",
                      "Maintenance des radiateurs et échangeurs",
                      "Remplacement des pompes à eau",
                      "Test des thermostats et ventilateurs"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Truck className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-cyan-200 shadow-lg">
                <CardHeader className="bg-cyan-50">
                  <CardTitle className="text-cyan-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">1.200.000FG</div>
                    <p className="text-gray-600">Prix de la formation</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-medium">2 Semaines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau:</span>
                      <span className="font-medium">Intermédiaire</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Théorique + Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Refroidissement</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-cyan-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Notions de mécanique générale</li>
                    <li>• Connaissance des moteurs thermiques</li>
                    <li>• Expérience en maintenance recommandée</li>
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

export default SystemeRefroidissementPage;
