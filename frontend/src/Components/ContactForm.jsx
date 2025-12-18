"use client";
import React, { useEffect, useState } from "react";

const ContactForm = () => {
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

    const backendUrl = import.meta.env.VITE_BACKEND_URL; // ✅ Vite env variable
    console.log("Backend URL:", backendUrl); // check in console

    try { 
      const res = await fetch(`${backendUrl}/demo/api/form/contact-us-food-website
`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // ✅ handle empty response gracefully
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

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
        alert("❌ " + (data.error || "Server error"));
      }
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      alert("❌ Something went wrong.");
    }
  };
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="relative flex justify-center  sm:px-10  lg:px-0">
      <div className="relative w-[350px] sm:w-[450px]  mx-auto lg:w-[600px]">
        {/* Top-left floating icon */}
        <div className="absolute -top-10 -left-0 sm:-top-12 sm:-left-6 md:-top-10 md:-left-4 -translate-x-1/2 translate-y-2 rounded-md flex items-center justify-center rotate-[-12deg] z-0 animate-floatX">
          <img
            src="/images/top-icon.png"
            alt="Top Left Icon"
            className="rotate-[12deg] w-[60px] sm:w-[80px] md:w-[85px]"
          />
        </div>

        {/* Bottom-right floating icon */}
        <div className="absolute -bottom-5 -right-6 sm:bottom-6 md:-bottom-23  lg:-right-15  lg:-translate-x-10 lg:-translate-y-16 rotate-[20deg] z-50 animate-floatX">
          <img
            src="/images/top-1.png"
            alt="Bottom Right Icon"
            className="-rotate-[12deg] w-15 h-15 sm:w-10 sm:h-10 md:w-[85px] md:h-[85px]"
          />
        </div>

        {/* Main Contact Form */}
        <div className="relative bg-white rounded-[12px] shadow-[0_30px_30px_rgba(0,0,0,0.08)] border border-[#D9D9D9] w-full p-[16px] sm:p-[20px] md:p-[24px] overflow-hidden">
          <div className="relative z-10">
            <h2
              style={{ fontFamily: "coolvetica" }}
              className="text-[24px] sm:text-[28px] md:text-[32px] font-regular text-[#1B1B1B] mb-[12px] sm:mb-[14px] md:mb-[16px] leading-tight"
            >
              Let’s Get Your{" "}
              <span className="text-[#008B7C]">Restaurant Online!</span>
            </h2>

            <form  onSubmit={handleSubmit} className="space-y-[14px] sm:space-y-[15px] md:space-y-[16px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] sm:text-[15px] md:text-[16px] font-inter font-semibold text-[#303030] mb-[8px] sm:mb-[10px] md:mb-[12px]">
                    Full Name
                  </label>
                  <input
                  value={formData.name}
                onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    className="w-full border min-h-[44px] sm:min-h-[46px] md:min-h-[47px] border-[#CDCDCD] placeholder:text-[#909090] placeholder:text-[12px] rounded-md px-3 py-2 text-[14px] focus:ring-2 focus:ring-[#008B7C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[14px] sm:text-[15px] md:text-[16px] font-inter font-semibold text-[#303030] mb-[8px] sm:mb-[10px] md:mb-[12px]">
                    Email Address
                  </label>
                  <input
                    value={formData.email}
                onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="w-full border min-h-[44px] sm:min-h-[46px] md:min-h-[47px] placeholder:text-[#909090] placeholder:text-[12px] border-gray-300 rounded-md px-3 py-2 text-[14px] focus:ring-2 focus:ring-[#008B7C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] sm:text-[15px] md:text-[16px] font-inter font-semibold text-[#303030] mb-[8px] sm:mb-[10px] md:mb-[12px]">
                    Phone Number
                  </label>
                  <input
                  value={formData.phone}
                onChange={handleChange}
                name="phone"

                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full border min-h-[44px] sm:min-h-[46px] md:min-h-[47px] placeholder:text-[#909090] placeholder:text-[12px] border-gray-300 rounded-md px-3 py-2 text-[14px] focus:ring-2 focus:ring-[#008B7C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[14px] sm:text-[15px] md:text-[16px] font-inter font-semibold text-[#303030] mb-[8px] sm:mb-[10px] md:mb-[12px]">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                     value={formData.company}
                onChange={handleChange}
                name="company"
                    placeholder="Enter Restaurant Name"
                    className="w-full min-h-[44px] sm:min-h-[46px] md:min-h-[47px] placeholder:text-[#909090] placeholder:text-[12px] border border-gray-300 rounded-md px-3 py-2 text-[14px] focus:ring-2 focus:ring-[#008B7C] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] sm:text-[15px] md:text-[16px] font-inter font-semibold text-[#303030] mb-[8px] sm:mb-[10px] md:mb-[12px]">
                  Message / Additional Info
                </label>
                <textarea
                   value={formData.message}
              onChange={handleChange}
                name="message"
                  rows="3"
                  placeholder="e.g., “We want to integrate online orders and delivery.”"
                  className="w-full border placeholder:text-[#909090] placeholder:text-[12px] min-h-[70px] sm:min-h-[78px] md:min-h-[82px] border-gray-300 rounded-md px-3 py-2 text-[14px] focus:ring-2 focus:ring-[#008B7C] focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full  cursor-pointer sm:w-auto bg-[#008B7C] text-[15px] sm:text-[16px] font-inter font-medium text-[#FFFFFF] rounded-[6px] py-[10px] px-[16px] mt-[10px] hover:bg-[#007566] transition"
              >
                Get Started Today!
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
  @keyframes floatX {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20px); /* Move 20px to the right */
    }
    100% {
      transform: translateX(0); /* Back to original */
    }
  }

  .animate-floatX {
    animation: floatX 5s ease-in-out infinite; /* Duration and loop */
  }
`}</style>
    </div>
  );
};

export default ContactForm;
