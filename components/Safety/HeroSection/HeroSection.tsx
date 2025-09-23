import { ContentCard } from '@/components/ContentCard'
import React from 'react'

const HeroSection = () => {
    const safetyContentItems = [
        {
            id: "1",
            title: "Daily Sanitization",
            description: "Classrooms and play areas are cleaned and sanitised daily",
            image: "/daily-sanitization.jpg",
            imageAlt: "Hand using sanitizer bottle",
            titleColor: "purple" as const,
        },
        {
            id: "2",
            title: "Temperature Checks",
            description: "Temperature checks are done for all children and staff",
            image: "/temperature-checks.jpg",
            imageAlt: "Hand holding thermometer for temperature check",
            titleColor: "purple" as const,
        },
        {
            id: "3",
            title: "CCTV Monitoring",
            description: "24/7 surveillance to ensure a secure environment.",
            image: "/cctv-monitoring.jpg",
            imageAlt: "CCTV camera setup",
            titleColor: "purple" as const,
        },
        {
            id: "4",
            title: "Child Proofing",
            description: "Every toy, tool, and piece of furniture is chosen with safety in mind",
            image: "/child-proofing.jpg",
            imageAlt: "Living room setup with safe furniture",
            titleColor: "purple" as const,
        },
        {
            id: "5",
            title: "Organised Spaces",
            description: "Teachers maintain clean, organised learning spaces throughout the day",
            image: "/child-proofing.jpg",
            imageAlt: "Living room with neatly arranged furniture",
            titleColor: "purple" as const,
        },
        {
            id: "6",
            title: "Child Pick-Up Verification",
            description: "Strict protocols to ensure your child’s safety",
            image: "/pickup-verification.jpg",
            imageAlt: "Hand showing thumbs up",
            titleColor: "purple" as const,
        },
    ];

    return (
        <section className='relative h-max'>
            {/* Hero with background */}
            <div className="w-full h-[80vh] hallroom-hero-bg  bg-cover bg-center bg-no-repeat relative overflow-hidden">
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
                    <h2 className='font-extrabold text-3xl md:text-7xl text-[#9769A5]  text-center'>A secure and nurturing space for your child</h2>
                    <p className='text-[18px] font-medium text-center text-[#9769A5]'>
                        At Cuddles Preschool, safety is not just a policy. It is a part of how we care, teach, and grow. Under the leadership of our founder Chandrika Bharath, every measure is thoughtfully planned to support playful learning without compromising on protection. We create an environment where children can explore freely while being safe, healthy, and supported at every step.
                    </p>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-6'>
                        {safetyContentItems.map((item) => {
                            return (
                                <ContentCard key={item.id} title={item.title} description={item.description} image={item.image} imageAlt={item.imageAlt} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection