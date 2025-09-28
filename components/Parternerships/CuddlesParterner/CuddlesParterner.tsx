import React from 'react'
import { Partnerships } from '@/lib/types'

interface CuddlesPartenerProps {
    partnershipsData?: Partnerships | null
}

const CuddlesParterner: React.FC<CuddlesPartenerProps> = ({ partnershipsData }) => {
  const defaultData = {
    cuddlesPartnerSection: {
      title: 'Why Partner With Cuddles?',
      subtitle: 'Every Day At Cuddles Follows A Rhythm Designed To Comfort, Inspire, And Engage. Here\'s What A Typical Day Looks Like',
      benefits: [
        {
          title: 'Preferential Access & Fee Benefits',
          description: 'Corporate partners receive priority admissions and tailored fee structures, making our premium early education experience more accessible to their teams.'
        },
        {
          title: 'Custom Childcare Solutions',
          description: 'We offer flexible plans including full-time preschool, day-care support, emergency care, and on-demand parenting workshops to meet your team\'s evolving needs.'
        },
        {
          title: 'Trusted Early Learning Approach',
          description: 'Our play-based, process-driven curriculum fosters curiosity, creativity, and confidence. Children build lasting skills through experiences that go beyond academics — from emotional intelligence to collaborative thinking.'
        },
        {
          title: 'Reliable Communication & Involvement',
          description: 'From parent-teacher touchpoints to real-time updates, we keep families engaged every step of the way. You can trust that every child is cared for with intention and heart.'
        }
      ]
    }
  }

  const cuddlesData = partnershipsData?.cuddlesPartnerSection || defaultData.cuddlesPartnerSection
  return (
    <section className="px-4">
      <div className="max-w-fit mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#4AA6B1] mb-6 sm:mb-8 text-balance">
          {cuddlesData.title}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg lg:text-xl text-center text-teal-600 mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto leading-relaxed text-balance">
          {cuddlesData.subtitle}
        </p>

        {/* Benefits Cards */}
        <div className="space-y-6 sm:space-y-8">
          {cuddlesData.benefits?.map((benefit: { title: string; description: string }, index: number) => (
            <div key={index} className="border border-[#4AA6B1] rounded-2xl p-6 sm:p-8 bg-white">
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#4AA6B1] mb-4 sm:mb-6">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-center text-teal-600 leading-relaxed max-w-2xl mx-auto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CuddlesParterner