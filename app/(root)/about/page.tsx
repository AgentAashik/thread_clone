import React from 'react';
import DeveloperCard from '@/components/cards/DeveloperCard';
import developers from '@/developerData';

const Page: React.FC = () => {
  return (
    <>

    <h1 className='head-text'>Developers</h1>
    <br></br>
    <div>
      <div className="grid grid-cols-2 gap-4">
        {developers.map((developer, index) => (
          <DeveloperCard key={index} developer={developer} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Page;
