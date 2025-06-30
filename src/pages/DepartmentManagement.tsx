import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, 
  Plus, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Edit, 
  Trash2, 
  Search, 
  Filter 
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { useToast } from '@/hooks/use-toast';

const DepartmentManagement = () => {
  const [isAddDepartmentOpen, setIsAddDepartmentOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  useSEO({
    title: "Department Management - ISBM College",
    description: "Manage academic departments and faculty",
    canonical: "https://isbmcoe.edu.in/admin/departments"
  });

  const departments = [
    {
      id: 1,
      name: "Computer Engineering",
      code: "COMP",
      hod: "Dr. Kailash N. Tripathi",
      students: 890,
      faculty: 16,
      established: "2010"
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      code: "MECH",
      hod: "Dr. Vaibhav V. Edake",
      students: 650,
      faculty: 13,
      established: "2010"
    },
    {
      id: 3,
      name: "AI & Machine Learning",
      code: "AIML",
      hod: "Prof. Kirti Randhe",
      students: 420,
      faculty: 7,
      established: "2020"
    },
    {
      id: 4,
      name: "AI & Data Science",
      code: "AIDS",
      hod: "Prof. Anil V. Walke",
      students: 380,
      faculty: 11,
      established: "2020"
    },
    {
      id: 5,
      name: "Electronics Engineering (VLSI)",
      code: "ETC",
      hod: "Prof. Sitaram Longani",
      students: 280,
      faculty: 7,
      established: "2010"
    },
    {
      id: 6,
      name: "First Year Engineering",
      code: "FE",
      hod: "Prof. Krishna Kr. Yadav",
      students: 600,
      faculty: 12,
      established: "2010"
    },
    {
      id: 7,
      name: "Bachelor of Computer Application",
      code: "BCA",
      hod: "Prof. Nikhil Kumthekar",
      students: 60,
      faculty: 1,
      established: "2024"
    },
    {
      id: 8,
      name: "Bachelor of Business Administration",
      code: "BBA",
      hod: "Dr. Santosh Kumar Yadav",
      students: 60,
      faculty: 1,
      established: "2024"
    }
  ];

  const filteredDepartments = departments.filter(dept => 
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.hod.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDepartment = () => {
    toast({
      title: "Department Added",
      description: "New department has been added successfully",
    });
    setIsAddDepartmentOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Building className="h-8 w-8 text-indigo-500" />
              Department Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Manage academic departments and faculty</p>
          </div>
          <div className="flex gap-3">
            <Button 
              className="bg-indigo-500 hover:bg-indigo-600"
              onClick={() => setIsAddDepartmentOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Department
            </Button>
          </div>
        </div>

        <Tabs defaultValue="departments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="departments" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Departments
            </TabsTrigger>
            <TabsTrigger value="faculty" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Faculty Assignment
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Course Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="departments" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search departments..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredDepartments.map((dept) => (
                    <div key={dept.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              {dept.code}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            <p><span className="font-medium">HOD:</span> {dept.hod}</p>
                            <p><span className="font-medium">Established:</span> {dept.established}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {dept.students} Students
                          </div>
                          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm flex items-center">
                            <GraduationCap className="h-4 w-4 mr-1" />
                            {dept.faculty} Faculty
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {isAddDepartmentOpen && (
              <Card>
                <CardHeader>
                  <CardTitle>Add New Department</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dept-name">Department Name *</Label>
                      <Input id="dept-name" placeholder="Enter department name" />
                    </div>
                    <div>
                      <Label htmlFor="dept-code">Department Code *</Label>
                      <Input id="dept-code" placeholder="Enter department code" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="dept-description">Description</Label>
                    <Textarea 
                      id="dept-description" 
                      placeholder="Enter department description"
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="dept-hod">Head of Department</Label>
                      <Input id="dept-hod" placeholder="Select HOD" />
                    </div>
                    <div>
                      <Label htmlFor="dept-established">Established Year</Label>
                      <Input id="dept-established" placeholder="YYYY" />
                    </div>
                    <div>
                      <Label htmlFor="dept-type">Department Type</Label>
                      <select 
                        id="dept-type"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      >
                        <option>Engineering</option>
                        <option>Management</option>
                        <option>Computer Applications</option>
                        <option>Basic Sciences</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4">
                    <Button variant="outline" onClick={() => setIsAddDepartmentOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddDepartment}>
                      Add Department
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="faculty" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Assignment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Faculty assignment interface will be available soon</p>
                  <Button>Manage Faculty Assignments</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Course management interface will be available soon</p>
                  <Button>Manage Courses</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DepartmentManagement;