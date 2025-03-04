"use client";

import React, { useState } from "react";
import { Sun, Moon, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Next.js navigation
import { FaRupeeSign } from "react-icons/fa"; // Finance icon

type NavbarProps = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter(); // Navigation hook

  const handleCalculatorClick = () => {
    router.push("/financial-calculators"); // Navigate to the calculators page
    setDropdownOpen(!dropdownOpen); // Open dropdown after navigation
  };

  return (
    <nav className={`flex font-mono justify-between items-center p-6 z-10 relative`}>
      {/* Logo Section */}
      <div className={`text-2xl flex gap-3 font-bold ${isDark ? "text-white" : "text-black"}`}>
        <FaRupeeSign className="w-10 h-10 text-red-500" />
        NariInvest
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 relative">
        <Link href="/financial-quiz" className={`${isDark ? "text-white" : "text-black"} font-semibold hover:text-red-500`}>
          Financial quiz
        </Link>
        <Link href="/learn" className={`${isDark ? "text-white" : "text-black"} font-semibold hover:text-red-500`}>
          Learn
        </Link>

        {/* Financial Calculators Dropdown */}
        <div className="relative">
          <button
            onClick={handleCalculatorClick} // Click opens the page & dropdown
            className={`${isDark ? "text-white" : "text-black"} font-semibold flex items-center gap-2 hover:text-red-500`}
          >
            Financial Calculators <ChevronDown className="w-4 h-4" />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200">
              <Link href="/sip-calculator" className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white">
                📈 SIP Calculator
              </Link>
              <Link href="/emi-calculator" className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white">
                💳 EMI Calculator
              </Link>
              <Link href="/budget-planner" className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white">
                💰 Budget Planner
              </Link>
            </div>
          )}
        </div>

        <Link href="/signup" className={`${isDark ? "text-white" : "text-black"} font-semibold hover:text-red-500`}>
          Signup
        </Link>
        <Link href="/signin" className={`${isDark ? "text-white" : "text-black"} font-semibold hover:text-red-500`}>
          Login
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-lg bg-gray-50 hover:bg-gray-200"
        >
          {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-black" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
