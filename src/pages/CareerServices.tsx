
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Users, FileText, Briefcase, TrendingUp, MessageCircle, Calendar, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CareerServices = () => {
  const services = [
    {
      title: "Career Counseling",
      description: "One-on-one sessions to help students identify their career goals and create actionable plans",
      icon: MessageCircle,
      features: ["Individual counseling sessions", "Career assessment tests", "Goal setting workshops", "Personality analysis"]
    },
    {
      title: "Resume & Portfolio Building",
      description: "Professional assistance in creating impactful resumes and portfolios",
      icon: FileText,
      features: ["Resume writing workshops", "Portfolio development", "LinkedIn profile optimization", "Cover letter guidance"]
    },
    {
      title: "Interview Preparation",
      description: "Comprehensive training to excel in various types of interviews",
      icon: Briefcase,
      features: ["Mock interviews", "Technical interview prep", "HR interview training", "Video interview practice"]
    },
    {
      title: "Job Search Assistance",
      description: "Guidance on effective job search strategies and application processes",
      icon: TrendingUp,
      features: ["Job portal guidance", "Company research", "Application strategy", "Networking tips"]
    }
  ];

  const placementSupport = [
    {
      title: "Pre-Placement Activities",
      items: ["Company presentations", "Pre-placement talks", "Eligibility verification", "Registration assistance"]
    },
    {
      title: "During Placement",
      items: ["Interview coordination", "Technical support", "Result communication", "Offer negotiation guidance"]
    },
    {
      title: "Post-Placement Support",
      items: ["Joining formalities", "Documentation assistance", "Follow-up with companies", "Alumni network integration"]
    }
  ];

  const skillDevelopment = [
    { skill: "Communication Skills", description: "Verbal and written communication enhancement" },
    { skill: "Leadership Development", description: "Building leadership qualities and team management skills" },
    { skill: "Problem Solving", description: "Analytical thinking and creative problem-solving techniques" },
    { skill: "Time Management", description: "Effective time management and productivity techniques" },
    { skill: "Presentation Skills", description: "Public speaking and presentation delivery" },
    { skill: "Professional Etiquette", description: "Workplace behavior and professional conduct" }
  ];

  const mentorshipProgram = [
    { type: "Faculty Mentors", description: "Academic and career guidance from experienced faculty members" },
    { type: "Industry Mentors", description: "Professional insights from working industry experts" },
    { type: "Alumni Mentors", description: "Career advice and networking from successful alumni" },
    { type: "Peer Mentors", description: "Support and guidance from senior students" }
  ];

  const contactInfo = [
    { label: "Training & Placement Officer", name: "Dr. Rajesh Sharma", phone: "+91 7410769206", email: "tpo@isbm.ac.in" },
    { label: "Assistant Placement Officer", name: "Ms. Priya Patel", phone: "+91 7410769207", email: "placement@isbm.ac.in" },
    { label: "Career Counselor", name: "Mr. Amit Kumar", phone: "+91 7410769208", email: "counselor@isbm.ac.in" }
  ];

  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Career Services
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">Placements</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Career Services</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Career Services Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our Career Services team is dedicated to providing comprehensive support to students throughout 
                their academic journey and beyond. We offer personalized guidance, skill development programs, 
                and placement assistance to ensure successful career outcomes.
              </p>
              <p className="text-gray-700">
                From career exploration to job placement, our experienced team provides the resources, tools, 
                and support students need to achieve their professional goals and build meaningful careers.
              </p>
            </CardContent>
          </Card>

          {/* Core Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-college-primary mb-8 text-center">Core Career Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-college-primary mr-3" />
                      <CardTitle className="text-lg text-college-primary">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div>
                      <h4 className="font-semibold text-college-primary mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-college-accent font-bold mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Placement Support Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-college-primary mb-8 text-center">Placement Support Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {placementSupport.map((phase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-college-primary">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-college-accent font-bold mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skill Development & Mentorship */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Skill Development Programs</CardTitle>
                <p className="text-gray-600">Essential skills for professional success</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillDevelopment.map((skill, index) => (
                    <div key={index} className="p-3 bg-gradient-to-r from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <h4 className="font-semibold text-college-primary">{skill.skill}</h4>
                      <p className="text-gray-600 text-sm mt-1">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Mentorship Program</CardTitle>
                <p className="text-gray-600">Guidance from experienced mentors</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mentorshipProgram.map((mentor, index) => (
                    <div key={index} className="p-3 bg-gradient-to-r from-college-secondary/5 to-college-primary/5 rounded-lg border border-college-secondary/20">
                      <h4 className="font-semibold text-college-primary">{mentor.type}</h4>
                      <p className="text-gray-600 text-sm mt-1">{mentor.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary">Career Services Team</CardTitle>
              <p className="text-gray-600">Get in touch with our career services professionals</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                    <h4 className="font-semibold text-college-primary mb-2">{contact.label}</h4>
                    <p className="font-medium text-gray-700 mb-3">{contact.name}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {contact.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        {contact.email}
                      </div>
                    </div>
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

export default CareerServices;
