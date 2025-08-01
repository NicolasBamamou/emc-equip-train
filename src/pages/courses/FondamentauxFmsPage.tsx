import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Monitor, Wifi, BarChart3, Settings, Activity, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const FondamentauxFmsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/teaminfo.jpg"
              alt="Systèmes FMS"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-blue-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
                Gestion des Opérations Minières & Systèmes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Fondamentaux des Systèmes de 
                <span className="text-blue-400"> Gestion de Flotte (FMS)</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Découvrez les systèmes FMS et leur rôle central dans la gestion moderne 
                des opérations minières automatisées et optimisées.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">4 Semaines</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Intermédiaire</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">3.200.000FG</span>
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
                    Maîtrisez les Systèmes FMS Modernes
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Les systèmes de gestion de flotte (FMS) sont au cœur des opérations minières modernes. 
                    Cette formation vous donne une compréhension approfondie de leur architecture, 
                    fonctionnement et utilisation pour optimiser les performances opérationnelles.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Monitor className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Surveillance temps réel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Analytics avancées</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Wifi className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Connectivité IoT</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Settings className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-sm font-medium">Configuration avancée</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Database className="w-5 h-5 mr-2 text-blue-600" />
                        Architecture Système FMS
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Architecture des systèmes FMS</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Configuration et paramétrage</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Surveillance en temps réel</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Génération de rapports et analytics</span>
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
                  { week: "Semaine 1", topic: "Architecture FMS", details: "Composants, infrastructure et technologies de base" },
                  { week: "Semaine 2", topic: "Configuration", details: "Paramétrage système, utilisateurs et permissions" },
                  { week: "Semaine 3", topic: "Opérations", details: "Surveillance temps réel, alertes et notifications" },
                  { week: "Semaine 4", topic: "Analytiques", details: "Rapports, dashboards et optimisation des performances" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-600">
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

        {/* Modules FMS */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Modules FMS Étudiés</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Activity,
                    title: "Tracking & Localisation",
                    description: "Suivi GPS temps réel des équipements et optimisation des trajectoires",
                    color: "text-blue-600"
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Monitoring",
                    description: "Surveillance des KPIs opérationnels et alertes automatiques",
                    color: "text-green-600"
                  },
                  {
                    icon: Settings,
                    title: "Maintenance Management",
                    description: "Planification et suivi de la maintenance préventive",
                    color: "text-purple-600"
                  },
                  {
                    icon: Database,
                    title: "Data Analytics",
                    description: "Analyse des données historiques et prédictives",
                    color: "text-indigo-600"
                  },
                  {
                    icon: Monitor,
                    title: "Control Center",
                    description: "Centre de contrôle centralisé et tableaux de bord",
                    color: "text-orange-600"
                  },
                  {
                    icon: Wifi,
                    title: "Communication",
                    description: "Systèmes de communication et notifications",
                    color: "text-teal-600"
                  }
                ].map((module, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <module.icon className={`w-5 h-5 mr-2 ${module.color}`} />
                        {module.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compétences techniques */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Compétences Techniques</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Configuration Système</h3>
                  {[
                    "Installation et configuration initiale",
                    "Paramétrage des équipements et zones",
                    "Configuration des utilisateurs et droits d'accès"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Opérations & Analytics</h3>
                  {[
                    "Surveillance temps réel des opérations",
                    "Génération de rapports personnalisés", 
                    "Analyse des données et optimisation"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{skill}</span>
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
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Database className="w-12 h-12 text-blue-600" />
                    </div>
                    <CardTitle>Dr. Ousmane Kaba</CardTitle>
                    <CardDescription>Expert Systèmes FMS</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      15 ans d'expérience en déploiement et optimisation de systèmes FMS. 
                      Spécialiste des solutions Modular Mining, Caterpillar MineStar et Komatsu FrontRunner.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-green-600" />
                    </div>
                    <CardTitle>Ing. Mariam Conde</CardTitle>
                    <CardDescription>Spécialiste Data Analytics</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      Experte en analyse de données FMS et optimisation des performances. 
                      10 ans d'expérience en business intelligence pour l'industrie minière.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Certification</h2>
              <p className="text-xl text-gray-700 mb-8">
                <strong>Certificat FMS Opérateur</strong>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cette certification atteste de votre maîtrise des fondamentaux des systèmes de gestion 
                de flotte et de votre capacité à les configurer et utiliser efficacement.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Maîtrisez les Technologies FMS</h2>
              <p className="text-gray-700 text-lg mb-8">
                Rejoignez cette formation essentielle et développez vos compétences dans les systèmes 
                qui transforment les opérations minières modernes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
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

export default FondamentauxFmsPage;
