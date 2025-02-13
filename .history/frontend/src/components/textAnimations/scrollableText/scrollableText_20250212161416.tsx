'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React,{ useRef } from 'react';

interface Props {
  text:string,
  styles:string
}

const ScrollableText:React.FC<Props> = ({
  text,styles
}) => {
    const ref = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    // Scale effect: Shrinks at the top and bottom 10%
    const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
    
    // Opacity effect: Slightly reduces opacity at top and bottom 5-10%
    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.5, 0.95, 1], [0.6, 1, 1, 1, 0.6]);

    return (
        <motion.p
            ref={ref}
            style={{ scale, opacity }}
            className={` ${styles}`}
        >
            {text}
        </motion.p>
    );
};

export default ScrollableText;
