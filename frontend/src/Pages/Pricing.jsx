"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import PricingHero from "../Components/PricingHero";
import PricingPlan2 from "../Components/PricingPlan2";
import SupportBanner from "../Components/SupportBanner";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-out-cubic", // easing function
      once: true, // animate only once
      offset: 50, // trigger point offset
    });
  }, []);

  return (
    <div className="">
      {/* Animate PricingHero on scroll */}
  

      {/* Animate PricingPlan2 on scroll */}
      <div data-aos="fade-up" data-aos-delay="150">
        <PricingPlan2 />
      </div>

      {/* Support Banner with animation */}
      <div className="mt-[50px]" data-aos="fade-up" data-aos-delay="300">
        <SupportBanner />
      </div>
    </div>
  );
}
