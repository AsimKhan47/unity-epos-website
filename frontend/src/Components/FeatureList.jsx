"use client";
import React from "react";
import { motion } from "framer-motion";

const FeatureList = ({
  section,
  sectionIndex,
  activeFeature,
  hoveredFeature,
  handleSelect,
  handleHover,
  handleLeave,
}) => {
  // Slide-down animation for the list items
  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }, // stagger each li
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { scale: 1.03 }, // subtle scale on hover
  };

  return (
    <div>
      <h3
        style={{ fontFamily: "coolvetica" }}
        className="text-2xl sm:text-3xl lg:text-[42px] text-[#1B1B1B] mb-[20px]"
      >
        {section.title}
      </h3>

      <motion.ul
        className="mb-4"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {section.features.map((feature, featureIndex) => {
          const isActive =
            hoveredFeature[sectionIndex] === featureIndex ||
            (hoveredFeature[sectionIndex] === null &&
              activeFeature[sectionIndex] === featureIndex);

          return (
            <motion.li
              key={featureIndex}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleSelect(sectionIndex, featureIndex)}
              onMouseEnter={() => handleHover(sectionIndex, featureIndex)}
              onMouseLeave={() => handleLeave(sectionIndex)}
              className={`group flex flex-col gap-1 p-3 rounded-lg cursor-pointer t ${
                isActive
                  ? "bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
                  : "hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
              }`}
            >
              <div className="flex items-start gap-2">
                <div
                  className={`w-[28px] h-[28px] sm:w-[40px] sm:h-[40px] flex items-center justify-center rounded-[6px] border transition-colors duration-200 ${
                    isActive
                      ? "bg-[#E5F3F2] border-[#008B7C]"
                      : "bg-white border-[#1B1B1B1A] group-hover:border-[#008B7C]"
                  }`}
                >
                  <img
                    src={feature.icon}
                    alt="icon"
                    className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-contain transition-colors duration-200`}
                    style={{
                      filter: isActive
                        ? "invert(39%) sepia(89%) saturate(684%) hue-rotate(122deg) brightness(92%) contrast(91%)"
                        : "none",
                    }}
                  />
                </div>
                <span
                  className={`font-semibold font-inter text-lg sm:text-[20px] ${
                    isActive ? "text-[#008B7C]" : "text-[#444444]"
                  }`}
                >
                  {feature.title}
                </span>
              </div>
              {feature.subtitle && (
                <span
                  className={`text-sm sm:text-[16px] text-[#808080] ${
                    isActive ? "text-black" : ""
                  }`}
                >
                  {feature.subtitle}
                </span>
              )}
            </motion.li>
          );
        })}
      </motion.ul>

      <button className="text-sm cursor-pointer sm:text-[16px] py-[8px] px-[14px] sm:py-[10px] sm:px-[16px] ml-1 sm:ml-3 rounded-[6px] font-medium text-[#008B7C] border hover:text-white hover:bg-[#008B7C] transition">
        {section.button}
      </button>
    </div>
  );
};

export default FeatureList;
