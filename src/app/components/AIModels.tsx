// src/app/AIModels.tsx
import React from 'react';

interface Model {
  name: string;
  description: string;
  category: string;
  publication: string;
  year: number;
  resource?: {
    paper?: string;
    code?: string;
  };
}

interface Props {
  models: Model[];
}

const AIModels: React.FC<Props> = ({ models }) => {
  return (
    <div className="space-y-4">
      {models.map((model, index) => (
        <div key={index} className="border rounded p-4 bg-white">
          <h2 className="text-lg font-semibold">{model.name}</h2>
          <p className="text-sm text-gray-600">{model.description}</p>
          <p className="text-sm text-gray-500">Category: {model.category}</p>
          <p className="text-sm text-gray-500">Publication: {model.publication}</p>
          <p className="text-sm text-gray-500">Year: {model.year}</p>
          <div className="space-x-2">
            {model.resource?.paper && (
              <a 
                href={model.resource.paper} 
                className="text-blue-600 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            )}
            {model.resource?.code && (
              <a 
                href={model.resource.code} 
                className="text-blue-600 hover:underline"
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

export default AIModels;
