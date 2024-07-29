'use client';
import React from 'react';

interface Publication {
  title: string;
  venue: string;
  year: number;
  resource: {
    paper?: string;
    code?: string;
  };
}

interface Props {
  publications: Publication[];
}

const Publications: React.FC<Props> = ({ publications }) => {
  console.log(publications); // Add this line to check your data

  return (
    <div className="space-y-4">
      {publications.map((publication, index) => (
        <div key={index} className="border rounded p-4 bg-white">
          <h2 className="text-lg font-semibold">{publication.title}</h2>
          <p className="text-sm text-gray-600">Venue: {publication.venue}</p>
          <p className="text-sm text-gray-600">Year: {publication.year}</p>
          <div className="mt-2">
            {publication.resource.paper && (
              <a 
                href={publication.resource.paper} 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            )}
            {publication.resource.code && (
              <a 
                href={publication.resource.code} 
                className="text-blue-600 hover:underline ml-4" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Publications;
