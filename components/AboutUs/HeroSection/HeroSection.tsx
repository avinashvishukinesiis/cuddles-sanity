import React from 'react'

const HeroSection = () => {
    return (
        <section className='relative h-max'>
            {/* Hero with background */}
            <div className="w-full h-[80vh] about-hero-bg bg-cover bg-center bg-no-repeat relative overflow-hidden">
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
                    <h2 className='font-extrabold text-3xl md:text-7xl text-[#9769A5]  text-center'>Driven by purpose and care </h2>
                    <p className='text-[18px] font-medium text-center text-[#9769A5]'>
                        Founded in 2008, Cuddles Preschool has evolved into a trusted space for early learning, where happy, confident, and independent children thrive. Over the years, we’ve nurtured hundreds of little learners and witnessed their incredible journeys—each child’s growth is a story that continues to inspire us.
                    </p>
                  
                </div>
            </div>
        </section>
    )
}

export default HeroSection