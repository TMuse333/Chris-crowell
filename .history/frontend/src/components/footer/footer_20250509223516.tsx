
import React from "react";
import Link from "next/link";
import logo from '../../../public/white-network.webp';
import Image from "next/image";
import { motion } from 'framer-motion';
import remax from '../../../public/remax-ballon.webp';

interface Props {
  excludedLink: string;
}

const Footer2: React.FC<Props> = ({ excludedLink }) => {
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
        {
          name: 'Selling a home',
          destination: '/selling-your-home-halifax',
        },
        {
          name: 'Buy a home',
          destination: '/buy-home-halifax',
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
    {
      name: "Podcast",
      listSubMenu: false,
      secondaryLinks: [
        {
          name: 'Podcast',
          destination: '/podcast',
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
    <footer className="w-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src={logo}
            alt="Chris Crowell Logo"
            width={350}
            height={150}
            className="w-[70vw] max-w-[350px] object-contain mb-6"
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Site Map</h2>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filteredLinks.map((link, index) => (
            <div key={index} className="flex flex-col items-start">
              {link.secondaryLinks && link.secondaryLinks.length === 1 ? (
                <Link
                  href={link.secondaryLinks[0].destination}
                  className="text-xl font-semibold hover:text-[#00bfff] transition-colors"
                >
                  {link.secondaryLinks[0].name}
                </Link>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-4">{link.name}</h3>
                  <ul className="space-y-2">
                    {link.secondaryLinks.map((link2, innerIndex) => (
                      <li key={innerIndex}>
                        <Link
                          href={link2.destination}
                          className="text-gray-300 hover:text-[#00bfff] transition-colors"
                        >
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

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <h6 className="text-sm sm:text-base text-gray-300">
              © 2025 Chris Crowell, REALTOR® – RE/MAX Nova. All rights reserved.
            </h6>
            <Image
              src={remax}
              alt="RE/MAX Logo"
              width={100}
              height={100}
              className="w-[10vw] max-w-[100px] object-contain"
            />
          </div>

          <motion.a
            href="https://www.focusflowsoftware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-gray-300 font-medium"
            whileHover={{
              scale: 1.05,
              color: "#3b82f6",
              textShadow: "0px 0px 8px rgba(59, 130, 246, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Created by Focus Flow Software
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
