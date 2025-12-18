import React, { useState } from "react";

const tabs = ["General", "Pricing", "Dashboard", "Purchase"];

const faqsData = {
  General: [
    {
      question: "What is a POS system and how does it help restaurants?",
      answer:
        "A POS (Point of Sale) system helps restaurants manage orders, payments, and inventory efficiently.",
    },
    {
      question: "Can I manage both dine-in and online orders with this POS?",
      answer: "Yes, the POS supports both dine-in and online order management seamlessly.",
    },
    {
      question: "Does the POS support multiple payment methods (cash, card, wallet)?",
      answer: "Yes, it supports multiple payment methods including cash, card, and wallet.",
    },
    {
      question: "Is there a monthly subscription fee or one-time payment?",
      answer: "Yes, it supports multiple payment methods including cash, card, and wallet.",
    },
    {
      question: "How secure is the customer and payment data on this platform?",
      answer: "Yes, it supports multiple payment methods including cash, card, and wallet.",
    },
    {
      question: "Can I track inventory and ingredient usage in real time?",
      answer: "Yes, it supports multiple payment methods including cash, card, and wallet.",
    },
    {
      question: "Does the POS work offline if the internet goes down?",
      answer: "Yes, it supports multiple payment methods including cash, card, and wallet.",
    },
    {
      question: "Can I generate sales and performance reports for my restaurant?",
      answer: "Yes, it supports multiple payment methods including cash, card, and wallet.",
    },
  ],
  Pricing: [
    {
      question: "What pricing plans do you offer?",
      answer:
        "We offer flexible pricing plans based on your restaurant size — monthly, yearly, and enterprise options.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features.",
    },
  ],
  Dashboard: [
    {
      question: "Can I generate sales and performance reports?",
      answer: "Yes, the dashboard provides detailed sales, staff performance, and revenue reports.",
    },
  ],
  Purchase: [
    {
      question: "How can I purchase the POS system?",
      answer: "You can purchase it directly from our website or contact our sales team for enterprise plans.",
    },
  ],
};

