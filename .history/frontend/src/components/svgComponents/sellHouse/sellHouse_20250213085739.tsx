import React, { useState } from "react";
import HouseIcon from "@/data/homepageData/house.svg";  // Import the SVG as a React component

const HouseSvg = () => {
  const [gradientColor, setGradientColor] = useState("#010101");

  const handleClick = () => {
    setGradientColor((prevColor) => (prevColor === "#010101" ? "#006400" : "#010101"));
  };

  return (
    <section className="w-screen flex justify-center items-center h-screen">
      <div onClick={handleClick} className="cursor-pointer">
        {/* Render the imported SVG */}
        <HouseIcon style={{ fill: gradientColor }} width="200" height="200" />
      </div>

      {/* Optional: Button to toggle color */}
      <button
        onClick={handleClick}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle SVG Color
      </button>
    </section>
  );
};

export default HouseSvg;
