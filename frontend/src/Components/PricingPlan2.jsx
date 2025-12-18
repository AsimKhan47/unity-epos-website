import React, { useState, useEffect } from "react";

const PricingPlan2 = () => {
  const [billing, setBilling] = useState("annually");
  const [visibleCount, setVisibleCount] = useState(10);
  const [animate, setAnimate] = useState(false);

  const features = [
    "Order Management",
    "Menu Management",
    "Order Scheduling",
    "Printing System",
    "Remote Printing",
    "Reciept Customization",
    "Order from Table",
    "QR Menu",
    "Mobile and table apps",
    "Online Web Store",
    "Payment Gateway Support",
    "Delivery tracking",
    "Custom Delivery zones",
    "Flexible operational hours",
    "split bill",
    "tip management",
    "Loyalty program / gift cards",
    "Refunds adjustment",
    "Virtual table planner",
    "table management",
    "KDS",
    "inventory and stock management",
    "employee management",
    "Schedule pickup",
    "Waste tracking",
    "Multiple branches",
    "Notifications",
    "guest flagging",
    "24/7 Priority Support",
    "AI Voice Agent",
    "Custom branding",
    "third party delivery management",
    "Tax Management",
    "3rd party accounting system integrations",
    "CRM integration",
    "payment reconciliation reports",
    "1 on 1 onboading",
    "dedicated account manager",
    "White labelling",
    "Reporting and analytics",
    "centralized sales data ",
    "perfromance comparison across branches, brands etc.",
    "data driven Decison support",
    "predictive analaysis",
    "customer segmentation reports",
    "real time dashboard",
    "ai sentiment analysis",
    "multi lingual",
    "subscription and meal plan",
    "Printer",
    "Fingerprint scanner",
    "Ordering Kiosk",
    "cash drawers",
    "QR Scannerr",
    "QR Generator"
  ];

  const plans = [
    {
      name: "Silver",
      price: { annually: 190, monthly: 19 },
      desc: "Basic features for small teams",
      custom: false,
      features: {
        "Order Management": true,
        "Menu Management": true,
        "Order Scheduling": true,
        "Printing System": true,
        "Remote Printing": false,
        "Reciept Customization": false,
        "Order from Table": false,
        "QR Menu": false,
        "Mobile and table apps": false,
        "Online Web Store": true,
        "Payment Gateway Support": true,
        "Delivery tracking": false,
        "Custom Delivery zones": true,
        "Flexible operational hours": true,
        "split bill": false,
        "tip management": true,
        "Loyalty program / gift cards": true,
        "Refunds adjustment": true,
        "Virtual table planner": false,
        "table management": true,
        "KDS": true,
        "inventory and stock management": false,
        "employee management": false,
        "Schedule pickup": true,
        "Waste tracking": false,
        "Multiple branches": false,
        "Notifications": true,
        "guest flagging": false,
        "24/7 Priority Support": false,
        "AI Voice Agent": false,
        "Custom branding": false,
        "third party delivery management": false,
        "Tax Management": false,
        "3rd party accounting system integrations": false,
        "CRM integration": false,
        "payment reconciliation reports": false,
        "1 on 1 onboading": true,
        "dedicated account manager": false,
        "White labelling": false,
        "Reporting and analytics": false,
        "centralized sales data ": false,
        "perfromance comparison across branches, brands etc.": false,
        "data driven Decison support": false,
        "predictive analaysis": false,
        "customer segmentation reports": false,
        "real time dashboard": true,
        "ai sentiment analysis": false,
        "multi lingual": true,
        "subscription and meal plan": true,
        "Printer": false,
        "Fingerprint scanner": false,
        "Ordering Kiosk": false,
        "cash drawers": false,
        "QR Scannerr": false,
        "QR Generator": false
      },
      icon: "/images/silver.svg",
    },
    {
      name: "Gold",
      price: { annually: 890, monthly: 49 },
      desc: "Most popular — everything you need to scale",
      custom: false,
      features: {
        "Order Management": true,
        "Menu Management": true,
        "Order Scheduling": true,
        "Printing System": true,
        "Remote Printing": true,
        "Reciept Customization": true,
        "Order from Table": true,
        "QR Menu": true,
        "Mobile and table apps": false,
        "Online Web Store": true,
        "Payment Gateway Support": true,
        "Delivery tracking": false,
        "Custom Delivery zones": true,
        "Flexible operational hours": true,
        "split bill": true,
        "tip management": true,
        "Loyalty program / gift cards": true,
        "Refunds adjustment": true,
        "Virtual table planner": false,
        "table management": true,
        "KDS": true,
        "inventory and stock management": true,
        "employee management": true,
        "Schedule pickup": true,
        "Waste tracking": false,
        "Multiple branches":true,
        "Notifications": true,
        "guest flagging": false,
        "24/7 Priority Support": false,
        "AI Voice Agent": false,
        "Custom branding": false,
        "third party delivery management": true,
        "Tax Management": true,
        "3rd party accounting system integrations": false,
        "CRM integration": false,
        "payment reconciliation reports": false,
        "1 on 1 onboading": true,
        "dedicated account manager": false,
        "White labelling": false,
        "Reporting and analytics": false,
        "centralized sales data ": true,
        "perfromance comparison across branches, brands etc.": false,
        "data driven Decison support": false,
        "predictive analaysis": false,
        "customer segmentation reports": true,
        "real time dashboard": false,
        "ai sentiment analysis": false,
        "multi lingual": true,
        "subscription and meal plan": true,
        "Printer": false,
        "Fingerprint scanner": false,
        "Ordering Kiosk": false,
        "cash drawers": false,
        "QR Scannerr": false,
        "QR Generator": false
      },
      icon: "/images/gold.svg",
    },
    {
      name: "Platinum",
      price: { annually: 1490, monthly: 89 },
      desc: "Premium features for large teams",
      custom: false,
      features: {
        "Order Management": true,
        "Menu Management": true,
        "Order Scheduling": true,
        "Printing System": true,
        "Remote Printing": true,
        "Reciept Customization": true,
        "Order from Table": true,
        "QR Menu": true,
        "Mobile and table apps": true,
        "Online Web Store": true,
        "Payment Gateway Support": true,
        "Delivery tracking": true,
        "Custom Delivery zones": true,
        "Flexible operational hours": true,
        "split bill": true,
        "tip management": true,
        "Loyalty program / gift cards": true,
        "Refunds adjustment": true,
        "Virtual table planner": true,
        "table management": true,
        "KDS": true,
        "inventory and stock management": true,
        "employee management": true,
        "Schedule pickup": true,
        "Waste tracking": true,
        "Multiple branches": true,
        "Notifications": true,
        "guest flagging": true,
        "24/7 Priority Support": true,
        "AI Voice Agent": true,
        "Custom branding": true,
        "third party delivery management": true,
        "Tax Management": true,
        "3rd party accounting system integrations": true,
        "CRM integration": true,
        "payment reconciliation reports": true,
        "1 on 1 onboading": true,
        "dedicated account manager": true,
        "White labelling": true,
        "Reporting and analytics": true,
        "centralized sales data ": true,
        "perfromance comparison across branches, brands etc.": true,
        "data driven Decison support": true,
        "predictive analaysis": true,
        "customer segmentation reports": true,
        "real time dashboard": true,
        "ai sentiment analysis": true,
        "multi lingual": true,
        "subscription and meal plan": true,
        "Printer": true,
        "Fingerprint scanner": true,
        "Ordering Kiosk": true,
        "cash drawers": true,
        "QR Scannerr": true,
        "QR Generator": true
      },
      icon: "/images/platinum.svg",
    },
    {
      name: "Custom",
      desc: "Tailored plan for enterprises",
      custom: true,
      features: {
        "Order Management": true,
        "Menu Management": true,
        "Order Scheduling": true,
        "Printing System": true,
        "Remote Printing": false,
        "Reciept Customization": false,
        "Order from Table": false,
        "QR Menu": false,
        "Mobile and table apps": false,
        "Online Web Store": true,
        "Payment Gateway Support": true,
        "Delivery tracking": false,
        "Custom Delivery zones": true,
        "Flexible operational hours": true,
        "split bill": false,
        "tip management": true,
        "Loyalty program / gift cards": true,
        "Refunds adjustment": true,
        "Virtual table planner": false,
        "table management": true,
        "KDS": true,
        "inventory and stock management": false,
        "employee management": false,
        "Schedule pickup": true,
        "Waste tracking": false,
        "Multiple branches": false,
        "Notifications": true,
        "guest flagging": false,
        "24/7 Priority Support": false,
        "AI Voice Agent": false,
        "Custom branding": false,
        "third party delivery management": false,
        "Tax Management": false,
        "3rd party accounting system integrations": false,
        "CRM integration": false,
        "payment reconciliation reports": false,
        "1 on 1 onboading": true,
        "dedicated account manager": false,
        "White labelling": false,
        "Reporting and analytics": false,
        "centralized sales data ": false,
        "perfromance comparison across branches, brands etc.": false,
        "data driven Decison support": false,
        "predictive analaysis": false,
        "customer segmentation reports": false,
        "real time dashboard": true,
        "ai sentiment analysis": false,
        "multi lingual": true,
        "subscription and meal plan": true,
        "Printer": false,
        "Fingerprint scanner": false,
        "Ordering Kiosk": false,
        "cash drawers": false,
        "QR Scannerr": false,
        "QR Generator": false
      },
      icon: "/images/custom.svg",
    },
  ];

  const displayedFeatures = features.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, features.length));
  };

  // Animate circle & shadow every time visibleCount changes
  useEffect(() => {
    setAnimate(true);

    const timers = [
      setTimeout(() => setAnimate(false), 1000),
      setTimeout(() => setAnimate(true), 1500),
      setTimeout(() => setAnimate(false), 2500),
    ];

    return () => timers.forEach((t) => clearTimeout(t));
  }, [visibleCount]);

  return (
    <div
      className="relative flex flex-col items-center justify-start lg:-mt-5 pt-10 overflow-hidden rounded-[32px] md:rounded-[62px] px-4 sm:px-6 lg:px-25"
      style={{
        backgroundImage: "url('/images/Mask-group-19.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
        backgroundColor: "#F9F9F9",
        boxShadow: "0 0 0 100vmax #F9F9F9",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      {/* Circle & Shadow */}
      <img
        src="/images/circle.svg"
        className={`absolute left-0 top-40 transition-all duration-700 ${
          animate ? "translate-y-4 scale-110" : ""
        }`}
        alt=""
      />
      <img
        src="/images/shadow.svg"
        className={`absolute right-0 bottom-30 transition-all duration-700 ${
          animate ? "translate-y-2 scale-105" : ""
        }`}
        alt=""
      />

      {/* Top Section */}
      <div className="py-10 relative w-full max-w-[1400px]">
        <div className="text-center mb-10 px-2">
          <span className="font-coolvetica text-[#444444] text-[18px] sm:text-[22px] lg:text-[24px] font-regular inline-block">
            Find the<span className="text-[#008B7C]"> Perfect Plan</span> — from
            startup to enterprise
          </span>

          {/* Toggle Billing */}
          <div className="flex justify-center mt-4">
            <div className="flex border bg-white border-[#008B7C] rounded-[6px] py-0.5 px-0.5 space-x-1 sm:space-x-2">
              <button
                onClick={() => setBilling("annually")}
                className={`px-3 sm:px-4 py-2 rounded-[6px] text-[14px] sm:text-[16px] font-medium ${
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
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-[16px] rounded-[12px] min-h-[220px] min-w-[200px] flex flex-col ${
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
              {/* Card Content */}
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

                  <p
                    className={`text-[12px] sm:text-[12px] font-inter font-medium mt-1 min-h-[48px] ${
                      plan.custom ? "text-white" : "text-[#808080]"
                    }`}
                  >
                    {plan.desc}
                  </p>

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

                <button
                  className={`mt-[8px] py-2 border cursor-pointer border-[#008B7C] rounded-[6px] font-medium text-[14px] sm:text-[16px] w-full text-center ${
                    plan.custom
                      ? "bg-white text-[#008B7C] hover:bg-[#008B7C] hover:border-white hover:text-white"
                      : "bg-white text-[#008B7C] hover:bg-[#008B7C] hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-white table-fixed">
            <thead>
              <tr className="text-left">
                <th
                  className="py-2 px-0 w-1/4 font-normal text-[18px] sm:text-[20px] lg:text-[24px] text-[#444444]"
                  style={{ fontFamily: "coolvetica" }}
                >
                  Features
                </th>
                {plans.map((plan, i) => (
                  <th
                    key={i}
                    className="py-[20px] text-right font-normal text-[14px] pr-4 sm:text-[18px] lg:text-[20px] text-gray-700"
                    style={{ fontFamily: "coolvetica" }}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedFeatures.map((feature, rowIdx) => (
                <tr key={rowIdx} className="border-t border-[#008B7C]">
                  <td className="py-[24px] px-0 text-[14px] sm:text-[16px] font-inter font-medium text-[#1B1B1B]">
                    {feature}
                  </td>
                  {plans.map((plan, colIdx) => (
                    <td key={colIdx} className="py-3 pl-10 pr-4 text-right">
                      {plan.features[feature] ? (
                        <img
                          src="/images/tick.svg"
                          className="inline-block w-[13px] sm:w-[20px] h-[16px] sm:h-[20px]"
                          alt="Included"
                        />
                      ) : plan.custom ? (
                        <img
                          src="/images/question.svg"
                          className="inline-block w-[13px] sm:w-[20px] h-[16px] sm:h-[20px]"
                          alt="Optional"
                        />
                      ) : (
                        <img
                          src="/images/cross-2.svg"
                          className="inline-block w-[13px] sm:w-[20px] h-[16px] sm:h-[20px]"
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

        {/* Show More Button */}
        {visibleCount < features.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-4 sm:px-6 py-2 text-[14px] sm:text-[16px] hover:text-white font-inter font-medium border border-[#007668] text-[#007668] rounded-[6px] hover:bg-[#007668] transition"
            >
              Show More Features
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPlan2;
