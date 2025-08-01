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
  Shield, 
  Lock, 
  Key, 
  Target,
  AlertTriangle,
  Eye,
  Smartphone,
  Wifi,
  Mail,
  Globe,
  FileWarning,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CybersecuriteEtiquettePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/emc-equip-train/images/expert.jpg"
              alt="Cybersécurité et étiquette digitale"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-pink-900/75"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-red-200 mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="bg-red-600 text-white px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Cybersécurité
                </Badge>
                <Badge variant="secondary" className="bg-pink-600 text-white px-4 py-2">
                  <UserCheck className="w-4 h-4 mr-2" />
                  Étiquette Digitale
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Bases de Cybersécurité & Étiquette Digitale
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
                Développez une culture de cybersécurité et apprenez les bonnes pratiques digitales pour protéger les données sensibles de l'entreprise
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
                  <span className="font-semibold">1.400.000FG</span>
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
                    Protégez votre environnement numérique professionnel
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Dans un monde de plus en plus connecté, la cybersécurité est devenue essentielle 
                    pour protéger les informations sensibles de l'entreprise. Cette formation vous 
                    donnera les bases pour naviguer en sécurité dans l'environnement numérique 
                    tout en respectant l'étiquette professionnelle digitale.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <Lock className="w-8 h-8 text-red-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Protection</h4>
                        <p className="text-sm text-gray-600">Données sécurisées</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <UserCheck className="w-8 h-8 text-pink-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Professionnalisme</h4>
                        <p className="text-sm text-gray-600">Communication respectueuse</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-8">
                  <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <Target className="w-6 h-6 mr-3" />
                        Objectifs d'apprentissage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {[
                          "Principes de base de la cybersécurité",
                          "Protection des mots de passe et données",
                          "Étiquette professionnelle numérique",
                          "Prévention des risques cyber en entreprise"
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

        {/* Two-Week Program */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Programme de formation</h2>
                <p className="text-xl text-gray-600">2 semaines pour maîtriser les essentiels</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    week: "Semaine 1",
                    title: "Cybersécurité Fondamentale",
                    icon: <Shield className="w-12 h-12 text-red-600" />,
                    modules: [
                      "Comprendre les menaces cyber courantes",
                      "Gestion sécurisée des mots de passe",
                      "Protection contre les emails malveillants",
                      "Sécurité des réseaux Wi-Fi",
                      "Sauvegarde et protection des données"
                    ]
                  },
                  {
                    week: "Semaine 2", 
                    title: "Étiquette Digitale Professionnelle",
                    icon: <UserCheck className="w-12 h-12 text-pink-600" />,
                    modules: [
                      "Communication professionnelle en ligne",
                      "Gestion de l'identité numérique",
                      "Bonnes pratiques sur les réseaux sociaux",
                      "Collaboration respectueuse à distance",
                      "Prévention des situations embarrassantes"
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

        {/* Cyber Threats */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Menaces cyber courantes</h2>
                <p className="text-xl text-gray-600">Apprenez à les reconnaître et à vous en protéger</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    threat: "Phishing",
                    icon: <Mail className="w-8 h-8 text-orange-600" />,
                    description: "Emails frauduleux",
                    prevention: ["Vérifier l'expéditeur", "Ne pas cliquer sur liens suspects", "Signaler les emails douteux"]
                  },
                  {
                    threat: "Malware",
                    icon: <FileWarning className="w-8 h-8 text-red-600" />,
                    description: "Logiciels malveillants",
                    prevention: ["Antivirus à jour", "Éviter téléchargements suspects", "Scanner les clés USB"]
                  },
                  {
                    threat: "Wi-Fi non sécurisé",
                    icon: <Wifi className="w-8 h-8 text-blue-600" />,
                    description: "Réseaux publics risqués",
                    prevention: ["Utiliser VPN", "Éviter transactions sensibles", "Préférer données mobiles"]
                  },
                  {
                    threat: "Mots de passe faibles",
                    icon: <Key className="w-8 h-8 text-green-600" />,
                    description: "Accès non autorisé",
                    prevention: ["Mots de passe complexes", "Authentification 2FA", "Gestionnaire de mots de passe"]
                  }
                ].map((threat, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{threat.icon}</div>
                      <h3 className="text-lg font-bold mb-2 text-center text-gray-900">{threat.threat}</h3>
                      <p className="text-center text-gray-600 text-sm mb-4">{threat.description}</p>
                      <div className="space-y-2">
                        {threat.prevention.map((tip, idx) => (
                          <div key={idx} className="flex items-start text-xs text-gray-700">
                            <CheckCircle className="w-3 h-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
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

        {/* Digital Etiquette */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Règles d'étiquette digitale</h2>
                <p className="text-xl text-gray-600">Maintenez votre professionnalisme en ligne</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    category: "Communication Email",
                    icon: <Mail className="w-12 h-12 text-blue-600" />,
                    rules: [
                      "Objet clair et précis",
                      "Salutations et formules de politesse",
                      "Réponse dans les 24h",
                      "Éviter 'Répondre à tous' inutilement",
                      "Relecture avant envoi"
                    ]
                  },
                  {
                    category: "Réunions Virtuelles",
                    icon: <Smartphone className="w-12 h-12 text-green-600" />,
                    rules: [
                      "Arriver à l'heure",
                      "Micro coupé par défaut",
                      "Tenue professionnelle",
                      "Arrière-plan approprié",
                      "Participation active et respectueuse"
                    ]
                  },
                  {
                    category: "Réseaux Sociaux",
                    icon: <Globe className="w-12 h-12 text-purple-600" />,
                    rules: [
                      "Séparer vie privée et professionnelle",
                      "Éviter contenus controversés",
                      "Respecter la confidentialité entreprise",
                      "Image professionnelle cohérente",
                      "Réfléchir avant de publier"
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
                        {category.rules.map((rule, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {rule}
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

        {/* Security Tools */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Outils de sécurité essentiels</h2>
                <p className="text-xl text-gray-600">Technologies pour votre protection numérique</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    tool: "Antivirus",
                    icon: <Shield className="w-8 h-8 text-green-600" />,
                    purpose: "Protection contre malware"
                  },
                  {
                    tool: "VPN",
                    icon: <Globe className="w-8 h-8 text-blue-600" />,
                    purpose: "Connexion sécurisée"
                  },
                  {
                    tool: "Gestionnaire mots de passe",
                    icon: <Key className="w-8 h-8 text-purple-600" />,
                    purpose: "Mots de passe sécurisés"
                  },
                  {
                    tool: "Authentification 2FA",
                    icon: <Lock className="w-8 h-8 text-red-600" />,
                    purpose: "Double protection"
                  }
                ].map((tool, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{tool.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{tool.tool}</h3>
                      <p className="text-gray-600 text-sm">{tool.purpose}</p>
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
              <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                  <h2 className="text-3xl font-bold mb-4">Certification Professionnelle</h2>
                  <p className="text-xl mb-6 text-red-100">
                    Attestation de Cybersécurité
                  </p>
                  <p className="text-lg text-red-100 leading-relaxed">
                    Cette attestation certifie votre compréhension des principes de cybersécurité 
                    et votre capacité à adopter des comportements numériques professionnels appropriés.
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
                Prêt à sécuriser votre environnement numérique ?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Rejoignez nos formations et développez les compétences essentielles pour naviguer en sécurité dans le monde digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
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

export default CybersecuriteEtiquettePage;
