import React from 'react'
import { ImCross } from "react-icons/im";


const Include = () => {
    const content = [
        {
            icon: './report.png',
            include: 'Safe, child-friendly campus',
            exclude: 'Unscreened or untrained staff',
        },
        {
            icon: './blub.png',
            include: 'Experienced and compassionate educators',
            exclude: 'Academic pressure or rote learning',
        },
        {
            icon: './medal.png',
            include: 'Play-based, age-appropriate curriculum',
            exclude: 'One-size-fits-all teaching',
        },
        {
            icon: './thumbsup.png',
            include: 'Personalised care with low student-to-teacher ratio',
            exclude: 'Overcrowded classrooms',
        },
        {
            icon: './report.png',
            include: 'Daily learning updates and activity sheets',
            exclude: 'Generic or outdated lesson plans',
        },
    ]
    return (
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" className="relative -mb-1" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L120,176C240,192,480,224,720,208C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <div className="h-max bg-[#4AA6B1] px-4 md:px-14 flex flex-col items-center justify-center">
                <header className="mx-auto max-w-6xl px-6 py-10 text-white flex flex-col gap-8 justify-center items-center">
                    <h2
                        className="text-center text-balance text-5xl relative inline font-extrabold"
                    >
                        What’s Included and what’s Not
                    </h2>
                    <h3 className="text-center text-balance text-2xl relative font-medium">
                        We thoughtfully design every part of a child’s early years.
                    </h3>
                </header>
                <div className='flex flex-col gap-16 justify-center items-center max-w-[600px]'>
                    {
                        content.map((item, ind) => {
                            return (
                                <div key={ind} className='grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 gap-8 w-full'>
                                    <div className='flex gap-4 items-center'>
                                        <img src={item.icon} alt={item.include} className='h-6' />
                                        <p className='text-white text-[14px] text-center'>{item.include}</p>
                                    </div>
                                    <div className='flex gap-4 md:items-center md:justify-center relative pl-10 md:pl-6'>
                                        <ImCross className='h-6 text-white absolute left-0'/>
                                        <p className='text-white text-[14px] text-center'>{item.include}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,320L21.8,304C43.6,288,87,256,131,224C174.5,192,218,160,262,154.7C305.5,149,349,171,393,181.3C436.4,192,480,192,524,165.3C567.3,139,611,85,655,80C698.2,75,742,117,785,112C829.1,107,873,53,916,48C960,43,1004,85,1047,106.7C1090.9,128,1135,128,1178,138.7C1221.8,149,1265,171,1309,170.7C1352.7,171,1396,149,1418,138.7L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
        </section>
    )
}

export default Include