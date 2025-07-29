import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Pickaxe, Drill, Mountain } from 'lucide-react';

const GeologieAppliquePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Applied Geology Theme */}
      <section className="bg-gradient-to-r from-slate-700 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-slate-500/20 text-slate-100 border-slate-400 mb-6">
              Ingénierie Minière
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Géologie Appliquée à l'Exploitation
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8 leading-relaxed">
              Maîtrisez les principes géologiques essentiels pour l'exploitation minière
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
                <span>Certification Géologie</span>
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
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center gap-2">
                    <Mountain className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation spécialisée en géologie appliquée aux opérations minières. 
                    Apprenez l'identification des roches, la stratigraphie, la géologie 
                    structurale et l'évaluation des gisements.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Minéralogie et pétrographie",
                      "Stratigraphie et sédimentologie",
                      "Géologie structurale",
                      "Hydrogéologie minière",
                      "Géochimie des minerais",
                      "Cartographie géologique",
                      "Évaluation des réserves",
                      "Géotechnique minière"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center gap-2">
                    <Drill className="h-5 w-5" />
                    Compétences Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Interprétation des cartes géologiques",
                      "Analyse des échantillons de forage",
                      "Modélisation géologique 3D",
                      "Évaluation de la stabilité des terrains"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Pickaxe className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-slate-200 shadow-lg">
                <CardHeader className="bg-slate-50">
                  <CardTitle className="text-slate-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-600 mb-2">2.800.000FG</div>
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
                      <span className="font-medium">Théorique + Terrain</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Géologie Appliquée</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-slate-600 hover:bg-slate-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Formation scientifique de base</li>
                    <li>• Notions de mathématiques</li>
                    <li>• Intérêt pour les sciences de la terre</li>
                    <li>• Aptitude aux travaux de terrain</li>
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

export default GeologieAppliquePage;
