
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Eye, Edit, Trash2, Mail, Phone, MapPin, GraduationCap, DollarSign } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useSEO } from '@/hooks/useSEO';

const AllTeachers = () => {
  useSEO({
    title: "All Teachers - ISBM College Admin",
    description: "Manage faculty members and teaching staff",
    canonical: "https://isbmcoe.edu.in/admin/teachers"
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const teachers = [
    {
      id: 'T001',
      name: 'Dr. John Deo',
      department: 'Mathematics',
      email: 'john.deo@isbm.edu',
      gender: 'Male',
      mobile: '+1234567890',
      degree: 'M.Sc., Ph.D.',
      address: '123 Main St, Anytown, USA',
      hireDate: '2018-02-25',
      salary: '₹75,000',
      experience: '12 years',
      subjects: ['Calculus', 'Linear Algebra', 'Statistics'],
      avatar: 'JD'
    },
    {
      id: 'T002',
      name: 'Dr. Sarah Smith',
      department: 'Computer Science',
      email: 'sarah.smith@isbm.edu',
      gender: 'Female',
      mobile: '+1234567891',
      degree: 'M.Tech., Ph.D.',
      address: '456 Oak Ave, Techville, USA',
      hireDate: '2019-07-15',
      salary: '₹85,000',
      experience: '8 years',
      subjects: ['Data Structures', 'Algorithms', 'AI/ML'],
      avatar: 'SS'
    },
    {
      id: 'T003',
      name: 'Prof. Michael Brown',
      department: 'Mechanical Engineering',
      email: 'michael.brown@isbm.edu',
      gender: 'Male',
      mobile: '+1234567892',
      degree: 'M.E., Ph.D.',
      address: '789 Pine Rd, Engineerville, USA',
      hireDate: '2017-01-10',
      salary: '₹80,000',
      experience: '15 years',
      subjects: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design'],
      avatar: 'MB'
    },
    {
      id: 'T004',
      name: 'Dr. Emily Davis',
      department: 'Electronics',
      email: 'emily.davis@isbm.edu',
      gender: 'Female',
      mobile: '+1234567893',
      degree: 'M.Tech., Ph.D.',
      address: '321 Circuit St, Electrontown, USA',
      hireDate: '2020-03-20',
      salary: '₹78,000',
      experience: '6 years',
      subjects: ['Digital Electronics', 'Microprocessors', 'VLSI'],
      avatar: 'ED'
    }
  ];

  const getDepartmentColor = (department: string) => {
    switch (department.toLowerCase()) {
      case 'mathematics': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'computer science': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'mechanical engineering': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'electronics': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'civil engineering': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = departmentFilter === 'all' || teacher.department.toLowerCase().replace(' ', '') === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">All Teachers</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage faculty members and teaching staff</p>
          </div>
          <Button className="bg-college-primary hover:bg-college-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add New Teacher
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
                    placeholder="Search by name, email, or subjects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="computerscience">Computer Science</SelectItem>
                  <SelectItem value="mechanicalengineering">Mechanical Engineering</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="civilengineering">Civil Engineering</SelectItem>
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
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Teachers</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">89</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Faculty</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">84</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Ph.D. Holders</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">67</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Experience</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">8.5</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">years</p>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <GraduationCap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Teachers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Faculty Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Teacher</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Department</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Contact</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Qualifications</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Experience</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Subjects</th>
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTeachers.map((teacher) => (
                    <tr key={teacher.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-college-primary rounded-full flex items-center justify-center text-white font-semibold">
                            {teacher.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{teacher.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{teacher.gender}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className={getDepartmentColor(teacher.department)}>
                          {teacher.department}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Mail className="h-3 w-3 mr-1" />
                            {teacher.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Phone className="h-3 w-3 mr-1" />
                            {teacher.mobile}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{teacher.degree}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Hired: {teacher.hireDate}</p>
                      </td>
                      <td className="p-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{teacher.experience}</p>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {teacher.salary}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          {teacher.subjects.slice(0, 2).map((subject, index) => (
                            <div key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                              {subject}
                            </div>
                          ))}
                          {teacher.subjects.length > 2 && (
                            <p className="text-xs text-gray-500 dark:text-gray-400">+{teacher.subjects.length - 2} more</p>
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

export default AllTeachers;
