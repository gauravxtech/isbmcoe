
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, Users, Bed, Utensils, Wifi, Wrench, Calendar, FileText } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const HostelDashboard = () => {
  useSEO({
    title: "Hostel Dashboard - ISBM College",
    description: "Hostel management dashboard",
    canonical: "https://isbmcoe.edu.in/dashboard/hostel"
  });

  const hostelStats = [
    { label: 'Total Rooms', value: '150', icon: Bed, color: 'text-blue-600' },
    { label: 'Occupied Rooms', value: '142', icon: Home, color: 'text-green-600' },
    { label: 'Residents', value: '284', icon: Users, color: 'text-purple-600' },
    { label: 'Maintenance', value: '5', icon: Wrench, color: 'text-orange-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Home className="h-8 w-8 text-emerald-500" />
              Hostel Management System
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Residential Services & Administration</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Bed className="h-4 w-4 mr-2" />
              Room Allocation
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              <Calendar className="h-4 w-4 mr-2" />
              Maintenance Schedule
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostelStats.map((stat, index) => (
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

export default HostelDashboard;
