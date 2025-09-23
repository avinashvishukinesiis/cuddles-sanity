import React from 'react'

const CuddlesParterner = () => {
  return (
    <section className="px-4">
      <div className="max-w-fit mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#4AA6B1] mb-6 sm:mb-8 text-balance">
          Why Partner With Cuddles?
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg lg:text-xl text-center text-teal-600 mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto leading-relaxed text-balance">
          Every Day At Cuddles Follows A Rhythm Designed To Comfort, Inspire, And Engage. Here&apos;s What A Typical Day
          Looks Like
        </p>

        {/* Benefits Cards */}
        <div className="space-y-6 sm:space-y-8">
          {/* Preferential Access & Fee Benefits */}
          <div className="border border-[#4AA6B1] rounded-2xl p-6 sm:p-8 bg-white">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#4AA6B1] mb-4 sm:mb-6">
              Preferential Access & Fee Benefits
            </h3>
            <p className="text-sm sm:text-base text-center text-teal-600 leading-relaxed max-w-2xl mx-auto">
              Corporate partners receive priority admissions and tailored fee structures, making our premium early
              education experience more accessible to their teams.
            </p>
          </div>

          {/* Custom Childcare Solutions */}
          <div className="border border-[#4AA6B1] rounded-2xl p-6 sm:p-8 bg-white">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#4AA6B1] mb-4 sm:mb-6">
              Custom Childcare Solutions
            </h3>
            <p className="text-sm sm:text-base text-center text-teal-600 leading-relaxed max-w-2xl mx-auto">
              We offer flexible plans including full-time preschool, day-care support, emergency care, and on-demand
              parenting workshops to meet your team&apos;s evolving needs.
            </p>
          </div>

          {/* Trusted Early Learning Approach */}
          <div className="border border-[#4AA6B1] rounded-2xl p-6 sm:p-8 bg-white">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#4AA6B1] mb-4 sm:mb-6">
              Trusted Early Learning Approach
            </h3>
            <p className="text-sm sm:text-base text-center text-teal-600 leading-relaxed max-w-2xl mx-auto">
              Our play-based, process-driven curriculum fosters curiosity, creativity, and confidence. Children build
              lasting skills through experiences that go beyond academics — from emotional intelligence to collaborative
              thinking.
            </p>
          </div>

          {/* Reliable Communication & Involvement */}
          <div className="border border-[#4AA6B1] rounded-2xl p-6 sm:p-8 bg-white">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#4AA6B1] mb-4 sm:mb-6">
              Reliable Communication & Involvement
            </h3>
            <p className="text-sm sm:text-base text-center text-teal-600 leading-relaxed max-w-2xl mx-auto">
              From parent-teacher touchpoints to real-time updates, we keep families engaged every step of the way. You
              can trust that every child is cared for with intention and heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CuddlesParterner