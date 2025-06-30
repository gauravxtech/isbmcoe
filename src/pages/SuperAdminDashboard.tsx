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
  Book,
  User
} from 'lucide-react';
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
  const [addAdminForm, setAddAdminForm] = useState({ full_name: '', email: '', password: '', department: '', role: 'admin' });
  const [editAdmin, setEditAdmin] = useState<any | null>(null);
  const [editAdminOpen, setEditAdminOpen] = useState(false);
  const [editAdminForm, setEditAdminForm] = useState({ full_name: '', email: '', department: '', role: 'admin', status: 'active' });

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
    const { count: studentCount } = await supabase.from('students').select('*', { count: 'exact', head: true });
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
    // Fetch only admins and super-admins for the admins list
    const { data: admins } = await supabase
      .from('profiles')
      .select('*')
      .in('role', ['admin', 'super-admin']);
    setAdmins(admins || []);
    // Fetch all users for the roles tab
    const { data: users } = await supabase.from('profiles').select('*');
    setAllUsers(users || []);
    setUserLoading(false);
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
    setAddAdminOpen(true);
    if (!addAdminForm.full_name || !addAdminForm.email || !addAdminForm.password || !addAdminForm.department) {
      toast({ title: 'Error', description: 'All fields are required.', variant: 'destructive' });
      return;
    }
    if (addAdminForm.password.length < 6) {
      toast({ title: 'Error', description: 'Password must be at least 6 characters.', variant: 'destructive' });
      return;
    }
    try {
      // 1. Check if user exists in Auth
      const { data: existingUser, error: fetchError } = await supabase.auth.admin.getUserByEmail(addAdminForm.email);
      let userId = existingUser?.user?.id;
      if (!userId) {
        // 2. If not, create in Auth
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: addAdminForm.email,
          password: addAdminForm.password,
          options: { data: { full_name: addAdminForm.full_name, role: addAdminForm.role, department: addAdminForm.department } }
        });
        if (signUpError) throw signUpError;
        userId = signUpData.user?.id;
      }
      // 3. Upsert to profiles
      const { error: profileError } = await supabase.from('profiles').upsert({
        id: userId,
        email: addAdminForm.email,
        full_name: addAdminForm.full_name,
        department: addAdminForm.department,
        role: addAdminForm.role,
        status: 'active'
      });
      if (profileError) throw profileError;
      toast({ title: 'Admin added successfully!' });
      setAddAdminOpen(false);
      setAddAdminForm({ full_name: '', email: '', password: '', department: '', role: 'admin' });
      fetchAdminsAndUsers();
    } catch (err: any) {
      toast({ title: 'Error', description: err.message || 'Failed to add admin.', variant: 'destructive' });
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
        navigate('/admin/students/add');
        break;
      case 'manage-course':
        navigate('/admin/courses');
        break;
      case 'upload-notice':
        setIsAddUserOpen(true); // Or open a dedicated notice modal
        break;
      default:
        break;
    }
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
      <div className="space-y-6 px-2 sm:px-4 md:px-0">
        {/* Top Section: KPIs and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* KPI Cards */}
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center p-4">
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <div className="text-lg font-bold">{userCount}</div>
              <div className="text-xs text-gray-500">Active Users</div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center p-4">
              <GraduationCap className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-lg font-bold">{studentCount}</div>
              <div className="text-xs text-gray-500">Total Students</div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center p-4">
              <Building className="h-8 w-8 text-purple-600 mb-2" />
              <div className="text-lg font-bold">{departmentCount}</div>
              <div className="text-xs text-gray-500">Departments</div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardContent className="flex flex-col items-center p-4">
              <Activity className="h-8 w-8 text-orange-600 mb-2" />
              <div className="text-lg font-bold">{systemData?.system_uptime || '99.9%'}</div>
              <div className="text-xs text-gray-500">System Uptime</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2" onClick={() => handleQuickLink('add-student')}>
            <UserPlus className="h-5 w-5" /> Add Student
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2" onClick={() => handleQuickLink('manage-course')}>
            <Book className="h-5 w-5" /> Manage Course
          </Button>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white flex items-center gap-2" onClick={() => handleQuickLink('upload-notice')}>
            <FileText className="h-5 w-5" /> Upload Notice
          </Button>
        </div>

        {/* Widgets Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Graph</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 flex items-center justify-center text-gray-400">[Attendance Chart]</div>
              </CardContent>
            </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top-Performing Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 flex items-center justify-center text-gray-400">[Top Students List]</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Exams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 flex items-center justify-center text-gray-400">[Upcoming Exams Table]</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Super Admin Features */}
        <Card>
          <CardHeader>
            <CardTitle>Super Admin Control Center</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="admins" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="admins">Manage Admins</TabsTrigger>
                <TabsTrigger value="roles">Role Management</TabsTrigger>
                <TabsTrigger value="settings">System Settings</TabsTrigger>
                <TabsTrigger value="api">API & Integration</TabsTrigger>
              </TabsList>
              <TabsContent value="admins">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2"><Shield className="h-5 w-5" /> Admin Users</h3>
                  <Button onClick={() => setAddAdminOpen(true)} className="bg-blue-600 hover:bg-blue-700"><Plus className="h-4 w-4 mr-1" /> Add Admin</Button>
                </div>
                <Dialog open={addAdminOpen} onOpenChange={setAddAdminOpen}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Admin</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddAdmin} className="space-y-4">
                      <Input placeholder="Full Name" value={addAdminForm.full_name} onChange={e => setAddAdminForm(f => ({ ...f, full_name: e.target.value }))} required />
                      <Input placeholder="Email" type="email" value={addAdminForm.email} onChange={e => setAddAdminForm(f => ({ ...f, email: e.target.value }))} required />
                      <select value={addAdminForm.role || 'admin'} onChange={e => setAddAdminForm(f => ({ ...f, role: e.target.value }))} required className="w-full border rounded px-2 py-2">
                        {roleOptions.map(role => <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>)}
                      </select>
                      <select value={addAdminForm.department || ''} onChange={e => setAddAdminForm(f => ({ ...f, department: e.target.value }))} className="w-full border rounded px-2 py-2" disabled={addAdminForm.role === 'super-admin'}>
                        <option value="">Select Department/Cell</option>
                        {departmentOptions.map(dep => <option key={dep} value={dep}>{dep}</option>)}
                      </select>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Add Admin</Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <div className="overflow-x-auto rounded shadow bg-white mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {userLoading ? (
                        <TableRow><TableCell colSpan={4} className="text-center">Loading...</TableCell></TableRow>
                      ) : admins.length === 0 ? (
                        <TableRow><TableCell colSpan={4} className="text-center">No admin users found.</TableCell></TableRow>
                      ) : admins.map(admin => (
                        <TableRow key={admin.id}>
                          <TableCell className="font-semibold flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600" /> {admin.full_name}</TableCell>
                          <TableCell>{admin.email}</TableCell>
                          <TableCell><Badge className={admin.role === 'super-admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}>{admin.role}</Badge></TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => handleEditAdmin(admin)} className="text-blue-600 hover:text-blue-700 mr-2"><Edit className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDeleteAdmin(admin.id)} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="roles">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2"><Users className="h-5 w-5" /> User Roles</h3>
                </div>
                <div className="overflow-x-auto rounded shadow bg-white">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {userLoading ? (
                        <TableRow><TableCell colSpan={5} className="text-center">Loading...</TableCell></TableRow>
                      ) : allUsers.length === 0 ? (
                        <TableRow><TableCell colSpan={5} className="text-center">No users found.</TableCell></TableRow>
                      ) : allUsers.map(user => (
                        <TableRow key={user.id}>
                          <TableCell className="font-semibold flex items-center gap-2"><User className="h-4 w-4 text-gray-600" /> {user.full_name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            {roleEditId === user.id ? (
                              <>
                                <select value={roleEditValue} onChange={e => setRoleEditValue(e.target.value)} className="border rounded px-2 py-1 mr-2">
                                  {roleOptions.map(role => <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>)}
                                </select>
                                <select value={user.department || ''} onChange={e => setAllUsers(prev => prev.map(u => u.id === user.id ? { ...u, department: e.target.value } : u))} className="border rounded px-2 py-1" disabled={roleEditValue === 'super-admin'}>
                                  <option value="">Select Department/Cell</option>
                                  {departmentOptions.map(dep => <option key={dep} value={dep}>{dep}</option>)}
                                </select>
                              </>
                            ) : (
                              <>
                                <Badge className={user.role === 'admin' ? 'bg-blue-100 text-blue-800' : user.role === 'super-admin' ? 'bg-red-100 text-red-800' : user.role === 'faculty' ? 'bg-green-100 text-green-800' : user.role === 'staff' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}>{user.role}</Badge>
                                {user.department && <Badge className="ml-2 bg-gray-200 text-gray-700">{user.department}</Badge>}
                              </>
                            )}
                          </TableCell>
                          <TableCell>
                            {roleEditId === user.id ? (
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white mr-2" onClick={() => saveRoleEdit(user.id)}>Save</Button>
                            ) : (
                              <Button variant="ghost" size="sm" onClick={() => handleRoleEdit(user.id, user.role)}><Edit className="h-4 w-4" /></Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <Settings className="h-10 w-10 mb-2 text-blue-400" />
                  <h3 className="text-lg font-semibold mb-2">System Settings</h3>
                  <p>Configure logo, SMTP, SMS gateway, and more. (Coming soon)</p>
                </div>
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
