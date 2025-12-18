"use client";
import React from "react";

export default function AIPoweredOrderSection() {
  return (
    <section
      className="bg-[#009688] text-white rounded-lg overflow-hidden relative pt-10 md:pt-13  md:py-0  py-10"
      style={{
        boxShadow: "0 0 0 100vmax #009688",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-0 px-4 sm:px-8 lg:px-25 relative">
        {/* Decorative Circle */}
        <img
          src="/images/Group-1643.png"
          className="absolute -top-[20px] sm:top-[-12px] left-[-10%] sm:left-[-1%] w-[700px]  -z-0"
          alt=""
        />

        {/* Left Side: Tablet with Video */}
        <div className="w-full md:w-1/2 flex h-full justify-center items-center  relative z-10 ">
          <div className="relative">
            {/* Tablet image */}
            <img
              src="/images/Group 1642.png"
              alt="AI Order System"
              className="rounded-lg object-contain w-full"
            />

            {/* Video overlay (positioned on the tablet screen) */}
            <video
              src="/images/food-video-ai-part.mp4" // <-- replace with your video path
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-[8%] left-[5%] w-[80%] h-[75%] object-cover rounded-[8px]" // adjust positioning to fit screen
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-[12px] z-10 md:pl-10 mt-2 lg:pl-14">
          <h2
           
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] text-[#FFFFFF] font-normal font-coolvetica leading-[1.1]"
          >
            Never Miss a Call Again — Let AI Take Your Delivery Orders
          </h2>

          <p
            
            className="text-[#F0F0F0] font-inter text-sm sm:text-base md:text-[16px] font-normal leading-relaxed"
          >
            Customers can place delivery orders with a simple call — our AI
            Voice Agent answers instantly, takes details, and sends orders
            straight to your POS.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        <div className="relative bg-[#FAFAFA] border border-[#E5E7EB] text-black font-medium rounded-md py-2 px-5 h-full min-h-[75px] overflow-hidden transition-all duration-300 hover:text-[#008B7C] hover:border-[#008B7C] group cursor-pointer">
  <span className="transition-colors duration-300 font-inter font-regular  group-hover:text-[#008B7C]">
    Answers Every Call Automatically
  </span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="65"
    height="68"
    viewBox="0 0 65 68"
    className="absolute right-0 -bottom-0  transition-transform duration-300 "
    fill="none"
  >
    <path
      d="M49.4551 49.0856L51.1369 47.3152L47.1213 43.5012L45.4395 45.2716L49.4551 49.0856ZM56.6704 46.5698L63.7243 50.6301L66.4871 45.8302L59.4332 41.7699L56.6704 46.5698ZM65.0856 59.0479L59.8405 64.5699L63.8561 68.3839L69.1012 62.8619L65.0856 59.0479ZM56.6848 66.3392C51.3865 66.8624 37.5618 66.416 22.5562 50.6179L18.5407 54.4319C34.8946 71.6497 50.4948 72.5155 57.2286 71.8509L56.6848 66.3392ZM22.5562 50.6179C8.24489 35.5504 5.8443 22.841 5.54509 17.2665L0.0147875 17.5633C0.381237 24.391 3.28027 38.3657 18.5407 54.4319L22.5562 50.6179ZM27.6343 26.1124L28.6932 24.9974L24.6777 21.1834L23.6187 22.2983L27.6343 26.1124ZM29.5252 11.1167L24.8694 4.53172L20.3472 7.72904L25.003 14.314L29.5252 11.1167ZM9.11119 3.11207L3.31593 9.21338L7.33148 13.0275L13.1267 6.92622L9.11119 3.11207ZM25.6265 24.2053C23.6187 22.2983 23.6162 22.301 23.6136 22.3037C23.6127 22.3046 23.6101 22.3074 23.6084 22.3092C23.6049 22.313 23.6013 22.3168 23.5977 22.3207C23.5904 22.3285 23.5829 22.3367 23.5751 22.3452C23.5596 22.3622 23.5432 22.3806 23.5259 22.4005C23.4914 22.4402 23.4534 22.4856 23.4129 22.5369C23.3317 22.6395 23.2399 22.7656 23.1436 22.916C22.9504 23.2179 22.7409 23.6155 22.5635 24.114C22.2028 25.1277 22.0062 26.4702 22.2519 28.1468C22.7345 31.4406 24.8928 35.8702 30.532 41.8072L34.5475 37.9932C29.2764 32.4434 27.9781 29.0256 27.7316 27.3438C27.6127 26.5326 27.7335 26.1051 27.7813 25.9707C27.8081 25.8953 27.8257 25.8743 27.8085 25.9013C27.8002 25.9142 27.7836 25.9385 27.7557 25.974C27.7417 25.9913 27.7249 26.012 27.7048 26.0349C27.6948 26.0467 27.6839 26.0589 27.6722 26.0718C27.6663 26.0781 27.6602 26.0848 27.6539 26.0914C27.6508 26.0951 27.6475 26.0984 27.6443 26.1017C27.6426 26.1036 27.6401 26.1062 27.6393 26.1073C27.6368 26.1099 27.6343 26.1124 25.6265 24.2053ZM30.532 41.8072C36.1547 47.7269 40.4011 50.0541 43.641 50.5802C45.3036 50.8501 46.6494 50.6345 47.6685 50.2328C48.1665 50.0364 48.5605 49.8056 48.8562 49.5959C49.0039 49.491 49.1269 49.3917 49.2258 49.3049C49.2757 49.2614 49.3192 49.2207 49.3573 49.1838C49.3765 49.1657 49.3942 49.148 49.4104 49.1318C49.4185 49.1236 49.4263 49.1155 49.4337 49.1078C49.4374 49.1041 49.4411 49.1004 49.4448 49.0967C49.4466 49.0948 49.4492 49.0919 49.4499 49.0912C49.4525 49.0882 49.4551 49.0856 47.4473 47.1786C45.4395 45.2716 45.4421 45.269 45.4446 45.2664C45.4454 45.2653 45.448 45.2627 45.4494 45.2609C45.4528 45.2576 45.4561 45.2542 45.4594 45.2509C45.4661 45.2443 45.4723 45.2376 45.4782 45.2313C45.4908 45.2192 45.5026 45.2073 45.5137 45.1966C45.5358 45.1752 45.5562 45.1568 45.5739 45.1413C45.609 45.1102 45.6352 45.0903 45.6521 45.0785C45.6869 45.0537 45.6832 45.0622 45.6363 45.0807C45.565 45.1088 45.2294 45.2273 44.529 45.1136C43.0425 44.8721 39.8355 43.5603 34.5475 37.9932L30.532 41.8072ZM24.8694 4.53172C21.127 -0.761326 13.6385 -1.65432 9.11119 3.11207L13.1267 6.92622C15.0572 4.89385 18.4556 5.0535 20.3472 7.72904L24.8694 4.53172ZM5.54509 17.2665C5.46597 15.7922 6.10793 14.3157 7.33148 13.0275L3.31593 9.21338C1.33748 11.2963 -0.166277 14.1899 0.0147875 17.5633L5.54509 17.2665ZM59.8405 64.5699C58.8104 65.6547 57.7326 66.2358 56.6848 66.3392L57.2286 71.8509C59.9871 71.5784 62.2194 70.1075 63.8561 68.3839L59.8405 64.5699ZM28.6932 24.9974C32.2657 21.2364 32.5187 15.3504 29.5252 11.1167L25.003 14.314C26.5617 16.5185 26.3227 19.4515 24.6777 21.1834L28.6932 24.9974ZM63.7243 50.6301C66.7548 52.3746 67.3482 56.666 65.0856 59.0479L69.1012 62.8619C73.9191 57.7892 72.5161 49.3005 66.4871 45.8302L63.7243 50.6301ZM51.1369 47.3152C52.5599 45.8169 54.7774 45.4802 56.6704 46.5698L59.4332 41.7699C55.3774 39.4353 50.3471 40.1047 47.1213 43.5012L51.1369 47.3152Z"
      fill="#E5E7EB"
      className="transition-colors duration-300 group-hover:fill-[#008B7C]"
    />
  </svg>
</div>


            {/* Tile 2 */}
      <div className="relative bg-[#FAFAFA] border border-[#E5E7EB] text-black font-medium rounded-md py-2 px-5 h-full min-h-[80px] overflow-hidden transition-all duration-300  hover:border-[#008B7C] group cursor-pointer">
  <span className="transition-colors duration-300 group-hover:text-[#008B7C]">
    Understands Real <br className="hidden sm:block" /> Conversations
  </span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="84"
    height="81"
    viewBox="0 0 84 81"
    className="absolute right-0 bottom-0  transition-transform duration-300 "
    fill="none"
  >
    <path
      d="M62.8428 23.5065C67.032 24.5372 70.8844 26.6311 74.0278 29.5858C77.1712 32.5405 79.4993 36.2561 80.7871 40.3735C82.1989 45.2134 82.0014 50.3809 80.2242 55.0989L89.0561 69.211L71.7686 66.9693C68.0713 70.0632 63.7583 72.3353 59.1158 73.6351C53.4307 75.4947 47.3182 75.6053 41.5695 73.9524C35.8208 72.2995 30.7006 68.9592 26.8714 64.3639"
      stroke="#E5E7EB"
      className="transition-colors duration-300 group-hover:stroke-[#008B7C]"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M64.8421 28.3C68.8002 42.1036 59.0893 56.997 43.1709 61.5616C38.5451 62.9195 33.6834 63.2781 28.9084 62.6136L26.7179 64.4069L15.4357 73.6756L15.4474 57.0277C11.44 53.9684 8.53416 49.6908 7.16671 44.8382C3.20861 31.0346 12.9195 16.1411 28.8379 11.5766C42.7954 7.57438 56.9155 12.8465 62.8431 23.5054C63.6968 25.0189 64.3678 26.6283 64.8421 28.3Z"
      stroke="#E5E7EB"
      className="transition-colors duration-300 group-hover:stroke-[#008B7C]"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>


            {/* Tile 3 */}
        <div className="relative bg-[#FAFAFA] border border-[#E5E7EB] text-black font-medium rounded-md py-3 px-5 h-full min-h-[80px] overflow-hidden transition-all duration-300 hover:border-[#008B7C] group cursor-pointer">
  <span className="transition-colors duration-300 group-hover:text-[#008B7C]">
    Instant POS Integration
  </span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="73"
    viewBox="0 0 54 73"
    className="absolute right-0 bottom-0  transition-transform duration-300 "
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
     
      d="M47.7021 25.2955C49.9551 33.153 45.3962 41.3776 37.5387 43.6307L29.3963 45.9655C21.5388 48.2186 13.3142 43.6596 11.0611 35.8021L9.30997 29.6953L45.951 19.1886L47.7021 25.2955ZM52.926 12.7826L40.7123 16.2848L36.0427 -7.29698e-05L31.9715 1.16733L36.6411 17.4522L16.285 23.2893L11.6153 7.00436L7.54412 8.17176L12.2137 24.4567L5.23707e-05 27.9589L1.16745 32.0301L5.2387 30.8627L6.98982 36.9695C9.88615 47.0703 20.4629 52.9331 30.5637 50.0367L32.5992 49.453L36.6852 63.7023C37.6506 67.0692 35.6963 70.5948 32.3295 71.5603C28.9625 72.5257 25.4369 70.5714 24.4715 67.2045C22.8628 61.5944 16.9851 58.3363 11.3749 59.945C5.76477 61.5537 2.50668 67.4314 4.11536 73.0416L7.03388 83.2196L11.1051 82.0522L8.18658 71.8742C7.22114 68.5073 9.17543 64.9816 12.5423 64.0162C15.9092 63.0508 19.4348 65.005 20.4003 68.3719C22.009 73.9821 27.8867 77.2402 33.4969 75.6315C39.1111 74.0216 42.3651 68.1451 40.7564 62.5349L36.6705 48.2856L38.7061 47.7019C48.8068 44.8056 54.6696 34.2288 51.7733 24.1281L50.0222 18.0213L54.0934 16.8538L52.926 12.7826Z"  
      fill="#E5E7EB"
      strokeWidth="2"
      className="transition-colors duration-300 group-hover:fill-[#008B7C]"
    />
  </svg>
</div>


            {/* Tile 4 */}
           <div className="group relative bg-[#FAFAFA] border border-[#E5E7EB] text-black font-medium rounded-md py-4 px-5 h-full min-h-[80px] overflow-hidden transition-all duration-300 cursor-pointer hover:text-[#008B7C] hover:border-[#008B7C]">
  <span>Available 24/7</span>
  <div className="absolute -bottom-1 right-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="105"
      height="64"
      viewBox="0 0 105 64"
      fill="none"
      className="w-full h-full"
    >
      <path
        d="M93.5454 43.1735L99.8479 10.1663L99.779 9.92608L82.8074 14.7926L81.0654 8.71782L105.725 1.64683L107.491 7.80743L101.216 40.974L93.5454 43.1735Z"
        className="fill-[#E5E7EB] group-hover:fill-[#008B7C] transition-colors duration-300"
      />
      <path
        d="M78.1525 7.77075L78.8922 53.0958L72.5943 54.9017L71.8547 9.57663L78.1525 7.77075Z"
        className="fill-[#E5E7EB] group-hover:fill-[#008B7C] transition-colors duration-300"
      />
      <path
        d="M38.2724 52.338L36.5945 46.4863L44.6384 19.164L49.6836 17.7173L52.0062 25.817L49.0202 26.6732L43.9681 43.9633L44.0469 44.2379L64.8967 38.2593L66.6042 44.214L38.2724 52.338ZM56.9125 53.6787L54.6293 45.7163L54.0236 43.0857L46.9722 18.4948L53.9394 16.497L64.0169 51.6416L56.9125 53.6787Z"
        className="fill-[#E5E7EB] group-hover:fill-[#008B7C] transition-colors duration-300"
      />
      <path
        d="M10.8935 66.8754L9.35825 61.5213L18.5467 46.3508C19.3154 45.0161 19.942 43.8336 20.4266 42.8032C20.9226 41.7696 21.2461 40.8039 21.3973 39.9063C21.5452 38.9972 21.4863 38.0793 21.2206 37.1527C20.9254 36.1231 20.4366 35.3037 19.7543 34.6946C19.0688 34.074 18.2624 33.68 17.3354 33.5125C16.405 33.3335 15.425 33.3917 14.3954 33.6869C13.32 33.9953 12.4442 34.4816 11.7681 35.146C11.0919 35.8104 10.6529 36.611 10.4511 37.5479C10.2493 38.4848 10.3091 39.5139 10.6306 40.635L3.57769 42.6574C2.91832 40.3579 2.86641 38.2123 3.42197 36.2206C3.97752 34.229 5.06054 32.5008 6.67103 31.0361C8.28151 29.5715 10.3109 28.4881 12.7591 27.7861C15.2759 27.0644 17.5947 26.8824 19.7153 27.24C21.8441 27.5829 23.6538 28.3888 25.1442 29.6576C26.6347 30.9264 27.6703 32.5733 28.2509 34.5982C28.6315 35.9253 28.744 37.3106 28.5884 38.7543C28.4443 40.1947 27.935 41.8945 27.0607 43.8538C26.183 45.8016 24.8522 48.2199 23.0681 51.1086L19.3789 57.6079L19.4478 57.8482L34.2057 53.6164L35.9477 59.6912L10.8935 66.8754Z" strokeWidth="0.1"
        className="fill-[#E5E7EB] group-hover:fill-[#008B7C] transition-colors duration-300"
      />
    </svg>
  </div>
</div>

          </div>

          <button className="mt-3 cursor-pointer border border-white rounded-md px-6 py-2 text-white hover:bg-white hover:text-[#009688] transition-all duration-300">
            Get a Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}
