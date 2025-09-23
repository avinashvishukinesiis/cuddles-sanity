import React from 'react'

const ContinuedCare = () => {
    return (
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="h-max bg-[#4AA6B1] px-4 md:px-14 flex flex-col items-center justify-center">
                <header className="mx-auto max-w-6xl px-6 py-10 text-white flex flex-col gap-8 justify-center items-center">
                    <h2
                        className="text-center text-balance text-5xl relative inline font-extrabold"
                    >
                        Continued Care for Growing Children
                    </h2>
                    <p className="text-center text-balance text-2xl relative font-medium">
                        Our connection with families grows stronger with time. For children graduating from our programs, we offer additional opportunities for continued growth and joyful exploration.
                    </p>
                </header>
                <div className='max-w-[1000px] grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-row-3 items-center justify-center text-white text-center gap-16'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <img src="./camp.svg" className='w-8' alt="eye vector" />
                        <h2 className='text-2xl font-extrabold'>Seasonal Camps</h2>
                        <p>
                            Engaging, theme-based holiday programs that spark creativity, social bonding, and hands-on discovery.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <img src="./hand-heart.svg" className='w-8' alt="heart vector" />
                        <h2 className='text-2xl font-extrabold'>After-School Daycare</h2>
                        <p>
                            A caring environment for children to relax, play, and learn after school hours, surrounded by familiar faces and structured fun.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <img src="./engage.svg" className='w-8' alt="engage vector" />
                        <h2 className='text-2xl font-extrabold'>Alumni Engagement</h2>
                        <p>
                            We love seeing our little graduates return for special events, learning circles, or just a visit. Many continue to thrive in ways that trace back to their days at Cuddles.
                        </p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </section>
    )
}

export default ContinuedCare