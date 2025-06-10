
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Camera, AlertTriangle, Users, Lock, Eye, Activity, FileText } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const SecurityDashboard = () => {
  useSEO({
    title: "Security Dashboard - ISBM College",
    description: "Security gate management dashboard",
    canonical: "https://isbmcoe.edu.in/dashboard/security"
  });

  const securityStats = [
    { label: 'Active Cameras', value: '24', icon: Camera, color: 'text-blue-600' },
    { label: 'Security Alerts', value: '3', icon: AlertTriangle, color: 'text-red-600' },
    { label: 'Campus Entries', value: '156', icon: Users, color: 'text-green-600' },
    { label: 'Access Points', value: '8', icon: Lock, color: 'text-purple-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Shield className="h-8 w-8 text-gray-500" />
              Security Control Center
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Campus Security & Monitoring</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              CCTV Monitor
            </Button>
            <Button className="bg-gray-500 hover:bg-gray-600">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Security Alert
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityStats.map((stat, index) => (
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

export default SecurityDashboard;
