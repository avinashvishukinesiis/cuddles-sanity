import AboutCEO from '@/components/AboutUs/AboutCEO/AboutCEO'
import HeroSection from '@/components/AboutUs/HeroSection/HeroSection'
import VissionAndMission from '@/components/AboutUs/VisionAndMission/VissionAndMission'
import LetsConnect from '@/components/LetsConnect/letsConnect'
import React from 'react'

const AboutUs = () => {
  return (
     <div className="flex flex-col font-ohno">
      <HeroSection/>
      <VissionAndMission/>
      <AboutCEO/>
      <LetsConnect/>
     </div>
  )
}

export default AboutUs