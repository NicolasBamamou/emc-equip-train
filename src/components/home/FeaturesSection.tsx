
import React from 'react';
import { Award, Calendar, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "7 Spécialisations Certifiantes",
    description: "Formation complète couvrant toutes les compétences techniques, digitales et managériales pour exceller dans l'industrie minière."
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Insertion Professionnelle Garantie",
    description: "Taux de placement de 85%+ dans les 6 mois grâce à notre réseau de partenaires industriels et notre accompagnement personnalisé."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Experts Multidisciplinaires",
    description: "Apprenez auprès d'instructeurs certifiés couvrant l'ensemble de l'écosystème minier : technique, sécurité, gestion et digital."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Parcours Personnalisés",
    description: "Formations modulaires de 2 semaines à 12 mois selon vos objectifs professionnels et votre niveau initial."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Pourquoi Choisir SIP pour Votre Insertion Professionnelle?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous offrons un écosystème complet de formation multidisciplinaire conçu pour votre réussite professionnelle dans l'industrie minière guinéenne et ouest-africaine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
