"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// 
import {  imageTextBoxData } from "@/data/homepageData";
import ImageTextBox from "../ImageTextBox/imageTextBox";
import { useGeneralContext } from "@/context/context";

gsap.registerPlugin(ScrollTrigger);



const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const triggerElement = wrapperRef.current;
    const targetElement = containerRef.current;
    const experienceElement = experienceRef.current;

    if (!triggerElement || !targetElement || !experienceElement) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "center center",
        end: "+=100%",
        scrub: true,
        pin: true, // Pin the first element while scrolling
        onUpdate: ({ progress, scroll }) => {
          // Track the bottom of the second element (containerRef)
          const bottomOfSecondElement = targetElement.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;

          // If the bottom of the second element is past the bottom of the viewport, fade out ExperienceCard
          if (bottomOfSecondElement <= windowHeight) {
            gsap.to(experienceElement, { opacity: 0 });
          } else {
            gsap.to(experienceElement, { opacity: 1 });
          }
        }
      }
    });

    // Slide the second component up
    tl.to(targetElement, {
      y:"-65vh", // Slide it up by the height of the viewport
      ease: "none",
    });

    // Fade out ExperienceCard as it gets overtaken by second component
    tl.to(experienceElement, { opacity: 1, duration: 0.5 }, "-=0.5");
  }, []);

  //turn this into sliding text component

  return (
    <div ref={wrapperRef} className="relative w-full  md:h-[150vh]
    mb-[20rem] md:mb-0">
        
      {/* Pinned Experience Card (Full Height to Prevent Shrinking) */}
      <div
        ref={experienceRef}
        className="sticky top-0   items-center justify-center w-full h-screen transition-opacity duration-500"
      >
        <ImageTextBox {...imageTextBoxData} />
      </div>

      {/* Slide-in Content */}
      <div
        ref={containerRef}
        className="absolute top-[100vh] w-screen h-[150vh] md:h-screen bg-gray-300 p-6 text-black rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold">Slide-In Content</h2>
        <p className="mt-2 text-gray-600">
          This content slides in from the bottom when you scroll.
        </p>
      </div>
    </div>
  );
};

export default ExperienceSection;
