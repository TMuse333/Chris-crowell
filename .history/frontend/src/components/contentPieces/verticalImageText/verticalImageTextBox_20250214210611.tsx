import React, { useEffect, useState } from "react";
import { useAnimate, motion, useMotionValue, useMotionTemplate,
useInView, animate } from 'framer-motion';
import Image from "next/image";
import brain from '../../../public/og-logo.jpeg';
import Link from 'next/link'
import AppearingGradient from "@/components/textAnimations/appearingGradient/appearingGradient";
import { useGeneralContext } from "@/context/context";

import bgImage from '../../../public/spa-background.jpg'
interface Props {
  title:string,
  description:string,
  buttonText:string,
  buttonDestination:string
}

const VerticalImageTextBox:React.FC<Props> = ({
  title, description,
  buttonText, buttonDestination
}) => {
  const [scope, scopeAnimate] = useAnimate();

  const COLORS = [
    "#ddbeab", // Main color (base)
    "#d0b29a", // Slightly darker shade
    "#f0d0a9", // Slightly lighter shade
    "#c6a37d", // Muted darker shade
    "#e1b686", // Warm variation closer to gold
    "#f4e3c3"  // Light pastel shade for accents
  ];
  
  
  
  const color1 = useMotionValue(COLORS[0]);
  const color2 = useMotionValue(COLORS[1]);

  const backgroundImage = useMotionTemplate`linear-gradient(45deg,${color1}, ${color2})`


  const [animationComplete, setAnimationComplete] = useState(false);



  const {isMobile} = useGeneralContext()

  // Ensure you're transforming the y values based on the scroll position

  const inView = useInView(scope,{
   
    amount:!isMobile ? 0.7 : 0.2,
    once:true
  })


      const handleAnimation = async () => {
       const header = document.getElementById('closing-header')
       const paragraph = document.getElementById('closing-paragraph')
       const button = document.getElementById('closing-button')

       if(header){
        await scopeAnimate(header,{y:0,opacity:1})
     
       }

       if(paragraph){
        await scopeAnimate(paragraph,{opacity:1},
            {delay:1})
       }

       if(button){
        await scopeAnimate(button,{opacity:1},{
            delay:0.5,
            ease:'easeInOut'
            
        },)
       }
      
      }

      useEffect(()=> {
        if(inView){
            console.log('in view!')
            handleAnimation()
        }
    })
      

    useEffect(() => {
        // Animate the colors for the gradient
       
           animate(color1, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          });
    
           animate(color2, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          });
        

      
    }, []);

  
  return (
    <section ref={scope} className=" relative
    py-8
   "
   style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage.src})`,
    backgroundSize: "cover", // Ensures the image covers the container
    backgroundPosition: "center", // Centers the image
  }}
  
      >
     

      

        {/* Motion heading */}
        {/* <h3 id='closing-header'
className="text-center relative pb-4  mr-auto font-semibold mb-2
bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl
translate-y-[4rem] transition-transform opacity-0"
style={{
  backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",

}}>
          
        
          Time to elevate your digital presence
        </h3> */}

        <AppearingGradient
        text={title}
        subText=""
        noBottom
        />
     
     

      {/* Optional image */}
      <Image
        src={brain}
        alt="brain"
        className="w-[40vw] object-contain mx-auto relative z-[4]
        max-w-[420px] max-h-[280px] mt-[-3rem] mb-4
        "
      />

      {/* Call to action section */}
      <section id='closing-paragraph'
      className="flex flex-col justify-center md:text-lg px-4 relative z-[4] mb-8
      opacity-0 items-center">
        <motion.p
        initial={{
            opacity:0,
            y:30
        }}
        animate={{
            opacity:inView ? 1 : 0 ,
            y:inV
        }}>

        </motion.p>
     <FadeInFromLeftText
     className="mx-auto px-4 text-pre-line
     whitespace-pre-line text-white"
     startAnimation={inView}
     text={description}
     setAnimationComplete={setAnimationComplete}
     />



        <Link
        href={buttonDestination}>
        <motion.button id='closing-button'
        style={{
            backgroundImage
        }}
        initial={{
          opacity:0,
          y:-15
        }}
        animate={{
          opacity:animationComplete ? 1 : 0,
          y:animationComplete ? 0 : -15
        }}
        whileHover={{
            scale:1.05
        }}
         className="mx-auto mt-8 opacity-0 px-6 py-3 bg-blue-500 text-white rounded-full
         shadow-lg shadow-all-around
         ">
          {buttonText}
        </motion.button>
        </Link>
      </section>

    </section>
  );
};

export default VerticalImageTextBox;