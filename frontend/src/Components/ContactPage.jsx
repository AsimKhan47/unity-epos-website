"use client";
import React, { useState } from "react";
import ContactLeft from "./Contactleft";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
      const res = await fetch(`${backendUrl}/demo/api/form/contact-us-food-website`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Message sent successfully!");
        setFormData({
  "email": "user.demo@gmail.com",
  "name": "Demo User",
  "phone": "123456789",
  "company": "SipOperations",
  "inquiry_type": "Hello type",
  "message" :"I am testing new contact us form api"
});
      } else {
        alert("❌ " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <div className="bg-[#008B7C] rounded-[20px] mt-10 md:mt-20 -mb-5 mx-2 sm:mx-10 md:mx-[100px]">
      <div className="mx-4 sm:mx-[24px] py-6 md:py-[24px] flex flex-col md:flex-row gap-6 md:gap-[28px] rounded-2xl overflow-hidden min-h-[520px]">
        
        {/* Left Form (60%) */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:flex-1 rounded-[12px] bg-white p-4 sm:p-6 lg:p-[24px] flex flex-col"
        >
          {/* <div className="mb-4">
            <span
              style={{ fontFamily: "coolvetica" }}
              className="inline-block text-base sm:text-[24px]  font-regular  "
            >
              <span className="text-black">Got a</span>{" "}
              <span className="text-[#008B7C]"> Question? </span>We’re Here!
            </span>
          </div> */}

          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1 flex flex-col">
              <label className="font-semibold text-sm sm:text-[16px] font-inter text-[#303030] mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="border border-gray-300 rounded-[6px] px-3 py-3 text-[12px] sm:text-[14px] text-[#303030] focus:border-[#008B7C] outline-none"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="font-semibold text-sm sm:text-[16px] font-inter text-[#303030] mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="border border-gray-300 rounded-[6px] px-3 py-3 text-[12px] sm:text-[14px] text-[#303030] focus:border-[#008B7C] outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1 flex flex-col">
              <label className="font-semibold text-sm sm:text-[16px] font-inter text-[#303030] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="border border-gray-300 rounded-[6px] px-3 py-3 text-[12px] sm:text-[14px] text-[#303030] focus:border-[#008B7C] outline-none"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="font-semibold text-sm sm:text-[16px] font-inter text-[#303030] mb-1">
                Company / Restaurant Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter Company / Restaurant Name"
                className="border border-gray-300 rounded-[6px] px-3 py-3 text-[12px] sm:text-[14px] text-[#303030] focus:border-[#008B7C] outline-none"
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div className="mb-4">
            <label className="font-semibold text-sm sm:text-[16px] font-inter text-[#303030] mb-3">
              Inquiry Type
            </label>
            <div className="relative mt-1">
              <select
                name="inquiryType"
               value={formData.inquiryType} 
               onChange={handleChange}
                className="w-full border border-gray-300 h-[49px] rounded-[6px] px-3 pr-8 text-[12px] sm:text-[14px] text-[#303030] focus:border-[#008B7C] outline-none appearance-none"
              >
                <option value="">Select Inquiry Type</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Sales</option>
                <option>Feedback</option>
              </select>
              <img
                src="/images/down-arrow-3.svg"
                alt="arrow"
                className="w-[13px] h-[7px] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="font-semibold text-sm sm:text-[16px] font-inter text-[#303030] mb-4">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Message"
              className="w-full border border-gray-300 mt-1 rounded-[6px] px-3 py-3 text-[12px] sm:text-[14px] min-h-[141px] resize-none focus:border-[#008B7C] outline-none"
            ></textarea>
            <p className="text-[10px] text-[#909090] mt-1 leading-snug">
              By providing us with your information you are consenting to the
              collection and use of your information in accordance with our{" "}
              <a href="#" className="underline text-[#008B7C]">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-[#008B7C]">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#008B7C] cursor-pointer hover:bg-white hover:border-[#008B7C] border hover:text-[#008B7C] text-white text-[14px] sm:text-[16px] font-medium px-5 py-2 mt-12 rounded-[6px]  w-full sm:w-28"
          >
            Submit
          </button>
        </form>

        {/* Right Side (40%) */}
        <div className="w-full md:w-[400px] flex justify-center">
          <ContactLeft />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
