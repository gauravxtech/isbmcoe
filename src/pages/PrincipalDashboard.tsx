
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, TrendingUp, Award, BarChart3, Calendar, FileText, GraduationCap } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const PrincipalDashboard = () => {
  useSEO({
    title: "Principal Dashboard - ISBM College",
    description: "Principal administrative dashboard",
    canonical: "https://isbmcoe.edu.in/dashboard/principal"
  });

  const principalStats = [
    { label: 'Total Students', value: '2,847', icon: Users, color: 'text-blue-600' },
    { label: 'Faculty Members', value: '186', icon: GraduationCap, color: 'text-green-600' },
    { label: 'Academic Performance', value: '94%', icon: TrendingUp, color: 'text-purple-600' },
    { label: 'Placement Rate', value: '89%', icon: Award, color: 'text-orange-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Building2 className="h-8 w-8 text-purple-500" />
              Principal's Office
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Institutional Leadership & Management</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Institutional Report
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600">
              <Calendar className="h-4 w-4 mr-2" />
              Academic Calendar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principalStats.map((stat, index) => (
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

export default PrincipalDashboard;
