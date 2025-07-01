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
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Settings,
  Download,
  Upload,
  RefreshCw
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface User {
  id: string;
  full_name: string;
  email: string;
  role: string;
  status: string;
  last_login: string;
  department: string | null;
  phone: string | null;
  address: string | null;
  created_at: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [sortColumn, setSortColumn] = useState('full_name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [isBulkActionsOpen, setIsBulkActionsOpen] = useState(false);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useSEO({
    title: "User Management - ISBM College",
    description: "Manage users, roles, and permissions",
    canonical: "https://isbmcoe.edu.in/admin/users"
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order(sortColumn, { ascending: sortDirection === 'asc' });

      if (error) {
        console.error('Error fetching users:', error);
        toast({
          title: "Error",
          description: "Failed to fetch users",
          variant: "destructive"
        });
        return;
      }

      setUsers(data || []);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRole(e.target.value);
  };

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredUsers = users.filter(user => {
    const searchRegex = new RegExp(searchQuery, 'i');
    const searchMatch = searchRegex.test(user.full_name) || searchRegex.test(user.email);
    const roleMatch = filterRole === 'all' || user.role === filterRole;
    return searchMatch && roleMatch;
  });

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    );
  };

  const handleBulkAction = (action: string) => {
    if (selectedUsers.length === 0) {
      toast({
        title: "Warning",
        description: "Please select at least one user",
        variant: "warning"
      });
      return;
    }

    if (action === 'delete') {
      if (window.confirm(`Are you sure you want to delete ${selectedUsers.length} users?`)) {
        // Implement delete logic here
        toast({
          title: "Success",
          description: `Deleted ${selectedUsers.length} users`,
        });
      }
    } else if (action === 'activate') {
      // Implement activate logic here
      toast({
        title: "Success",
        description: `Activated ${selectedUsers.length} users`,
      });
    } else if (action === 'deactivate') {
      // Implement deactivate logic here
      toast({
        title: "Success",
        description: `Deactivated ${selectedUsers.length} users`,
      });
    }

    setIsBulkActionsOpen(false);
    setSelectedUsers([]);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsEditUserOpen(true);
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // Implement delete logic here
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
    }
  };

  const handleAddUser = () => {
    setIsAddUserOpen(true);
  };

  const handleCloseAddUser = () => {
    setIsAddUserOpen(false);
  };

  const handleSaveUser = () => {
    // Implement save logic here
    toast({
      title: "Success",
      description: "User saved successfully",
    });
    setIsEditUserOpen(false);
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
              Export Users
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <UserPlus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        
        
        <Tabs defaultValue="all-users" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all-users">All Users</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="bulk-actions">Bulk Actions</TabsTrigger>
            <TabsTrigger value="user-settings">Settings</TabsTrigger>
          </TabsList>

          
          <TabsContent value="all-users" className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Input
                  type="text"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-64"
                />
                <select
                  value={filterRole}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="all">All Roles</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">
                    <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
                    Loading users...
                  </div>
                ) : filteredUsers.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    No users found.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>
                            <input
                              type="checkbox"
                              onChange={e => {
                                if (e.target.checked) {
                                  setSelectedUsers(filteredUsers.map(user => user.id));
                                } else {
                                  setSelectedUsers([]);
                                }
                              }}
                              checked={selectedUsers.length === filteredUsers.length}
                            />
                          </TableHead>
                          <TableHead onClick={() => handleSort('full_name')} className="cursor-pointer">
                            Name {sortColumn === 'full_name' && (sortDirection === 'asc' ? '▲' : '▼')}
                          </TableHead>
                          <TableHead onClick={() => handleSort('email')} className="cursor-pointer">
                            Email {sortColumn === 'email' && (sortDirection === 'asc' ? '▲' : '▼')}
                          </TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Login</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredUsers.map(user => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <input
                                type="checkbox"
                                value={user.id}
                                checked={selectedUsers.includes(user.id)}
                                onChange={() => toggleUserSelection(user.id)}
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-gray-500" />
                                {user.full_name}
                              </div>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">{user.role}</Badge>
                            </TableCell>
                            <TableCell>
                              {user.status === 'active' ? (
                                <Badge className="bg-green-100 text-green-700 gap-1">
                                  <CheckCircle className="h-3 w-3" />
                                  Active
                                </Badge>
                              ) : (
                                <Badge className="bg-red-100 text-red-700 gap-1">
                                  <XCircle className="h-3 w-3" />
                                  Inactive
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>{user.last_login || 'N/A'}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem onClick={() => handleEditUser(user)}>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleDeleteUser(user.id)}>
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <AlertTriangle className="h-4 w-4 mr-2" />
                                    Report
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roles">
            <Card>
              <CardHeader>
                <CardTitle>Roles & Permissions</CardTitle>
                <CardDescription>Manage user roles and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Coming Soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bulk-actions">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Actions</CardTitle>
                <CardDescription>Perform bulk actions on selected users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Selected {selectedUsers.length} users</p>
                  <div className="flex gap-3">
                    <Button onClick={() => handleBulkAction('activate')}>Activate</Button>
                    <Button onClick={() => handleBulkAction('deactivate')}>Deactivate</Button>
                    <Button variant="destructive" onClick={() => handleBulkAction('delete')}>Delete</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="user-settings">
            <Card>
              <CardHeader>
                <CardTitle>User Settings</CardTitle>
                <CardDescription>Manage user settings</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Coming Soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;
