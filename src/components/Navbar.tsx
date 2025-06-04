
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'About',
      items: ['Our Story', 'Vision & Mission', 'Leadership', 'Infrastructure']
    },
    {
      title: 'NAAC',
      items: ['B++ Accreditation', 'Quality Initiatives', 'Documents', 'Assessment Reports']
    },
    {
      title: 'Department',
      items: ['Computer Science', 'Computer Engineering', 'Artificial Intelligence & ML', 'AI & Data Science', 'Mechanical Engineering', 'Electronics Engineering (VLSI)']
    },
    {
      title: 'Admission',
      items: ['UG Programs', 'Direct Second Year', 'Fee Structure', 'Scholarships']
    },
    {
      title: 'Placement',
      items: ['Placement Records', 'Training Programs', 'Industry Partners', 'Career Services']
    },
    {
      title: 'Life @ COE',
      items: ['Campus Life', 'Sports', 'Cultural Events', 'Student Clubs']
    },
    {
      title: 'Contact Us',
      items: ['Campus Location', 'Administration', 'Helpdesk', 'Directions']
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-college-primary shadow-lg' : 'bg-college-primary'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and College Name */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-college-primary font-bold text-lg">COE</span>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-white font-bold text-xl">ISBM College of Engineering</h1>
              <p className="text-blue-200 text-xs">Affiliated to Savitribai Phule Pune University | AICTE Approved | NAAC B++</p>
            </div>
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
                <button className="flex items-center px-3 py-2 text-white hover:text-blue-200 transition-colors duration-200">
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        to="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-college-primary transition-colors duration-200"
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
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-college-accent hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('#', '_blank')}
            >
              Apply Online
            </Button>
            <Link to="/login">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-college-primary transition-all duration-300"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-college-primary border-t border-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.title} className="space-y-1">
                <button className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-blue-200 transition-colors duration-200">
                  {item.title}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="pl-6 space-y-1">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem}
                      to="#"
                      className="block px-3 py-2 text-blue-200 hover:text-white transition-colors duration-200"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Button 
                className="w-full bg-college-accent hover:bg-orange-600 text-white font-semibold"
                onClick={() => window.open('#', '_blank')}
              >
                Apply Online
              </Button>
              <Link to="/login" className="block">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-college-primary">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
