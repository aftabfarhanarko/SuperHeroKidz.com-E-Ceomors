"use client";
import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
} from "lucide-react";

// Login Component
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    if (loginErrors[name]) {
      setLoginErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleLoginSubmit = () => {
    const errors = {};

    if (!loginData.email.trim()) {
      errors.email = "ইমেইল আবশ্যক";
    } else if (!validateEmail(loginData.email)) {
      errors.email = "সঠিক ইমেইল লিখুন";
    }

    if (!loginData.password) {
      errors.password = "পাসওয়ার্ড আবশ্যক";
    } else if (loginData.password.length < 6) {
      errors.password = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে";
    }

    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }

    alert("লগইন সফল হয়েছে!");
    console.log("Login Data:", loginData);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full mb-4">
          <LogIn className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          আপনার অ্যাকাউন্টে লগইন করুন
        </h2>
        <p className="text-gray-500">আপনার তথ্য দিয়ে লগইন করুন</p>
      </div>

      <div className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ইমেইল ঠিকানা *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="আপনার ইমেইল লিখুন"
            />
          </div>
          {loginErrors.email && (
            <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{loginErrors.email}</span>
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
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
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
          {loginErrors.password && (
            <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{loginErrors.password}</span>
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

        {/* Submit Button */}
        <button
          onClick={handleLoginSubmit}
          className="w-full bg-gradient-to-r from-orange-400 to-amber-400 text-white font-bold py-4 rounded-xl hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
        >
          <LogIn className="w-5 h-5" />
          লগইন করুন
        </button>
      </div>
    </div>
  );
};

export default LoginForm;