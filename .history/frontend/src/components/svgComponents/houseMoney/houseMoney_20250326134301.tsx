"use client"

import { useState, useEffect } from "react";
import DollarSignSvg from "../dollarSign/dollarSignSvg";
import HouseSvg from "../houseSvg/houseSvg";



const HouseMoney = () => {

  const [isClicked, setIsClicked] = useState(false)
    
    // const handleDollarClick = () => {
    //     setHousePosition()
    // }
    useEffect(() => {
        const interval = setInterval(() => {
          setIsClicked((prev) => !prev);
        }, 4000);
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);

    return (
        <div className=" bg-gradient-to-b from-[#0077b3] to-blue-300 relative   rounded-2xl  w-[90vw] h-[60vh] md:h-[55vw] max-h-[567px] max-w-[568px] mx-auto
        relative z-[5] w-[90vw] md:w-[52vw] flex justify-center items-center"
        onClick={()=>setIsClicked(!isClicked)}>

{/* <div className="flex w-full h-[80%] "> */}

            <HouseSvg
            isClicked={isClicked}/>
            <DollarSignSvg
             isClicked={isClicked}
            />
            {/* </div>
            <p className="text-center">slatty</p> */}

        </div>
    )
}

export default HouseMoney