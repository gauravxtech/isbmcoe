
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Calendar, TrendingUp, Award, Clock, FileText, Users } from 'lucide-react';
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
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
