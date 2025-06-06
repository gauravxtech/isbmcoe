
import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Administration = () => {
  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      qualification: "Ph.D. in Computer Science",
      experience: "20+ years",
      email: "principal@isbm.ac.in",
      phone: "+91-20-35012011",
      specialization: "AI & Machine Learning, Educational Administration"
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Vice Principal (Academics)",
      qualification: "M.Tech, Ph.D.",
      experience: "18+ years",
      email: "vp.academics@isbm.ac.in",
      phone: "+91-20-35012012",
      specialization: "Curriculum Development, Faculty Management"
    },
    {
      name: "Dr. Amit Patel",
      position: "Vice Principal (Administration)",
      qualification: "MBA, Ph.D.",
      experience: "15+ years",
      email: "vp.admin@isbm.ac.in",
      phone: "+91-20-35012013",
      specialization: "Operations Management, Student Affairs"
    }
  ];

  const departments = [
    {
      department: "Academic Affairs",
      head: "Dr. Priya Reddy",
      contact: "academics@isbm.ac.in",
      responsibilities: ["Curriculum Planning", "Examination Management", "Faculty Coordination", "Academic Calendar"]
    },
    {
      department: "Student Affairs",
      head: "Prof. Vikram Singh",
      contact: "students@isbm.ac.in",
      responsibilities: ["Student Welfare", "Disciplinary Actions", "Extracurricular Activities", "Counseling Services"]
    },
    {
      department: "Finance & Accounts",
      head: "CA. Meera Joshi",
      contact: "finance@isbm.ac.in",
      responsibilities: ["Fee Management", "Budget Planning", "Financial Reporting", "Scholarship Distribution"]
    },
    {
      department: "Human Resources",
      head: "Ms. Kavita Agarwal",
      contact: "hr@isbm.ac.in",
      responsibilities: ["Faculty Recruitment", "Staff Development", "Performance Management", "Policy Implementation"]
    }
  ];

  const officeHours = [
    { office: "Principal's Office", hours: "10:00 AM - 5:00 PM", appointment: "Required" },
    { office: "Academic Office", hours: "9:00 AM - 6:00 PM", appointment: "Walk-in" },
    { office: "Administration Office", hours: "9:00 AM - 5:30 PM", appointment: "Walk-in" },
    { office: "Finance Office", hours: "10:00 AM - 4:00 PM", appointment: "Preferred" }
  ];

  const contactInfo = {
    general: "+91-20-35012011",
    admissions: "7410769206",
    email: "info@isbm.ac.in",
    address: "S.No 44/1, 44/1/2, Nande Village, Ahead of Pashan Sus Road, Pune - 412115"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-college-primary mb-4">
            Administration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated administrative team committed to excellence in education and student services
          </p>
        </div>

        {/* Leadership Team */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">Leadership Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {leadership.map((leader, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-college-secondary">{leader.name}</h3>
                      <p className="text-lg text-college-accent font-medium">{leader.position}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{leader.qualification}</Badge>
                        <Badge variant="outline">{leader.experience}</Badge>
                      </div>
                      <p className="text-gray-600 mt-2">{leader.specialization}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        {leader.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {leader.phone}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Administrative Departments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">Administrative Departments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-college-secondary mb-2">{dept.department}</h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">Department Head:</p>
                    <p className="font-medium">{dept.head}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">Contact:</p>
                    <p className="text-college-accent">{dept.contact}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-1">
                      {dept.responsibilities.map((resp, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {resp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Office Hours */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-college-primary">
              <Calendar className="mr-3 h-6 w-6" />
              Office Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {officeHours.map((office, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-700">{office.office}</p>
                    <p className="text-sm text-gray-500">Appointment: {office.appointment}</p>
                  </div>
                  <p className="text-college-primary font-semibold">{office.hours}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-college-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-college-accent mr-3" />
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p className="text-gray-600">{contactInfo.general}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-college-accent mr-3" />
                  <div>
                    <p className="font-medium">Admissions</p>
                    <p className="text-gray-600">{contactInfo.admissions}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-college-accent mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-college-accent mr-3 mt-1" />
                <div>
                  <p className="font-medium">Campus Address</p>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Administration;
