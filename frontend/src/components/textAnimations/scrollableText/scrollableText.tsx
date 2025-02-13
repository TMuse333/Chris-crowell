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

const ScrollableText: React.FC<Props> = ({
  text,
  styles = "",
  minScale = 0.85,
  maxScale = 1,
  minOpacity = 0.5,
  maxOpacity = 1,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  const wordRefs = words.map(() => useRef<HTMLSpanElement>(null));

  return (
    <p
      ref={containerRef}
      className={`leading-relaxed ${styles}`}
      style={{
        whiteSpace: "break-spaces",
        margin: 0,  // Reset margin
        padding: 0, // Reset padding
      }}
    >
      {words.map((word, index) => {
        const { scrollYProgress } = useScroll({ target: wordRefs[index], offset: ["start end", "end start"] });
        const scale = useTransform(scrollYProgress, [0, 1], [minScale, maxScale]);
        const opacity = useTransform(scrollYProgress, [0, 1], [minOpacity, maxOpacity]);

        return (
          <motion.span
            key={index}
            ref={wordRefs[index]}
            style={{ display: "inline-block", scale, opacity }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

export default ScrollableText;
