"use client";
import React, { useState, useEffect } from "react";
import ImageSlide from "./ImageSlide";
import FeatureList from "./FeatureList";

const featuresData = [
  {
    title: "Ordering & Payments",
    features: [
      {
        title: "Scan & Pay at the Table",
        subtitle: "Customers can scan a QR code, view the menu, and pay instantly",
        icon: "/images/Vector-7.svg",
        image: "/images/scanandpay.png",
      },
      {
        title: "Digital Menus",
        subtitle: "Replace paper menus with dynamic QR menus that update in real time.",
        icon: "/images/digital-minus.svg",
        image: "/images/digitalminus.png",
      },
      {
        title: "Table-side Ordering via Staff Devices",
        subtitle: "Staff can take orders using handheld tablets or mobiles.",
        icon: "/images/feature-icon-2.svg",
        image: "/images/table.png",
      },
      {
        title: "Integrated Payment Gateways",
        subtitle: "Stripe, Clover, and more for secure checkout.",
        icon: "/images/feature-icon-3.svg",
        image: "/images/payment.png",
      },
      {
        title: "Tip Management",
        subtitle: "Simple digital + cash tip recording.",
        icon: "/images/feature-icon-4.svg",
        image: "/images/tips.png",
      },
    ],
    button: "Dive Into the Details",
  },
  {
    title: "Restaurant Operations",
    features: [
      {
        title: "Centralized Web management.",
        subtitle: "Manage all websites and platforms from one dashboard",
        icon: "/images/Group-1315.svg",
        image: "/images/centralized.png",
      },
      {
        title: "Order Printing & Receipt Customization",
        subtitle: "Flexible templates for receipts & kitchen slips.",
        icon: "/images/feature-icon-5.svg",
        image: "/images/orderandprint.png",
      },
      {
        title: "Kitchen Display System",
        subtitle: "Orders sent directly to kitchen screens for faster prep.",
        icon: "/images/Group-1084.svg",
        image: "/images/kitchend.png",
      },
      {
        title: "Schedule Pickups",
        subtitle: "Staff can take orders using handheld tablets or mobiles.",
        icon: "/images/feature-icon-7.svg",
        image: "/images/schedule.png",
      },
      {
        title: "Online Customer Ordering",
        subtitle: "Seamless online ordering for your customers.",
        icon: "/images/onile.svg",
        image: "/images/online.png",
      },
    ],
    button: "Dive Into the Details",
  },
  {
    title: "Notifications & Communication",
    features: [
      {
        title: "24/7 Customer Support",
        subtitle: "We’re here for you anytime, day or night.",
        icon: "/images/suppot.svg",
        image: "/images/support.png",
      },
      {
        title: "Real-Time Order Status Updates",
        subtitle:
          'From “Preparing” to “Out for Delivery” with live progress tracking.',
        icon: "/images/Vector-6.svg",
        image: "/images/realtime.png",
      },
      {
        title: "One-on-One On-boarding",
        subtitle: "Personalized setup to get you started smoothly.",
        icon: "/images/one-on-one.svg",
        image: "/images/one-on-onee.png",
      },
      {
        title: "Dedicated Account managers",
        subtitle: "Your success guided by a dedicated expert.",
        icon: "/images/dedicated.svg",
        image: "/images/dedicated.png",
      },
      {
        title: "Detail Data reporting & analysis",
        subtitle: "Actionable insights to grow your business.",
        icon: "/images/detailed.svg",
        image: "/images/detailed.png",
      },
    ],
    button: "Dive Into the Details",
  },
];

