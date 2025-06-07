
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PlaceholderTabContentProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PlaceholderTabContent = ({ icon: Icon, title, description }: PlaceholderTabContentProps) => {
  return (
    <div className="text-center py-16">
      <Icon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500">Coming soon...</p>
    </div>
  );
};

export default PlaceholderTabContent;
