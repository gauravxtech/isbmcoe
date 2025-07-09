-- Insert sample departments (use UPSERT with proper conflict resolution)
INSERT INTO departments (name, code, description, hod_name, student_count, programs, facilities, achievements, status, image_url) VALUES
('Computer Engineering', 'COMP', 'Leading department in software development and computer systems', 'Dr. Rajesh Kumar', 890, 
  ARRAY['B.Tech Computer Engineering', 'M.Tech Computer Engineering'], 
  ARRAY['Advanced Computing Lab', 'Software Development Center', 'AI Research Lab'], 
  ARRAY['Best Department Award 2023', '100% Placement Record'], 
  'active', 
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'),

('Mechanical Engineering', 'MECH', 'Excellence in mechanical design and manufacturing technologies', 'Dr. Priya Sharma', 650, 
  ARRAY['B.Tech Mechanical Engineering', 'M.Tech Mechanical Engineering'], 
  ARRAY['CAD/CAM Lab', 'Manufacturing Lab', 'Thermal Engineering Lab'], 
  ARRAY['Industry Partnership Award', 'Research Excellence 2023'], 
  'active', 
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop'),

('Electronics & Telecommunication', 'ETC', 'Advanced electronics and communication systems', 'Dr. Sandeep Patil', 420, 
  ARRAY['B.Tech Electronics & Telecommunication', 'M.Tech Electronics'], 
  ARRAY['Digital Electronics Lab', 'Communication Systems Lab'], 
  ARRAY['Technical Excellence Award', 'Best Project Award 2023'], 
  'active', 
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop'),

('Artificial Intelligence & Data Science', 'AIDS', 'Cutting-edge AI and data science programs', 'Dr. Arjun Patel', 320, 
  ARRAY['B.Tech AI & Data Science', 'M.Tech Artificial Intelligence'], 
  ARRAY['AI Research Lab', 'Machine Learning Center'], 
  ARRAY['Innovation Award 2023', 'Best Research Papers'], 
  'active', 
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'),

('Artificial Intelligence & Machine Learning', 'AIML', 'Advanced AI/ML programs', 'Dr. Kavita Singh', 380, 
  ARRAY['B.Tech AI & ML', 'M.Tech Machine Learning'], 
  ARRAY['ML Research Lab', 'Robotics Lab'], 
  ARRAY['Research Excellence Award', 'Innovation in AI Award'], 
  'active', 
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop'),

('Bachelor of Computer Applications', 'BCA', 'Comprehensive computer applications program', 'Prof. Ravi Deshmukh', 280, 
  ARRAY['BCA - Bachelor of Computer Applications'], 
  ARRAY['Programming Lab', 'Web Development Lab'], 
  ARRAY['100% Placement Rate', 'Industry Partnership Award'], 
  'active', 
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'),

('Bachelor of Business Administration', 'BBA', 'Dynamic business administration program', 'Dr. Meera Joshi', 240, 
  ARRAY['BBA - Business Administration'], 
  ARRAY['Business Simulation Lab', 'Entrepreneurship Center'], 
  ARRAY['Best Business School Award', 'Entrepreneurship Excellence'], 
  'active', 
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'),

('First Year Engineering', 'FE', 'Foundation year for all engineering disciplines', 'Dr. Suresh Kale', 500, 
  ARRAY['First Year Engineering (All Branches)'], 
  ARRAY['Physics Lab', 'Chemistry Lab', 'Mathematics Center'], 
  ARRAY['Best Foundation Program', 'Academic Excellence Award'], 
  'active', 
  'https://images.unsplash.com/photo-1562408590-e32931084e23?w=400&h=250&fit=crop');

-- Insert sample students
INSERT INTO students (full_name, email, department, enrollment_no, status) VALUES
('Rahul Sharma', 'rahul.sharma@isbmcoe.edu.in', 'Computer Engineering', 'COMP2023001', 'active'),
('Priya Patel', 'priya.patel@isbmcoe.edu.in', 'Computer Engineering', 'COMP2023002', 'active'),
('Amit Kumar', 'amit.kumar@isbmcoe.edu.in', 'Mechanical Engineering', 'MECH2023001', 'active'),
('Sneha Desai', 'sneha.desai@isbmcoe.edu.in', 'Electronics & Telecommunication', 'ETC2023001', 'active'),
('Ravi Singh', 'ravi.singh@isbmcoe.edu.in', 'Artificial Intelligence & Data Science', 'AIDS2023001', 'active'),
('Kavya Reddy', 'kavya.reddy@isbmcoe.edu.in', 'Bachelor of Computer Applications', 'BCA2023001', 'active'),
('Arjun Gupta', 'arjun.gupta@isbmcoe.edu.in', 'Bachelor of Business Administration', 'BBA2023001', 'active'),
('Pooja Jain', 'pooja.jain@isbmcoe.edu.in', 'First Year Engineering', 'FE2024001', 'active');

-- Insert sample banners
INSERT INTO banners (title, subtitle, image_url, cta_text, cta_link, highlight_text, status, display_order) VALUES
('Welcome to ISBM College of Engineering', 'Premier Engineering Institution in Pune with NAAC B++ Accreditation', 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop', 'Explore Programs', '/programs-offered', 'NAAC B++ Accredited', 'active', 1),
('Excellence in Engineering Education', 'Shaping Future Engineers with Innovation and Technology', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop', 'Learn More', '/about', 'Industry Ready', 'active', 2),
('Admissions Open 2024-25', 'First Year & Direct Second Year Engineering Programs Now Open', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop', 'Apply Now', '/first-year-admission', 'Limited Seats', 'active', 3);

-- Insert sample marquee texts
INSERT INTO marquee_texts (text, link, priority, status, type) VALUES
('🎉 ISBM COE receives NAAC B++ Grade Accreditation! Excellence in Education Recognized 🏆', '/awards-recognition', 1, 'active', 'announcement'),
('📢 Admissions Open for 2024-25! Apply now for Engineering, BCA & BBA programs. Limited seats available!', '/first-year-admission', 2, 'active', 'announcement'),
('🚀 Highest Placement Package: ₹16 Lakhs! Join our success story with 95% placement rate', '/placements', 3, 'active', 'announcement'),
('📚 Extended Library Hours! Study 24/7 with our state-of-the-art facilities. Pioneer in Pune!', '/infrastructure', 4, 'active', 'announcement'),
('🎯 International Conference ICMETET 2024 - Register now for cutting-edge research presentations', '/cultural-events', 5, 'active', 'announcement');

-- Insert sample news and events
INSERT INTO news_events (title, excerpt, content, image_url, type, category, status, featured, event_date) VALUES
('NAAC B++ Accreditation Achievement', 'ISBM College of Engineering achieves prestigious NAAC B++ grade', 'ISBM College of Engineering has been awarded the prestigious NAAC B++ grade, recognizing our commitment to excellence in education, infrastructure, and student development.', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop', 'Achievement', 'Accreditation', 'published', true, now()),
('International Conference ICMETET 2024', 'Join researchers for cutting-edge technology discussions', 'International Conference on Multidisciplinary Emerging Trends in Engineering and Technology (ICMETET 2024) brings together leading researchers and industry experts.', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop', 'Event', 'Conference', 'published', true, '2024-12-15'),
('Record Placement Results 2024', 'Highest package of ₹16 lakhs with 95% placement rate', 'ISBM COE achieves outstanding placement results with the highest package of ₹16 lakhs and an overall placement rate of 95%.', 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop', 'Achievement', 'Placement', 'published', true, now()),
('Faculty Recruitment Drive 2024', 'Join our team of distinguished educators', 'ISBM COE invites applications for various faculty positions. Send your resume to career@isbmcoe.edu.in', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop', 'Recruitment', 'Faculty', 'published', false, now()),
('Extended Library and Lab Access', 'Pioneer in providing 24/7 facilities in Pune', 'ISBM COE continues to be the pioneer in Pune by providing extended library hours and laboratory access to students.', 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop', 'Infrastructure', 'Facilities', 'published', false, now());