import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Users, Award, CheckCircle, RefreshCw, Users2, Target, Lightbulb, BarChart3, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const GestionChangementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/team.jpg"
              alt="Gestion du Changement"
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
                Gestion du Changement
                <span className="text-blue-400"> Organisationnel</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Accompagnez la transformation de votre organisation minière grâce aux meilleures 
                pratiques de gestion du changement et de conduite de projets transformationnels.
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
                    Pilotez la Transformation
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    La réussite des projets de transformation dans l'industrie minière nécessite 
                    une approche structurée de la gestion du changement. Cette formation vous équipe 
                    des outils et méthodes pour accompagner efficacement les transitions organisationnelles.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <RefreshCw className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Conduite du changement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Users2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Engagement des équipes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Stratégie de transformation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-sm font-medium">Innovation organisationnelle</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-blue-600" />
                        Approche Humaine du Changement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Psychologie du changement organisationnel</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Communication et engagement des parties prenantes</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Gestion de la résistance au changement</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Leadership transformationnel</span>
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
                  { week: "Semaine 1", topic: "Fondements", details: "Théories et modèles de gestion du changement" },
                  { week: "Semaine 2", topic: "Planification", details: "Stratégie de changement et plan de communication" },
                  { week: "Semaine 3", topic: "Mise en œuvre", details: "Conduite du changement et gestion des résistances" },
                  { week: "Semaine 4", topic: "Ancrage", details: "Pérennisation et évaluation du changement" }
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

        {/* Modèles de changement */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Modèles et Frameworks</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    model: "Modèle de Kotter",
                    steps: ["Créer l'urgence", "Former une coalition", "Développer la vision", "Communiquer la vision"],
                    icon: Target,
                    color: "text-blue-600",
                    bgColor: "bg-blue-50 border-blue-200"
                  },
                  {
                    model: "ADKAR",
                    steps: ["Awareness", "Desire", "Knowledge", "Ability"],
                    icon: Users2,
                    color: "text-green-600",
                    bgColor: "bg-green-50 border-green-200"
                  },
                  {
                    model: "Lean Change",
                    steps: ["Options", "Expériences", "Insights", "Minimum Viable Changes"],
                    icon: RefreshCw,
                    color: "text-purple-600",
                    bgColor: "bg-purple-50 border-purple-200"
                  }
                ].map((framework, index) => (
                  <Card key={index} className={`${framework.bgColor} border-2`}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <framework.icon className={`w-5 h-5 mr-2 ${framework.color}`} />
                        {framework.model}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {framework.steps.map((step, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm">{step}</span>
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

        {/* Défis de l'industrie minière */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Défis Spécifiques à l'Industrie Minière</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Enjeux Organisationnels</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Culture de sécurité",
                        description: "Intégration de nouvelles pratiques de sécurité"
                      },
                      {
                        title: "Digitalisation",
                        description: "Adoption de technologies numériques par les équipes terrain"
                      },
                      {
                        title: "Générations mixtes",
                        description: "Gestion du changement dans des équipes multigénérationnelles"
                      },
                      {
                        title: "Environnements isolés",
                        description: "Communication et formation sur sites distants"
                      }
                    ].map((challenge, index) => (
                      <Card key={index} className="border-l-4 border-l-orange-500">
                        <CardHeader>
                          <CardTitle className="text-lg">{challenge.title}</CardTitle>
                          <CardDescription>{challenge.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Solutions Pratiques</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Champions du changement",
                        description: "Formation de leaders locaux pour porter la transformation"
                      },
                      {
                        title: "Communication multi-canal",
                        description: "Stratégies adaptées aux environnements opérationnels"
                      },
                      {
                        title: "Formation progressive",
                        description: "Accompagnement personnalisé par niveau d'expérience"
                      },
                      {
                        title: "Feedback continu",
                        description: "Mécanismes d'écoute et d'ajustement en temps réel"
                      }
                    ].map((solution, index) => (
                      <Card key={index} className="border-l-4 border-l-green-500">
                        <CardHeader>
                          <CardTitle className="text-lg">{solution.title}</CardTitle>
                          <CardDescription>{solution.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outils et techniques */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Outils de Gestion du Changement</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Diagnostic et Planification</h3>
                  {[
                    "Analyse d'impact du changement",
                    "Cartographie des parties prenantes",
                    "Évaluation de la maturité organisationnelle",
                    "Plan de gestion des risques"
                  ].map((tool, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Communication et Engagement</h3>
                  {[
                    "Stratégies de communication différenciées",
                    "Ateliers de co-construction",
                    "Feedback 360° et enquêtes", 
                    "Célébration des succès rapides"
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

        {/* Mesure du succès */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Indicateurs de Réussite</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    metric: "Taux d'adoption",
                    value: "85%",
                    description: "Adoption des nouvelles pratiques",
                    color: "text-blue-600"
                  },
                  {
                    metric: "Engagement",
                    value: "90%",
                    description: "Niveau d'engagement des équipes",
                    color: "text-green-600"
                  },
                  {
                    metric: "Délai de mise en œuvre",
                    value: "-25%",
                    description: "Réduction des délais projet",
                    color: "text-purple-600"
                  },
                  {
                    metric: "Satisfaction",
                    value: "4.5/5",
                    description: "Satisfaction des parties prenantes",
                    color: "text-orange-600"
                  }
                ].map((indicator, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <CardTitle className={`text-3xl font-bold ${indicator.color}`}>
                        {indicator.value}
                      </CardTitle>
                      <CardDescription className="font-semibold">{indicator.metric}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{indicator.description}</p>
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
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users2 className="w-12 h-12 text-blue-600" />
                    </div>
                    <CardTitle>Dr. Moussa Traoré</CardTitle>
                    <CardDescription>Expert Transformation Organisationnelle</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      15 ans d'expérience en conduite du changement dans l'industrie. 
                      Certifié en Change Management et Leadership transformationnel.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-12 h-12 text-green-600" />
                    </div>
                    <CardTitle>Mme. Aminata Diallo</CardTitle>
                    <CardDescription>Spécialiste Communication & Engagement</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      Coach certifiée en accompagnement du changement. 
                      Experte en communication et mobilisation des équipes.
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
                <strong>Certificat Change Management Minier</strong>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cette certification atteste de votre expertise en gestion du changement 
                organisationnel appliquée aux spécificités de l'industrie minière.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Devenez un Leader du Changement</h2>
              <p className="text-gray-700 text-lg mb-8">
                Rejoignez cette formation et développez les compétences nécessaires pour 
                accompagner efficacement les transformations organisationnelles.
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

export default GestionChangementPage;
