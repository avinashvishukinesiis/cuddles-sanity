import React from 'react'
import { Curriculum } from '@/lib/types'
import { urlFor } from '@/lib/sanity'

interface HeroSectionProps {
    curriculumData?: Curriculum | null
}

const HeroSection: React.FC<HeroSectionProps> = ({ curriculumData }) => {
    const defaultData = {
        heroSection: {
            title: "Our thoughtfully designed curriculum",
            description: "In this period of STEM learning and rushing milestones, we have designed our programs to celebrate children's journey toward learning and discovering their passion. Our curriculum is designed to grow with your child, gently and intentionally supporting their development at every stage.",
            backgroundImage: null
        },
        programsSection: {
            programs: [
                { title: 'Infants', ageRange: '3 months babies onwards', color: '#9769A5', colSpan: 2, order: 1 },
                { title: 'Toddler', ageRange: '1-2 years', color: '#EBAA35', colSpan: 1, order: 2 },
                { title: 'Play group', ageRange: '2-3 years', color: '#58BAC6', colSpan: 1, order: 3 },
                { title: 'Nursery', ageRange: '3-4 years', color: '#F9839D', colSpan: 1, order: 4 },
                { title: 'Prep-1', ageRange: '4-5 years', color: '#69CEE9', colSpan: 1, order: 5 },
                { title: 'Prep-2', ageRange: '5-6 years', color: '#F37D97', colSpan: 1, order: 6 }
            ]
        }
    }

    const heroData = curriculumData?.heroSection || defaultData.heroSection
    const programsData = curriculumData?.programsSection || defaultData.programsSection
    const programs = programsData.programs?.sort((a: { order?: number }, b: { order?: number }) => (a.order || 0) - (b.order || 0)) || defaultData.programsSection.programs

    const backgroundImageUrl = heroData.backgroundImage
        ? urlFor(heroData.backgroundImage).url()
        : '/classroom.jpg';

    return (
        <section className='relative h-max'>
            {/* Hero with background and overlay content */}
            <div
                className="w-full h-[80vh] bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center justify-center"
                style={{
                    backgroundImage: `url('${backgroundImageUrl}')`
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Hero content overlay */}
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className='font-extrabold text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg'>
                        {heroData.title}
                    </h1>
                    <p className='text-lg md:text-xl lg:text-2xl font-medium leading-relaxed drop-shadow-md max-w-3xl mx-auto'>
                        {heroData.description}
                    </p>
                </div>

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

            {/* Age Programs Section */}
            <div className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className='font-extrabold text-3xl md:text-5xl text-[#4AA6B1] mb-4'>
                            Our Age-Based Programs
                        </h2>
                        <p className='text-lg text-[#4AA6B1] max-w-2xl mx-auto'>
                            Thoughtfully designed programs that grow with your child at every stage of development
                        </p>
                    </div>
                    {/* Program Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programs.map((program: { title: string; ageRange: string; color: string; icon?: unknown; colSpan?: number }, index: number) => (
                            <div
                                key={index}
                                className={`${program.colSpan === 2 ? 'lg:col-span-2' : ''} bg-white border-2 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                                style={{ borderColor: program.color }}
                            >
                                {/* Background gradient */}
                                <div
                                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10"
                                    style={{ backgroundColor: program.color }}
                                ></div>

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <h3
                                            className="font-extrabold text-2xl md:text-3xl mb-2"
                                            style={{ color: program.color }}
                                        >
                                            {program.title}
                                        </h3>
                                        <p
                                            className="text-lg md:text-xl font-semibold mb-4"
                                            style={{ color: program.color }}
                                        >
                                            {program.ageRange}
                                        </p>
                                    </div>

                                    {/* Program highlight features */}
                                    <div className="mt-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: program.color }}
                                            ></div>
                                            <span className="text-sm text-gray-600">
                                                {program.title === 'Infants' && 'Nurturing care & early bonding'}
                                                {program.title === 'Toddler' && 'Exploration & motor skills'}
                                                {program.title === 'Play group' && 'Social skills & creativity'}
                                                {program.title === 'Nursery' && 'Language & cognitive development'}
                                                {program.title === 'Prep-1' && 'School readiness & independence'}
                                                {program.title === 'Prep-2' && 'Advanced learning & confidence'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Program Icon */}
                                <div className="absolute top-4 right-4 opacity-80">
                                    {program.icon && typeof program.icon === 'object' && (
                                        <img
                                            src={urlFor(program.icon).url()}
                                            alt={`${program.title} icon`}
                                            className="w-12 h-12"
                                        />
                                    )}
                                    {!program.icon && program.title === 'Infants' && (
                                        <img src="./curStar.svg" alt="Star vector" className="w-12 h-12" />
                                    )}
                                    {!program.icon && program.title === 'Toddler' && (
                                        <img src="./fallingstar.svg" alt="Falling star" className="w-12 h-12" />
                                    )}
                                    {!program.icon && program.title === 'Play group' && (
                                        <img src="./bluesunvector.svg" alt="Sun icon" className="w-12 h-12" />
                                    )}
                                    {!program.icon && program.title === 'Nursery' && (
                                        <img src="./starspark.svg" alt="Star icon" className="w-12 h-12" />
                                    )}
                                    {!program.icon && program.title === 'Prep-1' && (
                                        <img src="./heartvector.png" alt="Heart vector art" className="w-12 h-12" />
                                    )}
                                    {!program.icon && program.title === 'Prep-2' && (
                                        <img src="./ThunderVector.svg" alt="Thunder vector art" className="w-12 h-12" />
                                    )}
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