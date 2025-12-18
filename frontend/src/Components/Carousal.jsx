"use client";
import React, { useRef, useEffect, useState } from "react";

// 🟢 Use objects for logo pairs
const items = [
  { normal: "/images/icons-1.png", color: "/images/logo-1.png" },
  { normal: "/images/icons-3.png", color: "/images/hot-oven.png" },
  { normal: "/images/icons-2.png", color: "/images/logo-6.png" },
  { normal: "/images/icons-6.png", color: "/images/logo-4.png" },
  { normal: "/images/icons-5.png", color: "/images/logo-3.png" },
  { normal: "/images/icons-4.png", color: "/images/logo-5.png" },
];

const Carousal = () => {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const contentWidth = container.scrollWidth / 3;
    container.style.setProperty("--content-width", `${contentWidth}px`);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:px-[100px] bg-white py-8 sm:py-10 md:py-14">
      {/* Heading */}
    

      <p  className="text-sm sm:text-[14px] md:text-[24px] font-normal font-coolvetica text-[#444444] mb-6 text-center ">
      <span className="text-[#008B7C]"> Empowering food entrepreneurs</span>   with tools to serve better and grow faster
      </p>

      {/* Carousel */}
      <div className="relative w-full max-w-[1230px] overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Infinite sliding container */}
        <div ref={containerRef} className="flex gap-10 cursor-pointer animate-marquee">
          {[...items, ...items, ...items].map((logo, index) => {
            const actualIndex = index % items.length;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(actualIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex-shrink-0 w-20 h-12 sm:w-28 sm:h-14 md:w-36 md:h-16 lg:w-48 lg:h-24 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  hoveredIndex === actualIndex ? "scale-105" : "bg-transparent"
                }`}
              >
                <img
                  src={
                    hoveredIndex === actualIndex
                      ? logo.color
                      : logo.normal
                  }
                  alt={`Logo ${index}`}
                  className="object-contain w-[145px] h-[70px] transition-all duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
