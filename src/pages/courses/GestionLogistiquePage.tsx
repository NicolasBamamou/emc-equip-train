import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Package, BarChart, TrendingUp } from 'lucide-react';

const GestionLogistiquePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Logistics Management Theme */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-indigo-500/20 text-indigo-100 border-indigo-400 mb-6">
              Gestion des Opérations
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gestion Logistique Minière
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
              Optimisez les flux logistiques et la chaîne d'approvisionnement minière
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
                <span>Certification Logistique</span>
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
              <Card className="border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation complète en gestion logistique pour l'industrie minière. 
                    Apprenez la planification des approvisionnements, gestion des stocks, 
                    transport et distribution dans un environnement minier.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-indigo-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Chaîne d'approvisionnement",
                      "Gestion des stocks",
                      "Planification logistique",
                      "Transport et distribution",
                      "Entreposage minier",
                      "Systèmes d'information",
                      "Contrôle des coûts",
                      "Amélioration continue"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    Compétences Développées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Optimisation des flux logistiques",
                      "Réduction des coûts opérationnels",
                      "Coordination multi-départements",
                      "Analyse des performances logistiques"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-indigo-200 shadow-lg">
                <CardHeader className="bg-indigo-50">
                  <CardTitle className="text-indigo-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">2.000.000FG</div>
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
                      <span className="font-medium">Théorique + Études de cas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Logistique Minière</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-indigo-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Formation gestionnaire ou équivalent</li>
                    <li>• Expérience administrative 2+ ans</li>
                    <li>• Connaissances informatiques</li>
                    <li>• Anglais technique recommandé</li>
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

export default GestionLogistiquePage;
