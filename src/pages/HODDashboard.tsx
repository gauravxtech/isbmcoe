
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Calendar, TrendingUp, FileText, GraduationCap, Award, BarChart3 } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { useToast } from '@/hooks/use-toast';

const HODDashboard = () => {
  useSEO({
    title: "HOD Dashboard - ISBM College",
    description: "Head of Department dashboard",
    canonical: "https://isbmcoe.edu.in/dashboard/hod"
  });

  const { toast } = useToast();

  const handleGenerateReport = () => {
    toast({
      title: "Report Generation Started",
      description: "Generating the Department Report for the current academic year. You will be notified when it's ready.",
    });
  };

  const deptStats = [
    { label: 'Faculty Members', value: '28', icon: Users, color: 'text-green-600' },
    { label: 'Students Enrolled', value: '420', icon: GraduationCap, color: 'text-blue-600' },
    { label: 'Courses Offered', value: '12', icon: BookOpen, color: 'text-purple-600' },
    { label: 'Success Rate', value: '94%', icon: Award, color: 'text-orange-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Users className="h-8 w-8 text-green-500" />
              Department Head Portal
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Computer Engineering Department</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleGenerateReport}>
              <BarChart3 className="h-4 w-4 mr-2" />
              Department Report
            </Button>
            <Button className="bg-green-500 hover:bg-green-600">
              <Calendar className="h-4 w-4 mr-2" />
              Faculty Meeting
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deptStats.map((stat, index) => (
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

export default HODDashboard;
