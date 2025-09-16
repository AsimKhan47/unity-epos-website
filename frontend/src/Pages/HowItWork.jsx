import HowItWorkBody from "../Components/HowItWorksSteps";
import HowItWorksHeader from "../Components/HowItWorksHeader";
import HowItWorksSteps from "../Components/HowItWorksSteps";
import ContactUs from "./Contact";


function HowItWork() {
  return (
    <div className="pt-[50px]">
        <HowItWorksHeader/>
<HowItWorksSteps/>
<ContactUs/>
    </div>
  );
}
export default HowItWork;