"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Mic, Plus, Trash2 } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Landing/Navbar"

// Define expense categories with Hindi translations
const categories = [
  { id: "food", name: "Food & Groceries", nameHi: "भोजन और किराना", color: "#FF6384" },
  { id: "transport", name: "Transport", nameHi: "परिवहन", color: "#36A2EB" },
  { id: "bills", name: "Bills & Utilities", nameHi: "बिल और उपयोगिताएँ", color: "#FFCE56" },
  { id: "shopping", name: "Shopping", nameHi: "खरीदारी", color: "#4BC0C0" },
  { id: "entertainment", name: "Entertainment", nameHi: "मनोरंजन", color: "#9966FF" },
  { id: "health", name: "Health", nameHi: "स्वास्थ्य", color: "#FF9F40" },
  { id: "education", name: "Education", nameHi: "शिक्षा", color: "#C9CBCF" },
  { id: "savings", name: "Savings", nameHi: "बचत", color: "#7BC043" },
  { id: "other", name: "Other", nameHi: "अन्य", color: "#808080" },
]

// Keywords for AI categorization
const categoryKeywords = {
  food: [
    "grocery",
    "groceries",
    "food",
    "meal",
    "restaurant",
    "lunch",
    "dinner",
    "breakfast",
    "खाना",
    "भोजन",
    "किराना",
  ],
  transport: [
    "fuel",
    "petrol",
    "diesel",
    "bus",
    "train",
    "auto",
    "taxi",
    "uber",
    "ola",
    "metro",
    "परिवहन",
    "पेट्रोल",
    "डीजल",
  ],
  bills: [
    "electricity",
    "water",
    "gas",
    "internet",
    "phone",
    "mobile",
    "recharge",
    "bill",
    "बिल",
    "बिजली",
    "पानी",
    "गैस",
  ],
  shopping: ["clothes", "dress", "shirt", "pants", "shoes", "shopping", "कपड़े", "खरीदारी", "जूते"],
  entertainment: [
    "movie",
    "cinema",
    "theatre",
    "show",
    "concert",
    "netflix",
    "subscription",
    "मनोरंजन",
    "फिल्म",
    "सिनेमा",
  ],
  health: ["medicine", "doctor", "hospital", "medical", "health", "healthcare", "दवा", "डॉक्टर", "अस्पताल", "स्वास्थ्य"],
  education: [
    "book",
    "course",
    "class",
    "tuition",
    "fee",
    "school",
    "college",
    "university",
    "किताब",
    "कोर्स",
    "स्कूल",
    "कॉलेज",
  ],
  savings: ["save", "savings", "investment", "deposit", "बचत", "निवेश", "जमा"],
}

// Interface for expense type
interface Expense {
  id: string
  amount: number
  category: string
  description: string
  date: string
}

// Interface for budget type
interface Budget {
  amount: number
  period: "weekly" | "monthly"
}

