import React from 'react';
import { useParams } from 'react-router-dom';
import CourseTemplate from '../components/courses/CourseTemplate';
import LoadingSpinner from '../components/LoadingSpinner';
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
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cours non trouvé</h1>
            <p className="text-gray-600 mb-8">Le cours que vous recherchez n'existe pas.</p>
            <LoadingSpinner text="Redirection..." />
          </div>
        </div>
      </div>
    );
  }

  return (
    <CourseTemplate 
      course={foundCourse}
      specialization={foundSpecialization}
    />
  );
};

export default CourseDetailPage;
