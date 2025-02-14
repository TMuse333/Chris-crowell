import Image from "next/image";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
// import tom from '../../../public/thomas-full-body-1-nogb.png'
// import full from '../../../public/smile-tom.png'

import tom from '../../../../public/chris-hd.png'
import head from '../../../../public/placeholder.png'
import { TypeWriter } from "@/components/textAnimations/typeWriter/typeWriter";
import DiagonalClipContainer from "@/components/diagonalClip/diagonalClip";
import FadeInFromLeftText from "@/components/textAnimations/fadeInFromLeftText/fadeInFromLeftText";
import TypeAlongText from "@/components/textAnimations/typeAlongText/typeAlongText";
// import half from '../../../public/smiley-tom-half.png'
import { motion } from "framer-motion";
import { start } from "repl";
import logo from '../../../../public/remax-ballon.webp'
import network from '../../../../public/logo.webp'

const FullBodyHero = () => {

  const [startTypeAlong, setStartTypeAlong] =
  useState(false)
  
  const [startImage, setStartImage] = useState(false)

  const [startFadeIn, setStartFadeIn] = useState(false)

  const [startFullBody, setStartFullBody] = useState(false)

  const handleStartFadeIn = () => {
    setTimeout(() => {
      setStartFadeIn(true);
    }, 1300);

  }
    return (
// bg-gradient-to-tr from-blue-200 to-blue-100
        
       <header className="
       md:min-h-screen relative items-center 
       mx-auto  text-black
      max-w-[1200px]
       relative z-[3] "
    //    style={{
    //     background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
    //   }}
      >
        <DiagonalClipContainer/>
        <section className="mx-auto 
        mt-auto items-center md:min-h-screen
        justify-center  relative   
          flex flex-col md:flex-row
      
          md:mr-auto">

      
        <section className="flex flex-col
         justify-center
        md:mr-auto
 max-w-[800px]
        md:mt-[-4rem]
        items-center  md
        md:items-start  py-4">

          <Image
          src={network}
          alt="logo"
          className="w-[70vw] max-w-[800px] mx-auto
          md:self-start md:mr-auto md:ml-12 object-contain"
          />
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
             className="mx-auto 
             relative z-[2]
             md:mr-auto md:ml-6
           text-lg mt-4 font-semibold 
           text-center md:text-left">
           Lorem ipsum, dolor sit amet consectetur adipisicing.
            
            </motion.h2>
            
          
           <TypeAlongText
           as="h1"
           styles="font-semibold
           relative z-[2]
           mr-auto self-start
           px-3 md:px-0  
           text-5xl sm:text-6xl md:text-7xl
            mt-4  md:ml-4
            
            "
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
            src={tom}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[70vw] md:w-[40vw] 
            relative z-[1] md:hidden
            translate-y-[-0rem] sm:translate-y-0
              rounded-2xl  object-contain mx-auto

 relative z-[4] bg-transparent mt-[-6.5rem]
  
            
            "
            />
            </motion.div>


          <FadeInFromLeftText
          className="mx-auto p-6 font-semibold 
         bg-grway-100 bg-opacity-[0.4]
         rounded-2xl self-start
         w-[50vw] ml-auto text-left
          text-xl relative z-[2]
          "
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime id nostrum sit deleniti dolores. Libero sed laborum exercitationem et porro veniam necessitatibus voluptatum autem a!"
          startAnimation={startFadeIn}
          setAnimationComplete={setStartFullBody}
          />
            <TypeWriter
            />
      
            </section>
         <motion.div
             initial={{y:30,
            opacity:0}}
            animate={{
              opacity:startFullBody ? 1 : 0,
              y:startFullBody ? 0 : 30,
            }}
          onAnimationComplete={handleStartFadeIn}
  className="md:absolute md:bottom-0 md:right-[0%] 
  z-[3] mt-auto h-[80vh] w-[50vw]
  max-w-[535px]
  flex flex-col justify-end"

>
  <Image
    src={tom}
    height={600}
    width={1300}
    alt="A full body image of Thomas Musial"
    className="w-[98vw] md:w-[55vw] rounded-2xl max-w-[535px] object-contain mx-auto bg-gray-300 bg-transparent h-auto relative z-[3] mt-auto"
  />
</motion.div>


           
</section>
           

        
       </header>
    )
}

export default FullBodyHero