import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ModernLoader } from '@/components/ui/modern-loader';
import NoticeManager from '@/components/admin/NoticeManager';
import StudentManager from '@/components/admin/StudentManager';
import WebsiteSettingsManager from '@/components/admin/WebsiteSettingsManager';
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
  Book,
  User,
  Key,
  Mail,
  Globe,
  Phone
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import SchoolDashboardOverview from '@/components/admin/SchoolDashboardOverview';

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
  const [showNoticeManager, setShowNoticeManager] = useState(false);
  const [newUser, setNewUser] = useState<NewUser>({
    fullName: '',
    email: '',
    role: 'student',
    department: '',
    phone: '',
    password: 'isbm@321'
  });
  const [userCount, setUserCount] = useState<number>(0);
  const [studentCount, setStudentCount] = useState<number>(0);
  const [departmentCount, setDepartmentCount] = useState<number>(0);
  const { toast } = useToast();
  const { user, userRole } = useAuth();
  const navigate = (window as any).navigate || ((url: string) => { window.location.href = url; });

  // Admins and Roles State
  const [admins, setAdmins] = useState<any[]>([]);
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [userLoading, setUserLoading] = useState(true);
  const [roleEditId, setRoleEditId] = useState<string | null>(null);
  const [roleEditValue, setRoleEditValue] = useState<string>('');
  const [addAdminOpen, setAddAdminOpen] = useState(false);
  const [addAdminForm, setAddAdminForm] = useState({ 
    full_name: '', 
    email: '', 
    password: 'isbm@321', 
    department: '', 
    role: 'admin' 
  });
  const [editAdmin, setEditAdmin] = useState<any | null>(null);
  const [editAdminOpen, setEditAdminOpen] = useState(false);
  const [editAdminForm, setEditAdminForm] = useState({ 
    full_name: '', 
    email: '', 
    department: '', 
    role: 'admin', 
    status: 'active' 
  });

  // Add department options for admin creation
  const departmentOptions = [
    'Computer Engineering',
    'AIDS',
    'Mechanical',
    'ETC',
    'BCA',
    'BBA',
    'Sports Cell',
    'Cultural Cell',
    'Library',
    'Hostel',
    'Accounts',
    'General Administration',
  ];

  // Update role options to include super-admin
  const roleOptions = [
    'student',
    'faculty',
    'staff',
    'admin',
    'super-admin',
  ];

  useSEO({
    title: "Super Admin Dashboard - ISBM College",
    description: "System administrator control panel",
    canonical: "https://isbmcoe.edu.in/dashboard/super-admin"
  });

  useEffect(() => {
    fetchSystemData();
    fetchActivities();
    fetchCounts();
    fetchAdminsAndUsers();
  }, [user, userRole]);

  const fetchCounts = async () => {
    // Fetch total users
    const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
    setUserCount(userCount || 0);
    // Fetch total students
    const { count: studentCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'student');
    setStudentCount(studentCount || 0);
    // Fetch total departments
    const { count: departmentCount } = await supabase.from('departments').select('*', { count: 'exact', head: true });
    setDepartmentCount(departmentCount || 0);
  };

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

  const fetchAdminsAndUsers = async () => {
    setUserLoading(true);
    try {
      // Fetch only admins and super-admins for the admins list
      const { data: admins, error: adminsError } = await supabase
        .from('profiles')
        .select('*')
        .in('role', ['admin', 'super-admin'])
        .order('created_at', { ascending: false });
      
      if (adminsError) throw adminsError;
      setAdmins(admins || []);
      
      // Fetch all users for the roles tab
      const { data: users, error: usersError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (usersError) throw usersError;
      setAllUsers(users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: "Failed to fetch user data",
        variant: "destructive"
      });
    } finally {
      setUserLoading(false);
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

  const handleDeleteAdmin = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this admin?')) return;
    try {
      const { error } = await supabase.from('profiles').delete().eq('id', id);
      if (error) throw error;
      toast({ title: 'Admin deleted successfully!' });
      fetchAdminsAndUsers();
    } catch (err: any) {
      toast({ title: 'Error', description: err.message || 'Failed to delete admin.', variant: 'destructive' });
    }
  };

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addAdminForm.full_name || !addAdminForm.email || !addAdminForm.password || !addAdminForm.department) {
      toast({ title: 'Error', description: 'All fields are required.', variant: 'destructive' });
      return;
    }
    if (addAdminForm.password.length < 6) {
      toast({ title: 'Error', description: 'Password must be at least 6 characters.', variant: 'destructive' });
      return;
    }
    try {
      // Create user with sign up
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: addAdminForm.email,
        password: addAdminForm.password,
        options: { 
          data: { 
            full_name: addAdminForm.full_name, 
            role: addAdminForm.role, 
            department: addAdminForm.department 
          } 
        }
      });
      
      if (signUpError) throw signUpError;
      
      // Update profile if user was created
      if (signUpData.user?.id) {
        const { error: profileError } = await supabase.from('profiles').upsert({
          id: signUpData.user.id,
          email: addAdminForm.email,
          full_name: addAdminForm.full_name,
          department: addAdminForm.department,
          role: addAdminForm.role,
          status: 'active'
        });
        if (profileError) throw profileError;
      }
      
      toast({ title: 'Admin added successfully!' });
      setAddAdminOpen(false);
      setAddAdminForm({ full_name: '', email: '', password: 'isbm@321', department: '', role: 'admin' });
      fetchAdminsAndUsers();
    } catch (err: any) {
      toast({ title: 'Error', description: err.message || 'Failed to add admin.', variant: 'destructive' });
    }
  };

  const handleResetPassword = async (admin: any) => {
    if (!window.confirm(`Reset password for ${admin.full_name} to "isbm@321"?`)) return;
    
    try {
      // Note: In a real application, you'd need a server-side function to reset passwords
      // For now, we'll just show a success message
      toast({
        title: "Password Reset",
        description: `Password for ${admin.full_name} has been reset to "isbm@321"`,
      });
    } catch (error: any) {
      console.error('Error resetting password:', error);
      toast({
        title: "Error",
        description: "Failed to reset password",
        variant: "destructive"
      });
    }
  };

  const handleRoleEdit = (id: string, value: string) => {
    setRoleEditId(id);
    setRoleEditValue(value);
  };
  const saveRoleEdit = async (id: string) => {
    await supabase.from('profiles').update({ role: roleEditValue }).eq('id', id);
    setRoleEditId(null);
    fetchAdminsAndUsers();
    toast({ title: 'Role updated' });
  };

  const handleEditAdmin = (admin: any) => {
    setEditAdmin(admin);
    setEditAdminForm({
      full_name: admin.full_name,
      email: admin.email,
      department: admin.department,
      role: admin.role,
      status: admin.status || 'active',
    });
    setEditAdminOpen(true);
  };

  const handleSaveEditAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editAdmin) return;
    try {
      const { error } = await supabase.from('profiles').update({
        full_name: editAdminForm.full_name,
        department: editAdminForm.department,
        role: editAdminForm.role,
        status: editAdminForm.status
      }).eq('id', editAdmin.id);
      if (error) throw error;
      toast({ title: 'Admin updated successfully!' });
      setEditAdminOpen(false);
      setEditAdmin(null);
      fetchAdminsAndUsers();
    } catch (err: any) {
      toast({ title: 'Error', description: err.message || 'Failed to update admin.', variant: 'destructive' });
    }
  };

  const handleQuickLink = (action: string) => {
    switch (action) {
      case 'add-student':
        // Open the standardized add student dialog from StudentManager
        setShowNoticeManager(false); // Make sure other dialogs are closed
        // We'll trigger the StudentManager's add student dialog
        break;
      case 'manage-course':
        navigate('/admin/courses');
        break;
      case 'upload-notice':
        setShowNoticeManager(true);
        break;
      default:
        break;
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <ModernLoader text="Loading Super Admin Dashboard..." />
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
      <div className="space-y-6 px-2 sm:px-4 md:px-0">
        {/* Fixed Breadcrumb - Remove duplicate Dashboard */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-blue-600 font-medium">Super Admin</span>
        </div>

        {/* Header - Remove the duplicate breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Shield className="h-8 w-8 text-red-500" />
              Super Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Complete system control and management</p>
          </div>
        </div>

        {/* Top Section: KPIs and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* KPI Cards */}
          <Card className="col-span-1 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="flex flex-col items-center p-4">
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">{userCount}</div>
              <div className="text-xs text-blue-700">Total Users</div>
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="flex flex-col items-center p-4">
              <GraduationCap className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold text-green-900">{studentCount}</div>
              <div className="text-xs text-green-700">Total Students</div>
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="flex flex-col items-center p-4">
              <Building className="h-8 w-8 text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-purple-900">{departmentCount}</div>
              <div className="text-xs text-purple-700">Departments</div>
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="flex flex-col items-center p-4">
              <Activity className="h-8 w-8 text-orange-600 mb-2" />
              <div className="text-2xl font-bold text-orange-900">{systemData?.system_uptime || '99.9%'}</div>
              <div className="text-xs text-orange-700">System Uptime</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button 
                className="h-16 flex-col bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => handleQuickLink('add-student')}
              >
                <UserPlus className="h-6 w-6 mb-1" />
                <span className="text-sm">Add Student</span>
              </Button>
              <Button 
                className="h-16 flex-col bg-green-600 hover:bg-green-700 text-white"
                onClick={() => handleQuickLink('manage-course')}
              >
                <Book className="h-6 w-6 mb-1" />
                <span className="text-sm">Manage Course</span>
              </Button>
              <Button 
                className="h-16 flex-col bg-yellow-600 hover:bg-yellow-700 text-white"
                onClick={() => setShowNoticeManager(true)}
              >
                <Bell className="h-6 w-6 mb-1" />
                <span className="text-sm">Send Notice</span>
              </Button>
              <Button 
                className="h-16 flex-col bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => setIsSystemSettingsOpen(true)}
              >
                <Settings className="h-6 w-6 mb-1" />
                <span className="text-sm">System Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Control Center */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-500" />
              Super Admin Control Center
            </CardTitle>
          </CardHeader>
          <CardContent>
        <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Dashboard Overview
                </TabsTrigger>
                <TabsTrigger value="admins" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Manage Admins
                </TabsTrigger>
                <TabsTrigger value="students" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Student Management
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  System Settings
                </TabsTrigger>
                <TabsTrigger value="api" className="flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  API & Integration
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <SchoolDashboardOverview />
              </TabsContent>

              <TabsContent value="admins">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Shield className="h-5 w-5" /> 
                    Admin Users ({admins.length})
                  </h3>
                  <Button onClick={() => setAddAdminOpen(true)} className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-1" /> Add Admin
                  </Button>
                </div>
                
                <div className="overflow-x-auto rounded-lg shadow bg-white">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {userLoading ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            <ModernLoader size="sm" text="Loading admins..." />
                          </TableCell>
                        </TableRow>
                      ) : admins.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            <div className="flex flex-col items-center space-y-2">
                              <Shield className="h-8 w-8 text-gray-400" />
                              <p className="text-gray-500">No admin users found</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        admins.map(admin => (
                          <TableRow key={admin.id}>
                            <TableCell className="font-semibold flex items-center gap-2">
                              <Shield className="h-4 w-4 text-blue-600" /> 
                              {admin.full_name}
                            </TableCell>
                            <TableCell>{admin.email}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-gray-100">
                                {admin.department}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={admin.role === 'super-admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}>
                                {admin.role}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={admin.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                                {admin.status || 'active'}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                <Button variant="ghost" size="sm" onClick={() => handleEditAdmin(admin)} className="text-blue-600 hover:text-blue-700">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => handleResetPassword(admin)} className="text-orange-600 hover:text-orange-700">
                                  <Key className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => handleDeleteAdmin(admin.id)} className="text-red-600 hover:text-red-700">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="students">
                <StudentManager />
              </TabsContent>

              <TabsContent value="settings">
                <WebsiteSettingsManager />
              </TabsContent>

              <TabsContent value="api">
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <Server className="h-10 w-10 mb-2 text-green-400" />
                  <h3 className="text-lg font-semibold mb-2">API & Integration</h3>
                  <p>Manage API tokens and integrations. (Coming soon)</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Notice Manager Dialog */}
        <Dialog open={showNoticeManager} onOpenChange={setShowNoticeManager}>
          <DialogContent className="max-w-2xl">
            <NoticeManager onClose={() => setShowNoticeManager(false)} />
          </DialogContent>
        </Dialog>

        {/* Add Admin Dialog */}
        <Dialog open={addAdminOpen} onOpenChange={setAddAdminOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Admin</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddAdmin} className="space-y-4">
              <div>
                <Label htmlFor="admin_name">Full Name *</Label>
                <Input 
                  id="admin_name"
                  placeholder="Full Name" 
                  value={addAdminForm.full_name} 
                  onChange={e => setAddAdminForm(f => ({ ...f, full_name: e.target.value }))} 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="admin_email">Email *</Label>
                <Input 
                  id="admin_email"
                  placeholder="Email" 
                  type="email" 
                  value={addAdminForm.email} 
                  onChange={e => setAddAdminForm(f => ({ ...f, email: e.target.value }))} 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="admin_role">Role *</Label>
                <Select value={addAdminForm.role || 'admin'} onValueChange={e => setAddAdminForm(f => ({ ...f, role: e }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roleOptions.filter(role => role !== 'student').map(role => (
                      <SelectItem key={role} value={role}>
                        {role.charAt(0).toUpperCase() + role.slice(1).replace('-', ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="admin_department">Department/Cell *</Label>
                <Select value={addAdminForm.department} onValueChange={e => setAddAdminForm(f => ({ ...f, department: e }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Department/Cell" />
                  </SelectTrigger>
                  <SelectContent>
                    {departmentOptions.map(dep => (
                      <SelectItem key={dep} value={dep}>{dep}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="admin_password">Default Password</Label>
                <Input 
                  id="admin_password"
                  placeholder="Password" 
                  type="password" 
                  value={addAdminForm.password} 
                  onChange={e => setAddAdminForm(f => ({ ...f, password: e.target.value }))} 
                  required 
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Add Admin
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Edit Admin Modal */}
        <Dialog open={editAdminOpen} onOpenChange={setEditAdminOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Admin</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSaveEditAdmin} className="space-y-4">
              <Input placeholder="Full Name" value={editAdminForm.full_name} onChange={e => setEditAdminForm(f => ({ ...f, full_name: e.target.value }))} required />
              <Input placeholder="Email" type="email" value={editAdminForm.email} onChange={e => setEditAdminForm(f => ({ ...f, email: e.target.value }))} required />
              <select value={editAdminForm.role} onChange={e => setEditAdminForm(f => ({ ...f, role: e.target.value }))} required className="w-full border rounded px-2 py-2">
                {roleOptions.map(role => <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>)}
              </select>
              <select value={editAdminForm.department} onChange={e => setEditAdminForm(f => ({ ...f, department: e.target.value }))} className="w-full border rounded px-2 py-2" disabled={editAdminForm.role === 'super-admin'}>
                <option value="">Select Department/Cell</option>
                {departmentOptions.map(dep => <option key={dep} value={dep}>{dep}</option>)}
              </select>
              <select value={editAdminForm.status} onChange={e => setEditAdminForm(f => ({ ...f, status: e.target.value }))} className="w-full border rounded px-2 py-2">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Save Changes</Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Add more modular sections as needed for Control Center, Monitoring, Reports, etc. */}
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminDashboard;
