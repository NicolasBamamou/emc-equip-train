import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, User, Zap, Shield } from 'lucide-react';

const ErgonomiePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Teal Theme */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-teal-500/20 text-teal-100 border-teal-400 mb-6">
              Santé et Sécurité
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Formation en Ergonomie au Travail
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
              Prévenez les blessures et optimisez le bien-être au travail
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>2 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Débutant</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Certification</span>
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
              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-800 flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Cette formation complète en ergonomie vous enseigne les principes essentiels 
                    pour créer un environnement de travail sain et prévenir les troubles musculo-squelettiques. 
                    Apprenez à analyser les postes de travail et à implémenter des solutions efficaces.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Principes de base de l'ergonomie",
                      "Anatomie et biomécanique",
                      "Évaluation des postes de travail",
                      "Troubles musculo-squelettiques",
                      "Aménagement ergonomique",
                      "Techniques de manutention",
                      "Exercices et étirements",
                      "Prévention et sensibilisation"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-800 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Avantages de cette Formation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Réduction des risques de blessures au travail",
                      "Amélioration du confort et de la productivité",
                      "Conformité aux normes de santé et sécurité",
                      "Techniques pratiques d'amélioration des postes"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Course Info Sidebar */}
            <div className="space-y-6">
              
              {/* Enrollment Card */}
              <Card className="border-teal-200 shadow-lg">
                <CardHeader className="bg-teal-50">
                  <CardTitle className="text-teal-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">800.000FG</div>
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
                      <span className="font-medium">Débutant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Présentiel</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Oui</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-teal-200 text-teal-700 hover:bg-teal-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Aucun prérequis technique</li>
                    <li>• Intérêt pour la santé au travail</li>
                    <li>• Niveau d'éducation de base</li>
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

export default ErgonomiePage;
