import React, { useState, useEffect } from 'react';
import { Key, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if this is a valid password reset session
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    
    if (accessToken && refreshToken) {
      // Set the session from URL params
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    }
  }, [searchParams]);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.password || !formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.updateUser({
        password: formData.password
      });

      if (error) throw error;

      setPasswordReset(true);
      toast({
        title: "Password Updated",
        description: "Your password has been successfully reset.",
      });

      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to reset password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-college-primary via-blue-700 to-college-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/login" className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-200 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/assets/logo.png" 
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
            <CardTitle className="text-2xl font-bold text-college-dark">
              Set New Password
            </CardTitle>
            <p className="text-gray-600 mt-2">
              {passwordReset ? "Password reset successful" : "Enter your new password"}
            </p>
          </CardHeader>
          <CardContent>
            {!passwordReset ? (
              <form onSubmit={handlePasswordReset} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="pl-10"
                      placeholder="Enter new password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      className="pl-10"
                      placeholder="Confirm new password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-college-primary hover:bg-blue-800"
                  disabled={isLoading}
                >
                  {isLoading ? 'Updating Password...' : 'Update Password'}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2">
                    Password Reset Successful
                  </h3>
                  <p className="text-gray-600">
                    Your password has been updated successfully. You will be redirected to login in a few seconds.
                  </p>
                </div>
                <Link to="/login">
                  <Button className="w-full bg-college-primary hover:bg-blue-800">
                    Go to Login
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;