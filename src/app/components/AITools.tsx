'use client';

import React from 'react';

interface Tool {
  name: string;
  description: string;
  url: string;
  date: string; // Ensure date is a string
}

interface Props {
  tools: Tool[];
}

const AITools: React.FC<Props> = ({ tools }) => {
  // Debug: Log the tools data to check its structure
  console.log("Tools data:", tools);

  return (
    <div className="space-y-4">
      {tools.map((tool, index) => (
        <div key={index} className="border rounded p-4 bg-white">
          <h2 className="text-lg font-semibold">{tool.name}</h2>
          <p className="text-sm text-gray-600">{tool.description}</p>
          <p className="text-sm text-gray-500">Date: {String(tool.date)}</p>
          <a 
            href={tool.url} 
            className="text-blue-600 hover:underline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Tool
          </a>
        </div>
      ))}
    </div>
  );
};

export default AITools;
