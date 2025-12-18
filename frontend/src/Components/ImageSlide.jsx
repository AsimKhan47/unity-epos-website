const ImageSlide = ({ src, slideDirection, title }) => (
  <div className="relative w-full max-w-[560px] mx-auto h-[600px] flex items-center justify-center overflow-hidden">
    <img
      key={src}
      src={src}
      alt={title}
      className={`absolute rounded-[12px] max-h-full object-contain transform transition-all duration-700 ease-in-out
        ${slideDirection === "next" ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
    />
  </div>
);
export default ImageSlide;