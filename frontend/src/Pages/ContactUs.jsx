import ContactHero from "../Components/Contacthero";
import SupportBanner from "../Components/SupportBanner";
import Contact from "../Components/Contact";
import ContactPage from "../Components/ContactPage";

const ContactUs=()=>{
    return (
        <div >
            <section data-aos="fade-up" data-aos-delay="200"><ContactHero/></section>

<div data-aos="fade-up" data-aos-delay="200" className="lg:-mt-50 -mt-25">
<SupportBanner/>

</div><ContactPage/>        </div>
    )
};
export default ContactUs;