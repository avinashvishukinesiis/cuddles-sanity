import LetsConnect from "@/components/LetsConnect/letsConnect"
import Emergency from "@/components/Safety/Emergency/Emergency"
import HealthyHabits from "@/components/Safety/HealthyHabits/HealthyHabits"
import HeroSection from "@/components/Safety/HeroSection/HeroSection"
import { getSafety } from "@/lib/sanity-utils"
import React from "react"

const Safety = async () => {
  const safetyData = await getSafety()

  return (
     <div className="flex flex-col font-ohno">
      <HeroSection safetyData={safetyData} />
      <Emergency safetyData={safetyData} />
      <HealthyHabits safetyData={safetyData} />
      <LetsConnect/>
     </div>
  )
}

export default Safety