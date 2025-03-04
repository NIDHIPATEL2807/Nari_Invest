"use client";

import React, { useState } from "react";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
const Home: React.FC = () => {
  const [isDark, setIsDark] = useState(false); // Manage dark mode state

  return (
    <div className="font-mono">
      {/* <Navbar isDark={isDark} setIsDark={setIsDark} /> */}
      <LandingPage />
      
      <Footer/>
    
    </div>
  );
};

export default Home;
