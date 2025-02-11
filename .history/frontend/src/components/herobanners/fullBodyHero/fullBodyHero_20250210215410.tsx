import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import tom from '../../../public/thomas-full-body-1-nogb.png'
// import full from '../../../public/smile-tom.png'

import tom from '../../../../public/thomas-full-body-1-nogb.png'
import head from '../../../../public/placeholder.png'
import { TypeWriter } from "@/components/textAnimations/typeWriter/typeWriter";
import DiagonalClipContainer from "@/components/diagonalClip/diagonalClip";
// import half from '../../../public/smiley-tom-half.png'
const FullBodyHero = () => {

    return (

        
       <header className="
       md:h-screen relative items-center 
       mx-auto max-w-[2200px] text-black
     bg-gray-300
       relative z-[3] "
    //    style={{
    //     background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
    //   }}
      >
        <DiagonalClipContainer/>
        <section className="mx-auto 
        mt-auto items-center
        justify-center  relative    
        max-w-[1200px] flex flex-col md:flex-row">

      
        <section className="flex flex-col
        md:w-[60vw] justify-center
        
        items-center 
        md:items-start bg-gray-300 py-4">
             <h2 className="mx-auto p-3
             relative z-[2]
           text-lg mt-4 font-semibold ">
           Lorem ipsum, dolor sit amet consectetur adipisicing.
            
            </h2>
            
           
            {/* <Image
            src={logo}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[80vw] h-[20vh] object-contain mx-auto
           rounded-full bg-gray-600 sm:bg-transparent
            
            "
            /> */}
            <h1 className="font-semibold
            relative z-[2] pl-6
            text-5xl sm:text-6xl md:text-7xl
             mt-4 text-center md:text-left ">Chris Crowell</h1>

<Image
            src={head}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[70vw] md:w-[48vw] 
            relative z-[1] md:hidden
            translate-y-[-2rem] sm:translate-y-0
            h-[60vh]  rounded-2xl  object-contain mx-auto
 bg-gray-300  md:block h-[80vh] mt-auto mb-auto 
 relative z-[4] bg-transparent
  
            
            "
            />


            <p className="mx-auto p-6 font-semibold 
            translate-y-[-7rem] sm:translate-y-0
            text-xl relative z-[2]
            mb-[-5rem] md:mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ut aliquam consequuntur perspiciatis natus debitis quam neque dolorum dolorem labore?
            </p>
            <TypeWriter
            />
            {/* <section className="flex mr-auto ml-6">
                <button className="bg-[#00bfff] p-3
                rounded-2xl mr-6">Contact</button>
                <button className="bg-[#00bfff] p-3
                rounded-2xl mr-6">View listings</button>
            </section> */}
            </section>
          
            <Image
            src={tom}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="hidden w-[98vw] md:w-[48vw]  rounded-2xl  object-contain mx-auto
 bg-gray-300  md:block h-[80vh] mt-auto mb-auto bg-transparent
 relative z-[3]
  
            
            "
            />

           
</section>
           

        
       </header>
    )
}

export default FullBodyHero