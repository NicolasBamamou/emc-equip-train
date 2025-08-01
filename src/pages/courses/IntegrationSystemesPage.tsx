import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Network, Zap, Database, Workflow, Share2, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntegrationSystemesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/team.jpg"
              alt="Intégration des Systèmes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-cyan-900/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-teal-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <Badge className="mb-4 bg-teal-600 hover:bg-teal-700">
                Gestion des Opérations Minières & Systèmes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Intégration FMS, CMMS, ERP &
                <span className="text-teal-400"> Outils de Planification Minière</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Apprenez à intégrer les différents systèmes informatiques miniers pour créer 
                un écosystème numérique cohérent et performant.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">5 Semaines</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Avancé</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">4.200.000FG</span>
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
                    Créez un Écosystème Digital Intégré
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    L'intégration des systèmes informatiques est cruciale pour optimiser les opérations 
                    minières. Cette formation avancée vous enseigne les meilleures pratiques pour 
                    interconnecter FMS, CMMS, ERP et outils de planification.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                        <Network className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-sm font-medium">Interconnexion systèmes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Flux temps réel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Database className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Cohérence des données</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Workflow className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Automatisation processus</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Share2 className="w-5 h-5 mr-2 text-teal-600" />
                        Architecture d'Intégration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Architecture d'intégration des systèmes</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Flux de données inter-systèmes</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">APIs et interfaces de communication</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Gestion de la cohérence des données</span>
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
                  { week: "Semaine 1", topic: "Architecture", details: "Concepts d'intégration et architecture systèmes" },
                  { week: "Semaine 2", topic: "Interfaces", details: "APIs, webservices et protocoles de communication" },
                  { week: "Semaine 3", topic: "Flux de Données", details: "Mapping, transformation et synchronisation" },
                  { week: "Semaine 4", topic: "Middleware", details: "ESB, ETL et plateformes d'intégration" },
                  { week: "Semaine 5", topic: "Gouvernance", details: "Qualité des données et gestion des erreurs" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-teal-600">
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

        {/* Systèmes intégrés */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Écosystème d'Intégration</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    system: "FMS",
                    title: "Fleet Management System",
                    description: "Données temps réel des équipements et tracking GPS",
                    integrations: ["Localisation", "Performance", "Consommation", "Maintenance"],
                    color: "bg-blue-50 border-blue-200"
                  },
                  {
                    system: "CMMS",
                    title: "Maintenance Management",
                    description: "Planification et suivi de la maintenance",
                    integrations: ["Ordres de travail", "Planification", "Stocks", "Historiques"],
                    color: "bg-purple-50 border-purple-200"
                  },
                  {
                    system: "ERP",
                    title: "Enterprise Resource Planning",
                    description: "Gestion intégrée des ressources d'entreprise",
                    integrations: ["Finance", "RH", "Achats", "Comptabilité"],
                    color: "bg-indigo-50 border-indigo-200"
                  },
                  {
                    system: "PLANNING",
                    title: "Mine Planning Tools",
                    description: "Outils de planification et design minier",
                    integrations: ["Surpac", "Datamine", "Vulcan", "AutoCAD"],
                    color: "bg-green-50 border-green-200"
                  }
                ].map((sys, index) => (
                  <Card key={index} className={`${sys.color} border-2`}>
                    <CardHeader>
                      <Badge className="w-fit mb-2">{sys.system}</Badge>
                      <CardTitle className="text-lg">{sys.title}</CardTitle>
                      <CardDescription>{sys.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {sys.integrations.map((integration, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {integration}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies d'intégration */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Technologies et Méthodes</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Network,
                    title: "APIs & Web Services",
                    description: "REST, SOAP, GraphQL pour l'interconnexion des systèmes",
                    color: "text-teal-600"
                  },
                  {
                    icon: Database,
                    title: "ETL & Data Pipelines",
                    description: "Extract, Transform, Load pour la synchronisation des données",
                    color: "text-blue-600"
                  },
                  {
                    icon: Workflow,
                    title: "Enterprise Service Bus",
                    description: "Middleware pour orchestrer les communications",
                    color: "text-purple-600"
                  },
                  {
                    icon: Zap,
                    title: "Événements Temps Réel",
                    description: "Message queues et streaming pour la réactivité",
                    color: "text-orange-600"
                  },
                  {
                    icon: Settings,
                    title: "Configuration Management",
                    description: "Gestion des paramètres et déploiements",
                    color: "text-green-600"
                  },
                  {
                    icon: Share2,
                    title: "Data Governance",
                    description: "Qualité, sécurité et cohérence des données",
                    color: "text-indigo-600"
                  }
                ].map((tech, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <tech.icon className={`w-5 h-5 mr-2 ${tech.color}`} />
                        {tech.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cas d'usage */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Cas d'Usage Pratiques</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Intégration Opérationnelle</h3>
                  {[
                    "Synchronisation FMS → CMMS pour maintenance prédictive",
                    "Flux ERP → Planification pour optimisation des coûts",
                    "Consolidation des données pour tableaux de bord unifiés"
                  ].map((usecase, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{usecase}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Automatisation des Processus</h3>
                  {[
                    "Création automatique d'ordres de travail", 
                    "Approvisionnement automatique des pièces",
                    "Reporting automatisé multi-systèmes"
                  ].map((usecase, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{usecase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profil des formateurs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nos Experts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Network className="w-12 h-12 text-teal-600" />
                    </div>
                    <CardTitle>Ing. Mohamed Cissé</CardTitle>
                    <CardDescription>Architecte Solutions d'Intégration</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      18 ans d'expérience en architecture d'intégration pour l'industrie minière. 
                      Expert en ESB, APIs et solutions middleware pour ecosystèmes complexes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Database className="w-12 h-12 text-blue-600" />
                    </div>
                    <CardTitle>Dr. Aminata Traoré</CardTitle>
                    <CardDescription>Spécialiste Data Integration</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      Experte en gouvernance des données et architectures ETL. 
                      15 ans d'expérience en intégration de données pour l'industrie extractive.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Certification</h2>
              <p className="text-xl text-gray-700 mb-8">
                <strong>Certificat d'Intégration Systèmes Miniers</strong>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cette certification atteste de votre expertise en intégration de systèmes informatiques 
                miniers et de votre capacité à créer des écosystèmes digitaux cohérents.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Créez l'Écosystème Digital de Demain</h2>
              <p className="text-gray-700 text-lg mb-8">
                Rejoignez cette formation avancée et maîtrisez l'art de l'intégration des systèmes 
                pour transformer les opérations minières.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
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

export default IntegrationSystemesPage;
