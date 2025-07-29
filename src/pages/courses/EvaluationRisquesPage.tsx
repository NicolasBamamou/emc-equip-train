import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, Search, Target, CheckCircle } from 'lucide-react';

const EvaluationRisquesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Purple Theme */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-purple-500/20 text-purple-100 border-purple-400 mb-6">
              Gestion des Risques
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Évaluation des Risques et Mesures de Contrôle
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Maîtrisez l'art d'identifier, évaluer et contrôler les risques professionnels
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
                <span>Certification Professionnelle</span>
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
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Cette formation avancée vous donne les compétences nécessaires pour mener des 
                    évaluations complètes des risques en milieu minier. Apprenez les méthodologies 
                    standardisées, les outils d'analyse et les stratégies de mitigation des risques.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Principes de gestion des risques",
                      "Méthodologies d'évaluation",
                      "Identification des dangers",
                      "Analyse probabiliste",
                      "Matrice des risques",
                      "Mesures de contrôle",
                      "Documentation et reporting",
                      "Suivi et révision"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Methodology */}
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Méthodologies Enseignées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Analyse des modes de défaillance (AMDEC)",
                      "Analyse par arbre de fautes (AAF)",
                      "Méthode HAZOP (Hazard and Operability)",
                      "Évaluation quantitative des risques (QRA)"
                    ].map((method, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{method}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Course Info Sidebar */}
            <div className="space-y-6">
              
              {/* Enrollment Card */}
              <Card className="border-purple-200 shadow-lg">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">2.000.000FG</div>
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
                      <span className="font-medium">Théorique + Pratique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Évaluateur Risques</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Formation sécurité de base</li>
                    <li>• Expérience en milieu industriel</li>
                    <li>• Notions de statistiques</li>
                    <li>• Capacités d'analyse</li>
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

export default EvaluationRisquesPage;
