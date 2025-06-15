
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Users, Server, Database, Settings, Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SystemMonitoring {
  id: string;
  cpu_usage: number;
  memory_usage: number;
  disk_usage: number;
  active_users: number;
  database_size: string;
  system_uptime: string;
  pending_updates: number;
  recorded_at: string;
}

interface SystemActivity {
  id: string;
  activity_name: string;
  activity_type: string;
  user_name: string | null;
  description: string | null;
  created_at: string;
}

const SuperAdminDashboard = () => {
  const [systemData, setSystemData] = useState<SystemMonitoring | null>(null);
  const [activities, setActivities] = useState<SystemActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useSEO({
    title: "Super Admin Dashboard - ISBM College",
    description: "System administrator control panel",
    canonical: "https://isbmcoe.edu.in/dashboard/super-admin"
  });

  useEffect(() => {
    fetchSystemData();
    fetchActivities();
  }, []);

  const fetchSystemData = async () => {
    try {
      const { data, error } = await supabase
        .from('system_monitoring')
        .select('*')
        .order('recorded_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.error('Error fetching system data:', error);
        toast({
          title: "Error",
          description: "Failed to fetch system monitoring data",
          variant: "destructive"
        });
        return;
      }

      setSystemData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchActivities = async () => {
    try {
      const { data, error } = await supabase
        .from('system_activities')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) {
        console.error('Error fetching activities:', error);
        return;
      }

      setActivities(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
        </div>
      </DashboardLayout>
    );
  }

  const systemStats = [
    { 
      label: 'System Uptime', 
      value: systemData?.system_uptime || '0%', 
      icon: Activity, 
      color: 'text-green-600' 
    },
    { 
      label: 'Active Users', 
      value: systemData?.active_users?.toLocaleString() || '0', 
      icon: Users, 
      color: 'text-blue-600' 
    },
    { 
      label: 'Database Size', 
      value: systemData?.database_size || '0GB', 
      icon: Database, 
      color: 'text-purple-600' 
    },
    { 
      label: 'Pending Updates', 
      value: systemData?.pending_updates?.toString() || '0', 
      icon: AlertTriangle, 
      color: 'text-orange-600' 
    },
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
            <Button variant="outline" onClick={fetchSystemData}>
              <Server className="h-4 w-4 mr-2" />
              Refresh Data
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
                  <Badge variant="secondary">{systemData?.cpu_usage || 0}%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Memory Usage</span>
                  <Badge variant="secondary">{systemData?.memory_usage || 0}%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Disk Usage</span>
                  <Badge variant="secondary">{systemData?.disk_usage || 0}%</Badge>
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
                {activities.length > 0 ? (
                  activities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${getActivityColor(activity.activity_type)}`}></div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium">{activity.activity_name}</span>
                        <p className="text-xs text-gray-500">
                          {activity.user_name} • {formatTimeAgo(activity.created_at)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No recent activities</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminDashboard;
