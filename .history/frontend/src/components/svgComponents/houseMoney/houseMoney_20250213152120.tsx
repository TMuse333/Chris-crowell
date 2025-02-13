import { useState } from "react";
import DollarSignSvg from "../dollarSign/dollarSignSvg";
import HouseSvg from "../houseSvg/houseSvg";



const HouseMoney = () => {

    const [housePosition, setHousePosition] = useState("-10%")
    
    // const handleDollarClick = () => {
    //     setHousePosition()
    // }

    return (
        <div className="md:w-[50vw] relative flex  bg-gray-300 w-[90vw] h-[80vh] md:h-[55vw] max-h-[567px] max-w-[668px] mx-auto">

            <HouseSvg
            left={housePosition}/>
            <DollarSignSvg/>

        </div>
    )
}

export default HouseMoney