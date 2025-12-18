import ContactForm from "./Contactform";
import HeroSectionLeft from "./HeroSectionLeft";



const HeroSection = () => {
  return (
    <section className="relative bg-[#D9F1F0] overflow-hidden shadow-none lg:-mt-10 mt-20 py-24">
      {/* Top-left shadow */}
      <img
        src="/images/shadow.svg"
        alt="Shadow"
        className="absolute -top-5 -left-20 w-40 h-40 lg:w-65 lg:h-65"
      />

      {/* Top-right full circle */}
      <img
        src="/images/full-circle.svg"
        alt="Full Circle"
        className="absolute lg:-top-5 bottom-0 lg:-right-15 w-200"
      />

      {/* Bottom white polygon */}
      <div
        className="absolute bottom-0 right-0 w-full h-[160px] bg-white"
        style={{ clipPath: "polygon(110% 0, 100% 100%, 0 100%)" }}
      ></div>

      {/* Main content aligned with navbar */}
      <div className="lg:mx-25 mx-3  ">
      <div className="relative z-10   flex flex-col lg:flex-row gap-10  items-center">
        {/* Left Section */}
        <div className=" flex-1 ml-0">
          <HeroSectionLeft />
        </div>

        {/* Right Section */}
        <div className="flex-1 justify-end  ">

          <div className="relative -top-0 right-0 ">
         
<ContactForm/>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
