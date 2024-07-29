'use client';
import React from 'react';
import { Header as CarbonHeader, HeaderName } from 'carbon-components-react';

const Header: React.FC = () => {
  return (
    <CarbonHeader
      aria-label="Header"
      className="bg-carbon-blue border-b border-gray-300 py-4" // Added padding here for space before and after
    >
      <HeaderName 
        href="/" 
        prefix="    " 
        className="text-white text-2xl font-bold"
      >
        {/* Add your logo or brand name here */}
        AI Sustainability Catalog
      </HeaderName>
    </CarbonHeader>
  );
};

export default Header;
