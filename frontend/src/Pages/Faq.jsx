"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import FaqHero from "../Components/FaqHero";
import FAQSection2 from "../Components/FAQSection2";
import SupportBanner from "../Components/SupportBanner";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-out-cubic", // easing function
      once: true, // animation happens only once
      offset: 50, // offset in px from the trigger point
    });
  }, []);

  return (
    <div className="">
   

      {/* Animate FAQSection2 on scroll */}
      <div data-aos="fade-up" data-aos-delay="150">
        <FAQSection2 />
      </div>

      {/* Animate SupportBanner on scroll */}
      <div data-aos="fade-up" data-aos-delay="300">
        <SupportBanner />
      </div>
    </div>
  );
};

export default Faq;
