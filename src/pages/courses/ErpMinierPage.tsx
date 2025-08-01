import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Building2, DollarSign, Users2, BarChart3, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErpMinierPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/emc-equip-train/images/CEO.jpg"
              alt="ERP Minier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-indigo-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-700">
                Gestion des Opérations Minières & Systèmes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Introduction à l'ERP Minier
                <span className="text-indigo-400"> (SAP, Oracle, etc.)</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Explorez les systèmes ERP adaptés à l'industrie minière et leur intégration 
                dans la gestion globale des opérations d'entreprise.
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
                  <span className="font-semibold">4.000.000FG</span>
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
                    Maîtrisez les ERP de Nouvelle Génération
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Les systèmes ERP (Enterprise Resource Planning) sont le backbone digital des 
                    entreprises minières modernes. Cette formation vous initie aux solutions ERP 
                    leaders du marché adaptées aux spécificités de l'industrie minière.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-sm font-medium">Gestion intégrée</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Comptabilité minière</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Users2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Gestion RH</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Business Intelligence</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                        Modules ERP Spécialisés
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Modules ERP spécifiques aux mines</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Intégration des processus métier</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Gestion financière et comptabilité minière</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Reporting et business intelligence</span>
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
                  { week: "Semaine 1", topic: "Introduction ERP", details: "Concepts, architecture et écosystème ERP minier" },
                  { week: "Semaine 2", topic: "Modules Core", details: "Finance, comptabilité et gestion des ressources" },
                  { week: "Semaine 3", topic: "Modules Spécialisés", details: "Production, qualité et conformité minière" },
                  { week: "Semaine 4", topic: "Intégrations", details: "Interfaces et flux de données inter-systèmes" },
                  { week: "Semaine 5", topic: "BI & Analytics", details: "Reporting avancé et tableaux de bord décisionnels" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-indigo-600">
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

        {/* Solutions ERP */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Solutions ERP Étudiées</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "SAP S/4HANA",
                    description: "Solution intégrée avec modules spécialisés pour l'industrie minière",
                    features: ["Module MM", "Module FI/CO", "Module PM", "Analytics en temps réel"],
                    color: "border-blue-500"
                  },
                  {
                    name: "Oracle Cloud ERP",
                    description: "Platform cloud native avec capacités d'intelligence artificielle",
                    features: ["Oracle Fusion", "Oracle Analytics", "Gestion des risques", "Conformité réglementaire"],
                    color: "border-red-500"
                  },
                  {
                    name: "Microsoft Dynamics 365",
                    description: "Écosystème intégré avec Power Platform pour l'analyse",
                    features: ["Finance & Operations", "Supply Chain", "Power BI", "Intégration Office 365"],
                    color: "border-green-500"
                  }
                ].map((solution, index) => (
                  <Card key={index} className={`border-t-4 ${solution.color}`}>
                    <CardHeader>
                      <CardTitle>{solution.name}</CardTitle>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Processus métier */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Processus Métier Couverts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: DollarSign,
                    title: "Finance & Comptabilité",
                    items: ["Comptabilité analytique", "Gestion budgétaire", "Reporting financier", "Contrôle de gestion"],
                    color: "text-green-600"
                  },
                  {
                    icon: Users2,
                    title: "Ressources Humaines",
                    items: ["Gestion des talents", "Paie et avantages", "Formation et développement", "Sécurité au travail"],
                    color: "text-blue-600"
                  },
                  {
                    icon: Building2,
                    title: "Gestion des Actifs",
                    items: ["Immobilisations", "Maintenance d'actifs", "Cycle de vie équipements", "Amortissements"],
                    color: "text-purple-600"
                  },
                  {
                    icon: BarChart3,
                    title: "Production & Qualité",
                    items: ["Planification production", "Contrôle qualité", "Traçabilité matières", "Conformité réglementaire"],
                    color: "text-orange-600"
                  },
                  {
                    icon: Database,
                    title: "Supply Chain",
                    items: ["Achats et approvisionnements", "Gestion des stocks", "Logistique", "Relation fournisseurs"],
                    color: "text-indigo-600"
                  },
                  {
                    icon: Layers,
                    title: "Business Intelligence",
                    items: ["Tableaux de bord", "Analyse prédictive", "KPIs opérationnels", "Reporting réglementaire"],
                    color: "text-teal-600"
                  }
                ].map((process, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <process.icon className={`w-5 h-5 mr-2 ${process.color}`} />
                        {process.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {process.items.map((item, idx) => (
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

        {/* Profil des formateurs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nos Experts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Layers className="w-12 h-12 text-indigo-600" />
                    </div>
                    <CardTitle>Dr. Ibrahima Sow</CardTitle>
                    <CardDescription>Consultant ERP Senior</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      20 ans d'expérience en déploiement d'ERP dans l'industrie minière. 
                      Expert SAP S/4HANA et Oracle Cloud avec certifications internationales.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-purple-600" />
                    </div>
                    <CardTitle>Mme. Ramata Diallo</CardTitle>
                    <CardDescription>Spécialiste Business Intelligence</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      Experte en analytics et reporting ERP. 15 ans d'expérience en conception 
                      de solutions décisionnelles pour l'industrie extractive.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Certification</h2>
              <p className="text-xl text-gray-700 mb-8">
                <strong>Certificat ERP Minier</strong>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cette certification atteste de votre compréhension des systèmes ERP adaptés à 
                l'industrie minière et de votre capacité à les utiliser efficacement.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Digitalisez Votre Entreprise Minière</h2>
              <p className="text-gray-700 text-lg mb-8">
                Rejoignez cette formation avancée et maîtrisez les systèmes ERP qui transforment 
                la gestion des entreprises minières modernes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700">
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

export default ErpMinierPage;
