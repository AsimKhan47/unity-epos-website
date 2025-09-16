import React, { useState } from "react";

const CustomerReviews = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  // Dummy reviews array
  const allReviews = Array(9).fill({
    stars: 5,
    text: "“The AI Voice Agent cut our call handling time in half. Customers love the faster response, and our staff can focus on service.”",
    author: "Mark K.",
    avatar: "https://i.pravatar.cc/40?img=3",
  });

  const showMoreReviews = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        background: "linear-gradient(to bottom, #E2F5F8 0%, #ffffff 100%)",
        boxShadow: "0 0 0 100vmax #E2F5F8",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-[70px]">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-center mb-10 leading-snug sm:leading-tight">
          <span className="bg-gradient-to-r from-[#00C9B3] to-[#00645A] bg-clip-text text-transparent">
            Voices
          </span>{" "}
          <span className="text-gray-800">of Our Customers</span>
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {allReviews.slice(0, visibleCount).map((review, index) => (
            <div
              key={index}
              className={`bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-lg transition duration-200 flex flex-col h-full ${
                index % 3 === 1 ? "xl:-mt-6" : ""
              }`}
            >
              {/* Stars */}
              <div className="text-teal-600 text-sm sm:text-base md:text-lg mb-3">
                {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 flex-grow leading-relaxed text-sm sm:text-base md:text-lg">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                  — {review.author}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade effect at bottom (only when more reviews exist) */}
        {visibleCount < allReviews.length && (
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}

        {/* Load More Button */}
        {visibleCount < allReviews.length && (
          <div className="text-center mt-10 relative z-10 mb-8">
            <button
              onClick={showMoreReviews}
              className="bg-teal-600 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3.5 rounded-md hover:bg-teal-700 transition shadow-md text-sm sm:text-base md:text-lg"
            >
              See More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;
