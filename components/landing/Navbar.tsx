"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "@/public/assets/Logo.jpg"
import LogoTop from "@/public/assets/Logo_top.jpg"
import LogoBottom from "@/public/assets/Logo_bottom.jpg"
import Image from "next/image"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topNavLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Partners", href: "/partners" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faqs" },
  ];

  const bottomNavLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Technologies", href: "/technologies" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Logo/Image Button - Fixed on top */}
     
      <div className="absolute top-0 left-1/4 -translate-x-1/2 z-10">
        <button className="p-2 bg-white rounded-b-lg shadow-md">
          <Image src={Logo} alt="Logo" height={128} width={128} className="w-auto" />
        </button>
      </div>

      {/* First Layer - White Background */}
      <div className="bg-white border-b flex justify-between">

        <div className="container mx-auto flex justify-end items-center py-2">
          {/* Right side - Links and Search */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              {topNavLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    onMouseEnter={() => setActiveLink(link.name)}
                    onMouseLeave={() => setActiveLink("")}
                  >
                    {link.name}
                  </Link>
                  {activeLink === link.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              ))}
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="px-4 py-1 border rounded-lg focus:outline-none focus:ring-2"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second Layer - Gray Background */}
      <div className="bg-[#004F8F] py-4">

        <div className="container mx-auto flex justify-end items-center py-2">
          {/* Right side - Navigation Links */}
          {!isMobile && (
            <div className="flex space-x-6">
              {bottomNavLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className="text-white hover: transition-colors duration-200"
                    onMouseEnter={() => setActiveLink(link.name)}
                    onMouseLeave={() => setActiveLink("")}
                  >
                    {link.name}
                  </Link>
                  {activeLink === link.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <button
          className="fixed top-4 right-4 z-50 p-2 bg-gray-100 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      )}

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16">
          <div className="container mx-auto px-4">
            {[...topNavLinks, ...bottomNavLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
