import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Bell, 
  Send, 
  Users, 
  Mail, 
  MessageSquare, 
  Calendar, 
  Filter, 
  Trash2, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Clock,
  Edit
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { useToast } from '@/hooks/use-toast';

const NotificationCenter = () => {
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationContent, setNotificationContent] = useState('');
  const [notificationType, setNotificationType] = useState('info');
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  useSEO({
    title: "Notification Center - ISBM College",
    description: "Send and manage notifications",
    canonical: "https://isbmcoe.edu.in/admin/notifications"
  });

  const recipientGroups = [
    { id: 'all', name: 'All Users', count: 3500 },
    { id: 'students', name: 'All Students', count: 2800 },
    { id: 'faculty', name: 'All Faculty', count: 180 },
    { id: 'admin', name: 'Administrative Staff', count: 45 },
    { id: 'parents', name: 'All Parents', count: 2500 },
    { id: 'computer', name: 'Computer Engineering', count: 750 },
    { id: 'mechanical', name: 'Mechanical Engineering', count: 650 },
    { id: 'aiml', name: 'AI/ML Department', count: 420 },
    { id: 'etc', name: 'Electronics Department', count: 380 },
    { id: 'first-year', name: 'First Year Students', count: 600 }
  ];

  const recentNotifications = [
    { 
      id: 1, 
      title: 'Mid-term Examination Schedule', 
      content: 'The mid-term examinations will begin from 15th July 2024. Please check your department notice board for detailed schedule.',
      type: 'info',
      recipients: 'All Students',
      sentAt: '2 hours ago',
      sentBy: 'Examination Department'
    },
    { 
      id: 2, 
      title: 'Urgent: Campus Closure Due to Heavy Rain', 
      content: 'Due to heavy rainfall and weather warnings, the campus will remain closed tomorrow. Online classes will continue as scheduled.',
      type: 'alert',
      recipients: 'All Users',
      sentAt: '1 day ago',
      sentBy: 'Principal Office'
    },
    { 
      id: 3, 
      title: 'Fee Payment Reminder', 
      content: 'This is a reminder that the last date for fee payment for the current semester is 30th June 2024. Please clear all dues to avoid late fees.',
      type: 'warning',
      recipients: 'All Students',
      sentAt: '3 days ago',
      sentBy: 'Accounts Department'
    },
    { 
      id: 4, 
      title: 'Faculty Meeting Scheduled', 
      content: 'A faculty meeting is scheduled on 25th June 2024 at 3:00 PM in the Conference Hall. All faculty members are requested to attend.',
      type: 'info',
      recipients: 'All Faculty',
      sentAt: '4 days ago',
      sentBy: 'HOD Office'
    },
    { 
      id: 5, 
      title: 'Placement Drive Announcement', 
      content: 'TCS will be conducting a placement drive on 28th June 2024. Eligible students are requested to register by 25th June.',
      type: 'success',
      recipients: 'Final Year Students',
      sentAt: '5 days ago',
      sentBy: 'Placement Cell'
    }
  ];

  const scheduledNotifications = [
    { 
      id: 1, 
      title: 'End Semester Examination Notice', 
      content: 'End semester examinations will begin from 15th August 2024. Detailed schedule will be shared soon.',
      type: 'info',
      recipients: 'All Students',
      scheduledFor: '15 July 2024, 9:00 AM',
      createdBy: 'Examination Department'
    },
    { 
      id: 2, 
      title: 'Annual Sports Day Announcement', 
      content: 'The Annual Sports Day will be held on 10th August 2024. Registration for various events will open on 20th July.',
      type: 'info',
      recipients: 'All Users',
      scheduledFor: '20 July 2024, 10:00 AM',
      createdBy: 'Sports Department'
    }
  ];

  const toggleRecipient = (recipientId: string) => {
    setSelectedRecipients(prev => 
      prev.includes(recipientId) 
        ? prev.filter(id => id !== recipientId) 
        : [...prev, recipientId]
    );
  };

  const handleSendNotification = () => {
    if (!notificationTitle || !notificationContent || selectedRecipients.length === 0) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and select at least one recipient group",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);
    
    // Simulate sending notification
    setTimeout(() => {
      setIsSending(false);
      toast({
        title: "Success",
        description: "Notification sent successfully",
      });
      
      // Reset form
      setNotificationTitle('');
      setNotificationContent('');
      setSelectedRecipients([]);
      setNotificationType('info');
    }, 2000);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'alert':
        return <Bell className="h-5 w-5 text-red-500" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getNotificationBadge = (type: string) => {
    switch (type) {
      case 'success':
        return <Badge className="bg-green-100 text-green-800">Success</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>;
      case 'alert':
        return <Badge className="bg-red-100 text-red-800">Alert</Badge>;
      case 'info':
      default:
        return <Badge className="bg-blue-100 text-blue-800">Info</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Bell className="h-8 w-8 text-yellow-500" />
              Notification Center
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Send and manage notifications to users</p>
          </div>
        </div>

        <Tabs defaultValue="send" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="send" className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Send Notification
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Notification History
            </TabsTrigger>
            <TabsTrigger value="scheduled" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Scheduled Notifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="send" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Send New Notification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="notification-title">Notification Title *</Label>
                  <Input
                    id="notification-title"
                    value={notificationTitle}
                    onChange={(e) => setNotificationTitle(e.target.value)}
                    placeholder="Enter notification title"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="notification-content">Notification Content *</Label>
                  <Textarea
                    id="notification-content"
                    value={notificationContent}
                    onChange={(e) => setNotificationContent(e.target.value)}
                    placeholder="Enter notification content"
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="notification-type">Notification Type</Label>
                  <select
                    id="notification-type"
                    value={notificationType}
                    onChange={(e) => setNotificationType(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                  >
                    <option value="info">Information</option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="alert">Alert</option>
                  </select>
                </div>

                <div>
                  <Label>Delivery Methods</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="app-notification" defaultChecked />
                      <label htmlFor="app-notification">In-App Notification</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="email-notification" />
                      <label htmlFor="email-notification">Email</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="sms-notification" />
                      <label htmlFor="sms-notification">SMS</label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Schedule (Optional)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                    <div>
                      <Input
                        type="date"
                        placeholder="Select date"
                      />
                    </div>
                    <div>
                      <Input
                        type="time"
                        placeholder="Select time"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">Select Recipients *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {recipientGroups.map((group) => (
                      <div 
                        key={group.id}
                        className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                          selectedRecipients.includes(group.id) 
                            ? 'bg-blue-50 border-blue-300' 
                            : 'hover:bg-gray-50'
                        }`}
                        onClick={() => toggleRecipient(group.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              checked={selectedRecipients.includes(group.id)}
                              onChange={() => {}}
                              className="mr-3"
                            />
                            <div>
                              <p className="font-medium">{group.name}</p>
                              <p className="text-xs text-gray-500">{group.count} users</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <Button variant="outline">
                    Preview
                  </Button>
                  <Button 
                    onClick={handleSendNotification}
                    disabled={isSending}
                    className="bg-yellow-500 hover:bg-yellow-600"
                  >
                    {isSending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Notification
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Recent Notifications</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentNotifications.map((notification) => (
                    <div key={notification.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          {getNotificationIcon(notification.type)}
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{notification.title}</h3>
                              {getNotificationBadge(notification.type)}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                            <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                              <span className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                {notification.recipients}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {notification.sentAt}
                              </span>
                              <span>By: {notification.sentBy}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Scheduled Notifications</CardTitle>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule New
                </Button>
              </CardHeader>
              <CardContent>
                {scheduledNotifications.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No scheduled notifications</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {scheduledNotifications.map((notification) => (
                      <div key={notification.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            {getNotificationIcon(notification.type)}
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold">{notification.title}</h3>
                                {getNotificationBadge(notification.type)}
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                              <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                                <span className="flex items-center">
                                  <Users className="h-3 w-3 mr-1" />
                                  {notification.recipients}
                                </span>
                                <span className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  Scheduled: {notification.scheduledFor}
                                </span>
                                <span>By: {notification.createdBy}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default NotificationCenter;
