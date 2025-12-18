"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import ProductFeatures from "../Components/ProductFeatures";
import ProductHero from "../Components/ProductHero";
import SupportBanner from "../Components/SupportBanner";

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-out-cubic", // easing function
      once: true, // whether animation should happen only once
      offset: 50, // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div className="">
      {/* Animate ProductHero on scroll */}
      <div data-aos="fade-up">
        <ProductHero />
      </div>

      {/* Animate ProductFeatures on scroll */}
      <div className="mt-50" data-aos="fade-up" data-aos-delay="150">
        <ProductFeatures />
      </div>

      {/* Animate SupportBanner on scroll */}
      <div data-aos="fade-up" data-aos-delay="300">
        <SupportBanner />
      </div>
    </div>
  );
};

export default Product;
