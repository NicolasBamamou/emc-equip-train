import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Clock, Users, Award, Star } from 'lucide-react';

const MaintenancePreventivePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
              Maintenance Industrielle
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Maintenance Préventive
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Maîtrisez les techniques de maintenance préventive pour optimiser la durée de vie et 
              les performances de vos équipements miniers
            </p>
          </div>
          
          {/* Course Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-emerald-600" />
                <div className="text-2xl font-bold text-emerald-600 mb-1">40h</div>
                <div className="text-gray-600 text-sm">Durée totale</div>
              </CardContent>
            </Card>
            <Card className="border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-teal-600" />
                <div className="text-2xl font-bold text-teal-600 mb-1">15</div>
                <div className="text-gray-600 text-sm">Participants max</div>
              </CardContent>
            </Card>
            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-green-600 mb-1">Certifié</div>
                <div className="text-gray-600 text-sm">Formation</div>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 mx-auto mb-3 text-emerald-600" />
                <div className="text-2xl font-bold text-emerald-600 mb-1">4.9/5</div>
                <div className="text-gray-600 text-sm">Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white border-emerald-200">
              <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-700">
                Aperçu
              </TabsTrigger>
              <TabsTrigger value="program" className="data-[state=active]:bg-teal-100 data-[state=active]:text-teal-700">
                Programme
              </TabsTrigger>
              <TabsTrigger value="prerequisites" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
                Prérequis
              </TabsTrigger>
              <TabsTrigger value="certification" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-700">
                Certification
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-emerald-200 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-lg">
                    <CardTitle>Objectifs de la Formation</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Planifier et mettre en œuvre des programmes de maintenance préventive</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Analyser les modes de défaillance et leurs causes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Optimiser les coûts de maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Utiliser les technologies de surveillance prédictive</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-teal-200 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-t-lg">
                    <CardTitle>Points Forts</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Formation pratique sur équipements réels</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Études de cas de l'industrie minière</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Outils de diagnostic modernes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Certification internationalement reconnue</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="program">
              <div className="space-y-6">
                <Card className="border-emerald-200 shadow-lg">
                  <CardHeader className="bg-emerald-50">
                    <CardTitle className="text-emerald-700">Module 1: Fondamentaux de la Maintenance</CardTitle>
                    <CardDescription>Introduction aux concepts de base</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      Types de maintenance, stratégies de maintenance, analyse économique et 
                      planification des interventions préventives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-teal-200 shadow-lg">
                  <CardHeader className="bg-teal-50">
                    <CardTitle className="text-teal-700">Module 2: Analyse et Diagnostic</CardTitle>
                    <CardDescription>Techniques d'analyse avancées</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      AMDEC, analyse vibratoire, thermographie, analyse d'huile et 
                      techniques de surveillance conditionnelle.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 shadow-lg">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-700">Module 3: Planification et Ordonnancement</CardTitle>
                    <CardDescription>Optimisation des ressources</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      GMAO, planification des arrêts, gestion des stocks de pièces de rechange 
                      et optimisation des coûts de maintenance.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="prerequisites">
              <Card className="border-emerald-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-lg">
                  <CardTitle>Prérequis et Public Cible</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-emerald-700 mb-2">Formation requise:</h3>
                    <p className="text-gray-600">Niveau technique ou formation en mécanique/électromécanique</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-700 mb-2">Expérience:</h3>
                    <p className="text-gray-600">2+ années d'expérience en maintenance industrielle recommandées</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Public cible:</h3>
                    <p className="text-gray-600">
                      Techniciens de maintenance, superviseurs, responsables maintenance, 
                      ingénieurs mécaniciens
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certification">
              <Card className="border-emerald-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-lg">
                  <CardTitle>Certification et Évaluation</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-emerald-700 mb-2">Modalités d'évaluation:</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Évaluation théorique (40%)</li>
                      <li>• Évaluation pratique (40%)</li>
                      <li>• Projet de groupe (20%)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-700 mb-2">Certification:</h3>
                    <p className="text-gray-600">
                      Certificat de spécialisation en Maintenance Préventive délivré par 
                      Ecomine Formation Center
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Validité:</h3>
                    <p className="text-gray-600">Certification valide 3 ans avec possibilité de renouvellement</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à optimiser vos compétences en maintenance ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez notre programme de formation en maintenance préventive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              S'inscrire maintenant
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Télécharger la brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaintenancePreventivePage;
