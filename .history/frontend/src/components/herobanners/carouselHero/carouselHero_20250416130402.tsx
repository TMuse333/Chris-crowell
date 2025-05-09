import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypeAlongText from "@/components/textAnimations/typeAlongText/typeAlongText";
import FadeInFromLeftText from "@/components/textAnimations/fadeInFromLeftText/fadeInFromLeftText";

interface CarouselHeroProps {
  mainHeader: string;
  titleText: string;
  descriptionText: string;
  regularText?: boolean;
  images: {
    src: string;
    alt: string;
  }[];
}

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [tabProgress, setTabProgress] = useState<number>(0);
  const [slideInProgress, setSlideInProgress] = useState(true);
  const [paused, setPaused] = useState<boolean>(false); // State to track if the carousel is paused

  useEffect(() => {
    setTabProgress(0);
    setSlideInProgress(false);
  }, [currentIndex]);

  useEffect(() => {
    if (tabProgress === 100) {
      setSlideInProgress(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [tabProgress, images.length]);

  useEffect(() => {
    if (paused) return; // If paused, do not run the interval

    const interval = setInterval(() => {
      if (tabProgress < 100) {
        setTabProgress((prev) => prev + 0.5);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [tabProgress, paused]); // Re-run interval effect only when paused state changes

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePauseResume = () => {
    setPaused((prev) => !prev); // Toggle pause/resume
  };

  return (
    <section
      className="relative w-[98vw] md:w-[60vw] rounded-2xl object-contain mx-auto md:block h-[80vh] mt-auto mb-auto border border-white border-4 text-center bg-black"
    >
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:scale-110 transition"
        aria-label="Previous slide"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:scale-110 transition"
        aria-label="Next slide"
      >
        →
      </button>

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
            src={images[currentIndex].src}
            height={600}
            width={1300}
            alt={images[currentIndex].alt}
            className="w-full rounded-2xl object-contain mx-auto h-full"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute flex bottom-[5%] left-1/2 -translate-x-1/2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-[8px] relative w-[15px] bg-gray-600 mr-3 hover:scale-[1.2] transition-all cursor-pointer`}
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

      {/* Pause/Go Button */}
      <button
        onClick={handlePauseResume}
        className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 text-white text-xl px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
        aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
      >
        {paused ? "Resume" : "Pause"}
      </button>
    </section>
  );
};



const CarouselHero: React.FC<CarouselHeroProps> = ({
  mainHeader,
  titleText,
  descriptionText,
  images,
  regularText,
}) => {
  const [startPTag, setStartPTag] = useState(false);
  const [startTypeAlong, setStartTypeAlong] = useState(false);

  const handleTitleComplete = () => {
    setStartTypeAlong(true);
  };

  return (
    <header
      className="flex flex-col md:flex-row md:h-screen relative items-center mx-auto max-w-[2200px] text-black md:mt-[-4rem] bg-transparent"
    >
      {!regularText ? (
        <section className="flex flex-col md:w-[40vw] justify-center items-center py-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            onAnimationComplete={handleTitleComplete}
            className="mx-auto p-3 text-center text-lg mt-4 font-semibold"
          >
            {titleText}
          </motion.h1>

          <TypeAlongText
            text={mainHeader}
            styles="mx-auto py-3 break-words max-w-full px-2 font-semibold whitespace-pre-line overflow-wrap text-3xl sm:text-4xl md:text-5xl"
            as="p"
            keywords={["Animated"]}
            setAnimationComplete={setStartPTag}
            startAnimation={startTypeAlong}
          />

          <FadeInFromLeftText
            text={descriptionText}
            as="p"
            className="pt-4 mx-3"
            duration={2.5}
            startAnimation={startPTag}
            keywords={["paragraph"]}
          />

          <section className="flex items-center mr-auto ml-4 mt-6">
            <button className="rounded-full border border-neutral-950 p-3 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100 mr-4">
              Contact
            </button>
            <button className="rounded-full border border-neutral-950 p-3 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">
              Free e-book
            </button>
          </section>
        </section>
      ) : (
        <section className="flex flex-col md:w-[40vw] justify-center items-center py-4">
          <h2 className="text-3xl font-semibold mb-4">About me</h2>
          <p className="px-4 w-full">
            When I’m not helping clients with their real estate needs, you’ll find me living an active lifestyle. I’m a brown belt in jiu-jitsu, a passionate outdoorsman, and love hiking, running, and all things fitness. I’m also a family man, married to my beautiful wife, and we share our lives with our two dogs, Loki and Lu.
            I believe in bringing the same discipline, focus, and energy from my fitness journey into my real estate career—always striving for excellence and making the experience enjoyable for my clients.
          </p>
        </section>
      )}

      <Carousel images={images} />
    </header>
  );
};

export default CarouselHero;