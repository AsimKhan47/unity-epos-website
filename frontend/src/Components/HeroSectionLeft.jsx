"use client";
import React, { useState, useEffect } from "react";

const HeroSectionLeft = () => {
  const texts = [
    "Every Restaurant Solution",
    "AI-Powered Management",
    "Smart POS for Restaurants",
    "Seamless Online Orders",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [headingHeight, setHeadingHeight] = useState("55px");

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1200;

  useEffect(() => {
    const handleResize = () => {
      setHeadingHeight(window.innerWidth < 640 ? "30px" : "55px"); // sm breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => setDisplayText((prev) => prev.slice(0, -1)), deletingSpeed);
    } else {
      timer = setTimeout(() => setDisplayText(currentText.slice(0, displayText.length + 1)), typingSpeed);
    }

    if (!isDeleting && displayText === currentText) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="w-full max-w-[497px] lg:px-0 px-2">
      {/* Badge */}
      <span className="inline-block bg-white text-[#000] text-[14px] sm:text-[15px] font-medium px-2 rounded-full">
        #1 POS Solution for Restaurants
      </span>

      {/* Heading */}
      <h1
        className="text-[32px] sm:text-[48px] md:text-[64px] -mt-2 lg:text-[68px] text-[#1B1B1B] leading-tight font-regular"
        style={{ fontFamily: "coolvetica, sans-serif" }}
      >
        One <span className="text-[#008B7C]">AI Platform</span>
      </h1>

      {/* Typing Animation */}
      <h2
        className="text-[20px] lg:-mt-3 sm:text-[28px] md:text-[36px] lg:text-[40px] text-[#1B1B1B] font-normal lg:mb-3 overflow-hidden"
        style={{
          fontFamily: "coolvetica, sans-serif",
          height: headingHeight,
          whiteSpace: "nowrap",
          display: "inline-block",
         
          animation: "blink 1s step-end infinite",
        }}
      >
        {displayText}
      </h2>

      <p className="text-[#444444] text-[13px] sm:text-[18px] font-inter text-justify md:text-[20px] mb-4 leading-[28px]">
        A modern, easy-to-use web-based POS system designed for restaurants,
        takeaways, and cafés. From contactless ordering to seamless payments,
        manage everything in one place.
      </p>

      <p className="text-[#444444] italic font-inter mb-4">
        <span className="font-medium text-[16px] sm:text-[18px]">
          Kickstart your restaurant’s growth from{" "}
        </span>
        <span className="font-bold italic font-inter text-[18px] sm:text-[20px] text-[#008B7C]">
  £19 Monthly 
</span>

      </p>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #008b7c; }
        }
      `}</style>
    </div>
  );
};

export default HeroSectionLeft;
