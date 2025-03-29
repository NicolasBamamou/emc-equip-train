
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
    title: "Excavator Operator",
    description: "Master the operation of excavators with our comprehensive training program.",
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    link: "/courses#excavator"
  },
  {
    title: "Bulldozer Training",
    description: "Learn to operate bulldozers safely and efficiently in various work environments.",
    duration: "3 weeks",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80",
    link: "/courses#bulldozer"
  },
  {
    title: "Crane Operation",
    description: "Comprehensive training on crane operation safety and techniques.",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    link: "/courses#crane"
  }
];

const CoursesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Featured Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular heavy equipment training programs designed to launch your career.
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
                <CardDescription>Duration: {course.duration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={course.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
