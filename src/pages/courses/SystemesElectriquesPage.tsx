import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Zap, Lightbulb, Settings } from 'lucide-react';

const SystemesElectriquesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Electrical Theme */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-500/20 text-blue-100 border-blue-400 mb-6">
              Électricité & Électronique
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Systèmes Électriques des Équipements
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Maîtrisez les systèmes électriques et électroniques des équipements miniers
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>4 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Intermédiaire</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Certification Électrique</span>
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
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation complète sur les systèmes électriques des équipements lourds. 
                    Apprenez les circuits électriques, systèmes de charge, démarrage, 
                    éclairage et diagnostic électronique.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Circuits électriques de base",
                      "Systèmes de charge",
                      "Démarreurs et alternateurs",
                      "Systèmes d'éclairage",
                      "Capteurs et actuateurs",
                      "Réseaux CAN",
                      "Diagnostic électronique",
                      "Sécurité électrique"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Compétences Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Lecture de schémas électriques",
                      "Diagnostic avec multimètre et oscilloscope",
                      "Réparation des systèmes de charge",
                      "Programmation des modules électroniques"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-blue-200 shadow-lg">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2.200.000FG</div>
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
                      <span className="font-medium">Intermédiaire</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Théorique + Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Électrique</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Notions d'électricité de base</li>
                    <li>• Mathématiques niveau secondaire</li>
                    <li>• Formation sécurité électrique</li>
                    <li>• Expérience mécanique recommandée</li>
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

export default SystemesElectriquesPage;
