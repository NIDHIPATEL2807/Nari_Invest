"use client"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Crown, Medal, Share2, Star, Trophy, TrendingUp, PiggyBank } from "lucide-react"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChallengesPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedDay, setSelectedDay] = useState(new Date().getDate())

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear)
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>)
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === selectedDay
      const hasSaved = Math.random() > 0.5 // Simulating saved days

      days.push(
        <div
          key={i}
          className={`h-10 w-10 rounded-full flex items-center justify-center cursor-pointer transition-all
            ${isToday ? "bg-primary text-primary-foreground" : ""}
            ${hasSaved && !isToday ? "bg-green-100 dark:bg-green-900" : ""}
            hover:bg-muted`}
          onClick={() => setSelectedDay(i)}
        >
          {i}
        </div>,
      )
    }

    return days
  }

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0)
      setSelectedYear(selectedYear + 1)
    } else {
      setSelectedMonth(selectedMonth + 1)
    }
    setSelectedDay(1)
  }

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11)
      setSelectedYear(selectedYear - 1)
    } else {
      setSelectedMonth(selectedMonth - 1)
    }
    setSelectedDay(1)
  }

  // Sample data for charts
  const data = [
    { date: "Jan", amount: 4000 },
    { date: "Feb", amount: 8000 },
    { date: "Mar", amount: 15000 },
    { date: "Apr", amount: 22000 },
    { date: "May", amount: 28000 },
    { date: "Jun", amount: 35000 },
    { date: "Jul", amount: 42000 },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-8xl">
        
      <div className="flex flex-col md:flex-row items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Savings Challenges</h1>
          <p className="text-muted-foreground mt-2">Join a challenge and accelerate your financial growth</p>
        </div>
        <Button className="mt-4 md:mt-0">
          <Star className="mr-2 h-4 w-4" />
          Create Custom Challenge
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Featured Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">Golden Women's Savings</CardTitle>
              <Crown className="h-6 w-6 text-amber-500" />
            </div>
            <CardDescription>Save ₹50,000 in 4 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Daily suggestion:</span>
                <span className="font-medium">₹417</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress: ₹12,500 / ₹50,000</span>
                  <span className="font-medium">25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex -space-x-2">
                  {/* <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-background"
                  />
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-background"
                  />
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-background"
                  /> */}
                </div>
                <span>126 women participating</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Join Challenge</Button>
          </CardFooter>
        </Card>

        <Card className="border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">Diamond Growth Plan</CardTitle>
              <Trophy className="h-6 w-6 text-blue-500" />
            </div>
            <CardDescription>Save ₹1,00,000 in 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Daily suggestion:</span>
                <span className="font-medium">₹556</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress: ₹50,000 / ₹1,00,000</span>
                  <span className="font-medium">50%</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex -space-x-2">
                  {/* <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-background"
                  />
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-background"
                  />
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-background"
                  /> */}
                </div>
                <span>243 women participating</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Join Challenge</Button>
          </CardFooter>
        </Card>

        <Card className="border-t-4 border-t-gray-400 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">Silver Secure Fund</CardTitle>
              <Medal className="h-6 w-6 text-gray-400" />
            </div>
            <CardDescription>Save ₹25,000 in 3 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Daily suggestion:</span>
                <span className="font-medium">₹278</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress: ₹18,750 / ₹25,000</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex -space-x-2">
                  {/* <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-background"
                  />
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-background"
                  />
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-background"
                  /> */}
                </div>
                <span>189 women participating</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Join Challenge</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Savings Calendar
              </CardTitle>
              <CardDescription>Track your daily savings and build consistency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Button variant="outline" size="sm" onClick={prevMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h3 className="text-lg font-medium">
                  {months[selectedMonth]} {selectedYear}
                </h3>
                <Button variant="outline" size="sm" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                <div className="text-sm font-medium">Sun</div>
                <div className="text-sm font-medium">Mon</div>
                <div className="text-sm font-medium">Tue</div>
                <div className="text-sm font-medium">Wed</div>
                <div className="text-sm font-medium">Thu</div>
                <div className="text-sm font-medium">Fri</div>
                <div className="text-sm font-medium">Sat</div>
              </div>

              <div className="grid grid-cols-7 gap-1 justify-items-center">{renderCalendar()}</div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">
                  {months[selectedMonth]} {selectedDay}, {selectedYear}
                </h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="text-sm font-medium">Today's Savings</label>
                    <div className="flex items-center mt-1">
                      <span className="text-2xl font-bold">₹350</span>
                      <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">
                        +₹50 from goal
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium">Monthly Total</label>
                    <div className="flex items-center mt-1">
                      <span className="text-2xl font-bold">₹7,850</span>
                      <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">
                        31% of goal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="shadow-md h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="mr-2 h-5 w-5" />
                Your Achievements
              </CardTitle>
              <CardDescription>Milestones and badges you've earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                    <Star className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Consistency Champion</h4>
                    <p className="text-sm text-muted-foreground">Saved for 7 days in a row</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Growth Guru</h4>
                    <p className="text-sm text-muted-foreground">Reached 25% of your goal</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 opacity-40">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Halfway Hero</h4>
                    <p className="text-sm text-muted-foreground">Reach 50% of your goal</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 opacity-40">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <Medal className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Almost There</h4>
                    <p className="text-sm text-muted-foreground">Reach 75% of your goal</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 opacity-40">
                  <div className="h-12 w-12 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                    <Crown className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Goal Crusher</h4>
                    <p className="text-sm text-muted-foreground">Complete your savings goal</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Achievements
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="shadow-md mb-12">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Progress Tracker
          </CardTitle>
          <CardDescription>Watch your savings grow over time</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="growth">
            <TabsList className="mb-4">
              <TabsTrigger value="growth">Growth Chart</TabsTrigger>
              <TabsTrigger value="daily">Daily Savings</TabsTrigger>
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
            </TabsList>
            <TabsContent value="growth" className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `₹${value / 1000}k`} />
                  <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, "Amount"]} />
                  <Legend />
                  <Line type="monotone" dataKey="amount" stroke="#e879f9" activeDot={{ r: 8 }} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="daily">
              <div className="h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Daily savings visualization coming soon</p>
              </div>
            </TabsContent>
            <TabsContent value="milestones">
              <div className="h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Milestone tracking visualization coming soon</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Personalized Suggestions</CardTitle>
          <CardDescription>Smart tips to help you reach your goals faster</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">Smart Saving Tip</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Try the 50-30-20 rule: 50% for needs, 30% for wants, and 20% for savings and investments.
              </p>
            
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">Investment Option</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Consider a Systematic Investment Plan (SIP) in mutual funds for your saved amount.
              </p>
              
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">AI Suggestion</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your spending pattern, you could save ₹2,000 more by reducing food delivery expenses.
              </p>
             
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

