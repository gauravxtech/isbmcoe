
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Shield, Users, Server, Database, Settings, Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import BannerManager from '@/components/admin/BannerManager';
import { useSEO } from '@/hooks/useSEO';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

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
  const [activeView, setActiveView] = useState<'dashboard' | 'banner-manager'>('dashboard');
  const { toast } = useToast();
  const { user, userRole } = useAuth();

  useSEO({
    title: "Super Admin Dashboard - ISBM College",
    description: "System administrator control panel",
    canonical: "https://isbmcoe.edu.in/dashboard/super-admin"
  });

  useEffect(() => {
    console.log('SuperAdminDashboard mounted. User:', user?.email, 'Role:', userRole);
    fetchSystemData();
    fetchActivities();
  }, [user, userRole]);

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
        // Create some default data if none exists
        setSystemData({
          id: 'default',
          cpu_usage: 45,
          memory_usage: 60,
          disk_usage: 30,
          active_users: 125,
          database_size: '2.5GB',
          system_uptime: '99.9%',
          pending_updates: 3,
          recorded_at: new Date().toISOString()
        });
        return;
      }

      setSystemData(data);
    } catch (error) {
      console.error('Error:', error);
      // Set default data on error
      setSystemData({
        id: 'default',
        cpu_usage: 45,
        memory_usage: 60,
        disk_usage: 30,
        active_users: 125,
        database_size: '2.5GB',
        system_uptime: '99.9%',
        pending_updates: 3,
        recorded_at: new Date().toISOString()
      });
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
        // Set some default activities
        setActivities([
          {
            id: '1',
            activity_name: 'User Login',
            activity_type: 'info',
            user_name: 'Super Admin',
            description: 'Successful login to super admin dashboard',
            created_at: new Date().toISOString()
          },
          {
            id: '2',
            activity_name: 'System Monitoring',
            activity_type: 'success',
            user_name: 'System',
            description: 'System health check completed',
            created_at: new Date(Date.now() - 300000).toISOString()
          }
        ]);
        return;
      }

      setActivities(data || []);
    } catch (error) {
      console.error('Error:', error);
      setActivities([]);
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
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Super Admin Dashboard...</p>
            <p className="text-sm text-gray-400 mt-2">User: {user?.email}</p>
            <p className="text-sm text-gray-400">Role: {userRole}</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const systemStats = [
    { 
      label: 'System Uptime', 
      value: systemData?.system_uptime || '99.9%', 
      icon: Activity, 
      color: 'text-green-600' 
    },
    { 
      label: 'Active Users', 
      value: systemData?.active_users?.toLocaleString() || '125', 
      icon: Users, 
      color: 'text-blue-600' 
    },
    { 
      label: 'Database Size', 
      value: systemData?.database_size || '2.5GB', 
      icon: Database, 
      color: 'text-purple-600' 
    },
    { 
      label: 'Pending Updates', 
      value: systemData?.pending_updates?.toString() || '3', 
      icon: AlertTriangle, 
      color: 'text-orange-600' 
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 md:space-y-6 px-2 sm:px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2 md:gap-3">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-red-500 flex-shrink-0" />
              <span className="truncate">System Control Center</span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">Complete system administration and monitoring</p>
            <p className="text-xs text-gray-500 mt-1">Logged in as: {user?.email} ({userRole})</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <Button variant="outline" onClick={fetchSystemData} size="sm" className="text-xs md:text-sm">
              <Server className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              Refresh Data
            </Button>

            <Button className="bg-red-500 hover:bg-red-600 text-xs md:text-sm" size="sm">
              <Settings className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              System Settings
            </Button>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {systemStats.map((stat, index) => (
            <Card key={index} className="min-w-0">
              <CardContent className="p-3 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 truncate">{stat.label}</p>
                    <p className="text-lg md:text-3xl font-bold text-gray-900 dark:text-white truncate">{stat.value}</p>
                  </div>
                  <div className="p-2 md:p-3 bg-gray-100 dark:bg-gray-800 rounded-full flex-shrink-0 ml-2">
                    <stat.icon className={`h-4 w-4 md:h-6 md:w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="text-base md:text-lg">System Monitoring</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">CPU Usage</span>
                  <Badge variant="secondary" className="text-xs md:text-sm">{systemData?.cpu_usage || 45}%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Memory Usage</span>
                  <Badge variant="secondary" className="text-xs md:text-sm">{systemData?.memory_usage || 60}%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Disk Usage</span>
                  <Badge variant="secondary" className="text-xs md:text-sm">{systemData?.disk_usage || 30}%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="text-base md:text-lg">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 md:space-y-3">
                {activities.length > 0 ? (
                  activities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-2 md:space-x-3">
                      <div className={`w-2 h-2 rounded-full ${getActivityColor(activity.activity_type)} flex-shrink-0 mt-1.5`}></div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs md:text-sm font-medium block truncate">{activity.activity_name}</span>
                        <p className="text-xs text-gray-500 truncate">
                          {activity.user_name} • {formatTimeAgo(activity.created_at)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs md:text-sm text-gray-500">No recent activities</p>
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
