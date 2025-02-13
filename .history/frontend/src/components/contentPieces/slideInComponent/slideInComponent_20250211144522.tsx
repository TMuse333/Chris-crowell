"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggerElement = wrapperRef.current;
    const targetElement = containerRef.current;

    if (!triggerElement || !targetElement) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "center center",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    }).to(targetElement, {
      y: "-100vh",
      ease: "none",
    });
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-[200vh]">
      {/* Experience Card (Pinned while scrolling) */}
      <div className="sticky top-0 flex items-center justify-center h-screen">
        <ExperienceCard {...experienceCardData} buttonText="button" />
      </div>

      {/* Slide-in Content (Overtakes ExperienceCard) */}
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
