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
  Globe, 
  MessageSquare, 
  BookOpen, 
  Target,
  Mic,
  FileText,
  Video,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AnglaisTechniqueMinePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/sip-equip-train/images/teaminfo.jpg"
              alt="Anglais technique minier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/75"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-blue-200 mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux formations
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  Communication Internationale
                </Badge>
                <Badge variant="secondary" className="bg-indigo-600 text-white px-4 py-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Anglais Technique
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Anglais Technique pour la Mine
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Maîtrisez le vocabulaire technique anglais spécifique à l'industrie minière pour communiquer efficacement dans un contexte international
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 mr-3" />
                  <span className="font-semibold">6 Semaines</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Users className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Débutant à Intermédiaire</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Award className="w-5 h-5 mr-3" />
                  <span className="font-semibold">2.400.000FG</span>
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
                    Communiquez sans barrières dans l'industrie minière
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Dans un secteur de plus en plus globalisé, la maîtrise de l'anglais technique minier 
                    est devenue indispensable. Cette formation vous permettra de communiquer efficacement 
                    avec les équipes internationales et de comprendre la documentation technique en anglais.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <Globe className="w-8 h-8 text-blue-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Communication Globale</h4>
                        <p className="text-sm text-gray-600">Équipes internationales</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <BookOpen className="w-8 h-8 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Documentation</h4>
                        <p className="text-sm text-gray-600">Manuels techniques</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-8">
                  <Card className="bg-white shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <Target className="w-6 h-6 mr-3" />
                        Objectifs d'apprentissage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {[
                          "Vocabulaire technique minier en anglais",
                          "Communication opérationnelle sur site",
                          "Lecture de documents techniques en anglais",
                          "Interaction avec les équipes internationales"
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
                <p className="text-xl text-gray-600">Un apprentissage progressif et pratique</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                    title: "Vocabulaire de base",
                    description: "Termes techniques essentiels du secteur minier",
                    duration: "Semaine 1-2"
                  },
                  {
                    icon: <Mic className="w-8 h-8 text-green-600" />,
                    title: "Communication orale",
                    description: "Dialogues et échanges sur le terrain",
                    duration: "Semaine 3-4"
                  },
                  {
                    icon: <FileText className="w-8 h-8 text-purple-600" />,
                    title: "Documentation technique",
                    description: "Lecture et compréhension de manuels",
                    duration: "Semaine 5"
                  },
                  {
                    icon: <Video className="w-8 h-8 text-orange-600" />,
                    title: "Pratique interactive",
                    description: "Simulations et mises en situation",
                    duration: "Semaine 6"
                  }
                ].map((module, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{module.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{module.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                      <Badge variant="outline" className="text-xs">{module.duration}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methods & Tools */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Méthodes d'apprentissage</h2>
                <p className="text-xl text-gray-600">Des outils modernes pour un apprentissage efficace</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Headphones className="w-12 h-12 text-blue-600" />,
                    title: "Écoute interactive",
                    description: "Exercices d'écoute avec du vocabulaire minier authentique et des situations réelles sur site.",
                    features: ["Dialogues sur site", "Consignes de sécurité", "Briefings techniques"]
                  },
                  {
                    icon: <MessageSquare className="w-12 h-12 text-green-600" />,
                    title: "Expression orale",
                    description: "Pratique de la communication orale dans des contextes professionnels miniers.",
                    features: ["Jeux de rôle", "Présentations", "Conversations techniques"]
                  },
                  {
                    icon: <FileText className="w-12 h-12 text-purple-600" />,
                    title: "Compréhension écrite",
                    description: "Lecture et analyse de documents techniques authentiques du secteur minier.",
                    features: ["Manuels d'équipement", "Procédures de sécurité", "Rapports d'incident"]
                  }
                ].map((method, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">{method.icon}</div>
                      <h3 className="text-xl font-bold mb-4 text-center text-gray-900">{method.title}</h3>
                      <p className="text-gray-600 mb-6 text-center">{method.description}</p>
                      <ul className="space-y-2">
                        {method.features.map((feature, idx) => (
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
              <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardContent className="p-12 text-center">
                  <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                  <h2 className="text-3xl font-bold mb-4">Certification Professionnelle</h2>
                  <p className="text-xl mb-6 text-blue-100">
                    Certificat d'Anglais Technique Minier
                  </p>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Cette certification atteste de votre capacité à communiquer efficacement en anglais 
                    dans un environnement minier professionnel et à comprendre la documentation technique spécialisée.
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
                Prêt à maîtriser l'anglais technique minier ?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Rejoignez nos formations et développez vos compétences linguistiques pour exceller dans un environnement international.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
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

export default AnglaisTechniqueMinePage;
