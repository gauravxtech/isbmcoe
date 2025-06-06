
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Target, Eye, Heart, Star } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const VisionMission = () => {
  useSEO({
    title: "Vision & Mission - ISBM College of Engineering | Educational Philosophy & Goals",
    description: "Discover the vision and mission of ISBM College of Engineering, Pune. Our commitment to excellence in technical education, innovation, and creating future-ready engineers for global industry.",
    keywords: "ISBM vision mission, engineering education philosophy, technical education goals, innovation in engineering, student development, industry-ready engineers",
    canonical: "https://isbmcoe.edu.in/vision-mission",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Vision & Mission - ISBM College of Engineering",
      "description": "Educational philosophy and institutional goals of ISBM College of Engineering"
    }
  });

  const coreValues = [
    {
      icon: Heart,
      title: "Excellence",
      description: "Commitment to highest standards in education and research"
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Fostering creativity and entrepreneurial thinking"
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Ethical conduct and moral responsibility in all endeavors"
    },
    {
      icon: Eye,
      title: "Inclusivity",
      description: "Creating an environment where everyone can thrive"
    }
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
              Vision & Mission
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80" aria-label="Breadcrumb">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">About</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Vision & Mission</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="bg-college-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-10 w-10 text-college-primary" />
                </div>
                <CardTitle className="text-3xl text-college-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a globally recognized center of excellence in engineering education, 
                  fostering innovation, research, and holistic development of students to 
                  create future leaders who contribute meaningfully to society and industry.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="bg-college-accent/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-10 w-10 text-college-accent" />
                </div>
                <CardTitle className="text-3xl text-college-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-college-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Provide quality technical education with emphasis on practical learning and industry relevance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-college-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Foster research, innovation, and entrepreneurship among students and faculty</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-college-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Develop ethical, socially responsible engineers with strong moral values</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-college-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Create industry-academia partnerships for enhanced learning opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-college-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Maintain state-of-the-art infrastructure and learning environment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-college-primary text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-gradient-to-br from-college-primary/10 to-college-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-college-accent" />
                    </div>
                    <CardTitle className="text-xl text-college-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-college-primary/5 to-college-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary text-center">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                At ISBM College of Engineering, we are committed to nurturing the next generation 
                of engineers who will drive technological advancement and social progress. Our 
                comprehensive approach to education ensures that our graduates are not only 
                technically competent but also ethically grounded and socially conscious.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMission;
