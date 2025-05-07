import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../../public/logo.webp'
import Image from 'next/image';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const services = [
    { name: 'Buying', href: '/buying' },
    { name: 'Selling', href: '/selling' },
    { name: 'Podcast', href: '/services/relocating' },
    { name: 'About', href: '/services/market-insights' },
  ];

  return (
    <nav className="w-full bg-transparent text-gray-200 fixed top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-bold text-white">
        <Image
        src={logo}
        
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-[#00bfff] transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button
              className="hover:text-[#00bfff] transition-colors"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 bg-[#1a1a1a] rounded-md shadow-lg py-2 w-48"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="block px-4 py-2 text-sm hover:bg-[#00bfff] hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <Link href="/about" className="hover:text-[#00bfff] transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#00bfff] transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="w-6 h-0.5 bg-gray-200"></span>
          <span className="w-6 h-0.5 bg-gray-200"></span>
          <span className="w-6 h-0.5 bg-gray-200"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0e0e0e] border-t border-gray-700"
          >
            <ul className="flex flex-col items-center py-4">
              <li className="w-full text-center">
                <Link
                  href="/"
                  className="block py-2 text-lg hover:text-[#00bfff] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="w-full text-center">
                <button
                  className="block py-2 text-lg hover:text-[#00bfff] transition-colors w-full"
                  onClick={toggleServices}
                >
                  Services
                </button>
                {isServicesOpen && (
                  <ul className="bg-[#1a1a1a] py-2">
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="block px-4 py-2 text-sm hover:bg-[#00bfff] hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="w-full text-center">
                <Link
                  href="/about"
                  className="block py-2 text-lg hover:text-[#00bfff] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="w-full text-center">
                <Link
                  href="/contact"
                  className="block py-2 text-lg hover:text-[#00bfff] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;