"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ChevronLeft, Volume2, Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Define quiz sections and questions
const quizSections = [
  {
    id: "financial-profile",
    title: "Understanding Your Financial Profile",
    description: "Let's understand your current financial situation better",
    questions: [
      {
        id: "role",
        text: "What is your role in your household?",
        type: "radio",
        options: [
          { value: "working", label: "Working professional (Job, Business)", icon: "👩‍💼" },
          {
            value: "self-employed",
            label: "Self-employed (Small business, Freelancer, Handicraft work)",
            icon: "👩‍🏭",
          },
          { value: "homemaker", label: "Homemaker (Housewife, Caregiver)", icon: "👩‍👧‍👦" },
          { value: "student", label: "Student", icon: "👩‍🎓" },
          { value: "others", label: "Others", icon: "👤" },
          { value: "prefer-not-to-say", label: "I prefer not to say", icon: "🔒" },
        ],
      },
      {
        id: "income-source",
        text: "What is your main source of income? (If any, select all that apply)",
        type: "checkbox",
        options: [
          { value: "job", label: "Job (Salary)", icon: "💼" },
          { value: "business", label: "Own business (Small shop, Farming, Handicrafts)", icon: "🏪" },
          { value: "govt-schemes", label: "Government Schemes (PM Ujjwala Yojana, MGNREGA, etc.)", icon: "🏛️" },
          { value: "family-support", label: "Support from Family (Husband, Parents, Relatives)", icon: "👪" },
          { value: "household-savings", label: "No fixed income, but I save from household expenses", icon: "💰" },
          { value: "no-income", label: "I don't have any income", icon: "❌" },
        ],
      },
      {
        id: "finance-management",
        text: "How do you manage household finances? (Choose the best option)",
        type: "radio",
        options: [
          { value: "self-manage", label: "I manage all finances and savings myself", icon: "👩‍💻" },
          { value: "want-to-learn", label: "My husband/family handles it, but I want to learn", icon: "📚" },
          { value: "contribute", label: "I contribute but don't make the final decisions", icon: "🤝" },
          { value: "no-knowledge", label: "I don't know much about financial management", icon: "❓" },
        ],
      },
      {
        id: "monthly-savings",
        text: "How much money do you save each month? (Even small amounts count!)",
        type: "radio",
        options: [
          { value: "less-than-500", label: "Less than ₹500", icon: "💸" },
          { value: "500-2000", label: "₹500 - ₹2,000", icon: "💵" },
          { value: "2000-5000", label: "₹2,000 - ₹5,000", icon: "💴" },
          { value: "more-than-5000", label: "More than ₹5,000", icon: "💰" },
          { value: "irregular", label: "I don't save regularly", icon: "📊" },
        ],
      },
      {
        id: "financial-goals",
        text: "What are your financial goals? (Select multiple)",
        type: "checkbox",
        options: [
          { value: "education", label: "Children's Education", icon: "🎓" },
          { value: "business", label: "Expanding my Business/Starting a Business", icon: "🏢" },
          { value: "gold", label: "Buying Gold/Jewelry", icon: "💍" },
          { value: "emergency", label: "Emergency Fund", icon: "🚑" },
          { value: "home", label: "Buying a Home", icon: "🏠" },
          { value: "retirement", label: "Retirement Security", icon: "👵" },
          { value: "family-support", label: "Supporting Family (Medical, Weddings, etc.)", icon: "👪" },
          { value: "dont-know", label: "I don't know yet", icon: "🤔" },
        ],
      },
      {
        id: "investment-experience",
        text: "Have you ever invested before? (Choose one)",
        type: "radio",
        options: [
          { value: "basic-investments", label: "Yes, in Gold/Savings Account/Post Office Schemes", icon: "💰" },
          { value: "fixed-deposits", label: "Yes, in Fixed Deposits or Recurring Deposits", icon: "🏦" },
          {
            value: "chit-funds",
            label: "Yes, in Chit Funds/Local Savings Groups (Self-Help Groups - SHGs)",
            icon: "👩‍👩‍👧",
          },
          { value: "want-to-learn", label: "No, but I want to learn", icon: "📚" },
          { value: "no-knowledge", label: "I don't know about investments", icon: "❓" },
        ],
      },
    ],
  },
  {
    id: "spending-saving",
    title: "Spending & Saving Behavior",
    description: "Let's understand how you manage your money day-to-day",
    questions: [
      {
        id: "expense-tracking",
        text: "Do you track your household expenses?",
        type: "radio",
        options: [
          { value: "diary", label: "Yes, I write them down in a diary/notebook", icon: "📔" },
          { value: "digital", label: "Yes, I use a mobile app or bank SMS alerts", icon: "📱" },
          { value: "estimate", label: "No, I just estimate based on needs", icon: "🔄" },
          { value: "dont-know", label: "I don't know how", icon: "❓" },
        ],
      },
      {
        id: "debts",
        text: "Do you have any debts or loans?",
        type: "radio",
        options: [
          { value: "personal-loan", label: "Yes, I have taken a personal loan", icon: "🏦" },
          { value: "borrowed", label: "Yes, I have borrowed from friends/family", icon: "👪" },
          { value: "shg-loan", label: "Yes, I am part of a Self-Help Group (SHG) loan scheme", icon: "👩‍👩‍👧" },
          { value: "no-loans", label: "No, I don't have any loans", icon: "✅" },
          { value: "dont-know", label: "I don't know", icon: "❓" },
        ],
      },
    ],
  },
  {
    id: "financial-awareness",
    title: "Financial Awareness",
    description: "Optional - Let's check your knowledge about financial products",
    questions: [
      {
        id: "financial-news",
        text: "Do you follow financial news or investment updates?",
        type: "radio",
        options: [
          { value: "active", label: "Yes, I actively follow financial updates", icon: "📰" },
          { value: "interested", label: "No, but I am interested in learning", icon: "📚" },
          { value: "not-interested", label: "No, I am not interested", icon: "🚫" },
        ],
        isGateway: true,
        showNextIf: ["active", "interested"],
      },
      {
        id: "sip-knowledge",
        text: "Have you heard about SIPs (Systematic Investment Plans)?",
        type: "radio",
        options: [
          { value: "invest", label: "Yes, I invest in SIPs", icon: "💹" },
          { value: "heard", label: "Yes, but I don't know how they work", icon: "🤔" },
          { value: "no", label: "No", icon: "❌" },
        ],
        dependsOn: "financial-news",
      },
      {
        id: "gold-investment",
        text: "Do you know about Gold investment options?",
        type: "radio",
        options: [
          { value: "physical", label: "Yes, I have physical gold jewelry", icon: "💍" },
          { value: "digital", label: "Yes, I know about Gold ETFs/Digital Gold", icon: "💻" },
          { value: "trust-physical", label: "No, I only trust physical gold", icon: "🔒" },
          { value: "dont-know", label: "I don't know", icon: "❓" },
        ],
        dependsOn: "financial-news",
      },
      {
        id: "govt-schemes",
        text: "Do you know about Government Women Investment Schemes?",
        type: "checkbox",
        options: [
          { value: "sukanya", label: "Sukanya Samriddhi Yojana (For daughters)", icon: "👧" },
          { value: "mahila-samman", label: "Mahila Samman Savings Certificate", icon: "👩" },
          { value: "post-office", label: "Post Office Savings Schemes", icon: "📯" },
          { value: "mudra", label: "Mudra Loan Scheme (For small businesses)", icon: "🏪" },
          { value: "dont-know", label: "I don't know about these", icon: "❓" },
        ],
        dependsOn: "financial-news",
      },
    ],
  },
]

