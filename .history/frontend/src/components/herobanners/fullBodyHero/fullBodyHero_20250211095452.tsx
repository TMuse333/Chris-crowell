import Image from "next/image";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
// import tom from '../../../public/thomas-full-body-1-nogb.png'
// import full from '../../../public/smile-tom.png'

import tom from '../../../../public/thomas-full-body-1-nogb.png'
import head from '../../../../public/placeholder.png'
import { TypeWriter } from "@/components/textAnimations/typeWriter/typeWriter";
import DiagonalClipContainer from "@/components/diagonalClip/diagonalClip";
import FadeInFromLeftText from "@/components/textAnimations/fadeInFromLeftText/fadeInFromLeftText";
import TypeAlongText from "@/components/textAnimations/typeAlongText/typeAlongText";
// import half from '../../../public/smiley-tom-half.png'
import { motion } from "framer-motion";
import { start } from "repl";
const FullBodyHero = () => {

  const [startTypeAlong, setStartTypeAlong] =
  useState(false)
  
  const [startImage, setStartImage] = useState(false)

  const [startFadeIn, setStartFadeIn] = useState(false)

  const handleStartFadeIn = () => {
    setTimeout(() => {
      setStartFadeIn(true);
    }, 1300);

  }
    return (

        
       <header className="
       md:h-screen relative items-center 
       mx-auto max-w-[2200px] text-black
       bg-gradient-to-tr from-blue-200 to-blue-100
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
        
        md:ml-8
        items-center 
        md:items-start  py-4">
             <motion.h2
              initial={{
                opacity:0,
                y:-30
            }}
            animate={{
                opacity:1,
                y:0
            }}
            onAnimationComplete={()=>setStartTypeAlong(true)} 
             className="mx-auto md:pl-6
             relative z-[2]
           text-lg mt-4 font-semibold 
           text-center">
           Lorem ipsum, dolor sit amet consectetur adipisicing.
            
            </motion.h2>
            
          
           <TypeAlongText
           as="h1"
           styles="font-semibold
           relative z-[2] pl-6
           text-5xl sm:text-6xl md:text-7xl
            mt-4 text-center md:text-left "
            text="Chris Crowell"
            keywords={['Chris', 'Crowell']}
            startAnimation={startTypeAlong}
            setAnimationComplete={setStartImage}
            />

<motion.div
initial={{y:30,
opacity:0}}
animate={{
  opacity:startImage ? 1 : 0,
  y:startImage ? 0 : 30,
}}

>



            <Image
            src={head}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[70vw] md:w-[40vw] 
            relative z-[1] md:hidden
            translate-y-[-0rem] sm:translate-y-0
              rounded-2xl  object-contain mx-auto

 relative z-[4] bg-transparent my-[-2rem]
  
            
            "
            />
            </motion.div>


          <FadeInFromLeftText
          className="mx-auto p-6 font-semibold 
         bg-gray-100
          text-xl relative z-[2]
          "
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime id nostrum sit deleniti dolores. Libero sed laborum exercitationem et porro veniam necessitatibus voluptatum autem a!"
          startAnimation={startFadeIn}
          />
            <TypeWriter
            />
            {/* <section className="flex mr-auto ml-6">
                <button className="bg-[#00bfff] p-3
                rounded-2xl mr-6">Contact</button>
                <button className="bg-[#00bfff] p-3
                rounded-2xl mr-6">View listings</button>
            </section> */}
            </section>
          <motion.div
          initial={{y:30,
            opacity:0}}
            animate={{
              opacity:startImage ? 1 : 0,
              y:startImage ? 0 : 30,
            }}
            onAnimationComplete={handleStartFadeIn}
            >

         
            <Image
            src={tom}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="hidden w-[98vw] md:w-[48vw]  rounded-2xl  object-contain mx-auto
 bg-gray-300  md:block h-[80vh]  mb-auto bg-transparent
 relative z-[3]  scale-[1.3] mt-4
  
            
            "
            />
             </motion.div>

           
</section>
           

        
       </header>
    )
}

export default FullBodyHero