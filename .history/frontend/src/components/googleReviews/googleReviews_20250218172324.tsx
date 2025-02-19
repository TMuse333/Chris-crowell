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
        
        mx-auto bg-gradient-to-tr from-blue-300 to-blue-200
        flex flex-col  text-black">
<div className="flex flex-row ml-4 mt-2">
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
<div className="flex flex-col ml-2 px-4 mt-3 pb-6">
    <div className="flex flex-row">
        
    {[...Array(5)].map((_, index) => (
        <Star key={index} size={24} color="#FFD700" fill="#FFD700" />
      ))}

    </div>
    <span>
    {description}
</span>

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
        // <section className="w-screen mx-auto
        // max-w-[1200px] flex flex-col
        // ">
        //     {reviews.map((review, index) => (
        //         <Review
        //         {...review}
        //         key={index}
        //         />
        //     ))}
        // </section>
        <section
        ref={ref}
        className={`relative w-screen ml-auto mb-[5rem] mt-[5rem] overflow-x-hidden
        bg-[#00bfff] bg-opacity-[0.2] py-8 text-center text-black`}
    >
      

        <div
            className="w-screen pr-[3rem] pl-[3rem] flex ml-auto sm:ml-0 sm:mr-0 overflow-x-scroll overflow-y-hidden
            "
        >
           {images.map((image, index) => (
<div
key={index}
className={`w-[80vw] border border-white rounded-2xl  relative flex-shrink-0 mr-10 pb-6 max-w-[500px] z-[2] 
${bgImage ? 'bg-[#00bfff] bg-opacity-[0.3]' : ''}
${!iframe ? 'max-h-[800px]' : 'h-screen' }`}
>
{/* Render iframe if iframeSrc exists */}
{iframe  ? (
<iframe src={image.src} className='w-full max-w-[430px] h-full object-cover mx-auto overflow-y-hidden' allowFullScreen title={image.title}></iframe>
) : (
<>


<Image
  src={image.src}
  alt={image.alt}
  className={`relative ml-auto mr-auto mt-auto z-[5] object-contain transition-all rounded-lg 
  max-h-[500px] ${bgImage ? 'h-[40%]' : 'h-[90%]'}`}
  width={1000}
  height={55}
  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 500px"
/>
    <h5
  className="my-4 text-center px-2 relative font-semibold bg-gradient-to-b from-black to-gray-800 
  bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl"
>
  {image.title}
</h5>

{image.date && <span className="text-black px-2">{image.date}</span>}

<p
  className="mt-4 text-center px-4 sm:text-lg md:text-2xl"
>
  {image.description}
</p>

{image.link && (
  <Link href={image.link}>
    <button
      className="mt-8 bg-[#00bfff] py-3 px-6 rounded-2xl text-black relative z-[4] 
      hover:bg-black hover:text-[#00bfff]"
    >
      Read
    </button>
  </Link>
)}
</>
)}
</div>
))}

        </div>
    </section>
    )
}

export default GoogleReviews