import React from 'react'

const DayAtCuddle = () => {

    const content = [
        {

            point: "9:00 - 9:30 AM Warm Welcome And Movement",
            description:
                "The day begins with greetings, prayer, yoga, and light exercises to help children feel settled and energised.",
        },
        {

            point: "9:30 AM - 11:00 AM Learning Time",
            description:
                "Children explore academic concepts, language, and early literacy through Montessori tools, stories, rhymes, and hands-on activities.",
        },
        {

            point: "11:00 AM - 12:30 PM Creative Play and Outdoor Fun",
            description:
                "New ideas and topics are introduced through stories, play, and interactive tools that spark curiosity.",
        },
        {

            point: "12:30 PM Preschool hours conclude",
            description:
                "Children enrolled in our Day Care or Extended Day Care program continue with a peaceful, balanced routine for the rest of the day.",
        },
        {

            point: "12:30 PM - 1:30 PM Lunch and Wind Down",
            description:
                "Children enjoy their home-packed lunch, freshen up, and ease into a restful afternoon.",
        },
        {

            point: "1:30 PM - 3:30 PM Nap and Quiet Time",
            description:
                "A calm nap period helps children recharge in a cozy, supervised environment.",
        },
        {

            point: "3:30 PM - 6:30 PM Enrichment and Wrap-Up",
            description:
                "Evenings include reading, drama, music, indoor games, and time to unwind before heading home.",
        },
    ];


    return (
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="h-max bg-[#4AA6B1] px-4 md:px-14 flex flex-col gap-6 items-center justify-center">
                <header className="mx-auto max-w-6xl px-6 py-10 text-white flex flex-col gap-8 justify-center items-center">
                    <h2
                        className="text-center text-balance text-5xl relative inline font-extrabold"
                    >
                        A Day at Cuddles
                    </h2>
                    <p className="text-center text-balance text-2xl relative font-medium">
                        Every day at Cuddles follows a rhythm designed to comfort, inspire, and engage.
                        Here’s what a typical day looks like
                    </p>
                </header>
                <div className='w-fit flex flex-col gap-4 md:gap-8'>
                    {
                        content.map((item, ind) => {
                            return (
                                <div key={ind} className='flex items-center gap-4 text-white text-2xl max-w-[600px]'>
                                    <span className='min-w-11 min-h-11 flex items-center justify-center rounded-full bg-white text-[#4AA6B1] font-extrabold'>{ind + 1}</span>
                                    <div>
                                        <p className='font-extrabold'>{item.point}</p>
                                        <p className='text-[16px]'>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </section>
    )
}

export default DayAtCuddle