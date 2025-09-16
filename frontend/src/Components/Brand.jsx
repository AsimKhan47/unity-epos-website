import React from "react";

const Brand = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto ">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[72px] font-bold text-gray-900 font-Coolvetica leading-tight text-center mb-6 sm:mb-8">
          Bring Big-Brand{" "}
          <span className="bg-gradient-to-r from-[#00C9B3] to-[#00645A] bg-clip-text text-transparent">
            Ordering Power
          </span>{" "}
          to Your Restaurant
        </h2>

        {/* Three-column grid for the feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
          {/* Card 1 */}
          <div className="bg-[#E1F1F0] rounded-lg p-6 sm:p-8 shadow-sm border border-[#d0e7e5] flex flex-col justify-between min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]">
            <div>
              <img
                src="/images/Group 764.png"
                alt="AI Voice Assist Agent"
                className="mb-4 w-full h-auto"
              />
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2 text-left">
                AI Voice Assist Agent
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-6 text-left leading-relaxed">
                An intelligent call agent that answers delivery calls, takes
                orders accurately, and sends them straight to your
                dashboard—no missed calls, no delays.
              </p>
            </div>
            <div className="mt-auto pt-4 flex flex-wrap gap-3">
              <button className="bg-[#007c74] text-white text-sm sm:text-base font-semibold py-2 px-4 rounded hover:bg-[#00625c] transition">
                Get a Free Demo
              </button>
              <button className="bg-white text-[#007c74] text-sm sm:text-base font-semibold py-2 px-4 rounded border border-[#007c74] hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E1F1F0] rounded-lg p-6 sm:p-8 shadow-sm border border-[#d0e7e5] flex flex-col justify-between min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]">
            <div>
              <img
                src="/images/Group-1057.png"
                alt="AI Smart Receipt Printing"
                className="mb-4 w-full h-auto"
              />
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2 text-left">
                AI-Powered Smart Receipt Printing
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-6 text-left leading-relaxed">
                Automatically print receipts from any branch location using AI
                routing—ensuring the right branch receives the right order
                instantly.
              </p>
            </div>
            <div className="mt-auto pt-4 flex flex-wrap gap-3">
              <button className="bg-[#007c74] text-white text-sm sm:text-base font-semibold py-2 px-4 rounded hover:bg-[#00625c] transition">
                Get a Free Demo
              </button>
              <button className="bg-white text-[#007c74] text-sm sm:text-base font-semibold py-2 px-4 rounded border border-[#007c74] hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#E1F1F0] rounded-lg p-6 sm:p-8 shadow-sm border border-[#d0e7e5] flex flex-col justify-between min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]">
            <div>
              <img
                src="/images/Rectangle 443.png"
                alt="AI-Driven Order Management"
                className="mb-4 w-full h-auto"
              />
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2 text-left">
                AI-Driven Order Management
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-6 text-left leading-relaxed">
                Predictive AI organizes and prioritizes orders during peak
                hours, helping staff stay on top of delivery, dine-in, and
                takeaway requests seamlessly.
              </p>
            </div>
            <div className="mt-auto pt-4 flex flex-wrap gap-3">
              <button className="bg-[#007c74] text-white text-sm sm:text-base font-semibold py-2 px-4 rounded hover:bg-[#00625c] transition">
                Get a Free Demo
              </button>
              <button className="bg-white text-[#007c74] text-sm sm:text-base font-semibold py-2 px-4 rounded border border-[#007c74] hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
