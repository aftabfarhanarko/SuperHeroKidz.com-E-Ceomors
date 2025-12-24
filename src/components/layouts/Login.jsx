import React, { useState } from 'react';
import { Mail, Lock, User, Phone, Upload, Eye, EyeOff, LogIn, UserPlus, AlertCircle, CheckCircle, X } from 'lucide-react';

const AuthForms = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  // Login Form State
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState({});

  // Register Form State
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    image: null
  });
  const [registerErrors, setRegisterErrors] = useState({});

  // Validation Functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^(\+880|0)[1-9]\d{9}$/;
    return re.test(phone);
  };

  // Login Form Handlers
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    if (loginErrors[name]) {
      setLoginErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleLoginSubmit = () => {
    const errors = {};

    if (!loginData.email.trim()) {
      errors.email = 'ইমেইল আবশ্যক';
    } else if (!validateEmail(loginData.email)) {
      errors.email = 'সঠিক ইমেইল লিখুন';
    }

    if (!loginData.password) {
      errors.password = 'পাসওয়ার্ড আবশ্যক';
    } else if (loginData.password.length < 6) {
      errors.password = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে';
    }

    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }

    // Success
    alert('লগইন সফল হয়েছে!');
    console.log('Login Data:', loginData);
  };

  // Register Form Handlers
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
    if (registerErrors[name]) {
      setRegisterErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setRegisterErrors(prev => ({ ...prev, image: 'ছবির সাইজ ২ MB এর কম হতে হবে' }));
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setRegisterData(prev => ({ ...prev, image: file }));
        setRegisterErrors(prev => ({ ...prev, image: '' }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPreviewImage(null);
    setRegisterData(prev => ({ ...prev, image: null }));
  };

  const handleRegisterSubmit = () => {
    const errors = {};

    if (!registerData.name.trim()) {
      errors.name = 'নাম আবশ্যক';
    } else if (registerData.name.trim().length < 3) {
      errors.name = 'নাম কমপক্ষে ৩ অক্ষরের হতে হবে';
    }

    if (!registerData.email.trim()) {
      errors.email = 'ইমেইল আবশ্যক';
    } else if (!validateEmail(registerData.email)) {
      errors.email = 'সঠিক ইমেইল লিখুন';
    }

    if (!registerData.phone.trim()) {
      errors.phone = 'ফোন নম্বর আবশ্যক';
    } else if (!validatePhone(registerData.phone)) {
      errors.phone = 'সঠিক ফোন নম্বর লিখুন (যেমন: 01712345678)';
    }

    if (!registerData.password) {
      errors.password = 'পাসওয়ার্ড আবশ্যক';
    } else if (registerData.password.length < 6) {
      errors.password = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে';
    }

    if (!registerData.confirmPassword) {
      errors.confirmPassword = 'পাসওয়ার্ড নিশ্চিত করুন';
    } else if (registerData.password !== registerData.confirmPassword) {
      errors.confirmPassword = 'পাসওয়ার্ড মিলছে না';
    }

    if (!registerData.image) {
      errors.image = 'প্রোফাইল ছবি আবশ্যক';
    }

    if (Object.keys(errors).length > 0) {
      setRegisterErrors(errors);
      return;
    }

    // Success
    alert('রেজিস্ট্রেশন সফল হয়েছে!');
    console.log('Register Data:', registerData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full">
        {/* Tab Switcher */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveForm('login')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
              activeForm === 'login'
                ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-2xl scale-105'
                : 'bg-white text-gray-600 hover:shadow-lg'
            }`}
          >
            <LogIn className="w-6 h-6" />
            <span className={`${fontBangla.className}`}>লগইন</span>
          </button>
          <button
            onClick={() => setActiveForm('register')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
              activeForm === 'register'
                ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-2xl scale-105'
                : 'bg-white text-gray-600 hover:shadow-lg'
            }`}
          >
            <UserPlus className="w-6 h-6" />
            <span className={`${fontBangla.className}`}>রেজিস্টার</span>
          </button>
        </div>

        {/* Login Form */}
        {activeForm === 'login' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md mx-auto animate-fadeIn">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-10 h-10 text-white" />
              </div>
              <h2 className={`text-3xl font-bold text-gray-800 ${fontBangla.className}`}>
                আপনার অ্যাকাউন্টে লগইন করুন
              </h2>
              <p className={`text-gray-600 mt-2 ${fontBangla.className}`}>
                আপনার তথ্য দিয়ে লগইন করুন
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label className={`block text-gray-700 font-semibold mb-2 ${fontBangla.className}`}>
                  ইমেইল ঠিকানা *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all ${
                      loginErrors.email ? 'border-red-400' : 'border-orange-200 focus:border-orange-400'
                    }`}
                    placeholder="example@email.com"
                  />
                </div>
                {loginErrors.email && (
                  <div className="flex items-center gap-2 mt-2 text-red-500">
                    <AlertCircle className="w-4 h-4" />
                    <span className={`text-sm ${fontBangla.className}`}>{loginErrors.email}</span>
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className={`block text-gray-700 font-semibold mb-2 ${fontBangla.className}`}>
                  পাসওয়ার্ড *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all ${
                      loginErrors.password ? 'border-red-400' : 'border-orange-200 focus:border-orange-400'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {loginErrors.password && (
                  <div className="flex items-center gap-2 mt-2 text-red-500">
                    <AlertCircle className="w-4 h-4" />
                    <span className={`text-sm ${fontBangla.className}`}>{loginErrors.password}</span>
                  </div>
                )}
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-orange-400" />
                  <span className={`text-gray-600 text-sm ${fontBangla.className}`}>মনে রাখুন</span>
                </label>
                <a href="#" className={`text-orange-400 hover:text-orange-500 text-sm font-semibold ${fontBangla.className}`}>
                  পাসওয়ার্ড ভুলে গেছেন?
                </a>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleLoginSubmit}
                className="w-full bg-gradient-to-r from-orange-400 to-amber-400 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <LogIn className="w-6 h-6" />
                <span className={`${fontBangla.className}`}>লগইন করুন</span>
              </button>

              {/* Register Link */}
              <p className={`text-center text-gray-600 ${fontBangla.className}`}>
                অ্যাকাউন্ট নেই?{' '}
                <button
                  onClick={() => setActiveForm('register')}
                  className="text-orange-400 hover:text-orange-500 font-semibold"
                >
                  রেজিস্টার করুন
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Register Form */}
        {activeForm === 'register' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto animate-fadeIn">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <h2 className={`text-3xl font-bold text-gray-800 ${fontBangla.className}`}>
                নতুন অ্যাকাউন্ট তৈরি করুন
              </h2>
              <p className={`text-gray-600 mt-2 ${fontBangla.className}`}>
                আপনার তথ্য দিয়ে রেজিস্টার করুন
              </p>
            </div>

            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className={`block text-gray-700 font-semibold mb-2 ${fontBangla.className}`}>
                  প্রোফাইল ছবি *
                </label>
                <div className="flex flex-col items-center gap-4">
                  {previewImage ? (
                    <div className="relative">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-32 h-32 rounded-full object-cover border-4 border-orange-400"
                      />
                      <button
                        onClick={removeImage}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="w-32 h-32 border-4 border-dashed border-orange-300 rounded-full flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all">
                      <Upload className="w-8 h-8 text-orange-400 mb-2" />
                      <span className={`text-sm text-gray-600 ${fontBangla.className}`}>আপলোড</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                  {registerErrors.image && (
                    <div className="flex items-center gap-2 text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className={`text-sm ${fontBangla.className}`}>{registerErrors.image}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className={`block text-gray-700 font-semibold mb-2 ${fontBangla.className}`}>
                    পূর্ণ নাম *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                    <input
                      type="text"
                      name="name"
                      value={registerData.name}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all ${
                        registerErrors.name ? 'border-red-400' : 'border-orange-200 focus:border-orange-400'
                      }`}
                      placeholder="আপনার নাম"
                    />
                  </div>
                  {registerErrors.name && (
                    <div className="flex items-center gap-2 mt-2 text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className={`text-sm ${fontBangla.className}`}>{registerErrors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className={`block text-gray-700 font-semibold mb-2 ${fontBangla.className}`}>
                    ইমেইল ঠিকানা *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                    <input
                      type="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all ${
                        registerErrors.email ? 'border-red-400' : 'border-orange-200 focus:border-orange-400'
                      }`}
                      placeholder="example@email.com"
                    />
                  </div>
                  {registerErrors.email && (
                    <div className="flex items-center gap-2 mt-2 text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className={`text-sm ${fontBangla.className}`}>{registerErrors.email}</span>
                    </div>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className={`block text-gray-700 font-semibold mb-2 ${fontBangla.className}`}>
                    ফোন নম্বর *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={registerData.phone}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all ${
                        registerErrors.phone ? 'border-red-400' : 'border-orange-200 focus:border-orange-400'
                      }`}
                      placeholder="01712345678"
                    />
                  </div>
                  {registerErrors.phone && (
                    <div className="flex items-center gap-2 mt-2 text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className={`text-sm ${fontBangla.className}`}>{registerErrors.phone}</span>
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className={`block text-gray-700 font-semibold mb-2 ${fontBangla.className}`}>
                    পাসওয়ার্ড *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all ${
                        registerErrors.password ? 'border-red-400' : 'border-orange-200 focus:border-orange-400'
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {registerErrors.password && (
                    <div className="flex items-center gap-2 mt-2 text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className={`text-sm ${fontBangla.className}`}>{registerErrors.password}</span>
                    </div>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="md:col-span-2">
                  <label className={`block text-gray-700 font-semibold mb-2 ${fontBangla.className}`}>
                    পাসওয়ার্ড নিশ্চিত করুন *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all ${
                        registerErrors.confirmPassword ? 'border-red-400' : 'border-orange-200 focus:border-orange-400'
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {registerErrors.confirmPassword && (
                    <div className="flex items-center gap-2 mt-2 text-red-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className={`text-sm ${fontBangla.className}`}>{registerErrors.confirmPassword}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 mt-1 accent-orange-400" />
                <span className={`text-gray-600 text-sm ${fontBangla.className}`}>
                  আমি সকল শর্ত এবং নিয়মাবলী মেনে নিচ্ছি
                </span>
              </label>

              {/* Submit Button */}
              <button
                onClick={handleRegisterSubmit}
                className="w-full bg-gradient-to-r from-orange-400 to-amber-400 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <UserPlus className="w-6 h-6" />
                <span className={`${fontBangla.className}`}>রেজিস্টার করুন</span>
              </button>

              {/* Login Link */}
              <p className={`text-center text-gray-600 ${fontBangla.className}`}>
                ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
                <button
                  onClick={() => setActiveForm('login')}
                  className="text-orange-400 hover:text-orange-500 font-semibold"
                >
                  লগইন করুন
                </button>
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AuthForms;