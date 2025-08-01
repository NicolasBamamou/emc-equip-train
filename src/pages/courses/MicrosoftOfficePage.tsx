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
  FileSpreadsheet, 
  Presentation, 
  Target,
  Monitor,
  Keyboard,
  Mouse,
  FileImage,
  Share2,
  Cloud,
  Layers,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MicrosoftOfficePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/CEO.jpg"
              alt="Microsoft Office et Google Workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/75"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-indigo-200 mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="bg-indigo-600 text-white px-4 py-2">
                  <Monitor className="w-4 h-4 mr-2" />
                  Suites Bureautiques
                </Badge>
                <Badge variant="secondary" className="bg-purple-600 text-white px-4 py-2">
                  <Cloud className="w-4 h-4 mr-2" />
                  Productivité
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Introduction à Microsoft Office / Google Workspace
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 leading-relaxed">
                Maîtrisez les suites bureautiques essentielles pour la productivité professionnelle dans le secteur minier
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 mr-3" />
                  <span className="font-semibold">4 Semaines</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Users className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Débutant</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Award className="w-5 h-5 mr-3" />
                  <span className="font-semibold">2.200.000FG</span>
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
                    Devenez productif avec les outils bureautiques modernes
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Dans un environnement professionnel moderne, la maîtrise des suites bureautiques 
                    est indispensable. Cette formation vous donnera les compétences nécessaires pour 
                    utiliser efficacement Microsoft Office et Google Workspace dans le contexte minier.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <FileText className="w-8 h-8 text-indigo-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Documents</h4>
                        <p className="text-sm text-gray-600">Rapports professionnels</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <Presentation className="w-8 h-8 text-purple-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Présentations</h4>
                        <p className="text-sm text-gray-600">Communication efficace</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-8">
                  <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <Target className="w-6 h-6 mr-3" />
                        Objectifs d'apprentissage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {[
                          "Word : documents et rapports professionnels",
                          "Excel : tableaux et calculs de base",
                          "PowerPoint : présentations efficaces",
                          "Collaboration et partage de documents"
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

        {/* Applications Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Applications maîtrisées</h2>
                <p className="text-xl text-gray-600">Microsoft Office 365 et Google Workspace</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    app: "Word / Docs",
                    icon: <FileText className="w-10 h-10 text-blue-600" />,
                    description: "Traitement de texte professionnel",
                    week: "Semaine 1"
                  },
                  {
                    app: "Excel / Sheets",
                    icon: <FileSpreadsheet className="w-10 h-10 text-green-600" />,
                    description: "Tableurs et calculs",
                    week: "Semaine 2"
                  },
                  {
                    app: "PowerPoint / Slides",
                    icon: <Presentation className="w-10 h-10 text-orange-600" />,
                    description: "Présentations dynamiques",
                    week: "Semaine 3"
                  },
                  {
                    app: "Collaboration",
                    icon: <Share2 className="w-10 h-10 text-purple-600" />,
                    description: "Travail en équipe",
                    week: "Semaine 4"
                  }
                ].map((app, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{app.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{app.app}</h3>
                      <p className="text-gray-600 text-sm mb-3">{app.description}</p>
                      <Badge variant="outline" className="text-xs">{app.week}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Program */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Programme détaillé</h2>
                <p className="text-xl text-gray-600">4 semaines pour maîtriser l'essentiel</p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    week: "Semaine 1",
                    title: "Microsoft Word / Google Docs",
                    icon: <FileText className="w-12 h-12 text-blue-600" />,
                    skills: [
                      "Interface et outils de base",
                      "Mise en forme de documents professionnels",
                      "Insertion d'images et tableaux",
                      "Révision et commentaires",
                      "Templates de rapports miniers"
                    ]
                  },
                  {
                    week: "Semaine 2",
                    title: "Microsoft Excel / Google Sheets",
                    icon: <FileSpreadsheet className="w-12 h-12 text-green-600" />,
                    skills: [
                      "Navigation et saisie de données",
                      "Formules et calculs essentiels",
                      "Mise en forme conditionnelle",
                      "Graphiques simples",
                      "Tableaux de données minières"
                    ]
                  },
                  {
                    week: "Semaine 3",
                    title: "Microsoft PowerPoint / Google Slides",
                    icon: <Presentation className="w-12 h-12 text-orange-600" />,
                    skills: [
                      "Création de diapositives attractives",
                      "Insertion multimédia",
                      "Animations et transitions",
                      "Présentations de sécurité minière",
                      "Techniques de présentation"
                    ]
                  },
                  {
                    week: "Semaine 4",
                    title: "Collaboration et Cloud",
                    icon: <Cloud className="w-12 h-12 text-purple-600" />,
                    skills: [
                      "Partage et collaboration en temps réel",
                      "Gestion des versions",
                      "OneDrive / Google Drive",
                      "Sécurité et permissions",
                      "Intégration des applications"
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
                        {week.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{skill}</span>
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

        {/* Practical Examples */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Applications pratiques</h2>
                <p className="text-xl text-gray-600">Exemples concrets pour le secteur minier</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    category: "Documents Word",
                    icon: <FileText className="w-12 h-12 text-blue-600" />,
                    examples: [
                      "Rapports d'incidents de sécurité",
                      "Procédures opérationnelles",
                      "Comptes-rendus de réunion",
                      "Correspondance professionnelle",
                      "Manuels d'utilisation"
                    ]
                  },
                  {
                    category: "Tableaux Excel",
                    icon: <FileSpreadsheet className="w-12 h-12 text-green-600" />,
                    examples: [
                      "Suivi de production journalière",
                      "Calculs de rendements",
                      "Plannings d'équipes",
                      "Inventaires d'équipements",
                      "Analyses de coûts"
                    ]
                  },
                  {
                    category: "Présentations PowerPoint",
                    icon: <Presentation className="w-12 h-12 text-orange-600" />,
                    examples: [
                      "Briefings de sécurité",
                      "Formations équipes",
                      "Présentation de résultats",
                      "Formations techniques",
                      "Communication direction"
                    ]
                  }
                ].map((category, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-2">{category.icon}</div>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
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

        {/* Features Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Microsoft Office vs Google Workspace</h2>
                <p className="text-xl text-gray-600">Maîtrisez les deux écosystèmes</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <CardTitle className="flex items-center text-xl">
                      <Monitor className="w-6 h-6 mr-3" />
                      Microsoft Office 365
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {[
                        "Interface familière et robuste",
                        "Fonctionnalités avancées",
                        "Intégration Windows",
                        "Outils d'analyse puissants",
                        "Stockage OneDrive"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <CardTitle className="flex items-center text-xl">
                      <Cloud className="w-6 h-6 mr-3" />
                      Google Workspace
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {[
                        "Collaboration temps réel",
                        "Accès universel via navigateur",
                        "Synchronisation automatique",
                        "Partage simplifié",
                        "Stockage Google Drive"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                  <h2 className="text-3xl font-bold mb-4">Certification Professionnelle</h2>
                  <p className="text-xl mb-6 text-indigo-100">
                    Certificat Suites Bureautiques
                  </p>
                  <p className="text-lg text-indigo-100 leading-relaxed">
                    Cette certification atteste de votre maîtrise des suites bureautiques Microsoft Office 
                    et Google Workspace pour la productivité professionnelle.
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
                Prêt à booster votre productivité professionnelle ?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Rejoignez nos formations et maîtrisez les outils bureautiques essentiels pour exceller dans votre carrière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
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

export default MicrosoftOfficePage;
