import FaqHero from "../Components/FaqHero";
import HowitworkHero from "../Components/HowitworkHero";
import HowsItWorks from "../Components/HowsItWorks";
import SupportBanner from "../Components/SupportBanner";


const HowItWork=()=>{
    return(
        <div>
<HowitworkHero/>
<div className="-mt-[400px] relative z-10">
    <HowsItWorks/>
</div>
<SupportBanner/>
        </div>
    )
};
export default HowItWork;