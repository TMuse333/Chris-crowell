"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

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
    <p ref={containerRef} className={`leading-relaxed ${styles}`} style={{ whiteSpace: "break-spaces" }}>
      {text.split(" ").map((word, index) => {
        const progress = visibleMap[index] || 0; // Visibility progress

        // Scale Mapping
        const scale = minScale + (maxScale - minScale) * progress;

        // Opacity Mapping
        const opacity = minOpacity + (maxOpacity - minOpacity) * progress;

        return (
          <motion.span
            key={index}
            data-index={index}
            style={{ display: "inline", scale, opacity }}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </p>
  );
};

export default ScrollableText;
