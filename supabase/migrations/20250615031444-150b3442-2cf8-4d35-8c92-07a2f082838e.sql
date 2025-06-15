
-- Create system_metrics table to store various system statistics
CREATE TABLE public.system_metrics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name TEXT NOT NULL UNIQUE,
  metric_value TEXT NOT NULL,
  metric_type TEXT NOT NULL DEFAULT 'string', -- 'string', 'number', 'percentage'
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create system_monitoring table for real-time monitoring data
CREATE TABLE public.system_monitoring (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cpu_usage INTEGER NOT NULL DEFAULT 0,
  memory_usage INTEGER NOT NULL DEFAULT 0,
  disk_usage INTEGER NOT NULL DEFAULT 0,
  active_users INTEGER NOT NULL DEFAULT 0,
  database_size TEXT NOT NULL DEFAULT '0GB',
  system_uptime TEXT NOT NULL DEFAULT '0%',
  pending_updates INTEGER NOT NULL DEFAULT 0,
  recorded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create system_activities table for recent activities
CREATE TABLE public.system_activities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  activity_name TEXT NOT NULL,
  activity_type TEXT NOT NULL DEFAULT 'info', -- 'success', 'info', 'warning', 'error'
  user_name TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert initial system metrics data
INSERT INTO public.system_metrics (metric_name, metric_value, metric_type, description) VALUES
('system_uptime', '99.9%', 'percentage', 'System uptime percentage'),
('active_users', '1247', 'number', 'Current active users count'),
('database_size', '2.4GB', 'string', 'Current database size'),
('pending_updates', '3', 'number', 'Number of pending system updates');

-- Insert initial monitoring data
INSERT INTO public.system_monitoring (cpu_usage, memory_usage, disk_usage, active_users, database_size, system_uptime, pending_updates) VALUES
(23, 67, 45, 1247, '2.4GB', '99.9%', 3);

-- Insert sample activities
INSERT INTO public.system_activities (activity_name, activity_type, user_name, description) VALUES
('System backup completed', 'success', 'System', 'Automated system backup completed successfully'),
('New user registered', 'info', 'John Doe', 'New user account created'),
('Security scan initiated', 'warning', 'Admin', 'Routine security scan started'),
('Database optimization', 'info', 'System', 'Database optimization process completed'),
('Login attempt failed', 'warning', 'Unknown', 'Multiple failed login attempts detected');

-- Enable RLS on all tables (only super-admin should access)
ALTER TABLE public.system_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_monitoring ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_activities ENABLE ROW LEVEL SECURITY;

-- Create policies to allow only super-admin access
CREATE POLICY "Super admin can manage system metrics" 
  ON public.system_metrics 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'super-admin'
    )
  );

CREATE POLICY "Super admin can manage system monitoring" 
  ON public.system_monitoring 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'super-admin'
    )
  );

CREATE POLICY "Super admin can manage system activities" 
  ON public.system_activities 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'super-admin'
    )
  );
