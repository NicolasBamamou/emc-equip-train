import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, MessageSquare, Heart, Users2 } from 'lucide-react';

const CommunicationEfficacePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Communication Theme */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-rose-500/20 text-rose-100 border-rose-400 mb-6">
              Compétences Douces
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Communication Efficace
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 mb-8 leading-relaxed">
              Développez vos compétences en communication pour un environnement de travail optimal
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>1 Semaine</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Débutant</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Certification Communication</span>
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
                    <MessageSquare className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation essentielle pour améliorer la communication interpersonnelle 
                    en milieu professionnel. Apprenez l'écoute active, l'expression claire 
                    et la gestion des conflits dans l'industrie minière.
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
                      "Principes de communication",
                      "Écoute active",
                      "Expression orale claire",
                      "Communication non-verbale",
                      "Gestion des conflits",
                      "Communication d'équipe",
                      "Présentation efficace",
                      "Feedback constructif"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-rose-200">
                <CardHeader>
                  <CardTitle className="text-rose-800 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Compétences Développées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Amélioration des relations de travail",
                      "Résolution efficace des problèmes",
                      "Leadership et influence positive",
                      "Adaptation aux différents interlocuteurs"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Users2 className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
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
                    <div className="text-3xl font-bold text-rose-600 mb-2">800.000FG</div>
                    <p className="text-gray-600">Prix de la formation</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-medium">1 Semaine</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau:</span>
                      <span className="font-medium">Débutant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Interactif + Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Communication</span>
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
                    <li>• Aucun prérequis technique</li>
                    <li>• Motivation à améliorer ses relations</li>
                    <li>• Ouverture au changement</li>
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

export default CommunicationEfficacePage;
