import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Leaf, Globe, Recycle } from 'lucide-react';

const SecuriteEnvironnementalePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Environmental Theme */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500/20 text-green-100 border-green-400 mb-6">
              Environnement & Sécurité
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sécurité Environnementale
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              Protégez l'environnement et respectez les normes écologiques minières
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
                <span>Certification Environnementale</span>
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
                    <Leaf className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation spécialisée en protection environnementale dans le secteur minier. 
                    Apprenez les réglementations, les bonnes pratiques et les technologies 
                    durables pour minimiser l'impact environnemental.
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
                      "Législation environnementale",
                      "Gestion des déchets miniers",
                      "Protection des eaux",
                      "Contrôle de la pollution",
                      "Biodiversité et écosystèmes",
                      "Énergies renouvelables",
                      "Audits environnementaux",
                      "Développement durable"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Environmental Impact */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Impact Environnemental
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Réduction des émissions de CO2",
                      "Gestion responsable des ressources en eau",
                      "Préservation de la faune et de la flore",
                      "Réhabilitation des sites miniers"
                    ].map((impact, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Recycle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{impact}</span>
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
                      <span className="font-medium">4 Semaines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau:</span>
                      <span className="font-medium">Intermédiaire</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Théorique + Terrain</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Environnementale</span>
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
                    <li>• Formation sécurité de base</li>
                    <li>• Notions d'écologie</li>
                    <li>• Connaissance du secteur minier</li>
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

export default SecuriteEnvironnementalePage;
