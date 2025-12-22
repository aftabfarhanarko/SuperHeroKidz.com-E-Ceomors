"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const MMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-lg shadow-lg">
          <ul className=" flex flex-col gap-5">{navLinks}</ul>
          <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default MMobileMenu;
