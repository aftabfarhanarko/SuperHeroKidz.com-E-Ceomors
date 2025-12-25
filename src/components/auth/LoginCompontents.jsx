"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  UserPlus,
} from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

const LoginCompontents = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginUser = async (data) => {
    const result = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    console.log("লগইন ডাটা:", result);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            আপনার অ্যাকাউন্টে লগইন করুন
          </h2>
          <p className="text-gray-500">আপনার তথ্য দিয়ে লগইন করুন</p>
        </div>

        {/* handleSubmit(loginUser) — এটাই সঠিক উপায় */}
        <form onSubmit={handleSubmit(loginUser)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ইমেইল ঠিকানা *
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                {...register("email", {
                  required: "ইমেইল ঠিকানা আবশ্যক",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "সঠিক ইমেইল ঠিকানা লিখুন",
                  },
                })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                placeholder="আপনার ইমেইল লিখুন"
              />
            </div>
            {errors.email && (
              <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email.message || "সঠিক ইমেইল লিখুন"}</span>
              </div>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              পাসওয়ার্ড *
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "পাসওয়ার্ড আবশ্যক",
                  minLength: {
                    value: 6,
                    message: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে",
                  },
                })}
                className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                placeholder="আপনার পাসওয়ার্ড লিখুন"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.password.message}</span>
              </div>
            )}
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-orange-400 focus:ring-orange-400"
              />
              <span className="text-gray-600">মনে রাখুন</span>
            </label>
            <a
              href="#"
              className="text-orange-400 hover:text-orange-500 font-semibold"
            >
              পাসওয়ার্ড ভুলে গেছেন?
            </a>
          </div>

          {/* Submit Button - Enhanced Primary */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-amber-600 transform hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <UserPlus className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <span className="tracking-wide"> লগইন করুন</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm font-medium text-gray-500 px-2">অথবা</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Google Button */}
          <button
            type="button"
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
          <button
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
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            এখনো রেজিস্টার করেননি?{" "}
            <Link
              href={"/register"}
              className="text-orange-400 font-semibold cursor-pointer hover:underline"
            >
              রেজিস্টার করুন
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginCompontents;
