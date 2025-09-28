import CuddlesParterner from '@/components/Parternerships/CuddlesParterner/CuddlesParterner'
import Enroll from '@/components/Parternerships/Enroll/Enroll'
import HeroSection from '@/components/Parternerships/HeroSection/HeroSection'
import LetsBuild from '@/components/Parternerships/LetsBuild/LetsBuild'
import ParternerWith from '@/components/Parternerships/ParternerWith/ParternerWith'
import { getPartnerships } from '@/lib/sanity-utils'
import React from 'react'

const Partnerships = async () => {
  const partnershipsData = await getPartnerships()

  return (
    <div className="flex flex-col font-ohno">
      <HeroSection partnershipsData={partnershipsData} />
      <ParternerWith partnershipsData={partnershipsData} />
      <CuddlesParterner partnershipsData={partnershipsData} />
      <Enroll partnershipsData={partnershipsData} />
      <LetsBuild partnershipsData={partnershipsData} />
    </div>
  )
}

export default Partnerships