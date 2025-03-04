"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    month: "Jan",
    equity: 1000000,
    debt: 500000,
    gold: 200000,
  },
  {
    month: "Feb",
    equity: 1050000,
    debt: 510000,
    gold: 205000,
  },
  {
    month: "Mar",
    equity: 1030000,
    debt: 520000,
    gold: 210000,
  },
  {
    month: "Apr",
    equity: 1080000,
    debt: 525000,
    gold: 215000,
  },
  {
    month: "May",
    equity: 1100000,
    debt: 530000,
    gold: 220000,
  },
  {
    month: "Jun",
    equity: 1150000,
    debt: 535000,
    gold: 225000,
  },
  {
    month: "Jul",
    equity: 1200000,
    debt: 540000,
    gold: 230000,
  },
  {
    month: "Aug",
    equity: 1180000,
    debt: 545000,
    gold: 235000,
  },
  {
    month: "Sep",
    equity: 1220000,
    debt: 550000,
    gold: 240000,
  },
  {
    month: "Oct",
    equity: 1250000,
    debt: 555000,
    gold: 245000,
  },
  {
    month: "Nov",
    equity: 1280000,
    debt: 560000,
    gold: 250000,
  },
  {
    month: "Dec",
    equity: 1300000,
    debt: 565000,
    gold: 255000,
  },
]

export function InvestmentChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis
          tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <Tooltip
          formatter={(value) => [`₹${(Number(value)).toLocaleString()}`, ""]}
          labelFormatter={(label) => `Month: ${label}`}
        />
        <Line
          type="monotone"
          dataKey="equity"
          stroke="#2563eb"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="debt"
          stroke="#16a34a"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="gold"
          stroke="#eab308"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

