import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import tom from '../../../public/thomas-full-body-1-nogb.png'
// import full from '../../../public/smile-tom.png'

import tom from '../../../../public/thomas-full-body-1-nogb.png'
import head from '../../../../public/placeholder.png'
import { TypeWriter } from "@/components/textAnimations/typeWriter/typeWriter";
// import half from '../../../public/smiley-tom-half.png'
const FullBodyHero = () => {

    return (

        
       <header className="flex flex-col md:flex-row
       md:h-screen relative items-center 
       mx-auto max-w-[2200px] text-black
       md:mt-[-4rem]  bg-gray-300"
    //    style={{
    //     background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
    //   }}
      >
        
        <section className="flex flex-col
        md:w-[50vw] justify-center
        items-center bg-gray-300 py-4">
             <h2 className="mx-auto p-3
             text-center
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
            text-5xl sm:text-6xl md:text-7xl
             mt-4 text-center md:text-start md:pl-6">Chris Crowell</h1>

<Image
            src={head}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[70vw] md:w-[48vw] 
            translate-y-[-1rem] sm:translate-y-0
            h-[60vh]  rounded-2xl  object-contain mx-auto
 bg-gray-300  md:block h-[80vh] mt-auto mb-auto 
  
            
            "
            />


            <p className="mx-auto p-6 font-semibold 
            translate-y-[-4rem] sm:translate-y-0
            text-xl">
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
            className="w-[98vw] md:w-[48vw]  rounded-2xl  object-contain mx-auto
 bg-gray-300  md:block h-[80vh] mt-auto mb-auto 
  
            
            "
            />

           

           

        
       </header>
    )
}

export default FullBodyHero