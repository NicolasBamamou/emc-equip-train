
import React from 'react';
import { Award, Calendar, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Industry-Recognized Certifications",
    description: "Our programs lead to certifications that are recognized and respected throughout the heavy equipment industry."
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Flexible Scheduling",
    description: "Choose from day, evening, and weekend classes to fit training into your busy life."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Expert Instructors",
    description: "Learn from certified instructors with years of real-world experience in heavy equipment operation."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Fast-Track Programs",
    description: "Get trained and certified in as little as 3-6 weeks, depending on the program."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Why Choose EMC Training?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive training programs designed to prepare you for a successful career in heavy equipment operation.
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
