
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Calendar, TrendingUp, Award, Clock, FileText, Bell, ListChecks } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const StudentDashboard = () => {
  useSEO({
    title: "Student Dashboard - ISBM College",
    description: "Student portal for academic activities",
    canonical: "https://isbmcoe.edu.in/dashboard/student"
  });

  const studentStats = [
    { label: 'Current CGPA', value: '8.2', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Subjects', value: '6', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Attendance', value: '92%', icon: Clock, color: 'text-purple-600' },
    { label: 'Assignments', value: '4', icon: FileText, color: 'text-orange-600' },
  ];

  const courses = [
    { code: 'CS301', name: 'Data Structures', faculty: 'Dr. A. Verma' },
    { code: 'MA201', name: 'Calculus II', faculty: 'Prof. S. Singh' },
    { code: 'EC101', name: 'Basic Electronics', faculty: 'Dr. P. Sharma' },
    { code: 'HS102', name: 'Communication Skills', faculty: 'Prof. R. Davis' },
  ];

  const announcements = [
    { title: 'Mid-term exam schedule published', date: '2 days ago', type: 'Exams' },
    { title: 'Guest lecture on "AI in Healthcare"', date: '4 days ago', type: 'Events' },
    { title: 'Last date for fee payment extended', date: '5 days ago', type: 'Fees' },
  ];

  const deadlines = [
    { title: 'Data Structures Assignment 2', due: 'in 3 days' },
    { title: 'Calculus II Quiz 1', due: 'in 5 days' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-cyan-500" />
              Student Portal
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Academic Progress & Resources</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              View Timetable
            </Button>
            <Button className="bg-cyan-500 hover:bg-cyan-600">
              <Award className="h-4 w-4 mr-2" />
              View Results
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                My Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {courses.map(course => (
                  <li key={course.code} className="flex justify-between items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div>
                      <p className="font-semibold">{course.name} ({course.code})</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{course.faculty}</p>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-yellow-500" />
                  Recent Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {announcements.map(announcement => (
                    <li key={announcement.title} className="flex items-start gap-3">
                      <div className="bg-yellow-100 dark:bg-yellow-900/50 p-2 rounded-full">
                        <Bell className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <p className="font-medium">{announcement.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{announcement.date} • {announcement.type}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-red-500" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {deadlines.map(deadline => (
                    <li key={deadline.title} className="flex justify-between items-center">
                      <p>{deadline.title}</p>
                      <Badge variant="destructive">{deadline.due}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;

