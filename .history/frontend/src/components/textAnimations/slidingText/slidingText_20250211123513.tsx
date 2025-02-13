import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useScroll } from "framer-motion";

interface TextProps {
    text: string;
    setSlideComplete?: React.Dispatch<React.SetStateAction<boolean>>;
    subText?: string;
    toggle?: boolean;
}

const SlidingText: React.FC<TextProps> = ({ text, setSlideComplete, subText, toggle }) => {
    // Reference to the target element to track scroll position
    const targetRef = useRef(null);

    // State to track when slide is complete
    const [slideComplete, setLocalSlideComplete] = useState(false);

    // Get scroll progress relative to the targetRef
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"], // Adjust these offsets as needed
    });

    // Transform scroll progress to x position, opacity, and tilt effect using react-spring
    const [styles, api] = useSpring(() => ({
        x: 350,
        opacity: 0,
        rotateX: 0,
        rotateY: 0,
        config: { tension: 170, friction: 26 }
    }));

    // When scroll position changes, update the spring properties
    useEffect(() => {
        // Mapping scroll progress to the values for translation and tilt
        const scrollX = scrollYProgress.get() * 350; // Slide the text from right to left
        const scrollOpacity = scrollYProgress.get() < 0.2 ? 0 : 1;
        const rotateAmount = scrollYProgress.get() * 15; // Tilt effect

        api.start({
            x: scrollX,
            opacity: scrollOpacity,
            rotateX: rotateAmount,
            rotateY: rotateAmount,
        });
    }, [scrollYProgress, api]);

    return (
        <div ref={targetRef}>
            <animated.h2
                className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
                    text-8xl sm:text-8xl font-semibold text-center relative transition-colors"
                style={{
                    transform: styles.x.to((x) => `translateX(${x}px)`),
                    opacity: styles.opacity,
                    rotateX: styles.rotateX.to((r) => `${r}deg`),
                    rotateY: styles.rotateY.to((r) => `${r}deg`),
                }}
            >
                {text}
            </animated.h2>
            {subText && (
                <animated.h3
                    id={`subtext-${subText}`}
                    className={`${slideComplete ? 'opacity-1' : 'opacity-0'}
                        mt-4 text-center transition-opacity
                        text-xl sm:text-2xl`}
                    style={{ opacity: styles.opacity }}
                >
                    {subText}
                </animated.h3>
            )}
        </div>
    );
};

export default SlidingText;
