import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Wifi, Smartphone, Satellite, Radio, Zap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const TelematiqueIotPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/emc-equip-train/images/Loader operating.jpg"
              alt="Télématique et IoT"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-blue-900/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-cyan-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <Badge className="mb-4 bg-cyan-600 hover:bg-cyan-700">
                Gestion des Opérations Minières & Systèmes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Télématique, IoT et Données 
                <span className="text-cyan-400"> Temps Réel en Logistique Minière</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Explorez les technologies IoT et de télématique pour le suivi en temps réel 
                des opérations et l'optimisation logistique minière.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">4 Semaines</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Avancé</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">3.500.000FG</span>
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
                    L'Avenir Connecté des Mines
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    L'Internet des Objets (IoT) et la télématique révolutionnent les opérations minières. 
                    Cette formation avancée vous initie aux technologies de connectivité et de surveillance 
                    temps réel pour optimiser la logistique et les performances opérationnelles.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                        <Wifi className="w-4 h-4 text-cyan-600" />
                      </div>
                      <span className="text-sm font-medium">Connectivité universelle</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Activity className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Surveillance temps réel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Réactivité instantanée</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Applications mobiles</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Satellite className="w-5 h-5 mr-2 text-cyan-600" />
                        Technologies IoT Minières
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Technologies IoT en environnement minier</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Capteurs et transmission de données</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Analyse de données en temps réel</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Applications en logistique minière</span>
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
                  { week: "Semaine 1", topic: "Fondamentaux IoT", details: "Technologies, protocoles et architecture IoT minière" },
                  { week: "Semaine 2", topic: "Capteurs & Télématique", details: "Systèmes de capteurs et transmission de données" },
                  { week: "Semaine 3", topic: "Traitement Temps Réel", details: "Analytics en temps réel et edge computing" },
                  { week: "Semaine 4", topic: "Applications Logistiques", details: "Use cases et optimisation des opérations" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-cyan-600">
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

        {/* Technologies IoT */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Écosystème IoT & Télématique</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Wifi,
                    title: "Réseaux de Communication",
                    items: ["5G/LTE", "LoRaWAN", "Mesh Networks", "Satellite"],
                    color: "text-cyan-600"
                  },
                  {
                    icon: Activity,
                    title: "Capteurs Industriels",
                    items: ["GPS/GNSS", "Accéléromètres", "Capteurs environnementaux", "Caméras intelligentes"],
                    color: "text-blue-600"
                  },
                  {
                    icon: Zap,
                    title: "Edge Computing",
                    items: ["Traitement local", "IA embarquée", "Filtrage données", "Latence réduite"],
                    color: "text-green-600"
                  },
                  {
                    icon: Smartphone,
                    title: "Interfaces Utilisateur",
                    items: ["Applications mobiles", "Dashboards web", "AR/VR", "Interfaces vocales"],
                    color: "text-purple-600"
                  },
                  {
                    icon: Radio,
                    title: "Protocoles IoT",
                    items: ["MQTT", "CoAP", "HTTP/REST", "OPC-UA"],
                    color: "text-orange-600"
                  },
                  {
                    icon: Satellite,
                    title: "Cloud & Analytics",
                    items: ["Cloud platforms", "Machine learning", "Predictive analytics", "Data lakes"],
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
                      <ul className="space-y-1">
                        {tech.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications pratiques */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Applications Pratiques</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Surveillance Opérationnelle</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Tracking d'équipements",
                        description: "Localisation GPS temps réel et géofencing intelligent"
                      },
                      {
                        title: "Monitoring des performances",
                        description: "Surveillance continue des KPIs opérationnels"
                      },
                      {
                        title: "Maintenance prédictive",
                        description: "Analyse des vibrations et températures pour anticiper les pannes"
                      },
                      {
                        title: "Sécurité du personnel",
                        description: "Wearables et détection d'incidents en temps réel"
                      }
                    ].map((app, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardHeader>
                          <CardTitle className="text-lg">{app.title}</CardTitle>
                          <CardDescription>{app.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Optimisation Logistique</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Gestion de flotte intelligente",
                        description: "Optimisation des trajets et allocation dynamique des ressources"
                      },
                      {
                        title: "Inventory management",
                        description: "Suivi automatique des stocks et réapprovisionnement"
                      },
                      {
                        title: "Contrôle environnemental",
                        description: "Surveillance de la qualité de l'air et conditions météo"
                      },
                      {
                        title: "Automatisation des processus",
                        description: "Déclenchement automatique d'actions basées sur les données"
                      }
                    ].map((app, index) => (
                      <Card key={index} className="border-l-4 border-l-green-500">
                        <CardHeader>
                          <CardTitle className="text-lg">{app.title}</CardTitle>
                          <CardDescription>{app.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
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
                    <div className="w-24 h-24 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Wifi className="w-12 h-12 text-cyan-600" />
                    </div>
                    <CardTitle>Dr. Abdoulaye Camara</CardTitle>
                    <CardDescription>Expert IoT & Télématique</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      15 ans d'expérience en déploiement de solutions IoT industrielles. 
                      Spécialiste des réseaux LPWAN et edge computing pour l'industrie minière.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Activity className="w-12 h-12 text-blue-600" />
                    </div>
                    <CardTitle>Ing. Kadiatou Sylla</CardTitle>
                    <CardDescription>Spécialiste Analytics Temps Réel</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      Experte en traitement de données temps réel et machine learning. 
                      10 ans d'expérience en analytics pour l'optimisation opérationnelle.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 bg-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Certification</h2>
              <p className="text-xl text-gray-700 mb-8">
                <strong>Certificat IoT et Télématique Minière</strong>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cette certification atteste de votre maîtrise des technologies IoT et télématique 
                appliquées aux opérations minières et à l'optimisation logistique.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Connectez Vos Opérations au Futur</h2>
              <p className="text-gray-700 text-lg mb-8">
                Rejoignez cette formation de pointe et maîtrisez les technologies qui transforment 
                les opérations minières en écosystèmes intelligents et connectés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-cyan-600 hover:bg-cyan-700">
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

export default TelematiqueIotPage;
