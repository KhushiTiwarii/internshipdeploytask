import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"; // Importing menu and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto py-6 px-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-green-600">Printify</h1>

        {/* Hamburger menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-green-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger Icon */}
            <AiOutlineMenu className="w-8 h-8" />
          </button>
        </div>

        {/* Links for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 px-3 hover:text-green-600">
            Catalog
          </a>
          <a href="#" className="text-gray-700 px-3 hover:text-green-600">
            How it works
          </a>
          <a href="#" className="text-gray-700 px-3 hover:text-green-600">
            Pricing
          </a>
          <a href="#" className="text-gray-700 px-3 hover:text-green-600">
            Blog
          </a>
          <button className="bg-white text-green-600 border border-gray-200 px-4 py-2 rounded hover:bg-gray-100">
            Log in
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </nav>
      </div>

      {/* Mobile Menu (Slide in from left) */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="w-64 bg-white h-full shadow-lg px-6 py-4">
          {/* Close Button */}
          <button
            className="text-gray-600 mb-4 focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Close Icon */}
            <AiOutlineClose className="w-8 h-8" />
          </button>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-green-600">
              Catalog
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              How it works
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Blog
            </a>
            <button className="bg-white text-green-600 border border-gray-200 px-4 py-2 rounded hover:bg-gray-100">
              Log in
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
