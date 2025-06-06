
import React from 'react';
import { Users, Trophy, Music, Camera, BookOpen, Coffee, Heart, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LifeAtCampus = () => {
  const campusLifeHighlights = [
    {
      title: "Student Clubs & Societies",
      description: "Over 25 active clubs covering technical, cultural, and social activities",
      icon: Users,
      count: "25+ Clubs"
    },
    {
      title: "Sports & Recreation",
      description: "State-of-the-art sports facilities and regular tournaments",
      icon: Trophy,
      count: "15+ Sports"
    },
    {
      title: "Cultural Events",
      description: "Annual festivals, competitions, and cultural celebrations",
      icon: Music,
      count: "50+ Events/Year"
    },
    {
      title: "Student Activities",
      description: "Regular workshops, seminars, and skill development programs",
      icon: Calendar,
      count: "100+ Activities"
    }
  ];

  const studentClubs = [
    {
      category: "Technical Clubs",
      clubs: [
        { name: "Coding Club", description: "Programming competitions and hackathons" },
        { name: "Robotics Club", description: "Robotics projects and competitions" },
        { name: "AI & ML Society", description: "Artificial Intelligence and Machine Learning projects" },
        { name: "Cybersecurity Club", description: "Ethical hacking and security awareness" },
        { name: "Web Development Club", description: "Frontend and backend development" }
      ]
    },
    {
      category: "Cultural Clubs",
      clubs: [
        { name: "Drama Society", description: "Theatre performances and stage productions" },
        { name: "Music Club", description: "Vocal and instrumental music performances" },
        { name: "Dance Troupe", description: "Traditional and contemporary dance forms" },
        { name: "Art & Craft Club", description: "Painting, sketching, and creative arts" },
        { name: "Photography Club", description: "Photography workshops and exhibitions" }
      ]
    },
    {
      category: "Social Clubs",
      clubs: [
        { name: "NSS (National Service Scheme)", description: "Community service and social work" },
        { name: "Environmental Club", description: "Sustainability and environmental awareness" },
        { name: "Debate Society", description: "Public speaking and debate competitions" },
        { name: "Literary Club", description: "Creative writing and literature appreciation" },
        { name: "Entrepreneurship Cell", description: "Startup incubation and business development" }
      ]
    }
  ];

  const sportsActivities = [
    "Cricket", "Football", "Basketball", "Volleyball", "Badminton", "Table Tennis",
    "Athletics", "Swimming", "Chess", "Carrom", "Kabaddi", "Tennis",
    "Hockey", "Handball", "Wrestling", "Boxing"
  ];

  const campusFacilities = [
    {
      title: "Modern Hostels",
      description: "Comfortable accommodation with all modern amenities",
      icon: BookOpen,
      features: ["Wi-Fi enabled", "24/7 Security", "Mess facilities", "Recreation rooms"]
    },
    {
      title: "Cafeteria & Food Courts",
      description: "Multiple dining options serving healthy and delicious food",
      icon: Coffee,
      features: ["Hygienic food", "Variety of cuisines", "Affordable pricing", "Extended hours"]
    },
    {
      title: "Medical Center",
      description: "On-campus healthcare facility with qualified medical staff",
      icon: Heart,
      features: ["First aid", "Regular checkups", "Emergency care", "Health awareness"]
    },
    {
      title: "Library & Study Areas",
      description: "Extensive library with digital resources and quiet study spaces",
      icon: BookOpen,
      features: ["Digital library", "Study rooms", "Research support", "24/7 access"]
    }
  ];

  const upcomingEvents = [
    {
      event: "Annual Tech Fest - INNOVATE 2024",
      date: "March 15-17, 2024",
      description: "Technical competitions, workshops, and industry exhibitions"
    },
    {
      event: "Cultural Festival - KALEIDOSCOPE",
      date: "February 20-22, 2024",
      description: "Dance, music, drama, and art competitions"
    },
    {
      event: "Sports Week",
      date: "January 25-31, 2024",
      description: "Inter-departmental sports competitions and tournaments"
    },
    {
      event: "Industry Interface Program",
      date: "April 10-12, 2024",
      description: "Guest lectures, workshops, and networking sessions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Life @ Campus
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Experience vibrant campus life with diverse opportunities for learning, growth, and memorable experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Campus Life Highlights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">Campus Life Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {campusLifeHighlights.map((highlight, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                  <highlight.icon className="h-12 w-12 text-college-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-college-secondary mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{highlight.description}</p>
                  <Badge variant="secondary">{highlight.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Student Clubs & Societies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">Student Clubs & Societies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {studentClubs.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-college-secondary mb-4">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.clubs.map((club, clubIndex) => (
                      <div key={clubIndex} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-college-primary mb-2">{club.name}</h4>
                        <p className="text-gray-600 text-sm">{club.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sports & Recreation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-college-primary">
              <Trophy className="mr-3 h-6 w-6" />
              Sports & Recreation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {sportsActivities.map((sport, index) => (
                <Badge key={index} variant="outline" className="text-center py-2">
                  {sport}
                </Badge>
              ))}
            </div>
            <div className="mt-6 p-4 bg-college-primary/5 rounded-lg">
              <h4 className="font-semibold text-college-primary mb-2">Sports Facilities</h4>
              <p className="text-gray-600">
                Our campus features a modern sports complex with indoor and outdoor facilities, 
                including a gymnasium, swimming pool, tennis court, basketball courts, and a cricket ground. 
                Regular coaching sessions and tournaments are organized throughout the year.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Campus Facilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">Campus Facilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {campusFacilities.map((facility, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <facility.icon className="h-6 w-6 text-college-accent mr-3" />
                    <h3 className="font-semibold text-college-secondary">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{facility.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-college-primary">
              <Calendar className="mr-3 h-6 w-6" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-college-accent pl-4 py-2">
                  <h4 className="font-semibold text-college-secondary">{event.event}</h4>
                  <p className="text-college-accent font-medium text-sm">{event.date}</p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default LifeAtCampus;
