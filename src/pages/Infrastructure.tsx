import React from 'react';
import { Building2, Users, BookOpen, Microscope, Laptop, Wifi, Car, Coffee, Heart, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Infrastructure = () => {
  useSEO({
    title: "Infrastructure - ISBM College of Engineering",
    description: "State-of-the-art infrastructure and facilities at ISBM College of Engineering",
    canonical: "https://isbmcoe.edu.in/infrastructure"
  });

  const facilities = [
    {
      category: "Academic Infrastructure",
      icon: BookOpen,
      items: [
        { name: "Smart Classrooms", count: "40+", description: "Modern classrooms with digital boards and AV equipment" },
        { name: "Lecture Halls", count: "8", description: "Spacious halls with seating capacity of 100-300 students" },
        { name: "Seminar Halls", count: "4", description: "Well-equipped halls for conferences and workshops" },
        { name: "Tutorial Rooms", count: "20", description: "Small group discussion and tutorial rooms" }
      ]
    },
    {
      category: "Laboratory Facilities", 
      icon: Microscope,
      items: [
        { name: "Computer Labs", count: "15", description: "State-of-the-art computing facilities with latest software" },
        { name: "Engineering Labs", count: "25", description: "Specialized labs for each engineering discipline" },
        { name: "Research Labs", count: "8", description: "Advanced research facilities for faculty and students" },
        { name: "Project Labs", count: "6", description: "Dedicated spaces for final year projects" }
      ]
    },
    {
      category: "Digital Infrastructure",
      icon: Laptop,
      items: [
        { name: "High-Speed Internet", count: "1Gbps", description: "Fiber optic connectivity throughout campus" },
        { name: "WiFi Coverage", count: "100%", description: "Campus-wide wireless internet access" },
        { name: "Computer Systems", count: "1200+", description: "Latest configuration computers and workstations" },
        { name: "Software Licenses", count: "500+", description: "Licensed software for academic and research use" }
      ]
    },
    {
      category: "Support Facilities",
      icon: Building2,
      items: [
        { name: "Central Library", count: "50,000+", description: "Books, journals, and digital resources" },
        { name: "Auditorium", count: "600", description: "Main auditorium with modern audio-visual systems" },
        { name: "Cafeteria", count: "3", description: "Multi-cuisine food courts and dining areas" },
        { name: "Parking Space", count: "500+", description: "Dedicated parking for students and staff" }
      ]
    },
    {
      category: "Recreational Facilities",
      icon: Users,
      items: [
        { name: "Sports Complex", count: "1", description: "Indoor and outdoor sports facilities" },
        { name: "Gymnasium", count: "1", description: "Fully equipped fitness center" },
        { name: "Play Grounds", count: "4", description: "Cricket, football, basketball, and volleyball courts" },
        { name: "Student Lounges", count: "6", description: "Relaxation and social interaction spaces" }
      ]
    },
    {
      category: "Safety & Security",
      icon: Shield,
      items: [
        { name: "CCTV Surveillance", count: "200+", description: "24/7 monitoring system across campus" },
        { name: "Security Personnel", count: "24/7", description: "Round-the-clock security services" },
        { name: "Fire Safety", count: "100%", description: "Complete fire detection and suppression systems" },
        { name: "Medical Facility", count: "1", description: "On-campus health center with qualified staff" }
      ]
    }
  ];

  const highlights = [
    { title: "Green Campus", description: "Eco-friendly infrastructure with solar panels and rainwater harvesting" },
    { title: "Accessibility", description: "Barrier-free infrastructure for differently-abled students" },
    { title: "Smart Features", description: "IoT-enabled classrooms and automated systems" },
    { title: "Sustainability", description: "Energy-efficient buildings with sustainable design practices" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            World-Class Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our state-of-the-art facilities provide the perfect environment for learning, research, and innovation. 
            Experience modern educational infrastructure designed for excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((highlight, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {highlight.title}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {facilities.map((facility, index) => (
              <div key={index} className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <facility.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {facility.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {facility.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center pb-3">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="text-3xl font-bold text-primary">{item.count}</div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Infrastructure Highlights
            </h2>
            <p className="text-xl text-muted-foreground">
              What makes our campus infrastructure exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Infrastructure at a Glance
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25 Acres</div>
              <p className="text-muted-foreground">Campus Area</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <p className="text-muted-foreground">Rooms & Labs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1200+</div>
              <p className="text-muted-foreground">Computer Systems</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Facility Access</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Infrastructure;