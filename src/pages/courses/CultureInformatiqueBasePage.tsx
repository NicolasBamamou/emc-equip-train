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
  Computer, 
  Mail, 
  FolderOpen, 
  Target,
  FileSpreadsheet,
  FileType,
  Monitor,
  Keyboard,
  Mouse,
  Download,
  Upload,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CultureInformatiqueBasePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/emc-equip-train/images/teaminfo.jpg"
              alt="Culture informatique de base"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-blue-900/75"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-cyan-200 mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="bg-cyan-600 text-white px-4 py-2">
                  <Computer className="w-4 h-4 mr-2" />
                  Informatique de Base
                </Badge>
                <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2">
                  <Monitor className="w-4 h-4 mr-2" />
                  Outils Numériques
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Culture Informatique de Base
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-cyan-100 leading-relaxed">
                Acquérez les compétences informatiques essentielles pour évoluer dans l'environnement numérique moderne du secteur minier
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
                  <span className="font-semibold">2.000.000FG</span>
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
                    Entrez dans l'ère numérique avec confiance
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    La digitalisation du secteur minier nécessite des compétences informatiques de base 
                    solides. Cette formation vous donnera les fondamentaux pour utiliser efficacement 
                    les outils numériques essentiels du monde professionnel moderne.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <Mail className="w-8 h-8 text-cyan-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Communication</h4>
                        <p className="text-sm text-gray-600">Email professionnel</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <FileSpreadsheet className="w-8 h-8 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Données</h4>
                        <p className="text-sm text-gray-600">Excel et tableaux</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-8">
                  <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <Target className="w-6 h-6 mr-3" />
                        Objectifs d'apprentissage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {[
                          "Gestion des emails et communication numérique",
                          "Organisation et gestion de fichiers",
                          "Bases d'Excel pour la saisie de données",
                          "Création et manipulation de documents PDF"
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
                <p className="text-xl text-gray-600">Progression étape par étape vers l'autonomie numérique</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Mail className="w-8 h-8 text-blue-600" />,
                    title: "Communication Email",
                    description: "Maîtrisez la communication professionnelle par email",
                    week: "Semaine 1"
                  },
                  {
                    icon: <FolderOpen className="w-8 h-8 text-green-600" />,
                    title: "Gestion de Fichiers",
                    description: "Organisez et gérez efficacement vos documents",
                    week: "Semaine 2"
                  },
                  {
                    icon: <FileSpreadsheet className="w-8 h-8 text-orange-600" />,
                    title: "Excel Fondamental",
                    description: "Créez et gérez des tableaux de données",
                    week: "Semaine 3"
                  },
                  {
                    icon: <FileType className="w-8 h-8 text-purple-600" />,
                    title: "Documents PDF",
                    description: "Créez, modifiez et partagez des fichiers PDF",
                    week: "Semaine 4"
                  }
                ].map((module, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{module.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{module.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                      <Badge variant="outline" className="text-xs">{module.week}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Curriculum */}
        <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Programme détaillé</h2>
                <p className="text-xl text-gray-600">Chaque semaine, une compétence essentielle</p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    week: "Semaine 1",
                    title: "Communication Email Professionnelle",
                    icon: <Mail className="w-10 h-10 text-blue-600" />,
                    skills: [
                      "Création et configuration d'un compte email",
                      "Rédaction d'emails professionnels efficaces",
                      "Gestion des pièces jointes et téléchargements",
                      "Organisation des dossiers et de la boîte de réception",
                      "Étiquette email et communication respectueuse"
                    ]
                  },
                  {
                    week: "Semaine 2",
                    title: "Organisation et Gestion de Fichiers",
                    icon: <FolderOpen className="w-10 h-10 text-green-600" />,
                    skills: [
                      "Navigation dans l'explorateur de fichiers",
                      "Création de dossiers et structure logique",
                      "Renommage, copie et déplacement de fichiers",
                      "Recherche efficace de documents",
                      "Sauvegarde et archivage de données"
                    ]
                  },
                  {
                    week: "Semaine 3",
                    title: "Excel : Bases et Saisie de Données",
                    icon: <FileSpreadsheet className="w-10 h-10 text-orange-600" />,
                    skills: [
                      "Interface Excel et navigation dans les cellules",
                      "Saisie et formatage de données",
                      "Création de tableaux simples",
                      "Calculs de base et formules essentielles",
                      "Impression et partage de feuilles de calcul"
                    ]
                  },
                  {
                    week: "Semaine 4",
                    title: "Documents PDF et Finalisation",
                    icon: <FileType className="w-10 h-10 text-purple-600" />,
                    skills: [
                      "Lecture et navigation dans les PDF",
                      "Conversion de documents en PDF",
                      "Annotation et commentaires sur PDF",
                      "Fusion et division de fichiers PDF",
                      "Révision générale et évaluation pratique"
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

        {/* Digital Tools Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Outils numériques maîtrisés</h2>
                <p className="text-xl text-gray-600">Les essentiels du travail moderne</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    tool: "Navigateurs Web",
                    icon: <Monitor className="w-12 h-12 text-blue-600" />,
                    features: ["Navigation internet", "Téléchargements", "Favoris et historique", "Sécurité en ligne"]
                  },
                  {
                    tool: "Gestionnaires Email",
                    icon: <Mail className="w-12 h-12 text-green-600" />,
                    features: ["Outlook/Gmail", "Organisation messages", "Calendrier", "Contacts professionnels"]
                  },
                  {
                    tool: "Explorateur Fichiers",
                    icon: <FolderOpen className="w-12 h-12 text-orange-600" />,
                    features: ["Navigation dossiers", "Recherche avancée", "Propriétés fichiers", "Raccourcis clavier"]
                  },
                  {
                    tool: "Microsoft Excel",
                    icon: <FileSpreadsheet className="w-12 h-12 text-purple-600" />,
                    features: ["Tableaux de données", "Calculs simples", "Formatage cellules", "Graphiques de base"]
                  },
                  {
                    tool: "Lecteurs PDF",
                    icon: <FileType className="w-12 h-12 text-red-600" />,
                    features: ["Adobe Reader", "Annotations", "Formulaires", "Sécurité documents"]
                  },
                  {
                    tool: "Outils Sécurité",
                    icon: <Shield className="w-12 h-12 text-cyan-600" />,
                    features: ["Antivirus", "Mots de passe", "Sauvegardes", "Confidentialité"]
                  }
                ].map((toolset, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">{toolset.icon}</div>
                      <h3 className="text-lg font-bold mb-4 text-gray-900">{toolset.tool}</h3>
                      <ul className="space-y-2">
                        {toolset.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
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

        {/* Certification */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                  <h2 className="text-3xl font-bold mb-4">Certification Professionnelle</h2>
                  <p className="text-xl mb-6 text-cyan-100">
                    Certificat de Culture Informatique
                  </p>
                  <p className="text-lg text-cyan-100 leading-relaxed">
                    Cette certification atteste de votre maîtrise des outils informatiques 
                    essentiels pour le travail dans l'environnement numérique moderne.
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
                Prêt à maîtriser les outils numériques essentiels ?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Rejoignez nos formations et développez votre autonomie numérique pour exceller dans le monde professionnel moderne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
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

export default CultureInformatiqueBasePage;