// Languages supported
const languages = [
  { value: "english", label: "English" },
  { value: "hindi", label: "हिंदी (Hindi)" },
  { value: "marathi", label: "मराठी (Marathi)" },
  { value: "tamil", label: "தமிழ் (Tamil)" },
  { value: "bengali", label: "বাংলা (Bengali)" },
]

// Translations (simplified for demo)
const translations = {
  english: {
    next: "Next",
    previous: "Previous",
    skip: "Skip for Now",
    submit: "Submit",
    results: "See Results",
    selectLanguage: "Select Language",
    progress: "Progress",
  },
  hindi: {
    next: "आगे",
    previous: "पीछे",
    skip: "अभी के लिए छोड़ें",
    submit: "जमा करें",
    results: "परिणाम देखें",
    selectLanguage: "भाषा चुनें",
    progress: "प्रगति",
  },
  // Other languages would be added similarly
}

export default function InvestmentQuiz() {
  const [currentSection, setCurrentSection] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [language, setLanguage] = useState("english")
  const [isComplete, setIsComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  // Calculate total questions and current question number for progress
  const totalQuestions = quizSections.reduce((acc, section) => acc + section.questions.length, 0)

  useEffect(() => {
    // Calculate progress percentage
    const completedSections = quizSections.slice(0, currentSection)
    const completedQuestions =
      completedSections.reduce((acc, section) => acc + section.questions.length, 0) + currentQuestion + 1
    const progressPercentage = (completedQuestions / totalQuestions) * 100
    setProgress(progressPercentage)
  }, [currentSection, currentQuestion, totalQuestions])

  // Get current question
  const section = quizSections[currentSection]
  const question = section?.questions[currentQuestion]

  // Handle radio selection
  const handleRadioChange = (value: string) => {
    setAnswers({ ...answers, [question.id]: value })
  }

  // Handle checkbox selection
  const handleCheckboxChange = (value: string, checked: boolean) => {
    const currentValues = answers[question.id] || []
    let newValues

    if (checked) {
      newValues = [...currentValues, value]
    } else {
      newValues = currentValues.filter((v: string) => v !== value)
    }

    setAnswers({ ...answers, [question.id]: newValues })
  }

  // Navigate to next question or section
  const handleNext = () => {
    // If there are more questions in this section
    if (currentQuestion < section.questions.length - 1) {
      // Check if current question is a gateway question
      if (question.isGateway && question.showNextIf) {
        const answer = answers[question.id]
        // If answer doesn't meet criteria to show next questions, skip to next section
        if (!question.showNextIf.includes(answer)) {
          if (currentSection < quizSections.length - 1) {
            setCurrentSection(currentSection + 1)
            setCurrentQuestion(0)
          } else {
            setIsComplete(true)
          }
          return
        }
      }

      // Check if next question depends on a previous answer
      const nextQuestion = section.questions[currentQuestion + 1];
      if (!nextQuestion) return; // Ensure nextQuestion exists
      
      if (nextQuestion?.dependsOn) { // Use optional chaining here
          const dependsOnAnswer = answers[nextQuestion.dependsOn] || null;
      
          // If the dependency condition isn't met, skip this question
          if (nextQuestion.isGateway && nextQuestion.showNextIf && !nextQuestion.showNextIf.includes(dependsOnAnswer)) {
              // Skip to next valid question or section
              let nextQuestionIndex = currentQuestion + 2;
              while (
                  nextQuestionIndex < section.questions.length &&
                  section.questions[nextQuestionIndex]?.dependsOn === nextQuestion.dependsOn
              ) {
                  nextQuestionIndex++;
              }
      
              if (nextQuestionIndex < section.questions.length) {
                  setCurrentQuestion(nextQuestionIndex);
              } else if (currentSection < quizSections.length - 1) {
                  setCurrentSection(currentSection + 1);
                  setCurrentQuestion(0);
              } else {
                  setIsComplete(true);
              }
              return;
          }
      }
      


      setCurrentQuestion(currentQuestion + 1)
    } else if (currentSection < quizSections.length - 1) {
      // Move to next section
      setCurrentSection(currentSection + 1)
      setCurrentQuestion(0)
    } else {
      // Quiz complete
      setIsComplete(true)
    }
  }

  // Navigate to previous question or section
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      setCurrentQuestion(quizSections[currentSection - 1].questions.length - 1)
    }
  }

  // Skip current question
  const handleSkip = () => {
    // Same logic as handleNext but without saving the answer
    if (currentQuestion < section.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else if (currentSection < quizSections.length - 1) {
      setCurrentSection(currentSection + 1)
      setCurrentQuestion(0)
    } else {
      setIsComplete(true)
    }
  }

  // Text-to-speech function for voice assistance
  const speakQuestion = () => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance()
      speech.text = question.text
      speech.lang = language === "english" ? "en-US" : "hi-IN" // Simplified language mapping
      window.speechSynthesis.speak(speech)
    }
  }

  // Render results page
  if (isComplete) {
    return <QuizResults answers={answers} />
  }

  // Get translation based on selected language
  const t = translations[language as keyof typeof translations] || translations.english

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-t-lg">
        <div className="flex justify-between items-center mb-4">
          <CardTitle className="text-2xl font-bold text-pink-800">Investment Quiz for Women</CardTitle>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={t.selectLanguage} />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <CardDescription className="text-lg">{section.title}</CardDescription>
        <div className="mt-2">
          <div className="flex justify-between text-sm mb-1">
            <span>{t.progress}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold">{question.text}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={speakQuestion}
              className="rounded-full"
              aria-label="Listen to question"
            >
              <Volume2 className="h-5 w-5 text-pink-600" />
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    {question.id === "sip-knowledge" &&
                      "SIPs are a way to invest a fixed amount regularly in mutual funds"}
                    {question.id === "gold-investment" &&
                      "Besides physical gold, you can invest in digital gold or gold ETFs"}
                    {question.id === "govt-schemes" &&
                      "These are special investment schemes by the government with benefits for women"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {question.type === "radio" && (
            <RadioGroup value={answers[question.id] || ""} onValueChange={handleRadioChange} className="space-y-3">
              {question.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-pink-50 transition-colors"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex items-center cursor-pointer w-full">
                    <span className="text-2xl mr-3">{option.icon}</span>
                    <span>{option.label}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {question.type === "checkbox" && (
            <div className="space-y-3">
              {question.options.map((option) => {
                const isChecked = (answers[question.id] || []).includes(option.value)
                return (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-pink-50 transition-colors"
                  >
                    <Checkbox
                      id={option.value}
                      checked={isChecked}
                      onCheckedChange={(checked) => handleCheckboxChange(option.value, checked as boolean)}
                    />
                    <Label htmlFor={option.value} className="flex items-center cursor-pointer w-full">
                      <span className="text-2xl mr-3">{option.icon}</span>
                      <span>{option.label}</span>
                    </Label>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-6">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentSection === 0 && currentQuestion === 0}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          {t.previous}
        </Button>

        <Button variant="outline" onClick={handleSkip} className="text-gray-500">
          {t.skip}
        </Button>

        <Button onClick={handleNext} className="bg-pink-600 hover:bg-pink-700 text-white flex items-center gap-1">
          {currentSection === quizSections.length - 1 && currentQuestion === section.questions.length - 1
            ? t.results
            : t.next}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

// Results component
function QuizResults({ answers }: { answers: Record<string, any> }) {
  // This would be expanded with actual recommendation logic based on answers
  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-green-800">Your Investment Recommendations</CardTitle>
        <CardDescription className="text-lg">
          Based on your answers, here are some investment options that might be suitable for you
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="p-4 border rounded-lg bg-green-50">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <Check className="h-5 w-5 text-green-600" />
              Recommended for You
            </h3>
            <p className="mb-4">Based on your profile, here are some investment options that might be suitable:</p>

            <div className="grid md:grid-cols-2 gap-4">
              {answers.role === "homemaker" && (
                <div className="p-3 bg-white rounded-md shadow-sm">
                  <h4 className="font-medium">Sukanya Samriddhi Yojana</h4>
                  <p className="text-sm text-gray-600">
                    Great for your daughter's future education and marriage expenses
                  </p>
                </div>
              )}

              {(answers["monthly-savings"] === "less-than-500" || answers["monthly-savings"] === "500-2000") && (
                <div className="p-3 bg-white rounded-md shadow-sm">
                  <h4 className="font-medium">Recurring Deposits</h4>
                  <p className="text-sm text-gray-600">Start with as little as ₹100 per month</p>
                </div>
              )}

              {answers["financial-goals"]?.includes("gold") && (
                <div className="p-3 bg-white rounded-md shadow-sm">
                  <h4 className="font-medium">Gold Savings Schemes</h4>
                  <p className="text-sm text-gray-600">Save small amounts monthly towards gold purchase</p>
                </div>
              )}

              {answers["finance-management"] === "want-to-learn" && (
                <div className="p-3 bg-white rounded-md shadow-sm">
                  <h4 className="font-medium">Basic Financial Literacy Workshops</h4>
                  <p className="text-sm text-gray-600">Join local women's groups for financial education</p>
                </div>
              )}

              {answers["income-source"]?.includes("business") && (
                <div className="p-3 bg-white rounded-md shadow-sm">
                  <h4 className="font-medium">Mudra Loan Scheme</h4>
                  <p className="text-sm text-gray-600">Government loans for small business expansion</p>
                </div>
              )}

              <div className="p-3 bg-white rounded-md shadow-sm">
                <h4 className="font-medium">Post Office Monthly Income Scheme</h4>
                <p className="text-sm text-gray-600">Safe investment with regular monthly income</p>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Visit your nearest bank or post office to learn more about these schemes</li>
              <li>Consider joining a local Self-Help Group (SHG) for group savings</li>
              <li>Download a simple expense tracking app to monitor your spending</li>
              <li>Set aside a small emergency fund before starting other investments</li>
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center border-t pt-6">
        <Button className="bg-green-600 hover:bg-green-700 text-white">Download Your Personalized Plan</Button>
      </CardFooter>
    </Card>
  )
}

