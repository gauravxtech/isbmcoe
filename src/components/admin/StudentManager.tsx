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
  Trash2, 
  UserCheck, 
  UserX,
  Search,
  Mail,
  BookOpen
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ProfessionalLoader } from '@/components/ui/professional-loader';

interface Student {
  id: string;
  full_name: string;
  email: string;
  department: string;
  enrollment_no?: string;
  status: string;
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
    enrollment_no: '',
    department: ''
  });
  const [editStudentForm, setEditStudentForm] = useState({
    full_name: '',
    email: '',
    enrollment_no: '',
    department: '',
    status: 'active'
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
        .from('students')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
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
      const { error } = await supabase
        .from('students')
        .insert([{
          full_name: addStudentForm.full_name,
          email: addStudentForm.email,
          enrollment_no: addStudentForm.enrollment_no || `ENR${Date.now()}`,
          department: addStudentForm.department,
          status: 'active'
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Student added successfully!"
      });

      setAddStudentOpen(false);
      setAddStudentForm({
        full_name: '',
        email: '',
        enrollment_no: '',
        department: ''
      });
      
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
      enrollment_no: student.enrollment_no || '',
      department: student.department,
      status: student.status
    });
    setEditStudentOpen(true);
  };

  const handleSaveEditStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editStudent) return;

    try {
      const { error } = await supabase
        .from('students')
        .update({
          full_name: editStudentForm.full_name,
          enrollment_no: editStudentForm.enrollment_no,
          department: editStudentForm.department,
          status: editStudentForm.status
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

  const handleDeleteStudent = async (student: Student) => {
    if (!window.confirm(`Are you sure you want to delete ${student.full_name}?`)) return;

    try {
      const { error } = await supabase
        .from('students')
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
    student.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (student.enrollment_no && student.enrollment_no.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return <ProfessionalLoader variant="academic" text="Loading students..." size="lg" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            Student Management
          </h3>
          <p className="text-muted-foreground mt-1">Manage student records and academic information</p>
        </div>
        <Button 
          onClick={() => setAddStudentOpen(true)} 
          className="bg-primary hover:bg-primary/90 shadow-lg"
          size="lg"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Student
        </Button>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Students ({filteredStudents.length})
            </CardTitle>
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by name, email, enrollment no..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Student Details</TableHead>
                  <TableHead className="font-semibold">Department</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-12">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="p-4 bg-muted/50 rounded-full">
                          <GraduationCap className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-muted-foreground">No students found</p>
                          <p className="text-sm text-muted-foreground">Try adjusting your search criteria</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredStudents.map((student) => (
                    <TableRow key={student.id} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="py-4">
                        <div className="space-y-1">
                          <div className="font-semibold text-foreground">
                            {student.full_name}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {student.email}
                          </div>
                          {student.enrollment_no && (
                            <div className="text-xs bg-muted px-2 py-1 rounded-md inline-block">
                              {student.enrollment_no}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="font-medium">{student.department}</div>
                      </TableCell>
                      <TableCell className="py-4">
                        <Badge 
                          variant={student.status === 'active' ? 'default' : 'secondary'}
                          className={`${
                            student.status === 'active' 
                              ? 'bg-green-100 text-green-800 border-green-200' 
                              : 'bg-red-100 text-red-800 border-red-200'
                          } px-3 py-1`}
                        >
                          {student.status === 'active' ? (
                            <><UserCheck className="h-3 w-3 mr-1" /> Active</>
                          ) : (
                            <><UserX className="h-3 w-3 mr-1" /> Inactive</>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="flex justify-center space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditStudent(student)}
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteStudent(student)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
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

      {/* Add Student Dialog */}
      <Dialog open={addStudentOpen} onOpenChange={setAddStudentOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Add New Student
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddStudent} className="space-y-4">
            <div>
              <Label htmlFor="full_name">Full Name *</Label>
              <Input
                id="full_name"
                value={addStudentForm.full_name}
                onChange={(e) => setAddStudentForm(prev => ({ ...prev, full_name: e.target.value }))}
                placeholder="Enter full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={addStudentForm.email}
                onChange={(e) => setAddStudentForm(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter email address"
                required
              />
            </div>

            <div>
              <Label htmlFor="enrollment_no">Enrollment Number</Label>
              <Input
                id="enrollment_no"
                value={addStudentForm.enrollment_no}
                onChange={(e) => setAddStudentForm(prev => ({ ...prev, enrollment_no: e.target.value }))}
                placeholder="Auto-generated if empty"
              />
            </div>

            <div>
              <Label htmlFor="department">Department *</Label>
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

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Add Student
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Student Dialog */}
      <Dialog open={editStudentOpen} onOpenChange={setEditStudentOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Edit className="h-5 w-5" />
              Edit Student
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveEditStudent} className="space-y-4">
            <div>
              <Label htmlFor="edit_full_name">Full Name *</Label>
              <Input
                id="edit_full_name"
                value={editStudentForm.full_name}
                onChange={(e) => setEditStudentForm(prev => ({ ...prev, full_name: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="edit_email">Email *</Label>
              <Input
                id="edit_email"
                type="email"
                value={editStudentForm.email}
                onChange={(e) => setEditStudentForm(prev => ({ ...prev, email: e.target.value }))}
                required
                disabled
              />
            </div>

            <div>
              <Label htmlFor="edit_enrollment_no">Enrollment Number</Label>
              <Input
                id="edit_enrollment_no"
                value={editStudentForm.enrollment_no}
                onChange={(e) => setEditStudentForm(prev => ({ ...prev, enrollment_no: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="edit_department">Department *</Label>
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
              <Label htmlFor="edit_status">Status</Label>
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

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentManager;