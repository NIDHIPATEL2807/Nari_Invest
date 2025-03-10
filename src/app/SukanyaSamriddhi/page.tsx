"use client"

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Navbar from "@/components/Landing/Navbar";


const SukanyaSamriddhi = () => {
  const [investment, setInvestment] = useState(10000);
  const [interestRate, setInterestRate] = useState(8.2); // Default, updated quarterly
  const [maturityPeriod, setMaturityPeriod] = useState(21);
  const [startYear, setStartYear] = useState(2024);
  const maturityYear = startYear + maturityPeriod;

  useEffect(() => {
    // Fetch latest interest rate from a reliable source (mocked for now)
    fetch("https://api.example.com/ssy-interest") // Replace with actual API
      .then((res) => res.json())
      .then((data) => setInterestRate(data.rate || 8.2))
      .catch(() => setInterestRate(8.2));
  }, []);

  // Compound Interest Formula: A = P * (1 + r/n)^(nt)
  const totalInvestment = investment * maturityPeriod;
  const estimatedInterest =
    totalInvestment * (Math.pow(1 + interestRate / 100, maturityPeriod) - 1);
  const maturityAmount = totalInvestment + estimatedInterest;

  const data = [
    { name: "Amount Invested", value: totalInvestment, color: "#C2185B" },
    { name: "Estimated Interest", value: estimatedInterest, color: "#FBC02D" },
  ];

  return (
    <>
     <Navbar isDark={false} setIsDark={function (value: boolean): void {
              throw new Error("Function not implemented.");
          } }/>
    <div className="max-w-4xl mx-auto p-6 mt-12 shadow-lg  bg-white rounded-lg  flex flex-col md:flex-row gap-6">
      {/* Left Panel */}
     
      <div className="w-full  md:w-1/2">
        <h2 className="text-xl font-semibold">Sukanya Samriddhi Yojana Calculator</h2>
        <p className="text-sm text-gray-600 mb-4">
          A secure future needs both stability and growth—pair your SSY savings with equity mutual funds to achieve both.
        </p>

        {/* Investment Input */}
        <label className="block text-sm font-medium text-gray-700">Yearly Investment Amount</label>
        <input
          type="range"
          min="250"
          max="150000"
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value))}
          className="w-full mt-2"
        />
        <div className="text-right text-lg font-semibold">₹ {investment.toLocaleString()}</div>

        {/* Start Year Input */}
        <label className="block text-sm font-medium text-gray-700 mt-4">Start Year</label>
        <input
          type="number"
          value={startYear}
          onChange={(e) => setStartYear(Number(e.target.value))}
          className="w-full p-2 border rounded mt-2"
        />

        {/* Maturity Period Input */}
        <label className="block text-sm font-medium text-gray-700 mt-4">Maturity Period (Years)</label>
        <input
          type="number"
          value={maturityPeriod}
          onChange={(e) => setMaturityPeriod(Number(e.target.value))}
          className="w-full p-2 border rounded mt-2"
        />

        {/* Other Details */}
        <div className="mt-4">
          <p><strong>Rate of Interest:</strong> {interestRate}%</p>
          <p><strong>Maturity Period:</strong> {maturityPeriod} Years</p>
          <p><strong>Start Year:</strong> {startYear}</p>
          <p><strong>Maturity Year:</strong> {maturityYear}</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-2xl font-bold">Maturity Amount</h2>
        <p className="text-3xl font-extrabold text-gray-800">₹ {maturityAmount.toLocaleString()}</p>

        {/* Pie Chart */}
        <PieChart width={250} height={250} className="mx-auto">
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Investment Details */}
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-700">Amount Invested: <span className="text-pink-600">₹ {totalInvestment.toLocaleString()}</span></p>
          <p className="text-lg font-semibold text-gray-700">Estimated Interest: <span className="text-yellow-600">₹ {estimatedInterest.toLocaleString()}</span></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SukanyaSamriddhi;
