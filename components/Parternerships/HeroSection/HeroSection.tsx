import React from 'react'
import { Partnerships } from '@/lib/types'
import { urlFor } from '@/lib/sanity'

interface HeroSectionProps {
    partnershipsData?: Partnerships | null
}

const HeroSection: React.FC<HeroSectionProps> = ({ partnershipsData }) => {
    const defaultData = {
        heroSection: {
            title: "Collaborate with us to support your employees",
            description: "At Cuddles, we understand the challenges working parents face. That's why we offer customised daycare solutions for corporate partners, ensuring that your employees' children receive the best care and education while they focus on their work.",
            backgroundImage: null,
            benefitsCards: [
                { title: 'Discounted fees', description: 'Special rates based on the number of enrollments.', color: '#F0B54C' },
                { title: 'Customized Solutions', description: 'Tailored programs to meet your employees\' needs.', color: '#DE627D' },
                { title: 'Peace of Mind', description: 'A safe, nurturing environment for your employees\' children.', color: '#4AA6B1' }
            ]
        }
    }

    const heroData = partnershipsData?.heroSection || defaultData.heroSection

    const backgroundImageUrl = heroData.backgroundImage
        ? urlFor(heroData.backgroundImage).url()
        : null;

    return (
        <section className='relative h-max'>
            {/* Hero with background */}
            <div
                className={`w-full h-[80vh] bg-cover bg-center bg-no-repeat relative overflow-hidden ${!backgroundImageUrl ? 'about-hero-bg' : ''}`}
                style={backgroundImageUrl ? { backgroundImage: `url('${backgroundImageUrl}')` } : {}}
            >
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
                    <h2 className='font-extrabold text-3xl md:text-7xl text-[#9769A5] text-center'>
                        {heroData.title}
                    </h2>
                    <p className='text-[18px] font-medium text-center text-[#9769A5]'>
                        {heroData.description}
                    </p>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-6'>
                        {heroData.benefitsCards?.map((card: { title: string; description: string; color: string }, index: number) => (
                            <div key={index} className='rounded-2xl overflow-hidden border' style={{ borderColor: card.color }}>
                                <div className='p-4' style={{ backgroundColor: card.color }}>
                                    <h3 className='text-2xl text-white font-extrabold'>{card.title}</h3>
                                </div>
                                <div className='p-4'>
                                    <p style={{ color: card.color }}>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection