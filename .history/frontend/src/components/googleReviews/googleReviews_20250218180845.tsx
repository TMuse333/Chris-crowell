import Image from "next/image";
import React from "react";
import {Star} from 'lucide-react'
import SlidingText from "../textAnimations/slidingText/slidingText";

interface ReviewData {
    name:string,
    src:string,
    description:string,
    date:string,
    alt:string
}


const Review:React.FC<ReviewData> = ({
    name,src,description,date,
    alt
}) => {


    return (
        <div className="w-[90vw] flex-shrink-0 rounded-2xl
        mr-4 border border-blue-500 max-w-[400px]
        mx-auto bg-gradient-to-tr from-blue-300 to-blue-200
        flex flex-col  text-black">
<div className="flex flex-row ml-4 mt-2">
<Image
height={1300}
width={600}
src={src}
alt={alt}
className='w-[20vw] max-w-[75px] max-h-[75px] h-[20vw] object-cover rounded-full object-contain'

/>
<div className="flex flex-col ml-8">
    <span>{name}</span>
    <span>{date}</span>
</div>
</div>
<div className="flex flex-col ml-2 px-4 mt-3 pb-6">
    <div className="flex flex-row">
        
    {[...Array(5)].map((_, index) => (
        <Star key={index} size={24} color="#FFD700" fill="#FFD700" />
      ))}

    </div>
    <p className="text-left mt-4">
    {description}
</p>

</div>
        </div>
    )
}

interface GoogleProps {
    reviews:ReviewData[]
}

const GoogleReviews:React.FC<GoogleProps> = ({
    reviews
}) => {


    return (
        <>
  <SlidingText
  text="Reviews"
  />

        <section
     
        className={`relative w-screen ml-auto mb-[5rem] mt-[5rem] overflow-x-hidden
         py-8 text-center text-black`}
    >
      

        <div
            className="flex-shrink-0 pr-[3rem] pl-[1rem] flex ml-auto sm:ml-0 sm:mr-0 overflow-x-scroll overflow-y-hidden
            "
        >
         {reviews.map((review, index) => (
                <Review
                {...review}
                key={index}
                />
            ))}

        </div>
     </section>
     
    )
}

export default GoogleReviews