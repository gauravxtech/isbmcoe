
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, User, GraduationCap, Shield, Building2, Users, CreditCard, Phone, Home, UserCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
    rememberMe: false
  });
  const navigate = useNavigate();

  const roles = [
    { value: 'super-admin', label: 'Super Admin', icon: Shield, color: 'bg-red-500', description: 'System Administrator' },
    { value: 'admin', label: 'Admin', icon: UserCheck, color: 'bg-blue-500', description: 'College Administrator' },
    { value: 'principal', label: 'Principal', icon: Building2, color: 'bg-purple-500', description: 'College Principal' },
    { value: 'dean', label: 'Dean', icon: GraduationCap, color: 'bg-indigo-500', description: 'Academic Dean' },
    { value: 'hod', label: 'HOD', icon: Users, color: 'bg-green-500', description: 'Head of Department' },
    { value: 'teacher', label: 'Teacher', icon: User, color: 'bg-orange-500', description: 'Faculty Member' },
    { value: 'student', label: 'Student', icon: GraduationCap, color: 'bg-cyan-500', description: 'Student Portal' },
    { value: 'parent', label: 'Parent', icon: Users, color: 'bg-pink-500', description: 'Parent Portal' },
    { value: 'accountant', label: 'Accountant', icon: CreditCard, color: 'bg-yellow-500', description: 'Finance Department' },
    { value: 'reception', label: 'Reception', icon: Phone, color: 'bg-teal-500', description: 'Front Office' },
    { value: 'security', label: 'Security', icon: Shield, color: 'bg-gray-500', description: 'Security Gate' },
    { value: 'hostel', label: 'Hostel', icon: Home, color: 'bg-emerald-500', description: 'Hostel Management' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || !formData.role) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Login attempt:', formData);
    
    // Route based on role
    const roleRoutes = {
      'super-admin': '/admin/super-admin-dashboard',
      'admin': '/admin/dashboard',
      'principal': '/admin/principal-dashboard',
      'dean': '/admin/dean-dashboard',
      'hod': '/admin/hod-dashboard',
      'teacher': '/admin/teacher-dashboard',
      'student': '/admin/student-dashboard',
      'parent': '/admin/parent-dashboard',
      'accountant': '/admin/accountant-dashboard',
      'reception': '/admin/reception-dashboard',
      'security': '/admin/security-dashboard',
      'hostel': '/admin/hostel-dashboard',
    };

    navigate(roleRoutes[formData.role as keyof typeof roleRoutes] || '/admin/dashboard');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const selectedRole = roles.find(role => role.value === formData.role);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="w-full max-w-lg relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <img 
                src="/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png" 
                alt="ISBM College Logo" 
                className="w-10 h-10"
              />
            </div>
            <div className="text-left">
              <h1 className="text-white font-bold text-2xl">ISBM College</h1>
              <p className="text-blue-200 text-base">of Engineering</p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-blue-200">Sign in to access your dashboard</p>
          </div>
        </div>

        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-md">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Secure Login Portal
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Choose your role and enter credentials
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label htmlFor="role" className="text-sm font-semibold text-gray-700">
                  Select Your Role *
                </Label>
                <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent className="max-h-64">
                    {roles.map((role) => (
                      <SelectItem key={role.value} value={role.value} className="py-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${role.color} rounded-lg flex items-center justify-center`}>
                            <role.icon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">{role.label}</p>
                            <p className="text-xs text-gray-500">{role.description}</p>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedRole && (
                  <div className="mt-2">
                    <Badge className={`${selectedRole.color} text-white`}>
                      {selectedRole.label} - {selectedRole.description}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-12 h-12 border-2 border-gray-200 focus:border-blue-500"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                  Password *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pl-12 pr-12 h-12 border-2 border-gray-200 focus:border-blue-500"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Sign In to Dashboard
              </Button>
            </form>

            <div className="text-center space-y-4 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                🔒 Secure access to ISBM College management system
              </p>
              <p className="text-xs text-gray-500">
                For technical support, contact IT department
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
