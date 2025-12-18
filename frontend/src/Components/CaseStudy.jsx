"use client";
import React from "react";

export default function CaseStudy() {
  return (
    <div className="w-full bg-white text-[#1F1F1F] font-sans">
      {/* About Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-[20px] font-semibold mb-2">
            About the <span className="text-[#008B7C]">Restaurant</span>
          </h2>
          <p className="text-[15px] leading-relaxed mb-4">
            Samino’s is a popular restaurant in Burnley, known for its fresh
            Italian dishes and variety. With growing demand for dine-in and
            takeaway, they needed a modern solution to manage rising orders and
            streamline operations.
          </p>

          <h3 className="font-semibold text-[16px] mt-6 mb-2">
            Challenges Before POS
          </h3>
          <ul className="list-disc list-inside space-y-1 text-[15px]">
            <li>Manual order-taking delays and mistakes</li>
            <li>No real-time status updates for delivery & takeaway</li>
            <li>Inventory/ingredients going untracked</li>
            <li>Difficulty in tracking daily sales performance</li>
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/images/saminos-logo.png"
            alt="Samino's Logo"
            className="w-[240px] h-auto rounded-lg shadow-sm border border-[#008B7C33]"
          />
        </div>
      </section>

      {/* Stats Before POS */}
      <section className="bg-[#F7FDFC] py-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="font-semibold text-[18px] mb-6">Stats before POS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Avg. order processing time</p>
              <h4 className="text-xl font-bold text-[#008B7C] mt-2">12 min</h4>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Customer complaint rate</p>
              <h4 className="text-xl font-bold text-[#008B7C] mt-2">18%</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Results After POS */}
      <section className="py-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="font-semibold text-[18px] mb-6">
            Results After Using POS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-[#F7FDFC] rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">
                Customer complaints dropped to
              </p>
              <h4 className="text-xl font-bold text-[#008B7C] mt-2">2%</h4>
            </div>
            <div className="p-4 bg-[#F7FDFC] rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">
                Delivery efficiency improved by
              </p>
              <h4 className="text-xl font-bold text-[#008B7C] mt-2">40%</h4>
            </div>
            <div className="p-4 bg-[#F7FDFC] rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">
                Inventory wastage reduced by
              </p>
              <h4 className="text-xl font-bold text-[#008B7C] mt-2">25%</h4>
            </div>
            <div className="p-4 bg-[#F7FDFC] rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">
                Inventory tracking reliability
              </p>
              <h4 className="text-xl font-bold text-[#008B7C] mt-2">30%</h4>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="bg-[#EAF6F5] py-12">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="/images/pos-dashboard.png"
              alt="POS Dashboard"
              className="rounded-lg shadow-md border border-[#008B7C33]"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[18px] mb-2">
              How we Did it:{" "}
              <span className="text-[#008B7C]">The Solution</span>
            </h3>
            <p className="text-[15px] leading-relaxed">
              Samino’s implemented our POS Application with Delivery &
              Takeaway Module. With features like dynamic dashboard, real-time
              insights, and centralized management, they gained better control
              over operations and improved customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#DFF5F3] py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[18px] font-semibold mb-1">
              Want to achieve the same results for your restaurant?
            </h3>
            <button className="mt-2 bg-[#008B7C] text-white px-5 py-2 rounded-md hover:bg-[#007164] transition-all">
              Book a Demo
            </button>
          </div>
          <img
            src="/images/restaurant-illustration.png"
            alt="Restaurant Illustration"
            className="w-[240px] h-auto"
          />
        </div>
      </section>
    </div>
  );
}
