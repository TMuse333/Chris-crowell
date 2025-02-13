import { useState } from "react";
import DollarSignSvg from "../dollarSign/dollarSignSvg";
import HouseSvg from "../houseSvg/houseSvg";



const HouseMoney = () => {

  const [isClicked, setIsClicked] = useState(false)
    
    // const handleDollarClick = () => {
    //     setHousePosition()
    // }

    return (
        <div className="md:w-[50vw] relative flex border border-black rounded-2xl border-4 w-[90vw] h-[60vh] md:h-[55vw] max-h-[567px] max-w-[668px] mx-auto"
        onClick={()=>setIsClicked(!isClicked)}>

            <HouseSvg
            isClicked={isClicked}/>
            <DollarSignSvg
             isClicked={isClicked}
            />

        </div>
    )
}

export default HouseMoney