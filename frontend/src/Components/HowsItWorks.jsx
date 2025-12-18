import React, { useState } from "react";

const steps = [
  {
    step: "Step 1",
    title: "Call Initiation",
    desc: "The customer dials the restaurant’s number to place an order.",
    img: "/images/step-1.png",
  },
  {
    step: "Step 2",
    title: "Agent Response",
    desc: "An AI Agent answers the call instantly, eliminating wait times or missed connections.",
    img: "/images/step-2.svg",
  },
  {
    step: "Step 3",
    title: "Order Confirmation & Placement",
    desc: "The customer states the order naturally. The Agent confirms details and ensures accuracy.",
    img: "/images/step-3.svg",
  },
  {
    step: "Step 4",
    title: "Payment",
    desc: "The Agent confirms the preferred payment method (cash, card, or digital wallet).",
    img: "/images/step-4.svg",
  },
  {
    step: "Step 5",
    title: "Kitchen Display",
    desc: "The confirmed order is sent directly to the kitchen screen, allowing chefs to begin preparation immediately.",
    img: "/images/step-5.svg",
  },
  {
    step: "Step 6",
    title: "Delivery Coordination",
    desc: "The same order is displayed on the delivery team’s screen, providing instructions for pickup and drop-off.",
    img: "/images/step-6.svg",
  },
  {
    step: "Step 7",
    title: "Completion",
    desc: "The delivery is completed, ensuring seamless service from call to doorstep.",
    img: "/images/step-7.svg",
  },
];

const HowsItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Placing an Order",
    "Delivery Process",
    "Payments & Billing",
    "Cancellation & Refunds",
    "Customer Support",
  ];

  return (
    <section className="px-4 sm:px-6 md:px-[100px] py-12 sm:py-16 bg-gradient-to-b from-[#F9F9F9]/10 to-[#F9F9F9] rounded-b-[40px] sm:rounded-b-[62px] mb-[60px] md:mb-[100px]">
      {/* Heading */}
      <div className="text-center mb-[24px]">
        <h2
          style={{ fontFamily: "coolvetica" }}
          className="inline-block text-[20px] sm:text-[24px] md:text-4xl bg-white py-[2px] px-[12px] font-regular text-[#1B1B1B] border rounded-full border-[#008B7C]"
        >
          How It <span className="text-[#008B7C]">Works</span>
        </h2>
        <p className="mt-[12px] sm:mt-[16px] font-inter font-regular text-[#444444] text-[14px] sm:text-[16px]">
          Your journey in just a few steps.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-[24px]">
        <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-0 rounded-lg border py-1 px-1 border-[#008B7C] overflow-hidden bg-white">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-[12px] sm:px-[16px] py-[8px] sm:py-[10px] text-xs sm:text-sm md:text-[16px] font-medium font-inter rounded-[6px] transition-colors ${
                activeTab === idx
                  ? "bg-[#008B7C] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-12 sm:space-y-16 mt-[30px] sm:mt-[50px]">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-[100px] ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } ${activeTab !== 0 ? "hidden" : ""}`}
          >
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3
                style={{ fontFamily: "coolvetica" }}
                className="text-[#008B7C] font-regular text-[28px] sm:text-[34px] md:text-[42px] mb-[16px] sm:mb-[24px]"
              >
                {item.step}.{" "}
                <span className="text-[#1B1B1B]">{item.title}</span>
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="max-w-[220px] sm:max-w-[320px] md:max-w-[572px] w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowsItWorks;
