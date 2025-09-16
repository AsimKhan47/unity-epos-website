import React from "react";
import PlanHeader from "../Components/PlanHeader";
import PricingPlan from "../Components/PricingPlan";
import ContactUs from "./Contact";

function Pricing() {
  return (
    <div className="pt-10">
      {/* Header Section */}
      <PlanHeader />

      {/* Pricing Plan Section */}
      <div className=" px-6 md:px-[100px]">
        <PricingPlan />
      </div>
      <ContactUs/>
    </div>
  );
}

export default Pricing;
