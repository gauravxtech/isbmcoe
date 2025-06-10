
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Users, Server, Database, Settings, Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const SuperAdminDashboard = () => {
  useSEO({
    title: "Super Admin Dashboard - ISBM College",
    description: "System administrator control panel",
    canonical: "https://isbmcoe.edu.in/dashboard/super-admin"
  });

  const systemStats = [
    { label: 'System Uptime', value: '99.9%', icon: Activity, color: 'text-green-600' },
    { label: 'Active Users', value: '1,247', icon: Users, color: 'text-blue-600' },
    { label: 'Database Size', value: '2.4GB', icon: Database, color: 'text-purple-600' },
    { label: 'Pending Updates', value: '3', icon: AlertTriangle, color: 'text-orange-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Shield className="h-8 w-8 text-red-500" />
              System Control Center
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Complete system administration and monitoring</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Server className="h-4 w-4 mr-2" />
              System Health
            </Button>
            <Button className="bg-red-500 hover:bg-red-600">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemStats.map((stat, index) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>System Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>CPU Usage</span>
                  <Badge variant="secondary">23%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Memory Usage</span>
                  <Badge variant="secondary">67%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Disk Usage</span>
                  <Badge variant="secondary">45%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">System backup completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">New user registered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Security scan initiated</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminDashboard;
