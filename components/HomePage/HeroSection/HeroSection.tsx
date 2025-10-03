import React from 'react'
import Image from 'next/image'
import { FiArrowRight } from "react-icons/fi";
import { HeroSection as HeroSectionType } from '@/lib/types'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'

interface HeroSectionProps {
    heroData?: HeroSectionType | null
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroData }) => {
    // Fallback data if Sanity data is not available
    const defaultData = {
        title: "Where imagination takes flight.",
        description: "At Cuddles Preschool, we believe that every child's journey begins with a sense of wonder, joy, and discovery. We are more than just a place for early education, we're a second home where children feel loved, valued, and inspired to explore the world around them.",
        primaryButton: { text: "Schedule A Visit", link: "/contact" },
        secondaryButton: { text: "Explore Programs", link: "/curriculum" }
    }

    const content = heroData || defaultData

    return (
        <section className='relative h-max'>
            {/* Hero with background */}
            <div
                className="w-full h-[80vh] bg-cover bg-center bg-no-repeat relative overflow-hidden"
                style={{
                    backgroundImage: heroData?.backgroundImage
                        ? `url(${urlFor(heroData.backgroundImage).url()})`
                        : undefined
                }}
            >
                {!heroData?.backgroundImage && (
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/Hero_image.png')" }}
                    />
                )}

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
            <div className="w-full h-max bg-white relative top-10 flex items-center justify-center py-8">
                <div className='w-full px-4 md:px-0 md:w-[60vw] flex flex-col gap-8'>
                    <h2 className='font-extrabold text-3xl md:text-7xl text-[#9769A5] text-center'>
                        <span className='relative'>
                            <Image src="./star.svg" alt="star decoration" className='absolute md:right-36 md:bottom-4 right-12 bottom-1' width={48} height={48} />
                            {content.title.split(' ').slice(0, 1).join(' ')}
                        </span>{' '}
                        {content.title.split(' ').slice(1, -1).join(' ')}{' '}
                        <br />
                        <span className='relative'>
                            {content.title.split(' ').slice(-1).join(' ')}
                            <Image src="./plane_vector.svg" alt="plane decoration" className='absolute md:left-40 md:top-4 left-16 top-2' width={48} height={48} />
                        </span>
                    </h2>
                    <p className='text-[18px] font-medium text-center text-[#9769A5]'>
                        {content.description}
                    </p>
                    <div className='flex flex-col md:flex-row md:gap-8 gap-3 justify-center px-8 md:px-0'>
                        <Link href={content.primaryButton.link}>
                            <button className='bg-[#9769A5] px-6 py-4 text-white text-[18px] font-extrabold rounded-md flex justify-center items-center gap-4 cursor-pointer'>
                                {content.primaryButton.text} <FiArrowRight size={20}/>
                            </button>
                        </Link>
                        <Link href={content.secondaryButton.link}>
                            <button className='bg-white border-2 px-6 py-4 border-[#9769A5] text-[#9769A5] text-[18px] font-extrabold rounded-md cursor-pointer'>
                                {content.secondaryButton.text}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

