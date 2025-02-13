"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  styles?: string;
}

const ScrollableText: React.FC<Props> = ({ text, styles = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleMap, setVisibleMap] = useState<Record<number, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleMap((prev) => {
          const updatedMap = { ...prev };
          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute("data-index"));
            updatedMap[index] = entry.intersectionRatio;
          });
          return updatedMap;
        });
      },
      {
        root: null, // Observe in the viewport
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // Track visibility in 10% steps
      }
    );

    if (containerRef.current) {
      const spans = containerRef.current.querySelectorAll("span");
      spans.forEach((span) => observer.observe(span));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden leading-relaxed">
        <p>
            
        </p>
      {text.split(" ").map((word, index) => {
        const progress = visibleMap[index] || 0; // Visibility progress
        const scale = 0.85 + 0.15 * progress; // Shrinks at top/bottom
        const opacity = 0.5 + 0.5 * progress; // Fades at top/bottom

        return (
          <motion.span
            key={index}
            data-index={index}
            style={{ display: "inline-block", scale, opacity,  }}
            className={`transition-transform will-change-transform ${styles}`}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export default ScrollableText;
