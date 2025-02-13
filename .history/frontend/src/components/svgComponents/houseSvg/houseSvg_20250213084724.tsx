import React from 'react';
import { house } from '@/data/homepageData'; // Assuming house contains the SVG string

const HouseSvg = () => {
  return (
    <section className="w-screen flex justify-center items-center h-screen">
      <div
        className="cursor-pointer"
        dangerouslySetInnerHTML={{ __html: house }} // Inject the raw SVG string here
      />
    </section>
  );
};

export default HouseSvg;
