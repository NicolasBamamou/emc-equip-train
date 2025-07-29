import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Award, CheckCircle } from 'lucide-react';

const CourseTemplate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 z-0">
            <img
              src="./images/placeholder.jpg" // Change this to your course image
              alt="Course Title"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <Link to="/courses" className="inline-flex items-center text-white hover:text-blue-200 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux formations
              </Link>
              
              {/* Course Level Badge */}
              <div className="flex items-center mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Niveau du Cours
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Titre du Cours
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Description courte et attrayante du cours qui explique sa valeur.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Durée</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-3">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Niveau</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-6 py-3">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Prix</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-bold mb-8 text-gray-900">À propos de ce cours</h2>
                  <div className="prose prose-lg text-gray-700 mb-8">
                    <p className="text-xl leading-relaxed mb-6">
                      Description détaillée du cours et de ses avantages.
                    </p>
                  </div>

                  {/* Learning Objectives */}
                  <div className="bg-blue-50 rounded-xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
                      Ce que vous apprendrez
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Objectif d'apprentissage 1",
                        "Objectif d'apprentissage 2",
                        "Objectif d'apprentissage 3",
                        "Objectif d'apprentissage 4",
                      ].map((objective, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Course Modules */}
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold mb-8 text-gray-900">Programme du cours</h3>
                    <div className="space-y-6">
                      {[
                        {
                          module: "Module 1",
                          title: "Titre du Module 1",
                          duration: "X jours",
                          topics: ["Sujet 1", "Sujet 2", "Sujet 3"]
                        },
                        // Add more modules...
                      ].map((module, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-semibold text-gray-900">{module.module}: {module.title}</h4>
                            <span className="text-sm text-blue-600 font-medium">{module.duration}</span>
                          </div>
                          <ul className="text-gray-600 space-y-1">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    {/* Course Info Card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Informations du cours</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-semibold">Durée</div>
                            <div className="text-gray-600">X Semaines</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-semibold">Niveau</div>
                            <div className="text-gray-600">Niveau du cours</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-semibold">Prix</div>
                            <div className="text-gray-600">X.XXX.XXX FG</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Certification */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
                      <div className="flex items-center mb-4">
                        <Award className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-bold text-blue-900">Certification</h3>
                      </div>
                      <p className="text-gray-700">
                        À la fin de cette formation, vous recevrez le <strong>Nom du Certificat</strong>.
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <Button size="lg" className="w-full" asChild>
                        <Link to="/admissions">S'inscrire maintenant</Link>
                      </Button>
                      <Button variant="outline" size="lg" className="w-full" asChild>
                        <Link to="/contact">Demander des infos</Link>
                      </Button>
                    </div>
                  </div>
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
