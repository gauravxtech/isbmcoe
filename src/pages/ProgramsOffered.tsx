
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Users, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProgramsOffered = () => {
  const programs = [
    {
      name: "Computer Engineering",
      intake: 180,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      path: "/computer-engineering-department",
      description: "Core computing fundamentals with modern programming"
    },
    {
      name: "Artificial Intelligence & Machine Learning",
      intake: 120,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      path: "/aiml-department",
      description: "Future of intelligent systems and automation"
    },
    {
      name: "Artificial Intelligence & Data Science",
      intake: 120,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      path: "/aids-department",
      description: "Data-driven insights and intelligent analytics"
    },
    {
      name: "Electronics & Telecommunication Engineering",
      intake: 30,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      path: "/etc-department",
      description: "Communication systems and electronic circuits"
    },
    {
      name: "Mechanical Engineering",
      intake: 60,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      path: "/mechanical-department",
      description: "Design, manufacturing and thermal systems"
    },
    {
      name: "Computer Science Engineering",
      intake: 60,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      path: "#",
      description: "Software development and system design"
    },
    {
      name: "Electronics Engineering (VLSI & Design Technology)",
      intake: 60,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      path: "/etc-department",
      description: "VLSI design and integrated circuit technology"
    },
    {
      name: "Bachelor of Business Administration (BBA)",
      intake: 120,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      path: "/bba-department",
      description: "Business management and entrepreneurship"
    },
    {
      name: "Bachelor of Computer Application (BCA)",
      intake: 120,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      path: "/bca-department",
      description: "Applied computing and software development"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-college-primary font-medium">Home</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600">Programs Offered</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Programs Offered
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive range of undergraduate programs designed to shape future leaders in technology and business
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-dark mb-4">Academic Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of AICTE approved engineering and management programs, 
              designed to meet industry demands and foster innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Link 
                key={index} 
                to={program.path}
                className="group block transform transition-all duration-300 hover:scale-105"
              >
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                  <div className="relative overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-college-accent text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {program.intake}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-college-primary group-hover:text-college-accent transition-colors duration-300">
                      {program.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {program.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Sanctioned Intake:</span> {program.intake}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="group-hover:bg-college-primary group-hover:text-white group-hover:border-college-primary transition-all duration-300"
                      >
                        Learn More
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-college-dark mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who started their careers at ISBM College of Engineering. 
            Experience excellence in education with our industry-aligned curriculum and state-of-the-art facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-college-primary hover:bg-college-primary/90 text-white px-8 py-3 text-lg font-semibold"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline"
              className="border-college-primary text-college-primary hover:bg-college-primary hover:text-white px-8 py-3 text-lg font-semibold"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsOffered;
