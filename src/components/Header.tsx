
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b-2 border-college-accent shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo and College Info */}
          <div className="flex items-center space-x-6">
            {/* College Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png" 
                alt="ISBM College Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            
            {/* College Details */}
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-college-primary leading-tight">
                ISBM College of Engineering
              </h1>
              <div className="flex items-center space-x-4 mt-1">
                <p className="text-sm text-college-muted">
                  Affiliated to Savitribai Phule Pune University
                </p>
                <span className="text-college-muted">•</span>
                <p className="text-sm text-college-muted">
                  AICTE Approved
                </p>
              </div>
              <p className="text-xs text-college-accent font-semibold mt-1">
                DTE Code: EN6622 | Est. 2010
              </p>
            </div>
          </div>

          {/* NAAC Logo and Contact Info */}
          <div className="flex items-center space-x-6">
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden lg:flex flex-col space-y-2 text-right">
              <div className="flex items-center space-x-2 text-sm text-college-muted">
                <Phone className="h-4 w-4 text-college-accent" />
                <span>7410769206 | 02035012011</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-college-muted">
                <Mail className="h-4 w-4 text-college-accent" />
                <span>admissionscoe@isbm.ac.in</span>
              </div>
            </div>

            {/* NAAC Logo */}
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/30216b9d-1287-4b01-8ab1-8429e5f6f329.png" 
                alt="NAAC B++ Accredited" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xs font-semibold text-college-accent mt-1">
                NAAC B++
              </span>
            </div>
          </div>
        </div>

        {/* Mobile College Info */}
        <div className="md:hidden pb-4">
          <h1 className="text-xl font-bold text-college-primary mb-2">
            ISBM College of Engineering
          </h1>
          <p className="text-sm text-college-muted mb-1">
            Affiliated to Savitribai Phule Pune University | AICTE Approved
          </p>
          <p className="text-xs text-college-accent font-semibold">
            DTE Code: EN6622 | Est. 2010
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
