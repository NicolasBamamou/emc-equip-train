
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const steps = [
  {
    number: 1,
    title: "Soumettre la Demande",
    description: "Complétez notre formulaire de demande en ligne avec vos informations personnelles et le programme qui vous intéresse."
  },
  {
    number: 2,
    title: "Évaluation d'Entrée",
    description: "Complétez une évaluation des compétences de base pour vous assurer que vous répondez aux exigences du programme."
  },
  {
    number: 3,
    title: "Planification Financière",
    description: "Rencontrez notre bureau d'aide financière pour explorer les options de paiement et l'assistance potentielle."
  },
  {
    number: 4,
    title: "Inscription",
    description: "Signez l'accord d'inscription et effectuez le paiement initial pour garantir votre place."
  },
  {
    number: 5,
    title: "Commencer la Formation",
    description: "Débutez votre parcours pour devenir un opérateur d'équipement lourd certifié !"
  }
];

const AdmissionsPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dans une vraie application, ceci soumettrait les données du formulaire à un serveur
    toast({
      title: "Demande soumise",
      description: "Nous avons reçu votre demande et vous contacterons bientôt.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
              <p className="text-lg md:text-xl">
                Votre parcours vers une carrière enrichissante dans l'opération d'équipement lourd commence ici.
              </p>
            </div>
          </div>
        </section>

        {/* Admissions Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">Notre Processus d'Admission</h2>
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Process steps */}
                <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-300 -translate-x-1/2"></div>
                <div className="space-y-12">
                  {steps.map((step, index) => (
                    <div key={index} className="relative flex md:items-center">
                      <div className="hidden md:flex w-1/2 pr-8 justify-end">
                        {index % 2 === 0 && (
                          <div className="text-right">
                            <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                        <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                          {step.number}
                        </div>
                      </div>
                      <div className="ml-4 md:ml-0 md:w-1/2 md:pl-8">
                        {index % 2 === 1 || window.innerWidth < 768 ? (
                          <div>
                            <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">S'inscrire Maintenant</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Formulaire de Demande</CardTitle>
                  <CardDescription>
                    Veuillez remplir le formulaire ci-dessous pour commencer votre processus de demande.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" placeholder="Entrez votre prénom" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" placeholder="Entrez votre nom" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Entrez votre email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" placeholder="Entrez votre numéro de téléphone" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input id="address" placeholder="Entrez votre adresse" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">Ville</Label>
                        <Input id="city" placeholder="Ville" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">Département</Label>
                        <Input id="state" placeholder="Département" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Code Postal</Label>
                        <Input id="zipCode" placeholder="Code Postal" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program">Programme d'Intérêt</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un programme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excavator">Certification d'Opérateur d'Excavatrice</SelectItem>
                          <SelectItem value="bulldozer">Programme de Formation Bulldozer</SelectItem>
                          <SelectItem value="crane">Certification d'Opérateur de Grue</SelectItem>
                          <SelectItem value="forklift">Certification Chariot Élévateur</SelectItem>
                          <SelectItem value="backhoe">Formation d'Opérateur de Pelle Rétrocaveuse</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Date de Début Préférée</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une date de début préférée" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">Dès Que Possible</SelectItem>
                          <SelectItem value="next-month">Dans le Mois Prochain</SelectItem>
                          <SelectItem value="1-3months">1-3 Mois</SelectItem>
                          <SelectItem value="3-6months">3-6 Mois</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Expérience Pertinente</Label>
                      <Textarea id="experience" placeholder="Veuillez décrire toute expérience pertinente que vous avez" />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          J'accepte les conditions générales
                        </label>
                        <p className="text-sm text-gray-500">
                          En soumettant ce formulaire, vous acceptez notre Politique de Confidentialité et nous autorisez à vous contacter concernant votre demande.
                        </p>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">Soumettre la Demande</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionsPage;
