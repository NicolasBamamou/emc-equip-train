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
  Database, 
  FileSpreadsheet, 
  ClipboardList, 
  Target,
  BarChart3,
  TrendingUp,
  FileText,
  Search,
  Filter,
  Download,
  Save,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SaisieDonneesRapportsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/emc-equip-train/images/working.jpg"
              alt="Saisie de données et rapports miniers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/75"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-teal-200 mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="bg-teal-600 text-white px-4 py-2">
                  <Database className="w-4 h-4 mr-2" />
                  Gestion des Données
                </Badge>
                <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Rapports Miniers
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Saisie de Données, Formulaires Numériques et Rapports Miniers
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-teal-100 leading-relaxed">
                Apprenez à saisir efficacement les données opérationnelles et à générer des rapports numériques précis et exploitables
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 mr-3" />
                  <span className="font-semibold">3 Semaines</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Users className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Débutant</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Award className="w-5 h-5 mr-3" />
                  <span className="font-semibold">1.600.000FG</span>
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
                    Transformez les données en insights précieux
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Dans l'industrie minière, la qualité des données détermine la qualité des décisions. 
                    Cette formation vous enseignera les techniques de saisie de données précises, 
                    l'utilisation de formulaires numériques et la génération de rapports exploitables.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <Database className="w-8 h-8 text-teal-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Saisie Précise</h4>
                        <p className="text-sm text-gray-600">Données fiables</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Rapports Automatisés</h4>
                        <p className="text-sm text-gray-600">Gain de temps</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-8">
                  <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <Target className="w-6 h-6 mr-3" />
                        Objectifs d'apprentissage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {[
                          "Saisie de données précise et efficace",
                          "Utilisation de formulaires numériques",
                          "Génération de rapports automatisés",
                          "Contrôle qualité des données saisies"
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

        {/* Learning Modules */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Modules de formation</h2>
                <p className="text-xl text-gray-600">De la saisie à l'analyse : un parcours complet</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    week: "Semaine 1",
                    title: "Fondamentaux de la saisie",
                    icon: <Database className="w-12 h-12 text-teal-600" />,
                    content: [
                      "Principes de saisie efficace",
                      "Types de données minières",
                      "Erreurs courantes à éviter",
                      "Organisation des données"
                    ]
                  },
                  {
                    week: "Semaine 2",
                    title: "Formulaires numériques",
                    icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
                    content: [
                      "Conception de formulaires",
                      "Validation automatique",
                      "Workflows de données",
                      "Intégration systèmes"
                    ]
                  },
                  {
                    week: "Semaine 3",
                    title: "Rapports et analyse",
                    icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
                    content: [
                      "Génération de rapports",
                      "Visualisation de données",
                      "Contrôle qualité",
                      "Présentation des résultats"
                    ]
                  }
                ].map((module, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">{module.icon}</div>
                      <Badge variant="outline" className="mb-4 block text-center">{module.week}</Badge>
                      <h3 className="text-xl font-bold mb-4 text-center text-gray-900">{module.title}</h3>
                      <ul className="space-y-3">
                        {module.content.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
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

        {/* Data Types */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Types de données minières</h2>
                <p className="text-xl text-gray-600">Maîtrisez la saisie de tous les types de données opérationnelles</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    type: "Production",
                    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                    examples: ["Tonnages extraits", "Heures de fonctionnement", "Rendements équipements", "Objectifs de production"]
                  },
                  {
                    type: "Sécurité",
                    icon: <ClipboardList className="w-8 h-8 text-red-600" />,
                    examples: ["Incidents de sécurité", "Inspections équipements", "Formations sécurité", "Audits conformité"]
                  },
                  {
                    type: "Maintenance",
                    icon: <FileSpreadsheet className="w-8 h-8 text-blue-600" />,
                    examples: ["Ordres de travail", "Heures d'intervention", "Pièces consommées", "Coûts maintenance"]
                  },
                  {
                    type: "Qualité",
                    icon: <Calculator className="w-8 h-8 text-purple-600" />,
                    examples: ["Analyses géologiques", "Contrôles qualité", "Mesures environnementales", "Tests laboratoire"]
                  }
                ].map((dataType, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{dataType.icon}</div>
                      <h3 className="text-lg font-bold mb-4 text-center text-gray-900">{dataType.type}</h3>
                      <ul className="space-y-2">
                        {dataType.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                            {example}
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

        {/* Tools & Techniques */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Outils et techniques</h2>
                <p className="text-xl text-gray-600">Technologies modernes pour une saisie efficace</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    category: "Outils de saisie",
                    icon: <Database className="w-12 h-12 text-teal-600" />,
                    tools: [
                      "Tablettes et smartphones",
                      "Formulaires Google/Microsoft",
                      "Applications de terrain",
                      "Lecteurs de codes-barres"
                    ]
                  },
                  {
                    category: "Validation des données",
                    icon: <Filter className="w-12 h-12 text-blue-600" />,
                    tools: [
                      "Règles de validation automatique",
                      "Contrôles de cohérence",
                      "Alertes d'anomalies",
                      "Historique des modifications"
                    ]
                  },
                  {
                    category: "Génération de rapports",
                    icon: <FileText className="w-12 h-12 text-purple-600" />,
                    tools: [
                      "Tableaux de bord automatisés",
                      "Rapports programmés",
                      "Graphiques et visualisations",
                      "Export multi-formats"
                    ]
                  }
                ].map((toolset, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-2">{toolset.icon}</div>
                      <CardTitle className="text-lg">{toolset.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {toolset.tools.map((tool, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
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

        {/* Certification */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                  <h2 className="text-3xl font-bold mb-4">Certification Professionnelle</h2>
                  <p className="text-xl mb-6 text-teal-100">
                    Attestation de Saisie de Données
                  </p>
                  <p className="text-lg text-teal-100 leading-relaxed">
                    Cette attestation certifie votre compétence en saisie de données précise 
                    et en génération de rapports pour les opérations minières.
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
                Prêt à maîtriser la gestion des données minières ?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Rejoignez nos formations et développez vos compétences en saisie de données et génération de rapports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
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

export default SaisieDonneesRapportsPage;
