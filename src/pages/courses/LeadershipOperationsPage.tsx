import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Target, TrendingUp, BarChart } from 'lucide-react';

const LeadershipOperationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Leadership Theme */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-rose-500/20 text-rose-100 border-rose-400 mb-6">
              Gestion & Leadership
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Leadership et Gestion d'Opérations
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 mb-8 leading-relaxed">
              Développez vos compétences de leadership dans l'industrie minière
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>6 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Avancé</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Certification Leadership</span>
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
              <Card className="border-rose-200">
                <CardHeader>
                  <CardTitle className="text-rose-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation avancée en leadership et gestion d'opérations minières. 
                    Développez les compétences nécessaires pour diriger des équipes, 
                    optimiser les performances et gérer les défis opérationnels.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-rose-200">
                <CardHeader>
                  <CardTitle className="text-rose-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Styles de leadership",
                      "Gestion d'équipes",
                      "Prise de décision stratégique",
                      "Gestion des performances",
                      "Communication de leadership",
                      "Gestion du changement",
                      "Résolution de conflits",
                      "Développement personnel"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Leadership Skills */}
              <Card className="border-rose-200">
                <CardHeader>
                  <CardTitle className="text-rose-800 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Compétences de Leadership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Vision stratégique et planification",
                      "Motivation et engagement des équipes",
                      "Gestion des crises et situations complexes",
                      "Développement des talents et coaching"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <BarChart className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-rose-200 shadow-lg">
                <CardHeader className="bg-rose-50">
                  <CardTitle className="text-rose-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-600 mb-2">3.500.000FG</div>
                    <p className="text-gray-600">Prix de la formation</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-medium">6 Semaines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau:</span>
                      <span className="font-medium">Avancé</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Interactif + Cas Pratiques</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Leadership Opérations</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-rose-200 text-rose-700 hover:bg-rose-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-rose-200">
                <CardHeader>
                  <CardTitle className="text-rose-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Expérience managériale</li>
                    <li>• Formation technique de base</li>
                    <li>• Motivation leadership</li>
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

export default LeadershipOperationsPage;
