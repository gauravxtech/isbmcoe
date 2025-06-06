
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
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-3 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="whitespace-nowrap animate-marquee relative z-10">
          <span className="inline-block">
            {announcements.map((announcement, index) => (
              <span key={index} className="mx-8 font-medium text-sm md:text-base">
                {announcement}
              </span>
            ))}
            {announcements.map((announcement, index) => (
              <span key={`repeat-${index}`} className="mx-8 font-medium text-sm md:text-base">
                {announcement}
              </span>
            ))}
          </span>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/20' 
          : 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Home Link - Left aligned */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className={`text-lg font-bold transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-slate-800 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                Home
              </Link>
            </div>

            {/* Desktop Navigation - Center aligned with equal spacing */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                      isScrolled
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-blue-300 hover:bg-white/10'
                    }`}>
                      {item.title}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.title && (
                      <div 
                        className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-2xl py-3 z-50 border border-gray-100 mt-2 animate-fade-in"
                        onMouseEnter={() => handleMouseEnter(item.title)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2">
                          {item.items.map((subItem, index) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="group flex items-center px-6 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-300 border-l-4 border-transparent hover:border-blue-500 relative overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300"></div>
                              <div className="flex items-center justify-between w-full relative z-10">
                                <span className="font-medium">{subItem.name}</span>
                                <div className="w-2 h-2 rounded-full bg-blue-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                              </div>
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
            <div className="hidden md:flex items-center flex-shrink-0">
              <Link to="/login">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base">
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isScrolled 
                    ? 'text-slate-800 hover:bg-slate-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/20 animate-slide-up">
            <div className="px-4 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-1">
                  <button className="flex items-center justify-between w-full px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium">
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pl-6 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 px-4">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg py-3">
                    Login
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
