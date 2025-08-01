import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Users, Award, CheckCircle, GraduationCap, Target, TrendingUp, BookOpen, UserCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationPersonnelPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/trainer.jpg"
              alt="Formation du Personnel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-orange-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">
                Gestion des Opérations Minières & Systèmes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Formation du Personnel et
                <span className="text-orange-400"> Développement des Talents</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Construisez une stratégie de développement des compétences adaptée aux enjeux 
                de l'industrie minière et créez des programmes de formation impactants.
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
                  <span className="font-semibold">3.000.000FG</span>
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
                    Investissez dans le Capital Humain
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Le succès d'une organisation minière repose sur la qualité de ses équipes. 
                    Cette formation vous donne les clés pour concevoir et mettre en œuvre des 
                    programmes de développement qui maximisent le potentiel de vos collaborateurs.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-sm font-medium">Conception pédagogique</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Plans de développement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Gestion des talents</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <UserCheck className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Évaluation des compétences</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                        Stratégie de Formation Intégrée
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Analyse des besoins en compétences</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Conception de parcours de formation</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Modalités pédagogiques innovantes</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Mesure de l'efficacité des formations</span>
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
                  { week: "Semaine 1", topic: "Diagnostic", details: "Analyse des besoins et cartographie des compétences" },
                  { week: "Semaine 2", topic: "Conception", details: "Ingénierie pédagogique et design de formation" },
                  { week: "Semaine 3", topic: "Déploiement", details: "Mise en œuvre et animation des formations" },
                  { week: "Semaine 4", topic: "Évaluation", details: "Mesure d'impact et amélioration continue" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-orange-600">
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

        {/* Modalités de formation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Modalités Pédagogiques</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    modality: "Formation Présentielle",
                    features: ["Ateliers pratiques", "Études de cas", "Simulations terrain", "Coaching individuel"],
                    icon: Users,
                    color: "text-blue-600",
                    bgColor: "bg-blue-50 border-blue-200"
                  },
                  {
                    modality: "E-Learning",
                    features: ["Modules interactifs", "Parcours adaptatifs", "Microlearning", "Gamification"],
                    icon: BookOpen,
                    color: "text-green-600",
                    bgColor: "bg-green-50 border-green-200"
                  },
                  {
                    modality: "Formation Mixte",
                    features: ["Blended learning", "Classes virtuelles", "Mentoring", "Communautés de pratique"],
                    icon: Zap,
                    color: "text-purple-600",
                    bgColor: "bg-purple-50 border-purple-200"
                  }
                ].map((modality, index) => (
                  <Card key={index} className={`${modality.bgColor} border-2`}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <modality.icon className={`w-5 h-5 mr-2 ${modality.color}`} />
                        {modality.modality}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {modality.features.map((feature, idx) => (
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

        {/* Cycle de développement des talents */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Cycle de Développement des Talents</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Identification & Évaluation</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Assessment des compétences",
                        description: "Évaluation 360° et tests de compétences techniques"
                      },
                      {
                        title: "Détection des potentiels",
                        description: "Identification des hauts potentiels et futurs leaders"
                      },
                      {
                        title: "Analyse des écarts",
                        description: "Gap analysis entre compétences actuelles et requises"
                      },
                      {
                        title: "Cartographie des talents",
                        description: "Vue d'ensemble des talents et de leur distribution"
                      }
                    ].map((step, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardHeader>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Développement & Rétention</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Plans de développement individuels",
                        description: "Parcours personnalisés basés sur les objectifs carrière"
                      },
                      {
                        title: "Programmes de mentoring",
                        description: "Accompagnement par des experts seniors"
                      },
                      {
                        title: "Mobilité interne",
                        description: "Opportunités de rotation et de progression"
                      },
                      {
                        title: "Reconnaissance et rétention",
                        description: "Stratégies pour fidéliser les talents clés"
                      }
                    ].map((step, index) => (
                      <Card key={index} className="border-l-4 border-l-green-500">
                        <CardHeader>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies et outils */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Outils et Technologies</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Plateformes LMS</h3>
                  {[
                    "Learning Management Systems",
                    "Plateformes de e-learning",
                    "Outils d'authoring",
                    "Applications mobiles de formation"
                  ].map((tool, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Outils d'Évaluation</h3>
                  {[
                    "Plateformes d'assessment", 
                    "Tests de compétences en ligne",
                    "Outils de feedback 360°",
                    "Analytics et reporting"
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

        {/* ROI de la formation */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Impact et ROI</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    metric: "Productivité",
                    value: "+25%",
                    description: "Amélioration de la productivité",
                    color: "text-green-600"
                  },
                  {
                    metric: "Rétention",
                    value: "85%",
                    description: "Taux de rétention des talents",
                    color: "text-blue-600"
                  },
                  {
                    metric: "Satisfaction",
                    value: "4.6/5",
                    description: "Satisfaction des apprenants",
                    color: "text-purple-600"
                  },
                  {
                    metric: "ROI Formation",
                    value: "320%",
                    description: "Retour sur investissement",
                    color: "text-orange-600"
                  }
                ].map((kpi, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <CardTitle className={`text-3xl font-bold ${kpi.color}`}>
                        {kpi.value}
                      </CardTitle>
                      <CardDescription className="font-semibold">{kpi.metric}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{kpi.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compétences développées */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Compétences Développées</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Ingénierie de Formation</h3>
                  {[
                    "Analyse des besoins de formation",
                    "Conception pédagogique avancée",
                    "Création de contenus interactifs",
                    "Évaluation de l'efficacité pédagogique"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Gestion des Talents</h3>
                  {[
                    "Stratégies de développement des compétences",
                    "Gestion des carrières et succession",
                    "Animation d'équipes apprenantes",
                    "Conduite du changement par la formation"
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nos Experts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <GraduationCap className="w-12 h-12 text-orange-600" />
                    </div>
                    <CardTitle>Dr. Ibrahima Sow</CardTitle>
                    <CardDescription>Expert Ingénierie Pédagogique</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      20 ans d'expérience en conception de programmes de formation. 
                      Spécialiste de l'ingénierie pédagogique et du développement des compétences.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-12 h-12 text-green-600" />
                    </div>
                    <CardTitle>Mme. Mariam Bah</CardTitle>
                    <CardDescription>Spécialiste Gestion des Talents</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      Consultante senior en développement RH et gestion des talents. 
                      Experte en stratégies de rétention et plans de succession.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Certification</h2>
              <p className="text-xl text-gray-700 mb-8">
                <strong>Certificat Formation & Développement des Talents</strong>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cette certification atteste de votre expertise en conception et mise en œuvre 
                de programmes de formation et de développement des talents dans l'industrie minière.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Investissez dans le Développement des Talents</h2>
              <p className="text-gray-700 text-lg mb-8">
                Rejoignez cette formation et acquérez les compétences pour créer des programmes 
                de développement qui révèlent le potentiel de vos équipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
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

export default FormationPersonnelPage;
