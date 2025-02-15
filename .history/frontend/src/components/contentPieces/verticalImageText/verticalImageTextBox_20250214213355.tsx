import React, { useEffect, useState, useRef } from "react";
import { useAnimate, motion, useMotionValue, useMotionTemplate,
useInView, animate } from 'framer-motion';
import Image from "next/image";
import brain from '../../../../public/logo.webp';
import Link from 'next/link'
import AppearingGradient from "@/components/textAnimations/appearingGradient/appearingGradient";
import { useGeneralContext } from "@/context/context";

import bgImage from '../../../../public/skyline.webp'
import { skyline } from "@/data/homepageData";




const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
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
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const [animationComplete, setAnimationComplete] = useState(false);

  function scrollToElementById(id:string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.warn(`Element with id "${id}" not found.`);
    }
}

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;



  const ref = useRef(null)

  const inView = useInView(ref,{
    once:false,
    amount:0.1
  })



  return (
    <>
    
    <motion.section
     ref={ref}
      className="relative  grid min-h-screen place-content-center overflow-hidden px-4  text-gray-200 z-[3]
    "
    >

<motion.div
    style={{
      backgroundImage,
    }}
    className="absolute inset-0 z-[2]"
  />

  {/* Building Image Layer */}
  <Image
    src={bgImage}
    alt=""
    width={600}
    height={1300}
    className="absolute w-full h-full object-cover z-[1]"
    style={{
      filter: 'brightness(1.2)',
    }}
  />
       



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
className="mx-auto px-4 text-pre-line
whitespace-pre-line text-white"
initial={{
    opacity:0,
    y:30
}}
animate={{
    opacity:inView ? 1 : 0 ,
    y:inView ? 0 : 30
}}
onAnimationComplete={()=>setAnimationComplete(true)}
>   
{description}
</motion.p>




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

      
    </motion.section>
    </>
  );
};

export default VerticalImageTextBox