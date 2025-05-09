import React, { useEffect, useState } from "react";
import HouseIcon from "../../../../public/house.svg";  // Import the SVG as a React component


interface Props {
    isClicked:boolean
}


const HouseSvg:React.FC<Props> = ({
    isClicked
}) => {
 

  const [hovered, setIsHovered] = useState(false)

//   const [gradientColor, setGradientColor] = useState(!hovered ? "#010101" : "#00bfff");

//  const [value, setValue] = useState(0)



  return (
    <>
    <section className={`w-[45vw] h-[45vw] z-[4]
    p-0 absolute top-1/2 -translate-y-1/2
    max-w-[250px] max-h-[250px] transition-all duration-700

    `}
    style={{ left: isClicked ? "0%" : '50%' }} // Inline style for
    >
    
     
        {/* Render the imported SVG with dynamic color */}
        <HouseIcon
          style={{ fill: "#010101" }} // Use the state to dynamically change color

          className="w-full h-full transition-color "
          
        />
     

      {/* Optional: Button to toggle color */}
      {/* <button
        onClick={handleClick}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle SVG Color
      </button> */}
    </section>
  
    </>
  );
};

export default HouseSvg;
