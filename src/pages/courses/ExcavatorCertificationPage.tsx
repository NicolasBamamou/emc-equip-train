import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, Shield, Wrench, MapPin, FileText, Award, Settings, Users, Target, CheckCircle, Star, Phone, Mail, Menu, X } from 'lucide-react';

const ExcavatorCertificationPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 5,
    hours: 12,
    minutes: 45
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const target = new Date();
      target.setDate(now.getDate() + 5);
      
      const diff = target.getTime() - now.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setCountdown({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-yellow-500 p-2 rounded-lg mr-3">
                <Shield className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">SIP</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('overview')} className="text-gray-700 hover:text-yellow-600 font-medium">Aperçu</button>
              <button onClick={() => scrollToSection('program')} className="text-gray-700 hover:text-yellow-600 font-medium">Programme</button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-yellow-600 font-medium">Avantages</button>
              <button onClick={() => scrollToSection('certification')} className="text-gray-700 hover:text-yellow-600 font-medium">Certification</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-yellow-600 font-medium">Contact</button>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <button onClick={() => scrollToSection('overview')} className="block py-2 text-gray-700 hover:text-yellow-600">Aperçu</button>
              <button onClick={() => scrollToSection('program')} className="block py-2 text-gray-700 hover:text-yellow-600">Programme</button>
              <button onClick={() => scrollToSection('benefits')} className="block py-2 text-gray-700 hover:text-yellow-600">Avantages</button>
              <button onClick={() => scrollToSection('certification')} className="block py-2 text-gray-700 hover:text-yellow-600">Certification</button>
              <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-700 hover:text-yellow-600">Contact</button>
              <button onClick={() => scrollToSection('register')} className="block mt-2 bg-yellow-500 text-white py-2 px-4 rounded-lg font-medium text-center">S'inscrire</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Certification d'Opérateur d'Excavatrice</h1>
              <p className="text-xl mb-8">Formation pratique alignée sur les normes minières et BTP</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button onClick={() => scrollToSection('register')} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg">
                  S'inscrire Maintenant
                </Button>
                <Button onClick={() => scrollToSection('program')} variant="outline" className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg">
                  Découvrir le Programme
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative flex flex-col items-center">
                <img src="/sip-equip-train/images/Excavator.png" alt="Excavatrice en action" className="rounded-xl shadow-2xl"/>
              </div>
              
              {/* Move the certification badge here, below the image */}
              <div className="mt-4 flex justify-center">
                <div className="bg-white text-gray-800 p-4 rounded-xl shadow-lg flex items-center w-full max-w-xs">
                  <div className="bg-yellow-100 p-3 rounded-full mr-3">
                    <Award className="text-yellow-500" size={24} />
                  </div>
                  <div>
                    <p className="font-bold">Certification reconnue</p>
                    <p className="text-sm">Normes ISO/OSHA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-br from-transparent to-gray-50"></div>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Aperçu du Cours</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Pourquoi ce cours ?</h3>
              <p className="text-lg mb-6">Devenez un opérateur d'excavatrice certifié, compétent et sûr ! Ce cours résout les défis clés :</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Shield className="text-yellow-500" size={20} />
                  </div>
                  <span><strong>Risques de sécurité</strong> : Réduisez les accidents grâce à des techniques éprouvées.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Wrench className="text-yellow-500" size={20} />
                  </div>
                  <span><strong>Compétences pratiques</strong> : Maîtrisez les opérations réelles sur simulateurs et machines.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <FileText className="text-yellow-500" size={20} />
                  </div>
                  <span><strong>Exigences légales</strong> : Obtenez une certification reconnue par l'industrie.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <Target className="text-yellow-500" size={20} />
                  </div>
                  <span><strong>Demande du marché</strong> : Augmentez votre valeur sur le marché du travail.</span>
                </li>
              </ul>
            </div>
            <div>
              <Card className="bg-gray-50 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Public Cible</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Users className="text-blue-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Travailleurs du secteur</h4>
                      <p className="text-gray-600">Mineurs, BTP, génie civil (débutants à intermédiaires).</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Users className="text-green-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Jeunes diplômés</h4>
                      <p className="text-gray-600">Souhaitant intégrer ces secteurs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Users className="text-purple-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Professionnels non certifiés</h4>
                      <p className="text-gray-600">Visant une reconnaissance officielle.</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-800">Prérequis</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <CalendarDays className="text-red-500" size={16} />
                    </div>
                    <span>Âge minimum : 18 ans</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <Shield className="text-indigo-500" size={16} />
                    </div>
                    <span>Aptitude physique (certificat médical requis)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-teal-100 p-2 rounded-full mr-3">
                      <FileText className="text-teal-500" size={16} />
                    </div>
                    <span>Connaissance basique des chantiers</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Objectifs Pédagogiques</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Ce que vous apprendrez :</h3>
              <div className="grid gap-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                    <Settings size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Contrôle sécurisé</h4>
                    <p className="text-gray-600">Manipulation d'une excavatrice en sécurité sur terrains complexes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <Wrench size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Entretien quotidien</h4>
                    <p className="text-gray-600">Vérifications pré-opératoires et dépannage basique.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mr-4">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Lecture de plans</h4>
                    <p className="text-gray-600">Interprétation des plans de chantier et repères topographiques.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mr-4">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Gestion des risques</h4>
                    <p className="text-gray-600">Sols instables, proximité réseaux électriques.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Compétences Acquises :</h3>
              <div className="grid gap-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <Settings size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Techniques</h4>
                    <p className="text-gray-600">Manipulation précise, calibration des instruments, maintenance niveau 1.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Sécurité</h4>
                    <p className="text-gray-600">Procédures d'urgence, EPI, analyse de risques.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mr-4">
                    <Users size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Soft Skills</h4>
                    <p className="text-gray-600">Communication radio, travail en équipe, prise de décision.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mr-4">
                    <Settings size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Outils</h4>
                    <p className="text-gray-600">Simulateurs 3D, excavatrices hydrauliques, logiciels de diagnostic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section id="program" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Structure du Cours</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Modules (4 semaines) :</h3>
              
              <div className="space-y-8">
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Fondamentaux & Sécurité</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Règles chantier</li>
                    <li>Lecture de plans</li>
                    <li>Équipements de protection</li>
                    <li>Lois locales</li>
                  </ul>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Techniques Opérationnelles</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Contrôles de base</li>
                    <li>Creusement précis</li>
                    <li>Chargement camion</li>
                    <li>Travail en pente</li>
                  </ul>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Maintenance & Dépannage</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Vérifications quotidiennes</li>
                    <li>Lubrification</li>
                    <li>Diagnostic panne simple</li>
                    <li>Gestion carburant</li>
                  </ul>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-bold">4</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Scénarios Réels & Optimisation</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Chantiers simulés (miniers/BTP)</li>
                    <li>Gestion obstacles</li>
                    <li>Efficacité énergétique</li>
                    <li>Réduction coûts</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Méthodes Pédagogiques :</h3>
              
              <Card className="bg-gray-50 p-8 shadow-lg hover:shadow-xl transition-shadow mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Target className="text-yellow-500" size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Approche 70/30</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">70%</div>
                    <h5 className="font-bold mb-1">Pratique</h5>
                    <p className="text-sm text-gray-600">Ateliers sur machines, simulateurs réalistes, chantiers-écoles.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-4xl font-bold text-blue-500 mb-2">30%</div>
                    <h5 className="font-bold mb-1">Théorie</h5>
                    <p className="text-sm text-gray-600">Vidéos interactives, études de cas, quiz en groupe.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-gray-50 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Wrench className="text-blue-500" size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Outils Modernes</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Settings className="text-green-500" size={16} />
                    </div>
                    <div>
                      <h5 className="font-bold">Équipements neufs</h5>
                      <p className="text-sm text-gray-600">Excavatrices 20-30 tonnes (CAT, Komatsu)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Target className="text-purple-500" size={16} />
                    </div>
                    <div>
                      <h5 className="font-bold">Réalité virtuelle</h5>
                      <p className="text-sm text-gray-600">Pour les risques complexes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <Settings className="text-red-500" size={16} />
                    </div>
                    <div>
                      <h5 className="font-bold">Simulateurs 3D</h5>
                      <p className="text-sm text-gray-600">Environnements réalistes</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Évaluation & Certification</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Évaluations :</h3>
              <div className="space-y-6">
                <Card className="bg-white p-6 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FileText className="text-blue-500" size={20} />
                    </div>
                    <h4 className="text-lg font-bold">Quizzes Hebdomadaires</h4>
                  </div>
                  <p className="text-gray-600">QCM sur la sécurité et la théorie pour valider vos connaissances.</p>
                </Card>
                
                <Card className="bg-white p-6 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Wrench className="text-green-500" size={20} />
                    </div>
                    <h4 className="text-lg font-bold">Examen Pratique Final</h4>
                  </div>
                  <p className="text-gray-600">Manipulation sur chantier simulé noté par instructeurs agréés.</p>
                </Card>
                
                <Card className="bg-white p-6 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="bg-yellow-100 p-2 rounded-full mr-4">
                      <Target className="text-yellow-500" size={20} />
                    </div>
                    <h4 className="text-lg font-bold">Projet Final</h4>
                  </div>
                  <p className="text-gray-600">Planifier et exécuter une tâche réelle (ex: creuser une fondation selon un plan).</p>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Award className="text-yellow-500" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">Certification</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2">Diplôme Reconnu</h4>
                  <p className="text-gray-600 mb-4">"Certificat d'Opérateur d'Excavatrice Niveau 1" (valide 5 ans, conforme aux normes <strong>CQP TPE</strong>).</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <CheckCircle className="text-blue-500" size={16} />
                      </div>
                      <span>Accréditation partenaire avec <strong>CINOV-BTP</strong></span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <CheckCircle className="text-green-500" size={16} />
                      </div>
                      <span>Reconnu par la <strong>Fédération des Mines</strong></span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="text-xl font-bold mb-2">Après la Certification</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle className="text-purple-500" size={12} />
                      </div>
                      <span>Accès à notre réseau d'entreprises partenaires</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle className="text-purple-500" size={12} />
                      </div>
                      <span>Mises à jour gratuites sur les nouvelles réglementations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle className="text-purple-500" size={12} />
                      </div>
                      <span>Opportunités de formations avancées</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Details */}
      <section id="practical" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Détails Pratiques</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Durée & Charge :</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <CalendarDays className="text-yellow-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">4 semaines intensives</h4>
                    <p className="text-gray-600">160 heures total (40h/semaine). Option flexible en soirée pour professionnels en activité.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Option accélérée</h4>
                    <p className="text-gray-600">2 semaines pour opérateurs expérimentés (via test de placement).</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Lieu & Format :</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="text-green-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">En présentiel</h4>
                    <p className="text-gray-600">Centre de formation équipé à Boké, Guinée.</p>
                    <div className="mt-2 flex space-x-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">CAT 320</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Komatsu PC210</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Simulateurs VR</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Settings className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Hybride</h4>
                    <p className="text-gray-600">Théorie en ligne (plateforme LMS), pratique sur sites partenaires.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Retour sur Investissement</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="text-blue-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Pour les Entreprises</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Target className="text-green-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Productivité +30%</h4>
                    <p className="text-gray-600">Grâce aux techniques optimisées enseignées.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Shield className="text-red-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Sécurité -50% d'incidents</h4>
                    <p className="text-gray-600">Réduction des accidents sur chantier.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <FileText className="text-purple-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Conformité</h4>
                    <p className="text-gray-600">Réduction des amendes et amélioration de l'image.</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Users className="text-yellow-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Pour les Participants</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Target className="text-blue-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">90% d'embauche sous 3 mois</h4>
                    <p className="text-gray-600">Grâce à notre réseau de recrutement partenaires.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Target className="text-green-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Salaire +15 à 25%</h4>
                    <p className="text-gray-600">Comparé aux non-certifiés.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Users className="text-purple-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Évolution de carrière</h4>
                    <p className="text-gray-600">Accès à des rôles superviseur.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <Shield className="text-yellow-500 mr-3" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Note :</strong> Formation éligible au CPF. Adaptée aux réalités terrains (poussière, bruit, contraintes météo).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Inscription – Action Immédiate !</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-yellow-500 text-gray-900 p-6 rounded-xl mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-full mr-3">
                    <Award className="text-yellow-500" size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Offre Exclusive</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-white p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="text-yellow-500" size={12} />
                    </div>
                    <span><strong>10% de réduction</strong> pour les 20 premiers inscrits (code : EXCAV10)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-1 rounded-full mr-3 mt-1">
                      <Award className="text-yellow-500" size={12} />
                    </div>
                    <span><strong>Bonus</strong> : Accès à vie aux mises à jour techniques + kit EPI (casque/gants)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Prochaines Étapes :</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mr-3">
                      <Shield className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Visite virtuelle</h4>
                      <Link to="/contact" className="text-yellow-400 hover:underline">Contactez-nous pour une visite des installations</Link>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mr-3">
                      <CalendarDays className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Réservez votre place</h4>
                      <Link to="/contact" className="text-yellow-400 hover:underline">Lien d'inscription</Link> ou contactez-nous au <strong>(+224) 626-250-624</strong>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mr-3">
                      <Target className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Essai gratuit</h4>
                      <Link to="/courses" className="text-yellow-400 hover:underline">Module découverte "Sécurité Chantier" disponible ici</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white text-gray-800 p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Réservez Votre Place</h3>
                
                <div className="mb-6 p-4 bg-yellow-50 rounded-lg flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Clock className="text-yellow-500" size={20} />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Offre spéciale expire dans :</p>
                    <div className="flex space-x-2">
                      <div className="bg-gray-200 px-3 py-1 rounded">
                        <div className="font-bold text-xl">{countdown.days.toString().padStart(2, '0')}</div>
                        <div className="text-xs">Jours</div>
                      </div>
                      <div className="bg-gray-200 px-3 py-1 rounded">
                        <div className="font-bold text-xl">{countdown.hours.toString().padStart(2, '0')}</div>
                        <div className="text-xs">Heures</div>
                      </div>
                      <div className="bg-gray-200 px-3 py-1 rounded">
                        <div className="font-bold text-xl">{countdown.minutes.toString().padStart(2, '0')}</div>
                        <div className="text-xs">Minutes</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nom Complet *</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"/>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Téléphone *</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"/>
                  </div>
                  <div>
                    <label htmlFor="promo" className="block text-sm font-medium mb-1">Code Promotionnel</label>
                    <input type="text" id="promo" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" placeholder="EXCAV10"/>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" id="terms" className="mt-1 mr-2"/>
                    <label htmlFor="terms" className="text-sm">J'accepte les conditions générales et la politique de confidentialité.</label>
                  </div>
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg">
                    Valider Mon Inscription
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignages de Nos Anciens Élèves</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img src="/sip-equip-train/images/CEO.jpg" alt="Jean D." className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <h4 className="font-bold">Jean D.</h4>
                  <p className="text-sm text-gray-600">Opérateur chez SMB-Winning</p>
                </div>
              </div>
              <p className="text-gray-700">"La formation m'a permis de passer d'assistant à opérateur principal en seulement 3 mois. Les techniques apprises sont directement applicables sur le terrain."</p>
              <div className="mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="inline" size={16} />)}
              </div>
            </Card>
            
            <Card className="bg-white p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img src="/sip-equip-train/images/women.jpg" alt="Sophie M." className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <h4 className="font-bold">Sophie M.</h4>
                  <p className="text-sm text-gray-600">Chef d'équipe, CBG Génie Civil</p>
                </div>
              </div>
              <p className="text-gray-700">"En tant que femme dans ce métier, j'ai particulièrement apprécié l'approche pédagogique adaptée. Le certificat m'a ouvert des portes que je pensais fermées."</p>
              <div className="mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="inline" size={16} />)}
              </div>
            </Card>
            
            <Card className="bg-white p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img src="/sip-equip-train/images/good operator.jpg" alt="Mohamed K." className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <h4 className="font-bold">Mohamed K.</h4>
                  <p className="text-sm text-gray-600">Responsable maintenance, Rusal</p>
                </div>
              </div>
              <p className="text-gray-700">"Les modules sur la maintenance préventive ont réduit nos temps d'arrêt machine de 40%. Un retour sur investissement immédiat pour notre entreprise."</p>
              <div className="mt-4 text-yellow-400">
                {[...Array(4)].map((_, i) => <Star key={i} className="inline" size={16} />)}
                <Star className="inline text-yellow-400" size={16} fill="currentColor" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-xl font-medium text-gray-600">Ils nous font confiance</h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="h-12 opacity-70 hover:opacity-100 transition text-gray-600 font-bold">CBG</div>
            <div className="h-12 opacity-70 hover:opacity-100 transition text-gray-600 font-bold">SMB-Winning</div>
            <div className="h-12 opacity-70 hover:opacity-100 transition text-gray-600 font-bold">Rusal</div>
            <div className="h-12 opacity-70 hover:opacity-100 transition text-gray-600 font-bold">Alliance Minière</div>
            <div className="h-12 opacity-70 hover:opacity-100 transition text-gray-600 font-bold">COBAD</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Votre carrière dans l'industrie minière démarre ici</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Transformez votre potentiel en expertise recherchée !</p>
          <Button onClick={() => scrollToSection('register')} className="bg-white hover:bg-gray-100 text-yellow-600 font-bold py-3 px-8 rounded-lg">
            S'inscrire Maintenant
          </Button>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-2 rounded-lg mr-3">
                  <Shield className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold text-white">SIP</span>
              </div>
              <p className="mb-4">Formation professionnelle d'excellence pour opérateurs d'engins de chantier.</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1DccwFtXpe/" className="text-gray-400 hover:text-white">📘</a>
                <a href="#" className="text-gray-400 hover:text-white">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white">💼</a>
                <a href="#" className="text-gray-400 hover:text-white">📸</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('overview')} className="hover:text-white">Aperçu du Cours</button></li>
                <li><button onClick={() => scrollToSection('program')} className="hover:text-white">Programme</button></li>
                <li><button onClick={() => scrollToSection('certification')} className="hover:text-white">Certification</button></li>
                <li><button onClick={() => scrollToSection('benefits')} className="hover:text-white">Avantages</button></li>
                <li><button onClick={() => scrollToSection('register')} className="hover:text-white">Inscription</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Centre de Formation</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="text-yellow-500 mr-2 mt-1" size={16} />
                  <span>Boké Ville Zone minière, Baralande N°14, ECM 12345, Guinée</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Contactez-nous</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="text-yellow-500 mr-2" size={16} />
                  <span>(+224) 626-250-624</span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-yellow-500 mr-2" size={16} />
                  <span>expertiseminingconsulting@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="text-yellow-500 mr-2" size={16} />
                  <span>Lun-Ven : 8h-18h</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 SIP - Séminaire d'Insertion Professionnel. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="hover:text-white">Mentions légales</Link>
              <Link to="/contact" className="hover:text-white">CGV</Link>
              <Link to="/contact" className="hover:text-white">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExcavatorCertificationPage;
