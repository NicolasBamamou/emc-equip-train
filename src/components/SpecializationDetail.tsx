import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Course {
  id?: string;
  title: string;
  label?: string;
  image?: string;
  duration?: string;
  level?: string;
  price?: string;
  description?: string;
  topics?: string[];
  certification?: string;
}

interface Module {
  id: string;
  title: string;
  courses: Array<{ id?: string; title: string; label?: string }>;
}

interface Specialization {
  id: string;
  title: string;
  image: string;
  introduction: string;
  description: string;
  coreCourses: string[];
  certifications: string[];
  rating: number;
  subcategories?: Module[];
  courses?: Course[];
}

const getModuleLabel = (spec: Specialization, courseIdOrTitle: string) => {
  if (!spec.subcategories) return null;
  for (const module of spec.subcategories) {
    for (const c of module.courses) {
      // Match by id if present, else by normalized title
      if (
        (c.id && c.id === courseIdOrTitle) ||
        (!c.id && c.title && c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === courseIdOrTitle)
      ) {
        return module.title;
      }
    }
  }
  return null;
};

const SpecializationDetail = ({ spec }: { spec: Specialization }) => {
  const [showAll, setShowAll] = useState(false);
  const isDiesel = spec.id === 'diesel-mechanics';
  const coursesToShow = isDiesel && !showAll && spec.courses && spec.courses.length > 10
    ? spec.courses.slice(0, 10)
    : spec.courses;

  return (
    <div>
      <h2 className="section-heading text-center mb-2">{spec.title}</h2>
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-8">{spec.description}</p>
      {/* Modules from subcategories array */}
      {spec.subcategories && (
        <div className={`grid md:grid-cols-${spec.subcategories.length > 3 ? 4 : 3} gap-6 mb-12`}>
          {spec.subcategories.map((module, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-primary text-center">{module.title}</h3>
              <ul className="space-y-2">
                {module.courses.map((course, i) => (
                  <li key={i}>
                    <a
                      href={`#${course.id || course.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-blue-700 hover:underline font-medium transition-colors"
                    >
                      {course.label || course.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {/* Detailed course cards */}
      {spec.courses && (
        <div className="space-y-12">
          {coursesToShow!.map((course, index) => {
            const moduleLabel = isDiesel ? getModuleLabel(spec, course.id || course.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-')) : null;
            return (
              <div
                key={index}
                id={course.id || course.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="bg-white rounded-lg shadow-md overflow-hidden grid md:grid-cols-3 scroll-mt-24"
              >
                <div className="h-64 md:h-full overflow-hidden">
                  <img
                    src={course.image || spec.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center mb-2">
                    {moduleLabel && (
                      <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold mr-3">
                        {moduleLabel}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-0">{course.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
                      Durée: {course.duration || 'À définir'}
                    </span>
                    <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
                      Niveau: {course.level || 'À définir'}
                    </span>
                    <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
                      Prix: {course.price || 'À définir'}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{course.description || 'Description à venir.'}</p>
                  <Accordion type="single" collapsible className="mb-4">
                    <AccordionItem value="topics">
                      <AccordionTrigger>Ce Que Vous Apprendrez</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-1">
                          {(course.topics || []).map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="certification">
                      <AccordionTrigger>Certification</AccordionTrigger>
                      <AccordionContent>
                        <p>{course.certification || 'À définir'}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex gap-4 mt-4">
                    <Button asChild>
                      <Link to="/admissions">S'inscrire</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/contact">Demander des Informations</Link>
                    </Button>
                    <a
                      href={`#${course.id || course.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-200 transition-colors border border-blue-300 ml-auto"
                      style={{ minWidth: '120px', textAlign: 'center' }}
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          {isDiesel && spec.courses.length > 10 && (
            <div className="flex justify-center mt-8">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? 'Voir moins' : 'Voir plus'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpecializationDetail; 