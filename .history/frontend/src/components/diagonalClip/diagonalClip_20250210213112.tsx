import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { useEffect } from "react";

// Slight variations of #00bfff for a subtle aurora effect
const COLORS_AURORA = ["#00bfff", "#00a6e6", "#0090cc", "#0080b3", "#0077a6"];

const DiagonalClipContainer = () => {
  const color = useMotionValue(COLORS_AURORA[0]);

  useEffect(() => {
    animate(color, COLORS_AURORA, {
      ease: "easeInOut",
      duration: 8, // Smooth transition time
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const background = useMotionTemplate`linear-gradient(to bottom, #020617, ${color})`;

  return (
    <motion.div
      className="absolute w-full h-full z-[1]"
      style={{
        background,
      }}
      initial={{
        clipPath: "polygon(100% 0, 99% 50%, 100% 100%)", // Start as a thin vertical line
      }}
      animate={{
        clipPath: "polygon(100% 0, 49% 100%, 100% 100%)", // Expand to full shape
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      // For mobile: Apply larger polygon, for md and above: apply the original polygon

    />
  );
};

export default DiagonalClipContainer;
