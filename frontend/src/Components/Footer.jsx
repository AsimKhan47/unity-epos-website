

const Footer = () => {
  return (
    <footer className="bg-[#E1F1F0] rounded-t-4xl text-gray-700 py-10 px-6 sm:px-10 lg:px-[100px]">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
        
        {/* Social Media Section */}
        <div className="flex flex-col lg:pt-[130px]">
          <h4 className="text-lg sm:text-xl text-[#000000] font-bold mb-4 font-coolvetica">
            Follow Us on
          </h4>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkdn.png" alt="LinkedIn Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/insta.png" alt="Instagram Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" alt="Facebook Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
          </div>
        </div>

        {/* Quick Links and Resources */}
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
          <div>
            <h4 className="text-lg sm:text-xl text-[#000000] font-bold mb-4 font-coolvetica">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[15px] sm:text-[16px]">
              <li><a href="#home" className="font-inter text-[#1B1B1B] font-semibold">Home</a></li>
              <li><a href="#features" className="font-inter text-[#1B1B1B] font-semibold">Features</a></li>
              <li><a href="#pricing" className="font-inter text-[#1B1B1B] font-semibold">Pricing</a></li>
              <li><a href="#about" className="font-inter text-[#1B1B1B] font-semibold">About Us</a></li>
              <li><a href="#contact" className="font-inter text-[#1B1B1B] font-semibold">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl text-[#000000] font-bold mb-4 font-coolvetica">
              Resources
            </h4>
            <ul className="space-y-2 text-[15px] sm:text-[16px]">
              <li><a href="#help" className="text-[#1B1B1B] font-semibold font-inter">Help Center</a></li>
              <li><a href="#faqs" className="text-[#1B1B1B] font-semibold font-inter">FAQs</a></li>
              <li><a href="#blog" className="text-[#1B1B1B] font-semibold font-inter">Blog / Guides</a></li>
              <li><a href="#privacy" className="text-[#1B1B1B] font-semibold font-inter">Privacy Policy</a></li>
              <li><a href="#terms" className="text-[#1B1B1B] font-semibold font-inter">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#000000]">
        <span className="font-cutive text-sm sm:text-[16px] font-bold text-center sm:text-left">
          © 2023. All rights reserved
        </span>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
          <a href="#cookie" className="text-[#1B1B1B] font-semibold font-inter text-[14px]">Cookie Settings</a>
          <a href="#privacy-legal" className="text-[#1B1B1B] font-semibold font-inter text-[14px]">Privacy</a>
          <a href="#website-terms" className="text-[#1B1B1B] font-semibold font-inter text-[14px]">Website Terms</a>
          <a href="#disclaimer" className="text-[#1B1B1B] font-semibold font-inter text-[14px]">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
