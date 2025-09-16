import React, { useState } from "react";

const PlanHeader = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <section className="relative pt-[100px]  max-w-7xl mx-auto text-center">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[url('/images/Mask-group-(1).png')] bg-repeat opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <h1 className="relative text-4xl md:text-5xl font-extrabold text-[#17252A]">
        One Simple <span className="text-[#008B7C]">Plan</span>
      </h1>

      <p className="relative mt-3 max-w-xl mx-auto text-gray-700 text-sm md:text-base">
        Affordable solutions that make food management simple, efficient, and waste-free
      </p>

      {/* Toggle buttons */}
      <div className="relative mt-8 inline-flex rounded-md border border-[#008B7C] overflow-hidden">
        {["Monthly", "Yearly"].map((cycle) => (
          <button
            key={cycle}
            onClick={() => setBillingCycle(cycle)}
            className={`px-5 py-2 text-sm font-semibold  transition ${
              billingCycle === cycle
                ? "bg-[#008B7C] text-white"
                : "bg-white text-[#008B7C]"
            }`}
          >
            {cycle}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PlanHeader;
