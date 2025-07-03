import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Bell, 
  Search, 
  Filter, 
  Eye,
  Trash2,
  Calendar,
  Users,
  AlertCircle,
  CheckCircle,
  Info
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface NoticeHistory {
  id: string;
  title: string;
  content: string;
  type: string;
  target_audience: string;
  priority: number;
  status: string;
  start_date: string;
  end_date: string | null;
  created_at: string;
  created_by: string | null;
}

const NoticeHistory = () => {
  const [notices, setNotices] = useState<NoticeHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setNotices(data || []);
    } catch (error: any) {
      console.error('Error fetching notices:', error);
      toast({
        title: "Error",
        description: "Failed to fetch notice history",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this notice?')) return;

    try {
      const { error } = await supabase
        .from('announcements')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Notice deleted successfully"
      });

      fetchNotices();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete notice",
        variant: "destructive"
      });
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'academic':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'event':
        return <Calendar className="h-4 w-4 text-green-500" />;
      default:
        return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      urgent: 'bg-red-100 text-red-800',
      academic: 'bg-blue-100 text-blue-800',
      event: 'bg-green-100 text-green-800',
      general: 'bg-gray-100 text-gray-800'
    };
    return colors[type as keyof typeof colors] || colors.general;
  };

  const getPriorityColor = (priority: number) => {
    if (priority >= 4) return 'bg-red-500';
    if (priority >= 3) return 'bg-yellow-500';
    if (priority >= 2) return 'bg-blue-500';
    return 'bg-gray-500';
  };

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || notice.type === filterType;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-college-primary"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Bell className="h-8 w-8 text-yellow-500" />
              Notice History
            </h1>
            <p className="text-gray-600 dark:text-gray-400">View and manage all sent notifications</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col lg:flex-row gap-4 justify-between">
              <CardTitle>All Notices ({filteredNotices.length})</CardTitle>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search notices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="all">All Types</option>
                  <option value="general">General</option>
                  <option value="urgent">Urgent</option>
                  <option value="academic">Academic</option>
                  <option value="event">Event</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Notice Details</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Audience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNotices.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-400">
                      No notices found.
                    </TableCell>
                  </TableRow>
                ) : filteredNotices.map((notice) => (
                  <TableRow key={notice.id}>
                    <TableCell>
                      <div className="flex items-start gap-3">
                        {getTypeIcon(notice.type)}
                        <div>
                          <div className="font-medium">{notice.title}</div>
                          <div className="text-sm text-gray-500 truncate max-w-md">
                            {notice.content}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTypeBadge(notice.type)}>
                        {notice.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(notice.priority)}`}></div>
                        <span>{notice.priority}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {notice.target_audience}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={notice.status === 'active' ? 'default' : 'secondary'}
                        className={notice.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {notice.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      <div>{new Date(notice.created_at).toLocaleDateString()}</div>
                      <div>{new Date(notice.created_at).toLocaleTimeString()}</div>
                      {notice.end_date && (
                        <div className="text-xs text-orange-600">
                          Expires: {new Date(notice.end_date).toLocaleDateString()}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" onClick={() => handleDelete(notice.id)} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NoticeHistory;