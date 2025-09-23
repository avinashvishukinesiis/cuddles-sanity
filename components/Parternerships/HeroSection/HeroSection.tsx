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
                <div className='w-full px-4 md:px-0 md:w-[70vw] flex flex-col gap-8'>
                    <h2 className='font-extrabold text-3xl md:text-7xl text-[#9769A5]  text-center'>Collaborate with us to support your employees</h2>
                    <p className='text-[18px] font-medium text-center text-[#9769A5]'>
                        At Cuddles, we understand the challenges working parents face. That’s why we offer customised daycare solutions for corporate partners, ensuring that your employees’ children receive the best care and education while they focus on their work.
                    </p>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-6'>
                        <div className='rounded-2xl overflow-hidden border border-[#F0B54C]'>
                            <div className='p-4 bg-[#F0B54C]'>
                                <h3 className='text-2xl text-white font-extrabold'>Discounted fees</h3>
                            </div>
                            <div className='p-4'>
                                <p className='text-[#F0B54C]'>Special rates based on the number of enrollments.</p>
                            </div>
                        </div>
                        <div className='rounded-2xl overflow-hidden border border-[#DE627D]'>
                            <div className='p-4 bg-[#DE627D]'>
                                <h3 className='text-2xl text-white font-extrabold'>Customized Solutions</h3>
                            </div>
                            <div className='p-4'>
                                <p className='text-[#DE627D]'>Tailored programs to meet your employees’ needs.</p>
                            </div>
                        </div>
                        <div className='rounded-2xl overflow-hidden border border-[#4AA6B1]'>
                            <div className='p-4 bg-[#4AA6B1]'>
                                <h3 className='text-2xl text-white font-extrabold'>Peace of Mind</h3>
                            </div>
                            <div className='p-4'>
                                <p className='text-[#4AA6B1]'>A safe, nurturing environment for your employees’ children.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection