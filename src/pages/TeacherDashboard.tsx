
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, BookOpen, Users, Calendar, FileText, Clock, Award, Upload } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const TeacherDashboard = () => {
  useSEO({
    title: "Teacher Dashboard - ISBM College",
    description: "Faculty member dashboard",
    canonical: "https://isbmcoe.edu.in/dashboard/teacher"
  });

  const teacherStats = [
    { label: 'Classes Today', value: '4', icon: Calendar, color: 'text-blue-600' },
    { label: 'Total Students', value: '180', icon: Users, color: 'text-green-600' },
    { label: 'Pending Assignments', value: '12', icon: FileText, color: 'text-orange-600' },
    { label: 'Teaching Hours', value: '22', icon: Clock, color: 'text-purple-600' },
  ];

  const schedule = [
    { time: '10:00 - 11:00 AM', class: 'TE Comp A', subject: 'Operating Systems', topic: 'Process Scheduling' },
    { time: '11:15 AM - 12:15 PM', class: 'SE Comp B', subject: 'Data Structures', topic: 'Linked Lists' },
    { time: '02:00 - 03:00 PM', class: 'TE Comp A', subject: 'Operating Systems Lab', topic: 'Shell Scripting' },
  ];

  const courses = [
    { name: 'Operating Systems', class: 'TE Comp A' },
    { name: 'Data Structures', class: 'SE Comp B' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <User className="h-8 w-8 text-orange-500" />
              Faculty Portal
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Teaching & Academic Management</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              Course Materials
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Award className="h-4 w-4 mr-2" />
              Grade Students
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teacherStats.map((stat, index) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {schedule.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="text-center w-24 flex-shrink-0">
                      <p className="font-bold text-gray-800 dark:text-gray-200">{item.time.split(' - ')[0]}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">to {item.time.split(' - ')[1]}</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <p className="font-semibold">{item.subject} <Badge variant="outline">{item.class}</Badge></p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Topic: {item.topic}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-500" />
                My Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {courses.map(course => (
                <div key={course.name} className="p-3 border rounded-lg">
                  <p className="font-semibold">{course.name}</p>
                  <p className="text-sm text-gray-500 mb-3">{course.class}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Users className="h-3 w-3 mr-1" />
                      Students
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Upload className="h-3 w-3 mr-1" />
                      Material
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;

