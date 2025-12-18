const   FaqHero = () => {
  return (
    <div
      className="h-[400px]  bg-no-repeat bg-cover bg-center lg:-mt-10 mt-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(249,249,249,0.2), #F9F9F9 50%), url('/images/Mask-group-5.png')`,
       boxShadow: "0 0 0 100vmax #F9F9F9",
    clipPath: "inset(0 -100vmax)",
}}
    />
  );
};

export default FaqHero;
