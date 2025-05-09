"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState,
useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, animate, useInView } from 'framer-motion';
import { useGeneralContext } from "@/context/context";

import { easeIn} from 'framer-motion/dom'
import Link from "next/link";
// import TypeAlongText from "@/components/textAnimations/typeAlongText/typeAlongText";




interface Props {
    title: string,
    src: string,
    alt: string,
    description: string,
    aspects: string[],
    link: string,
    buttonText:string
    reverse?: boolean
    aspectHeader:string
}

const ExperienceCard: React.FC<Props> = ({
    title, src, alt, description, aspects,
    link, reverse, aspectHeader,buttonText
}) => {
    const ref = useRef(null);
    const { isMobile } = useGeneralContext();
    // const MotionImage = motion.create(Image);
    const skillsRef = useRef(null)
    const [startAnimation, setStartAnimation] = useState(false)

    const skillsInView = useInView(skillsRef,{
        amount:0.6
    })

    const [startLiAnimation, setStartLiAnimation] = useState(false)

    useEffect(()=>{
        if(skillsInView){
            setStartLiAnimation(true)
        }
    },[skillsInView])


    // Framer Motion's useScroll and useTransform
    const { scrollYProgress } = useScroll({
        target: ref, // Watch this section
        offset: ["start end", "end start"], // Trigger based on when it enters and leaves the viewport
    });



    // Map scrollYProgress to scale and opacity
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7],  { ease:easeIn });

    const [h2AnimationComplete,setH2AnimationComplete] = useState(false)
    
    useEffect(()=>{
        console.log('set animation complete',h2AnimationComplete)
    },[h2AnimationComplete])

    useMotionValueEvent(scale, "change", (latestScale) => {
        if (latestScale === 1) {
            console.warn("Scale reached 1");
            setStartAnimation(true)
        }
    });

    // const headerRef = useRef(null);
    const imageRef = useRef(null);
    const descriptionRef = useRef(null);

    
    const handleAnimation = async () => {
        
        
  const image = imageRef.current;
  const description = descriptionRef.current;
    
      if (  image && description
        && h2AnimationComplete) {
   


          animate(image, { opacity: 1 }, { ease: 'easeInOut',
        delay:0.2 })
          animate(description, { opacity: 1 }, { ease: 'easeInOut',
        delay:0.4 })
        
        
      }
    
    
     
      if (!isMobile && h2AnimationComplete) {
        setStartLiAnimation(true);
      }
    };
    

    useEffect(() => {
        if(startAnimation && h2AnimationComplete){
            handleAnimation()
        }
    },[startAnimation, h2AnimationComplete])


    const liVariants = useCallback((delay: number, index: number) => {
        return {
            initial: {
                opacity: 0,
                x: isMobile && index % 2 === 0 ? -20 : 20,
                y: !isMobile ? 20 : 0
            },
            animate: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    delay: 0.3 + delay
                }
            }
        }
    }, [isMobile]);
    
    

    return (
        <>
            <motion.section
                ref={ref}
                style={{scale}}
                className="bg-gradient-to-b from-[#0077b3] to-blue-300 w-screen 
                relative mx-auto w-[98vw] rounded-2xl
                my-8 max-w-[1200px] overflow-x-hidden
              max-h-[850px]"
            >
 <motion.h2 
                animate={{
                    y:startAnimation ? 0 : -30,
                    opacity:startAnimation ? 1 : 0
                }}
                onAnimationComplete={()=>setH2AnimationComplete(true)}
                // ref={headerRef}
                id={`${title}-header`}
                    className="text-center w-full text-3xl sm:text-4xl  mb-6 font-bold pt-4
                    translate-y-[-2rem] opacity-0 px-3"
                >
                    {title}
                </motion.h2>
                <section className={`flex flex-col md:px-4 mx-auto ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <Image
                    ref={imageRef}
                        id={`${title}-image`}
                        src={src}
                        alt={alt}
                        width={600}
                        height={1300}
                        className='w-[80vw] mx-auto mb-4 sm:w-[40vw] max-w-[500px] rounded-2xl
                         opacity-0 object-cover max-h-[400px] rounded-2xl max-h-['
                         sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 500px" 
                         priority={true}
                    />
                    <motion.p
                    ref={descriptionRef}
                        id={`${title}-description`}
                        className="px-4 font-semibold my-auto
                        md:w-[50%]
                        opacity-0 md:text-lg whitespace-pre-line"
                    >
                        {description}
                        <br/>
                        {link !== '' && (

  
                        <button className="bg-blue-500
                        p-2 rounded-2xl mt-3 hover:text-blue-500
                        hover:bg-white transition-all">
                          
                            <Link href={link}
                            >
                                {buttonText}
                            </Link>
                        </button>
                                              )}
                    </motion.p>
                </section>

            </motion.section>
        </>
    );
}

export default ExperienceCard;