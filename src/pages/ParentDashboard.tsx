
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, TrendingUp, Clock, FileText, Calendar, Award, MessageSquare } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const ParentDashboard = () => {
  useSEO({
    title: "Parent Dashboard - ISBM College",
    description: "Parent portal for student monitoring",
    canonical: "https://isbmcoe.edu.in/dashboard/parent"
  });

  const childStats = [
    { label: 'Current CGPA', value: '8.2', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Attendance', value: '92%', icon: Clock, color: 'text-blue-600' },
    { label: 'Assignments', value: '4', icon: FileText, color: 'text-orange-600' },
    { label: 'Achievements', value: '3', icon: Award, color: 'text-purple-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Users className="h-8 w-8 text-pink-500" />
              Parent Portal
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Monitor Your Child's Academic Progress</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact Teacher
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600">
              <Calendar className="h-4 w-4 mr-2" />
              Parent Meeting
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {childStats.map((stat, index) => (
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

export default ParentDashboard;
