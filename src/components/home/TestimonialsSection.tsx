
import React from 'react';
import { 
  Card,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "EMC Formation m'a fourni les compétences dont j'avais besoin pour obtenir un emploi bien rémunéré en tant qu'opérateur d'excavatrice. Les instructeurs étaient compétents et m'ont soutenu tout au long de ma formation.",
    name: "Michel Johnson",
    position: "Opérateur d'Excavatrice chez Smith Construction"
  },
  {
    quote: "Après avoir terminé le programme de certification d'opération de grue, j'ai reçu plusieurs offres d'emploi. L'approche pratique chez EMC m'a vraiment préparé pour des situations de travail réelles.",
    name: "Sarah Williams",
    position: "Opératrice de Grue chez BuildRight Inc."
  },
  {
    quote: "Le programme de formation pour bulldozer a dépassé mes attentes. Les instructeurs étaient patients et ont veillé à ce que je maîtrise toutes les compétences nécessaires avant l'obtention du diplôme.",
    name: "David Rodriguez",
    position: "Opérateur d'Équipement Lourd chez Jones Earthworks"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Ce Que Disent Nos Diplômés</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages d'étudiants qui ont complété nos programmes de formation et ont fait progresser leur carrière.
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
