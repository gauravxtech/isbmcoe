import React from 'react';
import { Navigation, MapPin, Car, Bus, Train, Plane, Clock, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Directions = () => {
  const routes = [
    {
      origin: "Pune Airport",
      distance: "35 km",
      duration: "45-60 minutes",
      icon: Plane,
      steps: [
        "Exit Pune Airport and head towards Pune-Mumbai Highway",
        "Take the exit towards Pashan/Sus Road",
        "Continue on Pashan-Sus Road for 15 km",
        "Turn right towards Nande Village",
        "ISBM College will be on your left after 2 km"
      ],
      landmarks: ["Pashan Lake", "Sus Village", "Nande Bus Stop"],
      traffic: "Moderate to Heavy during peak hours"
    },
    {
      origin: "Pune Railway Station",
      distance: "25 km",
      duration: "35-50 minutes",
      icon: Train,
      steps: [
        "Exit Pune Railway Station and head towards Shivajinagar",
        "Take the route via University Road",
        "Continue towards Pashan via Senapati Bapat Road",
        "Turn onto Pashan-Sus Road",
        "Follow signs to Nande Village",
        "College entrance on the left side"
      ],
      landmarks: ["Shivajinagar", "University of Pune", "Pashan Lake"],
      traffic: "Heavy during morning and evening"
    },
    {
      origin: "Pune Central Bus Station",
      distance: "28 km",
      duration: "40-55 minutes",
      icon: Bus,
      steps: [
        "Take PMPML Bus Route 106 or 107",
        "Get down at Nande Village bus stop",
        "Walk 500 meters towards the college",
        "Alternative: Take auto-rickshaw from bus stop"
      ],
      landmarks: ["Shivajinagar", "Aundh", "Pashan"],
      traffic: "Regular bus service every 30 minutes"
    },
    {
      origin: "Mumbai via Expressway",
      distance: "165 km",
      duration: "3-4 hours",
      icon: Car,
      steps: [
        "Take Mumbai-Pune Expressway",
        "Exit at Talegaon and head towards Pune",
        "Continue on Pune-Mumbai Highway",
        "Take Pashan/Sus Road exit",
        "Follow directions to Nande Village",
        "ISBM College on your left"
      ],
      landmarks: ["Talegaon Toll Plaza", "Pashan Lake", "Sus Village"],
      traffic: "Heavy on weekends and holidays"
    }
  ];

  const publicTransport = [
    {
      mode: "PMPML Bus",
      routes: ["Route 106: Swargate to Nande", "Route 107: Pune Station to Nande"],
      frequency: "Every 30 minutes",
      cost: "₹25-35",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      mode: "Auto Rickshaw",
      routes: ["Available from major hubs"],
      frequency: "On demand",
      cost: "₹15-20 per km",
      timings: "24/7"
    },
    {
      mode: "Taxi/Cab",
      routes: ["Ola, Uber, Local taxis"],
      frequency: "On demand",
      cost: "₹12-15 per km",
      timings: "24/7"
    }
  ];

  const campusShuttle = {
    routes: [
      { from: "Pune Station", departure: "7:30 AM, 8:30 AM", cost: "₹50" },
      { from: "Shivajinagar", departure: "8:00 AM, 9:00 AM", cost: "₹40" },
      { from: "Aundh", departure: "8:15 AM, 9:15 AM", cost: "₹30" }
    ],
    returnTiming: "5:00 PM, 6:00 PM from college",
    contact: "+91-20-35012015"
  };

  const importantNotes = [
    "Peak traffic hours: 8:00-10:00 AM and 6:00-8:00 PM",
    "Monsoon season may cause delays due to waterlogging",
    "Weekend traffic is lighter, journey time reduces by 20-30%",
    "Parking available on campus for 500+ vehicles",
    "Two-wheeler parking near main entrance"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Directions & Navigation
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Detailed directions to reach ISBM College of Engineering from major locations in Pune and beyond
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Campus Address:</strong> S.No 44/1, 44/1/2, Nande Village, Ahead of Pashan Sus Road, Pune - 412115
          </AlertDescription>
        </Alert>

        {/* Route Details */}
        <div className="space-y-6 mb-8">
          {routes.map((route, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-college-primary">
                  <route.icon className="mr-3 h-6 w-6" />
                  From {route.origin}
                  <div className="ml-auto flex gap-2">
                    <Badge variant="secondary">{route.distance}</Badge>
                    <Badge variant="outline">{route.duration}</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-college-secondary mb-3">Step-by-step Directions:</h4>
                    <ol className="space-y-2">
                      {route.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex">
                          <span className="bg-college-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-college-secondary mb-3">Important Landmarks:</h4>
                    <div className="space-y-2 mb-4">
                      {route.landmarks.map((landmark, lIndex) => (
                        <div key={lIndex} className="flex items-center">
                          <MapPin className="h-4 w-4 text-college-accent mr-2" />
                          <span className="text-gray-600">{landmark}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <div className="flex items-center mb-1">
                        <Clock className="h-4 w-4 text-yellow-600 mr-2" />
                        <span className="font-medium text-yellow-800">Traffic Info</span>
                      </div>
                      <p className="text-yellow-700 text-sm">{route.traffic}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Public Transportation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-college-primary">
              <Bus className="mr-3 h-6 w-6" />
              Public Transportation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {publicTransport.map((transport, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-college-secondary mb-3">{transport.mode}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Routes:</p>
                      {transport.routes.map((route, rIndex) => (
                        <p key={rIndex} className="text-gray-600">• {route}</p>
                      ))}
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Frequency: <span className="font-normal text-gray-600">{transport.frequency}</span></p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Cost: <span className="font-normal text-gray-600">{transport.cost}</span></p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Timings: <span className="font-normal text-gray-600">{transport.timings}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Campus Shuttle Service */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">Campus Shuttle Service</CardTitle>
            <p className="text-gray-600">Daily shuttle service for students and staff</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-college-secondary mb-3">Morning Pickup Schedule:</h4>
                <div className="space-y-3">
                  {campusShuttle.routes.map((shuttle, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{shuttle.from}</p>
                        <p className="text-sm text-gray-600">{shuttle.departure}</p>
                      </div>
                      <Badge variant="secondary">{shuttle.cost}</Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-college-secondary mb-3">Return Schedule:</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">{campusShuttle.returnTiming}</p>
                  <p className="text-blue-600 text-sm mt-2">
                    Contact: {campusShuttle.contact} for shuttle booking
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">Important Travel Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {importantNotes.map((note, index) => (
                <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <Navigation className="h-5 w-5 text-college-accent mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{note}</p>
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

export default Directions;
