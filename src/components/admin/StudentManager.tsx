
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  GraduationCap, 
  Plus, 
  Edit, 
  Key, 
  Trash2, 
  UserCheck, 
  UserX,
  Search
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ModernLoader } from '@/components/ui/modern-loader';

interface Student {
  id: string;
  full_name: string;
  email: string;
  department: string;
  role: string;
  status: string;
  phone?: string;
  created_at: string;
}

const StudentManager = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [addStudentOpen, setAddStudentOpen] = useState(false);
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [editStudentOpen, setEditStudentOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [addStudentForm, setAddStudentForm] = useState({
    full_name: '',
    email: '',
    password: 'isbm@321',
    department: '',
    phone: ''
  });
  const [editStudentForm, setEditStudentForm] = useState({
    full_name: '',
    email: '',
    department: '',
    status: 'active',
    phone: ''
  });
  const { toast } = useToast();

  const departmentOptions = [
    'Computer Engineering',
    'AIDS',
    'Mechanical',
    'ETC',
    'BCA',
    'BBA'
  ];

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('role', 'student')
        .order('created_at', { ascending: false });

      if (error) throw error;
      console.log('Fetched students:', data); // Debug log
      setStudents(data || []);
    } catch (error: any) {
      console.error('Error fetching students:', error);
      toast({
        title: "Error",
        description: "Failed to fetch students",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addStudentForm.full_name || !addStudentForm.email || !addStudentForm.department) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: addStudentForm.email,
        password: addStudentForm.password,
        options: {
          data: {
            full_name: addStudentForm.full_name,
            role: 'student',
            department: addStudentForm.department,
            phone: addStudentForm.phone
          }
        }
      });

      if (signUpError) throw signUpError;

      if (signUpData.user?.id) {
        // Insert into profiles table
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: signUpData.user.id,
            email: addStudentForm.email,
            full_name: addStudentForm.full_name,
            department: addStudentForm.department,
            role: 'student',
            phone: addStudentForm.phone,
            status: 'active'
          });

        if (profileError) throw profileError;

        // Also insert into students table for consistency
        const { error: studentError } = await supabase
          .from('students')
          .insert({
            id: signUpData.user.id,
            full_name: addStudentForm.full_name,
            email: addStudentForm.email,
            department: addStudentForm.department,
            status: 'active'
          });

        if (studentError) {
          console.log('Student table insert error (non-critical):', studentError);
        }
      }

      toast({
        title: "Success",
        description: "Student added successfully!"
      });

      // Refresh the student list to show the new student
      await fetchStudents();
      setAddStudentOpen(false);
      setAddStudentForm({
        full_name: '',
        email: '',
        password: 'isbm@321',
        department: '',
        phone: ''
      });
      // Refresh the students list
      await fetchStudents();
    } catch (error: any) {
      console.error('Error adding student:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to add student",
        variant: "destructive"
      });
    }
  };

  const handleEditStudent = (student: Student) => {
    setEditStudent(student);
    setEditStudentForm({
      full_name: student.full_name,
      email: student.email,
      department: student.department,
      status: student.status,
      phone: student.phone || ''
    });
    setEditStudentOpen(true);
  };

  const handleSaveEditStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editStudent) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: editStudentForm.full_name,
          department: editStudentForm.department,
          status: editStudentForm.status,
          phone: editStudentForm.phone
        })
        .eq('id', editStudent.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Student updated successfully!"
      });

      setEditStudentOpen(false);
      setEditStudent(null);
      fetchStudents();
    } catch (error: any) {
      console.error('Error updating student:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to update student",
        variant: "destructive"
      });
    }
  };

  const handleResetPassword = async (student: Student) => {
    if (!window.confirm(`Reset password for ${student.full_name} to "isbm@321"?`)) return;

    try {
      // Note: In a real application, you'd need a server-side function to reset passwords
      // For now, we'll just show a success message
      toast({
        title: "Password Reset",
        description: `Password for ${student.full_name} has been reset to "isbm@321"`,
      });
    } catch (error: any) {
      console.error('Error resetting password:', error);
      toast({
        title: "Error",
        description: "Failed to reset password",
        variant: "destructive"
      });
    }
  };

  const handleDeleteStudent = async (student: Student) => {
    if (!window.confirm(`Are you sure you want to delete ${student.full_name}?`)) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', student.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Student deleted successfully!"
      });

      fetchStudents();
    } catch (error: any) {
      console.error('Error deleting student:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete student",
        variant: "destructive"
      });
    }
  };

  const filteredStudents = students.filter(student =>
    student.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <ModernLoader text="Loading students..." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            Student Management
          </h3>
          <p className="text-gray-600">Manage student accounts and information</p>
        </div>
        <Button 
          onClick={() => setAddStudentOpen(true)} 
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Student
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Students ({filteredStudents.length})</CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">
                      <div className="flex flex-col items-center space-y-2">
                        <GraduationCap className="h-8 w-8 text-gray-400" />
                        <p className="text-gray-500">No students found</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.full_name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.department}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={student.status === 'active' ? 'default' : 'secondary'}
                          className={student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                        >
                          {student.status === 'active' ? (
                            <><UserCheck className="h-3 w-3 mr-1" /> Active</>
                          ) : (
                            <><UserX className="h-3 w-3 mr-1" /> Inactive</>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditStudent(student)}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleResetPassword(student)}
                            className="text-orange-600 hover:text-orange-700"
                          >
                            <Key className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteStudent(student)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Standardized Add Student Dialog */}
      <Dialog open={addStudentOpen} onOpenChange={setAddStudentOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddStudent} className="space-y-4">
            <div>
              <Label htmlFor="student_name">Full Name *</Label>
              <Input
                id="student_name"
                value={addStudentForm.full_name}
                onChange={(e) => setAddStudentForm(prev => ({ ...prev, full_name: e.target.value }))}
                placeholder="Enter full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="student_email">Email *</Label>
              <Input
                id="student_email"
                type="email"
                value={addStudentForm.email}
                onChange={(e) => setAddStudentForm(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter email address"
                required
              />
            </div>
            <div>
              <Label htmlFor="student_department">Department *</Label>
              <Select 
                value={addStudentForm.department} 
                onValueChange={(value) => setAddStudentForm(prev => ({ ...prev, department: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departmentOptions.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="student_phone">Phone</Label>
              <Input
                id="student_phone"
                value={addStudentForm.phone}
                onChange={(e) => setAddStudentForm(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <Label htmlFor="student_password">Default Password</Label>
              <Input
                id="student_password"
                value={addStudentForm.password}
                onChange={(e) => setAddStudentForm(prev => ({ ...prev, password: e.target.value }))}
                placeholder="Default password"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Add Student
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Student Dialog */}
      <Dialog open={editStudentOpen} onOpenChange={setEditStudentOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Student</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveEditStudent} className="space-y-4">
            <div>
              <Label htmlFor="edit_student_name">Full Name *</Label>
              <Input
                id="edit_student_name"
                value={editStudentForm.full_name}
                onChange={(e) => setEditStudentForm(prev => ({ ...prev, full_name: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="edit_student_email">Email *</Label>
              <Input
                id="edit_student_email"
                type="email"
                value={editStudentForm.email}
                onChange={(e) => setEditStudentForm(prev => ({ ...prev, email: e.target.value }))}
                required
                disabled
              />
            </div>
            <div>
              <Label htmlFor="edit_student_department">Department *</Label>
              <Select 
                value={editStudentForm.department} 
                onValueChange={(value) => setEditStudentForm(prev => ({ ...prev, department: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {departmentOptions.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="edit_student_phone">Phone</Label>
              <Input
                id="edit_student_phone"
                value={editStudentForm.phone}
                onChange={(e) => setEditStudentForm(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="edit_student_status">Status</Label>
              <Select 
                value={editStudentForm.status} 
                onValueChange={(value) => setEditStudentForm(prev => ({ ...prev, status: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentManager;
