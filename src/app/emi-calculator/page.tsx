"use client";
import React, { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import Navbar from "@/components/Landing/Navbar";

// Register Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Define the TypeScript type for Amortization Data
type AmortizationEntry = {
  year: number;
  month: string;
  emi: string;
  interestPaid: string;
  principalPaid: string;
  outstanding: string;
};

const EMICalculator = () => {
  // State Variables
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(5);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [amortizationData, setAmortizationData] = useState<AmortizationEntry[]>([]);

  // Function to calculate EMI and Amortization Schedule
  const calculateEMI = () => {
    let monthlyRate = interestRate / 12 / 100;
    let months = loanTenure * 12;
    let emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    let totalPay = emi * months;
    let interestPay = totalPay - loanAmount;

    setMonthlyEMI(Math.round(emi));
    setTotalInterest(Math.round(interestPay));
    setTotalPayment(Math.round(totalPay));

    // Generate Amortization Data
    let outstanding = loanAmount;
    let schedule: AmortizationEntry[] = [];
    let currentYear = new Date().getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (let i = 0; i < months; i++) {
      let interestPaid = Math.round(outstanding * monthlyRate);
      let principalPaid = Math.round(emi - interestPaid);
      outstanding = Math.max(0, outstanding - principalPaid); // Ensure no negative values

      schedule.push({
        month: monthNames[i % 12],
        year: currentYear + Math.floor(i / 12),
        emi: emi.toFixed(0),
        interestPaid: interestPaid.toFixed(0),
        principalPaid: principalPaid.toFixed(0),
        outstanding: outstanding.toFixed(0),
      });

      if (i % 12 === 11) currentYear++; // Increment year after every 12 months
    }
    setAmortizationData(schedule);
  };

  // Recalculate EMI when values change
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  // Doughnut Chart Data
  const chartData = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#FEC111", "#ED147F"],
        borderWidth: 0,
      },
    ],
  };

  // Grouping Bar Charts for Each Year Separately
  const years = [...new Set(amortizationData.map((d) => d.year))];

  const getBarChartDataForYear = (year: number) => {
    const filteredData = amortizationData.filter((d) => d.year === year);
    const monthLabels = filteredData.map((d) => d.month);
    const principalData = filteredData.map((d) => Number(d.principalPaid));
    const interestData = filteredData.map((d) => Number(d.interestPaid));

    return {
      labels: monthLabels,
      datasets: [
        {
          label: "Interest Paid",
          backgroundColor: "#ED147F",
          data: interestData,
        },
        {
          label: "Principal Paid",
          backgroundColor: "#FEC111",
          data: principalData,
        },
      ],
    };
  };

  return (
    <>
      {/* Navbar */}
      <Navbar isDark={false} setIsDark={() => {}} />

      <div className="min-h-screen flex flex-col items-center bg-white p-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-red-600 text-center">NariInvest EMI Calculator</h1>
        <p className="text-center text-gray-600 mt-2">Your Loan Planning Made Smarter</p>

        {/* Loan Input & EMI Details - Side by Side */}
        <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl mt-10">
          {/* Loan Inputs */}
          <div className="w-full lg:w-1/2 p-5">
            <h2 className="text-3xl font-bold text-red-600">Loan Details</h2>
            <p className="text-gray-800 mt-2 bg-yellow-100 p-2">Plan your loan smartly! 💰</p>

            {[
              { label: "Loan Amount", value: loanAmount, setter: setLoanAmount, min: 10000, max: 5000000 },
              { label: "Interest Rate (%)", value: interestRate, setter: setInterestRate, min: 1, max: 30 },
              { label: "Loan Tenure (Years)", value: loanTenure, setter: setLoanTenure, min: 1, max: 30 },
            ].map((input, idx) => (
              <div key={idx} className="mt-6">
                <label className="font-semibold">{input.label}</label>
                <input
                  type="number"
                  value={input.value}
                  onChange={(e) => input.setter(Number(e.target.value))}
                  className="w-full p-2 mt-2 border rounded-md text-right text-lg font-semibold"
                />
                <input
                  type="range"
                  min={input.min}
                  max={input.max}
                  value={input.value}
                  onChange={(e) => input.setter(Number(e.target.value))}
                  className="w-full mt-2 accent-red-600"
                />
              </div>
            ))}
          </div>

          {/* EMI & Doughnut Chart */}
          <div className="w-full lg:w-1/2 flex flex-col items-center p-5">
            <h3 className="text-2xl font-bold text-red-600">Monthly EMI</h3>
            <div className="w-64 h-64">
              <Doughnut data={chartData} options={{ cutout: "70%" }} />
            </div>
            
            <p className="text-2xl font-bold text-black mt-5">Monthly EMI : ₹{monthlyEMI.toLocaleString()}</p>
            <p className="text-2xl font-bold text-black mt-2">Total Interest: ₹ {totalInterest.toLocaleString()}</p>
            <p className="text-2xl font-bold text-black mt-2">Total Principal: ₹ {loanAmount.toLocaleString()}</p>

            
          </div>
        </div>

        <h2 className="text-3xl font-bold text-red-600 mt-10">Yearly Breakdown of EMI</h2>
<div className="flex flex-wrap justify-center gap-6 bg-white p-6 rounded-lg shadow-lg">
  {years.map((year, index) => (
    <div key={index} className="w-full md:w-1/3 h-80 p-6">
      <h3 className="text-xl font-bold text-gray-800">Year: {year}</h3>
      <Bar data={getBarChartDataForYear(year)} options={{ responsive: true, maintainAspectRatio: true }} />
    </div>
  ))}
</div>

      </div>
    </>
  );
};

export default EMICalculator;
