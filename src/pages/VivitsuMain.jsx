import Highlights from "../components/Highlights";
import Vivitsu from "../components/vivitsu";
import AboutPage from "../components/aboutvivitsu";
import ScrollingText from "../components/ScrollingText";
import SponsorsPage from "../components/Sponsors";
import DomainsCarousel from '../components/Domains2';
import Timeline from "../components/timeline";
import PortalEffectSlider from "../components/portaleffectslider";
import VivitsuDetails from "../components/vivitsu/VivitsuDetails";

export default function VivitsuMain(){
    return(
        <div>
        <Vivitsu/>
        <VivitsuDetails />
        <Highlights/>
        {/* <ScrollingText/> */}
        {/* <Domains/> */}
        <div className="container mx-auto px-4 py-20 relative z-10">
        <h2 className="text-6xl font-extrabold text-center mb-12 text-white drop-shadow-[0_0_20px_#00BFFF]">
  Domains
</h2>

         <DomainsCarousel />
         <Timeline />
        {/* <Laptop/> */}
        </div>
        <SponsorsPage/>       
{/* <BowlingEffect/> */}
<PortalEffectSlider/>

        </div>
    );
};