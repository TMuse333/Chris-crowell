import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypeAlongText from "@/components/textAnimations/typeAlongText/typeAlongText";
import FadeInFromLeftText from "@/components/textAnimations/fadeInFromLeftText/fadeInFromLeftText";
import tom from '../../../../public/thomas-full-body-1-nogb.png'

interface CarouselHeroProps {
  mainHeader: string;
  titleText: string;
  descriptionText: string;
  // buttonText: string;
  regularText?:boolean
}

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [tabProgress, setTabProgress] = useState<number>(0);
  const [slideInProgress, setSlideInProgress] = useState(true);

  const data = [
    {
      src: tom,
      alt: "alt",
      description: "This is the first description",
    },
    {
      src: tom,
      alt: "alt",
      description: "This is the second description",
    },
    {
      src: tom,
      alt: "alt",
      description: "This is the third description",
    },
  ];

  useEffect(() => {
    setTabProgress(0);
    setSlideInProgress(false);
  }, [currentIndex]);

  useEffect(() => {
    if (tabProgress === 100) {
      setSlideInProgress(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  }, [tabProgress]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (tabProgress < 100) {
        setTabProgress((prev) => prev + 0.5);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [tabProgress]);

  return (
    <section
      className="relative w-[98vw]  md:w-[60vw] rounded-2xl object-contain mx-auto md:block h-[80vh] mt-auto mb-auto border border-white border-4 text-center
      bg-black"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[80%]"
        >
          <Image
            src={data[currentIndex].src}
            height={600}
            width={1300}
            alt={data[currentIndex].alt}
            className="w-full rounded-2xl object-contain mx-auto h-full"
          />
        </motion.div>
        {/* <motion.p className="text-white"
        
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5,
         delay:0.5 }}>
            {data[currentIndex].description}
        </motion.p> */}
      </AnimatePresence>
      

      <div className="absolute flex bottom-[5%] left-1/2 -translate-x-1/2">
        {data.map((_, index) => (
          <div
            key={index}
            className={`h-[8px] relative w-[50px] bg-gray-600 mr-3 hover:scale-[1.2] transition-all`}
            onClick={() => setCurrentIndex(index)}
          >
            {index === currentIndex && (
              <div
                className="bg-white h-full"
                style={{
                  width: `${tabProgress}%`,
                  transition: slideInProgress ? "width 0.3s ease-in" : "none",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const CarouselHero: React.FC<CarouselHeroProps> = ({
  mainHeader,
  titleText,
  descriptionText,
 
  regularText
}) => {
  const [startPTag, setStartPTag] = useState(false);
  const [startTypeAlong, setStartTypeAlong] = useState(false);

  const handleTitleComplete = () => {
    setStartTypeAlong(true);
  };

  return (
    <header
      className="flex flex-col md:flex-row md:h-screen relative items-center mx-auto max-w-[2200px] text-black md:mt-[-4rem] 
   bg-transparent
   "
    >
      {!regularText ? (

      
      <section className="flex flex-col md:w-[40vw] justify-center items-center py-4">
        <motion.h1
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          onAnimationComplete={handleTitleComplete}
          className="mx-auto p-3 text-center text-lg mt-4 font-semibold"
        >
          {titleText}
        </motion.h1>

        <TypeAlongText
          text={mainHeader}
          styles="mx-auto py-3 break-words max-w-full px-2 font-semibold whitespace-pre-line
          overflow-wrap text-3xl sm:text-4xl md:text-5xl"
          as="p"
          keywords={["Animated"]}
          setAnimationComplete={setStartPTag}
          startAnimation={startTypeAlong}
        />
        {/* <h1 className="mx-auto py-3 break-words max-w-full px-2 font-semibold whitespace-pre-line
        text-5xl">
          {mainHeader}</h1> */}

        <FadeInFromLeftText
          text={descriptionText}
          as="p"
          className="pt-4 mx-3"
          duration={2.5}
          startAnimation={startPTag}
          keywords={["paragraph"]}
        />

<section className="flex items-center mr-auto ml-4 mt-6">
      <button className=" rounded-full border border-neutral-950 p-3 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100
      mr-4">
        Contact
      </button>
      <button className=" rounded-full border border-neutral-950 p-3 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">
        Free e-book
      </button>
  
      </section>
      </section>

) : (
  <section className="flex flex-col md:w-[40vw] justify-center items-center py-4">

    <h2 className="text-3xl font-semibold
    mb-4">
      About me
    </h2>
    <p className="px-4 w-full">
    When I’m not helping clients with their real estate needs, you’ll find me living an active lifestyle. I’m a brown belt in jiu-jitsu, a passionate outdoorsman, and love hiking, running, and all things fitness. I’m also a family man, married to my beautiful wife, and we share our lives with our two dogs, Loki and Lu.

I believe in bringing the same discipline, focus, and energy from my fitness journey into my real estate career—always striving for excellence and making the experience enjoyable for my clients.
    </p>
 

  </section>
)}

      <Carousel />
    </header>
  );
};

export default CarouselHero;