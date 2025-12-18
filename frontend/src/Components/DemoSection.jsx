import React from "react";

const DemoSection = () => {
  return (
    <section className="relative my-12 sm:my-16 lg:my-20 lg:px-26 mb-0 lg:mb-[100px] w-full">
      <div
        className="relative flex flex-col md:flex-row items-center justify-between px-2 py-10 sm:py-14 lg:py-4 bg-cover bg-center overflow-hidden "
        style={{
          backgroundImage: `url('/images/demo-bg.svg')`,
        }}
      >
        {/* ---------- Decorative Left Ellipse ---------- */}
        <img
          src="/images/Ellipse 54.svg"
          alt="Decorative left"
          className="hidden md:block absolute left-0 top-10 lg:top-1/2 lg:-translate-y-1/3 w-12 sm:w-20 lg:w-[150px] opacity-95 z-0 pointer-events-none"
        />

        {/* ---------- Left Content ---------- */}
        <div className="flex-1 relative z-10 text-center md:text-left md:pl-6 lg:pl-5 px-2 md:px-0 mt-15 md:mt-14">
          <h2
            style={{ fontFamily: "coolvetica" }}
            className="text-xl sm:text-2xl lg:text-[42px] font-regular text-justify text-[#1B1B1B] leading-snug sm:leading-tight"
          >
            Manage orders on any device
            <br />—{" "}
            <span className="text-[#008B7C]">Responsive</span>, fast, and reliable
          </h2>
          <p className="text-[#444444] mt-3 text-sm sm:text-base lg:text-[16px] font-inter font-regular max-w-[480px] mx-auto md:mx-0">
            Access your POS anytime, anywhere — on mobile, tablet, or desktop.
          </p>

          {/* ---------- Email Form ---------- */}
          <form className="relative max-w-[500px] w-full mt-6 sm:mt-8 mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="border bg-white border-[#008B7C] rounded-[6px] h-[42px] sm:h-[52px] lg:w-full w-60 text-[#808080] font-inter px-4 pr-[130px] text-sm sm:text-[16px] focus:ring-2 focus:ring-[#008B7C] focus:outline-none placeholder:text-[#808080]"
            />
            <button
              type="submit"
              className="absolute right-2 cursor-pointer top-1 lg:top-[4px] lg:right-[4px] bg-[#008B7C] hover:bg-[#007466] text-white text-[12px] sm:text-[16px] px-2 sm:px-[16px] py-[7px] sm:py-[10px] rounded-[6px] font-medium transition-colors"
            >
              Get a Free Demo
            </button>
          </form>
        </div>

        {/* ---------- Right Image ---------- */}
        <div className="relative flex justify-center md:justify-end w-full md:w-[50%] lg:w-[45%] mt-10 md:mt-0 z-20">
          <img
            src="/images/tab.png"
            alt="Tablet and Mobile Mockup"
            className="max-w-[90%] sm:max-w-[80%] lg:max-w-[420px] xl:max-w-[560px] h-auto object-contain translate-x-0 lg:translate-x-1 lg:-translate-y-4"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
