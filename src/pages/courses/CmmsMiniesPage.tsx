import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Wrench, Calendar, Package, FileText, AlertTriangle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CmmsMiniesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/Secretary.jpg"
              alt="CMMS Minier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-purple-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <Badge className="mb-4 bg-purple-600 hover:bg-purple-700">
                Gestion des Opérations Minières & Systèmes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                CMMS (GMAO) pour les 
                <span className="text-purple-400"> Mines</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Maîtrisez l'utilisation des systèmes CMMS/GMAO spécifiquement adaptés aux besoins 
                de maintenance dans l'industrie minière.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">3 Semaines</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Intermédiaire</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">2.600.000FG</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-primary">
                    Optimisez la Maintenance avec CMMS
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Les systèmes CMMS (Computerized Maintenance Management System) ou GMAO (Gestion de 
                    Maintenance Assistée par Ordinateur) sont essentiels pour optimiser la maintenance 
                    des équipements miniers. Cette formation vous apprend à les utiliser efficacement.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Wrench className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Maintenance préventive</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Planification optimale</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Package className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Gestion des stocks</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-sm font-medium">Optimisation continue</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-purple-600" />
                        Modules CMMS Essentiels
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Principes des systèmes CMMS</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Gestion des ordres de travail</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Planification de la maintenance</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Gestion des stocks et pièces détachées</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme de formation */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Programme de Formation</h2>
              <div className="grid gap-6">
                {[
                  { week: "Semaine 1", topic: "Fondamentaux CMMS", details: "Principes, architecture et modules de base" },
                  { week: "Semaine 2", topic: "Gestion Opérationnelle", details: "Ordres de travail, planification et ressources" },
                  { week: "Semaine 3", topic: "Optimisation", details: "Stocks, reporting et amélioration continue" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-600">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{item.week}</CardTitle>
                        <Badge variant="outline">{item.topic}</Badge>
                      </div>
                      <CardDescription className="text-base">{item.details}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités CMMS */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Fonctionnalités CMMS Maîtrisées</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Ordres de Travail",
                    description: "Création, planification et suivi des interventions de maintenance",
                    color: "text-purple-600"
                  },
                  {
                    icon: Calendar,
                    title: "Planification",
                    description: "Calendrier de maintenance préventive et gestion des ressources",
                    color: "text-blue-600"
                  },
                  {
                    icon: Package,
                    title: "Gestion Stocks",
                    description: "Inventaire, commandes et suivi des pièces détachées",
                    color: "text-green-600"
                  },
                  {
                    icon: AlertTriangle,
                    title: "Gestion Pannes",
                    description: "Enregistrement et analyse des défaillances équipements",
                    color: "text-red-600"
                  },
                  {
                    icon: TrendingUp,
                    title: "Reporting",
                    description: "Tableaux de bord et indicateurs de performance maintenance",
                    color: "text-orange-600"
                  },
                  {
                    icon: Wrench,
                    title: "Assets Management",
                    description: "Gestion du cycle de vie des équipements et actifs",
                    color: "text-indigo-600"
                  }
                ].map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <feature.icon className={`w-5 h-5 mr-2 ${feature.color}`} />
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflows CMMS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Workflows de Maintenance</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Maintenance Préventive</h3>
                  {[
                    "Configuration des gammes de maintenance",
                    "Planification automatique des interventions",
                    "Attribution des ressources et compétences"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-semibold text-purple-600">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Maintenance Corrective</h3>
                  {[
                    "Signalement et création d'ordre de travail",
                    "Diagnostic et allocation des ressources", 
                    "Exécution et retour d'expérience"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-xs font-semibold text-red-600">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profil des formateurs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nos Experts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Wrench className="w-12 h-12 text-purple-600" />
                    </div>
                    <CardTitle>Ing. Alpha Bah</CardTitle>
                    <CardDescription>Expert CMMS & Maintenance</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      18 ans d'expérience en systèmes CMMS dans l'industrie minière. 
                      Spécialiste SAP PM, Maximo et solutions de maintenance spécialisées.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-orange-600" />
                    </div>
                    <CardTitle>Dr. Fatoumata Sylla</CardTitle>
                    <CardDescription>Spécialiste Optimisation Maintenance</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      Experte en optimisation des stratégies de maintenance et analytics. 
                      12 ans d'expérience en amélioration continue et KPIs maintenance.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Certification</h2>
              <p className="text-xl text-gray-700 mb-8">
                <strong>Certificat CMMS Minier</strong>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cette certification atteste de votre maîtrise des systèmes CMMS spécifiquement 
                adaptés aux besoins de maintenance de l'industrie minière.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Révolutionnez Votre Maintenance</h2>
              <p className="text-gray-700 text-lg mb-8">
                Rejoignez cette formation spécialisée et maîtrisez les outils CMMS pour optimiser 
                la maintenance de vos équipements miniers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link to="/admissions">S'inscrire maintenant</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Demander plus d'informations</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CmmsMiniesPage;
