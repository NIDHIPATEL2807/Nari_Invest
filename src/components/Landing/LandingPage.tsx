import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import BackgroundDots from "./BackgroundDots"; // Background with animated dots
import Navbar from "./Navbar"; // Navbar for dark mode toggle
import TextRotate from "./TextRotate"; // Rotating text animation
import Link from "next/link";

const LandingPage = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen relative flex flex-col items-center justify-center ${isDark ? "bg-black" : "bg-white"}`}>
      
      {/* Background with animated dots */}
      <BackgroundDots
        dotSize={1.5}
        dotColor={isDark ? "#ff0033" : "#ff0033"}
        backgroundColor={isDark ? "#000" : "#fff"}
        gap={20}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Navbar Fixed at Top */}
      <div className="absolute top-0 left-0 w-full border-b-slate-700 shadow-md z-20">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-14 py-32 font-mono z-10 text-center mt-24 relative">
        <h1 className={`${isDark ? "text-white" : "text-black"} mb-7 font-mono text-5xl font-extrabold leading-tight tracking-wide`}>
          Empowering Women with  
          <br />  
          <span className="text-red-500 text-6xl font-sans font-semibold"> <TextRotate /> </span>
        </h1>

        <p className={`m-9 mt-10 px-14 text-xl ${isDark ? "text-gray-400" : "text-gray-700"}`}>
          Take control of your financial future. Track your expenses, set savings goals, and make smart investments—all in one place.
        </p>
         
         <Link href="/dashboard">
        <button className="mt-4 px-8 py-3 text-lg font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30">
          Start Your Journey
        </button>
        </Link>
<Link href="/financial-quiz">

<button className="mt-4 px-8 ml-11 py-3 text-lg font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30">
         Start Investment
        </button>
        
</Link>
        
      </main>

      {/* Key Features Section */}
      <div className="relative min-h-screen text-white flex flex-col items-center p-8">
        <BackgroundDots />
        <h2 className="text-4xl font-bold text-red-500 mb-8">Key Features</h2>
        
        <div className="grid grid-cols-2 gap-6 max-w-4xl w-full">
          <div className="p-6 bg-black rounded-lg shadow-xl hover:shadow-red-500 transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-red-400">📊 Budget & Expense Tracker</h3>
            <p className="mt-2 text-gray-300">Easily track your daily expenses and categorize them. Stay in control of your spending with visual breakdowns.</p>
          </div>

          <div className="p-6 bg-black rounded-lg shadow-xl hover:shadow-red-500 transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-red-400">🎯 Goal-Based Savings</h3>
            <p className="mt-2 text-gray-300">Set financial goals like "Daughter’s Education" or "Business Startup" and monitor your progress with reminders.</p>
          </div>

          <div className="p-6 bg-black rounded-lg shadow-xl hover:shadow-red-500 transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-red-400">📈 SIP & EMI Calculator</h3>
            <p className="mt-2 text-gray-300">Use simple calculators to plan investments, understand EMI payments, and make informed financial decisions.</p>
          </div>

          <div className="p-6 bg-black rounded-lg shadow-xl hover:shadow-red-500 transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-red-400">💰 Investment Portfolio</h3>
            <p className="mt-2 text-gray-300">Keep track of your mutual funds, fixed deposits, and other savings in an easy-to-understand interface.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
