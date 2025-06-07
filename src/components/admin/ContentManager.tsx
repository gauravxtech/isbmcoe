
import React from 'react';
import ContentManagerHeader from './ContentManagerHeader';
import ContentManagerTabs from './ContentManagerTabs';

const ContentManager = () => {
  return (
    <div className="space-y-6">
      <ContentManagerHeader />
      <ContentManagerTabs />
    </div>
  );
};

export default ContentManager;
