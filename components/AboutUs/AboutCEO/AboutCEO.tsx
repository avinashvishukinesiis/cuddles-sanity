import React from 'react'
import { AboutUs } from '@/lib/types'
import { urlFor } from '@/lib/sanity'

interface AboutCEOProps {
    aboutData?: AboutUs | null
}

const AboutCEO: React.FC<AboutCEOProps> = ({ aboutData }) => {
    const defaultData = {
        aboutCeoSection: {
            sectionTitle: "About The CEO",
            name: "Chandrika Bharath",
            title: "CEO & Founder",
            description: [
                "At the center of cuddles preschool is our CEO: Chandrika Bharath - an engineer by training, a mother by instinct, and an educator by choice. Since 2002 she's been building a space where children are not just taught, but understood. Her approach blends structure with softness. Her background in engineering gives her an eye for detail and systems, but it's her lived experience as a parent that shapes the way she sees children - not as boxes to fit into molds, but as individuals who need space, security, and a little spark to thrive.",
                "Every part of the Cuddles experience - from the curriculum to classroom design - reflects her belief that learning should feel like play, and school should feel like home. She stays hands-on constantly updating the program with the newest research and best practices (tried and tested) but never losing sight of the heart of it all: joy.",
                "Whether she's training teachers, planning a new activity, or crouching down to tie a shoelace, she leads with care. And it shows - in the way children settle in, in the way parents trust, and in the way teachers grow. Because childhood comes only once. And our CEO is making sure it counts."
            ],
            image: null
        }
    }

    const ceoData = aboutData?.aboutCeoSection || defaultData.aboutCeoSection

    return (
        <section className='flex flex-col items-center justify-center gap-12'>
            <header className="mx-auto max-w-6xl text-purple flex flex-col gap-8 justify-center items-center">
                <h2
                    className="text-center text-balance text-5xl relative inline font-extrabold"
                >
                    {ceoData.sectionTitle}
                </h2>
            </header>
            <img
                src={ceoData.image ? urlFor(ceoData.image).url() : "./CEO.jpg"}
                alt={`${ceoData.name} - ${ceoData.title}`}
                className='max-w-[500px] rounded-2xl'
            />
            <div className='flex flex-col justify-center items-center gap-8 text-purple text-center max-w-3xl'>
                <div className='flex flex-col gap-4 items-center'>
                    <h3 className='text-2xl font-bold'>{ceoData.name}</h3>
                    <p className='text-lg font-medium'>{ceoData.title}</p>
                </div>
                {ceoData.description.map((paragraph: string, index: number) => (
                    <p key={`ceo-paragraph-${index}`}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    )
}

export default AboutCEO