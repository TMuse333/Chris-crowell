import { useState } from 'react';
import { dollarSign } from '@/data/homepageData';
import Image from 'next/image';

const SellHouse = () => {
  const [color, setColor] = useState("#008000"); // Green color initially

  const handleClick = () => {
    setColor((prevColor) => (prevColor === "#008000" ? "#006400" : "#008000")); // Toggle between green and darker green
  };

  return (
    <section className="w-screen flex justify-center items-center h-screen">
      <div onClick={handleClick} className="cursor-pointer">
        {/* Use the SVG image as source */}
        <Image className='w-[40vw]'
          src={dollarSign}
          alt="Dollar sign"
          style={{ fill: "#00bfff", width: '100px', height: '100px' }}
      
        />
      </div>
      <button onClick={handleClick} className="mt-5 px-4 py-2 bg-blue-500 text-white rounded">
        Toggle SVG Color
      </button>
    </section>
  );
}

export default SellHouse;
