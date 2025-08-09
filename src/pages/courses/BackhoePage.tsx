import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, Clock, Users, Award, CheckCircle, GraduationCap, Target, TrendingUp, BookOpen, UserCheck, Zap, Play, Shield, DollarSign, Phone, Mail, MapPin, Calendar, FileText, Star, AlertTriangle, Wrench, Menu, X, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BackhoePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Header />

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux formations
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('overview')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Aperçu</button>
              <button onClick={() => scrollToSection('objectives')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Objectifs</button>
              <button onClick={() => scrollToSection('program')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Programme</button>
              <button onClick={() => scrollToSection('certification')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Certification</button>
              <button onClick={() => scrollToSection('roi')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">ROI</button>
              <button onClick={() => scrollToSection('inscription')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Inscription</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-white shadow-lg">
              <div className="flex flex-col space-y-1 py-4">
                <button onClick={() => scrollToSection('overview')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Aperçu</button>
                <button onClick={() => scrollToSection('objectives')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Objectifs</button>
                <button onClick={() => scrollToSection('program')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Programme</button>
                <button onClick={() => scrollToSection('certification')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Certification</button>
                <button onClick={() => scrollToSection('roi')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">ROI</button>
                <button onClick={() => scrollToSection('inscription')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Inscription</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 text-white border-0">
                  Formation d'Équipement Lourd
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Formation d'Opérateur de
                  <span className="block text-cyan-300">Pelle Rétrocaveuse</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Maîtrisez l'opération professionnelle de la pelle rétrocaveuse avec notre programme 
                  de certification reconnu dans l'industrie minière et des travaux publics.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/admissions" className="w-full sm:w-auto">
                    <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      S'inscrire Maintenant
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="border-2 border-cyan-300 text-cyan-100 hover:bg-cyan-300 hover:text-blue-900 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold bg-white/10 backdrop-blur-sm w-full sm:w-auto">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="hidden sm:inline">Télécharger la Brochure</span>
                      <span className="sm:hidden">Télécharger</span>
                    </Button>
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                    <Clock className="w-6 h-6 mr-3 text-cyan-300" />
                    <div>
                      <div className="font-semibold">5 Semaines</div>
                      <div className="text-sm text-blue-200">Formation</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                    <Users className="w-6 h-6 mr-3 text-cyan-300" />
                    <div>
                      <div className="font-semibold">12 Places</div>
                      <div className="text-sm text-blue-200">Max/Session</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 col-span-2 md:col-span-1">
                    <Award className="w-6 h-6 mr-3 text-cyan-300" />
                    <div>
                      <div className="font-semibold">Certifié</div>
                      <div className="text-sm text-blue-200">ISO 29990</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="aspect-video bg-black/30 rounded-xl mb-6 relative overflow-hidden group cursor-pointer">
                    <img
                      src="/sip-equip-train/images/Backhoe-2.png"
                      alt="Pelle Rétrocaveuse en Action"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Découvrez la Formation</h3>
                  <p className="text-blue-100 mb-4">Voir nos installations et équipements de formation</p>
                  <Button variant="outline" className="w-full border-2 border-cyan-300 text-cyan-100 hover:bg-cyan-300 hover:text-blue-900 font-semibold bg-white/10 backdrop-blur-sm">
                    Visitez nos installations
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Aperçu de la Formation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Notre programme de formation d'opérateur de pelle rétrocaveuse vous prépare à devenir 
                  un professionnel qualifié, capable d'opérer en toute sécurité dans des environnements 
                  industriels exigeants.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Card className="border-l-4 border-l-blue-600 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600" />
                        <CardTitle className="text-xl">Analyse des Risques</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        L'opération d'une pelle rétrocaveuse présente des défis spécifiques qui nécessitent 
                        une formation approfondie :
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Risques de basculement en terrain instable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Contact avec lignes électriques aériennes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Accidents lors de travaux d'excavation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Maintenance préventive insuffisante</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="border-l-4 border-l-green-600 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-green-600" />
                        <CardTitle className="text-xl">Notre Solution</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Une formation complète et pratique pour garantir la sécurité et l'efficacité :
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Formation théorique et pratique approfondie</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Procédures de sécurité strictes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Techniques d'excavation optimisées</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Maintenance préventive systématique</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Objectifs de Formation
                </h2>
                <p className="text-xl text-gray-600">
                  Développez les compétences essentielles pour devenir un opérateur expert
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Maîtrise Technique</h3>
                    <p className="text-blue-100">
                      Apprentissage des commandes hydrauliques, techniques d'excavation et procédures de maintenance de base.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-600 text-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Sécurité Opérationnelle</h3>
                    <p className="text-blue-100">
                      Formation aux règles de sécurité, prévention des accidents et gestion des situations d'urgence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Précision d'Excavation</h3>
                    <p className="text-blue-100">
                      Développement de la précision dans les travaux de terrassement et d'excavation sélective.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 text-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Productivité</h3>
                    <p className="text-blue-100">
                      Optimisation des cycles de travail et techniques d'efficacité opérationnelle.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Connaissances Réglementaires</h3>
                    <p className="text-blue-100">
                      Maîtrise des normes de sécurité minière et réglementations environnementales.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <UserCheck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Certification Professionnelle</h3>
                    <p className="text-blue-100">
                      Obtention d'une certification reconnue pour l'opération de pelles rétrocaveuses.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section id="program" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Structure du Programme
                </h2>
                <p className="text-xl text-gray-600">
                  Un parcours de formation progressif sur 5 semaines
                </p>
              </div>

              <div className="space-y-8">
                {/* Week 1 */}
                <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="lg:w-1/4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full text-white font-bold text-xl mb-4">
                          1
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Semaine 1</h3>
                        <p className="text-blue-600 font-semibold">Fondamentaux</p>
                      </div>
                      <div className="lg:w-3/4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Introduction et Sécurité de Base</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Présentation de l'équipement et composants</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Règles de sécurité fondamentales</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Équipements de protection individuelle</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Inspection pré-opérationnelle</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Week 2 */}
                <Card className="border-l-4 border-l-cyan-600 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="lg:w-1/4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-full text-white font-bold text-xl mb-4">
                          2
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Semaine 2</h3>
                        <p className="text-cyan-600 font-semibold">Commandes de Base</p>
                      </div>
                      <div className="lg:w-3/4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Manipulation et Commandes Hydrauliques</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Système hydraulique et commandes</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Mouvements de base du bras et godet</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Coordination des mouvements</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Exercices pratiques en simulateur</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Week 3 */}
                <Card className="border-l-4 border-l-teal-600 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="lg:w-1/4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full text-white font-bold text-xl mb-4">
                          3
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Semaine 3</h3>
                        <p className="text-teal-600 font-semibold">Techniques Avancées</p>
                      </div>
                      <div className="lg:w-3/4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Excavation et Terrassement</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Techniques d'excavation précise</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Terrassement et nivellement</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Chargement et déchargement</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Travail en terrain difficile</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Week 4 */}
                <Card className="border-l-4 border-l-indigo-600 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="lg:w-1/4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full text-white font-bold text-xl mb-4">
                          4
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Semaine 4</h3>
                        <p className="text-indigo-600 font-semibold">Maintenance</p>
                      </div>
                      <div className="lg:w-3/4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Maintenance et Dépannage</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Maintenance préventive quotidienne</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Diagnostic de pannes courantes</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Changement d'huiles et filtres</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Documentation technique</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Week 5 */}
                <Card className="border-l-4 border-l-purple-600 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="lg:w-1/4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full text-white font-bold text-xl mb-4">
                          5
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Semaine 5</h3>
                        <p className="text-purple-600 font-semibold">Évaluation</p>
                      </div>
                      <div className="lg:w-3/4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Évaluation et Certification</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Évaluation pratique complète</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Test théorique de sécurité</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Simulation de situations d'urgence</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Remise de certification</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section id="certification" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Certification et Reconnaissance
                </h2>
                <p className="text-xl text-gray-600">
                  Obtenez une certification reconnue dans l'industrie
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Award className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Certification SIP</h3>
                      <p className="text-blue-100 mb-6">
                        Certificat d'Opérateur de Pelle Rétrocaveuse reconnu par l'industrie minière guinéenne
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-300" />
                          <span className="text-sm">Valide 3 ans</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-300" />
                          <span className="text-sm">Reconnu ISO 29990</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-300" />
                          <span className="text-sm">Accès privilégié emploi</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Compétences Certifiées</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">Opération sécurisée de pelles rétrocaveuses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">Techniques d'excavation professionnelles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">Maintenance préventive de base</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">Conformité aux normes de sécurité</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Débouchés Professionnels</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">Opérateur dans mines de bauxite</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">Entreprises de travaux publics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">Projets d'infrastructure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">Opérateur freelance certifié</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Informations Pratiques
                </h2>
                <p className="text-xl text-gray-600">
                  Tout ce que vous devez savoir pour commencer
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Prérequis</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Âge minimum : 18 ans</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Aptitude physique validée par médecin</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Niveau lecture/écriture de base</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Motivation et sérieux</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Modalités</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">40h/semaine pendant 5 semaines</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Maximum 12 participants/session</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Centre de formation SIP - Boké</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Certification en fin de formation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section id="roi" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Retour sur Investissement
                </h2>
                <p className="text-xl text-gray-600">
                  Une formation qui transforme votre carrière
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
                  <CardContent className="p-8">
                    <DollarSign className="w-16 h-16 mx-auto mb-6 text-green-200" />
                    <h3 className="text-3xl font-bold mb-2">+150%</h3>
                    <p className="text-green-100 font-medium mb-4">Augmentation Salariale</p>
                    <p className="text-sm text-green-200">
                      Les opérateurs certifiés gagnent en moyenne 150% de plus que les non-certifiés
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
                  <CardContent className="p-8">
                    <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                    <h3 className="text-3xl font-bold mb-2">95%</h3>
                    <p className="text-blue-100 font-medium mb-4">Taux d'Emploi</p>
                    <p className="text-sm text-blue-200">
                      95% de nos diplômés trouvent un emploi dans les 3 mois suivant la formation
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white">
                  <CardContent className="p-8">
                    <Zap className="w-16 h-16 mx-auto mb-6 text-purple-200" />
                    <h3 className="text-3xl font-bold mb-2">3 Mois</h3>
                    <p className="text-purple-100 font-medium mb-4">Amortissement</p>
                    <p className="text-sm text-purple-200">
                      Coût de formation amorti en 3 mois grâce à l'augmentation salariale
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 text-center">
                <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white max-w-4xl mx-auto">
                  <CardContent className="p-12">
                    <h3 className="text-3xl font-bold mb-6">Investissez dans Votre Avenir</h3>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                      Une formation d'opérateur de pelle rétrocaveuse est plus qu'un apprentissage technique - 
                      c'est un passeport vers une carrière stable et bien rémunérée dans l'industrie minière.
                    </p>
                    <Link to="/admissions">
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-xl w-full sm:w-auto">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                        <span className="hidden sm:inline">Réservez Votre Place Maintenant</span>
                        <span className="sm:hidden">Réservez Maintenant</span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Questions Fréquentes
                </h2>
                <p className="text-xl text-gray-600">
                  Trouvez les réponses à vos questions
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Quelle est la différence entre une pelle rétrocaveuse et une pelle hydraulique ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    Une pelle rétrocaveuse combine les fonctions d'un chargeur frontal et d'une pelle hydraulique. 
                    Elle peut creuser vers le bas depuis sa position et aussi charger des matériaux. 
                    Notre formation couvre les deux aspects de cette machine polyvalente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Quels sont les débouchés après la formation ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    Nos diplômés travaillent dans les mines de bauxite, les entreprises de travaux publics, 
                    les projets d'infrastructure gouvernementaux, ou deviennent opérateurs freelance. 
                    La demande est forte avec des salaires attractifs (300,000 à 800,000 GNF/mois).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    La formation inclut-elle la maintenance de base ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    Oui, la semaine 4 est entièrement dédiée à la maintenance préventive : 
                    vérifications quotidiennes, changement d'huiles et filtres, diagnostic de pannes courantes, 
                    et utilisation de la documentation technique.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Quelle est la validité de la certification ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    Notre certification est valide 3 ans et reconnue par l'ensemble de l'industrie minière guinéenne. 
                    Elle peut être renouvelée par une formation de mise à niveau d'une semaine.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Proposez-vous des facilités de paiement ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    Oui, nous proposons plusieurs options : paiement en 3 fois sans frais, 
                    bourses pour candidats méritants, et partenariats avec des employeurs 
                    pour financer la formation de leurs futurs employés.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="inscription" className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Inscription et Contact
                </h2>
                <p className="text-xl text-blue-100">
                  Réservez votre place pour la prochaine session
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="shadow-2xl border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Prochaines Sessions</h3>
                    
                    <div className="space-y-6">
                      <div className="border-l-4 border-l-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-gray-900">Session Février 2024</h4>
                        <p className="text-blue-600 font-medium">5 février - 9 mars 2024</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge className="bg-green-100 text-green-800">6 places restantes</Badge>
                          <span className="text-2xl font-bold text-blue-600">850,000 GNF</span>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-cyan-600 pl-6 py-4 bg-cyan-50 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-gray-900">Session Avril 2024</h4>
                        <p className="text-cyan-600 font-medium">1 avril - 3 mai 2024</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge className="bg-blue-100 text-blue-800">12 places disponibles</Badge>
                          <span className="text-2xl font-bold text-cyan-600">850,000 GNF</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-8" />

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-2">🎉 Offre Spéciale</h4>
                      <p className="text-yellow-700 mb-4">
                        Inscription avant le 15 janvier 2024 : <strong>100,000 GNF de réduction</strong>
                      </p>
                      <p className="text-sm text-yellow-600">
                        Profitez de cette réduction exceptionnelle pour investir dans votre avenir !
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Téléphone</h4>
                          <p className="text-gray-600">+224 622 123 456</p>
                          <p className="text-gray-600">+224 666 789 012</p>
                          <p className="text-sm text-gray-500">Lun-Ven: 8h-17h</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Email</h4>
                          <p className="text-gray-600">formation@sip-boke.com</p>
                          <p className="text-gray-600">contact@sip-boke.com</p>
                          <p className="text-sm text-gray-500">Réponse sous 24h</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Adresse</h4>
                          <p className="text-gray-600">Centre de Formation SIP</p>
                          <p className="text-gray-600">Quartier Darsalam, Boké</p>
                          <p className="text-gray-600">République de Guinée</p>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-8" />

                    <div className="space-y-4">
                      <Link to="/admissions">
                        <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Réserver Maintenant
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline" size="lg" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 sm:py-4 text-base sm:text-lg font-semibold">
                          <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Demander un Devis
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 transition-transform group-hover:scale-110" />
      </button>

      <Footer />
    </div>
  );
};

export default BackhoePage;
