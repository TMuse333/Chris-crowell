import React, { useState } from "react";
import HouseIcon from "../../../../public/house.svg";  // Import the SVG as a React component


interface Props {
    isClicked:boolean
}


const HouseSvg:React.FC<Props> = ({
    isClicked
}) => {
  const [gradientColor, setGradientColor] = useState("#010101");



  return (
    <section className={`w-[35vw] h-[35vw]
    max-w-[200px] max-h-[200px] transition-all
    absolute top-1/2 -translate-y-1/2 left-[${isClicked ? '50%' : "0%"}]  flex justify-center items-center 
    `}>
     
        {/* Render the imported SVG with dynamic color */}
        <HouseIcon
          style={{ fill: gradientColor }} // Use the state to dynamically change color
          width="150"
          height="150"
          className=
          
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
