
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { 
  Settings, 
  School, 
  Users, 
  Calendar,
  Mail,
  Shield,
  Database,
  Bell,
  FileText,
  CreditCard,
  Globe,
  Palette,
  Save,
  Upload,
  Eye,
  EyeOff
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SettingsPanel = () => {
  const { toast } = useToast();
  const [showPasswords, setShowPasswords] = useState(false);
  const [settings, setSettings] = useState({
    // College Information
    collegeName: 'ISBM College of Engineering',
    collegeCode: 'ISBMCOE',
    address: 'Pune, Maharashtra, India',
    phone: '+91-20-12345678',
    email: 'info@isbmcoe.edu.in',
    website: 'https://isbmcoe.edu.in',
    establishedYear: '2010',
    affiliatedUniversity: 'Pune University',
    
    // Academic Settings
    currentAcademicYear: '2024-25',
    semesterSystem: true,
    gradingSystem: 'CGPA',
    maxCGPA: '10.0',
    passingGrade: '4.0',
    attendanceRequired: '75',
    
    // Email Configuration
    smtpServer: 'smtp.gmail.com',
    smtpPort: '587',
    emailUsername: '',
    emailPassword: '',
    emailFrom: 'noreply@isbmcoe.edu.in',
    
    // SMS Configuration
    smsProvider: 'Twilio',
    smsApiKey: '',
    smsApiSecret: '',
    smsFromNumber: '',
    
    // Payment Gateway
    paymentGateway: 'Razorpay',
    paymentApiKey: '',
    paymentSecret: '',
    paymentWebhook: '',
    
    // System Settings
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: true,
    sessionTimeout: '30',
    backupFrequency: 'daily',
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    admissionNotifications: true,
    feeNotifications: true,
    examNotifications: true,
    
    // Theme Settings
    primaryColor: '#1e40af',
    secondaryColor: '#64748b',
    logoUrl: '',
    faviconUrl: '',
    darkModeEnabled: true
  });

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully.`,
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">System Settings</h2>
          <p className="text-gray-600 dark:text-gray-400">Configure your college management system</p>
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-800">
          <Database className="h-3 w-3 mr-1" />
          System Online
        </Badge>
      </div>

      <Tabs defaultValue="college-info" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 bg-white dark:bg-gray-800 border">
          <TabsTrigger value="college-info">College Info</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="college-info">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <School className="h-5 w-5 mr-2" />
                College Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="collegeName">College Name</Label>
                    <Input 
                      id="collegeName" 
                      value={settings.collegeName}
                      onChange={(e) => handleInputChange('collegeName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="collegeCode">College Code</Label>
                    <Input 
                      id="collegeCode" 
                      value={settings.collegeCode}
                      onChange={(e) => handleInputChange('collegeCode', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      value={settings.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea 
                      id="address" 
                      value={settings.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website URL</Label>
                    <Input 
                      id="website" 
                      value={settings.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="establishedYear">Established Year</Label>
                    <Input 
                      id="establishedYear" 
                      value={settings.establishedYear}
                      onChange={(e) => handleInputChange('establishedYear', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="affiliatedUniversity">Affiliated University</Label>
                    <Input 
                      id="affiliatedUniversity" 
                      value={settings.affiliatedUniversity}
                      onChange={(e) => handleInputChange('affiliatedUniversity', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave('College Information')} className="bg-college-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Academic Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentAcademicYear">Current Academic Year</Label>
                    <Input 
                      id="currentAcademicYear" 
                      value={settings.currentAcademicYear}
                      onChange={(e) => handleInputChange('currentAcademicYear', e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="semesterSystem">Semester System</Label>
                    <Switch 
                      id="semesterSystem"
                      checked={settings.semesterSystem}
                      onCheckedChange={(checked) => handleInputChange('semesterSystem', checked)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gradingSystem">Grading System</Label>
                    <select 
                      id="gradingSystem"
                      value={settings.gradingSystem}
                      onChange={(e) => handleInputChange('gradingSystem', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value="CGPA">CGPA (10 Point Scale)</option>
                      <option value="GPA">GPA (4 Point Scale)</option>
                      <option value="Percentage">Percentage</option>
                      <option value="Grade">Letter Grade</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="maxCGPA">Maximum CGPA/GPA</Label>
                    <Input 
                      id="maxCGPA" 
                      value={settings.maxCGPA}
                      onChange={(e) => handleInputChange('maxCGPA', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="passingGrade">Passing Grade/CGPA</Label>
                    <Input 
                      id="passingGrade" 
                      value={settings.passingGrade}
                      onChange={(e) => handleInputChange('passingGrade', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="attendanceRequired">Required Attendance (%)</Label>
                    <Input 
                      id="attendanceRequired" 
                      value={settings.attendanceRequired}
                      onChange={(e) => handleInputChange('attendanceRequired', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave('Academic Configuration')} className="bg-college-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <div className="space-y-6">
            {/* Email Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="smtpServer">SMTP Server</Label>
                    <Input 
                      id="smtpServer" 
                      value={settings.smtpServer}
                      onChange={(e) => handleInputChange('smtpServer', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtpPort">SMTP Port</Label>
                    <Input 
                      id="smtpPort" 
                      value={settings.smtpPort}
                      onChange={(e) => handleInputChange('smtpPort', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emailUsername">Email Username</Label>
                    <Input 
                      id="emailUsername" 
                      value={settings.emailUsername}
                      onChange={(e) => handleInputChange('emailUsername', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emailPassword">Email Password</Label>
                    <div className="relative">
                      <Input 
                        id="emailPassword" 
                        type={showPasswords ? "text" : "password"}
                        value={settings.emailPassword}
                        onChange={(e) => handleInputChange('emailPassword', e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPasswords(!showPasswords)}
                      >
                        {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => handleSave('Email Configuration')} className="bg-college-primary">
                    <Save className="h-4 w-4 mr-2" />
                    Save Email Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Gateway */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Gateway Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="paymentGateway">Payment Gateway</Label>
                    <select 
                      id="paymentGateway"
                      value={settings.paymentGateway}
                      onChange={(e) => handleInputChange('paymentGateway', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value="Razorpay">Razorpay</option>
                      <option value="PayU">PayU</option>
                      <option value="Paytm">Paytm</option>
                      <option value="Stripe">Stripe</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="paymentApiKey">API Key</Label>
                    <Input 
                      id="paymentApiKey" 
                      type={showPasswords ? "text" : "password"}
                      value={settings.paymentApiKey}
                      onChange={(e) => handleInputChange('paymentApiKey', e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => handleSave('Payment Gateway')} className="bg-college-primary">
                    <Save className="h-4 w-4 mr-2" />
                    Save Payment Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Send notifications via email</p>
                  </div>
                  <Switch 
                    id="emailNotifications"
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleInputChange('emailNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="smsNotifications">SMS Notifications</Label>
                    <p className="text-sm text-gray-500">Send notifications via SMS</p>
                  </div>
                  <Switch 
                    id="smsNotifications"
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => handleInputChange('smsNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="admissionNotifications">Admission Notifications</Label>
                    <p className="text-sm text-gray-500">Notify about new admissions</p>
                  </div>
                  <Switch 
                    id="admissionNotifications"
                    checked={settings.admissionNotifications}
                    onCheckedChange={(checked) => handleInputChange('admissionNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="feeNotifications">Fee Notifications</Label>
                    <p className="text-sm text-gray-500">Notify about fee payments</p>
                  </div>
                  <Switch 
                    id="feeNotifications"
                    checked={settings.feeNotifications}
                    onCheckedChange={(checked) => handleInputChange('feeNotifications', checked)}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave('Notification Settings')} className="bg-college-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                    <p className="text-sm text-gray-500">Put system in maintenance mode</p>
                  </div>
                  <Switch 
                    id="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => handleInputChange('maintenanceMode', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="allowRegistration">Allow Registration</Label>
                    <p className="text-sm text-gray-500">Allow new user registrations</p>
                  </div>
                  <Switch 
                    id="allowRegistration"
                    checked={settings.allowRegistration}
                    onCheckedChange={(checked) => handleInputChange('allowRegistration', checked)}
                  />
                </div>
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input 
                    id="sessionTimeout" 
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => handleInputChange('sessionTimeout', e.target.value)}
                    className="w-32"
                  />
                </div>
                <div>
                  <Label htmlFor="backupFrequency">Backup Frequency</Label>
                  <select 
                    id="backupFrequency"
                    value={settings.backupFrequency}
                    onChange={(e) => handleInputChange('backupFrequency', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave('System Settings')} className="bg-college-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save System Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Appearance Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input 
                      id="primaryColor" 
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                      className="w-16 h-10"
                    />
                    <Input 
                      value={settings.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="logoUrl">College Logo</Label>
                  <div className="space-y-2">
                    <Input 
                      id="logoUrl" 
                      placeholder="Logo URL or upload"
                      value={settings.logoUrl}
                      onChange={(e) => handleInputChange('logoUrl', e.target.value)}
                    />
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Logo
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="darkModeEnabled">Dark Mode Support</Label>
                    <p className="text-sm text-gray-500">Enable dark mode for the system</p>
                  </div>
                  <Switch 
                    id="darkModeEnabled"
                    checked={settings.darkModeEnabled}
                    onCheckedChange={(checked) => handleInputChange('darkModeEnabled', checked)}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave('Appearance Settings')} className="bg-college-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Appearance Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPanel;
