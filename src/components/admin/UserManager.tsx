
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Mail,
  Phone,
  Calendar,
  User,
  Shield,
  GraduationCap
} from 'lucide-react';

const UserManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@isbm.ac.in',
      role: 'Faculty',
      department: 'Computer Engineering',
      status: 'Active',
      joinDate: '2020-08-15',
      lastLogin: '2024-01-15 09:30 AM'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@isbm.ac.in',
      role: 'Admin',
      department: 'Administration',
      status: 'Active',
      joinDate: '2019-06-10',
      lastLogin: '2024-01-15 08:45 AM'
    },
    {
      id: 3,
      name: 'Rahul Patel',
      email: 'rahul.patel@student.isbm.ac.in',
      role: 'Student',
      department: 'Computer Engineering',
      status: 'Active',
      joinDate: '2023-07-01',
      lastLogin: '2024-01-14 06:20 PM'
    },
    {
      id: 4,
      name: 'Dr. Neha Gupta',
      email: 'neha.gupta@isbm.ac.in',
      role: 'Faculty',
      department: 'Mechanical Engineering',
      status: 'Active',
      joinDate: '2021-03-20',
      lastLogin: '2024-01-15 10:15 AM'
    },
    {
      id: 5,
      name: 'Amit Singh',
      email: 'amit.singh@isbm.ac.in',
      role: 'Staff',
      department: 'Placement Cell',
      status: 'Inactive',
      joinDate: '2022-01-12',
      lastLogin: '2024-01-10 04:30 PM'
    }
  ];

  const roles = [
    { value: 'all', label: 'All Roles' },
    { value: 'admin', label: 'Admin' },
    { value: 'faculty', label: 'Faculty' },
    { value: 'staff', label: 'Staff' },
    { value: 'student', label: 'Student' }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role.toLowerCase() === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin': return Shield;
      case 'faculty': return GraduationCap;
      case 'student': return User;
      default: return User;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'faculty': return 'bg-blue-100 text-blue-800';
      case 'student': return 'bg-green-100 text-green-800';
      case 'staff': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-600">Manage students, faculty, staff, and administrators</p>
        </div>
        <Button className="bg-college-primary hover:bg-blue-800">
          <Plus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>

      <Tabs defaultValue="user-list" className="space-y-6">
        <TabsList>
          <TabsTrigger value="user-list">User List</TabsTrigger>
          <TabsTrigger value="add-user">Add User</TabsTrigger>
          <TabsTrigger value="bulk-operations">Bulk Operations</TabsTrigger>
        </TabsList>

        <TabsContent value="user-list">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Users ({filteredUsers.length})</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <select 
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    {roles.map(role => (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredUsers.map((user) => {
                  const RoleIcon = getRoleIcon(user.role);
                  return (
                    <div key={user.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-college-primary rounded-full flex items-center justify-center text-white font-semibold">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="flex items-center space-x-3">
                              <h3 className="font-semibold text-gray-900">{user.name}</h3>
                              <Badge className={getRoleBadgeColor(user.role)}>
                                <RoleIcon className="h-3 w-3 mr-1" />
                                {user.role}
                              </Badge>
                              <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                                {user.status}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-1" />
                                {user.email}
                              </div>
                              <div className="flex items-center">
                                <GraduationCap className="h-4 w-4 mr-1" />
                                {user.department}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Joined {user.joinDate}
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Last login: {user.lastLogin}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="add-user">
          <Card>
            <CardHeader>
              <CardTitle>Add New User</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter email address" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="role">Role</Label>
                    <select id="role" className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option>Student</option>
                      <option>Faculty</option>
                      <option>Staff</option>
                      <option>Admin</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <select id="department" className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option>Computer Engineering</option>
                      <option>Mechanical Engineering</option>
                      <option>AI/ML</option>
                      <option>Electronics</option>
                      <option>Administration</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="employeeId">Employee/Student ID</Label>
                    <Input id="employeeId" placeholder="Enter ID" />
                  </div>
                  <div>
                    <Label htmlFor="joinDate">Join Date</Label>
                    <Input id="joinDate" type="date" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-college-primary hover:bg-blue-800">Create User</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bulk-operations">
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
                        Choose File
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500">
                      <p>Required columns: Name, Email, Role, Department</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-college-primary hover:bg-blue-800">
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
                    Export All Users to CSV
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Send Password Reset to Selected Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Deactivate Selected Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                    Delete Selected Users
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserManager;
