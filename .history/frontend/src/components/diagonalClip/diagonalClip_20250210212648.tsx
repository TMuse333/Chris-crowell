import { motion } from "framer-motion";

const DiagonalClipContainer = () => {
  return (
    <motion.div
      className="absolute w-full h-full z-[1]"
      style={{
        background: "linear-gradient(to bottom, #00bfff, #0099cc)", // Light to darker blue
      }}
      initial={{
        clipPath: "polygon(100% 0, 99% 50%, 100% 100%)", // Start as a thin vertical line
      }}
      animate={{
        clipPath: "polygon(100% 0, 49% 100%, 100% 100%)", // Expand to full shape
      }}
      transition={{
        duration: 1.5, // Animation time (adjust as needed)
        ease: "easeInOut",
      }}
    />
  );
};

export default DiagonalClipContainer;
