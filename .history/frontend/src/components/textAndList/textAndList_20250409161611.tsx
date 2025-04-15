import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useGeneralContext } from "@/context/context";
import Image from "next/image";
import Link from "next/link";

interface ListAspects {
  title: string;
  description: string;
  index: number;
  isSelected: boolean;
  setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  parentInView: boolean;
}

const ListElement: React.FC<ListAspects> = ({
  title,
  description,
  index,
  isSelected,
  setExpandedIndex,
  parentInView,
}) => {
  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const slideInVariants = (delay: number) => {
    return {
      initial: {
        x: 40,
        y: 33,
        opacity: 0,
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.3,
        },
      },
    };
  };

  const { isMobile } = useGeneralContext();

  return (
    <motion.div
      ref={ref}
      variants={slideInVariants(index * 0.15)}
      initial="initial"
      animate={(!isMobile && parentInView) || inView ? "animate" : "initial"}
      className="bg-button-color rounded-3xl overflow-hidden 
      border border-black border-2 text-black md:w-[35vw]"
    >
      <button
        className="w-full flex justify-between items-center text-left text-black p-4 font-semibold bg-button-color rounded-t-lg focus:outline-none"
        onClick={() => handleClick(index)}
      >
        <span className="">{title}</span>
        <span>
          {isSelected ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isSelected ? "h-[30vh] lg:h-[30vh]" : "h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-black">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface Props {
  subTitle: string;
  title: string;
  src?: string;
  alt?: string;
  description: string;
  link?: string;
  listAspects: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
}

const TextAndList: React.FC<Props> = ({
  title,
  description,
  listAspects,
  subTitle,
  src,
  alt,
  link,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 4; // Show 4 elements per page

  // Calculate total pages
  const totalPages = Math.ceil(listAspects.length / elementsPerPage);

  // Get the elements for the current page
  const startIndex = (currentPage - 1) * elementsPerPage;
  const currentElements = listAspects.slice(
    startIndex,
    startIndex + elementsPerPage
  );

  // Handle page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setExpandedIndex(null); // Reset expanded index when changing pages
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setExpandedIndex(null); // Reset expanded index when changing pages
    }
  };

  useEffect(() => {
    console.log("expanded index", expandedIndex);
    console.log("current page", currentPage);
  }, [expandedIndex, currentPage]);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.7,
  });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row text-black overflow-x-hidden mx-auto"
    >
      {/* Top Section */}
      <section
        className="flex flex-col justify-center items-center space-y-4 p-4 mb-auto text-center"
      >
        <h3 className="text-lg font-semibold text-gray-700">{subTitle}</h3>
        <h2 className="text-3xl font-bold text-gray-900 text-center font-cursive">
          {title}
        </h2>
        {src && alt && (
          <Image
            width={600}
            height={1300}
            src={src}
            alt={alt}
            className="rounded-xl relative md:w-[50vw] w-[90vw] h-[80vh] md:h-[45vw] max-h-[467px] max-w-[668px] mx-auto object-cover"
          />
        )}
        <p className="text-black md:text-left">{description}</p>
        {link && (
          <Link href={link}>
            <button className="p-3 rounded-2xl bg-[#00bfff] text-black">
              Contact
            </button>
          </Link>
        )}
      </section>

      {/* Accordion Section */}
      <section
        className="rounded-xl mx-auto w-[90vw] p-5 max-w-[800px] my-auto"
      >
        <div className="flex flex-col">
          {/* Fixed Height Container for List Elements */}
          <div className="h-[calc(4*14rem)] space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage} // Key changes with page, triggering AnimatePresence
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {currentElements.map((aspect, index) => (
                  <ListElement
                    {...aspect}
                    key={startIndex + index}
                    index={startIndex + index}
                    isSelected={startIndex + index === expandedIndex}
                    setExpandedIndex={setExpandedIndex}
                    parentInView={inView}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          {listAspects.length > elementsPerPage && (
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#00bfff] text-black"
                }`}
              >
                Previous
              </button>
              <span className="text-black">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${
                  currentPage === totalPages
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#00bfff] text-black"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default TextAndList;