
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    captcha: '',
    rememberMe: false
  });
  const [captchaCode] = useState(Math.random().toString(36).substring(2, 8).toUpperCase());
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.captcha.toUpperCase() !== captchaCode) {
      alert('Invalid captcha code');
      return;
    }

    console.log('Login attempt:', formData);
    navigate('/dashboard');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-college-primary via-blue-700 to-college-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-200 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png" 
              alt="ISBM College Logo" 
              className="w-12 h-12"
            />
            <div className="text-left">
              <h1 className="text-white font-bold text-xl">ISBM College</h1>
              <p className="text-blue-200 text-sm">of Engineering</p>
            </div>
          </div>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-college-primary">
              Login Portal
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Student/Faculty Portal Access
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-10"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pl-10 pr-10"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="captcha" className="text-sm font-medium text-gray-700">
                  Captcha *
                </Label>
                <div className="flex space-x-3 items-center">
                  <div className="bg-gray-100 border rounded px-4 py-2 font-mono text-lg tracking-widest text-college-primary font-bold">
                    {captchaCode}
                  </div>
                  <Input
                    id="captcha"
                    name="captcha"
                    type="text"
                    required
                    className="flex-1"
                    placeholder="Enter captcha"
                    value={formData.captcha}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                    }
                  />
                  <Label htmlFor="rememberMe" className="text-sm text-gray-600">
                    Remember me
                  </Label>
                </div>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-college-primary hover:text-blue-800 transition-colors duration-200"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button 
                type="submit"
                className="w-full bg-college-primary hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </Button>
            </form>

            <div className="text-center space-y-4 pt-6 border-t">
              <p className="text-sm text-gray-600">
                Note: Accounts are created by college administration only.
              </p>
              <p className="text-xs text-gray-500">
                For new account requests, please contact the admissions office.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
