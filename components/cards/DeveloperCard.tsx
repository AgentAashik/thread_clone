import React from 'react';
import { Button } from '../ui/button';

interface Developer {
  name: string;
  jobTitle: string;
  description: string;
  imgURL: string;
  profileURL: string;
}

interface DeveloperCardProps {
  developer: Developer;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  return (
    <div className="bg-primary-500 text-white p-4 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={developer.imgURL}
            alt={`Profile of ${developer.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-center">{developer.name}</h2>
          <p className="text-lg font-medium text-center">{developer.jobTitle}</p>
        </div>
      </div>
      <p className="mt-4">{developer.description}</p>
      <a
        href={developer.profileURL}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600 transition duration-300"
      ><Button>Visit Profile</Button>
        
      </a>
    </div>
  );
};

export default DeveloperCard;