const KeyFeatures = () => {
  const defaultIndexes = [0, 0, 0];

  const [activeFeature, setActiveFeature] = useState(defaultIndexes);
  const [hoveredFeature, setHoveredFeature] = useState(
    featuresData.map(() => null)
  );
  const [activeImage, setActiveImage] = useState(
    featuresData.map(
      (section, i) => section.features[defaultIndexes[i]].image
    )
  );
  const [slideDirection, setSlideDirection] = useState(
    featuresData.map(() => "next")
  );

  // 🌀 Slide transition instead of fade
  const triggerImageSlide = (sectionIndex, featureIndex, direction = "next") => {
    setSlideDirection((prev) => {
      const updated = [...prev];
      updated[sectionIndex] = direction;
      return updated;
    });

    setActiveImage((prevImages) => {
      const newImages = [...prevImages];
      newImages[sectionIndex] =
        featuresData[sectionIndex].features[featureIndex].image;
      return newImages;
    });
  };

  const handleSelect = (sectionIndex, featureIndex) => {
    setActiveFeature((prev) => {
      const updated = [...prev];
      updated[sectionIndex] = featureIndex;
      return updated;
    });
    setHoveredFeature(featuresData.map(() => null));
    triggerImageSlide(sectionIndex, featureIndex, "next");
  };

  // ✅ Fixed here (use array spread, not object spread)
  const handleHover = (sectionIndex, featureIndex) => {
    setHoveredFeature((prev) => {
      const updated = [...prev];
      updated[sectionIndex] = featureIndex;
      return updated;
    });

    setActiveImage((prev) => {
      const updated = [...prev];
      updated[sectionIndex] =
        featuresData[sectionIndex].features[featureIndex].image;
      return updated;
    });
  };

  // ✅ Fixed here too (use array spread)
  const handleLeave = (sectionIndex) => {
    setHoveredFeature((prev) => {
      const updated = [...prev];
      updated[sectionIndex] = null;
      return updated;
    });

    // Reset to the currently selected (active) image when hover ends
    setActiveImage((prev) => {
      const updated = [...prev];
      updated[sectionIndex] =
        featuresData[sectionIndex].features[activeFeature[sectionIndex]].image;
      return updated;
    });
  };

  // 🔄 Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prevActive) => {
        const updated = [...prevActive];
        featuresData.forEach((section, i) => {
          if (hoveredFeature[i] !== null) return;
          const nextIndex = (prevActive[i] + 1) % section.features.length;
          updated[i] = nextIndex;
          triggerImageSlide(i, nextIndex, "next");
        });
        return updated;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [hoveredFeature]);

  // 👇 Trigger section activation when it enters viewport
  useEffect(() => {
    const sections = document.querySelectorAll(".feature-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          handleSelect(index, 0);
        }
      });
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative bg-[#F9F9F9] mt-[50px] mb-[100px] rounded-[62px] py-[50px] px-4 sm:px-8 lg:px-[100px] overflow-hidden"
      style={{
        backgroundColor: "#F9F9F9",
        boxShadow: "0 0 0 100vmax #F9F9F9",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      <h2
        style={{ fontFamily: "coolvetica" }}
        className="relative text-center text-2xl sm:text-3xl lg:text-[24px] font-regular text-[#444444] mb-[24px]"
      >
      <span className="text-[#008B7C]">Seamless Service</span>  Starts Right Here
      </h2>

      <div className="space-y-16 lg:space-y-16 relative">
        {featuresData.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            data-index={sectionIndex}
            className="feature-section grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-[132px]"
          >
            {sectionIndex % 2 === 0 ? (
              <>
                <FeatureList
                  section={section}
                  sectionIndex={sectionIndex}
                  activeFeature={activeFeature}
                  hoveredFeature={hoveredFeature}
                  handleSelect={handleSelect}
                  handleHover={handleHover}
                  handleLeave={handleLeave}
                />

                <ImageSlide
                  src={activeImage[sectionIndex]}
                  slideDirection={slideDirection[sectionIndex]}
                  title={section.title}
                />
              </>
            ) : (
              <>
                <ImageSlide
                  src={activeImage[sectionIndex]}
                  slideDirection={slideDirection[sectionIndex]}
                  title={section.title}
                />
                <FeatureList
                  section={section}
                  sectionIndex={sectionIndex}
                  activeFeature={activeFeature}
                  hoveredFeature={hoveredFeature}
                  handleSelect={handleSelect}
                  handleHover={handleHover}
                  handleLeave={handleLeave}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
