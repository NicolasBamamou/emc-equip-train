import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Brain, Users2, Lightbulb } from 'lucide-react';

const ResolutionProblemetPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Problem Solving Theme */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-indigo-500/20 text-indigo-100 border-indigo-400 mb-6">
              Compétences Douces
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Résolution de Problèmes
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
              Développez vos capacités d'analyse et de résolution de problèmes complexes
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
                <span>Certification Résolution</span>
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
                    <Brain className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation pratique en résolution de problèmes pour l'environnement minier. 
                    Apprenez les méthodes d'analyse, techniques de créativité, 
                    prise de décision et mise en œuvre de solutions efficaces.
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
                      "Identification des problèmes",
                      "Analyse des causes racines",
                      "Techniques de brainstorming",
                      "Méthodes de créativité",
                      "Évaluation des solutions",
                      "Prise de décision",
                      "Mise en œuvre",
                      "Suivi et évaluation"
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
                    <Lightbulb className="h-5 w-5" />
                    Compétences Développées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Analyse systémique des problèmes",
                      "Créativité et innovation",
                      "Prise de décision éclairée",
                      "Leadership dans la résolution"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Users2 className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
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
                    <div className="text-3xl font-bold text-indigo-600 mb-2">1.200.000FG</div>
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
                      <span className="font-medium">Interactif + Cas pratiques</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Résolution de Problèmes</span>
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
                    <li>• Expérience professionnelle 1+ an</li>
                    <li>• Capacité d'analyse</li>
                    <li>• Ouverture d'esprit</li>
                    <li>• Motivation à innover</li>
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

export default ResolutionProblemetPage;
