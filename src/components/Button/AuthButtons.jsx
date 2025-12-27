"use client";
import { LogOutIcon, UserPlus, UserRoundCheck } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
const AuthButtons = () => {
  const session = useSession();
  console.log("This is Navbar", session.data?.user?.image);
  console.log(session);

  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-primary/30 shadow-md">
              <img
                src={session?.data?.user?.image || ""} // fallback image দাও
                className="w-full h-full object-cover"
                // অথবা যদি session null হয় তাহলে placeholder
              />
            </div>
            <button
              type="button"
              onClick={() => signOut()}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-secondary text-white text-lg font-medium md:text-md  rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <LogOutIcon className="w-4 h-4" />
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-5 md:flex-row md:gap-3 mt-4 md:mt-0">
          {" "}
          {/* hover:bg-gradient-to-r hover:from-primary  hover:to-secondary hover:text-white */}
          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2  outline  text-primary 
            font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <UserRoundCheck className="w-5 h-5" />
            Login
          </Link>
          {/* Register Button */}
          <Link
            href="/register"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 outline focus:ring-primary/50"
          >
            <UserPlus className="w-5 h-5" />
            Register
          </Link>{" "}
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
