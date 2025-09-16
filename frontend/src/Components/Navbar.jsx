import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-[50px] xl:px-[100px] py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#008B7C] flex-shrink-0"
        >
          LOGO
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex flex-1 justify-center space-x-8 text-gray-800 font-medium text-[16px]">
          <Link to="/" className="hover:text-[#008B7C]">Home</Link>
          <Link to="/product" className="hover:text-[#008B7C]">Product</Link>
          <Link to="/pricing" className="hover:text-[#008B7C]">Pricing</Link>
          <Link to="/contact" className="hover:text-[#008B7C]">Contact Us</Link>
          <Link to="/how-it-works" className="hover:text-[#008B7C]">How it works</Link>
          <Link to="/resources" className="hover:text-[#008B7C]">Resources</Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden xl:flex flex-shrink-0">
          <button className="bg-[#008B7C] text-white font-bold py-3 px-6 rounded-md hover:bg-teal-700 transition">
            Get a Free Demo
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="xl:hidden flex-shrink-0">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="w-7 h-7 text-[#1B1B1B]" />
            ) : (
              <HiMenu className="w-7 h-7 text-[#1B1B1B]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/product" className="block hover:text-[#008B7C]" onClick={() => setIsOpen(false)}>Product</Link>
          <Link to="/pricing" className="block hover:text-[#008B7C]" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/contact" className="block hover:text-[#008B7C]" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/how-it-works" className="block hover:text-[#008B7C]" onClick={() => setIsOpen(false)}>How it works</Link>
          <Link to="/company" className="block hover:text-[#008B7C]" onClick={() => setIsOpen(false)}>Company</Link>
          <Link to="/resources" className="block hover:text-[#008B7C]" onClick={() => setIsOpen(false)}>Resources</Link>
          <hr />
          <Link to="/login" className="block hover:text-[#008B7C]" onClick={() => setIsOpen(false)}>Login</Link>
          <button className="w-full bg-[#008B7C] text-white font-bold py-3 rounded-md hover:bg-teal-700 transition">
            Get a Free Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
