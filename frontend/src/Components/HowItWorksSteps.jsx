import React from "react";

const steps = [
  {
    title: "Call Initiation",
    description: "The customer dials the restaurant’s number to place an order.",
    image: "/images/Group 798.png",
  },
  {
    title: "Agent Response",
    description: "An AI Agent answers the call instantly, eliminating wait times or missed connections.",
    image: "/images/Group 797.png",
  },
  {
    title: "Order Confirmation & Placement",
    description: "The customer states the order naturally. The Agent confirms details and ensures accuracy.",
    image: "/images/Group 806.png",
  },
  {
    title: "Order Processing",
    description: "The system processes the order and sends it to the kitchen.",
    image: "/images/Group 1037.png",
  },
  {
    title: "Real-Time Updates",
    description: "Customers receive live updates on their order status.",
    image: "/images/Group 1045.png",
  },
  {
    title: "Delivery Dispatch",
    description: "The order is packed and handed off to the delivery driver.",
    image: "/images/Group 1047.png",
  },
  {
    title: "Customer Feedback",
    description: "The system prompts for feedback after delivery is completed.",
    image: "/images/Group 1055.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="pt-10 px-4 sm:px-6 lg:px-[100px]">
      <div className="max-w-7xl mx-auto">
       

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse items-center gap-20 mb-24 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#000000] mb-3">
                Step {index + 1}.{" "}
                <span className="text-[#008B7C]">{step.title}</span>
              </h3>
              <p className="text-[#6C6C6C] text-base md:text-lg">{step.description}</p>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-full max-w-md"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