export default function BudgetTracker() {
  // State for language toggle
  const [isHindi, setIsHindi] = useState(false)

  // State for expenses and budget
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [budget, setBudget] = useState<Budget>({ amount: 10000, period: "monthly" })

  // State for new expense form
  const [newExpense, setNewExpense] = useState({
    amount: "",
    category: "",
    description: "",
  })

  // State for voice input
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")

  // Ref for speech recognition
  const recognitionRef = useRef<any>(null)

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      // @ts-ignore
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = true
      recognitionRef.current.lang = isHindi ? "hi-IN" : "en-US"

      recognitionRef.current.onresult = (event: any) => {
        const current = event.resultIndex
        const transcript = event.results[current][0].transcript
        setTranscript(transcript)

        // Process the transcript to extract expense details
        processVoiceInput(transcript)
      }

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error", event.error)
        setIsListening(false)
      }
    }
  }, [isHindi])

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses")
    const savedBudget = localStorage.getItem("budget")

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses))
    }

    if (savedBudget) {
      setBudget(JSON.parse(savedBudget))
    }
  }, [])

  // Save data to localStorage when expenses or budget change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget))
  }, [budget])

  // Toggle voice input
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      recognitionRef.current.start()
      setIsListening(true)
      setTranscript("")
    }
  }

  // Process voice input to extract expense details
  const processVoiceInput = (input: string) => {
    // Extract amount using regex
    const amountRegex = /(\d+)/g
    const amountMatches = input.match(amountRegex)

    if (amountMatches && amountMatches.length > 0) {
      const amount = amountMatches[0]

      // Determine category based on keywords
      const category = categorizeExpense(input.toLowerCase())

      // Update new expense form
      setNewExpense({
        amount: amount,
        category: category,
        description: input,
      })
    }
  }

  // AI-based categorization function
  const categorizeExpense = (description: string): string => {
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      for (const keyword of keywords) {
        if (description.includes(keyword.toLowerCase())) {
          return category
        }
      }
    }
    return "other"
  }

  // Add new expense
  const addExpense = () => {
    if (!newExpense.amount || !newExpense.category) {
      toast({
        title: isHindi ? "त्रुटि" : "Error",
        description: isHindi ? "कृपया राशि और श्रेणी दर्ज करें" : "Please enter amount and category",
        variant: "destructive",
      })
      return
    }

    const expense: Expense = {
      id: Date.now().toString(),
      amount: Number.parseFloat(newExpense.amount),
      category: newExpense.category,
      description: newExpense.description,
      date: new Date().toISOString().split("T")[0],
    }

    setExpenses([...expenses, expense])
    setNewExpense({ amount: "", category: "", description: "" })
    setTranscript("")

    toast({
      title: isHindi ? "सफलता" : "Success",
      description: isHindi ? "व्यय जोड़ा गया" : "Expense added successfully",
    })
  }

  // Delete expense
  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
    toast({
      title: isHindi ? "सफलता" : "Success",
      description: isHindi ? "व्यय हटा दिया गया" : "Expense deleted successfully",
    })
  }

  // Update budget
  const updateBudget = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: isHindi ? "सफलता" : "Success",
      description: isHindi ? "बजट अपडेट किया गया" : "Budget updated successfully",
    })
  }

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  // Calculate budget progress
  const budgetProgress = Math.min(Math.round((totalExpenses / budget.amount) * 100), 100)

  // Prepare data for charts
  const pieChartData = categories
    .map((category) => {
      const categoryExpenses = expenses.filter((expense) => expense.category === category.id)
      const total = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0)
      return {
        name: isHindi ? category.nameHi : category.name,
        value: total,
        color: category.color,
      }
    })
    .filter((item) => item.value > 0)

  // Group expenses by date for bar chart
  const barChartData = expenses
    .reduce((acc: any[], expense) => {
      const existingDate = acc.find((item) => item.date === expense.date)
      if (existingDate) {
        existingDate.amount += expense.amount
      } else {
        acc.push({ date: expense.date, amount: expense.amount })
      }
      return acc
    }, [])
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    
    <div className="container mx-auto py-6 px-4">
      {/* <Navbar isDark={false} setIsDark={function (value: boolean): void {
        throw new Error("Function not implemented.")
      } }/> */}
      <header className="flex justify-between items-center mb-6">
        
        <div>
          <h1 className="text-3xl font-bold">{isHindi ? "नारी इन्वेस्ट बजट ट्रैकर" : "Nari Invest Budget Tracker"}</h1>
          <p className="text-muted-foreground">
            {isHindi ? "अपने वित्त को स्मार्ट तरीके से प्रबंधित करें" : "Manage your finances smartly"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span>{isHindi ? "हिंदी" : "English"}</span>
          <Switch checked={isHindi} onCheckedChange={setIsHindi} />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Budget Summary Card */}
        <Card>
          <CardHeader>
            <CardTitle>{isHindi ? "बजट सारांश" : "Budget Summary"}</CardTitle>
            <CardDescription>{isHindi ? "आपका वर्तमान बजट और खर्च" : "Your current budget and spending"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>{isHindi ? "कुल बजट" : "Total Budget"}</span>
                  <span>₹{budget.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>{isHindi ? "कुल खर्च" : "Total Spent"}</span>
                  <span>₹{totalExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>{isHindi ? "शेष राशि" : "Remaining"}</span>
                  <span>₹{(budget.amount - totalExpenses).toLocaleString()}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>{isHindi ? "बजट उपयोग" : "Budget Usage"}</span>
                  <span>{budgetProgress}%</span>
                </div>
                <Progress value={budgetProgress} className="h-2" />
              </div>

              <form onSubmit={updateBudget} className="space-y-3 mt-4">
                <div>
                  <Label htmlFor="budget-amount">{isHindi ? "बजट राशि" : "Budget Amount"}</Label>
                  <Input
                    id="budget-amount"
                    type="number"
                    value={budget.amount}
                    onChange={(e) => setBudget({ ...budget, amount: Number.parseFloat(e.target.value) || 0 })}
                    placeholder="₹"
                  />
                </div>
                <div>
                  <Label htmlFor="budget-period">{isHindi ? "बजट अवधि" : "Budget Period"}</Label>
                  <Select
                    value={budget.period}
                    onValueChange={(value: "weekly" | "monthly") => setBudget({ ...budget, period: value })}
                  >
                    <SelectTrigger id="budget-period">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">{isHindi ? "साप्ताहिक" : "Weekly"}</SelectItem>
                      <SelectItem value="monthly">{isHindi ? "मासिक" : "Monthly"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  {isHindi ? "बजट अपडेट करें" : "Update Budget"}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* Add Expense Card */}
        <Card>
          <CardHeader>
            <CardTitle>{isHindi ? "खर्च जोड़ें" : "Add Expense"}</CardTitle>
            <CardDescription>{isHindi ? "नया खर्च दर्ज करें" : "Record a new expense"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="expense-amount">{isHindi ? "राशि" : "Amount"}</Label>
                <Input
                  id="expense-amount"
                  type="number"
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                  placeholder="₹"
                />
              </div>
              <div>
                <Label htmlFor="expense-category">{isHindi ? "श्रेणी" : "Category"}</Label>
                <Select
                  value={newExpense.category}
                  onValueChange={(value) => setNewExpense({ ...newExpense, category: value })}
                >
                  <SelectTrigger id="expense-category">
                    <SelectValue placeholder={isHindi ? "श्रेणी चुनें" : "Select category"} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {isHindi ? category.nameHi : category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="expense-description">{isHindi ? "विवरण" : "Description"}</Label>
                <div className="flex gap-2">
                  <Input
                    id="expense-description"
                    value={newExpense.description || transcript}
                    onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                    placeholder={isHindi ? "खर्च का विवरण" : "Expense description"}
                  />
                  <Button
                    type="button"
                    variant={isListening ? "destructive" : "outline"}
                    size="icon"
                    onClick={toggleListening}
                    disabled={!("webkitSpeechRecognition" in window)}
                  >
                    <Mic className={isListening ? "animate-pulse" : ""} />
                  </Button>
                </div>
                {transcript && <p className="text-sm text-muted-foreground mt-1">{transcript}</p>}
              </div>
              <Button onClick={addExpense} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                {isHindi ? "खर्च जोड़ें" : "Add Expense"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts Card */}
        <Card>
          <CardHeader>
            <CardTitle>{isHindi ? "खर्च विश्लेषण" : "Expense Analysis"}</CardTitle>
            <CardDescription>
              {isHindi ? "आपके खर्च का विज़ुअल विश्लेषण" : "Visual analysis of your expenses"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="category">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="category">{isHindi ? "श्रेणी द्वारा" : "By Category"}</TabsTrigger>
                <TabsTrigger value="time">{isHindi ? "समय द्वारा" : "By Time"}</TabsTrigger>
              </TabsList>
              <TabsContent value="category" className="h-[250px]">
                {pieChartData.length > 0 ? (
                  <ChartContainer
                    config={pieChartData.reduce(
                      (acc, item) => {
                        acc[item.name] = {
                          label: item.name,
                          color: item.color,
                        }
                        return acc
                      },
                      {} as Record<string, { label: string; color: string }>,
                    )}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-muted-foreground">{isHindi ? "कोई डेटा उपलब्ध नहीं है" : "No data available"}</p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="time" className="h-[250px]">
                {barChartData.length > 0 ? (
                  <ChartContainer
                    config={{
                      amount: {
                        label: isHindi ? "राशि" : "Amount",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barChartData}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="amount" fill="var(--color-amount)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-muted-foreground">{isHindi ? "कोई डेटा उपलब्ध नहीं है" : "No data available"}</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Recent Expenses */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>{isHindi ? "हाल के खर्च" : "Recent Expenses"}</CardTitle>
          <CardDescription>{isHindi ? "आपके हाल के खर्चों का विवरण" : "Details of your recent expenses"}</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {expenses.length > 0 ? (
              <div className="space-y-4">
                {expenses
                  .slice()
                  .reverse()
                  .map((expense) => {
                    const category = categories.find((c) => c.id === expense.category)
                    return (
                      <div key={expense.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: category?.color || "#808080" }}
                          />
                          <div>
                            <p className="font-medium">
                              {expense.description || (isHindi ? category?.nameHi : category?.name)}
                            </p>
                            <p className="text-sm text-muted-foreground">{expense.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{isHindi ? category?.nameHi : category?.name}</Badge>
                          <p className="font-medium">₹{expense.amount.toLocaleString()}</p>
                          <Button variant="ghost" size="icon" onClick={() => deleteExpense(expense.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
              </div>
            ) : (
              <div className="flex h-[200px] items-center justify-center">
                <p className="text-muted-foreground">{isHindi ? "कोई खर्च नहीं मिला" : "No expenses found"}</p>
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>

      <Toaster />
    </div>
  )
}

