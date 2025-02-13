'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface Props {
  text: string;
  styles?: string;
}

const ScrollableText: React.FC<Props> = ({ text, styles = '' }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Dynamically calculate the visible portion of the text
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.9, 1], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.95, 1], [0.6, 1, 1, 1, 0.6]);

  return (
    <div className="overflow-hidden">
      <motion.p
        ref={ref}
        style={{ scale, opacity }}
        className={`${styles} will-change-transform`}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default ScrollableText;
