
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useActiveMarqueeTexts } from '@/hooks/useData';

const Header = () => {
  const { data: marqueeTexts = [] } = useActiveMarqueeTexts();

  return (
    <header className="bg-college-primary text-white">
      {/* Top marquee bar */}
      {marqueeTexts.length > 0 && (
        <div className="bg-college-secondary py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-8 text-sm font-medium">
              {marqueeTexts.map((text, index) => (
                <span key={text.id}>
                  {text.link ? (
                    <a href={text.link} className="hover:underline" target="_blank" rel="noopener noreferrer">
                      {text.text}
                    </a>
                  ) : (
                    text.text
                  )}
                  {index < marqueeTexts.length - 1 && ' • '}
                </span>
              ))}
            </span>
          </div>
        </div>
      )}

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Logo and College Info */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png" 
              alt="ISBM College Logo" 
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">ISBM College of Engineering</h1>
              <p className="text-blue-100 text-sm lg:text-base">Excellence in Technical Education</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91-7410769206</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>admissionscoe@isbm.ac.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
