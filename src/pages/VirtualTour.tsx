import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Maximize, Camera, MapPin, Navigation } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const VirtualTour = () => {
  const [selectedLocation, setSelectedLocation] = useState('main-entrance');
  const [isPlaying, setIsPlaying] = useState(false);

  const tourLocations = [
    {
      id: 'main-entrance',
      name: 'Main Entrance & Reception',
      description: 'Welcome to ISBM College of Engineering. The main entrance features modern architecture and a spacious reception area.',
      highlights: ['Security desk', 'Information counter', 'Visitor registration', 'College logo display']
    },
    {
      id: 'academic-block',
      name: 'Academic Block A',
      description: 'State-of-the-art classrooms equipped with smart boards, projectors, and modern seating arrangements.',
      highlights: ['Smart classrooms', 'Lecture halls', 'Faculty offices', 'Student common areas']
    },
    {
      id: 'engineering-labs',
      name: 'Engineering Laboratories',
      description: 'Advanced laboratories for Computer Science, Mechanical, Electronics, and AI/ML departments.',
      highlights: ['Computer labs', 'Robotics lab', 'Electronics lab', 'Research facilities']
    },
    {
      id: 'library',
      name: 'Central Library',
      description: 'Comprehensive library with over 50,000 books, digital resources, and quiet study areas.',
      highlights: ['Reading halls', 'Digital library', 'Reference section', 'Group study rooms']
    },
    {
      id: 'cafeteria',
      name: 'Student Cafeteria',
      description: 'Spacious dining area serving nutritious meals and snacks throughout the day.',
      highlights: ['Dining hall', 'Food court', 'Outdoor seating', 'Vending machines']
    },
    {
      id: 'sports-complex',
      name: 'Sports Complex',
      description: 'Well-equipped sports facilities including indoor and outdoor courts.',
      highlights: ['Basketball court', 'Volleyball court', 'Indoor games', 'Gymnasium']
    },
    {
      id: 'auditorium',
      name: 'Main Auditorium',
      description: 'Modern auditorium with capacity for 500 people, equipped with advanced AV systems.',
      highlights: ['Stage area', 'Seating arrangement', 'Sound system', 'Lighting setup']
    },
    {
      id: 'hostels',
      name: 'Hostel Facilities',
      description: 'Comfortable accommodation with modern amenities for outstation students.',
      highlights: ['Student rooms', 'Common areas', 'Study rooms', 'Recreation facilities']
    }
  ];

  const tourStats = [
    { label: 'Total Area', value: '25 Acres' },
    { label: 'Buildings', value: '8 Blocks' },
    { label: 'Laboratories', value: '45+' },
    { label: 'Classrooms', value: '60+' }
  ];

  const tourFeatures = [
    { icon: Camera, title: '360° View', description: 'Complete panoramic view of each location' },
    { icon: Navigation, title: 'Interactive Navigation', description: 'Click and explore different areas' },
    { icon: MapPin, title: 'Location Markers', description: 'Detailed information about facilities' },
    { icon: Maximize, title: 'Full Screen Mode', description: 'Immersive viewing experience' }
  ];

  const currentLocation = tourLocations.find(loc => loc.id === selectedLocation);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Virtual Campus Tour
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our beautiful campus from the comfort of your home with our interactive 360° virtual tour
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-college-primary mb-4">
            Virtual Campus Tour
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our beautiful campus from the comfort of your home with our interactive 360° virtual tour
          </p>
        </div>

        {/* Tour Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {tourStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-college-primary">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="tour" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tour">Virtual Tour</TabsTrigger>
            <TabsTrigger value="gallery">Photo Gallery</TabsTrigger>
            <TabsTrigger value="features">Tour Features</TabsTrigger>
          </TabsList>

          <TabsContent value="tour" className="space-y-6">
            {/* Main Tour Interface */}
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Location Selector */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tour Locations</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-1">
                      {tourLocations.map((location) => (
                        <button
                          key={location.id}
                          onClick={() => setSelectedLocation(location.id)}
                          className={`w-full text-left p-3 hover:bg-gray-50 transition-colors ${
                            selectedLocation === location.id ? 'bg-college-primary/10 border-r-4 border-college-primary' : ''
                          }`}
                        >
                          <div className="font-medium text-sm">{location.name}</div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tour Viewer */}
              <div className="lg:col-span-3">
                <Card>
                  <CardContent className="p-0">
                    {/* Virtual Tour Viewer */}
                    <div className="relative aspect-video bg-gradient-to-br from-college-primary/20 to-college-accent/20 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="h-24 w-24 text-college-primary mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-college-primary mb-2">
                            360° Virtual Tour
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Interactive campus exploration coming soon
                          </p>
                          <Button 
                            size="lg"
                            className="bg-college-primary hover:bg-college-secondary"
                          >
                            Start Virtual Tour
                          </Button>
                        </div>
                      </div>
                      
                      {/* Tour Controls */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => setIsPlaying(!isPlaying)}
                          >
                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                          <Button size="sm" variant="secondary">
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Maximize className="h-4 w-4" />
                          </Button>
                        </div>
                        <Badge variant="secondary" className="bg-black/50 text-white">
                          {currentLocation?.name}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Details */}
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-xl text-college-primary">
                      {currentLocation?.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{currentLocation?.description}</p>
                    <div>
                      <h4 className="font-semibold text-college-secondary mb-2">Key Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {currentLocation?.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            {/* Photo Gallery */}
            <div className="grid md:grid-cols-3 gap-6">
              {tourLocations.map((location, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Camera className="h-12 w-12 text-gray-500" />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-college-secondary mb-2">{location.name}</h3>
                    <p className="text-sm text-gray-600">{location.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            {/* Tour Features */}
            <div className="grid md:grid-cols-2 gap-6">
              {tourFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <feature.icon className="h-8 w-8 text-college-accent mr-4" />
                      <h3 className="text-xl font-semibold text-college-secondary">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">System Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-college-secondary mb-3">Recommended Browsers:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Google Chrome (latest version)</li>
                      <li>• Mozilla Firefox (latest version)</li>
                      <li>• Safari (latest version)</li>
                      <li>• Microsoft Edge (latest version)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-college-secondary mb-3">Technical Requirements:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Stable internet connection (5+ Mbps)</li>
                      <li>• JavaScript enabled</li>
                      <li>• WebGL support</li>
                      <li>• Minimum screen resolution: 1024x768</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default VirtualTour;
