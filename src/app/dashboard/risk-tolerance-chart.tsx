"use client"

import { ResponsiveContainer, AreaChart, Area } from "recharts"

const data = [
  { value: 10 },
  { value: 15 },
  { value: 25 },
  { value: 35 },
  { value: 50 },
  { value: 65 },
  { value: 75 },
  { value: 85 },
  { value: 90 },
  { value: 85 },
  { value: 75 },
  { value: 65 },
  { value: 50 },
  { value: 35 },
  { value: 25 },
  { value: 15 },
  { value: 10 },
]

export function RiskToleranceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="riskGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="url(#riskGradient)"
          fill="url(#riskGradient)"
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

