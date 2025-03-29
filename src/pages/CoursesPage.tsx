
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const courses = [
  {
    id: "excavator",
    title: "Excavator Operator Certification",
    duration: "4 Weeks",
    level: "Beginner to Advanced",
    price: "$2,995",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    description: "Master the operation of hydraulic excavators in various construction and earthmoving contexts.",
    topics: [
      "Excavator types and components",
      "Pre-operation inspection and safety protocols",
      "Basic operating techniques and controls",
      "Trenching and grading operations",
      "Loading techniques and material handling",
      "Advanced maneuvers and precision digging",
      "Maintenance basics and troubleshooting"
    ],
    certification: "NCCER Heavy Equipment Operations - Excavator"
  },
  {
    id: "bulldozer",
    title: "Bulldozer Training Program",
    duration: "3 Weeks",
    level: "Beginner to Intermediate",
    price: "$2,495",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80",
    description: "Learn to operate bulldozers safely and effectively for land clearing, grading, and material handling operations.",
    topics: [
      "Bulldozer types and applications",
      "Safety procedures and risk management",
      "Basic operating techniques",
      "Slot dozing and push loading",
      "Slope work and finishing techniques",
      "Grade checking and interpretation",
      "Basic maintenance procedures"
    ],
    certification: "NCCER Heavy Equipment Operations - Bulldozer"
  },
  {
    id: "crane",
    title: "Crane Operation Certification",
    duration: "6 Weeks",
    level: "Intermediate to Advanced",
    price: "$3,995",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    description: "Comprehensive training on mobile crane operation, safety protocols, and load management.",
    topics: [
      "Crane types and components",
      "Load charts and capacity calculations",
      "Site assessment and setup procedures",
      "Rigging techniques and load securing",
      "Signaling and communication",
      "Critical lift planning",
      "Emergency procedures and troubleshooting"
    ],
    certification: "NCCCO Mobile Crane Operator Certification"
  },
  {
    id: "forklift",
    title: "Forklift Certification",
    duration: "1 Week",
    level: "Beginner",
    price: "$995",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    description: "Learn to safely operate forklifts in warehouse, construction, and industrial settings.",
    topics: [
      "Forklift types and applications",
      "OSHA regulations and safety requirements",
      "Pre-operation inspection procedures",
      "Load handling and stability principles",
      "Maneuvering in tight spaces",
      "Stacking and unstacking procedures",
      "Refueling/recharging procedures"
    ],
    certification: "OSHA Compliant Forklift Operator Certification"
  },
  {
    id: "backhoe",
    title: "Backhoe Operator Training",
    duration: "3 Weeks",
    level: "Beginner to Intermediate",
    price: "$2,495",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    description: "Master the operation of backhoe loaders for excavation, trenching, and material handling.",
    topics: [
      "Backhoe components and controls",
      "Safety procedures and hazard awareness",
      "Loader operation techniques",
      "Excavator operation techniques",
      "Trenching and backfilling procedures",
      "Material handling and loading trucks",
      "Basic maintenance and troubleshooting"
    ],
    certification: "NCCER Heavy Equipment Operations - Backhoe"
  }
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Training Programs</h1>
              <p className="text-lg md:text-xl">
                Comprehensive heavy equipment training programs taught by industry experts using modern equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Course Listings */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="section-heading text-center">Available Courses</h2>
              <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">
                Select from our range of certification programs designed to prepare you for a successful career in heavy equipment operation.
              </p>
            </div>

            <div className="space-y-12">
              {courses.map((course, index) => (
                <div 
                  key={index} 
                  id={course.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden grid md:grid-cols-3 scroll-mt-24"
                >
                  <div className="h-64 md:h-full overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
                        Duration: {course.duration}
                      </span>
                      <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
                        Level: {course.level}
                      </span>
                      <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
                        Price: {course.price}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    <Accordion type="single" collapsible className="mb-4">
                      <AccordionItem value="topics">
                        <AccordionTrigger>What You'll Learn</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-1">
                            {course.topics.map((topic, i) => (
                              <li key={i}>{topic}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="certification">
                        <AccordionTrigger>Certification</AccordionTrigger>
                        <AccordionContent>
                          <p>{course.certification}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="flex gap-4">
                      <Button asChild>
                        <Link to="/admissions">Apply Now</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/contact">Request Info</Link>
                      </Button>
                    </div>
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

export default CoursesPage;
