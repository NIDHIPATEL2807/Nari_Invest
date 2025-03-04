"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCalculator, FaPiggyBank, FaGraduationCap, FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "@/components/Landing/Navbar";

const FinancialCalculators = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100); // Delay to trigger fade-in effect
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white ${fadeIn ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
      {/* Navbar */}
      <Navbar isDark={true} setIsDark={() => {}} />

      {/* Page Content */}
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16 text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4 flex items-center justify-center gap-3 animate-fade-in">
          <FaCalculator className="w-8 h-8" /> NariInvest Financial Calculators
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in">
          Your Financial Planning Made Smarter
        </p>

        {/* Calculator Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* SIP Calculator */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-red-500 transition-transform transform hover:-translate-y-2 animate-fade-in">
            <FaChartLine className="text-red-400 text-4xl mb-3 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold text-red-400">📈 SIP Calculator</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base">Plan your Systematic Investment to grow wealth efficiently.</p>
            <Link href="/sip-calculator">
              <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Calculate
              </button>
            </Link>
          </div>

          {/* EMI Calculator */}
          <div className="p-6 bg-gradient-to-r from-black to-red-950 rounded-lg shadow-lg hover:shadow-red-500 transition-transform transform hover:-translate-y-2 animate-fade-in">
            <FaMoneyBillWave className="text-red-400 text-4xl mb-3 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold text-red-400">💳 EMI Calculator</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base">Calculate your monthly loan installments with ease.</p>
            <Link href="/emi-calculator">
              <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Calculate
              </button>
            </Link>
          </div>

          {/* Sukanya Samriddhi Yojana Calculator */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-red-500 transition-transform transform hover:-translate-y-2 animate-fade-in">
            <FaPiggyBank className="text-red-400 text-4xl mb-3 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold text-red-400">👧 Sukanya Samriddhi Yojana</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base">Secure your daughter's future with smart savings.</p>
            <Link href="/sukanya-samriddhi-calculator">
              <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Calculate
              </button>
            </Link>
          </div>

          {/* Child Education Calculator */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-red-500 transition-transform transform hover:-translate-y-2 animate-fade-in">
            <FaGraduationCap className="text-red-400 text-4xl mb-3 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold text-red-400">🎓 Child Education Calculator</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base">Plan ahead for your child’s education expenses.</p>
            <Link href="/child-education-calculator">
              <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Calculate
              </button>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-900 rounded-lg shadow-lg text-left animate-fade-in">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Frequently Asked Questions (FAQs)</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">What is a financial calculator, and why do I need one?</h3>
            <p className="text-gray-300 mt-2">
              An online financial calculator is a digital tool that simplifies complex calculations for savings, investments, and loans. 
              It’s your secret weapon to smarter money management, giving you accurate insights in minutes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Can I use these financial calculators in India?</h3>
            <p className="text-gray-300 mt-2">
              Of course! NariInvest’s calculators are tailored to suit the unique financial landscape of India, making them perfect for your needs.
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default FinancialCalculators;
