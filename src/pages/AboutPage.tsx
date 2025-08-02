import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const instructors = [
  {
    name: "Lucien Haba",
    position: "PDG de SIP",
    experience: "15+ ans",
    bio: "M. Haba apporte plus de 15 ans d'expérience terrain dans l'opération d'excavatrice à travers des projets de construction, d'exploitation minière et d'infrastructure.",
    image: "/sip-equip-train/images/CEO.jpg"
  },
  {
    name: "Mariam Touré",
    position: "Instructrice Sénior - Opération de Grue",
    experience: "12+ ans",
    bio: "Mariam est spécialisée dans l'opération de grues à tour et mobiles avec une vaste expérience dans les projets de mine.",
    image: "/sip-equip-train/images/Secretary.jpg"
  },
  {
    name: "Robert Camara",
    position: "Instructeur - Opération de Bulldozer et Niveleuse",
    experience: "10+ ans",
    bio: "Robert a travaillé intensivement dans le développement de terrains et la construction de routes, maîtrisant divers équipements de terrassement.",
    image:"/sip-equip-train/images/truck operatoo.jpg"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Fading Images */}
        <section className="relative min-h-[300px] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="hero-bg-overlay" />
            <div className="absolute inset-0">
              <div className="absolute inset-0">
                <img
                  src="/sip-equip-train/images/Excavator.png"
                  alt=""
                  className="w-full h-full object-cover animate-fade-1"
                />
              </div>
              <div className="absolute inset-0">
                <img
                  src="/sip-equip-train/images/Loader.png"
                  alt=""
                  className="w-full h-full object-cover animate-fade-2"
                />
              </div>
              <div className="absolute inset-0">
                <img
                  src="/sip-equip-train/images/Dozer.png"
                  alt=""
                  className="w-full h-full object-cover animate-fade-3"
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Séminaire d'Insertion Professionnel (SIP)</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Leader dans la formation d'opérateurs d'équipements lourds en Guinée
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center">Notre Histoire</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="mb-4 text-lg">
                  Établie en 2005, SIP a débuté avec une mission simple : fournir une formation d'opérateur d'équipement lourd de haute qualité qui répond aux besoins réels de l'industrie. Notre fondateur, Lucien Haba, a remarqué un écart entre ce qui était enseigné dans les programmes de formation et ce que les employeurs attendaient réellement des opérateurs.
                </p>
                <p className="mb-4 text-lg">
                  Commençant avec seulement deux équipements et un petit terrain d'entraînement, SIP est devenue l'une des principales installations de formation en équipement lourd de la région. Aujourd'hui, nous exploitons un terrain d'entraînement de 4 hectares avec une flotte d'équipements modernes et des salles de classe conçues pour fournir à la fois des connaissances théoriques et des compétences pratiques.
                </p>
                <p className="text-lg">
                  Au fil des années, nous avons aidé des milliers d'étudiants à lancer des carrières réussies dans l'opération d'équipement lourd, maintenant notre engagement envers l'excellence, la sécurité et l'apprentissage pratique tout au long de notre croissance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">Notre Mission & Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Notre Mission</h3>
                  <p className="mb-4">
                    Accompagner l'insertion professionnelle complète dans l'écosystème minier guinéen en offrant des formations certifiantes multidisciplinaires qui couvrent l'ensemble des compétences techniques, digitales, managériales et humaines nécessaires pour exceller dans l'industrie minière moderne.
                  </p>
                  <p>
                    Nous formons des professionnels polyvalents, sécuritaires et adaptés aux exigences évolutives du secteur minier ouest-africain.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Notre Vision</h3>
                  <p className="mb-4">
                    Devenir le centre d'excellence de référence en Afrique de l'Ouest pour la formation et l'insertion professionnelle dans les métiers miniers.
                  </p>
                  <p>
                    Créer un écosystème complet de développement des talents qui transforme les vies et propulse l'industrie minière guinéenne vers les standards internationaux d'excellence et d'innovation.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary text-center">Nos Valeurs Fondamentales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">🛡️ Excellence et Sécurité</h4>
                      <p className="text-sm text-gray-600 mb-3">Culture sécuritaire intégrée et standards d'excellence dans chaque formation.</p>
                      
                      <h4 className="font-semibold text-lg mb-2">🤝 Inclusion et Développement Humain</h4>
                      <p className="text-sm text-gray-600 mb-3">Égalité des chances et accompagnement personnalisé pour tous nos apprenants.</p>
                      
                      <h4 className="font-semibold text-lg mb-2">🚀 Innovation et Adaptabilité</h4>
                      <p className="text-sm text-gray-600">Transformation digitale et adaptation aux évolutions technologiques du secteur.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">🌍 Impact Sociétal et Durabilité</h4>
                      <p className="text-sm text-gray-600 mb-3">Contribution au développement communautaire et conscience environnementale.</p>
                      
                      <h4 className="font-semibold text-lg mb-2">💡 Innovation Pédagogique</h4>
                      <p className="text-sm text-gray-600 mb-3">Pédagogie active, mentorat professionnel et formation holistique.</p>
                      
                      <h4 className="font-semibold text-lg mb-2">⚡ Insertion Professionnelle</h4>
                      <p className="text-sm text-gray-600">Accompagnement jusqu'à l'emploi avec un taux de placement de 85%+.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Instructors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">Rencontrez Nos Instructeurs Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructors.map((instructor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                    <p className="text-primary font-medium mb-2">{instructor.position}</p>
                    <p className="text-gray-600 mb-3">Expérience: {instructor.experience}</p>
                    <p>{instructor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
