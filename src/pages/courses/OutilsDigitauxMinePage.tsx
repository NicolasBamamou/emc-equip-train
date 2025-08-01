import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Tablet, 
  Settings, 
  Shield, 
  Target,
  Truck,
  Wrench,
  BarChart3,
  Monitor,
  Smartphone,
  Wifi,
  Database,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OutilsDigitauxMinePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/Loader operating.jpg"
              alt="Outils digitaux pour la mine"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/75"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-orange-200 mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="bg-orange-600 text-white px-4 py-2">
                  <Tablet className="w-4 h-4 mr-2" />
                  Technologies Minières
                </Badge>
                <Badge variant="secondary" className="bg-red-600 text-white px-4 py-2">
                  <Settings className="w-4 h-4 mr-2" />
                  Outils Digitaux
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Outils Digitaux pour la Mine
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
                Maîtrisez les outils numériques spécifiques utilisés dans les opérations minières modernes pour améliorer l'efficacité opérationnelle
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 mr-3" />
                  <span className="font-semibold">4 Semaines</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Users className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Intermédiaire</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Award className="w-5 h-5 mr-3" />
                  <span className="font-semibold">2.500.000FG</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">
                    La révolution digitale des opérations minières
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    L'industrie minière moderne s'appuie sur des technologies numériques avancées 
                    pour optimiser la productivité, assurer la sécurité et maintenir l'efficacité 
                    opérationnelle. Cette formation vous initiera aux outils digitaux essentiels 
                    utilisés sur le terrain.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <Tablet className="w-8 h-8 text-orange-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Tablettes FMS</h4>
                        <p className="text-sm text-gray-600">Gestion de flotte</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <Shield className="w-8 h-8 text-red-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Apps Sécurité</h4>
                        <p className="text-sm text-gray-600">Reporting incidents</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-8">
                  <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <Target className="w-6 h-6 mr-3" />
                        Objectifs d'apprentissage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {[
                          "Utilisation des tablettes FMS sur le terrain",
                          "Navigation dans les systèmes ERP miniers",
                          "Applications de sécurité et reporting",
                          "Maintenance numérique et check-lists digitales"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Tools Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Catégories d'outils digitaux</h2>
                <p className="text-xl text-gray-600">Technologies au service de l'efficacité minière</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: "FMS - Gestion de Flotte",
                    icon: <Truck className="w-10 h-10 text-blue-600" />,
                    tools: ["Tablettes terrain", "Tracking véhicules", "Allocation missions", "Performance opérateurs"],
                    color: "blue"
                  },
                  {
                    category: "ERP Minier",
                    icon: <Database className="w-10 h-10 text-green-600" />,
                    tools: ["SAP Mining", "Oracle solutions", "Gestion ressources", "Planification"],
                    color: "green"
                  },
                  {
                    category: "Sécurité & Reporting",
                    icon: <Shield className="w-10 h-10 text-red-600" />,
                    tools: ["Apps incidents", "Check-lists digitales", "Audit sécurité", "Conformité"],
                    color: "red"
                  },
                  {
                    category: "Maintenance",
                    icon: <Wrench className="w-10 h-10 text-purple-600" />,
                    tools: ["CMMS mobile", "Ordres de travail", "Inventaire pièces", "Historique équipements"],
                    color: "purple"
                  }
                ].map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">{category.icon}</div>
                      <h3 className="text-lg font-bold mb-4 text-gray-900">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.tools.map((tool, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                            {tool}
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

        {/* Weekly Program */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Programme de formation</h2>
                <p className="text-xl text-gray-600">Maîtrise progressive des outils digitaux miniers</p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    week: "Semaine 1",
                    title: "Tablettes FMS et Gestion de Flotte",
                    icon: <Tablet className="w-12 h-12 text-blue-600" />,
                    objectives: [
                      "Interface et navigation des tablettes FMS",
                      "Assignation et suivi des missions",
                      "Reporting temps réel des activités",
                      "Communication avec le dispatching",
                      "Gestion des alertes et notifications"
                    ]
                  },
                  {
                    week: "Semaine 2",
                    title: "Systèmes ERP Miniers",
                    icon: <Database className="w-12 h-12 text-green-600" />,
                    objectives: [
                      "Navigation dans l'interface ERP",
                      "Gestion des bons de travail",
                      "Consultation des stocks et inventaires",
                      "Suivi de la production et KPIs",
                      "Intégration avec autres systèmes"
                    ]
                  },
                  {
                    week: "Semaine 3",
                    title: "Applications de Sécurité et Reporting",
                    icon: <Shield className="w-12 h-12 text-red-600" />,
                    objectives: [
                      "Apps de déclaration d'incidents",
                      "Check-lists de sécurité digitales",
                      "Audit et inspection par tablette",
                      "Géolocalisation des événements",
                      "Workflow d'approbation et suivi"
                    ]
                  },
                  {
                    week: "Semaine 4",
                    title: "Maintenance Numérique et Intégration",
                    icon: <Wrench className="w-12 h-12 text-purple-600" />,
                    objectives: [
                      "CMMS mobile pour maintenance",
                      "QR codes et identification équipements",
                      "Historique et documentation technique",
                      "Coordination multi-systèmes",
                      "Évaluation pratique et certification"
                    ]
                  }
                ].map((week, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {week.icon}
                        <div className="ml-6">
                          <Badge variant="outline" className="mb-2">{week.week}</Badge>
                          <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {week.objectives.map((objective, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Practical Applications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Applications pratiques</h2>
                <p className="text-xl text-gray-600">Scénarios réels d'utilisation sur site</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    scenario: "Opérateur d'équipement",
                    icon: <Truck className="w-12 h-12 text-blue-600" />,
                    tasks: [
                      "Réception missions via tablette FMS",
                      "Reporting état équipement en temps réel",
                      "Déclaration incidents de sécurité",
                      "Check-list pré-opérationnelle digitale",
                      "Communication avec supervision"
                    ]
                  },
                  {
                    scenario: "Technicien maintenance",
                    icon: <Wrench className="w-12 h-12 text-green-600" />,
                    tasks: [
                      "Consultation ordres travail CMMS",
                      "Accès documentation technique",
                      "Mise à jour historique maintenance",
                      "Gestion inventaire pièces détachées",
                      "Rapport intervention mobile"
                    ]
                  },
                  {
                    scenario: "Superviseur terrain",
                    icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
                    tasks: [
                      "Monitoring performance équipes",
                      "Validation rapports sécurité",
                      "Coordination multi-équipes",
                      "Suivi KPIs production en temps réel",
                      "Prise décision basée données"
                    ]
                  }
                ].map((app, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">{app.icon}</div>
                      <CardTitle className="text-lg">{app.scenario}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {app.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {task}
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

        {/* Technology Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Fonctionnalités technologiques</h2>
                <p className="text-xl text-gray-600">Capacités modernes des outils digitaux miniers</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    feature: "Mobilité",
                    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
                    description: "Accès aux données partout sur site"
                  },
                  {
                    feature: "Connectivité",
                    icon: <Wifi className="w-8 h-8 text-green-600" />,
                    description: "Synchronisation temps réel"
                  },
                  {
                    feature: "Sécurité",
                    icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
                    description: "Alertes automatiques et traçabilité"
                  },
                  {
                    feature: "Analytics",
                    icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
                    description: "Tableaux de bord et indicateurs"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.feature}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                  <h2 className="text-3xl font-bold mb-4">Certification Professionnelle</h2>
                  <p className="text-xl mb-6 text-orange-100">
                    Certificat d'Outils Digitaux Miniers
                  </p>
                  <p className="text-lg text-orange-100 leading-relaxed">
                    Cette certification atteste de votre maîtrise des outils numériques spécialisés 
                    utilisés dans les opérations minières modernes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Prêt à maîtriser les technologies minières de demain ?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Rejoignez nos formations et développez votre expertise sur les outils digitaux révolutionnant l'industrie minière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link to="/admissions">S'inscrire maintenant</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                  <Link to="/contact">Demander des informations</Link>
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

export default OutilsDigitauxMinePage;
