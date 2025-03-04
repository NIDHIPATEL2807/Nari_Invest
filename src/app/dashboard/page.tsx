"use client"

import type React from "react"

import { useState } from "react"
import {
  Bell,
  ChevronDown,
  ChevronUp,
  CreditCard,
  DollarSign,
  HelpCircle,
  Home,
  LineChart,
  Menu,
  PieChart,
  Settings,
  Wallet,
} from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InvestmentChart } from "./investment-chart"
import { PortfolioChart } from "./portfolio-chart"
import { RiskToleranceChart } from "./risk-tolerance-chart"
import { WealthGrowthChart } from "./wealth-growth-chart"
import { GoalProgressChart } from "./goal-progress-chart"

export default function Dashboard() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000)
  const [years, setYears] = useState(5)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedGoal, setSelectedGoal] = useState("retirement")

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Wallet className="h-5 w-5" />
                <span>HerWealth</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary">
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <PieChart className="h-5 w-5" />
                Investments
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <LineChart className="h-5 w-5" />
                Analytics
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <CreditCard className="h-5 w-5" />
                Transactions
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-primary md:hidden">
            <Wallet className="h-5 w-5" />
            <span>HerWealth</span>
          </Link>
        </div>
        <div className="flex w-full items-center justify-between md:justify-end">
          <Button
            variant="outline"
            size="icon"
            className="mr-2 hidden md:flex"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Toggle notifications</span>
              <Badge className="absolute -mr-2 -mt-2 right-0 top-0 h-4 w-4 rounded-full p-0 text-xs">3</Badge>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside
          className={`${sidebarOpen ? "w-64" : "w-0 md:w-16"} hidden border-r bg-background transition-all duration-300 md:block`}
        >
          <div className="flex h-full flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4">
              <Link
                href="#"
                className={`flex items-center gap-2 font-semibold text-primary ${!sidebarOpen && "justify-center"}`}
              >
                <Wallet className="h-5 w-5" />
                {sidebarOpen && <span>HerWealth</span>}
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid gap-1 px-2 text-sm font-medium">
                <Link
                  href="#"
                  className={`flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary ${!sidebarOpen && "justify-center"}`}
                >
                  <Home className="h-5 w-5" />
                  {sidebarOpen && <span>Dashboard</span>}
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary ${!sidebarOpen && "justify-center"}`}
                >
                  <PieChart className="h-5 w-5" />
                  {sidebarOpen && <span>Investments</span>}
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary ${!sidebarOpen && "justify-center"}`}
                >
                  <LineChart className="h-5 w-5" />
                  {sidebarOpen && <span>Analytics</span>}
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary ${!sidebarOpen && "justify-center"}`}
                >
                  <CreditCard className="h-5 w-5" />
                  {sidebarOpen && <span>Transactions</span>}
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary ${!sidebarOpen && "justify-center"}`}
                >
                  <Settings className="h-5 w-5" />
                  {sidebarOpen && <span>Settings</span>}
                </Link>
              </nav>
            </div>
            {sidebarOpen && (
              <div className="border-t p-4">
                <div className="rounded-lg bg-pink-50 p-3">
                  <h3 className="font-medium text-pink-900">Take the Investment Quiz</h3>
                  <p className="mt-1 text-xs text-pink-700">
                    Discover your investment style and get personalized recommendations
                  </p>
                  <Link href="/quiz" passHref>
  <Button size="sm" className="mt-2 w-full bg-pink-600 text-white hover:bg-pink-700">
    Start Quiz
  </Button>
</Link>
                </div>
              </div>
            )}
          </div>
        </aside>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Hello, Priya! Here's your financial snapshot.</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹4,50,000</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹85,000</div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={65} className="h-2" />
                  <span className="text-xs text-muted-foreground">65% of expenses covered</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risk Tolerance</CardTitle>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Medium</div>
                <div className="mt-2 h-10">
                  <RiskToleranceChart />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Investment Split</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-10">
                  <PortfolioChart />
                </div>
                <div className="mt-2 grid grid-cols-3 gap-1 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>Safe: 30%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>Moderate: 50%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <span>High: 20%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-pink-100">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Your Financial Goals</CardTitle>
                  <CardDescription>Track your progress towards important life milestones</CardDescription>
                </div>
                <Select value={selectedGoal} onValueChange={setSelectedGoal}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retirement">Retirement</SelectItem>
                    <SelectItem value="education">Children's Education</SelectItem>
                    <SelectItem value="home">Home Purchase</SelectItem>
                    <SelectItem value="emergency">Emergency Fund</SelectItem>
                    <SelectItem value="business">Business Startup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-4 h-[200px]">
                    <GoalProgressChart goal={selectedGoal} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Target Amount</p>
                      <p className="text-xl font-bold">₹50,00,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Progress</p>
                      <p className="text-xl font-bold">₹12,50,000 (25%)</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-pink-50 p-4">
                  <h3 className="font-medium text-pink-900">AI Insight for Your {getGoalName(selectedGoal)}</h3>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-pink-200 p-1.5">
                        <ChevronUp className="h-4 w-4 text-pink-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-pink-900">Increase your monthly contribution</p>
                        <p className="text-xs text-pink-700">
                          Adding just ₹2,000 more per month could help you reach your goal 2 years earlier.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-pink-200 p-1.5">
                        <PieChart className="h-4 w-4 text-pink-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-pink-900">Consider a more aggressive portfolio</p>
                        <p className="text-xs text-pink-700">
                          With 15+ years until retirement, you could consider increasing your equity allocation to 60%.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-pink-200 p-1.5">
                        <DollarSign className="h-4 w-4 text-pink-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-pink-900">Tax-saving opportunity</p>
                        <p className="text-xs text-pink-700">
                          Investing in ELSS funds can help you save up to ₹46,800 in taxes while growing your retirement
                          corpus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="mt-4 w-full bg-pink-600 text-white hover:bg-pink-700">
                    Optimize My Plan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Smart Investment Suggestions (AI-Powered)</CardTitle>
                <CardDescription>Personalized recommendations based on your profile & goals</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="safe">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="safe">Safe Investments</TabsTrigger>
                    <TabsTrigger value="moderate">Moderate Investments</TabsTrigger>
                    <TabsTrigger value="high">High-Risk Investments</TabsTrigger>
                  </TabsList>
                  <TabsContent value="safe" className="space-y-4 pt-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Fixed Deposit - HDFC Bank</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">7.1% p.a.</div>
                          <p className="text-xs text-muted-foreground">5 year term</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Aligns with your goal of
                              building an emergency fund with zero risk.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Gold ETF - SBI</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">8.5% p.a.</div>
                          <p className="text-xs text-muted-foreground">Projected returns</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Gold provides inflation
                              protection for your daughter's education fund.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Govt Bonds - 10 Year</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">7.5% p.a.</div>
                          <p className="text-xs text-muted-foreground">Tax-free returns</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Tax-efficient option based on
                              your current tax bracket of 30%.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Recurring Deposit - ICICI</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">6.8% p.a.</div>
                          <p className="text-xs text-muted-foreground">Monthly investment</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Perfect for your disciplined
                              monthly savings habit of ₹10,000.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="moderate" className="space-y-4 pt-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">SIP - HDFC Mid Cap Fund</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">12.5% p.a.</div>
                          <p className="text-xs text-muted-foreground">5 year average returns</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Matches your medium risk
                              profile and long-term retirement goal.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Nifty 50 Index Fund</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">11.2% p.a.</div>
                          <p className="text-xs text-muted-foreground">3 year average returns</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Low-cost option that aligns
                              with your preference for passive investing.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Corporate Bonds - TATA</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">9.5% p.a.</div>
                          <p className="text-xs text-muted-foreground">AA+ rated</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Provides stable income for
                              your pre-retirement phase (5-10 years away).
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Balanced Advantage Fund</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">10.8% p.a.</div>
                          <p className="text-xs text-muted-foreground">Dynamic asset allocation</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Automatic rebalancing matches
                              your busy schedule as a working professional.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="high" className="space-y-4 pt-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Small Cap Fund - Axis</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">18.5% p.a.</div>
                          <p className="text-xs text-muted-foreground">High volatility</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Suitable for the 20%
                              high-risk portion of your portfolio with 15+ years horizon.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">REIT - Embassy Office Parks</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">14.2% p.a.</div>
                          <p className="text-xs text-muted-foreground">Commercial real estate</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Provides real estate exposure
                              without the hassle of property management.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Sectoral Fund - Pharma</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">16.5% p.a.</div>
                          <p className="text-xs text-muted-foreground">Sector-specific risk</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Aligns with your professional
                              background in healthcare and industry knowledge.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">International Fund - US Tech</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="text-lg font-bold">15.8% p.a.</div>
                          <p className="text-xs text-muted-foreground">Currency risk</p>
                          <div className="mt-2 rounded-md bg-green-50 p-2">
                            <p className="text-xs text-green-700">
                              <span className="font-medium">Why it's right for you:</span> Provides geographical
                              diversification for your daughter's future education abroad.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button size="sm" className="w-full">
                            Invest Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Predictive Analytics</CardTitle>
                <CardDescription>Wealth Growth Calculator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Monthly Investment</Label>
                    <span className="text-sm font-medium">₹{monthlyInvestment.toLocaleString()}</span>
                  </div>
                  <Slider
                    value={[monthlyInvestment]}
                    min={1000}
                    max={100000}
                    step={1000}
                    onValueChange={(value) => setMonthlyInvestment(value[0])}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Time Period</Label>
                    <span className="text-sm font-medium">{years} years</span>
                  </div>
                  <Slider value={[years]} min={1} max={30} step={1} onValueChange={(value) => setYears(value[0])} />
                </div>
                <div className="h-[200px]">
                  <WealthGrowthChart monthlyInvestment={monthlyInvestment} years={years} />
                </div>
                <div className="rounded-lg bg-pink-50 p-4">
                  <h4 className="mb-2 font-medium">AI Insight</h4>
                  <p className="text-sm text-pink-700">
                    If you invest ₹{monthlyInvestment.toLocaleString()} per month for {years} years, you could have
                    approximately
                    <span className="font-bold">
                      {" "}
                      ₹{calculateFutureValue(monthlyInvestment, years).toLocaleString()}
                    </span>
                    .
                  </p>
                  <p className="mt-2 text-sm text-pink-700">
                    Based on your career progression as a marketing professional, we project your income to grow by 8%
                    annually. Increasing your investment by just 5% each year could add an extra ₹
                    {Math.round(calculateFutureValue(monthlyInvestment, years) * 0.3).toLocaleString()} to your final
                    amount.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Optimization & Rebalancing</CardTitle>
              <CardDescription>Your current investments & performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="h-[250px]">
                    <InvestmentChart />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Current Value</p>
                      <p className="font-medium">₹12,45,000</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Invested Amount</p>
                      <p className="font-medium">₹10,00,000</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Total Returns</p>
                      <p className="font-medium text-green-600">+24.5%</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border border-pink-100 bg-pink-50/30 p-4">
                    <h3 className="mb-2 font-medium text-pink-900">AI Rebalancing Suggestions</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-pink-100 p-2 text-pink-600">
                          <ChevronUp className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-pink-900">Increase Debt Allocation</p>
                          <p className="text-sm text-pink-700">
                            Switch 10% from equity to debt for lower risk as you approach your home purchase goal in 2
                            years.
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 border-pink-200 text-pink-700 hover:bg-pink-100 hover:text-pink-900"
                          >
                            Apply Change
                          </Button>
                        </div>
                      </div>
                      <Separator className="bg-pink-100" />
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-pink-100 p-2 text-pink-600">
                          <ChevronDown className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-pink-900">Reduce Underperforming Assets</p>
                          <p className="text-sm text-pink-700">
                            Sell ICICI Technology Fund and invest in HDFC Mid Cap Fund for better returns based on your
                            risk profile.
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 border-pink-200 text-pink-700 hover:bg-pink-100 hover:text-pink-900"
                          >
                            Apply Change
                          </Button>
                        </div>
                      </div>
                      <Separator className="bg-pink-100" />
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-pink-100 p-2 text-pink-600">
                          <DollarSign className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-pink-900">Tax-Loss Harvesting Opportunity</p>
                          <p className="text-sm text-pink-700">
                            Sell Reliance shares to book losses and offset capital gains tax, optimizing your after-tax
                            returns.
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 border-pink-200 text-pink-700 hover:bg-pink-100 hover:text-pink-900"
                          >
                            Apply Change
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-medium leading-none">{children}</div>
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function calculateFutureValue(monthlyInvestment: number, years: number) {
  const monthlyRate = 0.12 / 12 // Assuming 12% annual return
  const months = years * 12
  const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
  return Math.round(futureValue)
}

function getGoalName(goal: string) {
  const goalNames: Record<string, string> = {
    retirement: "Retirement",
    education: "Children's Education",
    home: "Home Purchase",
    emergency: "Emergency Fund",
    business: "Business Startup",
  }

  return goalNames[goal] || goal
}

