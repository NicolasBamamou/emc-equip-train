import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, Shield, Wrench, MapPin, FileText, Award, Settings, Users, Target, CheckCircle, Star, Phone, Mail, Menu, X, Building, User, Gauge, Truck, Play, Gift, Info, ChevronRight } from 'lucide-react';

const OperationChargeusePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Truck className="text-orange-600 mr-2" size={32} />
                <span className="text-xl font-bold text-gray-900">SIP<span className="text-orange-600">Pro</span></span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <button onClick={() => scrollToSection('overview')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Aperçu</button>
                <button onClick={() => scrollToSection('objectives')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Objectifs</button>
                <button onClick={() => scrollToSection('structure')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Programme</button>
                <button onClick={() => scrollToSection('certification')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Certification</button>
                <button onClick={() => scrollToSection('roi')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Avantages</button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <Button onClick={() => scrollToSection('register')} className="ml-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-lg">
                S'inscrire maintenant
              </Button>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button 
                type="button" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('overview')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Aperçu</button>
              <button onClick={() => scrollToSection('objectives')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Objectifs</button>
              <button onClick={() => scrollToSection('structure')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Programme</button>
              <button onClick={() => scrollToSection('certification')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Certification</button>
              <button onClick={() => scrollToSection('roi')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Avantages</button>
              <button onClick={() => scrollToSection('register')} className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 w-full text-left">S'inscrire</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white overflow-hidden relative">
        {/* Mobile optimized hero with better spacing */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Formation Certifiante</p>
              </div>
              
              {/* Mobile-optimized typography */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Certification Opérateurs de <span className="text-orange-200 block sm:inline">Chargeuses</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-orange-100 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Formation pratique alignée sur les normes minières, BTP et génie civil
              </p>
              
              {/* Mobile-first button layout */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('register')} 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition duration-300 shadow-xl text-sm sm:text-base"
                >
                  S'inscrire maintenant <ChevronRight className="ml-2" size={16} />
                </Button>
                <Button 
                  onClick={() => scrollToSection('overview')} 
                  variant="outline" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition duration-300 text-sm sm:text-base"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
            
            {/* Mobile-optimized image section */}
            <div className="relative mt-8 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/30 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
                <div className="relative">
                  <img 
                    src="/sip-equip-train/images/Loader.png" 
                    alt="Chargeuse sur chantier" 
                    className="w-full h-auto rounded-2xl shadow-2xl border-2 sm:border-4 border-white/20 transform hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-optimized Stats Bar */}
      <div className="bg-orange-700 text-white py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="p-2 sm:p-3">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">92%</p>
              <p className="text-xs sm:text-sm md:text-base leading-tight">Embauche en CDI</p>
            </div>
            <div className="p-2 sm:p-3">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">160h</p>
              <p className="text-xs sm:text-sm md:text-base leading-tight">Formation pratique</p>
            </div>
            <div className="p-2 sm:p-3">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">+25%</p>
              <p className="text-xs sm:text-sm md:text-base leading-tight">Augmentation salariale</p>
            </div>
            <div className="p-2 sm:p-3">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">5 ans</p>
              <p className="text-xs sm:text-sm md:text-base leading-tight">Certification valide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview - Mobile Optimized */}
      <section id="overview" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Aperçu du Cours</h2>
            <div className="w-16 sm:w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="space-y-10 sm:space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Content Section - Mobile First */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-4 sm:p-6 lg:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Pourquoi ce cours ?</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Devenez un opérateur de chargeuse sur pneus ou chenilles certifié, capable de maximiser l'efficacité et la sécurité sur les chantiers les plus exigeants !
                </p>
                
                {/* Mobile-optimized benefit cards */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                        <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-orange-100 text-orange-600">
                          <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-semibold">Risques critiques :</span> Évitez les accidents grâce à des techniques stabilisées.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                        <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-100 text-blue-600">
                          <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-semibold">Pénurie de compétences :</span> Répondez à la demande croissante d'opérateurs qualifiés.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                        <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-100 text-blue-600">
                          <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-semibold">Productivité :</span> Maîtrisez le chargement précis et l'optimisation des cycles.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                        <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-100 text-blue-600">
                          <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-semibold">Conformité :</span> Certification obligatoire pour les sites réglementés.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile-optimized info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 border-0 shadow-lg">
                  <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">Public Cible</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>Professionnels du BTP, mines, carrières</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>Jeunes en formation mécanique</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>Conducteurs non certifiés</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 border-0 shadow-lg">
                  <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">Prérequis</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>Âge minimum : 18 ans</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>Certificat médical d'aptitude</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>Notions de base en mécanique</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
            
            {/* Image Section - Mobile optimized */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-1 shadow-2xl hover:shadow-3xl transition duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
                  <img 
                    src="/sip-equip-train/images/chargeuse.png" 
                    alt="Opérateur de chargeuse" 
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent flex items-center justify-center">
                    <button className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:bg-white transition duration-300 shadow-lg transform hover:scale-110">
                      <Play className="text-orange-600" size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Mobile-optimized info cards below image */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Card className="bg-white p-3 sm:p-4 rounded-xl shadow-md border-l-4 border-l-blue-600">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                      <CalendarDays className="text-blue-600" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">4 semaines</p>
                      <p className="text-xs sm:text-sm text-gray-500">Formation intensive</p>
                    </div>
                  </div>
                </Card>
                <Card className="bg-white p-3 sm:p-4 rounded-xl shadow-md border-l-4 border-l-orange-600">
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                      <MapPin className="text-orange-600" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Centre Boké</p>
                      <p className="text-xs sm:text-sm text-gray-500">Formation sur site</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Objectifs Pédagogiques</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ce que vous apprendrez :</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                      <Shield size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Sécurité optimale</h4>
                    <p className="mt-1 text-gray-600">
                      Manœuvrer une chargeuse en sécurité sur terrains instables (déchets, pentes, zones confinées).
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Target size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Tâches clés</h4>
                    <p className="mt-1 text-gray-600">
                      Exécuter 6 tâches clés : chargement camion, nivellement, transport de matériaux, creusement, tri sélectif, compactage.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Wrench size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Maintenance</h4>
                    <p className="mt-1 text-gray-600">
                      Diagnostiquer les pannes courantes (circuit hydraulique, pneumatique).
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Settings size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Technologies</h4>
                    <p className="mt-1 text-gray-600">
                      Utiliser les technologies embarquées (GPS, systèmes de pesée, caméras 360°).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Compétences Acquises :</h3>
              <div className="space-y-6">
                <Card className="bg-white p-6 shadow-sm hover:shadow-md transition duration-300 hover:scale-102 border-l-4 border-l-blue-600">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                        <Settings size={20} />
                      </div>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">Techniques</h4>
                  </div>
                  <p className="text-gray-600">
                    Maîtrise des commandes (godet, fourches), calibration des instruments, maintenance préventive.
                  </p>
                </Card>
                
                <Card className="bg-white p-6 shadow-sm hover:shadow-md transition duration-300 hover:scale-102 border-l-4 border-l-blue-600">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                        <Shield size={20} />
                      </div>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">Sécurité</h4>
                  </div>
                  <p className="text-gray-600">
                    Gestion des risques dynamiques, procédures d'urgence, analyse de stabilité.
                  </p>
                </Card>
                
                <Card className="bg-white p-6 shadow-sm hover:shadow-md transition duration-300 hover:scale-102 border-l-4 border-l-blue-600">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                        <Users size={20} />
                      </div>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">Soft Skills</h4>
                  </div>
                  <p className="text-gray-600">
                    Communication radio efficace, coordination logistique, prise de décision rapide.
                  </p>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-blue-600 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-500">
              <div className="p-8 text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-4">
                  <Truck size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Chargeuses CAT 980</h4>
                <p className="text-blue-100">Modèles professionnels</p>
              </div>
              <div className="p-8 text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-4">
                  <Settings size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Simulateurs VR</h4>
                <p className="text-blue-100">Formation immersive</p>
              </div>
              <div className="p-8 text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-4">
                  <Gauge size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Logiciels Trimble</h4>
                <p className="text-blue-100">Technologies embarquées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure - Mobile Optimized */}
      <section id="structure" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Structure du Cours</h2>
            <div className="w-16 sm:w-20 h-1 bg-orange-600 mx-auto"></div>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
              4 semaines intensives avec 80% de pratique sur des chargeuses réelles et 20% de théorie interactive
            </p>
          </div>
          
          {/* Mobile-first module cards */}
          <div className="space-y-4 sm:space-y-6 lg:grid lg:grid-cols-5 lg:gap-4 lg:space-y-0">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 shadow-lg border-0 hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-3 sm:space-x-0 sm:block">
                <div className="flex-shrink-0 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Fondamentaux & Sécurité</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="text-blue-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Réglementation chantier</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-blue-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Études de cas d'accidents</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-blue-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Équipements de protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 shadow-lg border-0 hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-3 sm:space-x-0 sm:block">
                <div className="flex-shrink-0 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Techniques Opérationnelles</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="text-orange-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Prise en main de l'engin</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-orange-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Chargement rapide de camions</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-orange-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Gestion des angles morts</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 shadow-lg border-0 hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-3 sm:space-x-0 sm:block">
                <div className="flex-shrink-0 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Applications Avancées</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="text-green-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Nivellement de précision</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Tri de matériaux</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Utilisation d'accessoires</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 shadow-lg border-0 hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-3 sm:space-x-0 sm:block">
                <div className="flex-shrink-0 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Maintenance & Performance</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="text-purple-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Vérifications quotidiennes</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-purple-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Changement de godet</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-purple-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Dépannage hydraulique</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 shadow-lg border-0 hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-3 sm:space-x-0 sm:block">
                <div className="flex-shrink-0 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Projet Final</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="text-red-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Chantier simulé</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-red-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Chargement chronométré</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-red-500 text-sm mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span className="text-xs sm:text-sm text-gray-600">Respect consignes environnementales</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Mobile-optimized methods section */}
          <div className="mt-12 sm:mt-16 space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start lg:space-y-0">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Méthodes Pédagogiques</h3>
              
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:p-6 shadow-xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 backdrop-blur-sm">
                      <Wrench size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg sm:text-xl font-bold mb-2">80% Pratique</h4>
                    <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                      Ateliers sur chargeuses réelles, chantiers-écoles, simulateurs de basculement.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 sm:p-6 shadow-xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 backdrop-blur-sm">
                      <FileText size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg sm:text-xl font-bold mb-2">20% Théorie</h4>
                    <p className="text-sm sm:text-base text-orange-100 leading-relaxed">
                      Vidéos interactives, analyses 3D des angles morts, quiz en réalité augmentée.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card className="bg-gradient-to-br from-orange-600 to-orange-700 p-4 sm:p-6 text-white shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Outils & Équipements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <CheckCircle className="mr-2 text-orange-200 flex-shrink-0" size={16} />
                  <span className="text-xs sm:text-sm">Chargeuses dernier cri</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <CheckCircle className="mr-2 text-orange-200 flex-shrink-0" size={16} />
                  <span className="text-xs sm:text-sm">Drones analyse chantier</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <CheckCircle className="mr-2 text-orange-200 flex-shrink-0" size={16} />
                  <span className="text-xs sm:text-sm">Kits diagnostic électronique</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <CheckCircle className="mr-2 text-orange-200 flex-shrink-0" size={16} />
                  <span className="text-xs sm:text-sm">Simulateurs VR</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Évaluation & Certification</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Évaluations</h3>
              <div className="space-y-6">
                <Card className="bg-white p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600 text-white">
                        <FileText size={20} />
                      </div>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">Tests Hebdomadaires</h4>
                  </div>
                  <p className="text-gray-600">
                    QCM sécurité + diagnostics machines pour valider les acquis théoriques.
                  </p>
                </Card>
                
                <Card className="bg-white p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600 text-white">
                        <Truck size={20} />
                      </div>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">Épreuves Pratiques</h4>
                  </div>
                  <p className="text-gray-600">
                    Notées sur précision (ex. : chargement camion sans débordement ±5%).
                  </p>
                </Card>
                
                <Card className="bg-white p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600 text-white">
                        <Shield size={20} />
                      </div>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">Projet Final</h4>
                  </div>
                  <p className="text-gray-600">
                    Simulation de chantier minier (critères : rapidité, sécurité, respect des consignes).
                  </p>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="bg-white p-8 shadow-lg border-t-4 border-orange-600">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center bg-orange-100 rounded-full p-4">
                    <Award className="text-orange-600" size={48} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Certification Reconnue</h3>
                <p className="text-center text-gray-600 mb-6">
                  "Certificat d'Opérateur de Chargeuse Niveau 2" accrédité par <span className="font-semibold">CQP BTP</span> et <span className="font-semibold">Institut des Mines</span>
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Clock className="text-orange-600" size={20} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-orange-800">
                        <span className="font-semibold">Validité :</span> 5 ans, avec module de recyclage annuel offert.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button onClick={() => scrollToSection('register')} className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium shadow-lg">
                    Obtenir ma certification <ChevronRight className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Retour sur Investissement</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Pour les Entreprises</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      <Target className="text-sm" size={16} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Productivité +40%</p>
                    <p className="text-gray-600">Rapidité de chargement améliorée</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      <Shield className="text-sm" size={16} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Sécurité -70%</p>
                    <p className="text-gray-600">Réduction des incidents liés aux angles morts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      <Settings className="text-sm" size={16} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Durabilité</p>
                    <p className="text-gray-600">30% d'usure de pneus en moins</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      <FileText className="text-sm" size={16} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Conformité</p>
                    <p className="text-gray-600">Certification ISO garantie</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Pour les Participants</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 text-orange-600">
                      <Building className="text-sm" size={16} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">92% d'embauche</p>
                    <p className="text-gray-600">Diplômés embauchés en CDI sous 2 mois</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 text-orange-600">
                      <Target className="text-sm" size={16} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Salaire +25%</p>
                    <p className="text-gray-600">Comparé aux non-certifiés</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 text-orange-600">
                      <User className="text-sm" size={16} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Évolution</p>
                    <p className="text-gray-600">Accès aux postes de chef de parc machines</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 text-orange-600">
                      <Users className="text-sm" size={16} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Partenariats</p>
                    <p className="text-gray-600">Avec SMB-Winning, CBG et autres grands groupes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              <Card className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <Users className="text-white" size={32} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-orange-100">Participants formés</p>
                    <p className="text-2xl font-bold text-white">1,250+</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <Building className="text-white" size={32} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-orange-100">Entreprises partenaires</p>
                    <p className="text-2xl font-bold text-white">85+</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <Award className="text-white" size={32} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-orange-100">Taux de réussite</p>
                    <p className="text-2xl font-bold text-white">98%</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inscription – Action Immédiate !</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white p-8 shadow-lg border-t-4 border-orange-600">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <Gift className="text-orange-600" size={48} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">Offre Limitée</h3>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100 text-orange-600">
                        <Target className="text-xs" size={12} />
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold">15% de réduction</span> pour inscriptions avant <span className="font-semibold">fin du mois</span> (code : <span className="font-mono bg-orange-100 px-2 py-1 rounded">CHARGEUSE15</span>)
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100 text-orange-600">
                        <Gift className="text-xs" size={12} />
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold">Cadeau :</span> Manuel de maintenance officiel Volvo + accès à vie aux mises à jour techniques.
                    </p>
                  </div>
                </div>
                
                <Card className="bg-orange-50 p-4 border border-orange-200 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Info className="text-orange-600" size={20} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-orange-800">
                        Formation éligible au CPF. Intégration des normes environnementales (réduction bruit/CO₂).
                      </p>
                    </div>
                  </div>
                </Card>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Prochaines Étapes :</h4>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center text-orange-600 hover:text-orange-800">
                      <Play className="mr-3" size={20} />
                      <span>Découvrez l'engin : Vidéo 360° d'une chargeuse en action</span>
                    </a>
                    <a href="tel:+224626250624" className="flex items-center text-orange-600 hover:text-orange-800">
                      <Phone className="mr-3" size={20} />
                      <span>Contact : (+224) 626-250-624</span>
                    </a>
                    <a href="#" className="flex items-center text-orange-600 hover:text-orange-800">
                      <CalendarDays className="mr-3" size={20} />
                      <span>Session d'essai gratuite : Atelier "Gestion des Angles Morts"</span>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Formulaire d'Inscription</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                    <input 
                      type="text" 
                      id="full-name" 
                      name="full-name" 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Centre de formation</label>
                    <select 
                      id="location" 
                      name="location" 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option>Sélectionnez un centre</option>
                      <option>Boké, Guinée</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700">Code promotionnel (optionnel)</label>
                    <input 
                      type="text" 
                      id="promo-code" 
                      name="promo-code" 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input 
                        id="terms" 
                        name="terms" 
                        type="checkbox" 
                        className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-medium text-gray-700">
                        J'accepte les <a href="#" className="text-orange-600 hover:text-orange-500">conditions générales</a>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-md font-medium shadow-lg transition duration-300"
                    >
                      Valider mon inscription
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              "Prêt à charger votre avenir ? Devenez un expert recherché sur tous les chantiers de Guinée"
            </h3>
            <Button onClick={() => scrollToSection('register')} className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-4 px-8 rounded-md shadow-xl">
              Inscrivez-vous avant épuisement des places !
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Truck className="text-orange-400 mr-2" size={32} />
                <span className="text-xl font-bold">SIP<span className="text-orange-400">Pro</span></span>
              </div>
              <p className="mt-4 text-gray-400">
                Formation certifiante pour opérateurs de chargeuses, alignée sur les normes minières, BTP et génie civil.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('overview')} className="text-gray-400 hover:text-white transition duration-300">Aperçu</button></li>
                <li><button onClick={() => scrollToSection('objectives')} className="text-gray-400 hover:text-white transition duration-300">Objectifs</button></li>
                <li><button onClick={() => scrollToSection('structure')} className="text-gray-400 hover:text-white transition duration-300">Programme</button></li>
                <li><button onClick={() => scrollToSection('certification')} className="text-gray-400 hover:text-white transition duration-300">Certification</button></li>
                <li><button onClick={() => scrollToSection('register')} className="text-gray-400 hover:text-white transition duration-300">Inscription</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Centre de formation</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 flex items-start">
                  <MapPin className="text-orange-400 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Kindia Ville Zone minière, Baralande N°14, SIP 12345, Guinée</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Phone className="mr-3 text-orange-400" size={16} />
                  <span>(+224) 626-101-101</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="mr-3 text-orange-400" size={16} />
                  <span>seminaireinsertionprofesionel@gmail.com</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Clock className="mr-3 text-orange-400" size={16} />
                  <span>Lun-Ven : 8h-18h</span>
                </li>
              </ul>
              
              <div className="mt-4 flex space-x-4">
                <a href="https://www.facebook.com/share/1DccwFtXpe/" className="text-gray-400 hover:text-white transition duration-300">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <span className="sr-only">YouTube</span>
                  📺
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 SIP - Séminaire d'Insertion Professionnel. Tous droits réservés.</p>
            <p className="mt-2">Formation éligible au CPF - Certification reconnue par l'État</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OperationChargeusePage;
