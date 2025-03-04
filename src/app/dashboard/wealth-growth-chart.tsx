"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface WealthGrowthChartProps {
  monthlyInvestment: number
  years: number
}

export function WealthGrowthChart({ monthlyInvestment, years }: WealthGrowthChartProps) {
  const data = generateWealthGrowthData(monthlyInvestment, years)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis
          tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <Tooltip
          formatter={(value) => [`₹${(Number(value)).toLocaleString()}`, "Projected Value"]}
          labelFormatter={(label) => `Year: ${label}`}
        />
        <Area type="monotone" dataKey="value" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

function generateWealthGrowthData(monthlyInvestment: number, years: number) {
  const data = []
  const annualRate = 0.12 // 12% annual return
  const monthlyRate = annualRate / 12

  let currentValue = 0

  // Generate data points for each year
  for (let year = 0; year <= years; year++) {
    if (year === 0) {
      data.push({ year: 0, value: 0 })
      continue
    }

    // Calculate compound interest for the year
    const months = year * 12
    currentValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)

    data.push({
      year,
      value: Math.round(currentValue),
    })
  }

  return data
}

