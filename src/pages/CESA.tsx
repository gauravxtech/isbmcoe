
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, Users, Award, Code, Laptop, Trophy, Star } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CESA = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const cesaStats = [
    { label: "Active Members", value: "150+", icon: Users, color: "text-blue-600" },
    { label: "Events Per Year", value: "20+", icon: Calendar, color: "text-green-600" },
    { label: "Technical Workshops", value: "15+", icon: Code, color: "text-purple-600" },
    { label: "Industry Connections", value: "25+", icon: Laptop, color: "text-orange-600" }
  ];

  const events = [
    { name: "CodeFest", description: "Annual coding competition with prizes and industry exposure", participants: "200+" },
    { name: "Tech Talks", description: "Weekly sessions with industry experts and alumni", participants: "100+" },
    { name: "Hackathon", description: "24-hour coding marathon to solve real-world problems", participants: "80+" },
    { name: "Project Exhibition", description: "Showcase of innovative student projects", participants: "150+" },
    { name: "Industry Visits", description: "Educational trips to tech companies and startups", participants: "50+" },
    { name: "Placement Preparation", description: "Mock interviews and aptitude training sessions", participants: "120+" }
  ];

  const achievements = [
    { event: "Inter-College Coding Competition", position: "1st Place", year: "2024" },
    { event: "National Level Hackathon", position: "Winner", year: "2024" },
    { event: "Best Technical Society Award", position: "State Level", year: "2023" },
    { event: "Innovation Challenge", position: "2nd Place", year: "2023" },
    { event: "Smart India Hackathon", position: "Finalist", year: "2023" }
  ];

  const subNavItems = [
    { id: 'overview', label: 'Overview', icon: Star },
    { id: 'events', label: 'Events & Activities', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cesaStats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-college-primary">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">About CESA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Computer Engineering Students Association (CESA) is the official student body representing 
                  all Computer Engineering students at ISBM College of Engineering. We are dedicated to fostering 
                  technical excellence, innovation, and professional development among our members.
                </p>
                <p className="text-gray-700">
                  CESA organizes various technical events, workshops, coding competitions, and industry interactions 
                  to bridge the gap between academic learning and industry requirements. Our mission is to create 
                  a platform where students can enhance their technical skills, network with professionals, and 
                  prepare for successful careers in the technology sector.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Events & Activities</CardTitle>
                <p className="text-gray-600">Annual events and regular activities organized by CESA</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {events.map((event, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <h3 className="font-semibold text-college-primary mb-2 text-lg">{event.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                      <div className="text-college-accent font-medium text-sm">
                        Participants: {event.participants}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">CESA Achievements</CardTitle>
                <p className="text-gray-600">Recent awards and recognitions</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <div className="flex items-center space-x-4">
                        <Trophy className="h-8 w-8 text-college-accent" />
                        <div>
                          <h4 className="font-semibold text-college-primary">{achievement.event}</h4>
                          <p className="text-sm text-gray-600">{achievement.position}</p>
                        </div>
                      </div>
                      <div className="text-college-secondary font-medium">
                        {achievement.year}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CESA
            </h1>
            <p className="text-xl text-white/90 mb-4">Computer Engineering Students Association</p>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">Life @ COE</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">CESA</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-college-accent/20 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-0 overflow-x-auto">
            {subNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-6 py-4 whitespace-nowrap font-medium transition-all duration-200 border-b-2 ${
                  activeTab === item.id
                    ? 'text-college-primary border-college-accent bg-college-accent/5'
                    : 'text-gray-600 border-transparent hover:text-college-primary hover:border-college-accent/50'
                }`}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CESA;
