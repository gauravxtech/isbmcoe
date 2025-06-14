
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, User, GraduationCap, Shield, Building2, Users, CreditCard, Phone, Home, UserCheck, Sparkles, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    fullName: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();

  const roles = [
    { value: 'super-admin', label: 'Super Admin', icon: Shield, color: 'from-red-500 to-red-600', description: 'System Administrator' },
    { value: 'admin', label: 'Admin', icon: UserCheck, color: 'from-blue-500 to-blue-600', description: 'College Administrator' },
    { value: 'principal', label: 'Principal', icon: Building2, color: 'from-purple-500 to-purple-600', description: 'College Principal' },
    { value: 'dean', label: 'Dean', icon: GraduationCap, color: 'from-indigo-500 to-indigo-600', description: 'Academic Dean' },
    { value: 'hod', label: 'HOD', icon: Users, color: 'from-green-500 to-green-600', description: 'Head of Department' },
    { value: 'teacher', label: 'Teacher', icon: BookOpen, color: 'from-orange-500 to-orange-600', description: 'Faculty Member' },
    { value: 'student', label: 'Student', icon: GraduationCap, color: 'from-cyan-500 to-cyan-600', description: 'Student Portal' },
    { value: 'parent', label: 'Parent', icon: Users, color: 'from-pink-500 to-pink-600', description: 'Parent Portal' },
    { value: 'accountant', label: 'Accountant', icon: CreditCard, color: 'from-yellow-500 to-yellow-600', description: 'Finance Department' },
    { value: 'reception', label: 'Reception', icon: Phone, color: 'from-teal-500 to-teal-600', description: 'Front Office' },
    { value: 'security', label: 'Security', icon: Shield, color: 'from-gray-500 to-gray-600', description: 'Security Gate' },
    { value: 'hostel', label: 'Hostel', icon: Home, color: 'from-emerald-500 to-emerald-600', description: 'Hostel Management' },
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.email || !loginData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signIn(loginData.email, loginData.password);
      
      if (error) {
        toast({
          title: "Login Failed",
          description: error.message || "Invalid credentials. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Login Successful",
          description: "Welcome to ISBM College Management System",
        });
        navigate('/');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signupData.email || !signupData.password || !signupData.role || !signupData.fullName) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signUp(signupData.email, signupData.password, signupData.role);
      
      if (error) {
        toast({
          title: "Signup Failed",
          description: error.message || "Failed to create account. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Account Created",
          description: "Please check your email to confirm your account.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignupInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const selectedRole = roles.find(role => role.value === signupData.role);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-200 mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <img 
                src="/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png" 
                alt="ISBM College Logo" 
                className="w-10 h-10"
              />
            </div>
            <div className="text-left">
              <h1 className="text-slate-800 font-bold text-2xl">ISBM College</h1>
              <p className="text-blue-600 text-base">of Engineering</p>
            </div>
          </div>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-xl border border-white/20">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-blue-600" />
              Welcome Portal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-100/50">
                <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                  Sign In
                </TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Enter your email"
                        value={loginData.email}
                        onChange={handleLoginInputChange}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={handleLoginInputChange}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        disabled={isLoading}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={loginData.rememberMe}
                        onChange={handleLoginInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        disabled={isLoading}
                      />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <Link 
                      to="/forgot-password" 
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Enter your full name"
                        value={signupData.fullName}
                        onChange={handleSignupInputChange}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-sm font-semibold text-gray-700">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-email"
                        name="email"
                        type="email"
                        required
                        className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Enter your email"
                        value={signupData.email}
                        onChange={handleSignupInputChange}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-semibold text-gray-700">
                      Select Your Role
                    </Label>
                    <Select value={signupData.role} onValueChange={(value) => setSignupData(prev => ({ ...prev, role: value }))}>
                      <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500">
                        <SelectValue placeholder="Choose your role" />
                      </SelectTrigger>
                      <SelectContent className="max-h-64">
                        {roles.map((role) => (
                          <SelectItem key={role.value} value={role.value} className="py-2">
                            <div className="flex items-center space-x-3">
                              <div className={`w-6 h-6 bg-gradient-to-r ${role.color} rounded-md flex items-center justify-center`}>
                                <role.icon className="h-3 w-3 text-white" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">{role.label}</p>
                                <p className="text-xs text-gray-500">{role.description}</p>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {selectedRole && (
                      <div className="mt-2">
                        <Badge className={`bg-gradient-to-r ${selectedRole.color} text-white border-0`}>
                          {selectedRole.label} - {selectedRole.description}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-sm font-semibold text-gray-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Create a password"
                        value={signupData.password}
                        onChange={handleSignupInputChange}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        disabled={isLoading}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        required
                        className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Confirm your password"
                        value={signupData.confirmPassword}
                        onChange={handleSignupInputChange}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center space-y-3 pt-4 border-t border-gray-200/50">
              <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                Secure access to ISBM College system
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
