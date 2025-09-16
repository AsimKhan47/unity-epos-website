import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    inquiry_type: "General",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully ✅");
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          company: "",
          inquiry_type: "General",
          message: "",
        });
      } else {
        alert("Failed to send ❌");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="mb-12 bg-[#E1F1F0] rounded-3xl mt-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/Mask-group-(1).png')] bg-cover bg-center pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 py-10 sm:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-[70px] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#00C9B3] to-[#00645A] bg-clip-text text-transparent">
                Get
              </span>{" "}
              in Touch
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              with us
            </h3>
            <p className="text-gray-600 mb-8 text-base sm:text-lg md:text-xl">
              We’re here to help! Whether you have a question about our services,
              need assistance with your account, or want to provide feedback, our
              team is ready to assist you.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-[#008B7C] rounded-lg p-4 bg-white">
                <p className="font-semibold">Email:</p>
                <p className="text-gray-600 break-all">Hello@gmail.com</p>
              </div>
              <div className="border border-[#008B7C] rounded-lg p-4 bg-white">
                <p className="font-semibold">Whatsapp</p>
                <p className="text-gray-600">+123 4567 8910</p>
              </div>
              <div className="border border-[#008B7C] rounded-lg p-4 bg-white">
                <p className="font-semibold">Phone:</p>
                <p className="text-gray-600">+123 4567 8910</p>
              </div>
              <div className="border border-[#008B7C] rounded-lg p-4 bg-white">
                <p className="font-semibold">Social Media</p>
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="hover:opacity-80">
                    <img src="/images/linkdn.png" alt="LinkedIn Logo" className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <img src="/images/insta.png" alt="Instagram Logo" className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <img src="/images/facebook.png" alt="Facebook Logo" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    className="w-full border border-[#CDCDCD] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className="w-full border border-[#CDCDCD] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className="w-full border border-[#CDCDCD] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company / Restaurant</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Company or Restaurant Name"
                    className="w-full border border-[#CDCDCD] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-medium mb-1">Inquiry Type</label>
                <select
                  name="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={handleChange}
                  className="w-full border border-[#CDCDCD] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="General">General</option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Message"
                  className="w-full border border-[#CDCDCD] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 h-28"
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500">
                By contacting us via our WhatsApp you are agreeing to the
                collection and use of your information in accordance with our{" "}
                <span className="text-teal-600 underline">Privacy Policy</span>.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#008B7C] text-white w-full sm:w-auto px-6 py-3 rounded-lg hover:bg-[#00645A] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
