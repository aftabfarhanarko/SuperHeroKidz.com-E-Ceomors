"use client"
import { LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import LoginForm from "./Login";
import RegisterForm from "./Register";

// Main App Component
const AuthForms = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Tab Switcher */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveForm("login")}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
              activeForm === "login"
                ? "bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-2xl scale-105"
                : "bg-white text-gray-600 hover:shadow-lg"
            }`}
          >
            <LogIn className="w-5 h-5" />
            লগইন
          </button>
          <button
            onClick={() => setActiveForm("register")}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
              activeForm === "register"
                ? "bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-2xl scale-105"
                : "bg-white text-gray-600 hover:shadow-lg"
            }`}
          >
            <UserPlus className="w-5 h-5" />
            রেজিস্টার
          </button>
        </div>

        {/* Forms */}
        {activeForm === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthForms;
