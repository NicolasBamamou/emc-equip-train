import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Users, Award, CheckCircle, BarChart3, Brain, TrendingUp, Lightbulb, Database, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnalytiqueMinierePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/emc-equip-train/images/teaminfo.jpg"
              alt="Analytique Minière"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-emerald-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <Badge className="mb-4 bg-emerald-600 hover:bg-emerald-700">
                Gestion des Opérations Minières & Systèmes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Analytique Minière et
                <span className="text-emerald-400"> Systèmes d'Aide à la Décision</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Maîtrisez les outils d'analyse de données et les systèmes d'aide à la décision 
                pour optimiser les performances minières et la prise de décision stratégique.
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
                  <span className="font-semibold">3.600.000FG</span>
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
                    Transformez les Données en Insights
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    L'analytique minière permet de transformer les volumes massifs de données opérationnelles 
                    en insights actionnables. Cette formation vous enseigne les techniques avancées d'analyse 
                    et les systèmes d'aide à la décision pour optimiser les performances.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-sm font-medium">Business Intelligence</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Brain className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Machine Learning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Analyse prédictive</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Aide à la décision</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-emerald-600" />
                        Outils d'Analyse Avancée
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Business Intelligence pour les mines</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Tableaux de bord et visualisation</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Analyse prédictive et machine learning</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Systèmes d'aide à la décision opérationnelle</span>
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
                  { week: "Semaine 1", topic: "Business Intelligence", details: "Fondamentaux BI, data warehousing et ETL" },
                  { week: "Semaine 2", topic: "Visualisation", details: "Tableaux de bord, dashboards et reporting interactif" },
                  { week: "Semaine 3", topic: "Analyse Prédictive", details: "Machine learning et modèles prédictifs" },
                  { week: "Semaine 4", topic: "Aide à la Décision", details: "Systèmes décisionnels et optimisation" }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-emerald-600">
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

        {/* Outils et technologies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Outils et Plateformes</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    category: "Business Intelligence",
                    tools: ["Power BI", "Tableau", "QlikView", "Apache Superset"],
                    icon: BarChart3,
                    color: "text-blue-600",
                    bgColor: "bg-blue-50 border-blue-200"
                  },
                  {
                    category: "Data Science",
                    tools: ["Python/R", "Jupyter", "Pandas", "Scikit-learn"],
                    icon: Brain,
                    color: "text-purple-600",
                    bgColor: "bg-purple-50 border-purple-200"
                  },
                  {
                    category: "Big Data",
                    tools: ["Apache Spark", "Hadoop", "Databricks", "Snowflake"],
                    icon: Database,
                    color: "text-green-600",
                    bgColor: "bg-green-50 border-green-200"
                  }
                ].map((platform, index) => (
                  <Card key={index} className={`${platform.bgColor} border-2`}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <platform.icon className={`w-5 h-5 mr-2 ${platform.color}`} />
                        {platform.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {platform.tools.map((tool, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm">{tool}</span>
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

        {/* Use cases analytiques */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">Use Cases Analytiques</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Analyse Descriptive</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "KPIs opérationnels",
                        description: "Surveillance des indicateurs de performance en temps réel"
                      },
                      {
                        title: "Reporting automatisé",
                        description: "Génération automatique de rapports de production"
                      },
                      {
                        title: "Analyse des tendances",
                        description: "Identification des patterns et tendances historiques"
                      },
                      {
                        title: "Benchmarking",
                        description: "Comparaison des performances entre sites et équipements"
                      }
                    ].map((usecase, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardHeader>
                          <CardTitle className="text-lg">{usecase.title}</CardTitle>
                          <CardDescription>{usecase.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Analyse Prédictive</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Maintenance prédictive",
                        description: "Prédiction des pannes et optimisation de la maintenance"
                      },
                      {
                        title: "Optimisation de production",
                        description: "Prévision des rendements et optimization des processus"
                      },
                      {
                        title: "Gestion des risques",
                        description: "Identification proactive des risques opérationnels"
                      },
                      {
                        title: "Planning optimisé",
                        description: "Optimisation de la planification basée sur les prédictions"
                      }
                    ].map((usecase, index) => (
                      <Card key={index} className="border-l-4 border-l-green-500">
                        <CardHeader>
                          <CardTitle className="text-lg">{usecase.title}</CardTitle>
                          <CardDescription>{usecase.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
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
                  <h3 className="text-xl font-semibold mb-4">Analyse de Données</h3>
                  {[
                    "Conception de data warehouses miniers",
                    "Création de modèles analytiques",
                    "Techniques de data mining avancées"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Visualisation & Décision</h3>
                  {[
                    "Conception de tableaux de bord interactifs",
                    "Storytelling avec les données", 
                    "Systèmes d'aide à la décision"
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
                    <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-emerald-600" />
                    </div>
                    <CardTitle>Dr. Lansana Kourouma</CardTitle>
                    <CardDescription>Expert Data Science & BI</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      18 ans d'expérience en business intelligence et data science. 
                      Spécialiste des solutions analytiques pour l'industrie minière.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Brain className="w-12 h-12 text-purple-600" />
                    </div>
                    <CardTitle>Mme. Fatoumata Keita</CardTitle>
                    <CardDescription>Spécialiste Machine Learning</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">
                      Experte en machine learning et analyse prédictive. 
                      12 ans d'expérience en développement de modèles pour l'optimisation minière.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Certification</h2>
              <p className="text-xl text-gray-700 mb-8">
                <strong>Certificat Analytique Minière</strong>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cette certification atteste de votre maîtrise des outils d'analyse de données 
                et des systèmes d'aide à la décision appliqués à l'industrie minière.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Devenez un Expert en Analytique Minière</h2>
              <p className="text-gray-700 text-lg mb-8">
                Rejoignez cette formation avancée et maîtrisez les outils qui transforment 
                les données en avantage compétitif pour votre organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-emerald-600 hover:bg-emerald-700">
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

export default AnalytiqueMinierePage;
