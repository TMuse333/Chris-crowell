import React from "react";
import FadeInFromLeftText from "../fadeInFromLeftText/fadeInFromLeftText";
import TypeAlongText from "../typeAlongText/typeAlongText";


const TextSequence = () => {



    return (
        <></>
        <h1></h1>
        <TypeAlongText
        as="h1"
        styles="font-semibold
        relative z-[2] pl-6
        text-5xl sm:text-6xl md:text-7xl
         mt-4 text-center md:text-left "
         text="Chris Crowell"
         keywords={['Chris', 'Crowell']}
         startAnimation
         />
        <FadeInFromLeftText/>
    )
}