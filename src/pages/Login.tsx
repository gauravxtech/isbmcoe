
import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Shield, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, isAuthenticated, userRole, loading } = useAuth();
  const { toast } = useToast();

  const getRoleDashboardPath = (role: string): string => {
    const dashboardPaths: Record<string, string> = {
      'super-admin': '/dashboard/super-admin',
      'admin': '/dashboard/admin',
      'principal': '/dashboard/principal',
      'dean': '/dashboard/dean',
      'hod': '/dashboard/hod',
      'teacher': '/dashboard/teacher',
      'student': '/dashboard/student',
      'parent': '/dashboard/parent',
      'accountant': '/dashboard/accountant',
      'reception': '/dashboard/reception',
      'security': '/dashboard/security',
      'hostel': '/dashboard/hostel'
    };
    
    return dashboardPaths[role] || '/dashboard/student';
  };

  // Redirect authenticated users to their dashboard
  useEffect(() => {
    // Only redirect if we're not loading, user is authenticated, and we have a role
    if (!loading && isAuthenticated && userRole) {
      console.log('Redirecting user with role:', userRole);
      const dashboardPath = getRoleDashboardPath(userRole);
      navigate(dashboardPath, { replace: true });
    }
  }, [isAuthenticated, userRole, loading, navigate]);

  // Don't render the login form if user is authenticated and we're redirecting
  if (!loading && isAuthenticated && userRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

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
        // Navigation will be handled by the useEffect hook
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

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
              Sign In to Portal
            </CardTitle>
            <p className="text-gray-600 text-sm mt-2">Enter your credentials to access the system</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-6">
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
                    className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-base"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={handleInputChange}
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
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-base"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="text-center space-y-4 pt-4 border-t border-gray-200/50">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Account Information</span>
                </div>
                <p className="text-xs text-blue-700 mb-2">
                  Accounts are created and managed by administrators only.
                </p>
                <p className="text-xs text-blue-600">
                  Contact your system administrator if you need access to the portal.
                </p>
              </div>
              
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
