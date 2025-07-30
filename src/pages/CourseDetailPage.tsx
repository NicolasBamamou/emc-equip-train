import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Award, CheckCircle } from 'lucide-react';
import specializations from '../data/specializations';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cours non trouvé</h1>
            <p className="text-gray-600 mb-8">Le cours que vous recherchez n'existe pas.</p>
            <Button asChild>
              <Link to="/courses">Retour aux cours</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center">
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
              <Link to="/courses" className="inline-flex items-center text-white hover:text-blue-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{foundCourse.title}</h1>
              <p className="text-xl md:text-2xl mb-6">{foundCourse.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{foundCourse.duration}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{foundCourse.level}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{foundCourse.price}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Course Overview */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-primary">Aperçu du cours</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {foundCourse.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <span><strong>Durée:</strong> {foundCourse.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-blue-600 mr-3" />
                      <span><strong>Niveau:</strong> {foundCourse.level}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-blue-600 mr-3" />
                      <span><strong>Prix:</strong> {foundCourse.price}</span>
                    </div>
                  </div>
                </div>

                {/* What You'll Learn */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-primary">Ce que vous apprendrez</h2>
                  <ul className="space-y-3">
                    {foundCourse.topics?.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Certification */}
              <div className="bg-blue-50 rounded-lg p-8 mb-12">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-primary">Certification</h2>
                </div>
                <p className="text-gray-700 text-lg">
                  À la fin de cette formation, vous recevrez : <strong>{foundCourse.certification}</strong>
                </p>
              </div>

              {/* Specialization Info */}
              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">Spécialisation</h2>
                <p className="text-gray-700 mb-4">
                  Ce cours fait partie de la spécialisation <strong>{foundSpecialization.title}</strong>.
                </p>
                <p className="text-gray-600">
                  {foundSpecialization.description}
                </p>
                <Link 
                  to="/courses" 
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Voir tous les cours de cette spécialisation →
                </Link>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6 text-primary">Prêt à commencer ?</h2>
                <p className="text-gray-700 text-lg mb-8">
                  Rejoignez des milliers d'étudiants qui ont déjà transformé leur carrière avec nos formations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/admissions">S'inscrire maintenant</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
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
