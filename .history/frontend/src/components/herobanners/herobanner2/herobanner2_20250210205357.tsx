
import Image from "next/image";
// import Link from "next/link";
import React, {useState, useEffect} from "react";
// import tom from '../../../public/thomas-full-body-1-nogb.png'
// import full from '../../../public/smile-tom.png'
import side from '../../../../public/placeholder.png'
import home from '../../../../public/home.jpeg'
import { TypeWriter } from "@/components/textAnimations/typeWriter/typeWriter";
import { motion } from "framer-motion";
import TypeAlongText from "@/components/textAnimations/typeAlongText/typeAlongText";
import FadeInFromLeftText from "@/components/textAnimations/fadeInFromLeftText/fadeInFromLeftText";
import DiagonalClipContainer from "@/components/diagonalClip/diagonalClip";
// import half from '../../../public/smiley-tom-half.png'

const Herobanner = () => {

    const [startPTag, setStartPTag] = useState(false);
    const [startTypeAlong, setStartTypeAlong] = useState(false);

    const [animateImage, setAnimateImage] = useState(false)
     
    const handleStartTypeAlong = () =>{
        setStartTypeAlong(true)
    }

useEffect(()=>{
    console.log('start type along',startTypeAlong)
},[startTypeAlong])   

    return (

        
       <header className="flex flex-col md:flex-row
       md:h-screen relative items-center 
       mx-auto max-w-[2200px] text-black
       md:mt-[-4rem]  bg-gray-300 z-[30]"
       
    //    style={{
    //     background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
    //   }}
      >
        <DiagonalClipContainer/>
        <section className="flex flex-col
        md:w-[50vw] justify-center relative 
        z-[4]
        items-center bg-gray-300 py-4">
           <motion.h1
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          onAnimationComplete={()=>setAnimateImage(true)}
          className="mx-auto p-3 text-center text-lg mt-4 font-semibold"
        >
         Lorem ipsum dolor, sit amet consectetur adipisicing.
        </motion.h1>
            
           <motion.div className="w-[80vw] h-[20vh]"
             initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity:animateImage ? 1 : 0,
                y:animateImage ?  0 : -30,
              }}
              onAnimationComplete={handleStartTypeAlong}>

   
            <Image
            src={side}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-full h-full object-contain mx-auto
           rounded-full bg-gray-600 sm:bg-transparent
            
            "
            />
                    </motion.div>
            
             <TypeAlongText
             styles="font-semibold
             text-5xl sm:text-6xl md:text-7xl
              mt-4 text-center md:text-start md:pl-6"
              as="h1"
              text="Chris Crowell"
              startAnimation={startTypeAlong}
              setAnimationComplete={setStartPTag}
              />
              <FadeInFromLeftText
              className="mx-auto p-6 font-semibold 
              text-xl"
              startAnimation={startPTag}
              text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ut aliquam consequuntur perspiciatis natus debitis quam neque dolorum dolorem labore?"
              />
       
            <TypeWriter
            />
           
            </section>
          
            <Image
            src={home}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[98vw] md:w-[48vw]  rounded-2xl  object-cover mx-auto
 bg-gray-300  md:block h-[80vh] mt-auto mb-auto 
  
            
            "
            />

           

           

        
       </header>
    )
}

export default Herobanner