
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
      title: "Message sent",
      description: "We've received your message and will get back to you soon.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl">
                Have questions? We're here to help. Reach out to our team for more information about our training programs.
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
                  <CardTitle className="mb-2">Phone</CardTitle>
                  <p>(123) 456-7890</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Email</CardTitle>
                  <p>info@emctraining.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Location</CardTitle>
                  <p>123 Training Avenue<br />Equipment City, EC 12345</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Hours</CardTitle>
                  <p>Monday-Friday: 8AM-6PM<br />Saturday: 8AM-2PM</p>
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
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Message subject" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" rows={6} required />
                    </div>

                    <Button type="submit">Send Message</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Google Map */}
              <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe 
                  title="EMC Training Location"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1623185945115!5m2!1sen!2sca" 
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
