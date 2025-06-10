
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, BookOpen, Users, Calendar, FileText, Clock, Award, TrendingUp } from 'lucide-react';
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
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
