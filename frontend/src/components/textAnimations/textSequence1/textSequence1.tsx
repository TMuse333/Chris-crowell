import React, { useState } from "react";
import FadeInFromLeftText from "../fadeInFromLeftText/fadeInFromLeftText";
import TypeAlongText from "../typeAlongText/typeAlongText";
import { motion } from "framer-motion";

const TextSequence = () => {

const [startTypeAlong, setStartTypeAlong]
= useState(false)

const [startFadeIn, setStartFadeIn] = useState(false)

    return (
        <>
        <motion.h2
        initial={{
            opacity:0,
            y:-30
        }}
        animate={{
            opacity:1,
            y:0
        }}
        onAnimationComplete={()=>setStartTypeAlong(true)}>
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
         setAnimationComplete={setStartFadeIn}
         />
        <FadeInFromLeftText
          className="mx-auto p-6 font-semibold 
          translate-y-[-7rem] sm:translate-y-0
          text-xl relative z-[2]
          mb-[-5rem] md:mb-0"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime id nostrum sit deleniti dolores. Libero sed laborum exercitationem et porro veniam necessitatibus voluptatum autem a!"
          startAnimation={startFadeIn}
          />
        </>
    )
}

export default TextSequence