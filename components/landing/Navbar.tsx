"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image"
import { BotOff } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Logo_Top from '@/public/assets/Logo_top.jpg'
import Logo_Bottom from '@/public/assets/Logo_bottom.jpg'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggled, setIsToggled] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topNavLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Partners", href: "/partners" },
    { name: "Blogs", href: "/blog" },
    { name: "FAQ", href: "/faqs" },
  ];

  const bottomNavLinks = [
    { name: "Home", href: "/", sub: "" },
    {
      name: "Solutions",
      href: "",
      sub: [
        {
          name: "Risk Evaluation",
          href: "/solutions/risk-evaluation"
        },
        {
          name: "Threat Analysis",
          href: "/solutions/threat-analysis"
        },
        {
          name: "Lending Analytics",
          href: "/solutions/lending-analytics"
        },
        {
          name: "Roadmap to Success",
          href: "/solutions/roadmap-to-success"
        }
      ]
    },
    {
      name: "Industries",
      href: "",
      sub: [
        {
          name: "Community Credit Groups",
          href: "/industries/community-credit-groups"
        },
        {
          name: "Banking Corporations",
          href: "/industries/banking-corporations"
        },
        {
          name: "Focused Lenders",
          href: "/industries/focused-lenders"
        }
      ]
    },
    { name: "Technologies", href: "/technologies", sub: "" },
    { name: "How it works", href: "/how-it-works", sub: "" },
    { name: "Contact Us", href: "/contact-us", sub: "" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Logo/Image Button - Fixed on top */}

      {/* First Layer - White Background */}
      <div className="bg-white border-b flex ">
        <div className="py-2 mx-auto justify-start ">
          <div
            className="h-1/4 w-[80px] rounded-full"
            style={{
              clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
              background: `url(${Logo_Top.src})`,
              backgroundSize: '100% 113%',
              backgroundPosition: 'top',
              padding: '30px'
            }}
          >
          </div>
        </div>
        <div className="flex justify-end items-center py-2 mr-[10%] w-1/2">
          {/* Right side - Links and Search */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              {topNavLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className={`text-gray-600 hover:text-[#004F8F] transition-colors duration-200 ${activeLink === link.name ? 'text-blue-300 underline' : ''}`}
                    onMouseEnter={() => setActiveLink(link.name)}
                    onMouseLeave={() => setActiveLink("")}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="px-4 py-1 border rounded-full focus:outline-none focus:ring-2"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second Layer - Gray Background */}
      <div className="bg-[#004F8F] border-b flex items-center">
        <div className="py-2 mx-auto justify-start ">
          <div
          className="py-8 mx-[16%] md:w-[130px] h-full bg-white mix-blend-screen"
          style={{
            clipPath: 'polygon(0% 25%, 100% 25%, 100% 70%, 0% 70%)',
            background: `url(${Logo_Bottom.src})`,
            backgroundSize: '110% 200%',
            backgroundPosition: 'center',
            filter: 'invert(1) brightness(2)',
          }}
        ></div>
        </div>        
        <div className="w-1/2 flex justify-end items-center py-2 mr-[10%]">

          {/* Right side - Navigation Links */}
          {!isMobile && (
            <div className="flex space-x-2 items-center">
              {bottomNavLinks.map((link) => (
                <div key={link.name} className="relative"
                  onMouseEnter={() => { setActiveLink(link.name); setIsToggled(link.name); }}
                >
                  {link.href ? (
                    <Link
                      href={link.href}
                      className={`text-white text-xl hover:text-white transition-colors duration-200 p-2 ${activeLink === link.name ? 'bg-[#003662] rounded-lg' : ''}`}
                      onMouseLeave={() => setActiveLink("")}
                    >
                      {link.name}
                    </Link>
                  ) : (

                    <div
                      className="dropdown relative"
                    >
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-[#004F8F] text-xl text-white hover:bg-[#004F8F] hover:text-white">
                              {link.name}
                            </NavigationMenuTrigger>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                      <div
                        className={`dropdown-content absolute w-48 mt-2 bg-white shadow-lg rounded-md py-2 ${isToggled === link.name ? 'show' : 'hidden'}`}
                        onMouseLeave={() => { setActiveLink(""); setIsToggled(""); }}
                      >
                        {Array.isArray(link.sub) && link.sub.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-[#004F8F]"
                            onMouseEnter={() => setActiveLink(subLink.name)}
                            onMouseLeave={() => setActiveLink("")}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
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
        <div className="w-full right-4 fixed inset-0 bg-white z-40 pt-16">
          <div className="container mx-auto px-4">
            {[...topNavLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-4 border-t border-gray-200 w-full" />
            {[...bottomNavLinks].map((link) => (
              link.sub ? (
                <div key={link.name} className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200" >
                  <p onClick={() => setIsToggled(link.name)}>{link.name}&#11206;</p>
                  <div className={`${isToggled === link.name ? 'show' : 'hidden'}`}>
                    {Array.isArray(link.sub) && link.sub.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
