"use client";

import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Phone,
  Upload,
  Eye,
  EyeOff,
  UserPlus,
  X,
  AlertCircle,
  MapPin,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

const RegisterCompontents = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const registerData = (data) => {
    console.log("রেজিস্টার ডাটা:", data);
    alert("রেজিস্ট্রেশন সফল হয়েছে!");
  };

  return (
    <div
      className={` flex min-h-screen justify-center items-center bg-gray-50 py-10`}
    >
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            নতুন অ্যাকাউন্ট তৈরি করুন
          </h2>
          <p className="text-gray-500">আপনার তথ্য দিয়ে রেজিস্টার করুন</p>
        </div>

        <form onSubmit={handleSubmit(registerData)} className="space-y-5">
          {/* Image Upload - Controller দিয়ে */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-4">
              প্রোফাইল ছবি <span className="text-red-500">*</span>
            </label>

            <Controller
              name="image"
              control={control}
              rules={{ required: "প্রোফাইল ছবি আবশ্যক" }}
              render={({ field }) => (
                <div className="flex flex-col items-center gap-6">
                  <div className="relative group">
                    {previewImage ? (
                      <>
                        <img
                          src={previewImage}
                          alt="Profile Preview"
                          className="w-26 h-26 rounded-full object-cover shadow-xl border-4 border-orange-400 transition-all duration-300 group-hover:border-orange-500"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewImage(null);
                            field.onChange(null);
                          }}
                          className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-200"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <div className="w-26 h-26  rounded-full bg-gradient-to-br from-orange-100 to-orange-200 border-4 border-dashed border-orange-300 flex items-center justify-center shadow-lg hover:border-orange-400 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                        <Upload className="w-12 h-12 text-orange-500" />
                      </div>
                    )}
                  </div>

                  <label className="cursor-pointer">
                    <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      {previewImage ? "ছবি পরিবর্তন করুন" : "আপলোড করুন"}
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          if (file.size > 2 * 1024 * 1024) {
                            alert("ছবির সাইজ ২ MB এর কম হতে হবে");
                            return;
                          }
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setPreviewImage(reader.result);
                            field.onChange(file);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>

                  <p className="text-sm text-gray-500 text-center">
                    সর্বোচ্চ ২ MB। JPG, PNG ফরম্যাট সমর্থিত।
                  </p>
                </div>
              )}
            />

            {errors.image && (
              <div className="flex items-center gap-2 mt-4 text-red-600 text-sm bg-red-50 px-4 py-2 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span>{errors.image.message}</span>
              </div>
            )}
          </div>

          {/* Name Field - আইকন সহ */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              পূর্ণ নাম *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                {...register("name", {
                  required: "নাম আবশ্যক",
                  minLength: {
                    value: 3,
                    message: "নাম কমপক্ষে ৩ অক্ষরের হতে হবে",
                  },
                })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                placeholder="আপনার নাম লিখুন"
              />
            </div>
            {errors.name && (
              <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.name.message}</span>
              </div>
            )}
          </div>

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
                  required: "ইমেইল আবশ্যক",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "সঠিক ইমেইল লিখুন",
                  },
                })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                placeholder="আপনার ইমেইল লিখুন"
              />
            </div>
            {errors.email && (
              <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email.message}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ঠিকানা *
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                {...register("address", {
                  required: "ঠিকানা আবশ্যক",
                })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                placeholder="আপনার ঠিকানা লিখুন"
              />
            </div>
            {errors.address && (
              <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.address.message}</span>
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ফোন নম্বর *
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                {...register("phone", {
                  required: "ফোন নম্বর আবশ্যক",
                  pattern: {
                    message: "সঠিক ফোন নম্বর লিখুন (যেমন: 01712345678)",
                  },
                })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                placeholder="01712345678"
              />
            </div>
            {errors.phone && (
              <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.phone.message}</span>
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

          {/* Submit Button - Enhanced Primary */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-amber-600 transform hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <UserPlus className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <span className="tracking-wide">রেজিস্টার করুন</span>
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
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="tracking-wide">Google দিয়ে রেজিস্টার করুন</span>
          </button>

          {/* GitHub Button */}
          <button
            type="button"
            className="w-full mt-4 flex items-center justify-center gap-4 bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-6 h-6 invert brightness-0"
            />
            <span className="tracking-wide">GitHub দিয়ে রেজিস্টার করুন</span>
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
            <Link
              href={"/login"}
              className="text-orange-400 font-semibold cursor-pointer hover:underline"
            >
              লগইন করুন
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};


export default RegisterCompontents;