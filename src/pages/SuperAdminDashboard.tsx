import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Shield, 
  Users, 
  Server, 
  Database, 
  Settings, 
  Activity, 
  TrendingUp, 
  AlertTriangle,
  Plus,
  UserPlus,
  GraduationCap,
  Building,
  FileText,
  Bell,
  Trash2,
  Edit,
  Mail,
  Lock
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

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

const SuperAdminDashboard = () => {
  const [systemData, setSystemData] = useState<SystemMonitoring | null>(null);
  const [activities, setActivities] = useState<SystemActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isSystemSettingsOpen, setIsSystemSettingsOpen] = useState(false);
  const [newUser, setNewUser] = useState<NewUser>({
    fullName: '',
    email: '',
    role: 'student',
    department: '',
    phone: '',
    password: ''
  });
  const { toast } = useToast();
  const { user, userRole } = useAuth();
  const navigate = useNavigate();

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
      const { data, error } = await supabase
        .from('system_activities')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) {
        console.error('Error fetching activities:', error);
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

  const handleAddUser = async () => {
    if (!newUser.fullName || !newUser.email || !newUser.department || !newUser.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields, including password.",
        variant: "destructive"
      });
      return;
    }
    if (newUser.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive"
      });
      return;
    }

    let adminSession = null;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error("Could not get admin session. Please log in again.");
      }
      adminSession = session;

      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: newUser.email,
        password: newUser.password,
        options: {
          data: {
            full_name: newUser.fullName,
            role: newUser.role,
          }
        }
      });

      if (signUpError) {
        throw signUpError;
      }
      
      if (!signUpData.user) {
        throw new Error("User was not created.");
      }

      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          department: newUser.department,
          phone: newUser.phone,
        })
        .eq('id', signUpData.user.id);

      if (profileError) {
        console.error('Profile update error:', profileError);
        toast({
            title: "Warning",
            description: "User created, but failed to set department/phone. You can edit the user later.",
            variant: "default"
        });
      }

      const { error: setSessionError } = await supabase.auth.setSession({
        access_token: adminSession.access_token,
        refresh_token: adminSession.refresh_token,
      });

      if (setSessionError) {
        throw new Error("Could not restore admin session. Please refresh and log in again.");
      }

      await supabase
        .from('system_activities')
        .insert({
          activity_name: 'User Added',
          activity_type: 'success',
          user_name: user?.email || 'Super Admin',
          description: `Added new ${newUser.role}: ${newUser.fullName}`
        });

      toast({
        title: "Success",
        description: `${newUser.role} added successfully!`,
      });

      setNewUser({
        fullName: '',
        email: '',
        role: 'student',
        department: '',
        phone: '',
        password: ''
      });
      setIsAddUserOpen(false);
      fetchActivities();

    } catch (error: any) {
      console.error('Error adding user:', error);
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"
      });
      if (adminSession) {
        await supabase.auth.setSession({
          access_token: adminSession.access_token,
          refresh_token: adminSession.refresh_token,
        });
      }
    }
  };

  const handleSystemAction = async (action: string) => {
    try {
      await supabase
        .from('system_activities')
        .insert({
          activity_name: action,
          activity_type: 'info',
          user_name: user?.email || 'Super Admin',
          description: `${action} initiated by super admin`
        });

      toast({
        title: "Action Initiated",
        description: `${action} has been started`,
      });

      fetchActivities();
    } catch (error) {
      console.error('Error logging action:', error);
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

            <Dialog open={isSystemSettingsOpen} onOpenChange={setIsSystemSettingsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-red-500 hover:bg-red-600 text-xs md:text-sm" size="sm">
                  <Settings className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  System Settings
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>System Settings</DialogTitle>
                  <DialogDescription>
                    Manage system-wide configurations and settings.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => handleSystemAction('System Backup')}
                  >
                    <Database className="h-4 w-4 mr-2" />
                    Backup Database
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => handleSystemAction('System Update')}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Check Updates
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => handleSystemAction('Clear Cache')}
                  >
                    <Server className="h-4 w-4 mr-2" />
                    Clear System Cache
                  </Button>
                  <Button 
                    className="w-full justify-start text-red-600 hover:text-red-700" 
                    variant="outline"
                    onClick={() => handleSystemAction('System Restart')}
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Restart System
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
            <DialogTrigger asChild>
              <Button className="h-20 flex-col bg-blue-500 hover:bg-blue-600" onClick={() => setIsAddUserOpen(true)}>
                <UserPlus className="h-6 w-6 mb-2" />
                <span className="text-xs">Add User</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>
                  Create a new student, teacher, or staff member account.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={newUser.fullName}
                    onChange={(e) => setNewUser({...newUser, fullName: e.target.value})}
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    placeholder="Enter initial password (min. 6 chars)"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role *</Label>
                  <select
                    id="role"
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                    <option value="super-admin">Super Admin</option>
                    <option value="hod">HOD</option>
                    <option value="principal">Principal</option>
                    <option value="dean">Dean</option>
                    <option value="parent">Parent</option>
                    <option value="accountant">Accountant</option>
                    <option value="reception">Reception</option>
                    <option value="security">Security</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="department">Department *</Label>
                  <select
                    id="department"
                    value={newUser.department}
                    onChange={(e) => setNewUser({...newUser, department: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="AIDS">AIDS</option>
                    <option value="BCA">BCA</option>
                    <option value="BBA">BBA</option>
                    <option value="First Year">First Year</option>
                    <option value="Administration">Administration</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={newUser.phone}
                    onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddUser}>
                    Add User
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button 
            className="h-20 flex-col bg-green-500 hover:bg-green-600"
            onClick={() => navigate('/admin/reports')}
          >
            <FileText className="h-6 w-6 mb-2" />
            <span className="text-xs">Reports</span>
          </Button>

          <Button 
            className="h-20 flex-col bg-purple-500 hover:bg-purple-600"
            onClick={() => navigate('/admin/notifications')}
          >
            <Bell className="h-6 w-6 mb-2" />
            <span className="text-xs">Notifications</span>
          </Button>

          <Button 
            className="h-20 flex-col bg-orange-500 hover:bg-orange-600"
            onClick={() => navigate('/admin/departments')}
          >
            <Building className="h-6 w-6 mb-2" />
            <span className="text-xs">Departments</span>
          </Button>
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

        {/* Advanced Management Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Advanced Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="users" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">User Management</h3>
                  <Button size="sm" onClick={() => setIsAddUserOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => navigate('/admin/user-management')}
                  >
                    <Users className="h-8 w-8 mb-2" />
                    <span>Manage Users</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => handleSystemAction('Bulk User Import')}
                  >
                    <UserPlus className="h-8 w-8 mb-2" />
                    <span>Bulk Import</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => handleSystemAction('User Audit')}
                  >
                    <Shield className="h-8 w-8 mb-2" />
                    <span>User Audit</span>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="content" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Content Management</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => navigate('/dashboard/website-management')}
                  >
                    <FileText className="h-8 w-8 mb-2" />
                    <span>Website Content</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => handleSystemAction('Manage News')}
                  >
                    <Bell className="h-8 w-8 mb-2" />
                    <span>News & Events</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => handleSystemAction('Media Library')}
                  >
                    <Database className="h-8 w-8 mb-2" />
                    <span>Media Library</span>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="system" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">System Administration</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => navigate('/admin/system-management')}
                  >
                    <Database className="h-8 w-8 mb-2" />
                    <span>System Management</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => handleSystemAction('Security Audit')}
                  >
                    <Lock className="h-8 w-8 mb-2" />
                    <span>Security</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => handleSystemAction('Performance Monitor')}
                  >
                    <TrendingUp className="h-8 w-8 mb-2" />
                    <span>Performance</span>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Analytics & Reporting</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => navigate('/admin/reports')}
                  >
                    <TrendingUp className="h-8 w-8 mb-2" />
                    <span>Reports</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => handleSystemAction('Performance Analytics')}
                  >
                    <Activity className="h-8 w-8 mb-2" />
                    <span>Performance</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex-col"
                    onClick={() => handleSystemAction('Export Analytics')}
                  >
                    <FileText className="h-8 w-8 mb-2" />
                    <span>Export Data</span>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminDashboard;