
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CourseGrid } from '@/components/courses';
import specializations from '@/data/specializations';

const CoursesSection = () => {
  // Get featured courses from heavy equipment specialization
  const heavyEquipmentSpec = specializations.find(spec => spec.id === 'heavy-equipment');
  const featuredCourses = heavyEquipmentSpec?.courses?.slice(0, 3) || [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Nos Spécialisations Phares</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos programmes de formation multidisciplinaires conçus pour votre insertion professionnelle complète dans l'écosystème minier.
          </p>
        </div>

        <CourseGrid
          courses={featuredCourses}
          showFilters={false}
          showViewToggle={false}
          maxItems={3}
        />

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/courses">Découvrir Toutes Nos Spécialisations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
