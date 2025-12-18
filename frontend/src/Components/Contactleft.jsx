"use client";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function ContactLeft() {
  return (
    <div className="relative flex flex-col justify-between items-center min-h-[610px] w-full sm:w-[395px] bg-white border border-[#008B7C] rounded-[12px] overflow-hidden p-4">
      {/* Soft white gradient (dark white → light white) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] pointer-events-none z-0"></div>

      {/* Top Right Social Icons */}
      <div className="absolute top-4 right-4 flex gap-2 text-[#008B7C] z-10">
        <img src="/images/insta-2.svg" alt="" />
        <img src="/images/facebook-2.svg" alt="" />
        <img src="/images/link.svg" alt="" />
      </div>

      {/* Center Circle Section */}
    <div className="relative flex justify-center items-center flex-1 w-full z-10">
  {/* Replace drawn circles with an image */}
  <img
    src="/images/border-1.svg"
    alt="circle background"
    className="absolute w-[250px] sm:w-[300px] h-auto right-[10px] sm:right-[40px] pointer-events-none select-none"
  />
    <img
    src="/images/border-2.svg"
    alt="circle background"
    className="absolute w-[200px] sm:w-[260px] h-auto right-[40px] sm:right-[85px] pointer-events-none select-none"
  />
   <img
    src="/images/border-3.svg"
    alt="circle background"
    className="absolute w-[180px] sm:w-[230px] h-auto right-[70px] sm:right-[130px] pointer-events-none select-none"
  />
  <img
    src="/images/border-4.svg"
    alt="circle background"
    className="absolute w-[150px] sm:w-[200px] h-auto right-[100px] sm:right-[180px] pointer-events-none select-none"
  />

  {/* Center Logo (transparent background) */}
  <div className="border border-[#008B7C] bg-transparent rounded-full lg:-translate-x-38 -translate-x-22 h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] shadow-[0_0_30px_#008B7C]">
    <div className="rounded-full bg-[#008B7C] translate-x-1 translate-y-1 h-[110px] w-[110px] sm:h-[150px] sm:w-[150px] flex justify-center items-center">
      <img
        src="/images/Vector (5).svg"
        alt="Logo"
        className="w-[70px] h-[70px] sm:w-[100px] sm:h-[104px]"
      />
    </div>
  </div>

  {/* User Avatars (unchanged) */}
  <img
    src="/images/user-1.png"
    alt="User"
    className="absolute top-[100px] sm:top-[45px] right-[60px] sm:right-[130px] w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] rounded-full object-cover border-2 border-white shadow"
  />
  <img
    src="/images/user-2.png"
    alt="User"
    className="absolute top-[200px] sm:top-[220px] right-[1px] sm:right-[20px] w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] rounded-full object-cover border-2 border-white shadow"
  />
  <img
    src="/images/user-3.png"
    alt="User"
    className="absolute bottom-[100px] sm:bottom-[110px] right-[65px] sm:right-[70px] w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] rounded-full object-cover border-2 border-white shadow"
  />
   <img
    src="/images/user-4.png"
    alt="User"
    className="absolute bottom-[250px] sm:bottom-[220px] left-[80px] sm:left-[250px] w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] rounded-full object-cover border-2 border-white shadow"
  />
  <img
    src="/images/user-4.png"
    alt="User"
    className="absolute bottom-[160px] sm:bottom-[100px] left-[85px] sm:left-[130px] w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] rounded-full object-cover border-2 border-white shadow"
  />
  <img
    src="/images/user-5.png"
    alt="User"
    className="absolute top-[145px] sm:top-[250px] left-[80px] sm:left-[160px] w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] rounded-full object-cover border-2 border-white shadow"
  />
  <img
    src="/images/user-5.png"
    alt="User"
    className="absolute top-[240px] sm:top-[110px] left-[140px] sm:left-[130px] w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] rounded-full object-cover border-2 border-white shadow"
  />
</div>


      {/* Bottom Contact Info */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-[#008B7C] text-sm mt-4 z-10">
        <div className="flex items-center gap-2">
          <img src="/images/mail.svg" alt="" />
          <span className="text-[12px] text-[#505050]">Hello@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/phone.svg" alt="" />
          <span className="text-[12px] text-[#505050]">+123 4567 8910</span>
        </div>
      </div>
    </div>
  );
}
