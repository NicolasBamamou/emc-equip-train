import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, Shield, Wrench, MapPin, FileText, Award, Settings, Users, Target, CheckCircle, Star, Phone, Mail, Menu, X, Building, User, Gauge, Truck } from 'lucide-react';

const BulldozerCertificationPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
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
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Truck className="text-blue-600 mr-2" size={32} />
                <span className="text-xl font-bold text-gray-900">SIP<span className="text-blue-600">Pro</span></span>
              </Link>
            </div>
            
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              <button onClick={() => scrollToSection('overview')} className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Aperçu</button>
              <button onClick={() => scrollToSection('program')} className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Programme</button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Avantages</button>
              <button onClick={() => scrollToSection('certification')} className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Certification</button>
              <Button onClick={() => scrollToSection('registration')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                S'inscrire
              </Button>
            </div>
            
            <div className="-mr-2 flex items-center md:hidden">
              <button 
                type="button" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('overview')} className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Aperçu</button>
              <button onClick={() => scrollToSection('program')} className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Programme</button>
              <button onClick={() => scrollToSection('benefits')} className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Avantages</button>
              <button onClick={() => scrollToSection('certification')} className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Certification</button>
              <button onClick={() => scrollToSection('registration')} className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50 w-full text-left">S'inscrire</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Formation <span className="text-yellow-400">Bulldozer</span><br />Opérateur Certifié
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Maîtrisez les techniques avancées de bulldozer et devenez un expert sur les chantiers miniers, BTP et génie civil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('registration')} 
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
                >
                  S'inscrire maintenant <Target className="ml-2" size={16} />
                </Button>
                <Button 
                  onClick={() => scrollToSection('program')} 
                  variant="outline" 
                  className="bg-transparent hover:bg-blue-800 border-2 border-white text-white font-bold py-3 px-6 rounded-lg"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/sip-equip-train/images/Dozer.png" 
                alt="Bulldozer en action" 
                className="rounded-xl shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-pulse hover:animate-none"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-24 overflow-hidden bg-blue-900">
        <div className="absolute left-0 right-0 top-0 h-48 bg-gradient-to-br from-transparent via-transparent to-gray-50 transform -rotate-2 origin-top-left"></div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir notre formation ?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-white p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">
                <Shield size={48} />
              </div>
              <CardTitle className="text-xl font-bold mb-2">Sécurité renforcée</CardTitle>
              <p className="text-gray-600">Protocoles éprouvés pour éviter les accidents coûteux sur chantier.</p>
            </Card>
            
            <Card className="bg-white p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">
                <Target size={48} />
              </div>
              <CardTitle className="text-xl font-bold mb-2">Efficacité optimisée</CardTitle>
              <p className="text-gray-600">Techniques pour réduire les délais et améliorer la productivité.</p>
            </Card>
            
            <Card className="bg-white p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">
                <Award size={48} />
              </div>
              <CardTitle className="text-xl font-bold mb-2">Certification légale</CardTitle>
              <p className="text-gray-600">Obligatoire pour travailler sur les sites réglementés (normes ISO/OSHA).</p>
            </Card>
            
            <Card className="bg-white p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">
                <Users size={48} />
              </div>
              <CardTitle className="text-xl font-bold mb-2">Débouchés garantis</CardTitle>
              <p className="text-gray-600">95% de nos diplômés embauchés dans les 3 mois.</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Public Cible</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                  <span>Professionnels du BTP, miniers ou de génie civil (débutants à intermédiaires)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                  <span>Jeunes diplômés en mécanique/travaux publics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                  <span>Conducteurs d'engins non certifiés cherchant une spécialisation</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Prérequis</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Users className="text-blue-500 mt-1 mr-2" size={16} />
                  <span>Âge minimum : 18 ans</span>
                </li>
                <li className="flex items-start">
                  <FileText className="text-blue-500 mt-1 mr-2" size={16} />
                  <span>Certificat médical d'aptitude physique</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="text-blue-500 mt-1 mr-2" size={16} />
                  <span>Connaissance basique des engins de chantier</span>
                </li>
              </ul>
            </div>
            
            <Card className="bg-white p-6 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-6 text-center">Ce que vous apprendrez</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <Target className="text-blue-600" size={16} />
                  </div>
                  <p className="ml-3">Contrôler un bulldozer sur terrains instables (boue, roches, pentes {'>'}30%)</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <Settings className="text-blue-600" size={16} />
                  </div>
                  <p className="ml-3">Exécuter 5 tâches clés : déblaiement, nivellement de précision, compactage, etc.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <Wrench className="text-blue-600" size={16} />
                  </div>
                  <p className="ml-3">Diagnostiquer les pannes courantes (chenilles, système hydraulique)</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <MapPin className="text-blue-600" size={16} />
                  </div>
                  <p className="ml-3">Lire les plans topographiques et utiliser les technologies GPS/GNSS</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <Gauge className="text-blue-600" size={16} />
                  </div>
                  <p className="ml-3">Optimiser la consommation de carburant et réduire l'usure des pièces</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="relative h-24 overflow-hidden bg-gray-50">
        <div className="absolute left-0 right-0 top-0 h-48 bg-gradient-to-bl from-transparent via-transparent to-blue-800 transform rotate-2 origin-top-right"></div>
      </div>

      {/* Program Section */}
      <section id="program" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Structure du Programme</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">5 semaines intensives pour maîtriser tous les aspects du bulldozer</p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-50 overflow-hidden shadow-md border border-gray-200 hover:scale-105 transition-transform">
              <div className="bg-blue-600 text-white p-4">
                <CardTitle className="text-xl font-bold">Module 1</CardTitle>
                <p>Fondamentaux & Sécurité Chantier</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Réglementation BTP/minière</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Équipements de protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Signalisations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Études de cas d'accidents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 overflow-hidden shadow-md border border-gray-200 hover:scale-105 transition-transform">
              <div className="bg-blue-600 text-white p-4">
                <CardTitle className="text-xl font-bold">Module 2</CardTitle>
                <p>Techniques de Base</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Prise en main de l'engin</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Contrôles essentiels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Déblaiement/nivellement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Travail en pente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 overflow-hidden shadow-md border border-gray-200 hover:scale-105 transition-transform">
              <div className="bg-blue-600 text-white p-4">
                <CardTitle className="text-xl font-bold">Module 3</CardTitle>
                <p>Opérations Avancées</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Compactage précis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Gestion des sols instables</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Utilisation du ripper</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Lecture de plans 3D</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 overflow-hidden shadow-md border border-gray-200 hover:scale-105 transition-transform">
              <div className="bg-blue-600 text-white p-4">
                <CardTitle className="text-xl font-bold">Module 4</CardTitle>
                <p>Maintenance & Diagnostic</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Vérifications quotidiennes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Lubrification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Dépannage hydraulique</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Gestion carburant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 overflow-hidden shadow-md border border-gray-200 hover:scale-105 transition-transform">
              <div className="bg-blue-600 text-white p-4">
                <CardTitle className="text-xl font-bold">Module 5</CardTitle>
                <p>Projet Final : Chantier Réel</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Nivellement d'un terrain minier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Création de pistes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Optimisation des ressources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Évaluation par experts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 overflow-hidden shadow-md border border-gray-200 hover:scale-105 transition-transform">
              <div className="bg-blue-600 text-white p-4">
                <CardTitle className="text-xl font-bold">Méthodes</CardTitle>
                <p>Pédagogiques</p>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h4 className="font-bold mb-2">80% Pratique</h4>
                  <p className="text-sm text-gray-600">Ateliers sur bulldozers, chantiers-écoles, simulateurs VR</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">20% Théorie</h4>
                  <p className="text-sm text-gray-600">Vidéos interactives, analyse d'erreurs, quiz collaboratifs</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Outils</h4>
                  <p className="text-sm text-gray-600">Bulldozers récents (30-40 tonnes), drones, kits de diagnostic</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-blue-50 p-8 md:p-12 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Durée & Charge</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CalendarDays className="text-blue-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-bold">5 semaines (200 heures total)</p>
                      <p className="text-sm text-gray-600">Temps plein : 40h/semaine (dont 30h de pratique)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="text-blue-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-bold">Option accélérée</p>
                      <p className="text-sm text-gray-600">3 semaines pour les expérimentés (test d'entrée requis)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="text-blue-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-bold">Lieu & Format</p>
                      <p className="text-sm text-gray-600">Centre spécialisé à Boké, Guinée</p>
                      <p className="text-sm text-gray-600">Option hybride : Théorie en ligne, pratique en présentiel</p>
                    </div>
                  </li>
                </ul>
              </div>
              <Card className="bg-white p-6 shadow-sm border border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-center">Équipements utilisés</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-center text-gray-600 font-bold">CAT</div>
                  <div className="flex items-center justify-center text-gray-600 font-bold">Komatsu</div>
                  <div className="flex items-center justify-center text-gray-600 font-bold">SMB-Winning</div>
                  <div className="flex items-center justify-center text-gray-600 font-bold">CBG</div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-600 text-center">Formation éligible au CPF. Adaptée aux conditions extrêmes (poussière, vibrations, bruit).</p>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats/Benefits Section */}
      <section id="benefits" className="bg-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Retour sur Investissement</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">Des bénéfices tangibles pour les entreprises et les participants</p>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Building className="mr-3 text-yellow-400" size={28} /> Pour les Entreprises
              </h3>
              <div className="space-y-6">
                <Card className="bg-blue-800 p-6">
                  <div className="flex items-start">
                    <div className="text-yellow-400 text-3xl mr-4">
                      <Target size={36} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Productivité</h4>
                      <p className="text-blue-200">+35% en réduction des retards</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-blue-800 p-6">
                  <div className="flex items-start">
                    <div className="text-yellow-400 text-3xl mr-4">
                      <Shield size={36} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Sécurité</h4>
                      <p className="text-blue-200">-60% d'incidents sur chantier</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-blue-800 p-6">
                  <div className="flex items-start">
                    <div className="text-yellow-400 text-3xl mr-4">
                      <Gauge size={36} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Économies</h4>
                      <p className="text-blue-200">20% de carburant en moins grâce aux techniques enseignées</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-blue-800 p-6">
                  <div className="flex items-start">
                    <div className="text-yellow-400 text-3xl mr-4">
                      <FileText size={36} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Conformité</h4>
                      <p className="text-blue-200">Zéro amende pendant 2 ans (garanti)</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-3 text-yellow-400" size={28} /> Pour les Participants
              </h3>
              <div className="space-y-6">
                <Card className="bg-blue-800 p-6">
                  <div className="flex items-start">
                    <div className="text-yellow-400 text-3xl mr-4">
                      <Users size={36} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Embauche</h4>
                      <p className="text-blue-200">95% des diplômés embauchés sous 3 mois</p>
                      <p className="text-sm text-blue-300">(réseau de 50 entreprises partenaires)</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-blue-800 p-6">
                  <div className="flex items-start">
                    <div className="text-yellow-400 text-3xl mr-4">
                      <Target size={36} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Salaire</h4>
                      <p className="text-blue-200">+20 à 30% vs. non-certifiés</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-blue-800 p-6">
                  <div className="flex items-start">
                    <div className="text-yellow-400 text-3xl mr-4">
                      <Award size={36} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Évolution</h4>
                      <p className="text-blue-200">Accès aux postes de chef d'équipe</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-blue-800 p-6">
                  <div className="flex items-start">
                    <div className="text-yellow-400 text-3xl mr-4">
                      <Users size={36} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Réseau</h4>
                      <p className="text-blue-200">Accès à notre communauté d'experts et offres d'emploi</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Évaluation & Certification</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Un processus rigoureux pour valider vos compétences</p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Processus d'Évaluation</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Quiz Hebdomadaires</h4>
                    <p className="text-gray-600">QCM sur la sécurité et la mécanique pour valider les connaissances théoriques.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Épreuves Pratiques</h4>
                    <p className="text-gray-600">Notées sur la précision (ex. : nivellement à ±2 cm près).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Projet Final</h4>
                    <p className="text-gray-600">Supervisé par des experts (critères : sécurité, efficacité, respect des plans).</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gray-50 p-8 shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <Award className="text-6xl text-yellow-500 mb-4 mx-auto" size={72} />
                <h3 className="text-2xl font-bold mb-2">Certification Obtenue</h3>
                <p className="text-blue-600 font-medium">"Certificat d'Opérateur de Bulldozer Niveau 2"</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                  <span>Accrédité par <strong>CQP BTP</strong> et <strong>Institut des Mines</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                  <span>Valide 5 ans, avec module de recyclage gratuit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                  <span>Reconnue dans toute l'Afrique de l'Ouest</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2" size={16} />
                  <span>Listée au RNCP (Répertoire National des Certifications Professionnelles)</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="bg-blue-50 p-8 md:p-12 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Témoignages</h3>
                <div className="space-y-6">
                  <Card className="bg-white p-6 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                        JD
                      </div>
                      <div>
                        <p className="font-bold">Jean Dupont</p>
                        <p className="text-sm text-gray-500">Opérateur chez SMB-Winning</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"Cette formation a transformé ma carrière. En 3 mois, je suis passé de simple conducteur à chef d'équipe grâce aux compétences acquises."</p>
                    <div className="flex mt-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="inline" size={16} />)}
                    </div>
                  </Card>
                  
                  <Card className="bg-white p-6 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                        MB
                      </div>
                      <div>
                        <p className="font-bold">Marie Bernard</p>
                        <p className="text-sm text-gray-500">Responsable RH, CBG</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"Nous recrutons systématiquement les diplômés de cette formation. Leur niveau de compétence et leur approche sécurité sont exceptionnels."</p>
                    <div className="flex mt-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="inline" size={16} />)}
                    </div>
                  </Card>
                </div>
              </div>
              
              <div>
                <Card className="bg-white p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Entreprises Partenaires</h3>
                  <p className="text-gray-600 mb-6">Nos diplômés travaillent dans les plus grandes entreprises du secteur :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-bold text-gray-600">SMB-Winning</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-bold text-gray-600">CBG</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-bold text-gray-600">Rusal</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-bold text-gray-600">Alliance Minière</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-bold mb-2">Session d'essai gratuite</h4>
                    <p className="text-sm text-gray-600 mb-4">Essayez notre atelier "Sécurité & Commandes de Base" avant de vous engager.</p>
                    <Button onClick={() => scrollToSection('registration')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                      Réserver ma session <Target className="ml-1" size={16} />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à dominer les chantiers les plus exigeants ?</h2>
              <p className="text-xl text-gray-300 mb-8">Votre expertise commence ici – Inscrivez-vous avant la prochaine vague de recrutement !</p>
              
              <Card className="bg-blue-800 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Award className="text-yellow-400 mr-2" size={24} /> Offre Exclusive
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-400 mt-1 mr-2" size={16} />
                    <span><strong>15% de réduction</strong> si inscription avant fin du mois (code : BULLDOZER15)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-400 mt-1 mr-2" size={16} />
                    <span><strong>Cadeau</strong> : Manuel technique officiel CAT + accès à vie aux mises à jour</span>
                  </li>
                </ul>
              </Card>

              <div className="flex items-center">
                <Phone className="text-yellow-400 mr-4" size={32} />
                <div>
                  <p className="text-gray-300">Des questions ? Appelez-nous :</p>
                  <p className="text-2xl font-bold">(+224) 626-250-624</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-white text-gray-800 p-8 shadow-xl animate-pulse">
              <h3 className="text-2xl font-bold mb-6 text-center">Formulaire d'Inscription</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom Complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="session" className="block text-gray-700 font-medium mb-2">Session souhaitée</label>
                  <select 
                    id="session" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Janvier 2025 - Boké</option>
                    <option>Février 2025 - Boké</option>
                    <option>Mars 2025 - Boké</option>
                    <option>Avril 2025 - Boké</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="promo" className="block text-gray-700 font-medium mb-2">Code Promotionnel (optionnel)</label>
                  <input 
                    type="text" 
                    id="promo" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="BULLDOZER15"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105"
                >
                  Valider mon inscription <Target className="ml-2" size={16} />
                </Button>
                <p className="text-sm text-gray-500 mt-3 text-center">En soumettant ce formulaire, vous acceptez nos conditions générales.</p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">SIP</h3>
              <p className="mb-4">Formation intensive alignée sur les normes minières, BTP et génie civil.</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1DccwFtXpe/" className="text-gray-400 hover:text-white">📘</a>
                <a href="#" className="text-gray-400 hover:text-white">💼</a>
                <a href="#" className="text-gray-400 hover:text-white">📺</a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Centre de Formation</h3>
              <ul className="space-y-2">
                <li><MapPin className="text-blue-400 mr-2 inline" size={16} /> Boké Ville Zone minière, Baralande N°14, ECM 12345, Guinée</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Liens Utiles</h3>
              <ul className="space-y-2">
                <li><Link to="/courses" className="hover:text-white">Programme détaillé</Link></li>
                <li><Link to="/admissions" className="hover:text-white">Financement CPF</Link></li>
                <li><Link to="/contact" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-white">Mentions légales</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contactez-nous</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="text-blue-400 mr-2" size={16} />
                  <span>(+224) 626-250-624</span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-blue-400 mr-2" size={16} />
                  <span>expertiseminingconsulting@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="text-blue-400 mr-2" size={16} />
                  <span>Lun-Ven : 8h-18h</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>&copy; 2025 SIP - Séminaire d'Insertion Professionnel. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BulldozerCertificationPage;
