import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface CourseTemplateProps {
  course: {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    price: string;
    image: string;
    topics: string[];
    certification: string;
  };
  specialization?: {
    id: string;
    title: string;
    description: string;
  };
}

const CourseTemplate: React.FC<CourseTemplateProps> = ({ course, specialization }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[300px] sm:min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-blue-200 mb-4 text-sm sm:text-base">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{course.title}</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-2 text-sm sm:text-base">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-2 text-sm sm:text-base">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold">{course.level}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-2 text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold">{course.price}</span>
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
                    {course.description}
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-3" />
                      <span className="text-sm sm:text-base"><strong>Durée:</strong> {course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-3" />
                      <span className="text-sm sm:text-base"><strong>Niveau:</strong> {course.level}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-3" />
                      <span className="text-sm sm:text-base"><strong>Prix:</strong> {course.price}</span>
                    </div>
                  </div>
                </div>

                {/* What You'll Learn */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">Ce que vous apprendrez</h2>
                  <ul className="space-y-2 sm:space-y-3">
                    {course.topics?.map((topic, index) => (
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
                  À la fin de cette formation, vous recevrez : <strong>{course.certification}</strong>
                </p>
              </div>

              {/* Specialization Info */}
              {specialization && (
                <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-8 lg:mb-12">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Spécialisation</h2>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Ce cours fait partie de la spécialisation <strong>{specialization.title}</strong>.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {specialization.description}
                  </p>
                  <Link 
                    to="/courses" 
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base"
                  >
                    Voir tous les cours de cette spécialisation →
                  </Link>
                </div>
              )}

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

export default CourseTemplate; 