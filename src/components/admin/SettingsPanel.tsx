
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Save,
  Upload,
  Shield,
  Globe,
  Bell,
  Database,
  Mail,
  Palette
} from 'lucide-react';

const SettingsPanel = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    maintenance: true
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: 30,
    passwordExpiry: 90
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600">Configure system settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Website Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input id="siteName" defaultValue="ISBM College of Engineering" />
                </div>
                <div>
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea 
                    id="siteDescription" 
                    defaultValue="Premier engineering institution in Pune with NAAC B++ accreditation"
                    className="h-20"
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input id="contactEmail" defaultValue="info@isbm.ac.in" />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input id="contactPhone" defaultValue="+91-7410769206" />
                </div>
                <div>
                  <Label htmlFor="address">College Address</Label>
                  <Textarea 
                    id="address" 
                    defaultValue="S.No 44/1, 44/1/2, Nande Village, Ahead of Pashan Sus Road, Pune, Maharashtra 412115"
                    className="h-20"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="h-5 w-5 mr-2" />
                  Appearance Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="logo">College Logo</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Upload new logo</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex items-center space-x-3">
                    <input type="color" defaultValue="#1e40af" className="w-12 h-10 border border-gray-300 rounded" />
                    <Input defaultValue="#1e40af" className="flex-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex items-center space-x-3">
                    <input type="color" defaultValue="#1e3a8a" className="w-12 h-10 border border-gray-300 rounded" />
                    <Input defaultValue="#1e3a8a" className="flex-1" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="darkMode">Dark Mode</Label>
                  <Switch id="darkMode" />
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
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Admin Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <Switch 
                        id="emailNotifications" 
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <Switch 
                        id="smsNotifications" 
                        checked={notifications.sms}
                        onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pushNotifications">Push Notifications</Label>
                      <Switch 
                        id="pushNotifications" 
                        checked={notifications.push}
                        onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="maintenanceAlerts">Maintenance Alerts</Label>
                      <Switch 
                        id="maintenanceAlerts" 
                        checked={notifications.maintenance}
                        onCheckedChange={(checked) => setNotifications({...notifications, maintenance: checked})}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Email Templates</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      Welcome Email Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Password Reset Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Application Confirmation
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Event Notification Template
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
                  </div>
                  <Switch 
                    id="twoFactor" 
                    checked={security.twoFactor}
                    onCheckedChange={(checked) => setSecurity({...security, twoFactor: checked})}
                  />
                </div>
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input 
                    id="sessionTimeout" 
                    type="number" 
                    value={security.sessionTimeout}
                    onChange={(e) => setSecurity({...security, sessionTimeout: parseInt(e.target.value)})}
                  />
                </div>
                <div>
                  <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                  <Input 
                    id="passwordExpiry" 
                    type="number" 
                    value={security.passwordExpiry}
                    onChange={(e) => setSecurity({...security, passwordExpiry: parseInt(e.target.value)})}
                  />
                </div>
                <div>
                  <Label htmlFor="loginAttempts">Max Failed Login Attempts</Label>
                  <Input id="loginAttempts" type="number" defaultValue="5" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Access Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="adminIps">Admin IP Whitelist</Label>
                  <Textarea 
                    id="adminIps" 
                    placeholder="Enter IP addresses (one per line)"
                    className="h-24"
                  />
                </div>
                <div>
                  <Label htmlFor="apiKeys">API Key Management</Label>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Generate New API Key
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Active Keys
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="smtpServer">SMTP Server</Label>
                  <Input id="smtpServer" placeholder="smtp.gmail.com" />
                </div>
                <div>
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input id="smtpPort" type="number" placeholder="587" />
                </div>
                <div>
                  <Label htmlFor="smtpUsername">Username</Label>
                  <Input id="smtpUsername" placeholder="your-email@gmail.com" />
                </div>
                <div>
                  <Label htmlFor="smtpPassword">Password</Label>
                  <Input id="smtpPassword" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full">Test Connection</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                  <Input id="googleAnalytics" placeholder="GA-XXXXXXXXX-X" />
                </div>
                <div>
                  <Label htmlFor="facebookPixel">Facebook Pixel ID</Label>
                  <Input id="facebookPixel" placeholder="XXXXXXXXXXXXXXXX" />
                </div>
                <div>
                  <Label htmlFor="chatbot">Chatbot Integration</Label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Enable chatbot widget</span>
                    <Switch />
                  </div>
                </div>
                <div>
                  <Label htmlFor="paymentGateway">Payment Gateway</Label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>Razorpay</option>
                    <option>PayU</option>
                    <option>Stripe</option>
                    <option>PayPal</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="backup">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Database Backup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Automatic Backups</Label>
                    <p className="text-sm text-gray-500">Daily automated database backups</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label htmlFor="backupTime">Backup Time</Label>
                  <Input id="backupTime" type="time" defaultValue="02:00" />
                </div>
                <div>
                  <Label htmlFor="retentionDays">Retention Period (days)</Label>
                  <Input id="retentionDays" type="number" defaultValue="30" />
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-college-primary hover:bg-blue-800">
                    Create Backup Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Latest Backup
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>System Status</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">All systems operational</span>
                  </div>
                </div>
                <div>
                  <Label>Last Backup</Label>
                  <p className="text-sm text-gray-600">January 15, 2024 at 2:00 AM</p>
                </div>
                <div>
                  <Label>Database Size</Label>
                  <p className="text-sm text-gray-600">1.2 GB</p>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Clear Cache
                  </Button>
                  <Button variant="outline" className="w-full">
                    Optimize Database
                  </Button>
                  <Button variant="outline" className="w-full text-orange-600 hover:text-orange-700">
                    Enable Maintenance Mode
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button className="bg-college-primary hover:bg-blue-800">
          <Save className="h-4 w-4 mr-2" />
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default SettingsPanel;
