
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users, TrendingUp, FileText, Calendar, Award, BarChart3 } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const DeanDashboard = () => {
  useSEO({
    title: "Dean Dashboard - ISBM College",
    description: "Academic dean administrative dashboard",
    canonical: "https://isbmcoe.edu.in/dashboard/dean"
  });

  const academicStats = [
    { label: 'Academic Programs', value: '15', icon: BookOpen, color: 'text-indigo-600' },
    { label: 'Faculty Members', value: '186', icon: Users, color: 'text-green-600' },
    { label: 'Research Projects', value: '28', icon: FileText, color: 'text-purple-600' },
    { label: 'Publications', value: '45', icon: Award, color: 'text-orange-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-indigo-500" />
              Academic Dean Portal
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Academic Administration & Curriculum Management</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Academic Report
            </Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Review
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicStats.map((stat, index) => (
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

export default DeanDashboard;
