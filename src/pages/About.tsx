import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Award, Users, Target, Lightbulb, BookOpen, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const About = () => {
  useSEO({
    title: "About ISBM College of Engineering - Premier Engineering Education in Pune",
    description: "Learn about ISBM College of Engineering, Pune's leading NAAC B++ accredited engineering institution. Discover our history, vision, mission, and commitment to excellence in technical education since 2010.",
    keywords: "ISBM College Engineering about, Pune engineering college history, NAAC B++ accredited college, AICTE approved engineering college, Savitribai Phule Pune University affiliated, engineering education excellence",
    canonical: "https://isbmcoe.edu.in/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "ISBM College of Engineering",
        "description": "Premier engineering institution in Pune offering world-class technical education with NAAC B++ accreditation",
        "foundingDate": "2010",
        "accreditingBody": "NAAC",
        "hasCredential": "B++ Grade"
      }
    }
  });

  const stats = [
    { number: "14+", label: "Years of Excellence", icon: Award },
    { number: "2000+", label: "Alumni Network", icon: Users },
    { number: "95%", label: "Placement Rate", icon: Target },
    { number: "50+", label: "Industry Partners", icon: Globe }
  ];

  const highlights = [
    {
      icon: Award,
      title: "NAAC B++ Accredited",
      description: "Recognized for academic excellence and quality education standards"
    },
    {
      icon: BookOpen,
      title: "AICTE Approved",
      description: "All programs approved by All India Council for Technical Education"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified and experienced faculty with industry expertise"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Emphasis on research, innovation, and practical learning"
    }
  ];

  const achievements = [
    "NAAC B++ Accreditation for Academic Excellence",
    "AICTE Approval for All Engineering Programs",
    "Affiliation with Savitribai Phule Pune University",
    "95% Placement Record with Top Companies",
    "State-of-the-Art Infrastructure and Laboratories",
    "Active Industry-Academia Collaboration"
  ];

  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About ISBM COE
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80" aria-label="Breadcrumb">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">About</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-college-primary to-college-secondary p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-college-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-college-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Established in 2010, ISBM College of Engineering has emerged as one of Pune's premier 
                  engineering institutions. With NAAC B++ accreditation and AICTE approval, we are 
                  affiliated with Savitribai Phule Pune University, ensuring our programs meet the 
                  highest educational standards.
                </p>
                <p>
                  Our commitment to excellence in technical education has produced over 2000 successful 
                  alumni who are now contributing to industries worldwide. We continue to evolve with 
                  the changing technological landscape while maintaining our core values of innovation, 
                  integrity, and excellence.
                </p>
                <p>
                  Located in the educational hub of Pune, our state-of-the-art campus provides an 
                  ideal environment for learning, research, and personal development.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-college-primary/10 to-college-accent/10 p-8 rounded-lg">
              <img 
                src="/lovable-uploads/college-campus-1.jpg" 
                alt="ISBM College of Engineering Campus"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-college-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <highlight.icon className="h-8 w-8 text-college-accent" />
                  </div>
                  <CardTitle className="text-lg text-college-primary">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary text-center">Our Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-college-primary/5 to-college-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-college-accent rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
