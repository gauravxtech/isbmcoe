
import React from 'react';
import { MapPin, Clock, Car, Bus, Train, Plane } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CampusLocation = () => {
  const campusDetails = {
    main: {
      name: "ISBM College of Engineering - Main Campus",
      address: "S.No 44/1, 44/1/2, Nande Village, Ahead of Pashan Sus Road, Pune - 412115",
      coordinates: "18.5652° N, 73.7662° E",
      area: "25 Acres",
      established: "2010"
    }
  };

  const facilities = [
    "Modern Engineering Labs", "Library & Digital Resources", "Sports Complex",
    "Auditorium", "Cafeteria", "Hostel Facilities", "Medical Center",
    "Transportation Hub", "Parking Areas", "Green Spaces"
  ];

  const transportOptions = [
    {
      icon: Car,
      mode: "By Car/Taxi",
      details: "45 minutes from Pune Airport, 30 minutes from Pune Railway Station",
      route: "Via Pashan Sus Road → Nande Village"
    },
    {
      icon: Bus,
      mode: "By Bus",
      details: "PMPML Bus Route available from Pune City",
      route: "Route 106, 107 - Get down at Nande Village stop"
    },
    {
      icon: Train,
      mode: "By Train",
      details: "Nearest Railway Station: Pune Junction (25 km)",
      route: "Take taxi/bus from railway station to campus"
    },
    {
      icon: Plane,
      mode: "By Air",
      details: "Pune International Airport (35 km)",
      route: "Direct taxi service available to campus"
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM", type: "Regular" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM", type: "Half Day" },
    { day: "Sunday", hours: "Closed", type: "Holiday" },
    { day: "Examination Days", hours: "7:00 AM - 8:00 PM", type: "Extended" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-college-primary mb-4">
            Campus Location
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our state-of-the-art campus located in the heart of Pune's educational corridor
          </p>
        </div>

        {/* Campus Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-college-primary">
              <MapPin className="mr-3 h-6 w-6" />
              Campus Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-college-secondary">Location Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Address:</p>
                    <p className="text-gray-600">{campusDetails.main.address}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Coordinates:</p>
                    <p className="text-gray-600">{campusDetails.main.coordinates}</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <p className="font-medium text-gray-700">Campus Area:</p>
                      <Badge variant="secondary">{campusDetails.main.area}</Badge>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Established:</p>
                      <Badge variant="secondary">{campusDetails.main.established}</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-college-secondary">Campus Facilities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {facilities.map((facility, index) => (
                    <Badge key={index} variant="outline" className="text-center py-2">
                      {facility}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transportation Options */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">How to Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {transportOptions.map((option, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <option.icon className="h-6 w-6 text-college-accent mr-3" />
                    <h4 className="text-lg font-semibold text-college-secondary">{option.mode}</h4>
                  </div>
                  <p className="text-gray-600 mb-2">{option.details}</p>
                  <p className="text-sm text-gray-500 italic">{option.route}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Operating Hours */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-college-primary">
              <Clock className="mr-3 h-6 w-6" />
              Operating Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {operatingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-700">{schedule.day}</p>
                    <Badge variant={schedule.type === 'Holiday' ? 'destructive' : 'default'}>
                      {schedule.type}
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold text-college-primary">{schedule.hours}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Map Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">Interactive Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-college-accent mx-auto mb-4" />
                <p className="text-gray-600">Interactive Google Maps integration</p>
                <p className="text-sm text-gray-500 mt-2">
                  Click to view detailed directions and nearby landmarks
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CampusLocation;
