"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { menus } from "@/utils/publicMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-2"
          : "bg-transparent py-4"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='./logo/siteLogo/logo.svg'
              alt='IHRCHANE'
              height={40}
              width={160}
            />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-6'>
            {menus?.map((menu, index) => (
              <Link
                key={index}
                href={menu.url}
                className='text-gray-700 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'>
                {menu.path}
              </Link>
            ))}

            {/* Contact Button */}
            <Link
              href='/contact'
              className='bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm'>
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 dark:focus:ring-orange-400'
              aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Full-screen Mobile Menu with Blurred Background */}
        {isMenuOpen && (
          <div
            className='md:hidden fixed inset-0 z-40'
            onClick={() => setIsMenuOpen(false)}>
            {/* Blurred Background */}
            <div className='absolute inset-0 backdrop-blur-sm'></div>

            {/* Menu Content */}
            <div
              className='fixed inset-0 flex items-center justify-center'
              onClick={(e) => e.stopPropagation()}>
              <div className='bg-white/95 dark:bg-gray-900/95 w-11/12 max-w-md rounded-2xl shadow-2xl p-6 relative'>
                {/* Close button */}
                <div className='flex justify-end mb-2'>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
                    <svg
                      className='h-6 w-6 text-gray-500 dark:text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                {/* Logo at the top */}
                <div className='flex justify-center mb-8'>
                  <div className='flex items-center'>
                    <Image
                      src='./logo/siteLogo/logo.svg'
                      alt='Ihrchane'
                      height={40}
                      width={120}
                    />
                  </div>
                </div>

                {/* Menu Items */}
                <div className='flex flex-col items-center space-y-7 py-4'>
                  {menus?.map((menu, index) => (
                    <Link
                      key={index}
                      href={menu.url}
                      className='text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 py-2'
                      onClick={() => setIsMenuOpen(false)}>
                      {menu.path}
                    </Link>
                  ))}

                  {/* Contact Button */}
                  <Link
                    href='/contact'
                    className='bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-xl font-medium transition-colors duration-200 mt-4 shadow-md w-full text-center'
                    onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
