import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Users, Award, CheckCircle, BarChart3, TrendingDown, Fuel, Monitor, Target, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const OptimisationCarburantPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/truck operatoo.jpg"
              alt="Optimisation Carburant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-green-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">
                Gestion des Opérations Minières & Systèmes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Optimisation de la
                <span className="text-green-400"> Consommation de Carburant</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Maîtrisez les techniques et outils avancés pour réduire significativement 
                la consommation de carburant de votre flotte d'équipements miniers.
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
                  <span className="font-semibold">2.800.000FG</span>
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
                    Réduisez vos Coûts Opérationnels
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Le carburant représente jusqu'à 30% des coûts opérationnels d'une mine. 
                    Cette formation vous donne les clés pour optimiser la consommation, 
                    analyser les données de performance et implémenter des stratégies d'économie.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Fuel className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Économies de carburant</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Analyse de données</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Monitor className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-sm font-medium">Monitoring en temps réel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Optimisation continue</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingDown className="w-5 h-5 mr-2 text-green-600" />
                        Économies Mesurables
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">15-25% de réduction de consommation</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">ROI en moins de 6 mois</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Réduction empreinte carbone</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Amélioration productivité équipements</span>
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
                  { week: "Semaine 1", topic: "Diagnostic", details: "Analyse de la consommation actuelle et identification des gaspillages" },
                  { week: "Semaine 2", topic: "Optimisation", details: "Techniques d'optimisation et bonnes pratiques opérationnelles" },
                  { week: "Semaine 3", topic: "Monitoring", details: "Systèmes de suivi et outils d'analyse de performance" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-green-600">
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

        {/* Facteurs d'optimisation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Facteurs d'Optimisation</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    category: "Opérationnels",
                    factors: ["Conduite éco-responsable", "Planification d'itinéraires", "Gestion des cycles", "Maintenance préventive"],
                    icon: Settings,
                    color: "text-blue-600",
                    bgColor: "bg-blue-50 border-blue-200"
                  },
                  {
                    category: "Techniques",
                    factors: ["Réglages moteur", "Pression des pneus", "Qualité du carburant", "Systèmes d'injection"],
                    icon: Fuel,
                    color: "text-green-600",
                    bgColor: "bg-green-50 border-green-200"
                  },
                  {
                    category: "Technologiques",
                    factors: ["Télématique", "Capteurs IoT", "Systèmes FMS", "Intelligence artificielle"],
                    icon: Monitor,
                    color: "text-purple-600",
                    bgColor: "bg-purple-50 border-purple-200"
                  }
                ].map((factor, index) => (
                  <Card key={index} className={`${factor.bgColor} border-2`}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <factor.icon className={`w-5 h-5 mr-2 ${factor.color}`} />
                        {factor.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {factor.factors.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm">{item}</span>
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

        {/* Outils et technologies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Outils et Technologies</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Systèmes de Monitoring</h3>
                  {[
                    "Caterpillar Fleet Management",
                    "Komatsu KOMTRAX",
                    "Volvo CareTrack",
                    "Solutions télématiques personnalisées"
                  ].map((tool, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Outils d'Analyse</h3>
                  {[
                    "Tableaux de bord en temps réel",
                    "Analytics prédictifs",
                    "Rapports de performance",
                    "Benchmarking de flotte"
                  ].map((tool, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI et bénéfices */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Retour sur Investissement</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    metric: "Économies",
                    value: "15-25%",
                    description: "Réduction consommation carburant",
                    color: "text-green-600"
                  },
                  {
                    metric: "ROI",
                    value: "< 6 mois",
                    description: "Retour sur investissement",
                    color: "text-blue-600"
                  },
                  {
                    metric: "Productivité",
                    value: "+12%",
                    description: "Amélioration efficacité",
                    color: "text-purple-600"
                  },
                  {
                    metric: "Émissions",
                    value: "-20%",
                    description: "Réduction CO2",
                    color: "text-orange-600"
                  }
                ].map((metric, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <CardTitle className={`text-3xl font-bold ${metric.color}`}>
                        {metric.value}
                      </CardTitle>
                      <CardDescription className="font-semibold">{metric.metric}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{metric.description}</p>
                    </CardContent>
                  </Card>
                ))}
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
                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Fuel className="w-12 h-12 text-green-600" />
                    </div>
                    <CardTitle>Ing. Mamadou Diallo</CardTitle>
                    <CardDescription>Expert Optimisation Énergétique</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      15 ans d'expérience en optimisation énergétique dans l'industrie minière. 
                      Spécialiste des solutions de réduction de consommation de carburant.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-blue-600" />
                    </div>
                    <CardTitle>Dr. Fatou Bah</CardTitle>
                    <CardDescription>Analyste Performance Opérationnelle</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      Docteure en génie minier avec expertise en analyse de données. 
                      Spécialiste des systèmes de monitoring et d'optimisation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Certification</h2>
              <p className="text-xl text-gray-700 mb-8">
                <strong>Certificat Optimisation Carburant Minier</strong>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cette certification atteste de votre maîtrise des techniques d'optimisation 
                de la consommation de carburant pour les équipements miniers.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Réduisez vos Coûts dès Maintenant</h2>
              <p className="text-gray-700 text-lg mb-8">
                Rejoignez cette formation et commencez à économiser significativement 
                sur vos coûts de carburant tout en améliorant vos performances opérationnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
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

export default OptimisationCarburantPage;
