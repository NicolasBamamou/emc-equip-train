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
  MessageSquare, 
  HandHeart, 
  Target, 
  Shield,
  TrendingUp,
  Brain,
  Lightbulb,
  Heart,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ResolutionConflitsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/trainer.jpg"
              alt="Résolution de conflits et feedback"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/75"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-purple-200 mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="bg-purple-600 text-white px-4 py-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Communication
                </Badge>
                <Badge variant="secondary" className="bg-indigo-600 text-white px-4 py-2">
                  <HandHeart className="w-4 h-4 mr-2" />
                  Relations Humaines
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Résolution de Conflits et Culture du Feedback
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
                Développez vos compétences en résolution de conflits et apprenez à donner et recevoir des feedbacks constructifs
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 mr-3" />
                  <span className="font-semibold">3 Semaines</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Users className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Intermédiaire</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Award className="w-5 h-5 mr-3" />
                  <span className="font-semibold">1.800.000FG</span>
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
                    Transformez les tensions en opportunités
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Dans l'environnement exigeant du secteur minier, la capacité à gérer les conflits 
                    et à communiquer de manière constructive est essentielle. Cette formation vous 
                    donnera les outils pour transformer les tensions en opportunités de croissance 
                    et d'amélioration continue.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <Shield className="w-8 h-8 text-purple-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Prévention</h4>
                        <p className="text-sm text-gray-600">Éviter les escalades</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Amélioration</h4>
                        <p className="text-sm text-gray-600">Performance d'équipe</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-8">
                  <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <Target className="w-6 h-6 mr-3" />
                        Objectifs d'apprentissage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {[
                          "Identification et analyse des conflits",
                          "Techniques de médiation et négociation",
                          "Feedback constructif et bienveillant",
                          "Prévention des conflits en équipe"
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
                <p className="text-xl text-gray-600">Un apprentissage progressif des compétences relationnelles</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    week: "Semaine 1",
                    title: "Comprendre les conflits",
                    icon: <Brain className="w-12 h-12 text-purple-600" />,
                    content: [
                      "Types et sources de conflits",
                      "Signaux d'alerte précoces",
                      "Impact sur la productivité",
                      "Auto-évaluation comportementale"
                    ]
                  },
                  {
                    week: "Semaine 2",
                    title: "Techniques de résolution",
                    icon: <Scale className="w-12 h-12 text-indigo-600" />,
                    content: [
                      "Médiation et négociation",
                      "Communication non-violente",
                      "Recherche de solutions gagnant-gagnant",
                      "Pratiques de terrain"
                    ]
                  },
                  {
                    week: "Semaine 3",
                    title: "Culture du feedback",
                    icon: <Heart className="w-12 h-12 text-pink-600" />,
                    content: [
                      "Donner un feedback constructif",
                      "Recevoir les critiques positivement",
                      "Créer un environnement de confiance",
                      "Suivi et amélioration continue"
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

        {/* Conflict Scenarios */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Scénarios de conflits miniers</h2>
                <p className="text-xl text-gray-600">Apprenez à gérer les situations typiques du secteur</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Conflits opérationnels",
                    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
                    scenarios: [
                      "Désaccords sur les procédures de sécurité",
                      "Conflits de priorités entre équipes",
                      "Résistance aux changements technologiques",
                      "Problèmes de communication inter-services"
                    ]
                  },
                  {
                    title: "Tensions interpersonnelles",
                    icon: <HandHeart className="w-8 h-8 text-green-600" />,
                    scenarios: [
                      "Différences culturelles en équipe",
                      "Gestion du stress et de la fatigue",
                      "Conflits de leadership informel",
                      "Inégalités perçues dans les affectations"
                    ]
                  },
                  {
                    title: "Enjeux de performance",
                    icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
                    scenarios: [
                      "Feedback sur la productivité",
                      "Évaluation des compétences",
                      "Objectifs de sécurité non atteints",
                      "Amélioration continue des processus"
                    ]
                  },
                  {
                    title: "Situations d'urgence",
                    icon: <Shield className="w-8 h-8 text-red-600" />,
                    scenarios: [
                      "Gestion de crise et décisions rapides",
                      "Communication sous pression",
                      "Coordination d'équipes multiples",
                      "Débriefing post-incident"
                    ]
                  }
                ].map((category, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                      {category.icon}
                      <CardTitle className="ml-3 text-lg">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.scenarios.map((scenario, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <Lightbulb className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {scenario}
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

        {/* Skills Development */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Compétences développées</h2>
                <p className="text-xl text-gray-600">Des aptitudes transférables à tous les contextes</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    category: "Intelligence émotionnelle",
                    icon: <Heart className="w-8 h-8 text-pink-600" />,
                    skills: [
                      "Reconnaissance des émotions",
                      "Gestion de ses propres réactions",
                      "Empathie et compréhension",
                      "Régulation émotionnelle"
                    ]
                  },
                  {
                    category: "Communication efficace",
                    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
                    skills: [
                      "Écoute active et bienveillante",
                      "Expression claire et respectueuse",
                      "Reformulation et clarification",
                      "Communication non-verbale"
                    ]
                  },
                  {
                    category: "Résolution créative",
                    icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
                    skills: [
                      "Analyse objective des situations",
                      "Recherche de solutions innovantes",
                      "Négociation collaborative",
                      "Suivi et évaluation des accords"
                    ]
                  }
                ].map((skillSet, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-2">{skillSet.icon}</div>
                      <CardTitle className="text-lg">{skillSet.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {skillSet.skills.map((skill, idx) => (
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
              <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                  <h2 className="text-3xl font-bold mb-4">Certification Professionnelle</h2>
                  <p className="text-xl mb-6 text-purple-100">
                    Certificat de Résolution de Conflits
                  </p>
                  <p className="text-lg text-purple-100 leading-relaxed">
                    Cette certification atteste de votre capacité à gérer les conflits de manière 
                    constructive et à favoriser une culture de feedback positif dans votre environnement professionnel.
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
                Prêt à transformer votre approche des relations professionnelles ?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Rejoignez nos formations et développez les compétences relationnelles essentielles pour réussir dans le secteur minier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
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

export default ResolutionConflitsPage;
