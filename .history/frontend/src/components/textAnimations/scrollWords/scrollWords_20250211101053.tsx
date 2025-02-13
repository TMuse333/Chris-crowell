import React from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const ScrollWords: React.FC = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress

  // useInView returns an object, so no need for array destructuring
  const inView1 = useInView({ triggerOnce: true, threshold: 0.5 });
  const inView2 = useInView({ triggerOnce: true, threshold: 0.5 });
  const inView3 = useInView({ triggerOnce: true, threshold: 0.5 });

  // Scroll-based animations for the words
  const x1 = useTransform(scrollYProgress, [0, 0.1], [-300, 0]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const x2 = useTransform(scrollYProgress, [0.1, 0.2], [-300, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  const x3 = useTransform(scrollYProgress, [0.2, 0.3], [-300, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  return (
    <div className="sticky top-0 flex justify-center items-center h-screen space-x-4">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: inView1 ? 0 : -300,
          opacity: inView1 ? 1 : 0,
        }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
        className="text-4xl font-semibold"
      >
        First
      </motion.div>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: inView2 ? 0 : -300,
          opacity: inView2 ? 1 : 0,
        }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
        className="text-4xl font-semibold"
      >
        Second
      </motion.div>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: inView3 ? 0 : -300,
          opacity: inView3 ? 1 : 0,
        }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
        className="text-4xl font-semibold"
      >
        Third
      </motion.div>
    </div>
  );
};

export default ScrollWords;
