import Link from "next/link"
import Image from "next/image"
import img from "@/app/img.png"
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle,
  ChevronRight,
  CreditCard,
  DollarSign,
  MessageCircle,
  PiggyBank,
  Target,
 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatisticsChart } from "@/components/statistics-chart"
import { LanguageToggle } from "@/components/language-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {  ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <PiggyBank className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Nari Invest</span>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/budget" className="text-sm font-medium hover:text-primary">
            Budget
          </Link>
          <Link href="/quiz" className="text-sm font-medium hover:text-primary">
            Quiz
          </Link>
          <Link href="/learn" className="text-sm font-medium hover:text-primary">
            Learn
          </Link>
          <Link href="/challenge" className="text-sm font-medium hover:text-primary">
            Saving Challenges
          </Link>

          {/* Calculator Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium hover:text-primary flex items-center">
                Calculator
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/SukanyaSamriddhi">Sukanya Samriddhi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sip-calculator">Sip Calculator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/emi-calculator">EMI Calculator</Link>
              </DropdownMenuItem>
             
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Log in
          </Button>
          <Button size="sm">Sign up</Button>
        </div>
        
      </div>
    </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Take charge of your finances with smart budgeting and investments!
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of women who are taking control of their financial future through smart planning,
                  budgeting, and strategic investments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quiz" className="">
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Get Started with quiz
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </Link>
                  
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src={img}
                  width={700}
                  height={700}
                  alt="Woman managing finances"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Saving Challenges Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Saving Challenges</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Motivating women to save consistently with fun challenges!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    ₹5,000 in 30 Days Challenge
                  </CardTitle>
                  <CardDescription>Save a small amount daily to reach ₹5,000!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>₹2,500 / ₹5,000</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-amber-500" />
                      <span className="text-sm text-muted-foreground">15 women completed this week</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Challenge</Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    No-Spend Weekend Challenge
                  </CardTitle>
                  <CardDescription>Avoid unnecessary expenses & track savings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Weekends Completed</span>
                        <span>2 / 4</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-amber-500" />
                      <span className="text-sm text-muted-foreground">32 women participating</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Now</Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Round-Up Savings Challenge
                  </CardTitle>
                  <CardDescription>Round up expenses to nearest ₹10 and save the extra.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Saved this month</span>
                        <span>₹320</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-amber-500" />
                      <span className="text-sm text-muted-foreground">₹12,500 saved by community</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Activate</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Government Schemes Section */}
        <section className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Key Government Schemes for Women
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Government schemes that help women grow financially
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Sukanya Samriddhi Yojana</CardTitle>
                  <CardDescription>Savings scheme for girls with 7.6% interest</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Tax benefits under Section 80C</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Minimum deposit of ₹250 per year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Maximum deposit of ₹1.5 lakh per year</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/SukanyaSamriddhi">
                     <Button className="w-full">Calculate Returns</Button>
                     </Link>
                 
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Mahila Samman Savings Certificate</CardTitle>
                  <CardDescription>7.5% interest with a 2-year lock-in</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>One-time deposit scheme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Maximum deposit of ₹2 lakh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Partial withdrawal allowed after 1 year</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Calculate Returns</Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Stand-Up India Scheme</CardTitle>
                  <CardDescription>Loan support for women entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Loans between ₹10 lakh and ₹1 crore</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>For setting up greenfield enterprises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Composite loan (term loan + working capital)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Check Eligibility</Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Pradhan Mantri Mudra Yojana</CardTitle>
                  <CardDescription>Small business loan opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Shishu: Loans up to ₹50,000</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Kishore: Loans up to ₹5 lakh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Tarun: Loans up to ₹10 lakh</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Check Loan Amount</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Women & Finance – Key Statistics
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Understanding the current financial landscape for women in India
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <StatisticsChart />
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">80%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>of Indian women are financially dependent on family members</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">33%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>of women actively invest in financial assets</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">35%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>rise in funding for women-led startups in 2023</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Tools Section */}
        <section className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Smart Financial Tools & Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to take control of your financial future
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Budget Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Set goals & track expenses easily</p>
                </CardContent>
                <CardFooter>

                <Link href="/budget">
                <Button variant="outline" className="w-full item-centre">
                    Try Now
                  </Button>
                </Link>
                  
                </CardFooter>
              </Card>
              <Card className="text-center transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Investment Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Plan your future wealth</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Calculate
                  </Button>
                </CardFooter>
              </Card>
              <Card className="text-center transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">SIP Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Calculate your SIP returns</p>
                </CardContent>
                <CardFooter>
                  <Link href="/sip-calculator">
                  <Button  variant="outline" className="w-full">
                    Calculate SIP Returns
                  </Button>
                  </Link>
                 
                </CardFooter>
              </Card>
              <Card className="text-center transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">EMI Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Check your EMI amount</p>
                </CardContent>
                <CardFooter>

                <Link href="/emi-calculator">
                  <Button  variant="outline" className="w-full">
                  Check EMI Amount
                  </Button>
                  </Link>
                 
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Education & Community Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Financial Education & Community
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn, grow, and connect with like-minded women
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="learning" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="learning">Learning Modules</TabsTrigger>
                  <TabsTrigger value="community">Community Forum</TabsTrigger>
                  <TabsTrigger value="gamification">Gamification</TabsTrigger>
                </TabsList>
                <TabsContent value="learning" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Modules</CardTitle>
                      <CardDescription>From beginner to advanced finance lessons</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium">Investing Basics</h3>
                            <p className="text-sm text-muted-foreground">Learn the fundamentals of investing</p>
                            <Link href="#" className="text-sm text-primary flex items-center mt-2">
                              Start Learning <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium">Budgeting 101</h3>
                            <p className="text-sm text-muted-foreground">Master the art of budgeting</p>
                            <Link href="#" className="text-sm text-primary flex items-center mt-2">
                              Start Learning <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium">Tax Planning</h3>
                            <p className="text-sm text-muted-foreground">Optimize your taxes efficiently</p>
                            <Link href="#" className="text-sm text-primary flex items-center mt-2">
                              Start Learning <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium">Retirement Planning</h3>
                            <p className="text-sm text-muted-foreground">Secure your financial future</p>
                            <Link href="#" className="text-sm text-primary flex items-center mt-2">
                              Start Learning <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View All Courses</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="community" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Community Forum</CardTitle>
                      <CardDescription>Discuss & learn with other women</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-start gap-4">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              width={40}
                              height={40}
                              alt="User avatar"
                              className="rounded-full"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">Priya S.</h3>
                                <span className="text-xs text-muted-foreground">2 hours ago</span>
                              </div>
                              <p className="text-sm mt-1">
                                Has anyone tried the Sukanya Samriddhi Yojana? I'm considering it for my daughter.
                              </p>
                              <div className="flex items-center gap-4 mt-2">
                                <Button variant="ghost" size="sm" className="h-8 gap-1">
                                  <MessageCircle className="h-4 w-4" />
                                  <span>12 Replies</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-start gap-4">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              width={40}
                              height={40}
                              alt="User avatar"
                              className="rounded-full"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">Meera R.</h3>
                                <span className="text-xs text-muted-foreground">5 hours ago</span>
                              </div>
                              <p className="text-sm mt-1">
                                What's a good first investment for someone just starting out?
                              </p>
                              <div className="flex items-center gap-4 mt-2">
                                <Button variant="ghost" size="sm" className="h-8 gap-1">
                                  <MessageCircle className="h-4 w-4" />
                                  <span>24 Replies</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Join the Discussion</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="gamification" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gamification</CardTitle>
                      <CardDescription>Quizzes, badges, and rewards for financial literacy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <Card className="border-2 border-primary/20">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Financial Literacy Quiz</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">Test your knowledge and earn badges</p>
                            <div className="flex items-center gap-2 mt-4">
                              <Award className="h-5 w-5 text-amber-500" />
                              <span className="text-sm">Earn up to 500 points</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">
                              Take Quiz
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Your Badges</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">Showcase your financial achievements</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <Award className="h-5 w-5 text-primary" />
                              </div>
                              <div className="rounded-full bg-primary/10 p-2">
                                <Award className="h-5 w-5 text-primary" />
                              </div>
                              <div className="rounded-full bg-slate-200 p-2">
                                <Award className="h-5 w-5 text-slate-400" />
                              </div>
                              <div className="rounded-full bg-slate-200 p-2">
                                <Award className="h-5 w-5 text-slate-400" />
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">
                              View All Badges
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore More Challenges</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to take control of your finances?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of women who are building a secure financial future
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started Now
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-slate-50 py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <PiggyBank className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Nari Invest</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering women to take control of their financial future.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Budget Tracker
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Learning Hub
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Investment Tools
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Calculators
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Saving Challenges
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Language</h3>
              <LanguageToggle />
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Contact</h3>
                <p className="text-sm text-muted-foreground">support@nariinvest.com</p>
                <p className="text-sm text-muted-foreground">+91 1234567890</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Nari Invest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

