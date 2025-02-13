'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  text: string;
  styles?: string;
}

const ScrollableText: React.FC<Props> = ({ text, styles = '' }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          const visibleRatio = entry.intersectionRatio;
          setScrollProgress(visibleRatio); // How much of the text is visible
        }
      },
      {
        root: null, // Observes in viewport
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // Detects visibility in 10% increments
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Calculate scale and opacity dynamically based on scroll progress
  const scale = 0.85 + 0.15 * scrollProgress; // Shrinks at top/bottom
  const opacity = 0.6 + 0.4 * scrollProgress; // Fades at top/bottom

  return (
    <div className="overflow-hidden">
      <motion.p
        ref={ref}
        style={{ scale, opacity }}
        className={`${styles} will-change-transform transition-transform`}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default ScrollableText;
