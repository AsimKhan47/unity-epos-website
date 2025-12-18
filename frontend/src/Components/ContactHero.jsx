const ContactHero = () => {
  return (
    <div
      className="h-[400px] lg:-mt-[120px] mt-20 rounded-[62px] bg-no-repeat bg-cover bg-center flex items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/Mask-group-5.png')`,
      }}
    >
      {/* Gradient overlays on sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-80 pointer-events-none"></div>

      <div className="relative max-w-2xl z-10">
        <h1
          style={{ fontFamily: "coolvetica" }}
          className="text-[18px] rounded-full md:text-[24px] font-regular text-[#008B7C] mb-4 "
        >
           Questions <span className="text-[#444444]"> or</span> feedback?  <span className="text-[#444444]">We’re here to help—reach out anytime</span>
        </h1>
        <p className="text-[16px] md:text-[17px] font-medium font-inter text-[#444444]">
        
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
