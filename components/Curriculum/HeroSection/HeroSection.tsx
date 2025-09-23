import React from 'react'

const HeroSection = () => {
    return (
        <section className='relative h-max'>
            {/* Hero with background */}
            <div className="w-full h-[80vh] curriculum-hero-bg bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Responsive Wave */}
                <svg
                    className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-40"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,288L40,282.7C80,277,160,267,240,250.7C320,235,400,213,480,218.7C560,224,640,256,720,266.7C800,277,880,267,960,240C1040,213,1120,171,1200,176C1280,181,1360,235,1400,261.3L1440,288L1440,320L0,320Z"
                    />
                </svg>
            </div>
            {/* Next section */}
            <div className="w-full h-max bg-white flex items-center justify-center pt-8">
                <div className='w-full px-4 md:px-0 md:w-[60vw] flex flex-col gap-8'>
                    <h2 className='font-extrabold text-3xl md:text-7xl text-[#4AA6B1]  text-center'>Our thoughtfully designed curriculum</h2>
                    <p className='text-[18px] font-medium text-center text-[#4AA6B1]'>
                        In this period of STEM learning and rushing milestones, we have designed our programs to celebrate children’s journey toward learning and discovering their passion.
                        Our curriculum is designed to grow with your child, gently and intentionally supporting their development at every stage.

                    </p>

                </div>
            </div>
            <div className="p-4 md:p-8">
                <div className="max-w-6xl mx-auto">
                    {/* Top row with Infants and Toddler cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                        {/* Infants Card - Takes 2 columns on large screens */}
                        <div className="lg:col-span-2  border border-purple rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm">
                            <div className="relative z-10 flex flex-col gap-12">
                                <h2 className="text-purple font-extrabold text-xl md:text-2xl mb-2">Infants</h2>
                                <p className="text-purple text-2xl md:text-4xl font-extrabold">3 months babies onwards</p>
                            </div>
                            {/* Dotted lines connecting stars */}
                            <img src="./curStar.svg" alt="Star vector" className="absolute top-0 right-0 h-28" />
                        </div>

                        {/* Toddler Card */}
                        <div className="border border-[#EBAA35] rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm">
                            <div className="relative z-10 flex flex-col gap-12">
                                <h2 className="text-[#EBAA35] font-extrabold text-xl md:text-2xl mb-2">Toddler</h2>
                                <p className="text-[#EBAA35] text-2xl md:text-4xl font-extrabold">1-2 years</p>
                            </div>
                            <img src="./fallingstar.svg" alt="Falling star" className='absolute right-0 top-0' />
                        </div>
                    </div>

                    {/* Bottom grid with 4 program cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Play group Card */}
                        <div className="border border-[#58BAC6] rounded-3xl p-6 relative overflow-hidden shadow-sm">
                            <div className="relative z-10 flex flex-col gap-12">
                                <h3 className="text-[#58BAC6] font-extrabold text-lg md:text-xl mb-2">Play group</h3>
                                <p className="text-[#58BAC6] text-xl md:text-2xl font-extrabold">2-3 years</p>
                            </div>
                            {/* Sun icon */}
                            <img src="./bluesunvector.svg" alt="Sun icon" className='absolute right-0 top-0' />
                        </div>

                        {/* Nursery Card */}
                        <div className="border border-[#F9839D] rounded-3xl p-6 relative overflow-hidden shadow-sm">
                            <div className="relative z-10 flex flex-col gap-12">
                                <h3 className="text-[#F9839D] font-extrabold text-lg md:text-xl mb-2">Nursery</h3>
                                <p className="text-[#F9839D] text-xl md:text-2xl font-extrabold">3-4 years</p>
                            </div>
                            {/* Star icon */}
                            <img src="./starspark.svg" alt="Star icon" className='absolute right-0 top-0' />
                        </div>

                        {/* Prep-1 Card */}
                        <div className="border border-[#69CEE9] rounded-3xl p-6 relative overflow-hidden shadow-sm">
                            <div className="relative z-10 flex flex-col gap-12">
                                <h3 className="text-[#69CEE9] font-extrabold text-lg md:text-xl mb-2">Prep-1</h3>
                                <p className="text-[#69CEE9] text-xl md:text-2xl font-extrabold">4-5 years</p>
                            </div>
                            {/* Arrow icon */}
                            <img src="./heartvector.png" alt="Heart vector art" className='absolute right-0 top-0' />
                        </div>

                        {/* Prep-2 Card */}
                        <div className="border border-[#F37D97] rounded-3xl p-6 relative overflow-hidden shadow-sm">
                            <div className="relative z-10 flex flex-col gap-12">
                                <h3 className="text-[#F37D97] font-extrabold text-lg md:text-xl mb-2">Prep-2</h3>
                                <p className="text-[#F37D97] text-xl md:text-2xl font-extrabold">5-6 years</p>
                            </div>
                            {/* Zigzag icon */}
                            
                                <img src="./ThunderVector.svg" alt="Thunder vector art" className='absolute right-0 top-0' />
                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection