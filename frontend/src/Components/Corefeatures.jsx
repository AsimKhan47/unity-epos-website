import React from "react";
import { Mic, MapPin, PlusCircle, User } from "lucide-react";

const Corefeatures = () => {
  return (
    <div
      className="relative w-full rounded-[3rem] bg-[#E2F5F8]"
      style={{
        boxShadow: "0 0 0 100vmax #E2F5F8",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      <div className="rounded-[3rem] overflow-hidden">
        {/* Section wrapper */}
        <div className="relative pt-16 md:pt-20 pb-16 md:pb-20 rounded-t-[3rem]">
          <div className="container mx-auto px-4 sm:px-8 md:px-[100px] lg:px-[100px] xl:px-[100px]">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[72px] font-bold font-Coolvetica mb-4 text-[#17252A] leading-tight">
                <span className="bg-gradient-to-r from-[#00C9B3] to-[#00645A] bg-clip-text text-transparent">
                  Core Features
                </span>{" "}
                & Benefits
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left large card */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#008B7C] flex flex-col justify-between min-h-[280px] sm:min-h-[300px] lg:min-h-[200px]">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#17252A]">
                    AI Voice Assist Agent
                  </h3>
                  <div className="bg-[#008B7C] p-1 rounded-full">
                    <Mic className="text-white" size={18} />
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Answer delivery calls instantly with an AI-powered assistant
                  that takes orders accurately and hands them off to your system.
                </p>
              </div>

              {/* Right column - 3 stacked cards */}
              <div className="flex flex-col gap-4">
                {/* 1. Branch Printing */}
                <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#008B7C] flex flex-col justify-between min-h-[280px] sm:min-h-[300px] lg:min-h-[200px]">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#17252A]">
                      Branch-to-Branch Receipt Printing
                    </h3>
                    <div className="bg-[#008B7C] p-1 rounded-full">
                      <MapPin className="text-white" size={18} />
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm sm:text-base">
                    Print receipts directly to any branch printer from your
                    dashboard, ensuring smooth cross-location operations.
                  </p>
                </div>

                {/* 2 & 3. Side-by-side cards */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* One-Tap Toppings */}
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#008B7C] flex flex-col justify-between min-h-[280px] sm:min-h-[300px] lg:min-h-[150px]">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#17252A]">
                        One-Tap Toppings
                      </h3>
                      <div className="bg-[#008B7C] p-1 rounded-full">
                        <PlusCircle className="text-white" size={18} />
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600 text-sm sm:text-base">
                      Add toppings, sides, and sauces in seconds using colorful,
                      easy-to-read buttons.
                    </p>
                  </div>

                  {/* Cashier & Order Details */}
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#008B7C] flex flex-col justify-between min-h-[280px] sm:min-h-[300px] lg:min-h-[150px]">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#17252A]">
                        Cashier & Order Details
                      </h3>
                      <div className="bg-[#008B7C] p-1 rounded-full">
                        <User className="text-white" size={18} />
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600 text-sm sm:text-base">
                      Track orders by staff, method, delivery time, and payment
                      info.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Features Grid */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corefeatures;
