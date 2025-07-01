
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Edit3, 
  Save, 
  Camera,
  GraduationCap,
  Calendar,
  Book
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ModernLoader } from '@/components/ui/modern-loader';
import { useSEO } from '@/hooks/useSEO';

interface StudentProfile {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  department: string;
  avatar_url?: string;
  status: string;
  created_at: string;
}

const StudentDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    department: ''
  });

  const departmentOptions = [
    'Computer Engineering',
    'AIDS',
    'Mechanical',
    'ETC',
    'BCA',
    'BBA'
  ];

  useSEO({
    title: "Student Dashboard - ISBM College",
    description: "Student portal for profile management and academic information"
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      
      setProfile(data);
      setFormData({
        full_name: data.full_name || '',
        phone: data.phone || '',
        department: data.department || ''
      });
    } catch (error: any) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Error",
        description: "Failed to load profile",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!user || !profile) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: formData.full_name,
          phone: formData.phone,
          department: formData.department
        })
        .eq('id', user.id);

      if (error) throw error;

      setProfile(prev => prev ? {
        ...prev,
        full_name: formData.full_name,
        phone: formData.phone,
        department: formData.department
      } : null);

      setIsEditing(false);
      toast({
        title: "Success",
        description: "Profile updated successfully!"
      });
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive"
      });
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <ModernLoader text="Loading your dashboard..." />
      </DashboardLayout>
    );
  }

  if (!profile) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-gray-500">Profile not found</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              Student Dashboard
            </h1>
            <p className="text-gray-600">Welcome back, {profile.full_name}!</p>
          </div>
        </div>

        {/* Profile Overview */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Profile Information
              </CardTitle>
              <Button
                variant={isEditing ? "default" : "outline"}
                onClick={() => {
                  if (isEditing) {
                    handleSaveProfile();
                  } else {
                    setIsEditing(true);
                  }
                }}
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar Section */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profile.avatar_url} alt={profile.full_name} />
                    <AvatarFallback className="text-xl font-semibold bg-blue-100 text-blue-600">
                      {getInitials(profile.full_name)}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <Badge variant={profile.status === 'active' ? 'default' : 'secondary'}>
                  {profile.status === 'active' ? 'Active Student' : 'Inactive'}
                </Badge>
              </div>

              {/* Profile Details */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                      placeholder="Enter your full name"
                    />
                  ) : (
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{profile.full_name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{profile.email}</span>
                  </div>
                  <p className="text-xs text-gray-500">Email cannot be changed</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                    />
                  ) : (
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{profile.phone || 'Not provided'}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  {isEditing ? (
                    <Select 
                      value={formData.department} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}
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
                  ) : (
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                      <Building className="h-4 w-4 text-gray-500" />
                      <span>{profile.department || 'Not assigned'}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Member Since</Label>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{new Date(profile.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Information */}
        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="academic">Academic Info</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="academic">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-green-600" />
                  Academic Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900">Current Department</h3>
                    <p className="text-blue-700">{profile.department || 'Not assigned'}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-900">Student Status</h3>
                    <p className="text-green-700">{profile.status === 'active' ? 'Active' : 'Inactive'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Course enrollment coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Change Password</h3>
                    <p className="text-gray-600 text-sm mb-3">Contact your administrator to change your password.</p>
                    <Button variant="outline" disabled>
                      Request Password Change
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
