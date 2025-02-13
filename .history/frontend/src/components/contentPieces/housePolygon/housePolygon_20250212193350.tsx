import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { useEffect } from "react";

// Slight variations of #00bfff for a subtle aurora effect
const COLORS_GREEN = [
  "#00FF00", // Light green
  "#32CD32", // Lime green
  "#228B22", // Forest green
  "#006400", // Dark green
  "#2E8B57", // Sea green
];

const HousePolygon = () => {
  const color = useMotionValue(COLORS_GREEN[0]);

  useEffect(() => {
    animate(color, COLORS_GREEN, {
      ease: "easeInOut",
      duration: 8, // Smooth transition time
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const background = useMotionTemplate`linear-gradient(to bottom, #2EC9FF, ${color})`;

  return (
    <div className="hidden md:block absolute w-full h-full z-[1]">
      {/* House Polygon */}
      <motion.div
        className="absolute w-full h-full z-[1]"
        style={{
          background,
        }}
        initial={{
          clipPath: "polygon(0% 100%, 0% 46%, 48% 0%, 100% 45%, 100% 100%)", // House shape clip-path
        }}
        animate={{
          clipPath: "polygon(0% 100%, 0% 46%, 48% 0%, 100% 45%, 100% 100%)", // Keep the house shape static here
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HousePolygon;
