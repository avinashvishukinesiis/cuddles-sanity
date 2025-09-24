import AboutCEO from '@/components/AboutUs/AboutCEO/AboutCEO'
import HeroSection from '@/components/AboutUs/HeroSection/HeroSection'
import VissionAndMission from '@/components/AboutUs/VisionAndMission/VissionAndMission'
import LetsConnect from '@/components/LetsConnect/letsConnect'
import { getAboutUs } from '@/lib/sanity-utils'
import React from 'react'

const AboutUs = async () => {
  const aboutUsData = await getAboutUs()

  return (
     <div className="flex flex-col font-ohno">
      <HeroSection aboutData={aboutUsData} />
      <VissionAndMission aboutData={aboutUsData} />
      <AboutCEO aboutData={aboutUsData} />
      <LetsConnect/>
     </div>
  )
}

export default AboutUs