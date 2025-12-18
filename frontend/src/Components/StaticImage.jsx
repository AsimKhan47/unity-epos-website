"use client";
import React from "react";

function StaticImage({ isPlaying, handlePlayPause }) {
  return (
    <div className="relative  flex items-center justify-center">
      <img
        src="/images/Group-1653.png"
        alt="Video thumbnail"
        className=" rounded-2xl transition-transform duration-300"
      />
      <button
        onClick={handlePlayPause}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-white  p-5 rounded-full shadow-lg hover:bg-[#006f63] transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-white bg-[#FFFFFF]/50 p-5 rounded-full shadow-lg hover:bg-[#006f63] transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default React.memo(StaticImage);
