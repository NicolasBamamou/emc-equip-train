import React, { useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Award, CheckCircle, ChevronRight } from 'lucide-react';
import specializations from '../data/specializations';
import LoadingSpinner from '../components/LoadingSpinner';

// Import individual course pages
import IntroSecuritePage from './courses/IntroSecuritePage';
import ISO45001Page from './courses/ISO45001Page';
import IntroDieselPage from './courses/IntroDieselPage';
import EPIPage from './courses/EPIPage';
import HazardIdPage from './courses/HazardIdPage';
import EmergencyPage from './courses/EmergencyPage';
import OutilsBasePage from './courses/OutilsBasePage';
import SystemesMoteurPage from './courses/SystemesMoteurPage';
import ErgonomiePage from './courses/ErgonomiePage';
import IncendiePage from './courses/IncendiePage';
import EvaluationRisquesPage from './courses/EvaluationRisquesPage';
import LectureManuelsPage from './courses/LectureManuelsPage';
import ComposantsMoteurPage from './courses/ComposantsMoteurPage';
import IntroGenieMinerPage from './courses/IntroGenieMinerPage';
import UtilisationEnginsLourdsPage from './courses/UtilisationEnginsLourdsPage';
import SecuriteEnvironnementalePage from './courses/SecuriteEnvironnementalePage';
import FormationInductionPage from './courses/FormationInductionPage';
import SystemesAlimPage from './courses/SystemesAlimPage';
import SecuriteElectriqueBasePage from './courses/SecuriteElectriqueBasePage';
import CommunicationProfessionnellePage from './courses/CommunicationProfessionnellePage';
import LeadershipOperationsPage from './courses/LeadershipOperationsPage';
import MaintenancePreventivePage from './courses/MaintenancePreventivePage';
import SoudurePage from './courses/SoudurePage';
import SecuriteMinierePage from './courses/SecuriteMinierePage';
import TeamworkPage from './courses/TeamworkPage';
import ElectriqueIndustriellePage from './courses/ElectriqueIndustriellePage';
import AutomatisationPage from './courses/AutomatisationPage';
// Heavy Equipment Course Pages
import OperationBulldozerPage from './courses/OperationBulldozerPage';
import OperationChargeusePage from './courses/OperationChargeusePage';
import OperationCamionPage from './courses/OperationCamionPage';
import BackhoePage from './courses/BackhoePage';
// Mining Operations Management Course Pages
import GestionLogistiquePage from './courses/GestionLogistiquePage';
import GestionPerformancePage from './courses/GestionPerformancePage';
import GestionTempsPage from './courses/GestionTempsPage';
import PlanificationMinierePage from './courses/PlanificationMinierePage';
import ControleQualitePage from './courses/ControleQualitePage';
import ResolutionProblemetPage from './courses/ResolutionProblemetPage';
// Additional unmapped custom pages
import LubrificationPage from './courses/LubrificationPage';
import TransmissionAutomatiquePage from './courses/TransmissionAutomatiquePage';
import SystemesElectriquesPage from './courses/SystemesElectriquesPage';
import SystemeRefroidissementPage from './courses/SystemeRefroidissementPage';
import RapportIncidentPage from './courses/RapportIncidentPage';
import MethodesExtractionPage from './courses/MethodesExtractionPage';
import ForageMiniePage from './courses/ForageMiniePage';
import GeologieAppliquePage from './courses/GeologieAppliquePage';
import LeadershipPage from './courses/LeadershipPage';
import CommunicationEfficacePage from './courses/CommunicationEfficacePage';
import ElectroniqueIndustriellePage from './courses/ElectroniqueIndustriellePage';
// Safety Specialization Course Pages
import ProtocolesElectromecaniquePage from './courses/ProtocolesElectromecaniquePage';
import ReglementationMinierePage from './courses/ReglementationMinierePage';
import GestionSuperviseurPage from './courses/GestionSuperviseurPage';
import HazmatPage from './courses/HazmatPage';
import ReponseUrgenceAvanceePage from './courses/ReponseUrgenceAvanceePage';
import HygieneIndustriellePage from './courses/HygieneIndustriellePage';
// Diesel Specialization Course Pages
import SecuriteAtelierPage from './courses/SecuriteAtelierPage';
import HydrauliquePage from './courses/HydrauliquePage';
import FreinagePage from './courses/FreinagePage';
import CanbusPage from './courses/CanbusPage';
import DiagnosticToolsPage from './courses/DiagnosticToolsPage';
import EmissionsPage from './courses/EmissionsPage';
import DepannagePage from './courses/DepannagePage';
import CatKomatsuPage from './courses/CatKomatsuPage';
import CamionsMiniersPage from './courses/CamionsMiniersPage';
import GestionFlottePage from './courses/GestionFlottePage';
import TractionElectriquePage from './courses/TractionElectriquePage';
// Electrical & Mechatronics Specialization Course Pages
import TechniquesCablagePage from './courses/TechniquesCablagePage';
import LectureSchemasPage from './courses/LectureSchemasPage';
import MoteursGenerateursPage from './courses/MoteursGenerateursPage';
import MoteursVfdPage from './courses/MoteursVfdPage';
import CapteursActionneursPage from './courses/CapteursActionneursPage';
import ProgrammationPlcPage from './courses/ProgrammationPlcPage';
import SystemesElectriquesMinesPage from './courses/SystemesElectriquesMinesPage';
import SystemesMecatroniquesPage from './courses/SystemesMecatroniquesPage';
import DiagnosticElectriquePage from './courses/DiagnosticElectriquePage';
import ProtocolesCommunicationPage from './courses/ProtocolesCommunicationPage';
import EquipementsHauteTensionPage from './courses/EquipementsHauteTensionPage';
// Mining Engineering Specialization Course Pages
import TerminologieOperationsPage from './courses/TerminologieOperationsPage';
import SecuriteEnvironnementPage from './courses/SecuriteEnvironnementPage';
import TopographieCartographiePage from './courses/TopographieCartographiePage';
import ConceptionPlanificationPage from './courses/ConceptionPlanificationPage';
import ManutentionTransportPage from './courses/ManutentionTransportPage';
import EconomieFaisabilitePage from './courses/EconomieFaisabilitePage';
import SelectionEquipementsPage from './courses/SelectionEquipementsPage';
import LogicielsPlanificationPage from './courses/LogicielsPlanificationPage';
import StabilitePentesPage from './courses/StabilitePentesPage';
import GestionOperationsPage from './courses/GestionOperationsPage';
// Mining Operations Management & Systems Course Pages  
import OptimisationCarburantPage from './courses/OptimisationCarburantPage';
import GestionPneusPage from './courses/GestionPneusPage';
import FondamentauxFmsPage from './courses/FondamentauxFmsPage';
import CmmsMiniesPage from './courses/CmmsMiniesPage';
import ErpMinierPage from './courses/ErpMinierPage';
import IntegrationSystemesPage from './courses/IntegrationSystemesPage';
import TelematiqueIotPage from './courses/TelematiqueIotPage';
import AnalytiqueMinierePage from './courses/AnalytiqueMinierePage';
import GestionChangementPage from './courses/GestionChangementPage';
import FormationPersonnelPage from './courses/FormationPersonnelPage';
// Soft Skills & Digital Culture Course Pages
import AnglaisTechniqueMinePage from './courses/AnglaisTechniqueMinePage';
import RedactionRapportsPage from './courses/RedactionRapportsPage';
import ResolutionConflitsPage from './courses/ResolutionConflitsPage';
import CultureInformatiqueBasePage from './courses/CultureInformatiqueBasePage';
import OutilsDigitauxMinePage from './courses/OutilsDigitauxMinePage';
import SaisieDonneesRapportsPage from './courses/SaisieDonneesRapportsPage';
import MicrosoftOfficePage from './courses/MicrosoftOfficePage';
import CybersecuriteEtiquettePage from './courses/CybersecuriteEtiquettePage';

