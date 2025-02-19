"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  text: string;
  styles?: string;
  minScale?: number; // Minimum scale (default: 0.85)
  maxScale?: number; // Maximum scale (default: 1)
  minOpacity?: number; // Minimum opacity (default: 0.5)
  maxOpacity?: number; // Maximum opacity (default: 1)
}

const StarWarsTextEffect: React.FC<Props> = ({
  text,
  styles = "",

}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");
  const wordRefs = words.map(() => useRef<HTMLSpanElement>(null));

  // Scroll progress for the effect
  const { scrollYProgress } = useScroll();

  // The starting and ending positions for the crawl effect
  const yTransform = useTransform(scrollYProgress, [0, 1], [100, -2000]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]); // Rotate slightly as it moves up

  return (
    <div
      ref={containerRef}
      className={`relative h-screen  overflow-hidden ${styles}`}
      style={{
       
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transformOrigin: "center bottom",
          y: yTransform,
          scale: scale,
        //   rotate: rotate,
        //   opacity: scrollYProgress,
          x:"-50%" // Opacity decreases as it moves up
        }}
      >
        <p className={`${styles}`}

        >
          {text}
        </p>
      </motion.div>
    </div>
  );
};

export default StarWarsTextEffect;
