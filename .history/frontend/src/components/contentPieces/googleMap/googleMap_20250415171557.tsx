import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GoogleMap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  // Animation variants for the map
  const mapVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.5 + i * 0.2 }, // Stagger after map
    }),
  };

  const contactItems = [
    { label: "Name", value: "Chris Crowell" },
    { label: "Phone", value: "902-209-3919" },
    { label: "Email", value: "chriscrowell@remaxnova.com" },
    { label: "Address", value: "1234 Bedford Hwy, Bedford, NS B4A 1C6, Canada" },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto my-8 text-black"
    >
      {/* Google Maps Iframe */}
      <motion.div
        className="flex-1 h-[400px] md:h-[500px] w-full md:mr-4 mb-4 md:mb-0"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={mapVariants}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.48195128505!2d-63.60605242274449!3d44.709774571071584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a21253bd82b11%3A0x97a989e7fae0ca99!2sChris%20Crowell%20-%20Your%20Network%20Realtor!5e0!3m2!1sen!2sca!4v1744666433170!5m2!1sen!2sca"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Contact Information */}
      <div className="flex-1 bg-gradient-to-tr from-gray-100 to-white border border-black p-6 rounded-lg flex flex-col justify-center
      ">
        <h2 className="text-2xl font-semibold my-auto text-center">Contact Information</h2>
        <ul className="mb-auto">
          {contactItems.map((item, index) => (
            <motion.li
              key={item.label}
              className="mb-2"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={listItemVariants}
              custom={index}
            >
              <span className="font-medium mb-auto">{item.label}:</span> {item.value}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GoogleMap;