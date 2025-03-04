"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const team = [
    { name: "Nidhi Patel", link: "https://www.linkedin.com/in/nidhi-patel" },
    { name: "Arsalaan", link: "https://www.linkedin.com/in/arsalaan" },
    { name: "Hitesh", link: "https://www.linkedin.com/in/hitesh" },
    { name: "Viswesh", link: "https://www.linkedin.com/in/siddh" },
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-black to-red-950 text-white py-8 px-6">
      {/* Main Content */}
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {/* Logo Section */}
        <div>
          <h2 className="text-xl font-bold text-red-500">RadioVision</h2>
          <p className="text-sm text-gray-400">Innovate. Build. Compete.</p>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-lg font-semibold text-red-500 mb-2">Features</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Live Diagnosis</li>
            <li>AI Reports</li>
            <li>Doctor Consultation</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-red-500 mb-2">Contact Us</h2>
          <p className="text-sm text-gray-300">Email: contact@radiovision.com</p>
          <p className="text-sm text-gray-300">
            Website: <a href="https://radiovision.com" className="text-red-500 hover:underline">radiovision.com</a>
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="border-t border-gray-600 mt-6 pt-4 text-center">
        <h2 className="text-lg font-semibold text-red-500 mb-2">Made by</h2>
        <div className="flex justify-center gap-6">
          {team.map((member) => (
            <a
              key={member.name}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-red-500 transition"
            >
              <FaLinkedin className="text-xl" />
              <span>{member.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
