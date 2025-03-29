
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
    title: "Submit Application",
    description: "Complete our online application form with your personal information and program of interest."
  },
  {
    number: 2,
    title: "Entrance Assessment",
    description: "Complete a basic skills assessment to ensure you meet program requirements."
  },
  {
    number: 3,
    title: "Financial Planning",
    description: "Meet with our financial aid office to explore payment options and potential assistance."
  },
  {
    number: 4,
    title: "Enrollment",
    description: "Sign enrollment agreement and make initial payment to secure your spot."
  },
  {
    number: 5,
    title: "Begin Training",
    description: "Start your journey to becoming a certified heavy equipment operator!"
  }
];

const AdmissionsPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    toast({
      title: "Application submitted",
      description: "We've received your application and will contact you soon.",
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
                Your journey to a rewarding career in heavy equipment operation starts here.
              </p>
            </div>
          </div>
        </section>

        {/* Admissions Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">Our Admissions Process</h2>
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
            <h2 className="section-heading text-center mb-12">Apply Now</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Application Form</CardTitle>
                  <CardDescription>
                    Please complete the form below to begin your application process.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Enter your phone number" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Enter your address" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="State" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input id="zipCode" placeholder="Zip Code" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program">Program of Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excavator">Excavator Operator Certification</SelectItem>
                          <SelectItem value="bulldozer">Bulldozer Training Program</SelectItem>
                          <SelectItem value="crane">Crane Operation Certification</SelectItem>
                          <SelectItem value="forklift">Forklift Certification</SelectItem>
                          <SelectItem value="backhoe">Backhoe Operator Training</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Preferred Start Date</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a preferred start date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As Soon As Possible</SelectItem>
                          <SelectItem value="next-month">Within Next Month</SelectItem>
                          <SelectItem value="1-3months">1-3 Months</SelectItem>
                          <SelectItem value="3-6months">3-6 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience</Label>
                      <Textarea id="experience" placeholder="Please describe any relevant experience you have" />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                        <p className="text-sm text-gray-500">
                          By submitting this form, you agree to our Privacy Policy and allow us to contact you regarding your application.
                        </p>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">Submit Application</Button>
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
