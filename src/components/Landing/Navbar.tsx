"use client";

import React, { useState } from "react";
import { Sun, Moon, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Next.js navigation
import { FaRupeeSign } from "react-icons/fa"; // Finance icon
import { PiggyBank } from "lucide-react";
import { Button } from "../ui/button";

type NavbarProps = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter(); // Navigation hook

  const handleCalculatorClick = () => {
    router.push("/financial-calculators"); // Navigate to the calculators page
    setDropdownOpen(!dropdownOpen); // Open dropdown after navigation
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <PiggyBank className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">Nari Invest</span>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link href="/" className="text-sm font-medium hover:text-primary">
          Home
        </Link>
        <Link href="/budget" className="text-sm font-medium hover:text-primary">
          Budget
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Invest
        </Link>
        <Link href="/learn" className="text-sm font-medium hover:text-primary">
          Learn
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary">
          Community
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="hidden md:flex">
          Log in
        </Button>
        <Button size="sm">Sign up</Button>
      </div>
    </div>
  </header>
  );
};

export default Navbar;
