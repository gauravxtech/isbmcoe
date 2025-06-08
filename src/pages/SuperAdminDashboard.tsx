
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Users, Building2, Database, Settings, Activity, AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useSEO } from '@/hooks/useSEO';

const SuperAdminDashboard = () => {
  useSEO({
    title: "Super Admin Dashboard - ISBM College",
    description: "System administrator control panel",
    canonical: "https://isbmcoe.edu.in/admin/super-admin-dashboard"
  });

  const systemStats = [
    { label: 'Total Users', value: '2,847', icon: Users, change: '+12%', color: 'text-blue-600' },
    { label: 'System Uptime', value: '99.9%', icon: Activity, change: '+0.1%', color: 'text-green-600' },
    { label: 'Active Sessions', value: '156', icon: Clock, change: '+8%', color: 'text-orange-600' },
    { label: 'Storage Used', value: '67%', icon: Database, change: '+2%', color: 'text-purple-600' },
  ];

  const systemHealth = [
    { service: 'Database', status: 'Healthy', uptime: '99.9%', color: 'bg-green-500' },
    { service: 'Authentication', status: 'Healthy', uptime: '100%', color: 'bg-green-500' },
    { service: 'File Storage', status: 'Warning', uptime: '98.5%', color: 'bg-yellow-500' },
    { service: 'Email Service', status: 'Healthy', uptime: '99.7%', color: 'bg-green-500' },
  ];

  const recentActivities = [
    { action: 'New Admin User Created', user: 'System', time: '2 mins ago', type: 'success' },
    { action: 'Database Backup Completed', user: 'Auto', time: '1 hour ago', type: 'info' },
    { action: 'Security Scan Completed', user: 'System', time: '3 hours ago', type: 'success' },
    { action: 'Failed Login Attempt', user: 'Unknown', time: '5 hours ago', type: 'warning' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Shield className="h-8 w-8 text-red-500" />
              Super Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">System Administration & Management</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
            <Button className="bg-red-500 hover:bg-red-600">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Emergency Tools
            </Button>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className={`text-sm ${stat.color} flex items-center gap-1`}>
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Health & Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemHealth.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${service.color}`}></div>
                      <div>
                        <p className="font-medium">{service.service}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Uptime: {service.uptime}</p>
                      </div>
                    </div>
                    <Badge variant={service.status === 'Healthy' ? 'default' : 'secondary'}>
                      {service.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent System Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">by {activity.user} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>System Management Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Users className="h-6 w-6 mb-2" />
                User Management
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Database className="h-6 w-6 mb-2" />
                Database Admin
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Settings className="h-6 w-6 mb-2" />
                System Config
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Shield className="h-6 w-6 mb-2" />
                Security Center
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default SuperAdminDashboard;
