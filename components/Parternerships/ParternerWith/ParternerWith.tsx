import React from 'react'
import { Partnerships } from '@/lib/types'

interface ParternerWithProps {
    partnershipsData?: Partnerships | null
}

const ParternerWith: React.FC<ParternerWithProps> = ({ partnershipsData }) => {
    const defaultData = {
        partnerWithSection: {
            title: 'Who we partner with!',
            subtitle: 'Whether you are an industry giant or an emerging enterprise, we work closely with you to offer your employees quality preschool and day-care services that truly support their work-life balance.',
            partnerTypes: [
                { title: 'IT & Tech Companies' },
                { title: 'Multinational Corporations' },
                { title: 'Government Institutions' },
                { title: 'Healthcare Providers' },
                { title: 'Startups and Corporate Parks' }
            ]
        }
    }

    const partnerData = partnershipsData?.partnerWithSection || defaultData.partnerWithSection
    return (
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="h-max bg-[#4AA6B1] px-4 md:px-14 flex flex-col gap-6 items-center justify-center">
                 <header className="mx-auto max-w-6xl px-6 py-10 text-white flex flex-col gap-8 justify-center items-center">
                    <h2
                        className="text-center text-balance text-5xl relative inline font-extrabold"
                    >
                        {partnerData.title}
                    </h2>
                    <p className="text-center text-balance text-2xl relative font-medium">
                        {partnerData.subtitle}
                    </p>
                </header>
                <div className='w-fit flex flex-col gap-4 md:gap-8'>
                        {
                            partnerData.partnerTypes?.map((item: { title: string }, ind: number)=>{
                                return(
                                    <div key={ind} className='flex items-center gap-4 text-white text-2xl'>
                                        <span className='w-11 h-11 flex items-center justify-center rounded-full bg-white text-[#4AA6B1] font-extrabold'>{ind+1}</span>
                                        <p>{item.title}</p>
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

export default ParternerWith