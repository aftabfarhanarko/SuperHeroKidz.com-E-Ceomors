
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
} from "lucide-react";


// Register Component

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    image: null,
  });
  const [registerErrors, setRegisterErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^(\+880|0)[1-9]\d{9}$/;
    return re.test(phone);
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
    if (registerErrors[name]) {
      setRegisterErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setRegisterErrors((prev) => ({
          ...prev,
          image: "ছবির সাইজ ২ MB এর কম হতে হবে",
        }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setRegisterData((prev) => ({ ...prev, image: file }));
        setRegisterErrors((prev) => ({ ...prev, image: "" }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPreviewImage(null);
    setRegisterData((prev) => ({ ...prev, image: null }));
  };

  const handleRegisterSubmit = () => {
    const errors = {};

    if (!registerData.name.trim()) {
      errors.name = "নাম আবশ্যক";
    } else if (registerData.name.trim().length < 3) {
      errors.name = "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
    }

    if (!registerData.email.trim()) {
      errors.email = "ইমেইল আবশ্যক";
    } else if (!validateEmail(registerData.email)) {
      errors.email = "সঠিক ইমেইল লিখুন";
    }

    if (!registerData.phone.trim()) {
      errors.phone = "ফোন নম্বর আবশ্যক";
    } else if (!validatePhone(registerData.phone)) {
      errors.phone = "সঠিক ফোন নম্বর লিখুন (যেমন: 01712345678)";
    }

    if (!registerData.password) {
      errors.password = "পাসওয়ার্ড আবশ্যক";
    } else if (registerData.password.length < 6) {
      errors.password = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে";
    }

    if (!registerData.confirmPassword) {
      errors.confirmPassword = "পাসওয়ার্ড নিশ্চিত করুন";
    } else if (registerData.password !== registerData.confirmPassword) {
      errors.confirmPassword = "পাসওয়ার্ড মিলছে না";
    }

    if (!registerData.image) {
      errors.image = "প্রোফাইল ছবি আবশ্যক";
    }

    if (Object.keys(errors).length > 0) {
      setRegisterErrors(errors);
      return;
    }

    alert("রেজিস্ট্রেশন সফল হয়েছে!");
    console.log("Register Data:", registerData);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full mb-4">
          <UserPlus className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          নতুন অ্যাকাউন্ট তৈরি করুন
        </h2>
        <p className="text-gray-500">আপনার তথ্য দিয়ে রেজিস্টার করুন</p>
      </div>

      <div className="space-y-5">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            প্রোফাইল ছবি *
          </label>
          <div className="flex items-center gap-4">
            {previewImage ? (
              <div className="relative">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-20 h-20 rounded-full object-cover border-4 border-orange-200"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-orange-400 transition-colors bg-gray-50">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Upload className="w-6 h-6 text-gray-400" />
              </label>
            )}
            <label className="flex-1 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-center text-sm font-medium">
                আপলোড
              </div>
            </label>
          </div>
          {registerErrors.image && (
            <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{registerErrors.image}</span>
            </div>
          )}
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            পূর্ণ নাম *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={registerData.name}
              onChange={handleRegisterChange}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="আপনার নাম লিখুন"
            />
          </div>
          {registerErrors.name && (
            <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{registerErrors.name}</span>
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
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="আপনার ইমেইল লিখুন"
            />
          </div>
          {registerErrors.email && (
            <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{registerErrors.email}</span>
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
              name="phone"
              value={registerData.phone}
              onChange={handleRegisterChange}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="01712345678"
            />
          </div>
          {registerErrors.phone && (
            <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{registerErrors.phone}</span>
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
              value={registerData.password}
              onChange={handleRegisterChange}
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
          {registerErrors.password && (
            <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{registerErrors.password}</span>
            </div>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            পাসওয়ার্ড নিশ্চিত করুন *
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
              className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="পাসওয়ার্ড আবার লিখুন"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {registerErrors.confirmPassword && (
            <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{registerErrors.confirmPassword}</span>
            </div>
          )}
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 mt-1 rounded border-gray-300 text-orange-400 focus:ring-orange-400"
          />
          <span className="text-sm text-gray-600">
            আমি সকল শর্ত এবং নিয়মাবলী মেনে নিচ্ছি
          </span>
        </label>

        {/* Submit Button */}
        <button
          onClick={handleRegisterSubmit}
          className="w-full bg-gradient-to-r from-orange-400 to-amber-400 text-white font-bold py-4 rounded-xl hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
        >
          <UserPlus className="w-5 h-5" />
          রেজিস্টার করুন
        </button>
      </div>
    </div>
  );
};


export default RegisterForm;