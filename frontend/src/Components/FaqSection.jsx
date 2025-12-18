"use client";
import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What is a POS system and how does it help restaurants?",
    answer:
      "A POS (Point of Sale) system is software that helps restaurants manage orders, payments, inventory, and customer data. It streamlines operations, reduces errors, and improves efficiency.",
  },
  {
    question: "Can I manage both dine-in and online orders with this POS?",
    answer:
      "Yes, you can manage dine-in, takeaway, and online orders in one system easily.",
  },
  {
    question:
      "Does the POS support multiple payment methods (cash, card, wallet)?",
    answer: "Yes, it supports cash, cards, QR payments, and all major wallets.",
  },
  {
    question: "Is there a monthly subscription fee or one-time payment?",
    answer:
      "You can choose between a monthly subscription or a one-time license.",
  },
  {
    question: "How secure is the customer and payment data on this platform?",
    answer:
      "All payment and customer data is encrypted and PCI-DSS compliant.",
  },
  {
    question: "Can I track inventory and ingredient usage in real time?",
    answer:
      "Yes, ingredient and stock tracking happens automatically in real time.",
  },
  {
    question: "Does the POS work offline if the internet goes down?",
    answer:
      "Yes, it continues to work offline and syncs data once internet returns.",
  },
  {
    question: "Can I generate sales and performance reports for my restaurant?",
    answer:
      "Yes, detailed reports are available for sales, staff, and performance.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;
      if (activeIndex === i) {
        ref.style.maxHeight = ref.scrollHeight + "px";
        ref.style.opacity = "1";
        ref.style.transform = "translateY(0)";
      } else {
        ref.style.maxHeight = "0px";
        ref.style.opacity = "0";
        ref.style.transform = "translateY(40px)"; // ⬅️ slide up from bottom
      }
    });
  }, [activeIndex]);

  return (
    <section
      className="relative bg-[#F7FAF9] rounded-[32px] sm:rounded-[62px] py-[40px] sm:py-[50px] mb-[30px] sm:mb-[0px]"
      style={{
        backgroundColor: "#F9F9F9",
        boxShadow: "0 0 0 100vmax #F9F9F9",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      <img src="/images/circle.svg" className="absolute right-0" alt="" />

      <div className="px-5 sm:px-10 lg:px-[100px] text-center md:text-left relative z-10">
        <h2
        
          className=" font-coolvetica mb-[24px] text-[20px] sm:text-[24px]  inline-block font-medium text-[#444444] "
        >
        Find quick answers to the <span className="text-[#0D9C8E]">Most common Questions</span>
        </h2>
    
        {/* FAQ Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] justify-items-center">
{faqs.map((faq, index) => {
  const isActive = activeIndex === index;

  return (
    <div
      key={index}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      className={`cursor-pointer rounded-xl border transition-all duration-800 ease-in-out shadow-md relative overflow-hidden
        ${
          isActive
            ? "bg-[#E6F7F5] border-[#0D9C8E]"
            : "bg-white border-[#E6E6E6]"
        }
        p-4 sm:p-[15px] w-full max-w-[298px] flex flex-col min-h-[150px] sm:h-[190px]`}
    >
      {/* Decorative image */}
      <img
        src={isActive ? "/images/faq-bg.png" : "/images/Vector-14.png"}
        alt=""
        className="absolute bottom-0 right-0 w-[80px] object-contain opacity-90 pointer-events-none transition-all duration-800 ease-in-out"
      />

      {/* ✅ This wrapper controls alignment ONLY (no animation here now) */}
      <div
        className={`flex flex-col relative z-10 flex-1 ${
          isActive ? "justify-start" : "justify-end"
        }`}
      >
        {/* ✅ Question (Smooth but SAFE movement) */}
       <h3
  className={`text-[14px] sm:text-[15px] font-medium transition-all duration-[800ms] 
    ${isActive ? "text-[#0D9C8E] mb-0" : "text-[#222] mb-4"}`}
  style={{
    transform: isActive ? "translateY(0)" : "translateY(16px)",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
  }}
>
  {faq.question}
</h3>


        {/* ✅ CUT-PROOF ANIMATION WRAPPER */}
        <div
          ref={(el) => (contentRefs.current[index] = el)}
          className="overflow-hidden"
          style={{
            maxHeight: isActive
              ? `${contentRefs.current[index]?.scrollHeight}px`
              : "0px",
            transition: "max-height 800ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* ✅ This inner wrapper animates — NOT the clipped one */}
          <div
            style={{
              transform: isActive ? "translateY(0)" : "translateY(20px)",
              opacity: isActive ? 1 : 0,
              transition:
                "transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 800ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {faq.answer.split("\n").map((line, idx) => (
              <p
                key={idx}
                className="text-[#6C757D] text-[13px] sm:text-[14px] leading-snug mt-2"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "translateY(0)"
                    : "translateY(12px)",
                  transitionDelay: isActive ? `${idx * 120}ms` : "0ms",
                  transitionDuration: "700ms",
                  transitionTimingFunction:
                    "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
})}



</div>

      </div>
    </section>
  );
}
