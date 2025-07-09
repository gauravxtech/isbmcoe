import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Edit, Save, Users, BookOpen, Award, Building, Plus, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Department {
  id: string;
  name: string;
  code: string;
  description: string | null;
  hod_name: string | null;
  student_count: number | null;
  programs: string[] | null;
  facilities: string[] | null;
  achievements: string[] | null;
  image_url: string | null;
  status: string | null;
}

const DepartmentContentManager = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingDept, setEditingDept] = useState<Department | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    hod_name: '',
    student_count: 0,
    programs: '',
    facilities: '',
    achievements: '',
    image_url: '',
    status: 'active'
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const { data, error } = await supabase
        .from('departments')
        .select('*')
        .order('name');

      if (error) throw error;
      setDepartments(data || []);
    } catch (error) {
      console.error('Error fetching departments:', error);
      toast({
        title: "Error",
        description: "Failed to fetch departments",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (dept: Department) => {
    setEditingDept(dept);
    setFormData({
      name: dept.name,
      code: dept.code,
      description: dept.description || '',
      hod_name: dept.hod_name || '',
      student_count: dept.student_count || 0,
      programs: dept.programs?.join('\n') || '',
      facilities: dept.facilities?.join('\n') || '',
      achievements: dept.achievements?.join('\n') || '',
      image_url: dept.image_url || '',
      status: dept.status || 'active'
    });
  };

  const handleSave = async () => {
    try {
      const departmentData = {
        name: formData.name,
        code: formData.code,
        description: formData.description,
        hod_name: formData.hod_name,
        student_count: formData.student_count,
        programs: formData.programs.split('\n').filter(p => p.trim()),
        facilities: formData.facilities.split('\n').filter(f => f.trim()),
        achievements: formData.achievements.split('\n').filter(a => a.trim()),
        image_url: formData.image_url,
        status: formData.status,
        updated_at: new Date().toISOString()
      };

      if (editingDept) {
        const { error } = await supabase
          .from('departments')
          .update(departmentData)
          .eq('id', editingDept.id);

        if (error) throw error;
        toast({ title: "Success", description: "Department updated successfully" });
      } else {
        const { error } = await supabase
          .from('departments')
          .insert([departmentData]);

        if (error) throw error;
        toast({ title: "Success", description: "Department created successfully" });
        setShowAddForm(false);
      }

      setEditingDept(null);
      fetchDepartments();
      resetForm();
    } catch (error: any) {
      console.error('Error saving department:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save department",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete the ${name} department?`)) return;

    try {
      const { error } = await supabase
        .from('departments')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({ title: "Success", description: "Department deleted successfully" });
      fetchDepartments();
    } catch (error: any) {
      console.error('Error deleting department:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete department",
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      code: '',
      description: '',
      hod_name: '',
      student_count: 0,
      programs: '',
      facilities: '',
      achievements: '',
      image_url: '',
      status: 'active'
    });
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading departments...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Department Content Management</h3>
          <p className="text-gray-600">Manage department information, faculty, and content</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="bg-college-primary">
          <Plus className="h-4 w-4 mr-2" />
          Add Department
        </Button>
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
                      {dept.image_url ? (
                        <img 
                          src={dept.image_url} 
                          alt={dept.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <Building className="h-8 w-8" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{dept.name}</h4>
                            <Badge variant="outline">{dept.code}</Badge>
                            <Badge variant={dept.status === 'active' ? 'default' : 'secondary'}>
                              {dept.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {dept.student_count || 0} students
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {dept.programs?.length || 0} programs
                            </div>
                            <span><strong>HOD:</strong> {dept.hod_name || 'Not assigned'}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEdit(dept)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDelete(dept.id, dept.name)}
                            className="text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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
                    <Input 
                      id="deptName" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="deptCode">Department Code</Label>
                    <Input 
                      id="deptCode" 
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hod">Head of Department</Label>
                    <Input 
                      id="hod" 
                      value={formData.hod_name}
                      onChange={(e) => setFormData({ ...formData, hod_name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="students">Number of Students</Label>
                    <Input 
                      id="students" 
                      type="number" 
                      value={formData.student_count}
                      onChange={(e) => setFormData({ ...formData, student_count: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="programs">Programs Offered (one per line)</Label>
                  <Textarea 
                    id="programs" 
                    value={formData.programs}
                    onChange={(e) => setFormData({ ...formData, programs: e.target.value })}
                    placeholder="B.Tech Computer Engineering"
                  />
                </div>
                <div>
                  <Label htmlFor="facilities">Facilities (one per line)</Label>
                  <Textarea 
                    id="facilities" 
                    value={formData.facilities}
                    onChange={(e) => setFormData({ ...formData, facilities: e.target.value })}
                    placeholder="Advanced Computing Lab"
                  />
                </div>
                <div>
                  <Label htmlFor="achievements">Achievements (one per line)</Label>
                  <Textarea 
                    id="achievements" 
                    value={formData.achievements}
                    onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
                    placeholder="Best Department Award 2023"
                  />
                </div>
                <div>
                  <Label htmlFor="image_url">Department Image URL</Label>
                  <Input 
                    id="image_url" 
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setEditingDept(null)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave} className="bg-college-primary">
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

      {/* Add Department Dialog */}
      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Department</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="newDeptName">Department Name</Label>
                <Input 
                  id="newDeptName" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Computer Engineering"
                />
              </div>
              <div>
                <Label htmlFor="newDeptCode">Department Code</Label>
                <Input 
                  id="newDeptCode" 
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                  placeholder="COMP"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="newDescription">Description</Label>
              <Textarea 
                id="newDescription" 
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Leading department in software development..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="newHod">Head of Department</Label>
                <Input 
                  id="newHod" 
                  value={formData.hod_name}
                  onChange={(e) => setFormData({ ...formData, hod_name: e.target.value })}
                  placeholder="Dr. John Doe"
                />
              </div>
              <div>
                <Label htmlFor="newStudents">Number of Students</Label>
                <Input 
                  id="newStudents" 
                  type="number" 
                  value={formData.student_count}
                  onChange={(e) => setFormData({ ...formData, student_count: parseInt(e.target.value) || 0 })}
                  placeholder="0"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="newPrograms">Programs Offered (one per line)</Label>
              <Textarea 
                id="newPrograms" 
                value={formData.programs}
                onChange={(e) => setFormData({ ...formData, programs: e.target.value })}
                placeholder="B.Tech Computer Engineering&#10;M.Tech Computer Engineering"
              />
            </div>
            <div>
              <Label htmlFor="newImageUrl">Department Image URL</Label>
              <Input 
                id="newImageUrl" 
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                placeholder="https://..."
              />
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => { setShowAddForm(false); resetForm(); }}>
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-college-primary">
                <Save className="h-4 w-4 mr-2" />
                Add Department
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DepartmentContentManager;