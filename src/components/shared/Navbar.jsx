"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { menus } from "@/utils/publicMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeBtnRef = useRef(null);

  // Detect scroll for navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open + Esc to close + focus management
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    const onKeyDown = (e) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);

    if (isMenuOpen) {
      // focus the close button once opened
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/siteLogo/logo.svg"
              alt="IHRCHANE"
              height={40}
              width={160}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menus?.map((menu, index) => (
              <Link
                key={index}
                href={menu.url}
                className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {menu.path}
              </Link>
            ))}

            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Toggle main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (kept mounted for smooth animation) */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ease-out
          ${isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
        `}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Centered panel */}
        <div
          className="fixed inset-0 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            role="dialog"
            aria-modal="true"
            className={`bg-white/95 w-11/12 max-w-md rounded-2xl shadow-2xl p-6 relative
              transform transition-all duration-300 ease-out will-change-transform will-change-opacity
              ${isMenuOpen ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 -translate-y-4 scale-95"}
              motion-reduce:transition-none
            `}
          >
            {/* Close button */}
            <div className="flex justify-end mb-2">
              <button
                ref={closeBtnRef}
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo/siteLogo/logo.svg"
                alt="Ihrchane"
                height={40}
                width={120}
                priority
              />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center space-y-7 py-4">
              {menus?.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.url}
                  className="text-2xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.path}
                </Link>
              ))}

              {/* Contact Button */}
              <Link
                href="/contact"
                className="bg-gray-700 hover:bg-gray-900 text-white px-8 py-4 rounded-xl text-xl font-medium transition-colors duration-200 mt-4 shadow-md w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
