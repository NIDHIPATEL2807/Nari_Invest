"use client";
import React, { useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Aarav Mehta",
    username: "@aarav_fin",
    text: "Our AI-powered solutions streamline diagnostics, improving efficiency and accuracy for radiologists.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Kapoor",
    username: "@neha_trader",
    text: "With our platform, radiologists can access real-time imaging analytics and collaborate seamlessly.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rohan Verma",
    username: "@rohan_fx",
    text: "Enhancing radiology workflows with automated report generation and smart diagnosis assistance.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Aarav Mehta",
    username: "@aarav_fin",
    text: "Our AI-powered solutions streamline diagnostics, improving efficiency and accuracy for radiologists.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Kapoor",
    username: "@neha_trader",
    text: "With our platform, radiologists can access real-time imaging analytics and collaborate seamlessly.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rohan Verma",
    username: "@rohan_fx",
    text: "Enhancing radiology workflows with automated report generation and smart diagnosis assistance.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const clone = sliderRef.current.innerHTML;
      sliderRef.current.innerHTML += clone; // Duplicate testimonials for smooth looping
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-12 px-44">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
        Trusted by Healthcare Professionals
      </h2>
      <p className="text-center text-gray-200 mb-6">
        AI-powered solutions revolutionizing radiology workflows.
      </p>

      <div className="slider-container">
        <div ref={sliderRef} className="slider">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center  text-black gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-700"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.username}</p>
                </div>
              </div>
              <p className="text-black">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
