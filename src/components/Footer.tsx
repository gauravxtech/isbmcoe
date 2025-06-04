import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    "About ISBM", "Academic Programs", "Admissions", "Faculty",
    "Research", "Campus Life", "Alumni", "Careers"
  ];

  const campuses = [
    { name: "ISB&M Pune-Nande", location: "Main Engineering Campus" },
    { name: "ISB&M Pune-Mulshi", location: "Management Campus" },
    { name: "ISB&M College of Commerce", location: "Commerce Campus" },
    { name: "ISB&M Kolkata", location: "Eastern Campus" },
    { name: "ISB&M Bangalore", location: "Southern Campus" },
    { name: "ISBM Media", location: "Media Studies" }
  ];

  const programs = [
    "Computer Science Engineering", "Computer Engineering", "Artificial Intelligence & ML", 
    "AI & Data Science", "Mechanical Engineering", "Electronics Engineering (VLSI)", 
    "Direct Second Year Admission", "Research Programs"
  ];

  const otherLinks = [
    "Courses Offered", "Admission Process", "Rankings", "Awards & Accreditations", "Major Recruiters"
  ];

  return (
    <footer className="bg-college-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ISBM Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png" 
                  alt="ISBM College Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">ISBM College</h3>
                <p className="text-sm text-gray-300">of Engineering</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              NAAC B++ Accredited institution affiliated to Savitribai Phule Pune University. 
              A constituent of People's Empowerment Group, pioneering engineering education since 2010.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-college-accent flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  S.No 44/1, 44/1/2, Nande Village, Ahead of Pashan Sus Road, Pune - 412115
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-college-accent flex-shrink-0" />
                <span className="text-gray-300">7410769206 | 02035012011/2012</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-college-accent flex-shrink-0" />
                <span className="text-gray-300">admissionscoe@isbm.ac.in</span>
              </div>
            </div>
          </div>

          {/* Our Campuses */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Our Campuses</h4>
            <ul className="space-y-3">
              {campuses.map((campus, index) => (
                <li key={index}>
                  <div className="border-l-2 border-college-accent pl-3">
                    <h5 className="font-medium text-white text-sm">{campus.name}</h5>
                    <p className="text-gray-400 text-xs">{campus.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Academic Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-college-accent transition-colors duration-200 text-sm"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Other Links</h4>
            <ul className="space-y-3 mb-6">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-college-accent transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="font-medium mb-4 text-white">Social Media</h5>
              <div className="flex space-x-3">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-colors duration-200">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors duration-200">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-200">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="text-sm text-gray-300">
              © 2025 ISBM COE | Developed by Innovara Dynamics
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
