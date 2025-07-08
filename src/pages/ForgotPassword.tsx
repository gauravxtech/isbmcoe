import React, { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setEmailSent(true);
      toast({
        title: "Reset Email Sent",
        description: "Check your email for password reset instructions.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send reset email. Please try again.",
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
              Reset Password
            </CardTitle>
            <p className="text-gray-600 mt-2">
              {emailSent ? "Check your email for reset instructions" : "Enter your email to receive reset instructions"}
            </p>
          </CardHeader>
          <CardContent>
            {!emailSent ? (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
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
                <Button 
                  type="submit" 
                  className="w-full bg-college-primary hover:bg-blue-800"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2">
                    Reset Email Sent
                  </h3>
                  <p className="text-gray-600">
                    We've sent password reset instructions to {formData.email}
                  </p>
                </div>
                <div className="space-y-4">
                  <Button 
                    onClick={() => setEmailSent(false)}
                    variant="outline"
                    className="w-full"
                  >
                    Send Another Email
                  </Button>
                  <Link to="/login">
                    <Button className="w-full bg-college-primary hover:bg-blue-800">
                      Back to Login
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;