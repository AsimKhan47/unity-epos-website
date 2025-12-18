"use client";
import React, { useState } from "react";

const WhyChooseUs = () => {
    const [hovered, setHovered] = useState(null);
  const features = [
    {
      icon: "/images/foodicon.svg",
      text: "Designed for restaurants of all sizes — from cafés to franchises",
      bgColor: "#E1F1F0",
    },
    {
      icon: "/images/up.svg",
      text: "Easy-to-use cloud-based platform (works anywhere)",
      bgColor: "#E1F1F0",
    },
    {
      icon: "/images/support.svg",
      text: "Supports contactless, fast, and reliable service",
      bgColor: "#E1F1F0",
    },
  ];

  return (
    <section className="bg-white lg:py-[50px] py-[20px] lg:mt-[20px] mt-0 px-4 sm:px-8 lg:px-[110px]">
      {/* Section Title */}
      <div className="text-center mb-[25px]">
        <h2
          style={{ fontFamily: "coolvetica" }}
          className="text-2xl px-2  sm:text-[24px] md:text-[24px] font-regular text-[#17252A]"
        >
         Built for Your <span className="text-[#008B7C]"> Advantage</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div
  className="grid grid-cols-1 gap-[16px] md:grid-cols-[68%_32%]" // ✅ custom 65/35 split
>
  {/* Left Features (3 cards total) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
    {/* First Two Features */}
    {features.slice(0, 2).map((item, i) => (
      <div
        key={i}
        className="p-[24px] rounded-[12px] relative overflow-hidden hover:bg-white  transition min-h-[180px] flex flex-col justify-between"
        style={{
          backgroundColor: item.bgColor,
          backgroundImage: "url('/images/Mask-group-11.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "370px",
        }}
      >
        {/* Icon */}
        <div style={{
    boxShadow: "4px 4px 8px rgba(0, 150, 150, 0.2)", 
  }}     className="w-[42px] h-[42px]  bg-white rounded-[6px] flex items-center justify-center ">
          <img src={item.icon} alt="icon" className="w-[20px] h-[20px]" />
        </div>

        {/* Text */}
        <p className="text-[21px] text-[#444444] font-inter font-medium mt-4">
          {item.text}
        </p>
      </div>
    ))}

    {/* Third Feature (spans 2 cols) */}
    <div
      className="p-[24px] rounded-[12px] relative overflow-hidden md:col-span-2 hover:bg-white transition min-h-[180px] flex flex-col justify-between"
      style={{
        backgroundColor: features[2].bgColor,
        backgroundImage: "url('/images/Mask-group-16.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "770px",
      }}
    >
      {/* Icon */}
    <div
  className="w-[42px] h-[42px] bg-white rounded-[6px] flex items-center justify-center"
  style={{
    boxShadow: "4px 4px 8px rgba(0, 150, 150, 0.2)", 
  }}
>
  <img src={features[2].icon} alt="icon" className="w-[20px] h-[20px]" />
</div>


      {/* Text */}
      <p className="text-[20px] text-[#444444] font-inter font-medium mt-4">
        {features[2].text}
      </p>
    </div>
  </div>

  {/* Right Highlighted Card */}
 <div
  className="p-[24px] rounded-[12px] text-white flex flex-col justify-between min-h-[460px] relative overflow-hidden"
  style={{
    backgroundColor: "#008B7C",
  }}
>
  
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/images/Mask-group-15.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "390px",
         // 👈 makes it faint/light
    }}
  />

  {/* Content above overlay */}
  <div className="relative z-10">
    <div className="mb-6">
      <div className="w-[42px] h-[42px] bg-white rounded-[6px] flex items-center justify-center  " style={{
    boxShadow: "4px 4px 8px rgba(0, 150, 150, 0.2)", 
  }}>
        <img
          src="/images/football.svg"
          alt="icon"
          className="w-[24px] h-[24px]"
        />
      </div>
    </div>

    <p className="text-[20px] text-[#FFFFFF] font-inter font-regular mt-[53px]">
      Future-ready with add-ons like <br className="hidden sm:block" /> delivery tracking, loyalty, and <br  className="hidden sm:block" /> integrations
    </p>
  </div>

  {/* Buttons */}
<div className="mt-6 flex flex-wrap gap-3 relative z-10">
  {/* Buy Now */}
  <button
    onMouseEnter={() => setHovered("buy")}
    onMouseLeave={() => setHovered(null)}
    onClick={() => setHovered("buy")} // for mobile tap
    className={`
      px-[16px] py-[5px] h-[40px] cursor-pointer rounded-[6px] text-[16px] font-medium 
      transition-colors duration-300 border
      ${
        hovered === "buy"
          ? "bg-white text-[#008B7C] border-[#008B7C]"       // hovered on buy
          : hovered === "free"
          ? "bg-white text-[#008B7C] border-[#008B7C]"           // free hovered
          : "bg-[#008B7C] text-white border-white"           // default
      }
    `}
  >
    Buy Now
  </button>

  {/* Get a Free Demo */}
  <button
    onMouseEnter={() => setHovered("free")}
    onMouseLeave={() => setHovered(null)}
    onClick={() => setHovered("free")} // for mobile tap
    className={`
      px-[16px] py-[5px] h-[40px] cursor-pointer rounded-[6px] text-[16px] font-medium 
      transition-colors duration-300 border
      ${
        hovered === "free"
          ? "bg-[#008B7C] text-white border-white"       // hovered on free
          : hovered === "buy"
          ? "bg-[#008B7C] text-white border-white"           // buy hovered
          : "bg-white text-[#008B7C] border-[#008B7C]"       // default
      }
    `}
  >
    Get a Free Demo
  </button>
</div>

</div>

</div>

    </section>
  );
};

export default WhyChooseUs;
