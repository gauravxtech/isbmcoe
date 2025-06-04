
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'About',
      items: ['Our Story', 'Vision & Mission', 'Leadership', 'Infrastructure', 'Awards & Recognition']
    },
    {
      title: 'NAAC',
      items: ['B++ Accreditation', 'Quality Initiatives', 'Documents', 'Assessment Reports', 'Continuous Improvement']
    },
    {
      title: 'Departments',
      items: ['Computer Science & Engineering', 'Mechanical Engineering', 'Electronics Engineering (VLSI)', 'AI & Machine Learning', 'AI & Data Science', 'Computer Engineering']
    },
    {
      title: 'Admissions',
      items: ['UG Programs', 'Direct Second Year', 'Fee Structure', 'Scholarships', 'Application Process']
    },
    {
      title: 'Placements',
      items: ['Placement Records', 'Training Programs', 'Industry Partners', 'Career Services', 'Alumni Network']
    },
    {
      title: 'Life @ COE',
      items: ['Campus Life', 'Sports & Recreation', 'Cultural Events', 'Student Clubs', 'Hostel Facilities']
    },
    {
      title: 'Contact Us',
      items: ['Campus Location', 'Administration', 'Helpdesk', 'Directions', 'Virtual Tour']
    }
  ];

  const announcements = [
    "🎓 Admissions Open for 2024-25 | Last Date: 30th June 2024",
    "🏆 International Conference on Multidisciplinary Emerging Trends in Engineering (ICMETET 2024)",
    "⭐ NAAC B++ Accredited Institution | Best Engineering College Award",
    "📞 Contact: 7410769206 for Admissions | admissionscoe@isbm.ac.in"
  ];

  return (
    <>
      {/* Auto-scrolling Marquee */}
      <div className="bg-gradient-to-r from-college-accent to-college-warning text-white py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="inline-block">
            {announcements.map((announcement, index) => (
              <span key={index} className="mx-8 font-medium">
                {announcement}
              </span>
            ))}
            {announcements.map((announcement, index) => (
              <span key={`repeat-${index}`} className="mx-8 font-medium">
                {announcement}
              </span>
            ))}
          </span>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-college-primary/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-college-primary to-college-secondary'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Home Link */}
            <div className="flex items-center">
              <Link to="/" className="text-white font-semibold hover:text-college-accent transition-colors duration-200">
                Home
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center px-4 py-2 text-white hover:text-college-accent hover:bg-white/10 rounded-lg transition-all duration-200 font-medium">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-3 z-50 border border-gray-100">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem}
                          to="#"
                          className="block px-4 py-3 text-gray-700 hover:bg-college-accent hover:text-white transition-all duration-200 border-l-4 border-transparent hover:border-college-accent"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Apply Online Button */}
            <div className="hidden md:flex items-center">
              <Link to="/login">
                <Button 
                  className="bg-gradient-to-r from-college-accent to-college-warning hover:from-orange-600 hover:to-red-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  Apply Online
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-college-accent transition-colors duration-200 p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-college-primary/95 backdrop-blur-md border-t border-white/20">
            <div className="px-4 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-1">
                  <button className="flex items-center justify-between w-full px-3 py-3 text-white hover:text-college-accent hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium">
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pl-6 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        to="#"
                        className="block px-3 py-2 text-gray-200 hover:text-college-accent hover:bg-white/5 rounded transition-colors duration-200"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <Link to="/login">
                  <Button 
                    className="w-full bg-gradient-to-r from-college-accent to-college-warning hover:from-orange-600 hover:to-red-500 text-white font-semibold rounded-lg"
                  >
                    Apply Online
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
