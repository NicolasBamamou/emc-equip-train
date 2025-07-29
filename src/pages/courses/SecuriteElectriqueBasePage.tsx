import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Zap, Computer, Cpu } from 'lucide-react';

const SecuriteElectriqueBasePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Electrical Safety Theme */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-500/20 text-blue-100 border-blue-400 mb-6">
              Électricité & Sécurité
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sécurité Électrique de Base
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Fondamentaux de la sécurité électrique dans l'industrie minière
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>3 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Débutant</span>
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
                    Formation fondamentale en sécurité électrique pour les environnements miniers. 
                    Apprenez les risques électriques, les mesures de prévention et les protocoles 
                    de sécurité essentiels pour travailler en toute sécurité.
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
                      "Principes de l'électricité",
                      "Risques et dangers électriques",
                      "Équipements de protection",
                      "Procédures de consignation",
                      "Premiers secours électriques",
                      "Réglementation et normes",
                      "Outils de mesure sécurisés",
                      "Prévention des accidents"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Safety Procedures */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Computer className="h-5 w-5" />
                    Procédures de Sécurité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Vérification absence de tension (VAT)",
                      "Mise en sécurité des installations",
                      "Utilisation correcte des EPI électriques",
                      "Protocoles d'intervention d'urgence"
                    ].map((procedure, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Cpu className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-blue-200 shadow-lg">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1.500.000FG</div>
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
                      <span className="font-medium">Débutant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Théorique + Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Sécurité Électrique</span>
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
                    <li>• Aucun prérequis technique</li>
                    <li>• Formation sécurité générale</li>
                    <li>• Certificat médical requis</li>
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

export default SecuriteElectriqueBasePage;
