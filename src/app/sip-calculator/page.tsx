"use client";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Navbar from "@/components/Landing/Navbar";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SIPCalculator = () => {
  // State variables
  const [investment, setInvestment] = useState(15000);
  const [timePeriod, setTimePeriod] = useState(10);
  const [rate, setRate] = useState(12);
  const [isYears, setIsYears] = useState(true);

  // Calculations
  const totalInvested = isYears ? investment * timePeriod * 12 : investment * timePeriod;
  const monthlyRate = rate / 12 / 100;
  const months = isYears ? timePeriod * 12 : timePeriod;
  const futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const estimatedReturns = futureValue - totalInvested;

  // Chart Data
  const chartData = {
    labels: ["Invested Amount", "Estimated Returns"],
    datasets: [
      {
        data: [totalInvested, estimatedReturns],
        backgroundColor: ["#ECE852", "#FB4141"], // Dark & Light Red
        borderWidth: 0,
      },
    ],
  };


  const SIPInfo = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto mt-10">
        {/* Product Comparison Section */}
        


        <h2 className="text-3xl font-bold text-red-600 text-center">Product Comparison</h2>
  
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold text-gray-800">Savings Account Interest Rate:</p>
          <p className="text-xl font-bold text-red-600">3%</p>
        </div>
  
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold text-gray-800">Average FD Interest Rates:</p>
          <ul className="text-gray-700 mt-2">
            <li><span className="font-bold">Less than 1 year:</span> 5.75%</li>
            <li><span className="font-bold">1 - 3 years:</span> 6.98%</li>
            <li><span className="font-bold">3+ years:</span> 6.91%</li>
          </ul>
        </div>
  
        {/* SIP Explanation Section */}
        <h2 className="text-3xl font-bold text-red-600 text-center mt-10">Discover the Power of Compounding with Our SIP Calculator</h2>
        <p className="text-gray-700 text-center mt-2">
          Embarking on the journey of financial planning and investment can seem daunting, but with our Systematic Investment Plan (SIP) Calculator, 
          we’ve made it simpler and more accessible than ever. Whether you’re new to investing or a seasoned investor, our SIP Calculator Online 
          offers a user-friendly interface to forecast your investment growth.
        </p>
  
        {/* Why Choose Our SIP Calculator */}
        <h3 className="text-2xl font-bold text-red-600 mt-6">Why Choose Our SIP Calculator?</h3>
        <p className="text-gray-700 mt-2">
          Our Mutual Fund SIP Calculator is not just a tool; it’s your personal finance planner that allows you to visualize potential returns on your 
          investments. The power of compounding works in your favor, and our calculator showcases how your wealth can grow over time.
        </p>
  
        {/* Benefits Section */}
        <h3 className="text-2xl font-bold text-red-600 mt-6">Benefits of Using Our SIP Calculator</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li><span className="font-semibold">Forecast and Plan:</span> Easily forecast the future value of your investments.</li>
          <li><span className="font-semibold">Simplicity:</span> Our SIP Calculator breaks down financial planning into an easy-to-understand format.</li>
          <li><span className="font-semibold">Customization:</span> Choose between monthly, quarterly, or yearly SIP calculations.</li>
        </ul>
  
        {/* How It Helps */}
        <h3 className="text-2xl font-bold text-red-600 mt-6">How Can Our SIP Calculator Help You?</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li><span className="font-semibold">Set Realistic Goals:</span> Use our calculator to set achievable financial goals.</li>
          <li><span className="font-semibold">Informed Decisions:</span> Understand how much to invest to reach your financial targets.</li>
          <li><span className="font-semibold">Ease of Use:</span> Adjust values and instantly see your potential investment returns.</li>
        </ul>
      </div>
    );
  };
  

  
  return (
    <>
    <Navbar isDark={false} setIsDark={() => {}}  />
    <div className="min-h-screen flex flex-col items-center bg-white p-6">
      {/* Header */}
      
      <h1 className="text-4xl font-bold text-red-600 text-center">NariInvest Financial Calculators</h1>
      <p className="text-center text-gray-600 mt-2">Your Financial Planning Made Smarter</p>

      {/* Container */}
      <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl mt-10">
        {/* Left Side - Inputs */}
        <div className="w-full lg:w-1/2 p-5">
          <h2 className="text-3xl font-bold text-red-600">SIP Calculator</h2>
          <p className="text-gray-800 mt-2 bg-yellow-100 p-2 ">SIPing is not just for beverages – it's for building financial empires too! 💰</p>

          {/* Investment Amount */}
          <div className="mt-6">
            <label className="font-semibold">What is your monthly investment amount?</label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full p-2 mt-2 border rounded-md text-right text-lg font-semibold"
            />
            <input type="range" min="100" max="1000000" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full mt-2 accent-red-600" />
          </div>

          {/* Time Period */}
          <div className="mt-6">
            <label className="font-semibold">What is the time period?</label>
            <div className="flex items-center mt-2">
              <button onClick={() => setIsYears(true)} className={`px-4 py-2 ${isYears ? "bg-yellow-400 text-black" : "bg-gray-200"} rounded-l-lg`}>
                Years
              </button>
              <button onClick={() => setIsYears(false)} className={`px-4 py-2 ${!isYears ? "bg-yellow-400 text-black" : "bg-gray-200"} rounded-r-lg`}>
                Months
              </button>
            </div>
            <input type="number" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} className="w-full p-2 mt-2 border rounded-md text-right text-lg font-semibold" />
            <input type="range" min="1" max="50" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} className="w-full mt-2 accent-red-600" />
          </div>

          {/* Rate of Return */}
          <div className="mt-6">
            <label className="font-semibold">Expected rate of return</label>
            <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full p-2 mt-2 border rounded-md text-right text-lg font-semibold" />
            <input type="range" min="1" max="30" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full mt-2 accent-red-600" />
          </div>
        </div>

        {/* Right Side - Chart & Results */}
        <div className="w-full lg:w-1/2 flex flex-col items-center p-5">
          <h3 className="text-2xl font-bold text-red-600">Total Value</h3>
          <p className="text-4xl font-bold text-black mt-2">₹ {futureValue.toLocaleString()}</p>

          {/* Chart */}
          <div className="w-64 h-64">
            <Doughnut data={chartData} options={{ cutout: "70%" }} />
          </div>

          {/* Breakdown */}
          <div className="mt-4 w-full">
            <div className="flex justify-between p-2 border rounded-md">
              <span className="text-gray-600">Invested Amount</span>
              <span className="text-red-600 font-bold">₹ {totalInvested.toLocaleString()}</span>
            </div>
            <div className="flex justify-between p-2 border rounded-md mt-2">
              <span className="text-gray-600">Estimated Returns</span>
              <span className="text-red-500 font-bold">₹ {estimatedReturns.toLocaleString()}</span>
            </div>
          </div>

          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-bold hover:bg-red-700">Invest Now</button>
        </div>
      </div>
 
      <SIPInfo/>
   
    </div>
    </>
  );
};

export default SIPCalculator;
