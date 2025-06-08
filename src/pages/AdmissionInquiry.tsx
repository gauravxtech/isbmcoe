
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Eye, Edit, Trash2, Phone, Mail, Calendar, MapPin } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useSEO } from '@/hooks/useSEO';

const AdmissionInquiry = () => {
  useSEO({
    title: "Admission Inquiry - ISBM College Admin",
    description: "Manage admission inquiries and prospective student applications",
    canonical: "https://isbmcoe.edu.in/admin/admission-inquiry"
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const inquiries = [
    {
      id: 'INQ001',
      studentName: 'Alice Johnson',
      guardianName: 'Michael Johnson',
      contactNumber: '+1234567891',
      email: 'alice.johnson@example.com',
      dateOfInquiry: '2024-11-22',
      inquirySource: 'Website',
      status: 'Closed',
      followUpDate: '2024-11-29',
      assignedTo: 'Emily Clark',
      campusLocation: 'Main Campus',
      previousEducation: 'High School Diploma',
      courseInterested: 'Computer Engineering',
      avatar: 'AJ'
    },
    {
      id: 'INQ002',
      studentName: 'David Smith',
      guardianName: 'Laura Smith',
      contactNumber: '+1234567892',
      email: 'david.smith@example.com',
      dateOfInquiry: '2024-11-21',
      inquirySource: 'Referral',
      status: 'In Process',
      followUpDate: '2024-11-30',
      assignedTo: 'John Doe',
      campusLocation: 'North Campus',
      previousEducation: 'High School Diploma',
      courseInterested: 'Mechanical Engineering',
      avatar: 'DS'
    },
    {
      id: 'INQ003',
      studentName: 'Sophia Brown',
      guardianName: 'David Brown',
      contactNumber: '+1234567893',
      email: 'sophia.brown@example.com',
      dateOfInquiry: '2024-11-20',
      inquirySource: 'Social Media',
      status: 'New',
      followUpDate: '2024-12-01',
      assignedTo: 'Jessica Taylor',
      campusLocation: 'Main Campus',
      previousEducation: 'A-Level',
      courseInterested: 'AI/ML Engineering',
      avatar: 'SB'
    },
    {
      id: 'INQ004',
      studentName: 'Liam Wilson',
      guardianName: 'Rebecca Wilson',
      contactNumber: '+1234567894',
      email: 'liam.wilson@example.com',
      dateOfInquiry: '2024-11-19',
      inquirySource: 'Website',
      status: 'New',
      followUpDate: '2024-11-28',
      assignedTo: 'Mark Harris',
      campusLocation: 'South Campus',
      previousEducation: 'High School Diploma',
      courseInterested: 'Electronics Engineering',
      avatar: 'LW'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'in process': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'closed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getSourceColor = (source: string) => {
    switch (source.toLowerCase()) {
      case 'website': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'referral': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'social media': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.contactNumber.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || inquiry.status.toLowerCase().replace(' ', '') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admission Inquiry</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage prospective student inquiries and applications</p>
          </div>
          <Button className="bg-college-primary hover:bg-college-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add New Inquiry
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
                    placeholder="Search by name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="inprocess">In Process</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
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
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Inquiries</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">248</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">New Inquiries</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">42</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <Plus className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">In Process</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">76</p>
                </div>
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                  <Calendar className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Converted</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">130</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inquiries Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Student</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Contact</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Course</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Source</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Status</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Follow Up</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-college-primary rounded-full flex items-center justify-center text-white font-semibold">
                            {inquiry.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{inquiry.studentName}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{inquiry.guardianName}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Phone className="h-3 w-3 mr-1" />
                            {inquiry.contactNumber}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Mail className="h-3 w-3 mr-1" />
                            {inquiry.email}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{inquiry.courseInterested}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{inquiry.campusLocation}</p>
                      </td>
                      <td className="p-4">
                        <Badge className={getSourceColor(inquiry.inquirySource)}>
                          {inquiry.inquirySource}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(inquiry.status)}>
                          {inquiry.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <p>{inquiry.followUpDate}</p>
                          <p className="text-xs">{inquiry.assignedTo}</p>
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

export default AdmissionInquiry;
