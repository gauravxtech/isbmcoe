
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, Users, Award, Radio, Cpu, Trophy, Star } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ETSA = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const etsaStats = [
    { label: "Active Members", value: "90+", icon: Users, color: "text-red-600" },
    { label: "Circuit Projects", value: "35+", icon: Cpu, color: "text-blue-600" },
    { label: "Technical Workshops", value: "14+", icon: Calendar, color: "text-green-600" },
    { label: "Innovation Labs", value: "10+", icon: Radio, color: "text-purple-600" }
  ];

  const events = [
    { name: "ElectroFest", description: "Annual electronics and telecommunications showcase", participants: "130+" },
    { name: "Circuit Design Workshop", description: "Hands-on sessions on PCB design and circuit implementation", participants: "75+" },
    { name: "IoT Innovation Challenge", description: "Competition to create innovative IoT solutions", participants: "85+" },
    { name: "Signal Processing Seminar", description: "Advanced topics in digital signal processing", participants: "60+" },
    { name: "Embedded Systems Lab", description: "Practical training on microcontrollers and embedded programming", participants: "90+" },
    { name: "Telecom Industry Meet", description: "Networking with telecommunications industry professionals", participants: "55+" }
  ];

  const achievements = [
    { event: "National Electronics Competition", position: "1st Place", year: "2024" },
    { event: "IoT Innovation Contest", position: "Winner", year: "2024" },
    { event: "Best Technical Society", position: "State Level", year: "2023" },
    { event: "Circuit Design Challenge", position: "2nd Place", year: "2023" },
    { event: "Embedded Systems Contest", position: "1st Runner Up", year: "2023" }
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
              {etsaStats.map((stat, index) => (
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
                <CardTitle className="text-2xl text-college-primary">About ETSA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Electronics and Telecommunication Students Association (ETSA) represents all students 
                  from the Electronics Engineering (VLSI) department at ISBM College of Engineering. We are 
                  dedicated to advancing knowledge in electronics, telecommunications, VLSI design, and 
                  related cutting-edge technologies.
                </p>
                <p className="text-gray-700">
                  ETSA organizes technical workshops, industry visits, project exhibitions, and research 
                  seminars to keep students updated with the latest trends in electronics and telecommunications. 
                  Our focus areas include circuit design, signal processing, embedded systems, IoT, and VLSI 
                  technology, preparing students for successful careers in the electronics industry.
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
                <p className="text-gray-600">Electronics and telecommunications focused events</p>
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
                <CardTitle className="text-2xl text-college-primary">ETSA Achievements</CardTitle>
                <p className="text-gray-600">Recognition in electronics and telecommunications</p>
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
              ETSA
            </h1>
            <p className="text-xl text-white/90 mb-4">Electronics and Telecommunication Students Association</p>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">Life @ COE</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">ETSA</span>
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

export default ETSA;
