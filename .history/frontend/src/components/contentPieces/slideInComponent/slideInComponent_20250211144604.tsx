"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceCard from "../experienceCard/experienceCard";
import { experienceCardData } from "@/data/homepageData";

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
        pin: true,
      },
    });

    // Slide the second component up
    tl.to(targetElement, {
      y: "-100vh",
      ease: "none",
    });

    // Fade out ExperienceCard as it gets overtaken
    tl.to(experienceElement, { opacity: 0, duration: 0.5 }, "-=0.5");
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-[200vh]">
      {/* Pinned Experience Card (Full Height to Prevent Shrinking) */}
      <div
        ref={experienceRef}
        className="sticky top-0 flex items-center justify-center w-full h-screen transition-opacity duration-500"
      >
        {/* <ExperienceCard {...experienceCardData} buttonText="button" /> */}
        <
      </div>

      {/* Slide-in Content */}
      <div
        ref={containerRef}
        className="absolute top-[100vh] w-screen h-screen bg-gray-300 p-6 text-black rounded-2xl shadow-lg"
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
