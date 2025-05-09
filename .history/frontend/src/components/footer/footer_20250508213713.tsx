import React from "react";
import Link from "next/link";
import logo from '../../../public/white-network.webp';
import Image from "next/image";
import { motion } from 'framer-motion';

interface props {
  excludedLink: string;
}

const Footer2: React.FC<props> = ({ excludedLink }) => {
  const bigLinks = [
    {
      name: 'Home',
      destination: '/',
      secondaryLinks: [
        {
          name: 'Homepage',
          destination: '/',
        },
      ],
      listSubMenu: false,
    },
    {
      name: 'Services',
      secondaryLinks: [
        // {
        //   name: 'Selling a home',
        //   destination: '/selling-your-home',
        // },
        {
          name: 'Buy a home',
          destination: '/buy-home',
        },
      ],
      listSubMenu: true,
      subMenuSrc: '',
      subMenuAlt: 'Two hands',
      desktopDescription: 'Here are some of our signature pieces of software that are ready to be implemented in your business quickly and take your business to the next level',
    },
    {
      name: 'Contact',
      destination: '/contact',
      listSubMenu: false,
      secondaryLinks: [
        {
          name: 'Contact us',
          destination: '/contact',
        },
      ],
    },
    {
      name: "More about me",
      listSubMenu: false,
      secondaryLinks: [
        {
          name: 'About',
          destination: '/about-chris-crowell',
        },
      ],
    },
  ];

  const filteredLinks = bigLinks
    .filter(link => link.name !== excludedLink)
    .map(link => {
      const filteredSecondaryLinks = link.secondaryLinks
        ? link.secondaryLinks.filter(secondary => secondary.name !== excludedLink)
        : [];
      return {
        ...link,
        secondaryLinks: filteredSecondaryLinks,
      };
    });

  return (
    <footer className="w-screen relative flex flex-col items-center justify-center mx-auto py-8 bg-gray-800">
      <h6 className="text-3xl sm:text-4xl font-semibold mb-8">Site map</h6>

      <Image
        src={logo}
        alt="Chris Crowell Logo"
        width={600}
        height={1300}
        className="w-[70vw] object-contain mx-auto max-w-[350px]"
      />

      <div className="flex flex-col mx-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:flex-row w-full mt-6 justify-center items-center md:justify-center md:items-start">
        {filteredLinks.map((link, index) => (
          <div key={index} className="flex flex-col mx-auto items-center justify-center">
            {link.secondaryLinks && link.secondaryLinks.length === 1 ? (
              <div className="text-center">
                <Link href={link.secondaryLinks[0].destination}>
                  <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold hover:text-[#00bfff]">
                    {link.secondaryLinks[0].name}
                  </h3>
                </Link>
              </div>
            ) : (
              <>
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold mx-auto text-center">
                  {link.name}
                </h3>
                <ul className="list-none p-0">
                  {link.secondaryLinks.map((link2, innerIndex) => (
                    <li key={innerIndex} className="mb-2 text-center hover:text-[#00bfff]">
                      <Link href={link2.destination}>
                        {link2.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>

      <h6 className="w-full text-center text-sm text-white mt-8 pb-4 sm:text-md md:text-lg">
        © 2025 Chris Crowell, REALTOR® – RE/MAX Nova. All rights reserved.
      </h6>

      <motion.a
        href="https://www.focusflowsoftware.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center mt-2 text-sm font-medium text-white sm:text-md"
        whileHover={{
          scale: 1.05,
          color: "#3b82f6",
          textShadow: "0px 0px 8px rgba(59, 130, 246, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Created by Focus Flow Software
      </motion.a>
    </footer>
  );
};

export default Footer2;
