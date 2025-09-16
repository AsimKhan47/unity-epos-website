import Hero from "../Components/Hero";
import Brand from "../Components/Brand";
import CoreFeatures from "../Components/Corefeatures";
import WhyChooseUs from "../Components/WhyChooseUs";
import CustomerReviews from "../Components/CustomerReviews";
import PricingPlan from "../Components/PricingPlan";

function Home() {
  return (
    <div className="px-[100px]">
    <div className="-mx-[100px]"><Hero /></div>
      <Brand />
      <CoreFeatures />
      <WhyChooseUs />
      <div className="-mx-[100px]">
      <CustomerReviews />
      </div>
      <h2 className="text-[72px] font-bold text-center pt-[10px] ">
        One Simple <span className="bg-gradient-to-r from-[#00C9B3] to-[#00645A] bg-clip-text text-transparent">Plan</span>
      </h2>
      <PricingPlan />
    </div>
  );
}

export default Home;