const CourseDetailPage = () => {
  const { courseId, specializationId } = useParams<{ courseId: string; specializationId?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Redirect excavator course to dedicated page
  useEffect(() => {
    if (courseId === 'excavator') {
      navigate('/courses/excavator-certification', { replace: true });
      return;
    }
  }, [courseId, navigate]);
  
  // Determine the back URL based on the current route
  const getBackUrl = () => {
    if (specializationId) {
      return `/specialization/${specializationId}`;
    }
    // If no specializationId, try to find the course's specialization
    for (const spec of specializations) {
      if (spec.courses?.some(c => c.id === courseId)) {
        return `/specialization/${spec.id}`;
      }
    }
    return '/courses';
  };
  
  // Route to individual course pages for custom styling
  const customPages: { [key: string]: React.ComponentType } = {
    // ===== HEAVY EQUIPMENT OPERATION SPECIALIZATION =====
    // Note: excavator course now has its own dedicated page at /courses/excavator-certification
    'bulldozer': OperationBulldozerPage, // Programme de Formation Bulldozer
    'Chargeuses': OperationChargeusePage, // Certification Opérateurs de Chargeuses (Note: Capital C as in data)
    'chargeuses': OperationChargeusePage, // Alternative lowercase
    'backhoe': BackhoePage, // Formation d'Opérateur de Pelle Rétrocaveuse
    'camion': OperationCamionPage, // Certification d'Opérateur de camion minier

    // ===== MINING SAFETY & REGULATION SPECIALIZATION =====
    // Basic Safety Courses
    'intro-securite': IntroSecuritePage, // Introduction à la Sécurité Minière
    'epi': EPIPage, // Formation sur les Équipements de Protection Individuelle (EPI)
    'hazard-id': HazardIdPage, // Identification des Dangers sur le Lieu de Travail
    'emergency': EmergencyPage, // Procédures d'Urgence et Premiers Secours
    'ergonomie': ErgonomiePage, // Manutention Manuelle et Ergonomie
    'incendie': IncendiePage, // Sécurité Incendie de Base et Plans d'Évacuation

    // Intermediate Safety Courses
    'evaluation-risques': EvaluationRisquesPage, // Évaluation des Risques et Mesures de Contrôle
    'utilisation-engins-lourds': UtilisationEnginsLourdsPage, // Utilisation Sécurisée des Engins Lourds
    'securite-environnementale': SecuriteEnvironnementalePage, // Sécurité Environnementale et Gestion des Déchets
    'formation-induction': FormationInductionPage, // Formation d'Induction sur Site Minier
    'rapport-incident': RapportIncidentPage, // Rapport d'Incident et Analyse des Causes
    'protocoles-electromecanique': ProtocolesElectromecaniquePage, // Protocoles de Sécurité Électrique et Mécanique

    // Advanced Safety Courses
    'iso-45001': ISO45001Page, // ISO 45001 Systèmes de Gestion Santé & Sécurité
    'reglementation-miniere': ReglementationMinierePage, // Réglementation Minière et Conformité
    'gestion-superviseurs': GestionSuperviseurPage, // Gestion Santé & Sécurité pour les Superviseurs
    'hazmat': HazmatPage, // Gestion des Matières Dangereuses (HAZMAT)
    'reponse-urgence-avancee': ReponseUrgenceAvanceePage, // Gestion Avancée des Urgences et Crise
    'hygiene-industrielle': HygieneIndustriellePage, // Hygiène Industrielle et Santé Professionnelle

    // Alternative Safety Mappings
    'securite-avancee': SecuriteMinierePage,
    'securite-miniere': SecuriteMinierePage,
    'securite-electrique': SecuriteElectriqueBasePage,
    'securite-electrique-base': SecuriteElectriqueBasePage,

    // ===== DIESEL MECHANICS SPECIALIZATION =====
    // Foundational Diesel Courses
    'intro-diesel': IntroDieselPage, // Introduction à la mécanique diesel et engins lourds
    'outils-base': OutilsBasePage, // Outils de base et sécurité d'atelier
    'lecture-manuels': LectureManuelsPage, // Lecture et interprétation de manuels techniques
    'securite-atelier': SecuriteAtelierPage, // Sécurité d'atelier et sécurité

    // Intermediate Diesel Courses
    'systemes-moteur': SystemesMoteurPage, // Systèmes moteur et principes de combustion
    'composants-moteur': ComposantsMoteurPage, // Composants moteur et assemblages
    'systemes-alim': SystemesAlimPage, // Systèmes d'alimentation et injection
    'lubrification': LubrificationPage, // Systèmes de lubrification et refroidissement
    'hydraulique': HydrauliquePage, // Systèmes hydrauliques pour équipements lourds
    'transmission': TransmissionAutomatiquePage, // Systèmes de transmission
    'freinage': FreinagePage, // Freinage, suspension et direction

    // Advanced Diesel Courses
    'canbus': CanbusPage, // Systèmes CAN Bus et diagnostic ECU
    'diagnostic-tools': DiagnosticToolsPage, // Outils de diagnostic (CAT ET, Cummins INSITE, Bosch KTS)
    'emissions': EmissionsPage, // Émissions moteur et conformité environnementale
    'depannage': DepannagePage, // Techniques de dépannage et résolution de pannes
    'cat-komatsu': CatKomatsuPage, // Maintenance CAT, Komatsu ou Volvo
    'camions-miniers': CamionsMiniersPage, // Maintenance camions miniers (Belaz, Howo, Shacman)
    'gestion-flotte': GestionFlottePage, // Gestion de flotte et maintenance
    'traction-electrique': TractionElectriquePage, // Systèmes de traction électrique sur équipements modernes

    // ===== ELECTRICAL & MECHATRONICS SPECIALIZATION =====
    // Foundational Electrical Courses
    'circuits-dc-ac': SystemesElectriquesPage, // Circuits DC/AC et mesures de base
    'systemes-electriques': SystemesElectriquesPage, // Systèmes électriques
    'techniques-cablage': TechniquesCablagePage, // Techniques de câblage et protocoles de sécurité
    'lecture-schemas': LectureSchemasPage, // Lecture de schémas électriques et plans

    // Intermediate Electrical Courses
    'electrique': ElectriqueIndustriellePage, // Électrique industrielle
    'electrical': ElectriqueIndustriellePage, // English alternative
    'electrique-industrielle': ElectriqueIndustriellePage, // Full name
    'batteries-electronique-puissance': ElectroniqueIndustriellePage, // Électronique industrielle/électronique de puissance
    'moteurs-generateurs': MoteursGenerateursPage, // Moteurs et générateurs dans équipements miniers
    'moteurs-vfd': MoteursVfdPage, // Systèmes VFD et commande moteur
    'capteurs-actionneurs': CapteursActionneursPage, // Capteurs et actionneurs dans l'automatisation minière

    // Advanced Electrical Courses
    'programmation-plc': ProgrammationPlcPage, // Programmation PLC pour équipements miniers
    'systemes-electriques-mines': SystemesElectriquesMinesPage, // Systèmes électriques dans opérations minières
    'systemes-mecatroniques': SystemesMecatroniquesPage, // Systèmes mécatroniques et automatisation avancée
    'diagnostic-electrique': DiagnosticElectriquePage, // Diagnostic électrique et dépannage
    'protocoles-communication': ProtocolesCommunicationPage, // Protocoles de communication industrielle
    'equipements-haute-tension': EquipementsHauteTensionPage, // Fonctionnement et maintenance d'équipements haute tension
    'automatisation-scada': AutomatisationPage, // Automatisation et SCADA
    'scada': AutomatisationPage, // Short version
    'automation': AutomatisationPage, // English alternative

    // ===== MINING ENGINEERING & MINE PLANNING SPECIALIZATION =====
    // Foundational Mining Engineering Courses
    'intro-genie-minier': IntroGenieMinerPage, // Introduction au génie minier
    'terminologie-operations': TerminologieOperationsPage, // Terminologie minière et opérations
    'securite-environnement': SecuriteEnvironnementPage, // Sécurité minière et considérations environnementales
    'topographie-cartographie': TopographieCartographiePage, // Topographie et cartographie minière
    'geologie-mecanique': GeologieAppliquePage, // Géologie et mécanique des roches

    // Intermediate Mining Engineering Courses
    'conception-planification': ConceptionPlanificationPage, // Conception de mines et planification de l'aménagement
    'manutention-transport': ManutentionTransportPage, // Systèmes de manutention et de transport
    'economie-faisabilite': EconomieFaisabilitePage, // Économie minière et études de faisabilité
    'methodes-exploitation': MethodesExtractionPage, // Méthodes d'exploitation minière
    'forage-minage': ForageMiniePage, // Techniques de forage et minage
    'selection-equipements': SelectionEquipementsPage, // Sélection et optimisation d'équipements

    // Advanced Mining Engineering Courses
    'logiciels-planification': LogicielsPlanificationPage, // Logiciels de planification minière (Surpac, Datamine, etc.)
    'mines-ciel-ouvert': ConceptionPlanificationPage, // Conception et optimisation de mines à ciel ouvert (uses same template)
    'mines-souterraines': ConceptionPlanificationPage, // Conception de mines souterraines (uses same template)
    'stabilite-pentes': StabilitePentesPage, // Stabilité des pentes et systèmes de soutènement
    'gestion-operations': GestionOperationsPage, // Gestion des opérations minières
    'fermeture-rehabilitation': SecuriteEnvironnementPage, // Fermeture de mines et réhabilitation (uses same template)

    // ===== MINING OPERATIONS MANAGEMENT & SYSTEMS =====
    'gestion-flotte-operations': GestionLogistiquePage, // Gestion de flotte et opérations
    'optimisation-carburant': OptimisationCarburantPage, // Suivi et optimisation de la consommation de carburant
    'gestion-pneus': GestionPneusPage, // Gestion du cycle de vie des pneus pour engins lourds
    'fondamentaux-fms': FondamentauxFmsPage, // Fondamentaux des systèmes de gestion de flotte (FMS)
    'cmms-mines': CmmsMiniesPage, // CMMS (GMAO) pour les mines
    'erp-minier': ErpMinierPage, // Introduction à l'ERP minier (SAP, Oracle, etc.)
    'integration-systemes': IntegrationSystemesPage, // Intégration FMS, CMMS, ERP & outils de planification minière
    'telematique-iot': TelematiqueIotPage, // Télématique et IoT pour l'industrie minière
    'analytique-miniere': AnalytiqueMinierePage, // Analytique minière et systèmes d'aide à la décision
    'gestion-changement': GestionChangementPage, // Gestion du changement dans les organisations minières
    'formation-personnel': FormationPersonnelPage, // Formation du personnel et développement des talents
    'kpis-tableaux-bord': GestionPerformancePage, // KPIs et tableaux de bord
    'planification-itineraires': GestionTempsPage, // Planification d'itinéraires
    'planification-maintenance': PlanificationMinierePage, // Planification de maintenance
    'lean-mining': ControleQualitePage, // Lean mining

    // ===== SOFT SKILLS & DIGITAL CULTURE =====
    'communication-professionnelle': CommunicationProfessionnellePage, // Communication professionnelle
    'anglais-technique-mine': AnglaisTechniqueMinePage, // Anglais technique pour la mine
    'redaction-rapports': RedactionRapportsPage, // Rédaction de rapports et documentation
    'communication-interpersonnelle': CommunicationEfficacePage, // Communication interpersonnelle
    'resolution-conflits': ResolutionConflitsPage, // Résolution de conflits et culture du feedback
    'culture-informatique-base': CultureInformatiqueBasePage, // Culture informatique de base (email, fichiers, Excel, PDF)
    'outils-digitaux-mine': OutilsDigitauxMinePage, // Outils digitaux pour la mine (tablettes FMS, ERP, applis sécurité)
    'saisie-donnees-rapports': SaisieDonneesRapportsPage, // Saisie de données, formulaires numériques et rapports miniers
    'microsoft-office': MicrosoftOfficePage, // Introduction à Microsoft Office / Google Workspace
    'cybersecurite-etiquette': CybersecuriteEtiquettePage, // Bases de cybersécurité & étiquette digitale
    'leadership-operations': LeadershipOperationsPage, // Leadership et opérations
    'bases-leadership-superviseurs': LeadershipOperationsPage, // Bases du leadership pour superviseurs
    'maintenance-prev': MaintenancePreventivePage, // Maintenance préventive
    'soudure': SoudurePage, // Soudure
    'welding': SoudurePage, // English alternative
    'travail-equipe-terrain': TeamworkPage, // Travail d'équipe sur le terrain
    'teamwork': TeamworkPage, // English alternative
    'team-work': TeamworkPage, // Alternative mapping
    'gestion-temps-shifts': GestionTempsPage, // Gestion du temps pour le travail par équipes
    'initiative-resolution-problemes': ResolutionProblemetPage, // Initiative et résolution de problèmes
  };

  // If there's a custom page for this course, render it
  if (courseId && customPages[courseId]) {
    console.log('CourseDetailPage - Found custom page for:', courseId);
    const CustomPage = customPages[courseId];
    return <CustomPage />;
  }
  
  console.log('CourseDetailPage - No custom page found, falling back to generic template');
  
  // Otherwise, fall back to the generic template
  // Find the course across all specializations
  let foundCourse = null;
  let foundSpecialization = null;
  
  for (const spec of specializations) {
    if (spec.courses) {
      const course = spec.courses.find(c => c.id === courseId);
      if (course) {
        foundCourse = course;
        foundSpecialization = spec;
        break;
      }
    }
  }

  if (!foundCourse || !foundSpecialization) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cours non trouvé</h1>
            <p className="text-gray-600 mb-8 text-sm sm:text-base">Le cours que vous recherchez n'existe pas.</p>
            <LoadingSpinner text="Redirection..." />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Fallback to generic template if no custom page exists
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link to="/courses" className="text-gray-500 hover:text-gray-700 transition-colors">
                Formations
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {foundSpecialization && (
                <>
                  <Link 
                    to={`/specialization/${foundSpecialization.id}`} 
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {foundSpecialization.title}
                  </Link>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </>
              )}
              <span className="text-primary font-semibold">{foundCourse?.title}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[300px] sm:min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={foundCourse.image || foundSpecialization.image}
              alt={foundCourse.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to={getBackUrl()} className="inline-flex items-center text-white hover:text-blue-200 mb-4 text-sm sm:text-base">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {specializationId ? 'Retour à la spécialisation' : 'Retour aux formations'}
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{foundCourse.title}</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">{foundCourse.description}</p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-2 text-sm sm:text-base">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold">{foundCourse.duration}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-2 text-sm sm:text-base">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold">{foundCourse.level}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-2 text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold">{foundCourse.price}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
                {/* Course Overview */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">Aperçu du cours</h2>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                    {foundCourse.description}
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-3" />
                      <span className="text-sm sm:text-base"><strong>Durée:</strong> {foundCourse.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-3" />
                      <span className="text-sm sm:text-base"><strong>Niveau:</strong> {foundCourse.level}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-3" />
                      <span className="text-sm sm:text-base"><strong>Prix:</strong> {foundCourse.price}</span>
                    </div>
                  </div>
                </div>

                {/* What You'll Learn */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">Ce que vous apprendrez</h2>
                  <ul className="space-y-2 sm:space-y-3">
                    {foundCourse.topics?.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Certification */}
              <div className="bg-blue-50 rounded-lg p-6 sm:p-8 mb-8 lg:mb-12">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3" />
                  <h2 className="text-xl sm:text-2xl font-bold text-primary">Certification</h2>
                </div>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
                  À la fin de cette formation, vous recevrez : <strong>{foundCourse.certification}</strong>
                </p>
              </div>

              {/* Specialization Info */}
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-8 lg:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Spécialisation</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Ce cours fait partie de la spécialisation <strong>{foundSpecialization.title}</strong>.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  {foundSpecialization.description}
                </p>
                <Link 
                  to="/courses" 
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base"
                >
                  Voir tous les cours de cette spécialisation →
                </Link>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">Prêt à commencer ?</h2>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                  Rejoignez des milliers d'étudiants qui ont déjà transformé leur carrière avec nos formations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" asChild className="text-sm sm:text-base">
                    <Link to="/admissions">S'inscrire maintenant</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="text-sm sm:text-base">
                    <Link to="/contact">Demander plus d'informations</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
