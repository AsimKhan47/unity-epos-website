"use client";
import React from "react";

const SupportBanner = () => {
  return (
    <div className="bg-white overflow-hidden">
      <section className="relative w-full flex justify-center px-4 sm:px-8 lg:px-[100px] mt-[30px] sm:mt-[40px] lg:mt-[45px]">
        <div
          className="relative w-full bg-[#D3F0EE] rounded-[16px] flex flex-col md:flex-row items-center justify-between pt-[20px] sm:pt-[30px] pb-8 sm:pb-10 lg:pb-[3px] px-6 sm:px-3 "
          style={{
            backgroundImage: `url('/images/supportbackground.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "40% auto",
          }}
        >
          {/* === Left Decoration Shape === */}
          <img
            src="/images/Group 1308.svg"
            alt="Left Decoration"
            className="absolute left-[35px] sm:left-[30px] lg:left-[60px] top-0 lg:top-[40px] w-[180px] sm:w-[300px] lg:w-[466px] opacity-90 pointer-events-none"
          />

          {/* === Left Side: Robot + Waves === */}
          <div className="relative flex items-end justify-center md:justify-start mt-8 md:mt-0 w-full md:w-1/2">
            {/* Left Wave Bubble */}
            <div className="absolute top-[10px] sm:top-[20px] left-[-10px] sm:left-[35px] z-10">
              <img
                src="/images/wave-3.svg"
                alt="Voice Wave"
                className="h-7 sm:h-8 lg:h-[70px] object-contain"
              />
            </div>

            {/* Robot */}
            <div className="relative z-20 -mt-[50px] sm:-mt-[53px] overflow-visible">
              <img
                src="/images/robot-men.png"
                alt="AI Robot"
                className="h-[200px] sm:h-[250px] lg:h-[332px] lg:ml-10 -ml-6  object-contain mx-auto"
              />

              {/* Right Wave Bubble */}
              <div className="absolute top-[80px] sm:top-[110px] lg:top-[130px] -right-[10px] sm:-right-[50px] lg:-right-[120px] rounded-md">
                <img
                  src="/images/wave-2.svg"
                  alt="Voice Wave"
                  className="h-7 sm:h-[45px] lg:h-[65px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* === Right Side: Text + Button === */}
          <div className="text-center md:text-left mt-8 md:-mt-7 z-30 w-full md:w-1/2 px-2 sm:px-4">
            <h2
              style={{ fontFamily: "coolvetica" }}
              className="text-[22px] sm:text-[32px] lg:text-[44px] text-[#1B1B1B] leading-tight font-normal"
            >
              Call Us Anytime – Get
              <br />
              <span className="text-[#008B7C] font-normal">
                AI-Powered
              </span>{" "}
              Support in Seconds
            </h2>

            <button className="mt-6 bg-[#008B7C] cursor-pointer hover:bg-white hover:text-[#008B7C] border border-[#008B7C] transition text-white px-6 sm:px-[18px] py-2 sm:py-[8px] rounded-[6px] text-[13px] sm:text-[15px] lg:text-[16px] font-medium">
              Start Your Call
            </button>
          </div>
        </div>

        {/* Right Ellipse Image */}
        <img
          src="/images/Ellips-65.svg"
          className="absolute right-4 sm:right-10 lg:right-25 bottom-0 translate-y-4 sm:translate-y-2 w-[100px] sm:w-[160px] lg:w-[180px] h-auto"
          alt=""
        />
      </section>
    </div>
  );
};

export default SupportBanner;
