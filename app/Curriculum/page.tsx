import DayAtCuddle from "@/components/Curriculum/DayAtCuddles/DayAtCuddles"
import HeroSection from "@/components/Curriculum/HeroSection/HeroSection"
import LetsConnect from "@/components/LetsConnect/letsConnect"
import Testimonial from "@/components/Testimonial/Testimonial"


const Curriculum = () => {
  return (
     <div className="flex flex-col font-ohno">
      <HeroSection/>
      <DayAtCuddle/>
      <Testimonial/>
      <LetsConnect/>
     </div>
  )
}

export default Curriculum