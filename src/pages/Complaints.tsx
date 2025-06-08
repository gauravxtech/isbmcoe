
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Eye, Edit, Trash2, AlertCircle, CheckCircle, Clock, User } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useSEO } from '@/hooks/useSEO';

const Complaints = () => {
  useSEO({
    title: "Complaints Management - ISBM College Admin",
    description: "Manage and track student, parent, and staff complaints",
    canonical: "https://isbmcoe.edu.in/admin/complaints"
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const complaints = [
    {
      id: 'C001',
      complainantName: 'Alice Johnson',
      complainantType: 'Parent',
      complaintDate: '2024-11-20',
      complaintTime: '09:00',
      description: 'The cafeteria food quality has deteriorated significantly.',
      status: 'Resolved',
      department: 'Administration',
      assignedTo: 'John Smith',
      resolutionDate: '2024-11-21',
      priority: 'Medium',
      avatar: 'AJ'
    },
    {
      id: 'C002',
      complainantName: 'David Brown',
      complainantType: 'Student',
      complaintDate: '2024-11-21',
      complaintTime: '13:15',
      description: 'The chemistry lab equipment is outdated and not working properly.',
      status: 'In Progress',
      department: 'Science Department',
      assignedTo: 'Ms. Clara Green',
      resolutionDate: null,
      priority: 'High',
      avatar: 'DB'
    },
    {
      id: 'C003',
      complainantName: 'Sarah Miller',
      complainantType: 'Staff',
      complaintDate: '2024-11-19',
      complaintTime: '10:45',
      description: 'Inappropriate behavior from students during class sessions.',
      status: 'Closed',
      department: 'Administration',
      assignedTo: 'Principal Adams',
      resolutionDate: '2024-11-20',
      priority: 'Medium',
      avatar: 'SM'
    },
    {
      id: 'C004',
      complainantName: 'Emily White',
      complainantType: 'Parent',
      complaintDate: '2024-11-22',
      complaintTime: '11:30',
      description: 'The college bus service has been consistently late.',
      status: 'Open',
      department: 'Transportation',
      assignedTo: 'Mr. Alan Brown',
      resolutionDate: null,
      priority: 'High',
      avatar: 'EW'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'in progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'closed': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getComplainantTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'parent': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'student': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'staff': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredComplaints = complaints.filter(complaint => {
    const matchesSearch = complaint.complainantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || complaint.status.toLowerCase().replace(' ', '') === statusFilter;
    const matchesPriority = priorityFilter === 'all' || complaint.priority.toLowerCase() === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Complaints Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Track and resolve student, parent, and staff complaints</p>
          </div>
          <Button className="bg-college-primary hover:bg-college-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add New Complaint
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, description, or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="inprogress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Complaints</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">89</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Open Complaints</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">In Progress</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">23</p>
                </div>
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                  <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Resolved</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">54</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Complaints Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Complainant</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Details</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Description</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Priority</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Status</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Assigned To</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredComplaints.map((complaint) => (
                    <tr key={complaint.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-college-primary rounded-full flex items-center justify-center text-white font-semibold">
                            {complaint.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{complaint.complainantName}</p>
                            <Badge className={getComplainantTypeColor(complaint.complainantType)}>
                              {complaint.complainantType}
                            </Badge>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{complaint.complaintDate}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{complaint.complaintTime}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{complaint.department}</p>
                        </div>
                      </td>
                      <td className="p-4 max-w-xs">
                        <p className="text-sm text-gray-900 dark:text-white truncate">{complaint.description}</p>
                      </td>
                      <td className="p-4">
                        <Badge className={getPriorityColor(complaint.priority)}>
                          {complaint.priority}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(complaint.status)}>
                          {complaint.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="text-sm">
                          <p className="font-medium text-gray-900 dark:text-white">{complaint.assignedTo}</p>
                          {complaint.resolutionDate && (
                            <p className="text-xs text-gray-500 dark:text-gray-400">Resolved: {complaint.resolutionDate}</p>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Complaints;
