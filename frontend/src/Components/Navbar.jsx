"use client";
import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll to Testimonials
  const scrollToTestimonials = (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = "/#CustomerReviews";
    } else {
      const section = document.getElementById("CustomerReviews");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setResourcesOpen(false);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white"
      style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)" }}>
      <div className="flex items-center justify-between mx-auto max-w-[1445px] h-[80px] px-6 lg:px-[100px] py-[22px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/images/logo.svg" alt="UnityEPOS" className="w-[150px] h-[80px]" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 ml-[80px] space-x-8 text-[#111111] font-medium items-center mt-2 text-[16px]">
          <a href="/product" className="hover:text-[#008B7C] font-inter">Product</a>
          <a href="/pricing" className="hover:text-[#008B7C]  font-inter">Pricing</a>
          <a href="/contact" className="hover:text-[#008B7C] font-inter">Contact Us</a>

          {/* Resources Dropdown */}
          <div ref={dropdownRef} className=" group relative">
         <button
  onClick={() => setResourcesOpen(!resourcesOpen)}
  className={`flex items-center px-3 py-2 rounded-md cursor-pointer font-inter font-medium transition-colors duration-300
    ${resourcesOpen 
      ? "bg-[#008B7C] text-white" 
      : "text-gray-800 hover:text-white hover:bg-[#008B7C]"
    }`}
>
  Resources
  <img
    src="/images/down-arrow-2.svg"
    alt="Arrow"
    className={`h-3 w-3 ml-2 mt-0.5 transition-transform duration-300 
      ${resourcesOpen ? "rotate-180 group-hover:filter group-hover:brightness-0 group-hover:invert" : "rotate-0"} 
      ${!resourcesOpen ? "group-hover:filter group-hover:brightness-0 group-hover:invert" : ""}
    `}
  />
</button>

            {resourcesOpen && (
             <div className="absolute left-0 mt-2 w-56 md:w-60 py-2 bg-white border border-[#008B7C] rounded-lg shadow-lg z-50">
  <ul className="flex flex-col divide-y  divide-[#008B7C] px-3 ">
    <li>
      <a
        href="/#CustomerReviews"
        onClick={scrollToTestimonials}
        className="block px-1 py-2 text-gray-800 font-inter mb-2 hover:text-white  font-medium hover:bg-[#008B7C] rounded-md transition-colors"
      >
        Testimonials
      </a>
    </li>
    <li>
      <a
        href="/faq"
        onClick={() => setResourcesOpen(false)}
        className="block px-1 py-3 text-gray-800 my-2 font-medium hover:bg-[#008B7C] hover:text-white rounded-md transition-colors"
      >
        FAQ
      </a>
    </li>
    <li>
      <a
        href="/howitwork"
        onClick={() => setResourcesOpen(false)}
        className="block px-1 py-3 text-gray-800 mt-2 font-medium hover:bg-[#008B7C] hover:text-white  rounded-md transition-colors"
      >
        How it works
      </a>
    </li>
  </ul>
</div>

            )}
          </div>
        </div>

        {/* Desktop Buttons */}
<div className="lg:flex hidden flex-shrink-0 items-center gap-3">
  {/* Get Free Demo */}
  <a
    href="/signin"
    onMouseEnter={() => setHovered("free")}
    onMouseLeave={() => setHovered(null)}
    className={`
      border border-[#008B7C] py-[7px] rounded-[6px] px-[16px] font-inter text-[16px] font-medium transition-colors duration-300
      ${
        hovered === "free"
          ? "bg-[#008B7C] text-white"        // hovered on free → white bg
          : hovered === "buy"
          ? "bg-[#008B7C] text-white"        // hovered on buy → demo turns green
          : "bg-white text-[#008B7C]"        // default state
      }
    `}
  >
    Get Free Demo
  </a>

  {/* Buy Now */}
  <a
    href="/buy"
    onMouseEnter={() => setHovered("buy")}
    onMouseLeave={() => setHovered(null)}
    className={`
      py-[7px] px-[18px] rounded-[6px] transition-colors font-medium border border-[#008B7C] duration-300 font-inter text-[16px]
      ${
        hovered === "buy"
          ? "bg-white text-[#008B7C]"        // hovered on buy → white bg
          : hovered === "free"
          ? "bg-white text-[#008B7C]"        // hovered on free → buy turns green
          : "bg-[#008B7C] text-white"        // default state
      }
    `}
  >
    Buy Now
  </a>
</div>



        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiX className="w-7 h-7 text-[#1B1B1B]" /> : <HiMenu className="w-7 h-7 text-[#1B1B1B]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md w-full">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            <li>
              <a href="/product" className="text-gray-800 hover:text-[#008B7C]">Product</a>
            </li>
            <li>
              <a href="/pricing" className="text-gray-800 hover:text-[#008B7C]">Pricing</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-800 hover:text-[#008B7C]">Contact Us</a>
            </li>

            {/* Mobile Resources Dropdown */}
            <li>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center justify-between w-full text-gray-800 font-medium py-2"
              >
                Resources
                <img
                  src="/images/down-arrow-2.svg"
                  alt="Arrow"
                  className={`h-3 w-3 transition-transform duration-300 ${
                    resourcesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {resourcesOpen && (
                <ul className="flex flex-col mt-2 pl-4 border-l border-[#008B7C] space-y-2">
                  <li>
                    <a href="/#CustomerReviews" onClick={scrollToTestimonials} className="text-gray-800 hover:text-[#008B7C]">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="/faq" onClick={() => setResourcesOpen(false)} className="text-gray-800 hover:text-[#008B7C]">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/howitwork" onClick={() => setResourcesOpen(false)} className="text-gray-800 hover:text-[#008B7C]">
                      How it works
                    </a>
                  </li>
                </ul>
              )}
            </li>

<li className="flex flex-col gap-2 mt-2">
              <a
                href="/signin"
                className="border border-[#008B7C] py-2 px-4 rounded-md text-[#008B7C] font-medium text-center hover:bg-[#008B7C] hover:text-white transition-colors"
              >
                Get Free Demo
              </a>
              <a
                href="/buy"
                className="bg-[#008B7C] text-white py-2 px-4 rounded-md text-center hover:bg-white hover:text-[#008B7C] transition-colors"
              >
                Buy Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
