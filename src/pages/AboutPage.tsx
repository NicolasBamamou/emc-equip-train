
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const instructors = [
  {
    name: "John Smith",
    position: "Lead Instructor - Excavator Operation",
    experience: "15+ years",
    bio: "John brings over 15 years of field experience in excavator operation across construction, mining, and infrastructure projects.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Maria Rodriguez",
    position: "Senior Instructor - Crane Operation",
    experience: "12+ years",
    bio: "Maria specializes in tower and mobile crane operation with extensive experience in high-rise construction projects.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Robert Johnson",
    position: "Instructor - Bulldozer & Grader Operation",
    experience: "10+ years",
    bio: "Robert has worked extensively in land development and road construction, mastering various earthmoving equipment.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About EMC Training</h1>
              <p className="text-lg md:text-xl">
                Building careers and shaping the future of heavy equipment operation through excellence in training.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading text-center">Our Story</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="mb-4 text-lg">
                  Established in 2005, EMC Training began with a simple mission: to provide high-quality heavy equipment operator training that meets real industry needs. Our founder, Michael Thompson, noticed a gap between what was being taught in training programs and what employers actually needed from operators.
                </p>
                <p className="mb-4 text-lg">
                  Starting with just two pieces of equipment and a small training yard, EMC Training has grown into one of the region's premier heavy equipment training facilities. Today, we operate a 10-acre training ground with a fleet of modern equipment and classroom facilities designed to provide both theoretical knowledge and practical skills.
                </p>
                <p className="text-lg">
                  Over the years, we've helped thousands of students launch successful careers in heavy equipment operation, maintaining our commitment to excellence, safety, and hands-on learning throughout our growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p>
                    To provide industry-leading heavy equipment operator training that emphasizes safety, practical skills, and career readiness, preparing our graduates to make immediate contributions to their employers and the industry.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-semibold">Safety First:</span> We embed safety consciousness in every aspect of our training.
                    </li>
                    <li>
                      <span className="font-semibold">Hands-on Learning:</span> We believe that practical experience is essential to mastery.
                    </li>
                    <li>
                      <span className="font-semibold">Industry Relevance:</span> Our curriculum evolves with industry needs and technological advances.
                    </li>
                    <li>
                      <span className="font-semibold">Student Success:</span> We measure our success by the career achievements of our graduates.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Instructors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">Meet Our Expert Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructors.map((instructor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                    <p className="text-primary font-medium mb-2">{instructor.position}</p>
                    <p className="text-gray-600 mb-3">Experience: {instructor.experience}</p>
                    <p>{instructor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
