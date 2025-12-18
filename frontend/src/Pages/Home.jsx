"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import DemoSection from "../Components/DemoSection";
import SupportBanner from "../Components/SupportBanner";
import HeroSection from "../Components/HeroSection";
import Carousal from "../Components/Carousal";
import Corefeatures from "../Components/Corefeatures";
import WhyChooseUs from "../Components/WhyChooseUs";
import StatsSection from "../Components/StatsSection";
import PricingPlan from "../Components/PricingPlan";
import ContactUs from "../Components/Contact";
import CustomerReviews from "../Components/CustomerReviews";
import FaqSection from "../Components/FaqSection";
import AIPoweredOrderSection from "../Components/AIPoweredOrderSection";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true, // run animation once
      offset: 120, // start animating 120px before the element enters view
      duration: 1200, // default duration if not specified individually
      easing: "ease", // smooth transition
    });
  }, []);

  return (
    <div className="relative ">
      {/* 🎯 Hero Section */}
      <section data-aos="fade-up" data-aos-delay="0">
        <HeroSection />
      </section>

      {/* 🚀 Floating WhatsApp Chatbot */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-110 transition-transform duration-200"
        >
          <img
            src="/images/chatbot.png"
            alt="Chatbot"
            className="w-[50px] h-[50px] animate-bounce drop-shadow-lg"
          />
        </a>
      </div>

      {/* 🌀 Main Sections with AOS Animations */}
      <section data-aos="fade-up" data-aos-delay="100">
        <Carousal />
      </section>

      <section data-aos="fade-right" data-aos-delay="200">
        <Corefeatures />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <AIPoweredOrderSection />
      </section>

      <section data-aos="fade-left" data-aos-delay="300">
        <WhyChooseUs />
      </section>

      <section data-aos="zoom-in" data-aos-delay="300">
        <StatsSection />
      </section>

      <section data-aos="fade-up" data-aos-delay="200" className="mb-[100px] mt-[20px]">
        <SupportBanner />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <PricingPlan />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <DemoSection />
      </section>

      <section  id="CustomerReviews" data-aos="fade-up" data-aos-delay="200">
        
       <CustomerReviews />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <ContactUs />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <FaqSection />
      </section>
    </div>
  );
};

export default Home;
