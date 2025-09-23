import React from 'react'

const HeroSection = () => {
    return (
        <section className='relative h-max'>
            {/* Hero with background */}
            <div className="w-full h-[80vh] assistance-hero-bg bg-cover bg-center bg-no-repeat relative overflow-hidden">
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
                <div className='w-full px-4 md:px-0 md:w-[70vw] flex flex-col gap-8'>
                    <h2 className='font-extrabold text-3xl md:text-7xl text-[#9769A5]  text-center'>We guide every transition with care</h2>
                    <p className='text-[18px] font-medium text-center text-[#9769A5]'>
                        We make the shift to formal school environments a positive, well-supported experience for both children and parents. Every element of our program — academic, emotional, and social — helps children step into their next chapter with readiness and joy.
                    </p>
                    <p className='text-[#DE627D] text-2xl text-center'>Here’s how we support this transition:</p>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-6'>
                        <div className='rounded-2xl overflow-hidden border border-[#F0B54C]'>
                            <div className='p-4 bg-[#F0B54C]'>
                                <h3 className='text-2xl text-white font-extrabold'>School Admission Guidance</h3>
                            </div>
                            <div className='p-4'>
                                <p className='text-[#F0B54C]'>We offer personalised advice on selecting the right school and navigating the admission process with ease.</p>
                            </div>
                        </div>
                        <div className='rounded-2xl overflow-hidden border border-[#DE627D]'>
                            <div className='p-4 bg-[#DE627D]'>
                                <h3 className='text-2xl text-white font-extrabold'>Interview Readiness</h3>
                            </div>
                            <div className='p-4'>
                                <p className='text-[#DE627D]'>Through playful mock sessions, storytelling, and expression games, children develop the confidence to communicate clearly during school interviews.</p>
                            </div>
                        </div>
                        <div className='rounded-2xl overflow-hidden border border-[#4AA6B1]'>
                            <div className='p-4 bg-[#4AA6B1]'>
                                <h3 className='text-2xl text-white font-extrabold'>Primary School Prep Activities</h3>
                            </div>
                            <div className='p-4'>
                                <p className='text-[#4AA6B1]'>Age-appropriate worksheets, literacy and  numeracy boosters, and skill-building sessions bridge the gap between preschool and formal education.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection