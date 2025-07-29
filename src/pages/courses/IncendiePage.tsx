import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Flame, AlertTriangle, Shield } from 'lucide-react';

const IncendiePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Fire Theme */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-500/20 text-red-100 border-red-400 mb-6">
              Sécurité Incendie
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Prévention et Lutte Contre l'Incendie
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Protégez votre site et vos équipes contre les risques d'incendie
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>3 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Débutant à Intermédiaire</span>
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
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <Flame className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Cette formation essentielle vous enseigne les techniques de prévention, détection 
                    et lutte contre l'incendie dans un environnement minier. Apprenez à identifier 
                    les risques, utiliser les équipements de sécurité et réagir efficacement en cas d'urgence.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Triangle du feu et combustion",
                      "Types d'incendies et classes",
                      "Systèmes de détection",
                      "Extincteurs et leur utilisation",
                      "Systèmes d'extinction automatique",
                      "Évacuation d'urgence",
                      "Prévention des risques",
                      "Intervention première urgence"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Procedures */}
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Procédures d'Urgence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Alerte et communication d'urgence",
                      "Techniques d'évacuation sécurisée",
                      "Utilisation des équipements de lutte",
                      "Coordination avec les secours externes"
                    ].map((procedure, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{procedure}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Course Info Sidebar */}
            <div className="space-y-6">
              
              {/* Enrollment Card */}
              <Card className="border-red-200 shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">1.200.000FG</div>
                    <p className="text-gray-600">Prix de la formation</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-medium">3 Semaines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau:</span>
                      <span className="font-medium">Débutant à Intermédiaire</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Présentiel + Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Sécurité Incendie</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-red-200 text-red-700 hover:bg-red-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Formation sécurité de base</li>
                    <li>• Aptitude physique</li>
                    <li>• Capacité de réaction rapide</li>
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

export default IncendiePage;
