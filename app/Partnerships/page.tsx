import CuddlesParterner from '@/components/Parternerships/CuddlesParterner/CuddlesParterner'
import Enroll from '@/components/Parternerships/Enroll/Enroll'
import HeroSection from '@/components/Parternerships/HeroSection/HeroSection'
import LetsBuild from '@/components/Parternerships/LetsBuild/LetsBuild'
import ParternerWith from '@/components/Parternerships/ParternerWith/ParternerWith'
import React from 'react'

const Parternerships = () => {
  return (
     <div className="flex flex-col font-ohno">
      <HeroSection/>
      <ParternerWith/>
      <CuddlesParterner/>
      <Enroll/>
      <LetsBuild/>
     </div>
  )
}

export default Parternerships