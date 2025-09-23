import ContinuedCare from '@/components/Assistance/ContinuedCare/ContinuedCare'
import HeroSection from '@/components/Assistance/HeroSection/Herosection'
import ParentResource from '@/components/Assistance/ParentResource/ParentResource'
import LetsConnect from '@/components/LetsConnect/letsConnect'
import React from 'react'

const Assistance = () => {
    return (
        <div className="flex flex-col font-ohno">
            <HeroSection/>
            <ContinuedCare/>
            <ParentResource/>
            <LetsConnect/>
        </div>
    )
}

export default Assistance