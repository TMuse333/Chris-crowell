"use client";

import React, { useState, useRef } from "react";
import { motion, Variants, useInView, AnimatePresence } from "framer-motion";
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
  const inView = useInView(componentRef, { once: true, amount: 0.3 });

  // Only one index can be expanded at a time
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 5; // Show 3 elements per page (reduced from 6)

  // Calculate total pages
  const totalPages = Math.ceil(text.length / elementsPerPage);

  // Get the elements for the current page
  const startIndex = (currentPage - 1) * elementsPerPage;
  const currentElements = text.slice(startIndex, startIndex + elementsPerPage);

  // Handle page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setExpandedIndex(-1); // Reset expanded index when changing pages
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setExpandedIndex(-1); // Reset expanded index when changing pages
    }
  };

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
        className={`flex flex-col justify-start items-center mb-5 text-black ${
          inContent ? "md:max-w-[350px]" : ""
        }`}
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
                className="text-left md:text-center pl-4 pr-5 mt-5 w-[100%] max-w-[900px]"
              >
                {description}
              </p>
            </div>
          </>
        )}
        <section
          className={`mt-[3rem] rounded-xl bg-white text-black shadow-lg border border-gray-200 
          ${margin ? `md:${margin}` : ""}`}
          ref={componentRef}
        >
          <div className="flex flex-col">
            {/* Pagination Controls (Moved to Top) */}
            {text.length > elementsPerPage && (
              <div className="flex justify-center space-x-4 mb-4 p-3">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg font-semibold transition-all ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed text-gray-500"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Previous
                </button>
                <span className="text-gray-700 font-medium">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg font-semibold transition-all ${
                    currentPage === totalPages
                      ? "bg-gray-300 cursor-not-allowed text-gray-500"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Next
                </button>
              </div>
            )}

            {/* Accordion Elements (No Fixed Height) */}
            <div className="space-y-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage} // Key changes with page, triggering AnimatePresence
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  {currentElements.map((item, index: number) => (
                    <div
                      key={startIndex + index}
                      onClick={() => handleSectionClick(startIndex + index)}
                      className={`border-b-2 border-b-gray-200 p-3 transition-colors overflow-x-hidden 
                      ml-auto mr-auto w-[90vw] relative hover:bg-gray-100 max-w-[1200px] text-black 
                      flex flex-col justify-start items-start rounded-lg`} // Changed to justify-start and items-start for left alignment
                    >
                      <button className="absolute top-[5%] right-[5%] text-lg">
                        {expandedIndex === startIndex + index ? (
                          <div className="text-gray-700">
                            <HiChevronUp size={24} />
                          </div>
                        ) : (
                          <div className="text-gray-700">
                            <HiChevronDown size={24} />
                          </div>
                        )}
                      </button>

                      <motion.h2
                        variants={listVariants(index)}
                        initial="initial"
                        animate={inView ? "animate" : "initial"}
                        className="mb-3 pl-4 text-left font-semibold text-lg sm:text-xl md:text-2xl text-gray-800
                        w-[80%]" // Changed to text-left
                      >
                        {item.title}
                      </motion.h2>
                      <p
                        className={`duration-500 text-left
                        text-sm sm:text-base md:text-lg lg:text-xl // Increased text size per viewport
                        ${
                          expandedIndex === startIndex + index
                            ? "h-[250px]  w-[0vw]  overflow-scroll pt-4 transition-[height]"
                            : "h-[0px] overflow-hidden pt-0"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
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
              className="mt-6 bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 
              transition-all font-semibold shadow-md"
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