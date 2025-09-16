import React, { useRef, useEffect, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const handleWindowLoad = () => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsVideoReady(true))
            .catch(() => setIsVideoReady(false));
        }
      }
    };

    window.addEventListener("load", handleWindowLoad);
    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-[50px]"
      style={{
        background: "linear-gradient(to bottom, #E2F5F8 0%, #ffffff 100%)",
        boxShadow: "0 0 0 100vmax #E2F5F8",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/Mask-group-(1).png')", // 🔹 change path to your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2, // 🔹 control transparency here
        }}
      />

      {/* Content */}
      <div className="relative z-10  text-center  ">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          One{" "}
          <span className="bg-gradient-to-r from-[#00C9B3] to-[#00645A] bg-clip-text text-transparent">
            AI Platform
          </span>
          . Every Restaurant Solution
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          From operations to growth, everything your restaurant needs — powered
          by one native AI platform
        </p>

        <div className="relative mx-auto w-full max-w-xl sm:max-w-2xl lg:max-w-3xl">
          <div className="relative bg-black rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-2 shadow-2xl border-[8px] sm:border-[10px] lg:border-[12px] border-[#1a1a1a]">
            <div className="bg-gray-100 h-[200px] sm:h-[280px] md:h-[360px] lg:h-[480px] rounded-xl sm:rounded-2xl lg:rounded-[1.5rem] overflow-hidden flex items-center justify-center">
              {!isVideoReady && (
                <img
                  src="/images/desktop.png"
                  alt="Food Preview"
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl lg:rounded-[1.5rem]"
                />
              )}

              <video
                ref={videoRef}
                src="/images/food-animated-video.mp4"
                className={`w-full h-full object-cover rounded-xl sm:rounded-2xl lg:rounded-[1.5rem] transition-opacity duration-500 ${
                  isVideoReady ? "opacity-100" : "opacity-0 absolute"
                }`}
                muted
                playsInline
                autoPlay
                loop
              />
            </div>
          </div>

          {/* Floating Labels */}
          <div className="absolute left-2 sm:-left-12 lg:-left-50 bottom-2 sm:bottom-6 lg:bottom-10 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-md text-xs sm:text-sm font-semibold text-gray-800">
            Print Receipts to Any Branch
          </div>
          <div className="absolute right-2 sm:-right-12 lg:-right-55 top-2 sm:top-8 lg:top-12 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-md text-xs sm:text-sm font-semibold text-gray-800">
            Order & Takeaway Management
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
