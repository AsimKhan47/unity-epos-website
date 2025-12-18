  "use client";
  import React from "react";

  export default function ProductHero() {
    return (
      <section className="relative overflow-visible lg:-mt-10 mt-20 mb-[120px] px-8">
        {/* Gradient Background Layer */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "#E0F2F1",
            boxShadow: "0 0 0 100vmax #E0F2F1",
            clipPath: "inset(0 -100vmax)",
          }}
        />

        {/* Decorative Background Circle */}
        <img
          src="/images/product-bg.svg"
          alt=""
          className="absolute lg:-top-[50px] left-1/2 -translate-x-1/2  opacity-100"
        />

        {/* Content */}
        <div className="relative text-center px-6 lg:px-[200px] pt-[100px]">
          {/* Heading */}
        
          {/* Subtitle */}
          <h1 style={{fontFamily:"coolvetica"}} className="text-[#444444] font-regular text-[14px] md:text-[24px]">
            Run your restaurant like a pro – with <span className="text-[#008B7C]"> Smart POS</span> that works for you
          </h1>

          {/* Tablet Mockup */}
          <div className="relative flex justify-center -mt-6 md:-mt-20 translate-y-10 md:translate-y-25">
            <img
              src="/images/product-screen.png"
              alt="Product Tablet"
              className=""
            />

            {/* Floating Labels */}
            <div className="absolute -left-5 md:-left-[67px] top-[50%] lg:top-[40%] animate-float ">
          <img src="/images/Group-1271.png" alt="" className="lg:w-full w-[50px]" />
            </div>

            <div className="absolute -right-5 md:right-[-140px] top-[20%] md:top-[16%] animate-float   delay-200">
            <img src="/images/Group-1272.png" alt="" className="lg:w-full w-[50px]" />
            </div>

            <div className="absolute -right-5 md:right-[-100px] bottom-[22%] md:bottom-[20%] animate-float  delay-400">
    <img src="/images/Group-1273.png" alt="" className="lg:w-full w-[50px]"  />
            </div>

            {/* Decorative Bottom Element */}
          
          </div>
        </div>
     <style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  .animate-float {
    animation: float 7s ease-in-out infinite; /* Slower float */
  }
  .delay-200 { animation-delay: 0.5s; }
  .delay-400 { animation-delay: 1s; }
`}</style>
      </section>
    );
  }
