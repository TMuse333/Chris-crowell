import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ig from '../../../../public/instagram.webp';
import tikTok from '../../../../public/tik-tok-logo.webp';
import faceBook from '../../../../public/facebook.webp';
import chris from '../../../../public/chris-main.webp';
import Image from "next/image";

const GoogleMap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  const mapVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.5 + i * 0.2 },
    }),
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.6 } },
  };

  const socialVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 2 + i * 0.2, duration: 0.4 },
    }),
  };

  const contactItems = [
    { label: "Name", value: "Chris Crowell" },
    { label: "Phone", value: "902-209-3919" },
    { label: "Email", value: "chriscrowell@remaxnova.com" },
  ];

  const socials = [
    { src: ig, alt: "Instagram", href: "https://www.instagram.com/chris.yournetworkrealtor/" },
    { src: tikTok, alt: "TikTok", href: "https://www.tiktok.com/@chriscrowell3f" },
    { src: faceBook, alt: "Facebook", href: "https://www.facebook.com/chris.crowell.12" },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto my-8 text-black
      sm:px-4"
    >
      {/* Google Maps Iframe */}
      <motion.div
        className="flex-1 h-[400px] md:h-[500px] w-full md:mr-4 mb-4 md:my-auto"
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

      {/* Contact Info + Image + Socials */}
      <div className="flex-1 bg-gradient-to-tr from-gray-50 to-white border border-gray-300 p-8 rounded-xl shadow-md flex flex-col justify-start items-start">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

        <ul className="space-y-4 mb-6 w-full">
          {contactItems.map((item, index) => (
            <motion.li
              key={item.label}
              className="text-gray-700"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={listItemVariants}
              custom={index}
            >
              <span className="font-semibold text-gray-900">{item.label}:</span>{" "}
              <span className="font-normal text-gray-700">{item.value}</span>
            </motion.li>
          ))}
        </ul>

        {/* Chris image */}
        <motion.div
          className="w-full mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariant}
        >
          <Image
            src={chris}
            alt="Chris Crowell"
            className="rounded-lg shadow-md mx-auto"
            width={300}
            height={300}
            priority
          />
        </motion.div>

        {/* Social media icons */}
        <ul className="flex items-center justify-center gap-6 w-full">
          {socials.map((social, i) => (
            <motion.li
              key={social.alt}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={socialVariant}
              custom={i}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={600}
                  height={1300}
                  className={` transition-transform duration-300 object-contain ${
                    i === 0 ? "w-[100px] h-[100px] scale-[2] hover:scale-[2.5]" : "w-[75px] hover:scale-110 h-[75px]"
                  }`}
                  
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GoogleMap;
