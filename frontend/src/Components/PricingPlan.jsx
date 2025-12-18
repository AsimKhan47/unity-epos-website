import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const PricingPlan = () => {
  const [billing, setBilling] = useState("annually");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pricing"); // Navigate to Pricing page
    window.scrollTo(0, 0); // Scroll to top
  };

  const plans = [
    {
      name: "Silver",
      price: { annually: 190, monthly: 19 },
      desc: "Basic features for small teams",
      custom: false,
      features: [false, false, false, true, false, true],
      icon: "/images/silver.svg",
    },
    {
      name: "Gold",
      price: { annually: 890, monthly: 49 },
      desc: "Most popular — everything you need to scale",
      custom: false,
      features: [false, true, true, true, false, true],
      icon: "/images/gold.svg",
    },
    {
      name: "Platinum",
      price: { annually: 1490, monthly: 89 },
      desc: "Premium features for large teams",
      custom: false,
      features: [false, true, true, true, false, true],
      icon: "/images/platinum.svg",
    },
    {
      name: "Custom",
      desc: "Tailored plan for enterprises",
      custom: true,
      features: [false, false, false, true, false, true],
      icon: "/images/custom.svg",
    },
  ];

  const features = [
    "AI Voice Agent",
    "Multiple branches",
    "Remote Printing & Reciept Customization",
    "Online Web Store",
    "24/7 Priority Support",
    "1 on 1 onboading",
  ];

  return (
    <div
      className="relative bg-[#F9F9F9] rounded-[32px] sm:rounded-[62px] overflow-hidden"
      style={{
        backgroundColor: "#F9F9F9",
        boxShadow: "0 0 0 100vmax #F9F9F9",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      {/* Decorative Images */}
      <img
        src="/images/circle.svg"
        alt="Decorative top left"
        className="absolute top-10 left-0 w-24 sm:w-40 lg:w-60 pointer-events-none z-10"
      />
      <img
        src="/images/shadow.svg"
        alt="Decorative bottom right"
        className="absolute bottom-60 lg:-right-2  -right-10 w-32 sm:w-48 lg:w-[200px] pointer-events-none z-20"
      />

      <div className="py-10 px-4 sm:px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Top Section */}
        <div className="text-center mb-10">
          <span
            style={{ fontFamily: "coolvetica" }}
            className=" text-[#444444] text-[18px] sm:text-[22px] lg:text-[24px] font-regular inline-block"
          >
             Find the<span className="text-[#008B7C]"> Perfect plan</span> — from startup to enterprise
          </span>
  <br />

          {/* Toggle */}
          <div className=" justify-center border inline-block bg-white border-[#008B7C] rounded-[6px] py-0.5 px-0.5 mt-4 space-x-2 sm:space-x-1">
            <button
              onClick={() => setBilling("annually")}
              className={`px-3 sm:px-4 lg:px-4 py-2 rounded-[6px] text-[14px] sm:text-[16px] font-medium ${
                billing === "annually"
                  ? "bg-[#008B7C] text-white"
                  : "bg-white text-[#444444]"
              }`}
            >
              Annually (Save 20%)
            </button>
            <button
              onClick={() => setBilling("monthly")}
              className={`px-3 sm:px-4 py-2 rounded-[6px] text-[14px] sm:text-[16px] font-medium ${
                billing === "monthly"
                  ? "bg-[#008B7C] text-white"
                  : "bg-white text-[#444444]"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {plans.map((plan, i) => (
          <div
  key={i}
  className={`p-[16px] rounded-[12px] min-h-[220px] min-w-[200px]  flex flex-col ${
    plan.custom ? "bg-[#008B7C] text-white" : "bg-white"
  }`}
  style={
    plan.custom
      ? {
          backgroundImage:
            "linear-gradient(rgba(0,139,124,0.9), rgba(0,139,124,0.9)), url('/images/custom-pricing.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
           boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }
      : {}
  }
>

              <div className="flex-1 flex flex-col justify-between">
  <div>
  <div className="flex gap-[8px]">
    <h3
      style={{ fontFamily: "coolvetica" }}
      className={`text-[20px] sm:text-[22px] lg:text-[24px] font-regular ${
        plan.custom ? "text-white" : "text-[#444444]"
      }`}
    >
      {plan.name}
    </h3>
    <img src={plan.icon} alt="" />
  </div>

  {/* Fixed height description */}
  <p
    className={`text-[12px] sm:text-[12px] font-inter font-medium mt-1 min-h-[48px] ${
      plan.custom ? "text-white" : "text-[#808080]"
    }`}
  >
    {plan.desc}
  </p>

  {/* Price aligned */}
  <div className="min-h-[50px] flex items-end">
    {plan.custom ? (
      <p className="text-[22px] mt-2 sm:text-[28px] lg:text-[32px] font-inter font-semibold text-white">
        Custom pricing
      </p>
    ) : (
      <p className="text-[28px] sm:text-[36px] lg:text-[42px] font-inter font-semibold text-[#444444]">
        £{plan.price[billing]}
        <span className="text-[12px] text-[#808080] font-normal">
          /{billing === "annually" ? "Year" : "Month"}
        </span>
      </p>
    )}
  </div>
</div>

</div>

              {/* Button aligned at bottom */}
              <button
                className={`mt-[8px] py-2 border  cursor-pointer border-[#008B7C] rounded-[6px] font-medium text-[14px] sm:text-[16px] w-full text-center ${
                  plan.custom
                    ? "bg-white text-[#008B7C] hover:bg-[#008B7C] hover:border-white hover:text-white"
                    : "bg-white text-[#008B7C] hover:bg-[#008B7C] hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Features Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-white table-fixed">
            <thead>
              <tr className="text-left">
                <th
                  style={{ fontFamily: "coolvetica" }}
                  className="py-1 px-2 w-1/3 font-normal text-[18px] sm:text-[20px] lg:text-[24px] text-[#444444]"
                >
                  Features
                </th>
                {plans.map((plan, i) => (
                  <th
                    key={i}
                    style={{ fontFamily: "coolvetica" }}
                    className="py-[20px] px-2 font-normal text-[14px] sm:text-[18px] lg:text-[20px] text-gray-700 text-center"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
      <tbody>
  {features.map((feature, rowIdx) => (
    <tr key={rowIdx} className="border-t border-[#008B7C]">
      <td className="py-[24px] px-2 text-[14px] sm:text-[16px] font-inter font-medium text-[#1B1B1B]">
        {feature}
      </td>

      {plans.map((plan, colIdx) => (
        <td key={colIdx} className="py-3 px-4 text-center align-middle">
          {/* Custom plan logic */}
          {plan.name === "Custom" ? (
            plan.features[rowIdx] ? (
              <img
                src="/images/tick.svg"
                className="mx-auto w-[13px] sm:w-[20px] h-[16px] sm:h-[20px]"
                alt="Included"
              />
            ) : (
              <img
                src="/images/question.svg"
                className="mx-auto w-[13px] sm:w-[20px] h-[16px] sm:h-[20px]"
                alt="Optional"
              />
            )
          ) : plan.features[rowIdx] ? (
            <img
              src="/images/tick.svg"
              className="mx-auto w-[13px] sm:w-[20px] h-[16px] sm:h-[20px]"
              alt="Included"
            />
          ) : (
            <img
              src="/images/cross-2.svg"
              className="mx-auto w-[13px] sm:w-[20px] h-[16px] sm:h-[20px]"
              alt="Not included"
            />
          )}
        </td>
      ))}
    </tr>
  ))}
</tbody>

          </table>
        </div>

        {/* CTA */}
         <div className="text-center mt-8">
      <button
        onClick={handleClick}
        className="px-4 sm:px-6 py-2 cursor-pointer text-[14px] sm:text-[16px] hover:text-white font-inter font-medium border border-[#007668] text-[#007668] rounded-[6px] hover:bg-[#007668] transition"
      >
        Dive Into the Details
      </button>
    </div>
      </div>
    </div>
  );
};

export default PricingPlan;
