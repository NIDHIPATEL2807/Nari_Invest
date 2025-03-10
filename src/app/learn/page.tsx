"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Coins, Award, BookOpen, TrendingUp, Shield, Landmark, FileText } from "lucide-react"

export default function NariInvestHub() {
  const [language, setLanguage] = useState<"english" | "hindi">("english")
  const [userCoins, setUserCoins] = useState(0)
  const [userBadges, setUserBadges] = useState<string[]>([])
  const [completedModules, setCompletedModules] = useState<string[]>([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Calculate progress based on completed modules
    const totalModules = modules.reduce((acc, module) => acc + module.lessons.length, 0)
    const completedPercentage = (completedModules.length / totalModules) * 100
    setProgress(completedPercentage)
  }, [completedModules])

  const handleModuleComplete = (moduleId: string, badgeName: string) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId])
      setUserCoins(userCoins + 50)

      if (!userBadges.includes(badgeName)) {
        setUserBadges([...userBadges, badgeName])
      }
    }
  }

  const translations = {
    english: {
      title: "Nari Invest Financial Education Hub",
      subtitle: "Empowering women through financial literacy",
      beginnerLevel: "Beginner Level",
      intermediateLevel: "Intermediate Level",
      advancedLevel: "Advanced Level",
      yourProgress: "Your Progress",
      yourRewards: "Your Rewards",
      coins: "Coins",
      badges: "Badges",
      completeModule: "Complete Module",
      moduleCompleted: "Module Completed!",
      language: "Language",
      hindi: "Hindi",
      english: "English",
    },
    hindi: {
      title: "नारी इन्वेस्ट वित्तीय शिक्षा केंद्र",
      subtitle: "वित्तीय साक्षरता के माध्यम से महिलाओं को सशक्त बनाना",
      beginnerLevel: "प्रारंभिक स्तर",
      intermediateLevel: "मध्यम स्तर",
      advancedLevel: "उन्नत स्तर",
      yourProgress: "आपकी प्रगति",
      yourRewards: "आपके पुरस्कार",
      coins: "सिक्के",
      badges: "बैज",
      completeModule: "मॉड्यूल पूरा करें",
      moduleCompleted: "मॉड्यूल पूरा हुआ!",
      language: "भाषा",
      hindi: "हिंदी",
      english: "अंग्रेज़ी",
    },
  }

  const modules = [
    {
      id: "basics",
      level: "beginner",
      title: language === "english" ? "Financial Basics" : "वित्तीय मूल बातें",
      description: language === "english" ? "Learn the fundamentals of personal finance" : "व्यक्तिगत वित्त की मूल बातें सीखें",
      icon: <BookOpen className="h-5 w-5" />,
      badge: language === "english" ? "Finance Fundamentals" : "वित्त मूल सिद्धांत",
      lessons: [
        {
          id: "budget",
          title: language === "english" ? "Creating a Budget" : "बजट बनाना",
          content:
            language === "english"
              ? "Learn how to track income and expenses to create a sustainable budget."
              : "आय और व्यय को ट्रैक करके एक टिकाऊ बजट बनाना सीखें।",
        },
        {
          id: "savings",
          title: language === "english" ? "Savings Fundamentals" : "बचत के मूल सिद्धांत",
          content:
            language === "english"
              ? "Understand the importance of emergency funds and saving strategies."
              : "आपातकालीन फंड और बचत रणनीतियों के महत्व को समझें।",
        },
      ],
    },
    {
      id: "govt-schemes",
      level: "beginner",
      title: language === "english" ? "Government Schemes for Women" : "महिलाओं के लिए सरकारी योजनाएँ",
      description:
        language === "english"
          ? "Explore financial schemes designed for women"
          : "महिलाओं के लिए डिज़ाइन की गई वित्तीय योजनाओं का अन्वेषण करें",
      icon: <Shield className="h-5 w-5" />,
      badge: language === "english" ? "Scheme Expert" : "योजना विशेषज्ञ",
      lessons: [
        {
          id: "sukanya",
          title: language === "english" ? "Sukanya Samriddhi Yojana" : "सुकन्या समृद्धि योजना",
          content:
            language === "english"
              ? "A small savings scheme for girl children with tax benefits and high interest rates."
              : "लड़कियों के लिए कर लाभ और उच्च ब्याज दरों के साथ एक छोटी बचत योजना।",
        },
        {
          id: "mudra",
          title: language === "english" ? "Pradhan Mantri MUDRA Yojana" : "प्रधानमंत्री मुद्रा योजना",
          content:
            language === "english"
              ? "Loans up to ₹10 lakh for non-corporate, non-farm small/micro enterprises."
              : "गैर-कॉर्पोरेट, गैर-कृषि छोटे/सूक्ष्म उद्यमों के लिए ₹10 लाख तक के ऋण।",
        },
      ],
    },
    {
      id: "tax-benefits",
      level: "intermediate",
      title: language === "english" ? "Tax Benefits for Women" : "महिलाओं के लिए कर लाभ",
      description:
        language === "english"
          ? "Understand tax deductions and benefits available to women"
          : "महिलाओं के लिए उपलब्ध कर कटौती और लाभों को समझें",
      icon: <FileText className="h-5 w-5" />,
      badge: language === "english" ? "Tax Planner" : "कर योजनाकार",
      lessons: [
        {
          id: "section80c",
          title: language === "english" ? "Section 80C Deductions" : "धारा 80C कटौती",
          content:
            language === "english"
              ? "Tax deductions up to ₹1.5 lakh on investments like PPF, ELSS, and life insurance."
              : "पीपीएफ, ईएलएसएस और जीवन बीमा जैसे निवेशों पर ₹1.5 लाख तक की कर कटौती।",
        },
        {
          id: "homeloans",
          title: language === "english" ? "Home Loan Benefits" : "होम लोन लाभ",
          content:
            language === "english"
              ? "Additional tax benefits for women homeowners with lower interest rates."
              : "कम ब्याज दरों के साथ महिला गृहस्वामियों के लिए अतिरिक्त कर लाभ।",
        },
      ],
    },
    {
      id: "investing",
      level: "intermediate",
      title: language === "english" ? "Investment Strategies" : "निवेश रणनीतियाँ",
      description:
        language === "english"
          ? "Learn how to grow your wealth through smart investments"
          : "स्मार्ट निवेश के माध्यम से अपनी संपत्ति बढ़ाना सीखें",
      icon: <TrendingUp className="h-5 w-5" />,
      badge: language === "english" ? "Smart Investor" : "स्मार्ट निवेशक",
      lessons: [
        {
          id: "mutual-funds",
          title: language === "english" ? "Mutual Funds Basics" : "म्यूचुअल फंड की मूल बातें",
          content:
            language === "english"
              ? "Understanding different types of mutual funds and how to invest in them."
              : "विभिन्न प्रकार के म्यूचुअल फंड और उनमें निवेश कैसे करें, यह समझना।",
        },
        {
          id: "stocks",
          title: language === "english" ? "Stock Market Introduction" : "शेयर बाजार परिचय",
          content:
            language === "english"
              ? "Learn the basics of stock market investing and building a portfolio."
              : "शेयर बाजार निवेश और पोर्टफोलियो बनाने की मूल बातें सीखें।",
        },
      ],
    },
    {
      id: "retirement",
      level: "advanced",
      title: language === "english" ? "Retirement Planning" : "सेवानिवृत्ति योजना",
      description:
        language === "english"
          ? "Secure your future with effective retirement strategies"
          : "प्रभावी सेवानिवृत्ति रणनीतियों के साथ अपने भविष्य को सुरक्षित करें",
      icon: <Landmark className="h-5 w-5" />,
      badge: language === "english" ? "Retirement Guru" : "सेवानिवृत्ति गुरु",
      lessons: [
        {
          id: "pension",
          title: language === "english" ? "National Pension System" : "राष्ट्रीय पेंशन प्रणाली",
          content:
            language === "english"
              ? "Understanding NPS and its benefits for long-term retirement planning."
              : "एनपीएस और दीर्घकालिक सेवानिवृत्ति योजना के लिए इसके लाभों को समझना।",
        },
        {
          id: "estate",
          title: language === "english" ? "Estate Planning" : "संपदा योजना",
          content:
            language === "english"
              ? "How to plan your estate and ensure wealth transfer to your heirs."
              : "अपनी संपत्ति की योजना कैसे बनाएं और अपने उत्तराधिकारियों को धन हस्तांतरण सुनिश्चित करें।",
        },
      ],
    },
  ]

  const t = translations[language]

  return (
    <div className="container mx-auto py-6 max-w-8xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="language-toggle">{t.language}</Label>
          <div className="flex items-center space-x-2">
            <span className={language === "hindi" ? "font-bold" : ""}>{t.hindi}</span>
            <Switch
              id="language-toggle"
              checked={language === "english"}
              onCheckedChange={(checked) => setLanguage(checked ? "english" : "hindi")}
            />
            <span className={language === "english" ? "font-bold" : ""}>{t.english}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="beginner">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginner">{t.beginnerLevel}</TabsTrigger>
              <TabsTrigger value="intermediate">{t.intermediateLevel}</TabsTrigger>
              <TabsTrigger value="advanced">{t.advancedLevel}</TabsTrigger>
            </TabsList>

            <TabsContent value="beginner" className="space-y-4 mt-4">
              {modules
                .filter((module) => module.level === "beginner")
                .map((module) => (
                  <Card key={module.id}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          {module.icon}
                          <CardTitle>{module.title}</CardTitle>
                        </div>
                        {completedModules.includes(module.id) && (
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            {t.moduleCompleted}
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {module.lessons.map((lesson) => (
                          <AccordionItem key={lesson.id} value={lesson.id}>
                            <AccordionTrigger>{lesson.title}</AccordionTrigger>
                            <AccordionContent>{lesson.content}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => handleModuleComplete(module.id, module.badge)}
                        disabled={completedModules.includes(module.id)}
                        className="w-full bg-red-400 text-black"
                      >
                        {completedModules.includes(module.id) ? t.moduleCompleted : t.completeModule}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-4 mt-4">
              {modules
                .filter((module) => module.level === "intermediate")
                .map((module) => (
                  <Card key={module.id}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          {module.icon}
                          <CardTitle>{module.title}</CardTitle>
                        </div>
                        {completedModules.includes(module.id) && (
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            {t.moduleCompleted}
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {module.lessons.map((lesson) => (
                          <AccordionItem key={lesson.id} value={lesson.id}>
                            <AccordionTrigger>{lesson.title}</AccordionTrigger>
                            <AccordionContent>{lesson.content}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => handleModuleComplete(module.id, module.badge)}
                        disabled={completedModules.includes(module.id)}
                        className="w-full  bg-red-400 text-black"
                      >
                        {completedModules.includes(module.id) ? t.moduleCompleted : t.completeModule}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4 mt-4">
              {modules
                .filter((module) => module.level === "advanced")
                .map((module) => (
                  <Card key={module.id}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          {module.icon}
                          <CardTitle>{module.title}</CardTitle>
                        </div>
                        {completedModules.includes(module.id) && (
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            {t.moduleCompleted}
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {module.lessons.map((lesson) => (
                          <AccordionItem key={lesson.id} value={lesson.id}>
                            <AccordionTrigger>{lesson.title}</AccordionTrigger>
                            <AccordionContent>{lesson.content}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => handleModuleComplete(module.id, module.badge)}
                        disabled={completedModules.includes(module.id)}
                        className="w-full  bg-red-400 text-black"
                      >
                        {completedModules.includes(module.id) ? t.moduleCompleted : t.completeModule}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.yourProgress}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-2" />
              <p className="text-center mt-2">{Math.round(progress)}%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.yourRewards}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Coins className="h-5 w-5 text-yellow-500" />
                  <span>{t.coins}</span>
                </div>
                <span className="font-bold">{userCoins}</span>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span>{t.badges}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {userBadges.map((badge) => (
                    <Badge key={badge} className="bg-purple-100 text-purple-800 p-2">
                      {badge}
                    </Badge>
                  ))}
                  {userBadges.length === 0 && (
                    <p className="text-sm text-muted-foreground col-span-2">
                      {language === "english" ? "Complete modules to earn badges!" : "बैज अर्जित करने के लिए मॉड्यूल पूरा करें!"}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

