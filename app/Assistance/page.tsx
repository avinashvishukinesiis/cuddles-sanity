import ContinuedCare from '@/components/Assistance/ContinuedCare/ContinuedCare'
import HeroSection from '@/components/Assistance/HeroSection/Herosection'
import ParentResource from '@/components/Assistance/ParentResource/ParentResource'
import LetsConnect from '@/components/LetsConnect/letsConnect'
import { getAssistance } from '@/lib/sanity-utils'
import React from 'react'

const Assistance = async () => {
    const assistanceData = await getAssistance()

    return (
        <div className="flex flex-col font-ohno">
            <HeroSection assistanceData={assistanceData} />
            <ContinuedCare assistanceData={assistanceData} />
            <ParentResource assistanceData={assistanceData} />
            <LetsConnect/>
        </div>
    )
}

export default Assistance