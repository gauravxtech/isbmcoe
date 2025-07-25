
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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

  const toggleMobileDropdown = (itemTitle: string) => {
    setActiveMobileDropdown(activeMobileDropdown === itemTitle ? null : itemTitle);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const navigationItems = [
    {
      title: 'About',
      items: [
        { name: 'Our Story', path: '/about' },
        { name: 'Vision & Mission', path: '/vision-mission' },
        { name: 'Administration', path: '/administration' },
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
        { name: 'First Year Engineering', path: '/departments/first-year' },
        { name: 'Computer Engineering', path: '/departments/computer-engineering' },
        { name: 'AI & Machine Learning', path: '/departments/aiml' },
        { name: 'AI & Data Science', path: '/departments/aids' },
        { name: 'Mechanical Engineering', path: '/departments/mechanical-engineering' },
        { name: 'Electronics Engineering (VLSI)', path: '/departments/electronics-telecommunication' },
        { name: 'Bachelor of Business Administration (BBA)', path: '/departments/bba' },
        { name: 'Bachelor of Computer Application (BCA)', path: '/departments/bca' },
        { name: 'Computer Science & Engineering', path: '#' }
      ]
    },
    {
      title: 'Admissions',
      items: [
        { name: 'Programs Offered', path: '/programs-offered' },
        { name: 'First Year Admission', path: '/first-year-admission' },
        { name: 'Direct Second Year', path: '/direct-second-year-admission' },
        { name: 'Fee Structure', path: '/fees-structure' },
        { name: 'Scholarships', path: '#' },
        { name: 'Application Process', path: '#' }
      ]
    },
    {
      title: 'Placements',
      items: [
        { name: 'Placement Overview', path: '/placements' },
        { name: 'Training Programs', path: '/training-programs' },
        { name: 'Industry Partners', path: '/industry-partners' },
        { name: 'Career Services', path: '/career-services' },
        { name: 'Alumni Network', path: '/alumni-network' }
      ]
    },
    {
      title: 'Life @ COE',
      items: [
        { name: 'Campus Life', path: '/life-at-campus' },
        { name: 'Cultural Events', path: '/cultural-events' },
        { name: 'Sports & Recreation', path: '#' },
        { name: 'Student Associations', path: '#', subItems: [
          { name: 'CESA', path: '/associations/cesa' },
          { name: 'MALSA', path: '/associations/malsa' },
          { name: 'AISA', path: '/associations/aisa' },
          { name: 'ETSA', path: '/associations/etsa' }
        ]},
        { name: 'Hostel Facilities', path: '/hostel' }
      ]
    },
    {
      title: 'Contact Us',
      items: [
        { name: 'Campus Location', path: '/campus-location' },
        { name: 'Administration', path: '/administration' },
        { name: 'Helpdesk', path: '/helpdesk' },
        { name: 'Directions', path: '/directions' },
        { name: 'Virtual Tour', path: '/virtual-tour' }
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
            {/* Home Link - Left Aligned */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-semibold hover:text-college-accent transition-colors duration-200 text-lg">
                Home
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center px-3 py-2 text-white hover:text-college-accent hover:bg-white/10 rounded-lg transition-all duration-200 font-medium whitespace-nowrap">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.title && (
                      <div 
                        className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-xl py-2 z-50 border border-gray-200 mt-2"
                        onMouseEnter={() => handleMouseEnter(item.title)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2">
                          {item.items.map((subItem, index) => (
                            <div key={subItem.name}>
                              {subItem.subItems ? (
                                <div className="group/sub relative">
                                  <div className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-college-accent/10 hover:to-college-primary/5 hover:text-college-primary transition-all duration-200 border-l-4 border-transparent hover:border-college-accent cursor-pointer">
                                    <span className="font-medium">{subItem.name}</span>
                                    <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                                  </div>
                                  <div className="absolute left-full top-0 w-64 bg-white shadow-2xl rounded-xl py-2 z-50 border border-gray-200 ml-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                                    {subItem.subItems.map((nestedItem, nestedIndex) => (
                                      <Link
                                        key={nestedItem.name}
                                        to={nestedItem.path}
                                        className="group flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-college-accent/10 hover:to-college-primary/5 hover:text-college-primary transition-all duration-200 border-l-4 border-transparent hover:border-college-accent"
                                      >
                                        <div className="flex items-center justify-between w-full">
                                          <span className="font-medium">{nestedItem.name}</span>
                                          <div className="w-2 h-2 rounded-full bg-college-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="group flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-college-accent/10 hover:to-college-primary/5 hover:text-college-primary transition-all duration-200 border-l-4 border-transparent hover:border-college-accent"
                                >
                                  <div className="flex items-center justify-between w-full">
                                    <span className="font-medium">{subItem.name}</span>
                                    <div className="w-2 h-2 rounded-full bg-college-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                  </div>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Login Button - Right Aligned */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <Link to="/login">
                <Button 
                  className="bg-gradient-to-r from-college-accent to-college-warning hover:from-orange-600 hover:to-red-500 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex-shrink-0">
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
          <div ref={mobileMenuRef} className="lg:hidden bg-college-primary/95 backdrop-blur-md border-t border-white/20">
            <div className="px-4 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-1">
                  <button 
                    onClick={() => toggleMobileDropdown(item.title)}
                    className="flex items-center justify-between w-full px-3 py-3 text-white hover:text-college-accent hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeMobileDropdown === item.title ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {activeMobileDropdown === item.title && (
                    <div className="pl-6 space-y-1">
                      {item.items.map((subItem) => (
                        <div key={subItem.name}>
                          {subItem.subItems ? (
                            <div>
                              <div className="block px-3 py-2 text-gray-200 hover:text-college-accent hover:bg-white/5 rounded transition-colors duration-200 text-sm font-medium">
                                {subItem.name}
                              </div>
                              <div className="pl-4 space-y-1">
                                {subItem.subItems.map((nestedItem) => (
                                  <Link
                                    key={nestedItem.name}
                                    to={nestedItem.path}
                                    className="block px-3 py-2 text-gray-300 hover:text-college-accent hover:bg-white/5 rounded transition-colors duration-200 text-xs"
                                    onClick={closeMobileMenu}
                                  >
                                    {nestedItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-3 py-2 text-gray-200 hover:text-college-accent hover:bg-white/5 rounded transition-colors duration-200 text-sm"
                              onClick={closeMobileMenu}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/20">
                <Link to="/login" onClick={closeMobileMenu}>
                  <Button 
                    className="w-full bg-gradient-to-r from-college-accent to-college-warning hover:from-orange-600 hover:to-red-500 text-white font-semibold rounded-lg"
                  >
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
