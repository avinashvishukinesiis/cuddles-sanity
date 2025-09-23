import LetsConnect from "@/components/LetsConnect/letsConnect"
import Emergency from "@/components/Safety/Emergency/Emergency"
import HealthyHabits from "@/components/Safety/HealthyHabits/HealthyHabits"
import HeroSection from "@/components/Safety/HeroSection/HeroSection"


const Parternerships = () => {
  return (
     <div className="flex flex-col font-ohno">
      <HeroSection/>
      <Emergency/>
      <HealthyHabits/>
      <LetsConnect/>
     </div>
  )
}

export default Parternerships