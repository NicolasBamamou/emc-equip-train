import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Mountain, Drill, HardHat } from 'lucide-react';

const ForageMiniePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Mining Drilling Theme */}
      <section className="bg-gradient-to-r from-amber-700 to-orange-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-amber-500/20 text-amber-100 border-amber-400 mb-6">
              Ingénierie Minière
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Forage Minier
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
              Maîtrisez les techniques de forage et sondage dans l'industrie minière
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
                <span>Certification Forage</span>
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
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <Drill className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation spécialisée en forage minier pour exploration et production. 
                    Apprenez les techniques de forage rotary, percussion, 
                    échantillonnage et interprétation des données géologiques.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Types de forage",
                      "Équipements de forage",
                      "Techniques rotary",
                      "Forage à percussion",
                      "Échantillonnage géologique",
                      "Fluides de forage",
                      "Sécurité forage",
                      "Maintenance des foreuses"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <Mountain className="h-5 w-5" />
                    Compétences Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Opération des équipements de forage",
                      "Interprétation des logs de forage",
                      "Techniques d'échantillonnage précis",
                      "Maintenance préventive des foreuses"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <HardHat className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-amber-200 shadow-lg">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="text-amber-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">2.400.000FG</div>
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
                      <span className="font-medium">Forage Minier</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-amber-200 text-amber-700 hover:bg-amber-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Formation technique de base</li>
                    <li>• Notions de géologie</li>
                    <li>• Aptitude aux travaux physiques</li>
                    <li>• Formation sécurité obligatoire</li>
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

export default ForageMiniePage;
