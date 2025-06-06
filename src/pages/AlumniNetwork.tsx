
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Users, Award, Building, Globe, Mail, Calendar, MapPin, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AlumniNetwork = () => {
  const alumniStats = [
    { label: "Total Alumni", value: "10,000+", icon: Users, color: "text-blue-600" },
    { label: "Countries", value: "25+", icon: Globe, color: "text-green-600" },
    { label: "Top Companies", value: "500+", icon: Building, color: "text-purple-600" },
    { label: "Average Salary", value: "12 LPA", icon: TrendingUp, color: "text-orange-600" }
  ];

  const notableAlumni = [
    {
      name: "Rahul Sharma",
      position: "Senior Software Engineer",
      company: "Google",
      batch: "2018",
      department: "Computer Engineering",
      achievement: "Led development of key Android features"
    },
    {
      name: "Priya Patel",
      position: "Data Science Manager",
      company: "Microsoft",
      batch: "2017",
      department: "AI & Machine Learning",
      achievement: "Published 15+ research papers in AI"
    },
    {
      name: "Amit Kumar",
      position: "VP Engineering",
      company: "Amazon",
      batch: "2015",
      department: "Computer Engineering",
      achievement: "Built scalable cloud infrastructure"
    },
    {
      name: "Sneha Reddy",
      position: "Product Manager",
      company: "Meta",
      batch: "2019",
      department: "AI & Data Science",
      achievement: "Launched ML-powered product features"
    },
    {
      name: "Vikash Singh",
      position: "Founder & CEO",
      company: "TechStartup Inc.",
      batch: "2016",
      department: "Computer Engineering",
      achievement: "Built unicorn startup valued at $1B+"
    },
    {
      name: "Ankita Joshi",
      position: "Research Scientist",
      company: "IBM Research",
      batch: "2020",
      department: "AI & Machine Learning",
      achievement: "Patent holder in quantum computing"
    }
  ];

  const alumniByCompany = [
    { company: "Google", count: "150+" },
    { company: "Microsoft", count: "120+" },
    { company: "Amazon", count: "180+" },
    { company: "Meta", count: "80+" },
    { company: "Apple", count: "60+" },
    { company: "Netflix", count: "40+" },
    { company: "Uber", count: "70+" },
    { company: "LinkedIn", count: "50+" },
    { company: "Salesforce", count: "45+" },
    { company: "Adobe", count: "55+" },
    { company: "Oracle", count: "90+" },
    { company: "SAP", count: "35+" }
  ];

  const geographicalDistribution = [
    { region: "India", percentage: "60%", count: "6,000+" },
    { region: "United States", percentage: "25%", count: "2,500+" },
    { region: "Canada", percentage: "5%", count: "500+" },
    { region: "United Kingdom", percentage: "4%", count: "400+" },
    { region: "Australia", percentage: "3%", count: "300+" },
    { region: "Germany", percentage: "2%", count: "200+" },
    { region: "Others", percentage: "1%", count: "100+" }
  ];

  const alumniServices = [
    {
      title: "Mentorship Program",
      description: "Connect with experienced alumni for career guidance and professional development",
      features: ["One-on-one mentoring", "Industry insights", "Career transition support", "Skill development guidance"]
    },
    {
      title: "Networking Events",
      description: "Regular events to connect alumni across different batches and industries",
      features: ["Annual alumni meet", "Industry-specific meetups", "Virtual networking sessions", "Regional chapter events"]
    },
    {
      title: "Job Referrals",
      description: "Alumni helping fellow alumni and current students with job opportunities",
      features: ["Job posting platform", "Referral assistance", "Interview preparation", "Company insights"]
    },
    {
      title: "Knowledge Sharing",
      description: "Platform for sharing expertise and learning from each other",
      features: ["Guest lecture series", "Technical workshops", "Best practices sharing", "Research collaboration"]
    }
  ];

  const upcomingEvents = [
    { title: "Annual Alumni Meet 2024", date: "December 15, 2024", location: "ISBM Campus", type: "In-Person" },
    { title: "Tech Talk: AI Trends", date: "November 20, 2024", location: "Virtual", type: "Online" },
    { title: "Career Transition Workshop", date: "November 25, 2024", location: "Virtual", type: "Online" },
    { title: "Startup Pitch Day", date: "December 5, 2024", location: "ISBM Campus", type: "In-Person" }
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
              Alumni Network
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">Placements</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Alumni Network</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Alumni Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {alumniStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                  <p className="text-3xl font-bold text-college-primary mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Alumni Network Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our alumni network spans across the globe, with graduates working in leading technology companies, 
                startups, research institutions, and entrepreneurial ventures. The network serves as a valuable 
                resource for current students and recent graduates.
              </p>
              <p className="text-gray-700">
                Through mentorship programs, networking events, and knowledge sharing initiatives, our alumni 
                continue to contribute to the growth and success of the ISBM community.
              </p>
            </CardContent>
          </Card>

          {/* Notable Alumni */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-college-primary mb-8 text-center">Notable Alumni</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notableAlumni.map((alumni, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-college-primary text-lg">{alumni.name}</h3>
                      <p className="text-gray-600">{alumni.position}</p>
                      <p className="font-semibold text-college-accent">{alumni.company}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Batch:</span>
                        <span className="font-medium">{alumni.batch}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Department:</span>
                        <span className="font-medium text-xs">{alumni.department}</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-college-primary/5 rounded-lg">
                      <p className="text-sm text-gray-700">{alumni.achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Alumni by Company & Geography */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Alumni by Top Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {alumniByCompany.map((company, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-college-primary/5 rounded">
                      <span className="text-gray-700 font-medium">{company.company}</span>
                      <span className="text-college-primary font-bold">{company.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Geographical Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {geographicalDistribution.map((location, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-college-secondary/5 rounded">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-college-primary mr-2" />
                        <span className="text-gray-700 font-medium">{location.region}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-college-primary font-bold">{location.percentage}</div>
                        <div className="text-xs text-gray-500">{location.count}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alumni Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-college-primary mb-8 text-center">Alumni Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {alumniServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-college-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-college-accent font-bold mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                Upcoming Alumni Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                    <h4 className="font-semibold text-college-primary mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        event.type === 'Online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {event.type}
                      </span>
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

export default AlumniNetwork;
