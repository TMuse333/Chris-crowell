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
  minScale = 0.85,
  maxScale = 1,
  minOpacity = 0.5,
  maxOpacity = 1,
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
      className={`relative h-screen bg-red-200 overflow-hidden ${styles}`}
      style={{
        // width: "100%",
        // height: "100vh",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "flex-end",
        // padding: "20px",
        // position: "relative",
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
          rotate: rotate,
          opacity: scrollYProgress,
          tr // Opacity decreases as it moves up
        }}
      >
        <p className={`${styles}`}
        //   style={{
          
        //     lineHeight: "1.5",
        //     fontWeight: "bold",
          
        //     textAlign: "center",
        //     whiteSpace: "break-spaces",
        //   }}
        >
          {text}
        </p>
      </motion.div>
    </div>
  );
};

export default StarWarsTextEffect;
