import React, { useState } from "react";
import HouseIcon from "../../../../public/house.svg";  // Import the SVG as a React component

const HouseSvg = () => {
  const [gradientColor, setGradientColor] = useState("#010101");

  const handleClick = () => {
    setGradientColor((prevColor) => (prevColor === "#010101" ? "#00bfff" : "#010101"));
  };

  return (
<section className="w-[100px] h-[100px] bg-red-200  flex justify-center items-center 
    absolute top-1/2 left-[100%] -translate-x-[75%]
   ">
     
        {/* Render the imported SVG with dynamic color */}
        <HouseIcon
          style={{ fill: gradientColor }} // Use the state to dynamically change color
          width="200"
          height="200"
          
        />
     

      {/* Optional: Button to toggle color */}
      {/* <button
        onClick={handleClick}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle SVG Color
      </button> */}
    </section>
  );
};

export default HouseSvg;
