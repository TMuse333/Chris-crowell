import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Sliding// Assuming the SlidingText component is in the same folder

gsap.registerPlugin(ScrollTrigger);

const ScrollWithSlidingText: React.FC = () => {
  const [slideComplete, setSlideComplete] = useState(false);

  // References for the SlidingText components
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    // Lock scroll while the sliding text is active
    gsap.to('body', {
      overflow: 'hidden',
      scrollTrigger: {
        trigger: textRef1.current,
        start: 'top top',
        end: '+=3000', // Adjust as per the scroll length
        scrub: true,
        pin: true, // Pin the section to avoid scrolling
        markers: true,
      }
    });

    // Scroll trigger to animate the components in sequence
    gsap.fromTo(textRef1.current, 
      { x: 350, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 2, 
        scrollTrigger: {
          trigger: textRef1.current,
          start: 'top 80%',
          end: '+=200', 
          scrub: 1,
        }
      });

    gsap.fromTo(textRef2.current, 
      { x: 350, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 2, 
        scrollTrigger: {
          trigger: textRef2.current,
          start: 'top 80%',
          end: '+=200',
          scrub: 1,
        }
      });

    gsap.fromTo(textRef3.current, 
      { x: 350, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 2, 
        scrollTrigger: {
          trigger: textRef3.current,
          start: 'top 80%',
          end: '+=200',
          scrub: 1,
        }
      });

    // Cleanup GSAP animations when component unmounts
    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className="relative">
      <div className="h-screen flex justify-center items-center flex-col" ref={textRef1}>
        <SlidingText text="First Word" setSlideComplete={setSlideComplete} />
      </div>
      <div className="h-screen flex justify-center items-center flex-col" ref={textRef2}>
        <SlidingText text="Second Word" setSlideComplete={setSlideComplete} />
      </div>
      <div className="h-screen flex justify-center items-center flex-col" ref={textRef3}>
        <SlidingText text="Third Word" setSlideComplete={setSlideComplete} />
      </div>
    </div>
  );
};

export default ScrollWithSlidingText;
