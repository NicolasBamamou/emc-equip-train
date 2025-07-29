// Individual Course Pages Index
// Add new course pages here and import them in CourseDetailPage.tsx

export { default as IntroSecuritePage } from './IntroSecuritePage';
export { default as ISO45001Page } from './ISO45001Page';
export { default as IntroDieselPage } from './IntroDieselPage';
export { default as EPIPage } from './EPIPage';
export { default as HazardIdPage } from './HazardIdPage';
export { default as EmergencyPage } from './EmergencyPage';
export { default as OutilsBasePage } from './OutilsBasePage';
export { default as SystemesMoteurPage } from './SystemesMoteurPage';
export { default as ErgonomiePage } from './ErgonomiePage';
export { default as IncendiePage } from './IncendiePage';
export { default as EvaluationRisquesPage } from './EvaluationRisquesPage';
export { default as LectureManuelsPage } from './LectureManuelsPage';
export { default as ComposantsMoteurPage } from './ComposantsMoteurPage';
export { default as IntroGenieMinerPage } from './IntroGenieMinerPage';
export { default as UtilisationEnginsLourdsPage } from './UtilisationEnginsLourdsPage';
export { default as SecuriteEnvironnementalePage } from './SecuriteEnvironnementalePage';
export { default as FormationInductionPage } from './FormationInductionPage';
export { default as SystemesAlimPage } from './SystemesAlimPage';
export { default as SecuriteElectriqueBasePage } from './SecuriteElectriqueBasePage';
export { default as CommunicationProfessionnellePage } from './CommunicationProfessionnellePage';
export { default as LeadershipOperationsPage } from './LeadershipOperationsPage';

// Template for adding new courses:
// export { default as YourCoursePage } from './YourCoursePage';

/* 
INSTRUCTIONS FOR ADDING NEW COURSE PAGES:

1. Create a new file in this folder (e.g., YourCoursePage.tsx)
2. Export it here in this index file
3. Import it in CourseDetailPage.tsx
4. Add the course ID mapping in the customPages object in CourseDetailPage.tsx

Example:
- File: EPIFormationPage.tsx
- Export: export { default as EPIFormationPage } from './EPIFormationPage';
- Import: import { EPIFormationPage } from './courses';
- Mapping: 'epi': EPIFormationPage,

AVAILABLE COURSE IDS (that need pages):
Security & Safety:
- intro-securite ✅
- epi ✅
- hazard-id ✅
- emergency ✅
- ergonomie
- incendie
- evaluation-risques
- utilisation-engins-lourds
- securite-environnementale
- formation-induction
- rapport-incident
- protocoles-electromecanique
- iso-45001 ✅
- reglementation-miniere
- gestion-superviseurs
- hazmat
- reponse-urgence-avancee
- hygiene-industrielle

Diesel & Heavy Vehicle Mechanics:
- intro-diesel ✅
- outils-base ✅
- systemes-moteur ✅
- lecture-manuels
- composants-moteur
- systemes-alim
- lubrification
- transmission
- hydraulique
- freinage

Mining Engineering:
- intro-genie-minier
- methodes-exploitation
- geologie-mecanique
- terminologie-operations
- securite-environnement
- topographie-cartographie
- conception-planification
- forage-minage
- manutention-transport
- economie-faisabilite
- selection-equipements
- logiciels-planification
- mines-ciel-ouvert
- mines-souterraines
- stabilite-pentes
- gestion-operations
- fermeture-rehabilitation
*/
