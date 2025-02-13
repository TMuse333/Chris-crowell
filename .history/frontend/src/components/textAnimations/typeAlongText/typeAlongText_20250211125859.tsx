import { motion } from 'framer-motion';
import React, { ElementType, useState, useEffect } from 'react';

interface TypeAlongTextProps {
  text: string; // The text to animate
  as?: ElementType; // The HTML tag to render (default: 'p')
  styles?: string; // Additional CSS classes
  keywords?: string[]; // Highlighted keywords
  startAnimation?: boolean; // Control when animation starts
  setAnimationComplete?: React.Dispatch<React.SetStateAction<boolean>>; // Notify when animation is complete
  duration?: number; // Optional duration to control animation speed (default: 0.3 seconds)
}

const TypeAlongText: React.FC<TypeAlongTextProps> = ({
  text,
  as: Tag = 'p', // Default to 'p' tag
  styles = '',
  keywords = [],
  startAnimation = false, // Default to false if not provided
  setAnimationComplete, // Optional function to notify when animation is complete
  duration = 0.3, // Default animation duration for each character (can be customized)
}) => {
  const [highlightComplete, setHighlightComplete] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [completedChars, setCompletedChars] = useState(0)

  useEffect(() => {
    if (startAnimation && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [startAnimation, animationStarted]);

  const isKeyword = (segment: string) => keywords.includes(segment);

  const handleAnimationComplete = () => {

    setHighlightComplete(true);
    if (setAnimationComplete) {
        console.log('typing animation complete')
      setAnimationComplete(true); // Notify parent that the animation is complete
    }
  };

  let charIndexCounter = 0;

  return (
    <Tag className={`inline-block text-center mx-auto ${styles}`}>
      {text.split('\n').map((line, lineIndex) => (
        <span key={lineIndex} className="block"> {/* Render each line as a block */}
          {line.split(' ').map((word, wordIndex) => (
            <span key={`${lineIndex}-${wordIndex}`}> {/* Add spacing between words */}
              {word.split('').map((char, charIndex) => {
                const cumulativeDelay = charIndexCounter * 0.05;
                charIndexCounter++;
  
                const isLastCharacter =
                  charIndexCounter === text.replace(/\s/g, '').length;
  
                return (
                  <motion.span
                    key={`${lineIndex}-${wordIndex}-${charIndex}`}
                    initial={{ y: -20, opacity: 0 }}
                    animate={startAnimation ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      delay: cumulativeDelay,
                      duration,
                    }}
                    className={`inline-block whitespace-pre-line 
                      ${highlightComplete && isKeyword(word) ? 'animate-gradient' : ''}`}
                    style={
                      highlightComplete && isKeyword(word)
                        ? {
                            backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)", // Default colors
                            backgroundClip: 'text', // Apply the gradient only to text
                            WebkitBackgroundClip: 'text', // For webkit browsers
                            color: 'transparent', // Make the text color transparent to show the gradient
                            transition: 'background-image 3s ease-in-out infinite', // Gradient transition
                          }
                        : undefined
                    }
                    whileHover={{
                      y: -12,
                      transition: {
                        duration: 0.2,
                        ease: 'easeInOut',
                      },
                    }}
                    onAnimationComplete={isLastCharacter ? handleAnimationComplete : undefined}
                  >
                    {char}
                  </motion.span>
                );
              })}
              &nbsp; {/* Add space between words */}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
  
};

export default TypeAlongText;