
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';

const courses = [
  {
    title: "Opérateur d'Excavatrice",
    description: "Maîtrisez l'opération d'excavatrices avec notre programme de formation complet.",
    duration: "4 semaines",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    link: "/courses#excavator"
  },
  {
    title: "Formation Bulldozer",
    description: "Apprenez à utiliser les bulldozers de manière sûre et efficace dans divers environnements de travail.",
    duration: "3 semaines",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80",
    link: "/courses#bulldozer"
  },
  {
    title: "Opérateur de Grue",
    description: "Formation complète sur la sécurité et les techniques d'opération de grues.",
    duration: "6 semaines",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    link: "/courses#crane"
  }
];

const CoursesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Formations Vedettes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez nos programmes de formation d'équipement lourd les plus populaires conçus pour lancer votre carrière.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>Durée: {course.duration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={course.link}>En Savoir Plus</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/courses">Voir Toutes les Formations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
