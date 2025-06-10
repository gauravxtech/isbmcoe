
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Users, Calendar, MessageSquare, Bell, UserPlus, Clock, FileText } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const ReceptionDashboard = () => {
  useSEO({
    title: "Reception Dashboard - ISBM College",
    description: "Front office reception dashboard",
    canonical: "https://isbmcoe.edu.in/dashboard/reception"
  });

  const receptionStats = [
    { label: "Today's Visitors", value: '24', icon: Users, color: 'text-blue-600' },
    { label: 'Pending Calls', value: '8', icon: Phone, color: 'text-orange-600' },
    { label: 'Appointments', value: '12', icon: Calendar, color: 'text-green-600' },
    { label: 'Inquiries', value: '15', icon: MessageSquare, color: 'text-purple-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Phone className="h-8 w-8 text-teal-500" />
              Front Office Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Reception & Visitor Services</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Visitor
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600">
              <Bell className="h-4 w-4 mr-2" />
              Announcements
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {receptionStats.map((stat, index) => (
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

export default ReceptionDashboard;
