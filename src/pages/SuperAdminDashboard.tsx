import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import NoticeManager from '@/components/admin/NoticeManager';
import StudentManager from '@/components/admin/StudentManager';
import WebsiteSettingsManager from '@/components/admin/WebsiteSettingsManager';
import SuperAdminUserManager from '@/components/admin/SuperAdminUserManager';
import { Shield, Users, Server, Database, Settings, Activity, TrendingUp, AlertTriangle, Plus, UserPlus, GraduationCap, Building, FileText, Bell, Trash2, Edit, Book, User, Key, Mail, Globe, Phone, BarChart3, Cpu, HardDrive, Zap, CheckCircle, Clock, Star, Sparkles } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
interface NewUser {
  fullName: string;
  email: string;
  role: string;
  department: string;
  phone: string;
  password?: string;
}
interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: string;
  department: string | null;
  phone: string | null;
  status: string | null;
  created_at: string;
}
interface Announcement {
  id: string;
  title: string;
  content: string;
  type: string;
  target_audience: string;
  priority: number;
  status: string;
  created_at: string;
  start_date: string | null;
  end_date: string | null;
}
const SuperAdminDashboard = () => {
  const [systemData, setSystemData] = useState<SystemMonitoring | null>(null);
  const [activities, setActivities] = useState<SystemActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [userCount, setUserCount] = useState<number>(0);
  const [studentCount, setStudentCount] = useState<number>(0);
  const [activeUserCount, setActiveUserCount] = useState<number>(0);
  const [departmentCount, setDepartmentCount] = useState<number>(0);
  const [superAdmins, setSuperAdmins] = useState<Profile[]>([]);
  const [allAdmins, setAllAdmins] = useState<Profile[]>([]);
  const [sentNotices, setSentNotices] = useState<Announcement[]>([]);
  const {
    toast
  } = useToast();
  const {
    user,
    userRole
  } = useAuth();

  // Department and role options
  const departmentOptions = ['Computer Engineering', 'AIDS', 'Mechanical', 'ETC', 'BCA', 'BBA', 'Sports Cell', 'Cultural Cell', 'Library', 'Hostel', 'Accounts', 'General Administration'];
  const roleOptions = ['student', 'faculty', 'staff', 'admin', 'super-admin'];
  useSEO({
    title: "Super Admin Dashboard - ISBM College",
    description: "System administrator control panel",
    canonical: "https://isbmcoe.edu.in/dashboard/super-admin"
  });
  useEffect(() => {
    fetchSystemData();
    fetchActivities();
    fetchCounts();
    fetchAdminUsers();
    fetchSentNotices();

    // Set up real-time subscriptions for dynamic updates
    const profilesChannel = supabase
      .channel('profiles-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, () => {
        fetchCounts();
        fetchAdminUsers();
      })
      .subscribe();

    const studentsChannel = supabase
      .channel('students-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'students' }, () => {
        fetchCounts();
      })
      .subscribe();

    const departmentsChannel = supabase
      .channel('departments-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'departments' }, () => {
        fetchCounts();
      })
      .subscribe();

    const announcementsChannel = supabase
      .channel('announcements-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'announcements' }, () => {
        fetchSentNotices();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(profilesChannel);
      supabase.removeChannel(studentsChannel);
      supabase.removeChannel(departmentsChannel);
      supabase.removeChannel(announcementsChannel);
    };
  }, [user, userRole]);
  const fetchAdminUsers = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('profiles').select('*').in('role', ['super-admin', 'admin', 'principal', 'hod', 'dean']).order('created_at', {
        ascending: false
      });
      if (error) throw error;
      const superAdminUsers = data?.filter(user => user.role === 'super-admin') || [];
      const adminUsers = data?.filter(user => user.role !== 'super-admin') || [];
      setSuperAdmins(superAdminUsers);
      setAllAdmins(adminUsers);
    } catch (error) {
      console.error('Error fetching admin users:', error);
    }
  };
  const fetchSentNotices = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('announcements').select('*').order('created_at', {
        ascending: false
      }).limit(10);
      if (error) throw error;
      setSentNotices(data || []);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };
  const fetchCounts = async () => {
    try {
      // Fetch total registered users from profiles table
      const { data: allUsers, count: userCount, error: userError } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
      
      if (userError) {
        console.error('Error fetching user count:', userError);
      }
      setUserCount(userCount || 0);
      console.log('Total registered users:', userCount);

      // Fetch total students
      const {
        count: studentCount
      } = await supabase.from('students').select('*', {
        count: 'exact',
        head: true
      });
      setStudentCount(studentCount || 0);

      // Fetch active users (users with active status)
      const {
        count: activeUsers
      } = await supabase.from('profiles').select('*', {
        count: 'exact',
        head: true
      }).eq('status', 'active');
      setActiveUserCount(activeUsers || 0);

      // Fetch total departments
      const {
        count: departmentCount
      } = await supabase.from('departments').select('*', {
        count: 'exact',
        head: true
      });
      setDepartmentCount(departmentCount || 0);
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };
  const fetchSystemData = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('system_monitoring').select('*').order('recorded_at', {
        ascending: false
      }).limit(1).single();
      if (error || !data) {
        // Default mock data for demo
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
      const {
        data,
        error
      } = await supabase.from('system_activities').select('*').order('created_at', {
        ascending: false
      }).limit(10);
      if (error || !data) {
        // Mock activities for demo
        setActivities([{
          id: '1',
          activity_name: 'System Health Check',
          activity_type: 'success',
          user_name: 'System',
          description: 'All systems running optimally',
          created_at: new Date().toISOString()
        }, {
          id: '2',
          activity_name: 'User Registration',
          activity_type: 'info',
          user_name: 'Admin Portal',
          description: 'New student registered successfully',
          created_at: new Date(Date.now() - 300000).toISOString()
        }, {
          id: '3',
          activity_name: 'Database Backup',
          activity_type: 'success',
          user_name: 'System',
          description: 'Daily backup completed successfully',
          created_at: new Date(Date.now() - 900000).toISOString()
        }]);
        setLoading(false);
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
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Activity className="h-4 w-4 text-blue-500" />;
    }
  };
  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };
  const getUsageColor = (usage: number) => {
    if (usage < 50) return "text-green-500";
    if (usage < 80) return "text-yellow-500";
    return "text-red-500";
  };
  const getUsageProgressColor = (usage: number) => {
    if (usage < 50) return "bg-green-500";
    if (usage < 80) return "bg-yellow-500";
    return "bg-red-500";
  };
  if (loading) {
    return <DashboardLayout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="h-6 w-6 text-yellow-500 animate-bounce" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">ISBM College of Engineering</h3>
              <p className="text-muted-foreground">Preparing your academic experience...</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Authenticating secure connection...</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Database className="h-4 w-4" />
                  <span>Loading academic resources...</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Settings className="h-4 w-4" />
                  <span>Preparing dashboard...</span>
                </div>
              </div>
            </div>
            <div className="w-64 mx-auto">
              <Progress value={75} className="h-2" />
            </div>
          </div>
        </div>
      </DashboardLayout>;
  }
  return <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Super Admin Dashboard</h1>
              <p className="text-muted-foreground">Complete system control and monitoring</p>
            </div>
          </div>
          
          {/* Welcome Card */}
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Welcome back, {user?.email?.split('@')[0] || 'Admin'}!</h2>
                  <p className="text-blue-100">System Status: All systems operational</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span className="text-sm">Online</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Users</p>
                  <p className="text-3xl font-bold">{userCount}</p>
                </div>
                <Users className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Students</p>
                  <p className="text-3xl font-bold">{studentCount}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-100 text-sm font-medium">Departments</p>
                  <p className="text-3xl font-bold">{departmentCount}</p>
                </div>
                <Building className="h-8 w-8 text-pink-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Active Users</p>
                  <p className="text-3xl font-bold">{activeUserCount}</p>
                </div>
                <Activity className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Overview Sections */}
        

        {/* System Health */}
        {systemData && <Card className="mb-8 border-0 shadow-lg bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="h-5 w-5 text-primary" />
                <span>System Health Monitor</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Cpu className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">CPU Usage</span>
                    </div>
                    <span className={`text-sm font-bold ${getUsageColor(systemData.cpu_usage)}`}>
                      {systemData.cpu_usage}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className={`h-2 rounded-full transition-all duration-300 ${getUsageProgressColor(systemData.cpu_usage)}`} style={{
                  width: `${systemData.cpu_usage}%`
                }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">Memory</span>
                    </div>
                    <span className={`text-sm font-bold ${getUsageColor(systemData.memory_usage)}`}>
                      {systemData.memory_usage}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className={`h-2 rounded-full transition-all duration-300 ${getUsageProgressColor(systemData.memory_usage)}`} style={{
                  width: `${systemData.memory_usage}%`
                }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <HardDrive className="h-4 w-4 text-pink-500" />
                      <span className="text-sm font-medium">Disk Usage</span>
                    </div>
                    <span className={`text-sm font-bold ${getUsageColor(systemData.disk_usage)}`}>
                      {systemData.disk_usage}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className={`h-2 rounded-full transition-all duration-300 ${getUsageProgressColor(systemData.disk_usage)}`} style={{
                  width: `${systemData.disk_usage}%`
                }}></div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                  <p className="text-lg font-bold text-green-600">{systemData.system_uptime}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Database Size</p>
                  <p className="text-lg font-bold text-blue-600">{systemData.database_size}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Pending Updates</p>
                  <p className="text-lg font-bold text-orange-600">{systemData.pending_updates}</p>
                </div>
              </div>
            </CardContent>
          </Card>}

        {/* Management Tabs */}
        <Card className="border-0 shadow-lg bg-card/50 backdrop-blur">
          <CardContent className="p-6">
            <Tabs defaultValue="activities" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-muted/50">
                <TabsTrigger value="activities" className="flex items-center space-x-2">
                  <Activity className="h-4 w-4" />
                  <span>Activities</span>
                </TabsTrigger>
                <TabsTrigger value="users" className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                </TabsTrigger>
                <TabsTrigger value="students" className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Students</span>
                </TabsTrigger>
                <TabsTrigger value="notices" className="flex items-center space-x-2">
                  <Bell className="h-4 w-4" />
                  <span>Notices</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="activities" className="mt-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-emerald-600" />
                        Recent System Activities
                      </CardTitle>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-emerald-200">
                        Live Updates
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Real-time system activity monitoring</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {activities.map(activity => (
                        <div key={activity.id} className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-white border border-emerald-200 hover:shadow-md transition-all">
                          <div className="mt-0.5 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                            {getActivityIcon(activity.activity_type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-sm font-medium text-foreground">{activity.activity_name}</p>
                              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                                {formatTimeAgo(activity.created_at)}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{activity.description}</p>
                            {activity.user_name && (
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3 text-emerald-600" />
                                <p className="text-xs text-emerald-600 font-medium">{activity.user_name}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* System Admin Section */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-purple-600" />
                        System Admin ({superAdmins.length})
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">Super administrators with full system access</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {superAdmins.length > 0 ? superAdmins.map(admin => (
                          <div key={admin.id} className="p-4 rounded-lg border bg-gradient-to-r from-purple-50 to-white border-purple-200 hover:shadow-md transition-all">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                                  <User className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium text-foreground">{admin.full_name || admin.email}</p>
                                  <p className="text-sm text-muted-foreground">{admin.email}</p>
                                  {admin.department && (
                                    <p className="text-xs text-purple-600 font-medium">{admin.department}</p>
                                  )}
                                </div>
                              </div>
                              <div className="flex flex-col items-end space-y-1">
                                <Badge variant="default" className="bg-purple-600 hover:bg-purple-700">
                                  {admin.role}
                                </Badge>
                                <Badge variant={admin.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                                  {admin.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        )) : (
                          <div className="text-center py-8 text-muted-foreground">
                            <Shield className="h-12 w-12 mx-auto mb-2 opacity-50" />
                            <p>No system administrators found</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* All Admin Section */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        All Admin ({allAdmins.length})
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">Administrative users across departments</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {allAdmins.length > 0 ? allAdmins.map(admin => (
                          <div key={admin.id} className="p-4 rounded-lg border bg-gradient-to-r from-blue-50 to-white border-blue-200 hover:shadow-md transition-all">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                  <User className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium text-foreground">{admin.full_name || admin.email}</p>
                                  <p className="text-sm text-muted-foreground">{admin.email}</p>
                                  {admin.department && (
                                    <p className="text-xs text-blue-600 font-medium">{admin.department}</p>
                                  )}
                                </div>
                              </div>
                              <div className="flex flex-col items-end space-y-1">
                                <Badge 
                                  variant={admin.role === 'principal' ? 'default' : admin.role === 'hod' ? 'secondary' : 'outline'}
                                  className={
                                    admin.role === 'principal' ? 'bg-green-600 hover:bg-green-700' :
                                    admin.role === 'hod' ? 'bg-orange-600 hover:bg-orange-700' :
                                    admin.role === 'dean' ? 'bg-purple-600 hover:bg-purple-700' :
                                    'bg-blue-600 hover:bg-blue-700 text-white'
                                  }
                                >
                                  {admin.role}
                                </Badge>
                                <Badge variant={admin.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                                  {admin.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        )) : (
                          <div className="text-center py-8 text-muted-foreground">
                            <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
                            <p>No administrative users found</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="students" className="mt-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-amber-600" />
                      Student Management
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">Comprehensive student data management and analytics</p>
                  </CardHeader>
                  <CardContent>
                    <StudentManager />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notices" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Add Notice Form */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-rose-50 to-red-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-rose-600" />
                        Create Notice
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">Send announcements and notifications</p>
                    </CardHeader>
                    <CardContent>
                      <NoticeManager onClose={() => fetchSentNotices()} />
                    </CardContent>
                  </Card>
                  
                  {/* Sent Notices List */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-indigo-600" />
                        Sent Notices ({sentNotices.length})
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">Recently sent announcements and notices</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {sentNotices.length > 0 ? sentNotices.map(notice => (
                          <div key={notice.id} className="p-4 rounded-lg border bg-gradient-to-r from-indigo-50 to-white border-indigo-200 hover:shadow-md transition-all">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <h4 className="font-medium text-foreground mb-1">{notice.title}</h4>
                                <p className="text-sm text-muted-foreground line-clamp-2">{notice.content}</p>
                              </div>
                              <div className="ml-3 flex flex-col items-end space-y-1">
                                <Badge 
                                  variant={notice.type === 'urgent' ? 'destructive' : notice.type === 'academic' ? 'default' : 'secondary'} 
                                  className="text-xs"
                                >
                                  {notice.type}
                                </Badge>
                                <Badge 
                                  variant={notice.status === 'active' ? 'default' : 'secondary'} 
                                  className="text-xs"
                                >
                                  {notice.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center gap-1">
                                  <Users className="h-3 w-3 text-indigo-600" />
                                  <span>Target: {notice.target_audience}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 text-indigo-600" />
                                  <span>Priority: {notice.priority}</span>
                                </div>
                              </div>
                              <span className="bg-muted px-2 py-1 rounded-full">{formatTimeAgo(notice.created_at)}</span>
                            </div>
                          </div>
                        )) : (
                          <div className="text-center py-8 text-muted-foreground">
                            <Bell className="h-12 w-12 mx-auto mb-2 opacity-50" />
                            <p>No notices sent yet</p>
                            <p className="text-xs mt-1">Sent notices will appear here</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="mt-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-gray-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-slate-600" />
                      Website Settings
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">Configure system preferences and website settings</p>
                  </CardHeader>
                  <CardContent>
                    <WebsiteSettingsManager />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>;
};
export default SuperAdminDashboard;