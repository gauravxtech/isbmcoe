import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  UserPlus, 
  UserX, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Edit, 
  Trash2, 
  MoreHorizontal,
  Shield,
  GraduationCap,
  Building,
  User
} from 'lucide-react';
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
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  role: string;
  department: string | null;
  phone: string | null;
  created_at: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    role: 'student',
    department: '',
    phone: '',
    password: ''
  });
  const { toast } = useToast();

  useSEO({
    title: "User Management - ISBM College",
    description: "Manage users, roles, and permissions",
    canonical: "https://isbmcoe.edu.in/admin/user-management"
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [users, searchTerm, selectedRole]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: "Failed to fetch users. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const filterUsers = () => {
    let filtered = [...users];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(user => 
        (user.full_name && user.full_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by role
    if (selectedRole !== 'all') {
      filtered = filtered.filter(user => user.role === selectedRole);
    }
    
    setFilteredUsers(filtered);
  };

  const handleAddUser = async () => {
    if (!newUser.fullName || !newUser.email || !newUser.department || !newUser.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      // Create user in auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: newUser.email,
        password: newUser.password,
        options: {
          data: {
            full_name: newUser.fullName,
            role: newUser.role
          }
        }
      });

      if (authError) throw authError;
      
      if (!authData.user) {
        throw new Error("User was not created");
      }

      // Update profile with additional info
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          department: newUser.department,
          phone: newUser.phone
        })
        .eq('id', authData.user.id);

      if (profileError) {
        console.error('Profile update error:', profileError);
      }

      toast({
        title: "Success",
        description: "User created successfully",
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
      fetchUsers();
    } catch (error: any) {
      console.error('Error adding user:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create user",
        variant: "destructive"
      });
    }
  };

  const handleEditUser = async () => {
    if (!selectedUser || !selectedUser.full_name) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: selectedUser.full_name,
          department: selectedUser.department,
          phone: selectedUser.phone,
          role: selectedUser.role
        })
        .eq('id', selectedUser.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "User updated successfully",
      });

      setIsEditUserOpen(false);
      fetchUsers();
    } catch (error: any) {
      console.error('Error updating user:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to update user",
        variant: "destructive"
      });
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }

    try {
      // In a real application, you would need admin functions to delete a user from auth
      // For now, we'll just remove the profile
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "User deleted successfully",
      });

      fetchUsers();
    } catch (error: any) {
      console.error('Error deleting user:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete user",
        variant: "destructive"
      });
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super-admin':
      case 'admin':
        return <Shield className="h-4 w-4 text-red-500" />;
      case 'teacher':
      case 'hod':
      case 'principal':
      case 'dean':
        return <GraduationCap className="h-4 w-4 text-blue-500" />;
      case 'student':
        return <User className="h-4 w-4 text-green-500" />;
      default:
        return <Building className="h-4 w-4 text-purple-500" />;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'super-admin':
        return 'bg-red-100 text-red-800';
      case 'admin':
        return 'bg-orange-100 text-orange-800';
      case 'principal':
      case 'dean':
      case 'hod':
        return 'bg-purple-100 text-purple-800';
      case 'teacher':
        return 'bg-blue-100 text-blue-800';
      case 'student':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-500" />
              User Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Manage users, roles, and permissions</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>
                  <DialogDescription>
                    Create a new user account with specific role and permissions.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
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
                      onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                      placeholder="Enter password"
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
                      <option value="admin">Admin</option>
                      <option value="super-admin">Super Admin</option>
                      <option value="hod">HOD</option>
                      <option value="principal">Principal</option>
                      <option value="dean">Dean</option>
                      <option value="parent">Parent</option>
                      <option value="accountant">Accountant</option>
                      <option value="reception">Reception</option>
                      <option value="security">Security</option>
                      <option value="hostel">Hostel</option>
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
                  <div className="flex justify-end space-x-2 pt-4">
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
          </div>
        </div>

        <Tabs defaultValue="all-users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all-users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              All Users
            </TabsTrigger>
            <TabsTrigger value="roles" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Roles & Permissions
            </TabsTrigger>
            <TabsTrigger value="bulk" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Bulk Operations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all-users" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select 
                      className="border border-gray-300 rounded-md px-3 py-2"
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                    >
                      <option value="all">All Roles</option>
                      <option value="super-admin">Super Admin</option>
                      <option value="admin">Admin</option>
                      <option value="principal">Principal</option>
                      <option value="dean">Dean</option>
                      <option value="hod">HOD</option>
                      <option value="teacher">Teacher</option>
                      <option value="student">Student</option>
                      <option value="parent">Parent</option>
                      <option value="accountant">Accountant</option>
                      <option value="reception">Reception</option>
                      <option value="security">Security</option>
                      <option value="hostel">Hostel</option>
                    </select>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : filteredUsers.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No users found</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredUsers.map((user) => (
                      <div key={user.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {user.full_name ? user.full_name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-gray-900">{user.full_name || 'Unnamed User'}</h3>
                                <Badge className={getRoleBadgeColor(user.role)}>
                                  <div className="flex items-center gap-1">
                                    {getRoleIcon(user.role)}
                                    <span>{user.role}</span>
                                  </div>
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                                <span>{user.email}</span>
                                {user.department && <span>• {user.department}</span>}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Dialog open={isEditUserOpen && selectedUser?.id === user.id} onOpenChange={(open) => {
                              setIsEditUserOpen(open);
                              if (!open) setSelectedUser(null);
                            }}>
                              <DialogTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => setSelectedUser(user)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-md">
                                <DialogHeader>
                                  <DialogTitle>Edit User</DialogTitle>
                                  <DialogDescription>
                                    Update user information and role.
                                  </DialogDescription>
                                </DialogHeader>
                                {selectedUser && (
                                  <div className="space-y-4 mt-4">
                                    <div>
                                      <Label htmlFor="edit-fullName">Full Name</Label>
                                      <Input
                                        id="edit-fullName"
                                        value={selectedUser.full_name || ''}
                                        onChange={(e) => setSelectedUser({...selectedUser, full_name: e.target.value})}
                                        placeholder="Enter full name"
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="edit-email">Email</Label>
                                      <Input
                                        id="edit-email"
                                        value={selectedUser.email}
                                        disabled
                                        className="bg-gray-100"
                                      />
                                      <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                                    </div>
                                    <div>
                                      <Label htmlFor="edit-role">Role</Label>
                                      <select
                                        id="edit-role"
                                        value={selectedUser.role}
                                        onChange={(e) => setSelectedUser({...selectedUser, role: e.target.value})}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                      >
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="admin">Admin</option>
                                        <option value="super-admin">Super Admin</option>
                                        <option value="hod">HOD</option>
                                        <option value="principal">Principal</option>
                                        <option value="dean">Dean</option>
                                        <option value="parent">Parent</option>
                                        <option value="accountant">Accountant</option>
                                        <option value="reception">Reception</option>
                                        <option value="security">Security</option>
                                        <option value="hostel">Hostel</option>
                                      </select>
                                    </div>
                                    <div>
                                      <Label htmlFor="edit-department">Department</Label>
                                      <select
                                        id="edit-department"
                                        value={selectedUser.department || ''}
                                        onChange={(e) => setSelectedUser({...selectedUser, department: e.target.value})}
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
                                      <Label htmlFor="edit-phone">Phone Number</Label>
                                      <Input
                                        id="edit-phone"
                                        value={selectedUser.phone || ''}
                                        onChange={(e) => setSelectedUser({...selectedUser, phone: e.target.value})}
                                        placeholder="Enter phone number"
                                      />
                                    </div>
                                    <div className="flex justify-end space-x-2 pt-4">
                                      <Button variant="outline" onClick={() => setIsEditUserOpen(false)}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleEditUser}>
                                        Update User
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-red-600"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>View Profile</DropdownMenuItem>
                                <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                <DropdownMenuItem>Suspend Account</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Roles & Permissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-4">Role Hierarchy</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-red-50 border border-red-100 rounded-lg">
                        <Shield className="h-5 w-5 text-red-500 mr-3" />
                        <div className="flex-1">
                          <p className="font-semibold">Super Admin</p>
                          <p className="text-sm text-gray-600">Full system access and control</p>
                        </div>
                        <Badge className="bg-red-100 text-red-800">Highest</Badge>
                      </div>
                      
                      <div className="flex items-center p-3 bg-orange-50 border border-orange-100 rounded-lg">
                        <Shield className="h-5 w-5 text-orange-500 mr-3" />
                        <div className="flex-1">
                          <p className="font-semibold">Admin</p>
                          <p className="text-sm text-gray-600">Website and content management</p>
                        </div>
                        <Badge className="bg-orange-100 text-orange-800">High</Badge>
                      </div>
                      
                      <div className="flex items-center p-3 bg-purple-50 border border-purple-100 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-purple-500 mr-3" />
                        <div className="flex-1">
                          <p className="font-semibold">Principal / Dean / HOD</p>
                          <p className="text-sm text-gray-600">Academic administration</p>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">Medium</Badge>
                      </div>
                      
                      <div className="flex items-center p-3 bg-blue-50 border border-blue-100 rounded-lg">
                        <User className="h-5 w-5 text-blue-500 mr-3" />
                        <div className="flex-1">
                          <p className="font-semibold">Teacher</p>
                          <p className="text-sm text-gray-600">Course and student management</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">Standard</Badge>
                      </div>
                      
                      <div className="flex items-center p-3 bg-green-50 border border-green-100 rounded-lg">
                        <User className="h-5 w-5 text-green-500 mr-3" />
                        <div className="flex-1">
                          <p className="font-semibold">Student / Parent</p>
                          <p className="text-sm text-gray-600">Limited access to personal data</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Basic</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-4">Permission Management</h3>
                    <p className="text-gray-600 mb-4">
                      Permissions are managed through role-based access control. Each role has predefined permissions that determine what actions users can perform.
                    </p>
                    <Button variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Manage Role Permissions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bulk" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bulk Import</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Import multiple users from CSV file</p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-500">Upload CSV file with user data</p>
                        <Button variant="outline" className="mt-2">
                          <Upload className="h-4 w-4 mr-2" />
                          Choose File
                        </Button>
                      </div>
                      <div className="text-xs text-gray-500">
                        <p>Required columns: Name, Email, Role, Department</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Import Users
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bulk Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export All Users to CSV
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Bulk Assign Roles
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Password Reset to Selected Users
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <UserX className="h-4 w-4 mr-2" />
                      Deactivate Selected Users
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Selected Users
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;