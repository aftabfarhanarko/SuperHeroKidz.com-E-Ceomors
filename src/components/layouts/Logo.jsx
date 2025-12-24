import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      {" "}
      <Link
        href="/"
        className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
        aria-label="Hero Kidz - Home"
      >
        <Image
          src="/assets/logo.png"
          alt="Hero Kidz Logo"
          width={60}
          height={60}
          className="object-contain"
          priority // Logo fast load er jonno priority dilam (navbar e thakle useful)
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-xl md:text-2xl tracking-tight">
            Hero <span className="text-primary">Kidz</span>
          </h1>
          {/* Optional tagline if you want */}
          {/* <p className="text-xs text-gray-600 -mt-1">Super Fun for Kids</p> */}
        </div>
      </Link>
    </>
  );
};

export default Logo;
