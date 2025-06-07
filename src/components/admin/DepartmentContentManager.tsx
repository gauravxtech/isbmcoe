
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Save, Users, BookOpen, Award, Building } from 'lucide-react';

const DepartmentContentManager = () => {
  const [departments] = useState([
    {
      id: 1,
      name: "Computer Engineering",
      code: "COMP",
      description: "Leading department in software development and computer systems",
      hod: "Dr. Rajesh Kumar",
      students: 890,
      programs: ["B.Tech Computer Engineering", "M.Tech Computer Engineering"],
      facilities: ["Advanced Computing Lab", "Software Development Center", "Research Lab"],
      achievements: ["Best Department Award 2023", "100% Placement Record"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Mechanical Engineering", 
      code: "MECH",
      description: "Excellence in mechanical design and manufacturing technologies",
      hod: "Dr. Priya Sharma",
      students: 650,
      programs: ["B.Tech Mechanical Engineering", "M.Tech Mechanical Engineering"],
      facilities: ["CAD/CAM Lab", "Manufacturing Lab", "Thermal Engineering Lab"],
      achievements: ["Industry Partnership Award", "Research Excellence 2023"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "AI/ML Department",
      code: "AIML", 
      description: "Cutting-edge artificial intelligence and machine learning programs",
      hod: "Dr. Arjun Patel",
      students: 420,
      programs: ["B.Tech AI/ML", "M.Tech AI/ML"],
      facilities: ["AI Research Lab", "Machine Learning Center", "Data Science Lab"],
      achievements: ["Innovation Award 2023", "Best Research Papers"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    }
  ]);

  const [editingDept, setEditingDept] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Department Content Management</h3>
          <p className="text-gray-600">Manage department information, faculty, and content</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Department Overview</TabsTrigger>
          <TabsTrigger value="details">Department Details</TabsTrigger>
          <TabsTrigger value="faculty">Faculty Management</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4">
            {departments.map((dept) => (
              <Card key={dept.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-32 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                      <img 
                        src={dept.image} 
                        alt={dept.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{dept.name}</h4>
                            <Badge variant="outline">{dept.code}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {dept.students} students
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {dept.programs.length} programs
                            </div>
                            <span><strong>HOD:</strong> {dept.hod}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setEditingDept(dept)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="details">
          {editingDept ? (
            <Card>
              <CardHeader>
                <CardTitle>Edit {editingDept.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deptName">Department Name</Label>
                    <Input id="deptName" defaultValue={editingDept.name} />
                  </div>
                  <div>
                    <Label htmlFor="deptCode">Department Code</Label>
                    <Input id="deptCode" defaultValue={editingDept.code} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" defaultValue={editingDept.description} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hod">Head of Department</Label>
                    <Input id="hod" defaultValue={editingDept.hod} />
                  </div>
                  <div>
                    <Label htmlFor="students">Number of Students</Label>
                    <Input id="students" type="number" defaultValue={editingDept.students} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="programs">Programs Offered (one per line)</Label>
                  <Textarea 
                    id="programs" 
                    defaultValue={editingDept.programs.join('\n')}
                    placeholder="B.Tech Computer Engineering"
                  />
                </div>
                <div>
                  <Label htmlFor="facilities">Facilities (one per line)</Label>
                  <Textarea 
                    id="facilities" 
                    defaultValue={editingDept.facilities.join('\n')}
                    placeholder="Advanced Computing Lab"
                  />
                </div>
                <div>
                  <Label htmlFor="achievements">Achievements (one per line)</Label>
                  <Textarea 
                    id="achievements" 
                    defaultValue={editingDept.achievements.join('\n')}
                    placeholder="Best Department Award 2023"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setEditingDept(null)}>
                    Cancel
                  </Button>
                  <Button className="bg-college-primary">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Building className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Select a department from the overview tab to edit details</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="faculty">
          <Card>
            <CardHeader>
              <CardTitle>Faculty Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Faculty management system coming soon</p>
                <Button className="mt-4 bg-college-primary">Add Faculty Member</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DepartmentContentManager;
