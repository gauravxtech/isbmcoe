
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Send, Users, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface NoticeManagerProps {
  onClose?: () => void;
}

const NoticeManager: React.FC<NoticeManagerProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    type: 'general',
    target_audience: 'all',
    priority: 1,
    start_date: '',
    end_date: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.content) {
      toast({
        title: "Error",
        description: "Please fill in title and content",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('announcements')
        .insert([{
          title: form.title,
          content: form.content,
          type: form.type,
          target_audience: form.target_audience,
          priority: form.priority,
          start_date: form.start_date ? new Date(form.start_date).toISOString() : null,
          end_date: form.end_date ? new Date(form.end_date).toISOString() : null,
          status: 'active'
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Notice sent successfully!",
      });

      // Reset form
      setForm({
        title: '',
        content: '',
        type: 'general',
        target_audience: 'all',
        priority: 1,
        start_date: '',
        end_date: ''
      });

      if (onClose) onClose();
    } catch (error: any) {
      console.error('Error sending notice:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send notice",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-yellow-500" />
          Send Notice
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Notice Title *</Label>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Enter notice title"
              required
            />
          </div>

          <div>
            <Label htmlFor="content">Notice Content *</Label>
            <Textarea
              id="content"
              value={form.content}
              onChange={(e) => setForm(prev => ({ ...prev, content: e.target.value }))}
              placeholder="Enter notice content"
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="type">Notice Type</Label>
              <Select value={form.type} onValueChange={(value) => setForm(prev => ({ ...prev, type: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="target_audience">Target Audience</Label>
              <Select value={form.target_audience} onValueChange={(value) => setForm(prev => ({ ...prev, target_audience: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="students">Students</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="start_date">Start Date (Optional)</Label>
              <Input
                id="start_date"
                type="datetime-local"
                value={form.start_date}
                onChange={(e) => setForm(prev => ({ ...prev, start_date: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="end_date">End Date (Optional)</Label>
              <Input
                id="end_date"
                type="datetime-local"
                value={form.end_date}
                onChange={(e) => setForm(prev => ({ ...prev, end_date: e.target.value }))}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            {onClose && (
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={loading} className="bg-yellow-500 hover:bg-yellow-600">
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Notice
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default NoticeManager;
