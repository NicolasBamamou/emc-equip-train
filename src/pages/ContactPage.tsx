import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    toast({
      title: "Message envoyé",
      description: "Nous avons reçu votre message et vous répondrons bientôt.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Nous</h1>
              <p className="text-lg md:text-xl">
                Vous avez des questions ? Nous sommes là pour vous aider. Contactez notre équipe pour plus d'informations sur nos programmes de formation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Téléphone</CardTitle>
                  <p>(+224) 626-250-624</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Email</CardTitle>
                  <p>espertiseminingconsulting@gmail.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Adresse</CardTitle>
                  <p>Boké Vile Zone minière,<br /> Baralande N0.14, ECM 12345</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Horaires</CardTitle>
                  <p>Lundi-Vendredi: 8h-18h<br />Samedi: 8h-14h</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-Nous un Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" placeholder="Votre nom" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Votre email" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input id="subject" placeholder="Sujet du message" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Votre message" rows={6} required />
                    </div>

                    <Button type="submit">Envoyer Message</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Google Map */}
              <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe 
                  title="EMC Formation Location"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31037.17039866381!2d-14.310768!3d10.940105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd78e0b831ce7%3A0x5513c5a8517c9f13!2sBok%C3%A9%2C%20Guinea!5e0!3m2!1sen!2s!4v1710612151234!5m2!1sen!2s"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
