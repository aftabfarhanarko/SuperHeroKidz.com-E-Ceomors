"use client";
import React, { useState, useEffect } from "react";
import {
  LogInIcon,
  LogOutIcon,
  Menu,
  UserPlus,
  UserRoundCheck,
  X,
} from "lucide-react";
import Logo from "./Logo";
import NavLink from "../Button/NavLink";
import Link from "next/link";
import AuthButtons from "../Button/AuthButtons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/producat"}>Producat</NavLink>
      </li>
      <li>
        <NavLink href={"/bloag"}>Bloag</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink href={"/book"}>Book</NavLink>
      </li>
    </>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-base-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className="   mx-auto
  max-w-11/12 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo></Logo>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className=" flex">{navLinks}</ul>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Shopping Cart */}
            <button className="relative group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* Cart Badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Login Button */}
            <div className="flex gap-4 items-center">
              <AuthButtons />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
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
          {/* <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
            Get Started
          </button> */}
          <div className="flex flex-col mb-5   items-left max-w-[140px]">
            <AuthButtons />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
