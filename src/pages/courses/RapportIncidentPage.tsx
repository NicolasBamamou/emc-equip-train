import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, AlertTriangle, FileText, Users2 } from 'lucide-react';

const RapportIncidentPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Incident Reporting Theme */}
      <section className="bg-gradient-to-r from-red-700 to-orange-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-500/20 text-red-100 border-red-400 mb-6">
              Sécurité & Documentation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Rapport d'Incident et Investigation
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Maîtrisez la documentation et l'investigation des incidents de sécurité
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
                <span>Certification Investigation</span>
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
                    <AlertTriangle className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation spécialisée en documentation et investigation d'incidents. 
                    Apprenez à rédiger des rapports précis, mener des enquêtes efficaces 
                    et identifier les causes racines pour prévenir les récidives.
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
                      "Types d'incidents et classification",
                      "Procédures de signalement",
                      "Techniques d'investigation",
                      "Analyse des causes racines",
                      "Rédaction de rapports",
                      "Collecte de preuves",
                      "Entretiens avec témoins",
                      "Mesures correctives"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Investigation Process */}
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Processus d'Investigation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Sécurisation immédiate de la zone",
                      "Documentation photographique et mesures",
                      "Collecte de témoignages objectifs",
                      "Analyse systématique des causes"
                    ].map((process, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Users2 className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{process}</span>
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
                    <div className="text-3xl font-bold text-red-600 mb-2">1.100.000FG</div>
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
                      <span className="font-medium">Théorique + Cas Pratiques</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Investigation</span>
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
                    <li>• Expérience terrain recommandée</li>
                    <li>• Capacités rédactionnelles</li>
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

export default RapportIncidentPage;
