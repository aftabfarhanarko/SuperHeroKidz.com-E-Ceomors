"use client";
import Link from "next/link";
// components/NavLink.js (অথবা যেখানে আছে)
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  // হোমের জন্য স্পেশাল চেক: শুধু যখন exact "/" তখনই active
  // অন্য সব লিঙ্কের জন্য startsWith কাজ করবে (যেমন /bloag/post ইত্যাদি)
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`px-5 py-2 font-semibold rounded-lg transition-all duration-300 ${
        isActive
          ? " text-primary  md:bg-gradient-to-r md:from-orange-400 md:to-pink-500 md:text-white "
          : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";
// import clsx from "clsx";

// const NavLink = ({
//   href,
//   children,
//   exact = false, // home page er jonno exact=true use korba
//   className = "",
//   ...props
// }) => {
//   const pathname = usePathname();

//   // Active check
//   const isActive = exact ? pathname === href : pathname.startsWith(href);

//   return (
//     <Link
//       href={href}
//       prefetch={true}
//       className={clsx(
//         // Base: sob link e common
//         "px-5 py-2 rounded-xl font-medium transition-all duration-300",

//         // Inactive state: fully plain (just text)
//         !isActive && "text-gray-600 hover:text-primary",

//         // Active state: valo lagbe – full highlight
//         isActive && [
//           "text-primary",
//           "bg-orange-50",
//           "shadow-md",
//           "ring-2 ring-orange-200 ring-inset",
//           "font-semibold",
//         ],

//         // Extra custom class jodi dite chao
//         className
//       )}
//       aria-current={isActive ? "page" : undefined}
//       {...props}
//     >
//       {children}
//     </Link>
//   );
// };

// export default NavLink;
// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// const NavLink = ({ href, children }) => {
//   const path = usePathname();
//   return (
//     <Link
//       className={`${
//         path.startsWith(href)
//           ? "px-4 py-2 font-semibold rounded-lg text-gray-700 hover:text-primary  transition-all duration-200 hover:bg-orange-50"
//           : " px-4 py-2 font-semibold rounded-lg text-gray-700 hover:text-primary  transition-all duration-200 hover:bg-orange-50"
//       }`}
//       href={href}
//     >
//       {children}
//     </Link>
//   );
// };

// export default NavLink;
