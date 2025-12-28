"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";



const SocialButtons = () => {
  const params = useSearchParams();
  // console.log("This params", params.get("callbackUrl") || "");

  const handelGoogleLogin = async () => {
    const result = await signIn("google", {
    //   redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
    // console.log("This is Google Signin", result);
  };
  return (
    <div>
      {/* Google Button */}
      <button
        type="button"
        onClick={handelGoogleLogin}
        className="w-full flex items-center justify-center gap-4 bg-white border border-gray-200 py-4 rounded-xl font-semibold text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
      >
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          height={6}
          width={6}
          className="w-6 h-6"
        />
        <span className="tracking-wide"> Google দিয়ে লগইন করুন</span>
      </button>

      {/* GitHub Button */}
      {/* <button
        type="button"
        className="w-full mt-4 flex items-center justify-center gap-4 bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
      >
        <Image
          height={6}
          width={6}
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          alt="GitHub"
          className="w-6 h-6 invert brightness-0"
        />
        <span className="tracking-wide">GitHub দিয়ে লগইন করুন</span>
      </button> */}
    </div>
  );
};

export default SocialButtons;