const FAQSection2 = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = faqsData[activeTab] || [];
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const faqsPerPage = 6;
  const startIndex = (page - 1) * faqsPerPage;
  const paginatedFaqs = filteredFaqs.slice(startIndex, startIndex + faqsPerPage);
  const totalPages = Math.ceil(filteredFaqs.length / faqsPerPage);

  const handleSearch = () => setPage(1);

  return (
    <div
      className="relative px-4 sm:px-6 md:px-12 lg:px-[100px] flex flex-col items-center justify-start mb-[50px] -mt-5 pt-10 pb-10 overflow-hidden rounded-[32px] md:rounded-[62px]"
      style={{
        backgroundImage: "url('/images/Mask-group-19.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
        backgroundColor: "#F9F9F9",
        boxShadow: "0 0 0 100vmax #F9F9F9",
        clipPath: "inset(0 -100vmax)",
      }}
    >
      {/* Decorations */}
      <img
        src="/images/circle.svg"
        alt="decor left"
        className="absolute top-20 md:top-40 left-0 w-[80px] sm:w-[120px] md:w-[200px] h-auto pointer-events-none select-none"
      />
      <img
        src="/images/shadow.svg"
        alt="decor right"
        className="absolute bottom-10 md:bottom-30 right-0 w-[80px] sm:w-[100px] md:w-[150px] h-auto pointer-events-none select-none"
      />

      {/* Heading */}
      <div className="text-center mb-6 md:mb-[24px] mt-[50px] relative z-10">
        <h2
          className="inline-block text-lg sm:text-xl md:text-2xl font-regular"
          style={{ fontFamily: "coolvetica" }}
        >
          Find quick <span className="text-[#008B7C]">answers</span> to the most common questions
        </h2>
      </div>

      {/* Tabs + Search */}
      <div className="flex flex-col md:flex-row items-center justify-start gap-3 md:gap-4 mb-6 md:mb-8 relative z-10 w-full">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 bg-white border border-[#008B7C] rounded-[6px] py-0.5  w-full md:w-[540px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setPage(1);
                setOpenIndex(null);
                setSearchTerm("");
              }}
              className={`px-3 sm:px-[19px] md:px-[24px] py-2 sm:py-[10px] rounded-[6px] text-sm sm:text-[16px] font-inter font-medium transition ${
                activeTab === tab
                  ? "bg-[#008B7C] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-[300px] lg:w-[800px] flex items-center mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Find your answer quickly…"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="flex-1 border border-[#008B7C] rounded-[6px] pl-3 pr-10 py-3 text-sm sm:text-base focus:outline-none focus:border-[#008B7C] bg-white shadow-sm"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center"
          >
            <img src="/images/search.svg" alt="Search" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 w-full">
     {paginatedFaqs.length > 0 ? (
  paginatedFaqs.map((faq, index) => {
    const isOpen = openIndex === index + startIndex;
    return (
   <div
  key={index}
  className={`relative border rounded-xl min-h-[164px] w-full p-[16px] md:p-[24px] flex flex-col cursor-pointer transition ${
    isOpen ? "bg-[#E6F4F2] border-[#008B7C]" : "bg-white border-gray-200"
  }`}
  onMouseEnter={() => setOpenIndex(index + startIndex)}
  onMouseLeave={() => setOpenIndex(null)}
>
  {/* FAQ content */}
  {isOpen ? (
    <>
      <div className="flex items-start gap-2">
        {/* Fixed size button */}
        <div className="flex-shrink-0 flex items-center justify-center w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-[6px] border border-[#1B1B1B1A] bg-white z-10">
          <img src="/images/minus.svg" className="w-3 h-3 md:w-4 md:h-4" />
        </div>
        {/* Question text flex-grow */}
        <h3 className="flex-1 font-semibold text-[16px] md:text-[20px] text-[#008B7C] z-10">
          {faq.question}
        </h3>
      </div>
      <p className="text-[12px] sm:text-[14px] font-regular font-inter mt-2 text-gray-600 z-10">
        {faq.answer}
      </p>
    </>
  ) : (
    <div className="flex items-start gap-2 mt-auto">
      {/* Fixed size button */}
      <div className="flex-shrink-0 flex items-center justify-center w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-[6px] border border-[#1B1B1B1A] bg-white z-10">
        <img src="/images/plus.svg" className="w-3 h-3 md:w-4 md:h-4" />
      </div>
      {/* Question text flex-grow */}
      <h3 className="flex-1 font-medium text-[16px] md:text-[20px] text-gray-800 z-10">
        {faq.question}
      </h3>
    </div>
  )}

  {/* FAQ Icon always visible, absolutely positioned without covering text */}
  <div className="absolute bottom-0 right-0 pointer-events-none z-0">
    <img
      src="/images/faq.png"
      className={`transition-all  ${isOpen ? "opacity-100" : "opacity-50"}`}
      alt="FAQ Icon"
    />
    {isOpen && (
      <img
        src="/images/faq-2.png"
        className="absolute bottom-0 right-0 opacity-100 transition-all"
        alt="Hover Icon"
      />
    )}
  </div>
</div>

    );
  })
) : (
  <p className="col-span-2 text-center text-gray-500 py-10">
    No FAQs found matching your search.
  </p>
)}

      </div>

      {/* Pagination */}
      {filteredFaqs.length > faqsPerPage && (
        <div className="flex justify-center mt-6 md:mt-8 gap-2 relative z-10 flex-wrap">
          <button
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[6px] border border-gray-300 bg-white text-gray-600 disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <img src="/images/left.svg" className="w-3 h-3 md:w-4 md:h-4" alt="Previous" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm font-medium transition ${
                page === i + 1
                  ? "text-black"
                  : " text-gray-600   "
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[6px] border border-gray-300 bg-white text-gray-600 disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <img src="/images/right.svg" className="w-3 h-3 md:w-4 md:h-4" alt="Next" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQSection2;
