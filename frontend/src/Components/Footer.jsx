const Footer = () => {
  return (
    <footer  className="relative max-auto max-w-[1440px] 
             rounded-t-[62px]  /* ✅ top rounded */
             pt-[50px] pb-[24px] text-gray-700 
             px-6 sm:px-10 lg:px-[100px] 
             overflow-hidden"
  style={{
    backgroundColor: "#F9F9F9",
    boxShadow: "0 0 0 100vmax #F9F9F9",
    clipPath: "inset(0 -100vmax)",
  }}
   >
    <div className="absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-[#F9F9F9] before:rounded-tl-[62px] before:rounded-tr-[62px]"></div>
       <img
        src="/images/footer-bg.svg"
        alt="Footer Background"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[494px] opacity-90 pointer-events-none"
      />
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-12 mb-[48px]">

        <div className="flex flex-col  ">
          {/* Logo */}
          <div className="mb-4">
            <img
              src="/images/logo.svg"
              alt="UnityEPOS"
              className="w-[205px] h-[80px]"
            />
          </div>

          {/* Description */}
          <p className="text-gray-700 font-medium mt-3 text-[14px] sm:text-[16px] mb-4 font-inter max-w-[250px]" style={{ fontFamily: "inter, sans-serif" }}>
            Smarter POS Solutions for Restaurants, Cafes & Takeaways
          </p>

          {/* Social Media */}
          <h4 className="text-lg sm:text-[20px] text-[#000000] font-regular mt-[35px] mb-[12px] font-coolvetica" style={{ fontFamily: "coolvetica, sans-serif" }}>
         Our Socials
          </h4>
          <div className="flex space-x-[10px]">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/linkdin.svg"
                alt="LinkedIn Logo"
                className="w-4 h-4 sm:w-[16px] sm:h-[16px]"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/insta.svg"
                alt="Instagram Logo"
                className="w-4 h-4 sm:w-[16px] sm:h-[16px]"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/facebook.svg"
                alt="Facebook Logo"
                className="w-4 h-4 sm:w-[8px] sm:h-[16px]"
              />
            </a>
          </div>
        </div>

        {/* Quick Links and Resources */}
        <div className="flex flex-col sm:flex-row    gap-12 lg:gap-12 sm:ml-[20px]  ml-10  ">
          <div>
            <h4 className="text-lg sm:text-[20px] text-[#000000] font-Regular mb-4 font-coolvetica" style={{ fontFamily: "Coolvetica, sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-4 text-[15px] sm:text-[16px] ">
              <li>
                <a
                  href="#home"
                  className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                   className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                    className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#about"
                    className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
            How Its Work
                </a>
              </li>
                 <li>
                <a
                  href="#Resources"
                  className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-[20px] text-[#000000] font-Regular mb-4 font-coolvetica" style={{ fontFamily: "Coolvetica, sans-serif" }}>
          Support
            </h4>
            <ul className="space-y-4 text-[15px] sm:text-[16px]">
              <li>
                <a
                  href="#help"
              className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
             FAQs
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
            className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
               Documentation
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                  Live Chat Support
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                 className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                 Call Us Anytime
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg sm:text-[20px] text-[#000000] font-regular mb-4 font-inter "
              style={{ fontFamily: "Coolvetica, sans-serif" }}>
              Get Started
            </h4>
            <ul className="space-y-4 text-[15px] sm:text-[16px]">
              <li>
                <a
                  href="#home"
                className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                  Get a Free Demo
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="font-inter text-[#1B1B1B] font-regular" style={{fontFamily:"inter, sans-serif"}}
                >
                  Start Free Trial
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4
              className="text-lg sm:text-[20px] text-[#000000] font-regular mb-4 font-inter "
              style={{ fontFamily: "Coolvetica, sans-serif" }}
            >
              Get the Latest Updates & Offers
            </h4>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="lg:w-[332px] h-[49px] w-[300px] -ml-4 lg:ml-0 px-2 py-2 pr-28 border-1 border-[#008B7C] bg-white  rounded-md focus:outline-none focus:ring-2 focus:ring-[#008B7C]"
              />
              <button
                type="button"
                className="absolute top-1/2 right-1 font-regular  text-[16px] -translate-y-1/2 bg-[#008B7C] text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
                style={{fontFamily:"inter,sans serif"}}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-[1px] border-[#008B7C] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#000000]">
        <span className="text-sm sm:text-[16px] font-regular text-center sm:text-left"
        style={{fontFamily:"coolvetica,sans serif"}}>
          Copyright <span style={{fontFamily:"cutive"}}> ©</span>  2025 <span  className="text-sm text-[#008B7C] sm:text-[16px] font-regular "
        style={{fontFamily:"coolvetica,sans serif"}}>UnityEPOS</span> All rights reserved
        </span>
       <div className="flex justify-center items-center text-[12px] text-[#1B1B1B] font-inter">
  <a href="#cookie" className="px-3 border-r text-[12px] text-[#1B1B1B] font-inter border-gray-300 text-center">
    Cookie Settings
  </a>
  <a href="#privacy-legal" className="px-3 text-[12px] text-[#1B1B1B] font-inter border-r border-gray-300 text-center">
    Privacy
  </a>
  <a href="#website-terms" className="px-3 text-[12px] text-[#1B1B1B] font-inter border-r border-gray-300 text-center">
    Website Terms
  </a>
  <a href="#disclaimer" className="px-3  text-[12px] text-[#1B1B1B] font-inter text-center">
    Disclaimer
  </a>
</div>


      </div>
    </footer>
  );
};

export default Footer;
