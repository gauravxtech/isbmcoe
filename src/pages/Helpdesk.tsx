
import React, { useState } from 'react';
import { HelpCircle, Phone, Mail, MessageSquare, Clock, User, FileText, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Helpdesk = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    { id: 'all', name: 'All Categories', icon: FileText },
    { id: 'admissions', name: 'Admissions', icon: User },
    { id: 'academics', name: 'Academics', icon: FileText },
    { id: 'technical', name: 'Technical Support', icon: HelpCircle },
    { id: 'facilities', name: 'Facilities', icon: MessageSquare }
  ];

  const faqs = [
    {
      category: 'admissions',
      question: 'What are the admission requirements for engineering programs?',
      answer: 'Candidates must have passed 12th standard with Physics, Chemistry, and Mathematics with minimum 50% marks. Valid JEE Main score is required.'
    },
    {
      category: 'admissions',
      question: 'When do admissions open for the next academic year?',
      answer: 'Admissions typically open in May and continue until August. Keep checking our website for specific dates and deadlines.'
    },
    {
      category: 'academics',
      question: 'How can I access the student portal?',
      answer: 'Students can access the portal using their registration number and password provided during admission. Contact IT support if you face login issues.'
    },
    {
      category: 'academics',
      question: 'What is the examination pattern?',
      answer: 'The academic year has two semesters. Each semester has mid-term and end-term examinations along with continuous assessment.'
    },
    {
      category: 'technical',
      question: 'How do I access Wi-Fi on campus?',
      answer: 'Connect to "ISBM-Student" network using your student credentials. Contact IT helpdesk for password reset or connection issues.'
    },
    {
      category: 'facilities',
      question: 'What are the library hours?',
      answer: 'Library is open Monday to Saturday from 8:00 AM to 8:00 PM. Sunday hours are 10:00 AM to 6:00 PM.'
    }
  ];

  const contactMethods = [
    {
      title: 'Phone Support',
      icon: Phone,
      details: '+91-20-35012011',
      availability: '9:00 AM - 6:00 PM (Mon-Sat)',
      description: 'Immediate assistance for urgent queries'
    },
    {
      title: 'Email Support',
      icon: Mail,
      details: 'helpdesk@isbm.ac.in',
      availability: '24/7 (Response within 24 hours)',
      description: 'Detailed queries and documentation'
    },
    {
      title: 'Live Chat',
      icon: MessageSquare,
      details: 'Available on website',
      availability: '10:00 AM - 5:00 PM (Mon-Fri)',
      description: 'Quick responses for common questions'
    },
    {
      title: 'In-Person Support',
      icon: User,
      details: 'Helpdesk Counter, Ground Floor',
      availability: '9:00 AM - 5:00 PM (Mon-Sat)',
      description: 'Face-to-face assistance and guidance'
    }
  ];

  const serviceHours = [
    { service: 'General Helpdesk', hours: '9:00 AM - 6:00 PM', days: 'Monday - Saturday' },
    { service: 'Technical Support', hours: '10:00 AM - 5:00 PM', days: 'Monday - Friday' },
    { service: 'Academic Support', hours: '9:00 AM - 4:00 PM', days: 'Monday - Saturday' },
    { service: 'Emergency Support', hours: '24/7', days: 'All Days' }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-college-primary mb-4">
            Helpdesk & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get assistance with admissions, academics, technical issues, and campus facilities
          </p>
        </div>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
            <TabsTrigger value="ticket">Submit Ticket</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {helpCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className="flex items-center"
                      >
                        <category.icon className="h-4 w-4 mr-2" />
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-college-secondary">{faq.question}</h3>
                      <Badge variant="secondary" className="ml-4 shrink-0">
                        {faq.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <method.icon className="h-6 w-6 text-college-accent mr-3" />
                      <h3 className="text-lg font-semibold text-college-secondary">{method.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-college-primary">{method.details}</p>
                      <p className="text-sm text-gray-600">{method.availability}</p>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-college-primary">
                  <Clock className="mr-3 h-6 w-6" />
                  Service Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceHours.map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-700">{service.service}</p>
                        <p className="text-sm text-gray-500">{service.days}</p>
                      </div>
                      <p className="text-college-primary font-semibold">{service.hours}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ticket" className="space-y-6">
            {/* Support Ticket Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Submit Support Ticket</CardTitle>
                <p className="text-gray-600">Describe your issue and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Student ID</label>
                    <Input placeholder="Your student ID (if applicable)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>Select category</option>
                      <option>Admissions</option>
                      <option>Academics</option>
                      <option>Technical Support</option>
                      <option>Facilities</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Brief description of your issue" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea 
                    placeholder="Please provide detailed information about your issue..."
                    rows={5}
                  />
                </div>
                <Button className="w-full bg-college-primary hover:bg-college-secondary">
                  Submit Ticket
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Helpdesk;
