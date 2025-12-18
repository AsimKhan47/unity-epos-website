"use client";
import React, { useRef, useState, useEffect } from "react";

export default function ProductFeatures() {
  const tabs = [
    "Order & Menu Management",
    "Printing & Receipts",
    "Operations & Workflow Management",
    "Payments & Finance",
    "Inventory & Staff",
    "Customer Experience & Loyalty",
    "AI & Automation",
    "Analytics & Reporting",
    "Notifications & Support",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el && el.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollTabs = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 300;
    el.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const featuresByTab = {
    "Order & Menu Management": [
      { title: "Order Management", desc: "Manage all incoming orders from multiple channels in one place. Track status, updates, and delivery in real time.", img: "/images/ordermanagement.png" },
      { title: "Menu Management", desc: "Create and update digital menus instantly across platforms. Add categories, prices, and images with ease.", img: "/images/menu.png" },
      { title: "Order Scheduling", desc: "Let customers schedule orders for any time or date. Ideal for catering, pre-orders, or meal prep.", img: "/images/ordershcedule.png" },
      { title: "Order from Table", desc: "Allow guests to order directly from their table device. Reduce wait times and boost dining efficiency.", img: "/images/orderfromtable.png" },
      { title: "QR Menu", desc: "Allow guests to scan QR and order directly. Improve convenience and efficiency.", img: "/images/QRmenu.png" },
      { title: "Mobile and Tablet Apps", desc: "Manage operations from mobile or tablet devices. Empower staff with a smooth app experience.", img: "/images/mobileandtablet.png" },
      { title: "Online Web Store", desc: "Expand your business with an online ordering site. Accept orders, payments, and manage delivery easily.", img: "/images/onlinewebstore.png" },
      { title: "Split Bill", desc: "Simplify group payments with easy bill splitting. Let customers pay separately or share evenly.", img: "/images/splitbill.png" },
      { title: "Tip Management", desc: "Easily collect and distribute staff tips. Ensure transparency and fair allocation.", img: "/images/tipsmanagement.png" },
      { title: "Refunds Adjustment", desc: "Handle refunds or order corrections quickly. Maintain customer trust with smooth resolution.", img: "/images/refundapp.png" },
      { title: "Subscription and Meal Plan", desc: "Offer recurring meal or subscription services. Build loyalty with renewals and flexible options.", img: "/images/subscription.png" },
    ],
    "Printing & Receipts": [
      { title: "Printing System", desc: "Print orders and receipts instantly from any device. Keep kitchen and counter operations smooth and fast.", img: "/images/pritingsystem.png" },
      { title: "Remote Printing", desc: "Send orders directly to printers at any location. Perfect for cloud kitchens or multi-branch setups.", img: "/images/remoteprinting.png" },
      { title: "Receipt Customization", desc: "Add logos, messages, or offers to receipts. Enhance branding and customer experience easily.", img: "/images/reciept.png" },
    ],
    "Operations & Workflow Management": [
      { title: "Flexible Operational Hours", desc: "Set and adjust restaurant hours based on demand. Manage peak times, holidays, or special events easily.", img: "/images/flexibe.png" },
      { title: "Virtual Table Planner", desc: "Design and organize restaurant layout digitally. Assign tables and optimize seating flow effortlessly.", img: "/images/virtual.png" },
      { title: "Table Management", desc: "Streamline dine-in operations with real-time updates. Manage reservations and turnover efficiently to boost satisfaction.", img: "/images/tablemanagemt.png" },
      { title: "KDS (Kitchen Display System)", desc: "Display and track orders digitally in the kitchen. Reduce errors and improve communication.", img: "/images/KDS.png" },
      { title: "Waste Tracking", desc: "Monitor food waste and find cost-saving opportunities. Improve sustainability by tracking discarded meals.", img: "/images/waste.png" },
      { title: "Multiple Branches", desc: "Manage multiple locations from one dashboard. Maintain consistent menus, pricing, and reporting.", img: "/images/multiplebranch.png" },
      { title: "Schedule Pickup", desc: "Let customers pre-schedule their pickup orders. Enhance convenience and streamline kitchen prep.", img: "/images/schedulepick.png" },
      { title: "Custom Delivery Zones", desc: "Set delivery areas with flexible pricing rules. Ensure efficient delivery and customer satisfaction.", img: "/images/customdelivery.png" },
      { title: "Delivery Tracking", desc: "Provide real-time order tracking for both staff and customers. Improve transparency and reduce inquiries.", img: "/images/deliverytracking.png" },
      { title: "Third-Party Delivery Management", desc: "Integrate and manage third-party delivery services in one place. Simplify operations by syncing orders from apps like DoorDash, Uber Eats, or Grubhub.", img: "/images/thirdParty.png" },
    ],
    "Payments & Finance": [
      { title: "Payment Gateway Support", desc: "Accept online payments securely through multiple gateways. Simplify transactions and enhance convenience.", img: "/images/paymentgateway.png" },
      { title: "Tax Management", desc: "Automate tax calculations and compliance easily. Ensure accuracy and reduce manual accounting effort.", img: "/images/taxmanagement.png" },
      { title: "Payment Reconciliation Reports", desc: "Track and match payments with detailed reports. Identify discrepancies and maintain transparency.", img: "/images/paymentreconciliation.png" },
      { title: "3rd Party Accounting System Integrations", desc: "Connect seamlessly with popular accounting systems. Sync financial data automatically for accurate reporting.", img: "/images/thirdpartyaccount.png" },
    ],
    "Inventory & Staff":[
      { title: "Inventory and Stock Management", desc: "Easily track products, monitor stock levels, and manage inventory updates in real time to prevent shortages or overstocking.", img: "/images/inventory.png" },
      { title: "Employee Management", desc: "Streamline staff scheduling, attendance, and performance tracking to improve workforce efficiency and organization.", img: "/images/employe.png" },
    
    ],
    "Customer Experience & Loyalty":[
      { title: "Loyalty Program / Gift Cards", desc: "Reward repeat customers and boost retention with customizable loyalty points and digital gift card options.", img: "/images/loyal.png" },
      { title: "CRM Integration", desc: "Seamlessly connect customer data to your CRM for personalized engagement and improved relationship management.", img: "/images/crm.png" },
         { title: "Guest Flagging", desc: "Use the loyalty program to identify banned or restricted guests, ensuring secure and seamless customer management.", img: "/images/guest.png" },
      { title: "Custom Branding", desc: "Personalize your platform with your logo, colors, and themes to match your brand identity.", img: "/images/custom.png" },
         { title: "White Labelling", desc: "Offer the system under your own brand name with complete customization and no third-party visibility.", img: "/images/white.png" },
      { title: "Multi-Lingual Support", desc: "Engage customers in their preferred language with a fully localized and user-friendly interface.", img: "/images/multilanguage.png" },

    
    ],
     "AI & Automation":[  { title: "AI Voice Agent", desc: "Automate customer interactions with natural, human-like voice responses for faster and smarter support.", img: "/images/aivioice.png" },
      { title: "AI Sentiment Analysis", desc: "Analyze customer emotions in real time to understand satisfaction levels and improve service quality.", img: "/images/aisentiment.png" },
         { title: "Predictive Analysis", desc: "Forecast trends and customer behaviors using AI-powered insights for proactive decision-making.", img: "/images/predictive.png" },
      { title: "Data-Driven Decision Support", desc: "Leverage analytics and performance data to make smarter, evidence-based business decisions.", img: "/images/datadriven.png" },],
      "Analytics & Reporting":[
        { title: "Reporting and Analytics", desc: "Gain actionable insights with detailed reports that track performance, sales, and customer trends.", img: "/images/reporting.png" },
      { title: "Centralized Sales Data", desc: "Access all sales information from multiple locations in one unified platform for easier management.", img: "/images/centralizedsales.png" },
         { title: "Performance Comparison", desc: "Compare results across outlets or brands to identify top performers and areas for improvement.", img: "/images/performance.png" },
      { title: "Customer Segmentation Reports", desc: "Analyze customer groups based on behavior and preferences to tailor marketing and service strategies.", img: "/images/customersegmentation.png" },
       { title: "Real-Time Dashboard", desc: "Monitor live data and key metrics with an interactive dashboard for instant business visibility.", img: "/images/realtimedashboard.png" },
      ],
      "Notifications & Support":[
         { title: "Notifications", desc: "Stay informed with instant alerts for orders, updates, and important business activities.", img: "/images/notifications.png" },
         { title: "24/7 Priority Support", desc: "Get round-the-clock assistance from our expert support team whenever you need it.", img: "/images/247.png" },
      { title: "1-on-1 Onboarding", desc: "Receive personalized setup guidance to get your system running smoothly from day one.", img: "/images/onboarding.png" },
       { title: "Dedicated Account Manager", desc: "Enjoy focused support and strategic advice from a dedicated professional who understands your business.", img: "/images/dedicatedaccount.png" },
      ]
  };

  const features = featuresByTab[activeTab] || [];

  return (
 <section
      className="relative bg-[#F9F9F9] w-full md:rounded-[62px] rounded-[32px] py-10 mb-4 lg:mb-10 lg:mt-[170px] px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden"
      style={{
        backgroundColor: "#F9F9F9",
        boxShadow: "0 0 0 100vmax #F9F9F9",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      {/* Decorative Backgrounds */}
      <img src="/images/circle-2.png" alt="Decor" className="absolute top-14 left-0 w-[180px] sm:w-[220px] md:w-[290px] opacity-70 z-0" />
      <img src="/images/shadow.svg" alt="Decor" className="absolute bottom-[-10px] right-[-80px] sm:right-[-90px] md:right-[-30px] w-[300px] sm:w-[350px] md:w-[400px] z-10 opacity-80" />

      {/* Heading */}
      <div className="flex justify-center mb-5 sm:mb-6 relative z-20">
        <h2 className="text-center text-[20px]  sm:text-[22px] font-regular font-coolvetica md:text-[24px] text-[#444444]">
          <span className="text-[#008B7C]">Seamless Service </span>Starts Right Here
        </h2>
      </div>

      {/* Scrollable Tabs */}
      <div className="flex justify-center items-center  lg:px-20 gap-2 sm:gap-4 mb-6 sm:mb-8 relative z-20" >
        {/* Left Arrow */}
        <button
          onClick={() => scrollTabs("left")}
          disabled={!canScrollLeft}
          className={`bg-white border border-gray-300 px-3 sm:px-4 py-3 sm:py-3 rounded-[6px] transition ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
          }`}  style={{ boxShadow: "0 0 9px rgba(0,0,0,0.1)" }}
        >
          <img src="/images/rightvector.png" alt="Left Arrow" className="w-[40px] sm:w-[24px]" />
        </button>

        {/* Tabs */}
        <div
          ref={scrollRef}
          className="flex gap-2 sm:gap-3 bg-white rounded-[8px] py-1 px-10 sm:px-2.5 border border-[#008B7C] overflow-x-auto no-scrollbar scroll-smooth"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[14px] font-inter md:text-[16px] font-regular rounded-[6px] whitespace-nowrap transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#008B7C] text-white scale-105"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollTabs("right")}
          disabled={!canScrollRight}
          className={`bg-white border border-gray-300 px-3 sm:px-4 py-3 sm:py-3 rounded-[6px]  transition ${
            !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
          }`}  style={{ boxShadow: "0 0 9px rgba(0,0,0,0.1)" }}
        >
          <img src="/images/leftvector.png" alt="Right Arrow" className="w-[40px] sm:w-[24px]" />
        </button>
      </div>

      {/* 🔥 Auto Layout Features Grid */}
      <div className="relative z-20 max-w-[1240px] mx-auto">
        {(() => {
          const total = features.length;
          const layoutPatterns = {
            11: [3, 2, 3, 3],
            10: [3, 2, 3, 2],
            9: [3, 3, 3],
            8: [3, 2, 3],
            7: [3, 2, 2],
            6: [3, 3],
            5: [3, 2],
            4: [2, 2],
            3: [3],
            2: [2],
            1: [1],
          };

          const pattern = layoutPatterns[total] || [3, 3, 3];
          let start = 0;

          return pattern.map((count, rowIndex) => {
            const rowFeatures = features.slice(start, start + count);
            start += count;

            const gridCols =
              count === 1
                ? "grid-cols-1"
                : count === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3";

            return (
              <div key={rowIndex} className={`grid ${gridCols} gap-3 mb-3 justify-center`}>
                {rowFeatures.map((f, i) => (
                  <Card key={`row-${rowIndex}-item-${i}`} f={f} />
                ))}
              </div>
            );
          });
        })()}
      </div>
    </section>
  );
}

const Card = ({ f }) => (
  <div className="bg-white rounded-[12px] overflow-hidden p-2 sm:p-3 md:p-[8px] border border-gray-200"  style={{ boxShadow: "0 0 9px rgba(0,0,0,0.1)" }}>
    <img
      src={f.img}
      alt={f.title}
      className="rounded-[6px] object-cover  mb-[12px]"
    />
    <div className="text-left">
      <h3  className="text-[#008B7C] text-[16px] sm:text-[17px] md:text-[20px] font-inter font-semibold mb-2 sm:mb-2 md:mb-[7px]">
        {f.title}
      </h3>
      <p  className="text-[#1B1B1B] text-[12px] font-regular sm:text-[13px] font-inter md:text-[12px] mb-2">
        {f.desc}
      </p>
    </div>
  </div>
);
