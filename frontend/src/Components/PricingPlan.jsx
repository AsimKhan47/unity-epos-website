import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
  {
    title: 'AI Voice Assist Agent',
    description:
      'Handle every delivery call instantly with an AI-powered assistant that never misses an order.',
  },
  {
    title: 'Branch-to-Branch Receipt Printing',
    description:
      'Send and print receipts across outlets directly from your dashboard, no manual calls needed.',
  },
  {
    title: 'Smart Inventory Alerts',
    description:
      'Get real-time notifications when stock runs low to avoid shortages and missed sales.',
  },
  {
    title: 'Multi-Language Support',
    description:
      'Serve customers in their preferred language with built-in translation and voice recognition.',
  },
  {
    title: 'Cashier & Order Tracking',
    description:
      'Monitor payments and order status live, keeping your team and customers updated.',
  },
  {
    title: '24/7 Priority Support',
    description:
      'Get round-the-clock help whenever you need it from our dedicated support team.',
  },
];

const PricingPlan = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-1">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left - Price Card */}
        <div className="bg-[#E1F1F0] rounded-xl shadow-sm overflow-hidden w-full lg:w-1/2">
          {/* Background Pattern on Top Only */}
          <div className="h-80 bg-[url('/images/Mask-group-(1).png')] bg-repeat bg-center opacity-50" />

          {/* Content */}
          <div className="p-6 -mt-10">
            {/* Price */}
            <div className="text-5xl font-bold text-[#008B7C] mb-1">$499</div>
            <p className="text-gray-700 font-semibold mb-4">Billed Monthly</p>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-md">
              Everything you need to run smarter restaurant operations — no hidden fees.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E1F1F0] text-[#008B7C] border border-[#008B7C] px-6 py-2 rounded-md hover:bg-[#f1fefc] transition">
                Get a Free Demo
              </button>
              <button className="bg-[#008B7C] text-white px-6 py-2 rounded-md hover:bg-[#00796b] transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Right - Features List */}
        <div className="w-full lg:w-1/2 space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-gray-200 pb-5 last:border-b-0"
            >
              {/* Icon */}
              <CheckCircleIcon className="h-6 w-6 text-[#008B7C] shrink-0 mt-1" />

              {/* Title + Description */}
              <div className="flex w-full items-start gap-6">
                <h4 className="w-1/3 text-md font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="w-2/3 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
