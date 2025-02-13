"use client"; // For Next.js projects

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceCard from "../experienceCard/experienceCard";
import { experienceCardData } from "@/data/homepageData";

gsap.registerPlugin(ScrollTrigger);

const SlideInComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Animation starts when top of element hits bottom of viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
    <ExperienceCard
    /// <reference path="" />
    
    {...experienceCardData}
    buttonText='button'
    />
    <div
      ref={containerRef}
      className="w-screen h-screen bg-gray-300 max-w-2xl mx-auto p-6 text-black rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold">Slide-In Content</h2>
      <p className="mt-2 text-gray-600">
        This content slides in from the bottom when it enters the viewport.
      </p>
    </div>
    </>
  );
};

export default SlideInComponent;
