import React from 'react'

const VissionAndMission = () => {
    return (
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="h-max bg-[#4AA6B1] px-4 md:px-14 flex flex-col items-center justify-center">
                <header className="mx-auto max-w-6xl px-6 py-10 text-white flex flex-col gap-8 justify-center items-center">
                    <h2
                        className="text-center text-balance text-5xl relative inline font-extrabold"
                    >
                        Our Vision & mission
                    </h2>
                </header>
                <div className='max-w-[700px] grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-row-2 items-center justify-center text-white text-center gap-16'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <img src="./eyes.svg" className='w-8' alt="eye vector" />
                        <h2 className='text-2xl font-extrabold'>Vision</h2>
                        <p>We envision a future where early childhood is honoured as the most powerful stage of learning. At Cuddles, we strive to redefine preschool education by creating environments where curiosity is cherished, imagination is nurtured, and the joy of learning lasts a lifetime.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <img src="./hand-heart.svg" className='w-8' alt="heart vector" />
                        <h2 className='text-2xl font-extrabold'>Mission</h2>
                        <p>Our mission is to nurture young minds through playful, purposeful learning that builds strong foundations for life. We aim to create a joyful environment where every child feels safe, supported, and inspired to grow with confidence and creativity.
                        </p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </section>
    )
}

export default VissionAndMission