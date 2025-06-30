-- First, let's check what types are allowed in the marquee_texts table
-- Looking at the error, it seems the type constraint is more restrictive than expected
-- Let's insert the marquee data with allowed types

-- Insert existing banner data into the banners table
INSERT INTO public.banners (title, subtitle, image_url, cta_text, cta_link, highlight_text, status, display_order) VALUES
(
  'Welcome to ISBM College of Engineering',
  'Premier Engineering Institution in Pune with NAAC B++ Accreditation',
  '/lovable-uploads/college-campus-1.jpg',
  'Explore Programs',
  '/programs',
  'NAAC B++ Accredited',
  'active',
  1
),
(
  'Admissions Open 2024-25',
  'First Year & Direct Second Year Engineering Programs Now Open',
  '/lovable-uploads/college-campus-2.jpg',
  'Apply Now',
  '/admissions/first-year',
  'Limited Seats Available',
  'active',
  2
),
(
  'Record Placements Achieved',
  'Our students secured highest package of ₹16 Lakhs with 95% placement rate',
  '/lovable-uploads/a07dab32-a06d-4aa9-ab59-2d061f93201f.png',
  'View Placements',
  '/placements',
  '95% Placement Rate',
  'active',
  3
),
(
  'State-of-the-Art Facilities',
  'Modern labs, libraries, and infrastructure to support quality education',
  '/lovable-uploads/b592b170-56b4-4e52-b3ff-c4f500363b94.png',
  'Virtual Tour',
  '/virtual-tour',
  'World-Class Infrastructure',
  'active',
  4
),
(
  'Industry Partnerships',
  'Strong industry connections ensuring practical learning and career opportunities',
  '/lovable-uploads/c63a8ec4-3adb-47a0-9e29-d081de2cff06.png',
  'Learn More',
  '/industry-partners',
  'Industry Ready',
  'active',
  5
);

-- Insert existing marquee data using only 'announcement' type (the default)
INSERT INTO public.marquee_texts (text, link, priority, status, type) VALUES
(
  '🎉 ISBM College receives NAAC B++ Accreditation - A milestone achievement!',
  '/news/naac-accreditation',
  1,
  'active',
  'announcement'
),
(
  '📢 Admissions Open for First Year & Direct Second Year Engineering Programs 2024-25',
  '/admissions/first-year',
  2,
  'active',
  'announcement'
),
(
  '🏆 Record Placement: ₹16 Lakhs Highest Package achieved by our students',
  '/placements',
  3,
  'active',
  'announcement'
),
(
  '🔬 International Conference ICMETET 2024 - Registration Open',
  '/events/icmetet-2024',
  4,
  'inactive',
  'announcement'
),
(
  '📚 New Library Digital Resources Now Available - Access 24/7',
  '/library',
  5,
  'active',
  'announcement'
),
(
  '🎓 Alumni Meet 2024 - Register Now to Connect with Industry Leaders',
  '/alumni-network',
  6,
  'active',
  'announcement'
);

-- Create folders in media_library for better organization
INSERT INTO public.media_library (filename, original_filename, file_url, file_type, file_size, mime_type, alt_text, folder) VALUES
(
  'college-campus-1.jpg',
  'college-campus-1.jpg',
  '/assets/campus-1.jpg',
  'image',
  524288,
  'image/jpeg',
  'ISBM College Campus Main Building',
  'banners'
),
(
  'college-campus-2.jpg',
  'college-campus-2.jpg',
  '/assets/campus-2.jpg',
  'image',
  487234,
  'image/jpeg',
  'ISBM College Campus Library',
  'banners'
),
(
  'placement-stats.png',
  'a07dab32-a06d-4aa9-ab59-2d061f93201f.png',
  '/assets/slider-1.png',
  'image',
  654321,
  'image/png',
  'Placement Statistics Dashboard',
  'banners'
),
(
  'facilities-lab.png',
  'b592b170-56b4-4e52-b3ff-c4f500363b94.png',
  '/assets/slider-2.png',
  'image',
  789012,
  'image/png',
  'Modern Laboratory Facilities',
  'banners'
),
(
  'industry-partners.png',
  'c63a8ec4-3adb-47a0-9e29-d081de2cff06.png',
  '/assets/slider-3.png',
  'image',
  456789,
  'image/png',
  'Industry Partnership Network',
  'banners'
);
