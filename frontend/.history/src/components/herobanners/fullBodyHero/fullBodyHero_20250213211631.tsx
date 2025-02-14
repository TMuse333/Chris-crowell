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
        

     <FadeInFromLeftText
          className=" p-6 font-semibold 
       
       text-red-300
         w-[50vw] mr-auto transition-all
          text-xl relative z-[2]
          "
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime id nostrum sit deleniti dolores. Libero sed laborum exercitationem et porro veniam necessitatibus voluptatum autem a!"
          startAnimation
          setAnimationComplete={setStartFullBody}
          />

        

    )
}

export default FullBodyHero