'use client';
import React, { useState } from 'react';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, tab: string) => {
    e.preventDefault();
    setActiveTab(tab);
  };
  return (
    <div className="grid justify-center">
      <div className="flex gap-8 text-lg font-medium">
        <button
          className={`${
            activeTab === 'all' ? 'text-green-400' : 'text-gray-300'
          }`}
          onClick={(e) => handleClick(e, 'all')}
        >
          All
        </button>
        <button
          className={`${
            activeTab === 'design' ? 'text-green-400' : 'text-gray-300'
          }`}
          onClick={(e) => handleClick(e, 'design')}
        >
          Designs
        </button>
        <button
          className={`${
            activeTab === 'video' ? 'text-green-400' : 'text-gray-300'
          }`}
          onClick={(e) => handleClick(e, 'video')}
        >
          Videos
        </button>
      </div>
    </div>
  );
};
