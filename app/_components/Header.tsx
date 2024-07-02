'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Projects', href: '/projects' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="bg-gradient-to-b from-orange-200 to-orange-150 shadow-lg sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div 
                className="relative w-12 h-12 overflow-hidden rounded-full bg-gradient-to-b from-orange-100 to-white p-2 transition-transform group-hover:scale-110"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image src='/orange-327.svg' alt='Zindagi Asan logo' layout="fill" objectFit="contain" />
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="font-bold text-2xl text-black">Zindagi</span><span className="font-semibold text-2xl">Asaan</span>
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-base font-medium text-orange-600 hover:text-orange-800 transition duration-300 ease-in-out relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-base font-bold text-white bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white/10 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-orange-500 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-orange-500 hover:bg-white/20 transition duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 px-3">
            <Button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
