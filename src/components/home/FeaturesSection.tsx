
import React from 'react';
import { Award, Calendar, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Certifications Reconnues par l'Industrie",
    description: "Nos programmes mènent à des certifications qui sont reconnues et respectées dans toute l'industrie des équipements lourds."
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Horaires Flexibles",
    description: "Choisissez parmi des cours de jour, du soir et de fin de semaine pour adapter la formation à votre vie bien remplie."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Instructeurs Experts",
    description: "Apprenez auprès d'instructeurs certifiés possédant des années d'expérience concrète dans l'opération d'équipements lourds."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Programmes Accélérés",
    description: "Soyez formé et certifié en aussi peu que 3 à 6 semaines, selon le programme."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Pourquoi Choisir EMC Formation ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous offrons des programmes de formation complets conçus pour vous préparer à une carrière réussie dans l'opération d'équipements lourds.
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
