import Image from "next/image";
import React, { useState } from "react";
import {Star} from 'lucide-react'
import SlidingText from "../textAnimations/slidingText/slidingText";
import {motion} from 'framer-motion'
// import Link from "next/link";
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

    const [slideComplete, setSlideComplete] = useState(false)

    return (
        <>
  <SlidingText
  text="Reviews"
  setSlideComplete={setSlideComplete}
styles="bg-gradient-to-b from-black to-gray-700 bg-clip-text text-transparent
text-3xl sm:text-4xl font-semibold text-center relative transition-colors"

  
  />
  <motion.p 
  initial={{
    opacity:0,
    y:-40
  }}
  animate={{
    opacity:slideComplete ? 1  : 0,
    y:slideComplete ? 0 : -40
  }}
  className="text-black max-w-[900px]
  text-left mx-auto mt-4
  md:text-lg"
  >
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi soluta molestiae earum maxime aliquam assumenda, animi possimus ut optio atque! Odio omnis nisi possimus fugit!
<br/>
<a
href="https://maps.app.goo.gl/inmxCYTTLWD8aCTo7">


<button className="rounded-2xl
bg-[#00bfff] p-2 mt-2
">
    See all reviews
</button>
</a>
  </motion.p>


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
     </>
    )
}

export default GoogleReviews