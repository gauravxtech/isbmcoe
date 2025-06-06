
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (itemTitle: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(itemTitle);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const navigationItems = [
    {
      title: 'About',
      items: [
        { name: 'Our Story', path: '/about' },
        { name: 'Vision & Mission', path: '/vision-mission' },
        { name: 'Leadership', path: '#' },
        { name: 'Infrastructure', path: '#' },
        { name: 'Awards & Recognition', path: '#' }
      ]
    },
    {
      title: 'NAAC',
      items: [
        { name: 'B++ Accreditation', path: '#' },
        { name: 'Quality Initiatives', path: '#' },
        { name: 'Documents', path: '#' },
        { name: 'Assessment Reports', path: '#' },
        { name: 'Continuous Improvement', path: '#' }
      ]
    },
    {
      title: 'Departments',
      items: [
        { name: 'First Year Engineering', path: '/first-year-department' },
        { name: 'Computer Engineering', path: '/computer-engineering-department' },
        { name: 'AI & Machine Learning', path: '/aiml-department' },
        { name: 'AI & Data Science', path: '/aids-department' },
        { name: 'Mechanical Engineering', path: '/mechanical-department' },
        { name: 'Electronics Engineering (VLSI)', path: '/etc-department' },
        { name: 'Bachelor of Business Administration (BBA)', path: '/bba-department' },
        { name: 'Bachelor of Computer Application (BCA)', path: '/bca-department' },
        { name: 'Computer Science & Engineering', path: '#' }
      ]
    },
    {
      title: 'Admissions',
      items: [
        { name: 'UG Programs', path: '#' },
        { name: 'Direct Second Year', path: '#' },
        { name: 'Fee Structure', path: '#' },
        { name: 'Scholarships', path: '#' },
        { name: 'Application Process', path: '#' }
      ]
    },
    {
      title: 'Placements',
      items: [
        { name: 'Placement Records', path: '#' },
        { name: 'Training Programs', path: '#' },
        { name: 'Industry Partners', path: '#' },
        { name: 'Career Services', path: '#' },
        { name: 'Alumni Network', path: '#' }
      ]
    },
    {
      title: 'Life @ COE',
      items: [
        { name: 'Campus Life', path: '#' },
        { name: 'Sports & Recreation', path: '#' },
        { name: 'Cultural Events', path: '#' },
        { name: 'Student Clubs', path: '#' },
        { name: 'Hostel Facilities', path: '#' }
      ]
    },
    {
      title: 'Contact Us',
      items: [
        { name: 'Campus Location', path: '#' },
        { name: 'Administration', path: '#' },
        { name: 'Helpdesk', path: '#' },
        { name: 'Directions', path: '#' },
        { name: 'Virtual Tour', path: '#' }
      ]
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
            {/* Home Link - Left aligned */}
            <div className="flex items-center">
              <Link to="/" className="text-white font-semibold hover:text-college-accent transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10">
                Home
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center px-4 py-2 text-white hover:text-college-accent hover:bg-white/10 rounded-lg transition-all duration-300 font-medium group-hover:scale-105">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {activeDropdown === item.title && (
                      <div 
                        className="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl py-3 z-50 border border-gray-200/50 mt-2 animate-fade-in"
                        onMouseEnter={() => handleMouseEnter(item.title)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          animation: 'slideDown 0.3s ease-out',
                        }}
                      >
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 backdrop-blur-lg rotate-45 border-l border-t border-gray-200/50"></div>
                        <div className="py-2">
                          {item.items.map((subItem, index) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="group flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-college-accent/10 hover:to-college-primary/5 hover:text-college-primary transition-all duration-300 border-l-4 border-transparent hover:border-college-accent relative overflow-hidden"
                              style={{
                                animationDelay: `${index * 50}ms`,
                                animation: 'slideInLeft 0.4s ease-out'
                              }}
                            >
                              <div className="flex items-center justify-between w-full relative z-10">
                                <span className="font-medium">{subItem.name}</span>
                                <div className="w-2 h-2 rounded-full bg-college-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-college-accent/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Login Button - Right aligned */}
            <div className="hidden lg:flex items-center">
              <Link to="/login">
                <Button 
                  className="bg-gradient-to-r from-college-accent to-college-warning hover:from-orange-600 hover:to-red-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg hover:shadow-xl"
                >
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-college-accent transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-college-primary/95 backdrop-blur-md border-t border-white/20 animate-fade-in">
            <div className="px-4 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item, itemIndex) => (
                <div key={item.title} className="space-y-1">
                  <button 
                    className="flex items-center justify-between w-full px-3 py-3 text-white hover:text-college-accent hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium"
                    style={{
                      animationDelay: `${itemIndex * 100}ms`,
                      animation: 'slideInRight 0.4s ease-out'
                    }}
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pl-6 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-3 py-2 text-gray-200 hover:text-college-accent hover:bg-white/5 rounded transition-colors duration-200"
                        style={{
                          animationDelay: `${(itemIndex * 100) + (subIndex * 50)}ms`,
                          animation: 'slideInRight 0.4s ease-out'
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <Link to="/login">
                  <Button 
                    className="w-full bg-gradient-to-r from-college-accent to-college-warning hover:from-orange-600 hover:to-red-500 text-white font-semibold rounded-lg transition-all duration-300"
                    style={{
                      animation: 'slideInRight 0.4s ease-out',
                      animationDelay: '600ms'
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
