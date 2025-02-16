"use client";

import React, { useState, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Link from "next/link";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

interface Props {
  text: {
    title: string;
    description: string;
  }[];
  hasIntro: boolean;
  intro?: string;
  description?: string;
  link?: string;
  margin?: string;
  inContent?: boolean;
}

const Accordion: React.FC<Props> = ({
  text,
  hasIntro,
  intro,
  description,
  link,
  margin,
  inContent,
}) => {
  const componentRef = useRef(null);
  const inView = useInView(componentRef);

  // Only one index can be expanded at a time
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  function handleSectionClick(index: number) {
    // Toggle between expanding and collapsing the same section
    setExpandedIndex(index === expandedIndex ? -1 : index);
  }

  const listVariants = (index: number): Variants => {
    return {
      initial: {
        opacity: 0,
        x: 30,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.1,
        },
      },
    };
  };

  return (
    <>
      <section
        className={`flex flex-col justify-start items-center
        mb-5 text-black ${inContent ? "md:max-w-[350px]" : ""}`}
      >
        {hasIntro && (
          <>
            <div>
              <h2
                className="text-2xl bg-gradient-to-b from-black to-gray-800 bg-clip-text text-transparent 
           text-4xl sm:text-5xl font-semibold text-center"
              >
                {intro}
              </h2>
              <p
                className="text-left md:text-center pl-4 pr-5 mt-5
           w-[100%] max-w-[900px]"
              >
                {description}
              </p>
            </div>
          </>
        )}
        <section
          className={`mt-[3rem] rounded-xl
          bg-secondary-bg
        text-white bg-opacity-75 text-black 
        border border-[#08365f] border-4
        ${margin ? `md:${margin}` : ""}`}
          ref={componentRef}
        >
          {text.map((item, index: number) => (
            <div
              key={index}
              onClick={() => handleSectionClick(index)}
              className={`border-b-4 border-b-[#08365f] p-3 transition-[height]
                transition-colors overflow-x-hidden
                 ml-auto mr-auto  w-[90vw] relative
                hover:bg-bright-gradient max-w-[1200px]  text-black
                flex flex-col justify-center items-center ${
                  expandedIndex === index ? "rounded-lg" : ""
                }`}
            >
  <button className="absolute top-[5%] right-[5%] text-lg">
    {expandedIndex === index ? (
      <HiChevronUp className="text-black" size={24} />
    ) : (
      <HiChevronDown className="text-black" size={24} />
    )}
  </button>

              <motion.h2
                variants={listVariants(index)}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                className="mb-3 mx-auto pl-4 text-center
                font-semibold text-lg sm:text-xl md:text-2xl
                "
              >
                {item.title}
              </motion.h2>
              <p
                className={`
                     duration-500 text-left
                      w-[50%] pl-5 pr-5 rounded-md
                      sm:w-[100%] max-w-[500px]
                     ${
                       expandedIndex === index
                         ? "h-[250px] w-screen overflow-scroll pt-4 transition-[height]"
                         : "h-[0px] overflow-hidden text-blue-200 pt-0"
                     }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </section>
        {link && (
          <Link href={link}>
            <motion.button
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: inView ? 1 : 0,
                transition: {
                  delay: text.length * 0.4,
                },
              }}
              className="mt-6 bg-[#00bfff] p-3 rounded-xl hover:bg-white
                 hover:text-[#00bfff] transition-all"
            >
              Learn more
            </motion.button>
          </Link>
        )}
      </section>
    </>
  );
};

export default Accordion;