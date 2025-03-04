"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Progress } from "@/components/ui/progress"

interface GoalProgressChartProps {
  goal: string
}

export function GoalProgressChart({ goal }: GoalProgressChartProps) {
  const data = getGoalData(goal)
  const progress = calculateProgress(data[0].current, data[0].target)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="
        ">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis
            tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <Tooltip
            formatter={(value) => [`₹${(Number(value)).toLocaleString()}`, ""]}
            labelFormatter={(label) => label}
          />
          <Bar dataKey="current" fill="#ec4899" radius={[4, 4, 0, 0]} name="Current Amount" />
          <Bar dataKey="target" fill="#f9a8d4" radius={[4, 4, 0, 0]} name="Target Amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function calculateProgress(current: number, target: number): number {
  return Math.round((current / target) * 100)
}

function getGoalData(goal: string) {
  switch (goal) {
    case "retirement":
      return [
        {
          name: "Retirement Fund",
          current: 1250000,
          target: 5000000,
        },
      ]
    case "education":
      return [
        {
          name: "Education Fund",
          current: 800000,
          target: 2500000,
        },
      ]
    case "home":
      return [
        {
          name: "Home Purchase",
          current: 1500000,
          target: 3000000,
        },
      ]
    case "emergency":
      return [
        {
          name: "Emergency Fund",
          current: 300000,
          target: 500000,
        },
      ]
    case "business":
      return [
        {
          name: "Business Startup",
          current: 500000,
          target: 2000000,
        },
      ]
    default:
      return [
        {
          name: "Goal Progress",
          current: 1000000,
          target: 3000000,
        },
      ]
  }
}

