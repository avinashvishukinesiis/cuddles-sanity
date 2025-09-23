import ActivityZone from "@/components/HomePage/ActivityZone/ActivityZone";
import CuddlesProgram from "@/components/HomePage/CuddlesProgram/CuddlesProgram";
import { EarlyEducationSection } from "@/components/HomePage/Early-education/EarlyEducation";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import Include from "@/components/HomePage/Include/Include";
import LetsConnect from "@/components/LetsConnect/letsConnect";
import Testimonial from "@/components/Testimonial/Testimonial";




export default function Home() {
  return (
     <div className="flex flex-col gap-[20px] font-ohno">
      <HeroSection/>
      <EarlyEducationSection/>
      <CuddlesProgram/>
      <ActivityZone/>
      <Include/>
      <Testimonial/>
      <LetsConnect/>
     </div>
  );
}
