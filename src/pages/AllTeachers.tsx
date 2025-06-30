import React, { useEffect, useState, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, UserCheck, BookOpen, Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose
} from '@/components/ui/dialog';
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel
} from '@/components/ui/alert-dialog';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const AllTeachers = () => {
  useSEO({
    title: "All Teachers - ISBM College",
    description: "Manage faculty members and teachers",
    canonical: "https://isbmcoe.edu.in/admin/teachers"
  });

  const { toast } = useToast();
  const [teachers, setTeachers] = useState<Database['public']['Tables']['teachers']['Row'][]>([]);
  const [departments, setDepartments] = useState<{id: string, name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editTeacher, setEditTeacher] = useState<Database['public']['Tables']['teachers']['Row']|null>(null);
  const [deleteTeacher, setDeleteTeacher] = useState<Database['public']['Tables']['teachers']['Row']|null>(null);

  // Fetch teachers
  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('teachers').select('*').order('name');
      if (!error && data) setTeachers(data);
      setLoading(false);
    };
    fetchTeachers();
  }, []);

  // Fetch departments
  useEffect(() => {
    const fetchDepartments = async () => {
      const { data, error } = await supabase.from('departments').select('id, name').order('name');
      if (!error && data) setDepartments(data);
    };
    fetchDepartments();
  }, []);

  // Filtered teachers
  const filteredTeachers = useMemo(() => {
    if (!search) return teachers;
    return teachers.filter(t =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      (t.position && t.position.toLowerCase().includes(search.toLowerCase())) ||
      (t.qualification && t.qualification.toLowerCase().includes(search.toLowerCase()))
    );
  }, [teachers, search]);

  // Form for add/edit
  const methods = useForm<{
    name: string;
    position: string;
    qualification: string;
    department: string;
  }>({ defaultValues: { name: '', position: '', qualification: '', department: '' } });

  // Open modal for add/edit
  const openAddModal = () => {
    setEditTeacher(null);
    methods.reset({ name: '', position: '', qualification: '', department: '' });
    setModalOpen(true);
  };
  const openEditModal = (teacher: Database['public']['Tables']['teachers']['Row']) => {
    setEditTeacher(teacher);
    methods.reset({
      name: teacher.name,
      position: teacher.position,
      qualification: teacher.qualification,
      department: teacher.department || ''
    });
    setModalOpen(true);
  };

  // Submit add/edit
  const onSubmit = async (values: { name: string; position: string; qualification: string; department: string; }) => {
    setLoading(true);
    if (editTeacher) {
      // Update
      const { error } = await supabase.from('teachers').update({ ...values, updated_at: new Date().toISOString() }).eq('id', editTeacher.id);
      if (!error) {
        setTeachers(ts => ts.map(t => t.id === editTeacher.id ? { ...t, ...values, updated_at: new Date().toISOString() } : t));
        toast({ title: 'Teacher updated', description: `${values.name} updated successfully.` });
      } else {
        toast({ title: 'Error', description: error.message });
      }
    } else {
      // Add
      const { data, error } = await supabase.from('teachers').insert([{ ...values }]).select();
      if (!error && data && data[0]) {
        setTeachers(ts => [...ts, data[0]]);
        toast({ title: 'Teacher added', description: `${values.name} added successfully.` });
      } else {
        toast({ title: 'Error', description: error?.message || 'Failed to add teacher.' });
      }
    }
    setModalOpen(false);
    setLoading(false);
  };

  // Delete teacher
  const confirmDelete = async () => {
    if (!deleteTeacher) return;
    setLoading(true);
    const { error } = await supabase.from('teachers').delete().eq('id', deleteTeacher.id);
    if (!error) {
      setTeachers(ts => ts.filter(t => t.id !== deleteTeacher.id));
      toast({ title: 'Teacher deleted', description: `${deleteTeacher.name} deleted successfully.` });
    } else {
      toast({ title: 'Error', description: error.message });
    }
    setDeleteTeacher(null);
    setLoading(false);
  };

  const teacherStats = [
    { label: 'Total Faculty', value: teachers.length.toString(), icon: Users, color: 'text-blue-600' },
    { label: 'Active Teachers', value: '178', icon: UserCheck, color: 'text-green-600' },
    { label: 'Departments', value: '8', icon: BookOpen, color: 'text-purple-600' },
    { label: 'New Joinings', value: '5', icon: Users, color: 'text-orange-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-500" />
              Faculty Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Manage teachers and faculty members</p>
          </div>
          <div className="flex gap-3">
            <Input
              placeholder="Search teachers..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-48"
            />
            <Button onClick={openAddModal} className="bg-blue-500 hover:bg-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              Add Teacher
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teacherStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Faculty Members</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Qualification</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={5}>Loading...</TableCell></TableRow>
                ) : filteredTeachers.length === 0 ? (
                  <TableRow><TableCell colSpan={5}>No teachers found.</TableCell></TableRow>
                ) : filteredTeachers.map(teacher => (
                  <TableRow key={teacher.id}>
                    <TableCell>{teacher.name}</TableCell>
                    <TableCell>{teacher.position}</TableCell>
                    <TableCell>{teacher.qualification}</TableCell>
                    <TableCell>{departments.find(d => d.id === teacher.department)?.name || '-'}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline" onClick={() => openEditModal(teacher)}><Edit className="h-4 w-4" /></Button>
                      <Button size="sm" variant="destructive" onClick={() => setDeleteTeacher(teacher)} className="ml-2"><Trash2 className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add/Edit Modal */}
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editTeacher ? 'Edit Teacher' : 'Add Teacher'}</DialogTitle>
              <DialogDescription>
                {editTeacher ? 'Update teacher details.' : 'Add a new teacher to the list.'}
              </DialogDescription>
            </DialogHeader>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...methods.register('name', { required: true })} />
                </div>
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" {...methods.register('position', { required: true })} />
                </div>
                <div>
                  <Label htmlFor="qualification">Qualification</Label>
                  <Input id="qualification" {...methods.register('qualification', { required: true })} />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select value={methods.watch('department')} onValueChange={val => methods.setValue('department', val)}>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map(d => (
                        <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
                  <Button type="submit" disabled={loading}>{editTeacher ? 'Update' : 'Add'}</Button>
                </DialogFooter>
              </form>
            </FormProvider>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation */}
        <AlertDialog open={!!deleteTeacher} onOpenChange={open => !open && setDeleteTeacher(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Teacher</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete <b>{deleteTeacher?.name}</b>? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="outline">Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant="destructive" onClick={confirmDelete} disabled={loading}>Delete</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </DashboardLayout>
  );
};

export default AllTeachers;
