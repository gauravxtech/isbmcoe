-- First, insert sample departments that match the website
INSERT INTO departments (name, code, description, hod_name, student_count, programs, facilities, achievements, status, image_url) VALUES
('Computer Engineering', 'COMP', 'Leading department in software development and computer systems with cutting-edge curriculum and industry partnerships', 'Dr. Rajesh Kumar', 890, 
  ARRAY['B.Tech Computer Engineering', 'M.Tech Computer Engineering', 'M.Tech Software Engineering'], 
  ARRAY['Advanced Computing Lab', 'Software Development Center', 'AI Research Lab', 'Networking Lab', 'Database Management Lab'], 
  ARRAY['Best Department Award 2023', '100% Placement Record', 'Industry Excellence Award', 'Research Innovation Grant'], 
  'active', 
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'),

('Mechanical Engineering', 'MECH', 'Excellence in mechanical design and manufacturing technologies with state-of-the-art facilities', 'Dr. Priya Sharma', 650, 
  ARRAY['B.Tech Mechanical Engineering', 'M.Tech Mechanical Engineering', 'M.Tech Thermal Engineering'], 
  ARRAY['CAD/CAM Lab', 'Manufacturing Lab', 'Thermal Engineering Lab', 'Fluid Mechanics Lab', 'Robotics Lab'], 
  ARRAY['Industry Partnership Award', 'Research Excellence 2023', 'Best Innovation Project', 'Green Technology Award'], 
  'active', 
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop'),

('Electronics & Telecommunication', 'ETC', 'Advanced electronics and communication systems with focus on emerging technologies', 'Dr. Sandeep Patil', 420, 
  ARRAY['B.Tech Electronics & Telecommunication', 'M.Tech Electronics', 'M.Tech Communication Systems'], 
  ARRAY['Digital Electronics Lab', 'Communication Systems Lab', 'VLSI Design Lab', 'Embedded Systems Lab', 'Signal Processing Lab'], 
  ARRAY['Technical Excellence Award', 'Best Project Award 2023', 'Industry Collaboration Excellence'], 
  'active', 
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop'),

('Artificial Intelligence & Data Science', 'AIDS', 'Cutting-edge AI and data science programs with industry-relevant curriculum', 'Dr. Arjun Patel', 320, 
  ARRAY['B.Tech AI & Data Science', 'M.Tech Artificial Intelligence', 'M.Tech Data Science'], 
  ARRAY['AI Research Lab', 'Machine Learning Center', 'Data Science Lab', 'Deep Learning Lab', 'Computer Vision Lab'], 
  ARRAY['Innovation Award 2023', 'Best Research Papers', 'Industry Partnership Excellence', 'AI Excellence Award'], 
  'active', 
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'),

('Artificial Intelligence & Machine Learning', 'AIML', 'Advanced AI/ML programs focusing on practical applications and research', 'Dr. Kavita Singh', 380, 
  ARRAY['B.Tech AI & ML', 'M.Tech Machine Learning', 'M.Tech Robotics'], 
  ARRAY['ML Research Lab', 'Robotics Lab', 'Neural Networks Lab', 'Computer Vision Lab', 'NLP Lab'], 
  ARRAY['Research Excellence Award', 'Innovation in AI Award', 'Best Student Projects 2023'], 
  'active', 
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop'),

('Bachelor of Computer Applications', 'BCA', 'Comprehensive computer applications program with practical industry exposure', 'Prof. Ravi Deshmukh', 280, 
  ARRAY['BCA - Bachelor of Computer Applications', 'BCA (Data Science)', 'BCA (Web Development)'], 
  ARRAY['Programming Lab', 'Web Development Lab', 'Database Lab', 'Software Testing Lab', 'Project Development Center'], 
  ARRAY['100% Placement Rate', 'Industry Partnership Award', 'Best Academic Performance'], 
  'active', 
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'),

('Bachelor of Business Administration', 'BBA', 'Dynamic business administration program with entrepreneurship focus', 'Dr. Meera Joshi', 240, 
  ARRAY['BBA - Business Administration', 'BBA (Digital Marketing)', 'BBA (International Business)'], 
  ARRAY['Business Simulation Lab', 'Entrepreneurship Center', 'Digital Marketing Lab', 'Finance Lab', 'HR Management Center'], 
  ARRAY['Best Business School Award', 'Entrepreneurship Excellence', 'Industry Connect Award'], 
  'active', 
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'),

('First Year Engineering', 'FE', 'Foundation year for all engineering disciplines with strong fundamentals', 'Dr. Suresh Kale', 500, 
  ARRAY['First Year Engineering (All Branches)', 'Foundation Engineering Program'], 
  ARRAY['Physics Lab', 'Chemistry Lab', 'Mathematics Center', 'Engineering Graphics Lab', 'Workshop'], 
  ARRAY['Best Foundation Program', 'Academic Excellence Award', 'Student Development Award'], 
  'active', 
  'https://images.unsplash.com/photo-1562408590-e32931084e23?w=400&h=250&fit=crop')
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  hod_name = EXCLUDED.hod_name,
  student_count = EXCLUDED.student_count,
  programs = EXCLUDED.programs,
  facilities = EXCLUDED.facilities,
  achievements = EXCLUDED.achievements,
  image_url = EXCLUDED.image_url,
  updated_at = now();

-- Insert sample students for realistic counts
INSERT INTO students (full_name, email, department, enrollment_no, status) VALUES
('Rahul Sharma', 'rahul.sharma@isbmcoe.edu.in', 'Computer Engineering', 'COMP2023001', 'active'),
('Priya Patel', 'priya.patel@isbmcoe.edu.in', 'Computer Engineering', 'COMP2023002', 'active'),
('Amit Kumar', 'amit.kumar@isbmcoe.edu.in', 'Mechanical Engineering', 'MECH2023001', 'active'),
('Sneha Desai', 'sneha.desai@isbmcoe.edu.in', 'Electronics & Telecommunication', 'ETC2023001', 'active'),
('Ravi Singh', 'ravi.singh@isbmcoe.edu.in', 'Artificial Intelligence & Data Science', 'AIDS2023001', 'active'),
('Kavya Reddy', 'kavya.reddy@isbmcoe.edu.in', 'Bachelor of Computer Applications', 'BCA2023001', 'active'),
('Arjun Gupta', 'arjun.gupta@isbmcoe.edu.in', 'Bachelor of Business Administration', 'BBA2023001', 'active'),
('Pooja Jain', 'pooja.jain@isbmcoe.edu.in', 'First Year Engineering', 'FE2024001', 'active')
ON CONFLICT (email) DO NOTHING;

-- Insert sample banners that match the main website
INSERT INTO banners (title, subtitle, image_url, cta_text, cta_link, highlight_text, status, display_order) VALUES
('Welcome to ISBM College of Engineering', 'Premier Engineering Institution in Pune with NAAC B++ Accreditation', 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop', 'Explore Programs', '/programs-offered', 'NAAC B++ Accredited', 'active', 1),
('Excellence in Engineering Education', 'Shaping Future Engineers with Innovation and Technology', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop', 'Learn More', '/about', 'Industry Ready', 'active', 2),
('Admissions Open 2024-25', 'First Year & Direct Second Year Engineering Programs Now Open', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop', 'Apply Now', '/first-year-admission', 'Limited Seats', 'active', 3)
ON CONFLICT (title) DO UPDATE SET
  subtitle = EXCLUDED.subtitle,
  image_url = EXCLUDED.image_url,
  cta_text = EXCLUDED.cta_text,
  cta_link = EXCLUDED.cta_link,
  highlight_text = EXCLUDED.highlight_text,
  updated_at = now();

-- Insert sample marquee texts
INSERT INTO marquee_texts (text, link, priority, status, type) VALUES
('🎉 ISBM COE receives NAAC B++ Grade Accreditation! Excellence in Education Recognized 🏆', '/awards-recognition', 1, 'active', 'announcement'),
('📢 Admissions Open for 2024-25! Apply now for Engineering, BCA & BBA programs. Limited seats available!', '/first-year-admission', 2, 'active', 'announcement'),
('🚀 Highest Placement Package: ₹16 Lakhs! Join our success story with 95% placement rate', '/placements', 3, 'active', 'announcement'),
('📚 Extended Library Hours! Study 24/7 with our state-of-the-art facilities. Pioneer in Pune!', '/infrastructure', 4, 'active', 'announcement'),
('🎯 International Conference ICMETET 2024 - Register now for cutting-edge research presentations', '/cultural-events', 5, 'active', 'announcement')
ON CONFLICT (text) DO UPDATE SET
  link = EXCLUDED.link,
  priority = EXCLUDED.priority,
  status = EXCLUDED.status,
  updated_at = now();

-- Insert sample news and events
INSERT INTO news_events (title, excerpt, content, image_url, type, category, status, featured, event_date) VALUES
('NAAC B++ Accreditation Achievement', 'ISBM College of Engineering achieves prestigious NAAC B++ grade', 'ISBM College of Engineering has been awarded the prestigious NAAC B++ grade, recognizing our commitment to excellence in education, infrastructure, and student development. This achievement reflects our dedication to providing world-class engineering education.', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop', 'Achievement', 'Accreditation', 'published', true, now()),
('International Conference ICMETET 2024', 'Join researchers for cutting-edge technology discussions', 'International Conference on Multidisciplinary Emerging Trends in Engineering and Technology (ICMETET 2024) brings together leading researchers, academicians, and industry experts to discuss the latest innovations and trends in engineering and technology.', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop', 'Event', 'Conference', 'published', true, '2024-12-15'),
('Record Placement Results 2024', 'Highest package of ₹16 lakhs with 95% placement rate', 'ISBM COE achieves outstanding placement results with the highest package of ₹16 lakhs and an overall placement rate of 95%. Our students continue to excel in top companies across various industries.', 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop', 'Achievement', 'Placement', 'published', true, now()),
('Faculty Recruitment Drive 2024', 'Join our team of distinguished educators', 'ISBM COE invites applications for various faculty positions including Professor, Associate Professor, and Assistant Professor roles across all departments. Interested candidates should send their resume to career@isbmcoe.edu.in', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop', 'Recruitment', 'Faculty', 'published', false, now()),
('Extended Library and Lab Access', 'Pioneer in providing 24/7 facilities in Pune', 'ISBM COE continues to be the pioneer in Pune by providing extended library hours and laboratory access to students. Our state-of-the-art facilities are available 24/7 to support student learning and research.', 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop', 'Infrastructure', 'Facilities', 'published', false, now())
ON CONFLICT (title) DO UPDATE SET
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  category = EXCLUDED.category,
  updated_at = now();

-- Create administrative profiles for different departments
INSERT INTO profiles (id, email, full_name, role, department, status) VALUES
(gen_random_uuid(), 'comp.admin@isbmcoe.edu.in', 'Dr. Rajesh Kumar', 'admin', 'Computer Engineering', 'active'),
(gen_random_uuid(), 'mech.admin@isbmcoe.edu.in', 'Dr. Priya Sharma', 'admin', 'Mechanical Engineering', 'active'),
(gen_random_uuid(), 'etc.admin@isbmcoe.edu.in', 'Dr. Sandeep Patil', 'admin', 'Electronics & Telecommunication', 'active'),
(gen_random_uuid(), 'aids.admin@isbmcoe.edu.in', 'Dr. Arjun Patel', 'admin', 'Artificial Intelligence & Data Science', 'active'),
(gen_random_uuid(), 'aiml.admin@isbmcoe.edu.in', 'Dr. Kavita Singh', 'admin', 'Artificial Intelligence & Machine Learning', 'active'),
(gen_random_uuid(), 'bca.admin@isbmcoe.edu.in', 'Prof. Ravi Deshmukh', 'admin', 'Bachelor of Computer Applications', 'active'),
(gen_random_uuid(), 'bba.admin@isbmcoe.edu.in', 'Dr. Meera Joshi', 'admin', 'Bachelor of Business Administration', 'active'),
(gen_random_uuid(), 'fe.admin@isbmcoe.edu.in', 'Dr. Suresh Kale', 'admin', 'First Year Engineering', 'active'),
(gen_random_uuid(), 'sports.admin@isbmcoe.edu.in', 'Prof. Sachin Tendulkar', 'admin', 'Sports Cell', 'active'),
(gen_random_uuid(), 'cultural.admin@isbmcoe.edu.in', 'Dr. Priya Kulkarni', 'admin', 'Cultural Cell', 'active'),
(gen_random_uuid(), 'library.admin@isbmcoe.edu.in', 'Ms. Sunita Rao', 'admin', 'Library', 'active'),
(gen_random_uuid(), 'hostel.admin@isbmcoe.edu.in', 'Mr. Vikram Chavan', 'admin', 'Hostel', 'active'),
(gen_random_uuid(), 'accounts.admin@isbmcoe.edu.in', 'Mr. Rahul Agarwal', 'admin', 'Accounts', 'active')
ON CONFLICT (email) DO NOTHING;