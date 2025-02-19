import Image from "next/image";
import React from "react";
import {Star} from 'lucide-react'

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
        <div className="w-[90vw] rounded-2xl
        flex flex-col bg-gray-200 text-black">
<div className="flex flex-row">
<Image
height={1300}
width={600}
src={src}
alt={alt}
className='w-[20vw] h-[20vw] object-cover rounded-full object-contain'

/>
<div className="flex flex-col ml-8">
    <span>{name}</span>
    <span>{date}</span>
</div>
</div>
<div className="flex flex-col">
    <div className="flex flex-row">
    {[...Array(5)].map((_, index) => (
        <Star key={index} size={24} color="#FFD700" fill="#FFD700" />
      ))}
{description}
    </div>

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
        <section className="w-screen mx-auto
        max-w-[1200px] flex flex-col
        ">
            {reviews.map((review, index) => (
                <Review
                {...review}
                key={index}
                />
            ))}
        </section>
    )
}

export default GoogleReviews