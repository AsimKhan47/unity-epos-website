"use client";
import React, { useState } from "react";
import StaticImage from "./StaticImage";

const reviews = [
  {
    text: "The AI Voice Agent completely streamlined our workflow. It reduced missed calls and  improved  accuracy,  helping  us serve customers faster and more efficiently.",
    author: "Maria K",
    company: "Burger Town",
    stars: 4,
     experiences: [
    "We handle orders twice as fast now!",
    "So much less manual work thanks to automation.",
    "No more missed calls or customer delays.",
    "Our process feels smoother and more accurate than ever.",
    "Productivity is up, and customers are happier too!"
  ]
  },
  {
    text: "Since using the AI Voice Agent, our customer satisfaction scores have gone up dramatically. It’s like having an extra team member.",
    author: "John D",
    company: "Tech Solutions",
    stars: 5,
     experiences: [
    "We handle orders twice as fast now!",
    "So much less manual work thanks to automation.",
    "No more missed calls or customer delays.",
    "Our process feels smoother and more accurate than ever.",
    "Productivity is up, and customers are happier too!"
  ]
  },
  {
    text: "Our call handling is faster and more efficient thanks to the AI Voice Agent. The team loves the improved workflow.",
    author: "Sophia R",
    company: "Retail Corp",
    stars: 4,
  },
  {
    text: "We’ve reduced customer waiting time significantly with the AI Voice Agent. Our team is happier, and so are our customers.",
    author: "Alex T",
    company: "Fast Foods",
    stars: 5,
  },
];

export default function CustomerReviewsWithScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrev = () => {
    if (currentIndex === 0) return; // prevent going before first
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setFade(true);
    }, 250);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? prev : prev + 1));
      setFade(true);
    }, 250);
  };

  const handlePlayPause = () => setIsPlaying((prev) => !prev);

  const review = reviews[currentIndex];

  return (
    <section
      className="w-full p-4 sm:p-6 md:p-[20px] relative overflow-hidden rounded-[62px] mb-0 lg:mb-[50px]"
      style={{
        backgroundImage: `url('/images/reviewbg.png')`,
        clipPath: "inset(0 -100vmax)",
        boxShadow: "0 0 0 100vmax #FAFAFA",
      }}
    >
      {/* Soft gradient fade edges */}
      {/* Top Gradient */}
<div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FAFAFA] to-transparent z-10" />

{/* Bottom Gradient */}
<div className="pointer-events-none absolute bottom-0 left-0 right-0 h-25 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10" />

{/* Left Gradient */}
<div className="pointer-events-none absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />

{/* Right Gradient */}
<div className="pointer-events-none absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

      

      {/* Section Heading */}
      <div className="w-full flex justify-center bg-white pt-10">
        <div className=" inline-block">
          <h1
            style={{ fontFamily: "coolvetica" }}
            className="text-[24px] text-center text-[#1B1B1B]"
          >
          The <span className="text-[#008B7C]">Voices</span> Behind Our Success
          </h1>
        </div>
      </div>

<div className="flex flex-col md:flex-row items-stretch px-6 sm:px-10 lg:px-19 py-8  gap-[10px]">
  {/* 🖼️ Left Side: Static Image */}
  <div className="w-full md:w-[45%] flex items-center justify-center">
    <div className="w-full lg:h-[520px] rounded-2xl overflow-hidden ">
      <StaticImage isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
    </div>
  </div>

  {/* 💬 Right Side: Review */}
<div className="w-full md:w-[60%] mt-3 flex justify-center">
  <div className="relative w-full bg-white border border-gray-200 rounded-2xl shadow-md p-4 sm:p-6 md:p-[20px] flex flex-col">

    {/* Review Carousel Container */}
    <div
      className="overflow-hidden relative"
      style={{ minHeight: "400px" }} // fixed height to prevent jumping
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviews.map((review, index) => (
          <div key={index} className="flex-shrink-0 w-full px-2">
            
            {/* Review Content */}
            <div className="flex flex-col justify-between h-full">
              {/* Logo / Image & Stars */}
              <div className="mb-4 flex justify-between items-center sm:mb-2">
                <img src="/images/Group-1652.png" alt="Review logo" />
                <div className="flex items-center -mt-3 gap-1 text-[#008B7C]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < 4 ? (
                        <svg className="w-6 h-6" fill="#008B7C" viewBox="0 0 24 24">
                          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.401 8.173L12 18.896l-7.335 3.867 1.401-8.173L.132 9.21l8.2-1.192L12 .587z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="#008B7C" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.401 8.173L12 18.896l-7.335 3.867 1.401-8.173L.132 9.21l8.2-1.192L12 .587z" />
                        </svg>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text */}
              <p className="text-[#1B1B1B] mb-3 text-[15px] sm:text-[17px] md:text-[24px] text-justify font-regular leading-[32px]">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center justify-end mb-4">
                <p className="text-[18px] sm:text-[20px] font-medium text-[#1B1B1B]">
                  - {review.author},{" "}
                  <span className="font-light">{review.company}</span>
                </p>
              </div>

              {/* Experiences */}
              <div className="bg-[#FAFAFA] rounded-[8px]">
                <p className="bg-[#E0F4F0] border border-[#008B7C66] text-[#008B7C] font-medium rounded-md px-4 py-1 text-sm sm:text-base">
                  Here's What Our Customers Experienced
                </p>
                <ul className="ml-10 py-4 space-y-1 text-sm sm:text-[16px] text-[#444444] relative">
                  {review.experiences?.map((item, idx) => (
                    <li key={idx} className="relative">
                      <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#008B7C] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Dots & Arrows */}
    <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4 sm:gap-0">

      {/* Dots */}
      <div className="flex mt-4 items-center justify-center sm:justify-start gap-2 flex-wrap">
        {reviews.map((_, idx) => (
          <div
            key={idx}
            className={`h-[6px] rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-[60px] sm:w-[80px] bg-[#008B7C]"
                : "w-[35px] sm:w-[50px] bg-gray-200"
            }`}
          ></div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex items-center gap-3">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-[38px] sm:w-[42px] h-[38px] sm:h-[42px] border border-gray-300 rounded-md text-gray-500 transition ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:text-[#008B7C] hover:border-[#008B7C]"
          }`}
        >
          <svg className="h-6 w-6 sm:h-7 sm:w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === reviews.length - 1}
          className={`w-[38px] sm:w-[42px] h-[38px] sm:h-[42px] border border-gray-300 rounded-md text-gray-500 transition ${
            currentIndex === reviews.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:text-[#008B7C] hover:border-[#008B7C]"
          }`}
        >
          <svg className="h-6 w-6 sm:h-7 sm:w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>


</div>

    </section>
  );
}
