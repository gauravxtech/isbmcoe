
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Eye, Edit, Trash2, Clock, User, Building2, Phone } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useSEO } from '@/hooks/useSEO';

const VisitorsBook = () => {
  useSEO({
    title: "Visitors Book - ISBM College Admin",
    description: "Manage visitor entries and track campus visits",
    canonical: "https://isbmcoe.edu.in/admin/visitors"
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const visitors = [
    {
      id: 'V001',
      visitorName: 'John Doe',
      visitDate: '2024-11-22',
      visitTime: '10:30 AM',
      purpose: 'Meeting with teacher',
      contactNumber: '+1234567890',
      visitorType: 'Parent',
      departmentVisited: 'Mathematics Department',
      avatar: 'JD'
    },
    {
      id: 'V002',
      visitorName: 'Emily Smith',
      visitDate: '2024-11-22',
      visitTime: '11:00 AM',
      purpose: 'Parent-Teacher Conference',
      contactNumber: '+1987654321',
      visitorType: 'Parent',
      departmentVisited: 'Science Department',
      avatar: 'ES'
    },
    {
      id: 'V003',
      visitorName: 'David Johnson',
      visitDate: '2024-11-22',
      visitTime: '09:30 AM',
      purpose: 'Delivering supplies',
      contactNumber: '+1231231234',
      visitorType: 'Vendor',
      departmentVisited: 'Administration',
      avatar: 'DJ'
    },
    {
      id: 'V004',
      visitorName: 'Sarah Connor',
      visitDate: '2024-11-22',
      visitTime: '12:00 PM',
      purpose: 'Guest Speaker',
      contactNumber: '+4567891230',
      visitorType: 'Guest',
      departmentVisited: 'Social Studies Department',
      avatar: 'SC'
    },
    {
      id: 'V005',
      visitorName: 'Lisa Ray',
      visitDate: '2024-11-22',
      visitTime: '01:00 PM',
      purpose: 'Student pick-up',
      contactNumber: '+3216549870',
      visitorType: 'Parent',
      departmentVisited: 'Main Office',
      avatar: 'LR'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'parent': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'vendor': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'guest': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'contractor': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'volunteer': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredVisitors = visitors.filter(visitor => {
    const matchesSearch = visitor.visitorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visitor.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visitor.departmentVisited.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || visitor.visitorType.toLowerCase() === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Visitors Book</h1>
            <p className="text-gray-600 dark:text-gray-400">Track and manage campus visitor entries</p>
          </div>
          <Button className="bg-college-primary hover:bg-college-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add New Visitor
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, purpose, or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="vendor">Vendor</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                  <SelectItem value="contractor">Contractor</SelectItem>
                  <SelectItem value="volunteer">Volunteer</SelectItem>
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
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Today's Visitors</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Weekly Visitors</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">142</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <Building2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Parents</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">18</p>
                </div>
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                  <User className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Vendors/Guests</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">6</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <Building2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visitors Table */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Visitor</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Visit Details</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Purpose</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Type</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Department</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVisitors.map((visitor) => (
                    <tr key={visitor.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-college-primary rounded-full flex items-center justify-center text-white font-semibold">
                            {visitor.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{visitor.visitorName}</p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Phone className="h-3 w-3 mr-1" />
                              {visitor.contactNumber}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{visitor.visitDate}</p>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Clock className="h-3 w-3 mr-1" />
                            {visitor.visitTime}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-sm text-gray-900 dark:text-white">{visitor.purpose}</p>
                      </td>
                      <td className="p-4">
                        <Badge className={getTypeColor(visitor.visitorType)}>
                          {visitor.visitorType}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <p className="text-sm text-gray-900 dark:text-white">{visitor.departmentVisited}</p>
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

export default VisitorsBook;
