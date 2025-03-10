"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function StatisticsChart() {
  const data = [
    {
      name: "2019",
      "Financial Independence": 15,
      "Active Investors": 25,
      "Startup Funding": 10,
    },
    {
      name: "2020",
      "Financial Independence": 18,
      "Active Investors": 27,
      "Startup Funding": 15,
    },
    {
      name: "2021",
      "Financial Independence": 20,
      "Active Investors": 29,
      "Startup Funding": 20,
    },
    {
      name: "2022",
      "Financial Independence": 22,
      "Active Investors": 31,
      "Startup Funding": 26,
    },
    {
      name: "2023",
      "Financial Independence": 25,
      "Active Investors": 33,
      "Startup Funding": 35,
    },
  ]

  return (
    <div className="w-full p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold text-center mb-4">Women’s Financial Growth Trends</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Financial Independence" fill="#6366F1" />
          <Bar dataKey="Active Investors" fill="#10B981" />
          <Bar dataKey="Startup Funding" fill="#FBBF24" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
