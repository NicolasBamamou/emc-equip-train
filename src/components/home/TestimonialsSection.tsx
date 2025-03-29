
import React from 'react';
import { 
  Card,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "EMC Training provided me with the skills I needed to secure a well-paying job as an excavator operator. The instructors were knowledgeable and supportive throughout my training.",
    name: "Michael Johnson",
    position: "Excavator Operator at Smith Construction"
  },
  {
    quote: "After completing the crane operation certification program, I received multiple job offers. The hands-on training approach at EMC really prepared me for real-world work situations.",
    name: "Sarah Williams",
    position: "Crane Operator at BuildRight Inc."
  },
  {
    quote: "The bulldozer training program exceeded my expectations. The instructors were patient and ensured I mastered all the necessary skills before graduation.",
    name: "David Rodriguez",
    position: "Heavy Equipment Operator at Jones Earthworks"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Graduates Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear success stories from students who have completed our training programs and advanced their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Quote size={32} />
                </div>
                <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
