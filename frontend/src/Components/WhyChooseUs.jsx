import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-20">
      {/* Section 1: Manage Anywhere */}
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 p">
        {/* Left Text Section */}
        <div>
          <h2 className="text-4xl lg:text-[72px] font-bold text-[#17252A] leading-tight mb-6">
            Manage Anywhere <br />
            On{" "}
            <span className="bg-gradient-to-r from-[#00C9B3] to-[#00645A] bg-clip-text text-transparent">
              Every Screen
            </span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Handle orders seamlessly across mobile, tablet, or desktop—stay in
            control no matter where you are.
          </p>
          <button className="px-6 py-2 border-2 border-[#008B7C] text-[#008B7C] rounded-lg font-medium hover:bg-[#008B7C] hover:text-white transition">
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full flex justify-center">
          <img
            src="/images/Group 770 (1).png"
            alt="Device screens"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Section 2: Why Choose Us */}
      <div className="mt-28 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Left: Cards */}
          <div className="lg:col-span-2 flex flex-col lg:flex-row items-stretch justify-between gap-6">
            {/* Card 1 - With Background */}
            <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden min-h-[250px]">
              <div
                className="absolute inset-0 bg-[url('/images/Mask-group-(1).png')] bg-repeat bg-center opacity-100"
              ></div>
              <div className="relative bg-[#E1F1F0]/80 h-full p-6 flex flex-col justify-end rounded-xl">
                <h3 className="text-lg font-semibold text-[#17252A] mb-2">
                  Smarter With AI
                </h3>
                <p className="text-sm text-gray-700">
                  AI streamlines orders, kitchen flow, and service for faster, smarter
                  operations.
                </p>
              </div>
            </div>

            {/* Cards 2 & 3 - Stacked */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <div className="bg-[#E1F1F0]/80 rounded-xl p-6 h-full">
                <h3 className="text-lg font-semibold text-[#17252A] mb-2">
                  All-in-One Simplicity
                </h3>
                <p className="text-sm text-gray-700">
                  Run your restaurant on one seamless platform—no extra apps needed.
                </p>
              </div>

              <div className="bg-[#E1F1F0]/80 rounded-xl p-6 h-full">
                <h3 className="text-lg font-semibold text-[#17252A] mb-2">
                  Always By Your Side
                </h3>
                <p className="text-sm text-gray-700">
                  Get 24/7 expert support from setup to daily growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Why Choose Us heading */}
          <div className="text-left">
            <h2 className="text-4xl lg:text-[72px] font-bold text-[#17252A] leading-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-[#00C9B3] to-[#00645A] bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
