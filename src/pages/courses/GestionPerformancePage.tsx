import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Book, ArrowLeft, BarChart, TrendingUp, Target } from 'lucide-react';

const GestionPerformancePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Performance Management Theme */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-emerald-500/20 text-emerald-100 border-emerald-400 mb-6">
              Gestion des Opérations
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gestion de la Performance
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              Optimisez les performances opérationnelles et humaines dans l'industrie minière
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>3 Semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Avancé</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Certification Performance</span>
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
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    Aperçu du Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Formation avancée en gestion de la performance pour managers et superviseurs. 
                    Apprenez les KPI miniers, tableaux de bord, évaluation des équipes 
                    et stratégies d'amélioration continue.
                  </p>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-800">Programme de Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "KPI et indicateurs miniers",
                      "Tableaux de bord",
                      "Évaluation des performances",
                      "Entretiens d'évaluation",
                      "Plans d'amélioration",
                      "Motivation des équipes",
                      "Benchmarking",
                      "Amélioration continue"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Compétences Développées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Analyse des performances opérationnelles",
                      "Mise en place de systèmes de mesure",
                      "Conduite d'entretiens d'évaluation",
                      "Développement des talents"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
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
              <Card className="border-emerald-200 shadow-lg">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-emerald-800">Informations</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">2.200.000FG</div>
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
                      <span className="font-medium">Avancé</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Théorique + Cas pratiques</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Gestion Performance</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    S'inscrire Maintenant
                  </Button>
                  
                  <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                    Demander des Informations
                  </Button>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-800">Prérequis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Poste de supervision ou management</li>
                    <li>• Expérience encadrement 3+ ans</li>
                    <li>• Formation leadership recommandée</li>
                    <li>• Connaissances analytiques</li>
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

export default GestionPerformancePage;
