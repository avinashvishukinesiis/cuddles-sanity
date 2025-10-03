import DayAtCuddle from "@/components/Curriculum/DayAtCuddles/DayAtCuddles"
import HeroSection from "@/components/Curriculum/HeroSection/HeroSection"
import LetsConnect from "@/components/LetsConnect/letsConnect"
import Testimonial from "@/components/Testimonial/Testimonial"
import { getCurriculum } from "@/lib/sanity-utils"


const Curriculum = async () => {
  const curriculumData = await getCurriculum()

  return (
     <div className="flex flex-col font-ohno">
      <HeroSection curriculumData={curriculumData} />
      <DayAtCuddle/>
      <Testimonial/>
      <LetsConnect/>
     </div>
  )
}

export default Curriculum