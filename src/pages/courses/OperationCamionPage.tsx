import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, Users, Book, ArrowLeft, Truck, Route, Navigation, 
  Shield, TrendingUp, DollarSign, Star, Zap, CheckCircle, 
  AlertTriangle, PhoneCall, Mail, MapPin, ArrowUp, Target,
  Award, Briefcase, Settings, Wrench, Activity, Calendar,
  PlayCircle, Download, FileText, Globe, Mountain, Fuel,
  HardHat, Cog, BarChart3, Gauge, Eye, Radio, Hammer
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationCamionPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Header />
      
      {/* Hero Section - Industrial Mining Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with mining truck image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(15,23,42,0.8)), url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`
          }}
        >
        </div>
        
        {/* Animated particles/dust effect */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Animated Mining Truck */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="mining-truck-animation">
            {/* Dust trail */}
            <div className="dust-trail">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="dust-particle"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    left: `${i * -25}px`,
                    width: `${8 + i * 2}px`,
                    height: `${8 + i * 2}px`
                  }}
                />
              ))}
            </div>
            
            <div className="mining-truck">
              <img 
                src="images/mining truck.png" 
                alt="Mining Truck"
                className="w-40 h-24 sm:w-52 sm:h-32 md:w-72 md:h-44 lg:w-96 lg:h-56 object-contain"
                style={{
                  filter: 'brightness(1.1) contrast(1.2) saturate(1.1) drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                }}
              />
            </div>
          </div>

          {/* Second truck moving in opposite direction */}
          <div className="mining-truck-reverse">
            <div className="dust-trail-reverse">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="dust-particle-reverse"
                  style={{
                    animationDelay: `${i * 0.25}s`,
                    right: `${i * -20}px`,
                    width: `${6 + i * 1.5}px`,
                    height: `${6 + i * 1.5}px`
                  }}
                />
              ))}
            </div>
            
            <img 
              src="images/Howo.png" 
              alt="Mining Truck 2"
              className="w-32 h-20 sm:w-40 sm:h-24 md:w-56 md:h-32 lg:w-72 lg:h-44 object-contain opacity-60"
              style={{
                filter: 'brightness(0.9) contrast(1.1) saturate(0.9) drop-shadow(0 6px 12px rgba(0,0,0,0.3))',
                transform: 'scaleX(-1)'
              }}
            />
          </div>

          {/* Additional atmospheric mining trucks in far background */}
          <div className="mining-truck-distant">
            <img 
              src="images/mining test.png" 
              alt="Distant Mining Truck"
              className="w-16 h-10 sm:w-20 sm:h-12 md:w-28 md:h-18 object-contain opacity-30"
              style={{
                filter: 'brightness(0.7) contrast(0.8) blur(1px) drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
              }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-20">
          <div className="max-w-6xl mx-auto">
            {/* Hero content */}
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="w-8 md:w-16 h-1 bg-orange-500"></div>
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 md:px-6 py-1 md:py-2 text-sm md:text-lg font-bold border-0">
                  FORMATION ÉLITE
                </Badge>
                <div className="w-8 md:w-16 h-1 bg-orange-500"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 leading-none">
                CAMION
                <span className="block text-orange-400 text-4xl sm:text-5xl md:text-8xl lg:text-9xl">
                  MINIER
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 max-w-4xl mx-auto font-medium px-4">
                Maîtrisez les <span className="text-orange-400 font-bold">géants de l'industrie</span> - 
                Formez-vous sur les camions miniers les plus puissants au monde
              </p>

              {/* Key specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8 md:mb-12 max-w-4xl mx-auto px-4">
                <div className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-lg p-2 md:p-4">
                  <div className="text-orange-400 text-lg md:text-2xl font-black">400T</div>
                  <div className="text-slate-300 text-xs md:text-sm">Capacité Max</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-lg p-2 md:p-4">
                  <div className="text-orange-400 text-lg md:text-2xl font-black">3000HP</div>
                  <div className="text-slate-300 text-xs md:text-sm">Puissance</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-lg p-2 md:p-4">
                  <div className="text-orange-400 text-lg md:text-2xl font-black">6 SEM</div>
                  <div className="text-slate-300 text-xs md:text-sm">Formation</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-lg p-2 md:p-4">
                  <div className="text-orange-400 text-lg md:text-2xl font-black">98%</div>
                  <div className="text-slate-300 text-xs md:text-sm">Embauche</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
                <Button 
                  onClick={() => scrollToSection('program')}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  <PlayCircle className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
                  DÉMARRER MAINTENANT
                </Button>
                
                <Button 
                  onClick={() => scrollToSection('details')}
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-6 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/25"
                >
                  <FileText className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
                  PROGRAMME DÉTAILLÉ
                </Button>
              </div>
            </div>

            {/* Quick stats bar */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center px-4">
              <div className="text-white">
                <div className="text-2xl md:text-3xl font-bold text-orange-400">240h</div>
                <div className="text-slate-400 text-sm md:text-base">Formation intensive</div>
              </div>
              <div className="text-white">
                <div className="text-2xl md:text-3xl font-bold text-orange-400">85%</div>
                <div className="text-slate-400 text-sm md:text-base">Pratique terrain</div>
              </div>
              <div className="text-white">
                <div className="text-2xl md:text-3xl font-bold text-orange-400">12</div>
                <div className="text-slate-400 text-sm md:text-base">Places limitées</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-30 bg-slate-800 border-b border-orange-500/30 shadow-xl">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: Eye },
              { id: 'program', label: 'Programme', icon: Book },
              { id: 'equipment', label: 'Équipements', icon: Truck },
              { id: 'certification', label: 'Certification', icon: Award },
              { id: 'investment', label: 'Investissement', icon: DollarSign }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  scrollToSection(tab.id);
                }}
                className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-3 md:py-4 font-medium transition-all duration-300 border-b-2 whitespace-nowrap text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'text-orange-400 border-orange-400 bg-orange-400/10'
                    : 'text-slate-300 border-transparent hover:text-orange-400 hover:border-orange-400/50'
                }`}
              >
                <tab.icon className="h-4 md:h-5 w-4 md:w-5" />
                <span className="hidden sm:block">{tab.label}</span>
                <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-slate-900 to-slate-800">
        
        {/* Overview Section */}
        <section id="overview" className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6">
                DOMINEZ LES <span className="text-orange-400">GÉANTS</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto px-4">
                Les camions miniers sont les véhicules les plus imposants de la planète. 
                Notre formation d'élite vous prépare à maîtriser ces mastodontes de 400 tonnes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-orange-500/30 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Mountain className="mr-4 h-8 w-8 text-orange-400" />
                    Défis Extrêmes
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: AlertTriangle,
                        title: "Terrains Impossibles",
                        desc: "Pentes à 40°, terrains instables, conditions météo extrêmes"
                      },
                      {
                        icon: Gauge,
                        title: "Précision Millimétrique",
                        desc: "Chargement de 400T avec précision ±2%, navigation GPS ultra-précise"
                      },
                      {
                        icon: Shield,
                        title: "Sécurité Absolue",
                        desc: "Protocoles zéro-accident, systèmes anti-renversement, détection d'obstacles"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-orange-500/20">
                        <div className="bg-orange-500 p-2 rounded-lg">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-orange-400 font-bold mb-2">{item.title}</h4>
                          <p className="text-slate-300">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="images/Howo2.png"
                    alt="Camion minier géant"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-orange-500/30">
                      <p className="text-orange-400 font-bold">HOWO MT86</p>
                      <p className="text-white text-sm">Capacité: 400 tonnes | Moteur: 4000HP | Hauteur: 7.5m</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                PROGRAMME <span className="text-orange-400">INTENSIF</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                6 semaines d'entraînement intensif pour transformer des conducteurs en experts des géants miniers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  week: "SEMAINE 1-2",
                  title: "FONDATIONS SÉCURITAIRES",
                  icon: HardHat,
                  color: "from-red-500 to-orange-500",
                  items: [
                    "Réglementations minières ISO 17757",
                    "Équipements de survie obligatoires",
                    "Signalisation fosse & communication radio",
                    "Études de cas d'accidents majeurs"
                  ]
                },
                {
                  week: "SEMAINE 3-4",
                  title: "MAÎTRISE TECHNIQUE",
                  icon: Cog,
                  color: "from-orange-500 to-yellow-500",
                  items: [
                    "Conduite sur pentes extrêmes (>15°)",
                    "Manœuvres de précision millimétrique",
                    "Freinage d'urgence & systèmes hydrauliques",
                    "Navigation GPS & systèmes embarqués"
                  ]
                },
                {
                  week: "SEMAINE 5-6",
                  title: "EXCELLENCE OPÉRATIONNELLE",
                  icon: BarChart3,
                  color: "from-yellow-500 to-green-500",
                  items: [
                    "Optimisation cycles de transport",
                    "Maintenance prédictive avancée",
                    "Coordination dispatch temps réel",
                    "Simulation de crise & situations extrêmes"
                  ]
                }
              ].map((module, index) => (
                <Card key={index} className="bg-slate-900 border-orange-500/30 hover:border-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
                  <CardHeader className="pb-4">
                    <div className={`bg-gradient-to-r ${module.color} p-4 rounded-lg mb-4`}>
                      <module.icon className="h-8 w-8 text-white mx-auto" />
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-black text-sm mb-2">{module.week}</div>
                      <CardTitle className="text-white text-xl font-black">{module.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {module.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Training methodology */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-orange-500/30 shadow-2xl">
              <h3 className="text-3xl font-bold text-white text-center mb-8">Méthodologie d'Entraînement</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-black text-2xl">85%</span>
                  </div>
                  <h4 className="text-orange-400 font-bold mb-2">PRATIQUE TERRAIN</h4>
                  <p className="text-slate-300 text-sm">Formation sur vrais camions miniers HOWO & SHACMAN</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-black text-2xl">10%</span>
                  </div>
                  <h4 className="text-blue-400 font-bold mb-2">SIMULATION VR</h4>
                  <p className="text-slate-300 text-sm">Scénarios de crise en réalité virtuelle ultra-réaliste</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-black text-2xl">5%</span>
                  </div>
                  <h4 className="text-green-400 font-bold mb-2">THÉORIE AVANCÉE</h4>
                  <p className="text-slate-300 text-sm">Mécanique lourde, hydraulique, systèmes embarqués</p>
                </div>
              </div>
            </div>
          </div>
        </section>
                              {/* Equipment Section */}
        <section id="equipment" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                ÉQUIPEMENTS <span className="text-orange-400">LÉGENDAIRES</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Formez-vous sur les mastodontes les plus puissants de la planète
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "HOWO MT86",
                  image: "images/Howo1.png",
                  specs: {
                    capacity: "400 tonnes",
                    power: "4000 HP",
                    height: "7.5m",
                    weight: "623 tonnes"
                  },
                  features: ["Système anti-renversement SINOTRUK", "GPS navigation Beidou", "Cabine climatisée premium", "Freinage assisté hydraulique"]
                },
                {
                  name: "SHACMAN HD465",
                  image: "images/SHACMAN HD465.png",
                  specs: {
                    capacity: "360 tonnes",
                    power: "3500 HP",
                    height: "7.2m",
                    weight: "550 tonnes"
                  },
                  features: ["Transmission automatique Allison", "Système TMCS monitoring", "Radar anticollision avancé", "Suspension pneumatique"]
                },
                {
                  name: "XCMG DE400",
                  image: "images/XCMG DE400.png",
                  specs: {
                    capacity: "365 tonnes",
                    power: "3650 HP",
                    height: "7.4m",
                    weight: "592 tonnes"
                  },
                  features: ["Moteur diesel Weichai", "Système intelligent XCS", "Cabine ergonomique 4.0", "Pneus Triangle TBR"]
                }
              ].map((truck, index) => (
                <Card key={index} className="bg-gradient-to-b from-slate-800 to-slate-900 border-orange-500/30 overflow-hidden group hover:border-orange-400 transition-all duration-500 transform hover:scale-105">
                  <div className="relative">
                    <img 
                      src={truck.image} 
                      alt={truck.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-black text-xl mb-1">{truck.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-orange-500/20 p-3 rounded-lg text-center">
                        <div className="text-orange-400 font-black text-lg">{truck.specs.capacity}</div>
                        <div className="text-slate-400 text-sm">Capacité</div>
                      </div>
                      <div className="bg-orange-500/20 p-3 rounded-lg text-center">
                        <div className="text-orange-400 font-black text-lg">{truck.specs.power}</div>
                        <div className="text-slate-400 text-sm">Puissance</div>
                      </div>
                      <div className="bg-orange-500/20 p-3 rounded-lg text-center">
                        <div className="text-orange-400 font-black text-lg">{truck.specs.height}</div>
                        <div className="text-slate-400 text-sm">Hauteur</div>
                      </div>
                      <div className="bg-orange-500/20 p-3 rounded-lg text-center">
                        <div className="text-orange-400 font-black text-lg">{truck.specs.weight}</div>
                        <div className="text-slate-400 text-sm">Poids</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {truck.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section id="certification" className="py-12 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6">
                CERTIFICATION <span className="text-orange-400">ÉLITE</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
                Obtenez la certification la plus respectée de l'industrie minière mondiale
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                
                {/* Left Column - Evaluation Process */}
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 md:p-8 rounded-2xl shadow-2xl border border-orange-400/30">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-white/20 p-3 rounded-full mr-4">
                        <Hammer className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-white font-black text-xl md:text-2xl text-center">
                        PROCESSUS D'ÉVALUATION EXTRÊME
                      </h3>
                    </div>
                    
                    <div className="space-y-4 md:space-y-6">
                      {[
                        {
                          icon: Target,
                          title: "Tests Pratiques Intensifs",
                          desc: "Manœuvres de précision sous stress, conditions météo extrêmes"
                        },
                        {
                          icon: Radio,
                          title: "Communication d'Urgence", 
                          desc: "Simulation de crises, coordination équipes de secours"
                        },
                        {
                          icon: Gauge,
                          title: "Performance Mesurée",
                          desc: "Temps de cycle, consommation, précision de chargement"
                        }
                      ].map((test, index) => (
                        <div key={index} className="flex items-start gap-3 md:gap-4 bg-black/20 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-white/10">
                          <div className="bg-white p-2 rounded-lg flex-shrink-0">
                            <test.icon className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-bold mb-1 text-sm md:text-base">{test.title}</h4>
                            <p className="text-red-100 text-xs md:text-sm leading-relaxed">{test.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* International Certificate */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 rounded-2xl border-2 border-orange-500/30 shadow-2xl">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-4 rounded-full w-fit mx-auto mb-6">
                        <Award className="h-12 w-12 md:h-16 md:w-16 text-white" />
                      </div>
                      <h4 className="text-white font-black text-xl md:text-2xl mb-3">CERTIFICAT INTERNATIONAL</h4>
                      <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 p-4 rounded-lg mb-6">
                        <p className="text-orange-400 font-bold text-lg md:text-xl">"Opérateur de Camion Minier Niveau Expert"</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 text-sm md:text-base">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>Reconnu par ICMM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>Valide dans 50+ pays</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>Durée: 5 ans</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>Recyclage inclus</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image and Stats */}
                <div className="space-y-6 md:space-y-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative">
                      <img
                        src="images/truck operatoo.jpg"
                        alt="Certification ceremony"
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                        <div className="bg-black/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-orange-500/30">
                          <h5 className="text-orange-400 font-bold text-lg md:text-xl mb-2">🎓 Cérémonie de Remise des Diplômes</h5>
                          <p className="text-white text-sm md:text-base">Plus de 95% de nos diplômés trouvent un emploi dans les 30 jours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Success Statistics */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 md:p-6 rounded-xl text-center">
                      <div className="text-2xl md:text-4xl font-black text-white mb-2">98%</div>
                      <div className="text-green-100 text-xs md:text-sm font-medium">Taux de Réussite</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 md:p-6 rounded-xl text-center">
                      <div className="text-2xl md:text-4xl font-black text-white mb-2">50+</div>
                      <div className="text-blue-100 text-xs md:text-sm font-medium">Pays Reconnus</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 md:p-6 rounded-xl text-center">
                      <div className="text-2xl md:text-4xl font-black text-white mb-2">95%</div>
                      <div className="text-purple-100 text-xs md:text-sm font-medium">Embauche 30j</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-600 to-red-600 p-4 md:p-6 rounded-xl text-center">
                      <div className="text-2xl md:text-4xl font-black text-white mb-2">5</div>
                      <div className="text-orange-100 text-xs md:text-sm font-medium">Ans Validité</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-12 md:mt-16 text-center">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-orange-500/30 max-w-4xl mx-auto">
                  <h4 className="text-white font-black text-xl md:text-2xl mb-4">🏆 Rejoignez l'Élite Mondiale</h4>
                  <p className="text-slate-300 mb-6 text-sm md:text-base">Seuls les meilleurs obtiennent cette certification. Êtes-vous prêt à relever le défi ?</p>
                  <Button 
                    onClick={() => scrollToSection('register')}
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Award className="mr-2 h-5 w-5" />
                    Commencer l'Évaluation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment ROI Section */}
        <section id="investment" className="py-20 bg-slate-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                RETOUR SUR <span className="text-orange-400">INVESTISSEMENT</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Une formation qui transforme votre carrière et révolutionne votre potentiel de revenus
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Pour les Participants */}
              <Card className="bg-gradient-to-br from-green-900 to-emerald-800 border-green-500/30 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
                  <CardTitle className="text-center text-2xl font-black flex items-center justify-center">
                    <Target className="mr-3 h-8 w-8" />
                    POUR VOTRE CARRIÈRE
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {[
                      {
                        icon: Briefcase,
                        title: "Embauche Garantie",
                        value: "98%",
                        desc: "des diplômés embauchés en CDI sous 30 jours"
                      },
                      {
                        icon: DollarSign,
                        title: "Augmentation Salariale",
                        value: "+150%",
                        desc: "de salaire moyen vs. conducteur standard"
                      },
                      {
                        icon: TrendingUp,
                        title: "Évolution Express",
                        value: "2 ANS",
                        desc: "pour accéder aux postes de superviseur"
                      },
                      {
                        icon: Globe,
                        title: "Opportunités Mondiales",
                        value: "50+",
                        desc: "pays avec mines partenaires recrutent"
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-green-800/50 rounded-lg">
                        <div className="bg-green-400 p-3 rounded-full">
                          <benefit.icon className="h-6 w-6 text-green-900" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-green-400 font-black text-2xl">{benefit.value}</span>
                            <span className="text-white font-bold">{benefit.title}</span>
                          </div>
                          <p className="text-green-100 text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pour les Entreprises */}
              <Card className="bg-gradient-to-br from-blue-900 to-indigo-800 border-blue-500/30 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
                  <CardTitle className="text-center text-2xl font-black flex items-center justify-center">
                    <BarChart3 className="mr-3 h-8 w-8" />
                    POUR LES ENTREPRISES
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {[
                      {
                        icon: Gauge,
                        title: "Productivité Boostée",
                        value: "+45%",
                        desc: "de réduction des temps de cycle"
                      },
                      {
                        icon: Shield,
                        title: "Sécurité Maximale",
                        value: "-90%",
                        desc: "d'incidents et accidents de travail"
                      },
                      {
                        icon: Fuel,
                        title: "Économies Carburant",
                        value: "-25%",
                        desc: "de consommation grâce aux techniques optimisées"
                      },
                      {
                        icon: Wrench,
                        title: "Maintenance Préventive",
                        value: "+40%",
                        desc: "d'augmentation de la durée de vie des équipements"
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-blue-800/50 rounded-lg">
                        <div className="bg-blue-400 p-3 rounded-full">
                          <benefit.icon className="h-6 w-6 text-blue-900" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-400 font-black text-2xl">{benefit.value}</span>
                            <span className="text-white font-bold">{benefit.title}</span>
                          </div>
                          <p className="text-blue-100 text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Investment Details */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-orange-900 to-red-900 border-orange-500/50 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 text-center">
                  <CardTitle className="text-3xl font-black">INVESTISSEMENT & FINANCEMENT</CardTitle>
                  <p className="text-orange-100 mt-2">Plusieurs options pour rendre cette formation accessible</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-orange-500/20 p-6 rounded-xl mb-4">
                        <div className="text-orange-400 font-black text-3xl mb-2">2.800.000 FG</div>
                        <div className="text-white font-bold">Formation Complète</div>
                      </div>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>✓ 6 semaines intensives</li>
                        <li>✓ Certification internationale</li>
                        <li>✓ Équipements inclus</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-500/20 p-6 rounded-xl mb-4">
                        <div className="text-green-400 font-black text-3xl mb-2">3x</div>
                        <div className="text-white font-bold">Paiement Échelonné</div>
                      </div>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>✓ 933.333 FG x 3 mois</li>
                        <li>✓ Sans frais supplémentaires</li>
                        <li>✓ Démarrage immédiat</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500/20 p-6 rounded-xl mb-4">
                        <div className="text-blue-400 font-black text-3xl mb-2">CPF</div>
                        <div className="text-white font-bold">Éligible CPF</div>
                      </div>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>✓ Formation certifiante</li>
                        <li>✓ Prise en charge possible</li>
                        <li>✓ Nous vous accompagnons</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                ILS ONT <span className="text-orange-400">RÉUSSI</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Découvrez les témoignages de nos anciens élèves devenus experts des géants miniers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Amadou D.",
                  role: "Opérateur Senior - Rio Tinto",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  quote: "Cette formation a révolutionné ma carrière. En 6 mois, je suis passé de conducteur de camionnette à opérateur de camion 400T avec un salaire multiplié par 3. L'entraînement est intense mais chaque moment compte.",
                  highlight: "Salaire x3 en 6 mois"
                },
                {
                  name: "Fatoumata K.",
                  role: "Superviseur Logistique - Eramet",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  quote: "Les simulations d'urgence m'ont littéralement sauvé la vie lors d'un glissement de terrain. La formation SIP dépasse tout ce qu'on peut imaginer. C'est du niveau militaire appliqué au mining.",
                  highlight: "Formation qui sauve des vies"
                },
                {
                  name: "Ibrahim S.",
                  role: "Formateur - Caterpillar Guinée",
                  image: "https://randomuser.me/api/portraits/men/75.jpg",
                  quote: "Nos 8 employés formés chez SIP sont devenus nos meilleurs éléments. Zéro accident depuis 18 mois, +60% de productivité. Cette formation devrait être obligatoire dans l'industrie.",
                  highlight: "0 accident en 18 mois"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-gradient-to-b from-slate-900 to-black border-orange-500/30 overflow-hidden group hover:border-orange-400 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-0">
                    {/* Header with photo and stars */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white/30">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                        <p className="text-white font-bold text-sm">{testimonial.highlight}</p>
                      </div>
                    </div>
                    
                    {/* Quote content */}
                    <div className="p-6">
                      <blockquote className="text-slate-300 text-sm italic mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t border-slate-700 pt-4">
                        <h4 className="text-orange-400 font-bold">{testimonial.name}</h4>
                        <p className="text-slate-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Video testimonial section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-orange-500/30 max-w-4xl mx-auto">
                <h3 className="text-white font-bold text-2xl mb-4">📹 Témoignages Vidéo Exclusifs</h3>
                <p className="text-slate-300 mb-6">Découvrez les parcours inspirants de nos diplômés en action sur le terrain</p>
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 font-bold">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Voir les Témoignages Vidéo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-red-700 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-white/10 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 leading-none">
                PRÊT À DOMINER
                <span className="block text-yellow-300">LES GÉANTS ?</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-red-100 mb-8 md:mb-12 max-w-4xl mx-auto font-medium px-4">
                Votre transformation commence maintenant. Rejoignez l'élite des opérateurs de camions miniers.
                <span className="block font-bold mt-2 text-base md:text-lg">⚠️ SEULEMENT 12 PLACES PAR SESSION ⚠️</span>
              </p>

              {/* Urgency countdown */}
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 md:p-8 mb-8 md:mb-12 border border-yellow-400/30">
                <h3 className="text-yellow-300 font-black text-lg md:text-2xl mb-4 md:mb-6">🔥 OFFRE LIMITÉE - PROCHAINE SESSION</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6">
                  {[
                    { label: "PLACES", value: "3", unit: "RESTANTES" },
                    { label: "RÉDUCTION", value: "30%", unit: "JUSQU'AU 31 AOÛT" },
                    { label: "BONUS", value: "GRATUIT", unit: "KIT OPÉRATEUR PRO" },
                    { label: "GARANTIE", value: "100%", unit: "EMBAUCHE OU REMBOURSÉ" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-red-600 to-orange-600 p-2 md:p-4 rounded-xl border border-yellow-400/20">
                      <div className="text-yellow-300 font-black text-lg md:text-2xl">{item.value}</div>
                      <div className="text-white font-bold text-sm">{item.label}</div>
                      <div className="text-red-100 text-xs">{item.unit}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
                  <Link to="/admissions" className="w-full sm:w-auto">
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-6 md:px-12 py-4 md:py-6 text-lg md:text-xl font-black rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                      <span className="relative flex items-center justify-center">
                        🚀 JE RÉSERVE MA PLACE
                        <ArrowLeft className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                  
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button 
                      variant="outline" 
                      className="w-full border-3 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 md:px-12 py-4 md:py-6 text-lg md:text-xl font-black rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25"
                    >
                      <PhoneCall className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
                      CONSEIL GRATUIT
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-300">500+</div>
                  <div className="text-red-100 text-sm">Diplômés Elite</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-300">50+</div>
                  <div className="text-red-100 text-sm">Mines Partenaires</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-300">15</div>
                  <div className="text-red-100 text-sm">Années d'Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-300">98%</div>
                  <div className="text-red-100 text-sm">Taux de Réussite</div>
                </div>
              </div>

              <p className="text-red-200 text-sm mt-8">
                <CheckCircle className="inline h-4 w-4 mr-2" /> Formation certifiée • Éligible CPF • Financement 3x sans frais
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                CONTACTEZ <span className="text-orange-400">SIP</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Notre équipe d'experts vous accompagne dans votre projet professionnel
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-500/30 mb-8">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl font-bold flex items-center">
                      <MapPin className="mr-3 h-8 w-8 text-orange-400" />
                      Centre de Formation SIP
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500 p-3 rounded-lg">
                        <PhoneCall className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-orange-400 font-bold mb-1">Téléphone Direct</h4>
                        <p className="text-white text-lg font-bold">+224 628 75 99 36</p>
                        <p className="text-slate-400 text-sm">Ligne dédiée formation camions miniers</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-orange-400 font-bold mb-1">Email</h4>
                        <p className="text-white">seminaireinsertionprofesionel@gmail.com</p>
                        <p className="text-slate-400 text-sm">Réponse sous 2h en jour ouvré</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-orange-400 font-bold mb-1">Adresse</h4>
                        <p className="text-white">Centre SIP Conakry</p>
                        <p className="text-slate-400 text-sm">Guinée • Site minier d'entraînement inclus</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 p-4 rounded-lg border border-orange-500/30">
                      <h4 className="text-orange-400 font-bold mb-2">🎯 Conseiller Spécialisé</h4>
                      <p className="text-slate-300 text-sm">Un expert dédié répond à toutes vos questions sur la formation, le financement et les débouchés professionnels.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg text-center border border-orange-500/20">
                    <div className="text-orange-400 font-black text-2xl">24h</div>
                    <div className="text-slate-400 text-sm">Réponse max</div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center border border-orange-500/20">
                    <div className="text-orange-400 font-black text-2xl">100%</div>
                    <div className="text-slate-400 text-sm">Accompagnement</div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center border border-orange-500/20">
                    <div className="text-orange-400 font-black text-2xl">GRATUIT</div>
                    <div className="text-slate-400 text-sm">Premier conseil</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-bold text-center">
                    Demande d'Information Express
                  </CardTitle>
                  <p className="text-slate-400 text-center">Recevez votre dossier complet en moins de 2h</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-orange-400 font-medium mb-2">Prénom *</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-orange-400 font-medium mb-2">Nom *</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-orange-400 font-medium mb-2">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-orange-400 font-medium mb-2">Téléphone *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        placeholder="+224 XXX XX XX XX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-orange-400 font-medium mb-2">Expérience actuelle</label>
                      <select 
                        id="experience" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      >
                        <option value="">Sélectionnez votre niveau</option>
                        <option value="debutant">Débutant (jamais conduit)</option>
                        <option value="camionnette">Conducteur camionnette</option>
                        <option value="poids-lourd">Conducteur poids lourd</option>
                        <option value="btp">Expérience BTP/Mines</option>
                        <option value="autre">Autre secteur</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-orange-400 font-medium mb-2">Questions spécifiques</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        placeholder="Posez-nous toutes vos questions sur la formation, le financement, les débouchés..."
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      RECEVOIR LE DOSSIER COMPLET
                    </Button>
                    
                    <p className="text-slate-400 text-xs text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté par nos conseillers pour vous présenter notre formation.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-orange-500/50 z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default OperationCamionPage;
