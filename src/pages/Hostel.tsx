
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Home, Users, Shield, Wifi, Car, Utensils, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Hostel = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const hostelStats = [
    { label: "Total Capacity", value: "800+", icon: Home, color: "text-blue-600" },
    { label: "Students Accommodated", value: "750+", icon: Users, color: "text-green-600" },
    { label: "Hostel Blocks", value: "4", icon: MapPin, color: "text-purple-600" },
    { label: "24/7 Security", value: "Yes", icon: Shield, color: "text-orange-600" }
  ];

  const hostelFacilities = [
    { name: "Wi-Fi Connectivity", description: "High-speed internet access throughout the hostel", icon: Wifi },
    { name: "24/7 Security", description: "Round-the-clock security with CCTV surveillance", icon: Shield },
    { name: "Mess Facility", description: "Nutritious meals with varied menu options", icon: Utensils },
    { name: "Parking Area", description: "Secure parking for two-wheelers and four-wheelers", icon: Car },
    { name: "Study Rooms", description: "Dedicated spaces for group studies and discussions", icon: Home },
    { name: "Recreation Areas", description: "Common areas for relaxation and entertainment", icon: Users }
  ];

  const hostelRules = [
    "Entry and exit timings must be strictly followed",
    "Visitors are allowed only during specified hours",
    "Ragging is strictly prohibited and punishable",
    "Alcohol and smoking are strictly banned in the premises",
    "Students must maintain cleanliness in their rooms and common areas",
    "Loud music and disturbance to others is not allowed",
    "Damage to hostel property will result in penalty charges",
    "Students must carry their ID cards at all times"
  ];

  const messMenu = [
    { day: "Monday", breakfast: "Poha, Tea/Coffee, Fruits", lunch: "Dal, Rice, Chapati, Sabji, Salad", dinner: "Dal, Rice, Chapati, Sabji, Curd" },
    { day: "Tuesday", breakfast: "Upma, Tea/Coffee, Fruits", lunch: "Rajma, Rice, Chapati, Sabji, Salad", dinner: "Dal, Rice, Chapati, Sabji, Curd" },
    { day: "Wednesday", breakfast: "Paratha, Tea/Coffee, Fruits", lunch: "Dal, Rice, Chapati, Sabji, Salad", dinner: "Chole, Rice, Chapati, Sabji, Curd" },
    { day: "Thursday", breakfast: "Idli/Vada, Tea/Coffee, Fruits", lunch: "Dal, Rice, Chapati, Sabji, Salad", dinner: "Dal, Rice, Chapati, Sabji, Curd" },
    { day: "Friday", breakfast: "Poha, Tea/Coffee, Fruits", lunch: "Paneer Curry, Rice, Chapati, Sabji, Salad", dinner: "Dal, Rice, Chapati, Sabji, Curd" },
    { day: "Saturday", breakfast: "Bread/Jam, Tea/Coffee, Fruits", lunch: "Dal, Rice, Chapati, Sabji, Salad", dinner: "Special Dinner, Rice, Chapati, Sweet" },
    { day: "Sunday", breakfast: "Special Breakfast", lunch: "Special Lunch with Pulao", dinner: "Dal, Rice, Chapati, Sabji, Curd" }
  ];

  const subNavItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'facilities', label: 'Facilities', icon: Wifi },
    { id: 'mess', label: 'Mess & Food', icon: Utensils },
    { id: 'rules', label: 'Rules & Regulations', icon: Shield }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hostelStats.map((stat, index) => (
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

            {/* About Hostel */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Hostel Accommodation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  ISBM College of Engineering provides comfortable and secure hostel accommodation for students 
                  coming from distant places. Our hostel facilities are designed to create a home-away-from-home 
                  environment, ensuring students can focus on their studies while enjoying a safe and supportive 
                  living experience.
                </p>
                <p className="text-gray-700">
                  The hostel infrastructure includes modern amenities, nutritious food facilities, recreational 
                  areas, and round-the-clock security. We maintain high standards of cleanliness and hygiene 
                  throughout the premises. Our experienced wardens and support staff ensure a disciplined and 
                  conducive environment for academic growth.
                </p>
                <p className="text-gray-700">
                  The hostel promotes cultural diversity and helps students develop important life skills like 
                  independence, responsibility, and social interaction. Regular cultural programs and activities 
                  are organized to foster community bonding among residents.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'facilities':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Hostel Facilities</CardTitle>
                <p className="text-gray-600">Modern amenities for comfortable living</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hostelFacilities.map((facility, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <facility.icon className="h-8 w-8 text-college-accent mb-3" />
                      <h3 className="font-semibold text-college-primary mb-2">{facility.name}</h3>
                      <p className="text-gray-600 text-sm">{facility.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'mess':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Mess & Food Services</CardTitle>
                <p className="text-gray-600">Nutritious and hygienic meals</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-college-primary mb-4">Weekly Menu</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-college-primary/10">
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Day</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Breakfast</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Lunch</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Dinner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messMenu.map((menu, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium">{menu.day}</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm">{menu.breakfast}</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm">{menu.lunch}</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm">{menu.dinner}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg">
                    <h4 className="font-semibold text-college-primary mb-2">Mess Timings</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Breakfast: 7:30 AM - 9:30 AM</li>
                      <li>Lunch: 12:30 PM - 2:30 PM</li>
                      <li>Evening Snacks: 5:00 PM - 6:00 PM</li>
                      <li>Dinner: 7:30 PM - 9:30 PM</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg">
                    <h4 className="font-semibold text-college-primary mb-2">Special Features</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Hygienic food preparation</li>
                      <li>Balanced nutritional meals</li>
                      <li>Special diet for medical needs</li>
                      <li>Festival special meals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'rules':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Hostel Rules & Regulations</CardTitle>
                <p className="text-gray-600">Guidelines for a disciplined living environment</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hostelRules.map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <div className="w-6 h-6 bg-college-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{rule}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-college-warning/10 border border-college-warning/30 rounded-lg">
                  <h4 className="font-semibold text-college-warning mb-2">Important Note</h4>
                  <p className="text-gray-700 text-sm">
                    Violation of any hostel rules may result in disciplinary action including warning, 
                    fine, or even expulsion from the hostel. Students are expected to maintain the 
                    dignity and discipline of the institution.
                  </p>
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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hostel Facilities
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Hostel</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hostel;
