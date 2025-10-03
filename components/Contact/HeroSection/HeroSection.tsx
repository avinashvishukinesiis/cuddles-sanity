import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'
import { IoCall } from 'react-icons/io5'
import { Contact } from '@/lib/types'
import { urlFor } from '@/lib/sanity'

interface HeroSectionProps {
    contactData?: Contact | null
}

const HeroSection: React.FC<HeroSectionProps> = ({ contactData }) => {
    const heroData = contactData?.heroSection || {
        title: 'We are here to guide you through the first step into your child\'s journey',
        backgroundImage: null
    }

    const backgroundImageUrl = heroData.backgroundImage
        ? urlFor(heroData.backgroundImage).url()
        : '/contactroom.jpg';

    return (
        <section className='relative h-max'>
            {/* Hero with background */}
            <div
                className="w-full h-[80vh] bg-cover bg-center bg-no-repeat relative overflow-hidden"
                style={{
                    backgroundImage: `url('${backgroundImageUrl}')`
                }}
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
                <div className='w-full px-4 md:px-0 flex flex-col gap-8'>
                    <h2 className='font-extrabold text-3xl md:text-5xl text-[#9769A5]  text-center'>
                        {heroData.title}
                    </h2>

                    <div className='w-full flex flex-col gap-6 md:px-[5vw]'>
                        <div className='grid md:grid-cols-6 md:grid-rows-2 grid-cols-1 gap-8'>
                            <div className='md:col-span-3 md:row-span-2 border border-[#DE627D] text-[#DE627D] rounded-2xl flex overflow-hidden'>
                                <div className='flex flex-col gap-6 w-[800px] p-6'>
                                    <p className='font-extrabold'>Salarpuria Greenage Centre</p>
                                    <FaLocationDot />
                                    <p className='font-extrabold'>Salarpuria Greenage Apartments, Next to Oxford Dental College, Hosur Road, Bommanahalli, Bengaluru 560068</p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.100288112474!2d77.62657302404054!3d12.90127243740769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14954a9a34c3%3A0x109b9cf1d94096b9!2sSattva%20Greenage!5e0!3m2!1sen!2sin!4v1757799523332!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className='md:row-span-1 md:col-span-3 border border-[#D5973A] text-[#D5973A] font-extrabold rounded-2xl flex justify-between items-center p-6'>
                                <IoCall className='w-[25px] h-[25px]'/>
                                <div className='flex flex-col'>
                                    <p>+91-80503 07665</p>
                                    <p>+91-90360 90909</p>
                                </div>
                            </div>
                            <div className='md:row-span-1 md:col-span-3 border border-[#4AA6B1] text-[#4AA6B1] font-extrabold rounded-2xl flex justify-between items-center p-6'>
                                <HiMail className='w-[25px] h-[25px]'/>
                                <p>greenage@cuddles.co.in</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-6 md:grid-rows-2 grid-cols-1 gap-8'>
                            <div className='md:col-span-3 md:row-span-2 border border-[#F0B54C] text-[#F0B54C] rounded-2xl flex overflow-hidden'>
                                <div className='flex flex-col gap-6 w-[800px] p-6'>
                                    <p className='font-extrabold'>Cuddles  AECS Layout</p>
                                    <FaLocationDot />
                                    <p className='font-extrabold'>
                                        #777, 12th Main, 60 Feet Road, Block-A, AECS Layout, Bengaluru 560068
                                    </p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.100288112474!2d77.62657302404054!3d12.90127243740769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14954a9a34c3%3A0x109b9cf1d94096b9!2sSattva%20Greenage!5e0!3m2!1sen!2sin!4v1757799523332!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className='md:row-span-1 md:col-span-3 border border-[#4AA6B1] text-[#4AA6B1] font-extrabold rounded-2xl flex justify-between items-center p-6'>
                                <IoCall className='w-[25px] h-[25px]'/>
                                <div className='flex flex-col'>
                                    <p>+91-80503 05579</p>
                                    <p>+91-90360 90909</p>
                                </div>
                            </div>
                            <div className='md:row-span-1 md:col-span-3 border border-purple text-purple font-extrabold rounded-2xl flex justify-between items-center p-6'>
                                <HiMail className='w-[25px] h-[25px]'/>
                                <p>play@cuddles.co.in</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-6 md:grid-rows-2 grid-cols-1 gap-8'>
                            <div className='md:col-span-3 md:row-span-2 border border-[#DE627D] text-[#DE627D] rounded-2xl flex overflow-hidden'>
                                <div className='flex flex-col gap-6 w-[800px] p-6'>
                                    <p className='font-extrabold'>Cuddles - Gadag</p>
                                    <FaLocationDot />
                                    <p className='font-extrabold'>
                                        Cuddles Preschool, Jaycee school building, Hudco Colony, Mulgund road, Gadag- 582103
                                    </p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.100288112474!2d77.62657302404054!3d12.90127243740769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14954a9a34c3%3A0x109b9cf1d94096b9!2sSattva%20Greenage!5e0!3m2!1sen!2sin!4v1757799523332!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className='md:row-span-1 md:col-span-3 border border-[#D5973A] text-[#D5973A] font-extrabold rounded-2xl flex justify-between items-center p-6'>
                                <IoCall className='w-[25px] h-[25px]'/>
                                <div className='flex flex-col'>
                                    <p>+91- 63646 93332</p>
                                    <p>+91-9036090909</p>
                                </div>
                            </div>
                            <div className='md:row-span-1 md:col-span-3 border border-[#4AA6B1] text-[#4AA6B1] font-extrabold rounded-2xl flex justify-between items-center p-6'>
                                <HiMail className='w-[25px] h-[25px]'/>
                                <p>greenage@cuddles.co.in</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection