const PricingHero = () => {
  return (
    <section
      className="relative w-full h-[650px] md:h-[700px] flex flex-col items-center justify-center overflow-hidden rounded-[32px] md:rounded-[62px]"
      style={{
        background: `
          linear-gradient(to bottom right, #ffffff, #F9F9F9),
          url('/images/Union-3.png')
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "4000px",
        boxShadow: "0 0 0 100vmax #F9F9F9",
        clipPath: "inset(0 -100vmax)",
      }}
    >
    <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FAFAFA] to-transparent z-10" />

{/* Bottom Gradient */}
<div className="pointer-events-none absolute bottom-0 left-0 right-0 h-25 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10" />

{/* Left Gradient */}
<div className="pointer-events-none absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />

{/* Right Gradient */}
<div className="pointer-events-none absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

      
      {/* Center Content */}
      <div className="relative z-[2] text-center">
        <h2 className="text-[36px] sm:text-[48px] font-bold text-[#1B1B1B]">
          Pricing <span className="text-[#008B7C]">Plan</span>
        </h2>
        <p className="text-[#666] text-[16px] sm:text-[18px] mt-3">
          Find the perfect plan — from startup to enterprise
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
