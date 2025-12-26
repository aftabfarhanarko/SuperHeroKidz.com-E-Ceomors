"use client";
import { LogOutIcon, UserPlus, UserRoundCheck } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
const AuthButtons = () => {
  const session = useSession();
  console.log(session);

  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          {" "}
          <button
            type="button"
            onClick={() => signOut()}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r  from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            <LogOutIcon className="w-5 h-5" />
            Logout
          </button>{" "}
        </>
      ) : (
        <div className="flex flex-col gap-5 md:flex-row md:gap-3 mt-4 md:mt-0">
          {" "}
          {/* hover:bg-gradient-to-r hover:from-primary  hover:to-secondary hover:text-white */}
          <Link
            href="/login"
            className="flex items-center gap-2 px-6 py-2.5  outline  text-primary 
            font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            <UserRoundCheck className="w-5 h-5" />
            Login
          </Link>
          {/* Register Button */}
          <Link
            href="/register"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-primary/50"
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
