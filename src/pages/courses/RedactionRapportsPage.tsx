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
  FileText, 
  Edit3, 
  ClipboardList, 
  Target,
  TrendingUp,
  Database,
  PieChart,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RedactionRapportsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/emc-equip-train/images/Secretary.jpg"
              alt="Rédaction de rapports professionnels"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/75"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-green-200 mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="bg-green-600 text-white px-4 py-2">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Rédaction Professionnelle
                </Badge>
                <Badge variant="secondary" className="bg-emerald-600 text-white px-4 py-2">
                  <FileText className="w-4 h-4 mr-2" />
                  Documentation Technique
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Rédaction de Rapports et Documentation
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
                Apprenez à rédiger des rapports professionnels clairs et structurés, essentiels pour la documentation des opérations minières
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 mr-3" />
                  <span className="font-semibold">2 Semaines</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Users className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Débutant</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Award className="w-5 h-5 mr-3" />
                  <span className="font-semibold">1.200.000FG</span>
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
                    Maîtrisez l'art de la documentation professionnelle
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Dans le secteur minier, la qualité de la documentation est cruciale pour la 
                    traçabilité, la sécurité et la conformité réglementaire. Cette formation vous 
                    apprendra à rédiger des rapports clairs, précis et conformes aux standards de l'industrie.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <ClipboardList className="w-8 h-8 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Rapports d'incidents</h4>
                        <p className="text-sm text-gray-600">Documentation complète</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Rapports de performance</h4>
                        <p className="text-sm text-gray-600">Analyse et recommandations</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-8">
                  <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <Target className="w-6 h-6 mr-3" />
                        Objectifs d'apprentissage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {[
                          "Structure et méthodologie de rapport",
                          "Rédaction d'incidents et d'observations",
                          "Documentation technique et procédures",
                          "Synthèse et présentation de données"
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

        {/* Types of Reports */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Types de rapports miniers</h2>
                <p className="text-xl text-gray-600">Maîtrisez tous les formats de documentation</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <ClipboardList className="w-8 h-8 text-red-600" />,
                    title: "Rapports d'incidents",
                    description: "Documentation complète des événements de sécurité",
                    features: ["Chronologie détaillée", "Causes identifiées", "Actions correctives"]
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                    title: "Rapports de performance",
                    description: "Analyse des indicateurs opérationnels",
                    features: ["KPIs de production", "Rendements équipements", "Recommandations"]
                  },
                  {
                    icon: <Database className="w-8 h-8 text-green-600" />,
                    title: "Rapports de maintenance",
                    description: "Suivi des interventions techniques",
                    features: ["État des équipements", "Planification", "Coûts de maintenance"]
                  },
                  {
                    icon: <PieChart className="w-8 h-8 text-purple-600" />,
                    title: "Rapports d'audit",
                    description: "Conformité et respect des procédures",
                    features: ["Écarts identifiés", "Plans d'actions", "Suivi des corrections"]
                  }
                ].map((report, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{report.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">{report.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 text-center">{report.description}</p>
                      <ul className="space-y-1">
                        {report.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-700">
                            <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
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

        {/* Learning Structure */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Structure d'apprentissage</h2>
                <p className="text-xl text-gray-600">De la théorie à la pratique en 2 semaines</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    week: "Semaine 1",
                    title: "Fondamentaux de la rédaction",
                    icon: <BookOpen className="w-12 h-12 text-green-600" />,
                    modules: [
                      "Principes de rédaction claire et concise",
                      "Structure type d'un rapport professionnel",
                      "Méthodologie de collecte d'informations",
                      "Exercices pratiques de rédaction"
                    ]
                  },
                  {
                    week: "Semaine 2",
                    title: "Application pratique",
                    icon: <Edit3 className="w-12 h-12 text-emerald-600" />,
                    modules: [
                      "Rédaction de rapports d'incidents réels",
                      "Création de procédures opérationnelles",
                      "Présentation et synthèse de données",
                      "Révision et amélioration continue"
                    ]
                  }
                ].map((week, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {week.icon}
                        <div className="ml-4">
                          <Badge variant="outline" className="mb-2">{week.week}</Badge>
                          <h3 className="text-xl font-bold text-gray-900">{week.title}</h3>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {week.modules.map((module, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            {module}
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

        {/* Skills & Tools */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Compétences développées</h2>
                <p className="text-xl text-gray-600">Des compétences immédiatement applicables</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    category: "Rédaction technique",
                    skills: [
                      "Clarté et précision du langage",
                      "Structure logique des idées",
                      "Adaptation au public cible",
                      "Respect des normes professionnelles"
                    ]
                  },
                  {
                    category: "Analyse et synthèse",
                    skills: [
                      "Collection d'informations pertinentes",
                      "Analyse critique des données",
                      "Synthèse efficace des résultats",
                      "Formulation de recommandations"
                    ]
                  },
                  {
                    category: "Présentation visuelle",
                    skills: [
                      "Utilisation de graphiques et tableaux",
                      "Mise en forme professionnelle",
                      "Hiérarchisation de l'information",
                      "Outils de documentation numérique"
                    ]
                  }
                ].map((category, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
                      <CardTitle className="text-lg text-center text-gray-900">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {category.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {skill}
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
              <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                  <h2 className="text-3xl font-bold mb-4">Certification Professionnelle</h2>
                  <p className="text-xl mb-6 text-green-100">
                    Attestation de Rédaction Professionnelle
                  </p>
                  <p className="text-lg text-green-100 leading-relaxed">
                    Cette attestation valide votre capacité à rédiger des documents professionnels 
                    de qualité, conformes aux exigences du secteur minier.
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
                Prêt à devenir un expert en rédaction professionnelle ?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Rejoignez nos formations et développez vos compétences en documentation technique pour exceller dans votre carrière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
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

export default RedactionRapportsPage;
