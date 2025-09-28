import React from 'react'
import { Safety } from '@/lib/types'
import { urlFor } from '@/lib/sanity'

interface EmergencyProps {
    safetyData?: Safety | null
}

const Emergency: React.FC<EmergencyProps> = ({ safetyData }) => {
    const defaultData = {
        emergencySection: {
            title: 'Continued Care for Growing Children',
            emergencyFeatures: [
                { title: 'Trained staff', description: 'All staff are trained in first aid and certified in CPR.', icon: null },
                { title: 'Healthcare Partnership', description: 'We are partnered with Apollo Clinic for quick medical assistance.', icon: null },
                { title: 'Emergency ready', description: 'Emergency plans are in place and regularly practiced.', icon: null }
            ]
        }
    }

    const emergencyData = safetyData?.emergencySection || defaultData.emergencySection
    return (
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="h-max bg-[#4AA6B1] px-4 md:px-14 flex flex-col items-center justify-center">
                <header className="mx-auto max-w-6xl px-6 py-10 text-white flex flex-col gap-8 justify-center items-center">
                    <h2
                        className="text-center text-balance text-5xl relative inline font-extrabold"
                    >
                        {emergencyData.title}
                    </h2>
                </header>
                <div className='max-w-[1000px] grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-row-3 items-center justify-center text-white text-center gap-16'>
                    {emergencyData.emergencyFeatures?.map((feature: { title: string; description: string; icon?: unknown }, index: number) => {
                        const iconUrl = feature.icon ? urlFor(feature.icon).url() : `./trained.svg`; // fallback
                        return (
                            <div key={index} className='flex flex-col gap-4 justify-center items-center'>
                                <img src={iconUrl} className='w-8' alt={`${feature.title} icon`} />
                                <h2 className='text-2xl font-extrabold'>{feature.title}</h2>
                                <p>{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA6B1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </section>
    )
}

export default Emergency