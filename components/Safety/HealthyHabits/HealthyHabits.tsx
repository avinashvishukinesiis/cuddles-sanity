import { ContentCard } from '@/components/ContentCard';
import { Safety } from '@/lib/types'
import { urlFor } from '@/lib/sanity'
import React from 'react'

interface HealthyHabitsProps {
    safetyData?: Safety | null
}

const HealthyHabits: React.FC<HealthyHabitsProps> = ({ safetyData }) => {
    const defaultData = {
        healthyHabitsSection: {
            title: "Healthy Habits Start Early",
            healthyFeatures: [
                { title: "Healthy Eating", description: "Children bring vegetarian food from home; junk food is not allowed.", image: null, imageAlt: "Healthy eating habits" },
                { title: "Allergy Considerations", description: "We work closely with parents to accommodate special dietary needs.", image: null, imageAlt: "Allergy Considerations" },
                { title: "Supervision", description: "Mealtimes are calm, clean, and closely supervised", image: null, imageAlt: "Supervision" }
            ]
        }
    }

    const healthyData = safetyData?.healthyHabitsSection || defaultData.healthyHabitsSection
    return (
        <section className="w-full h-max bg-white flex items-center justify-center pt-8">
            <div className='w-full px-4 md:px-0 md:w-[70vw] flex flex-col gap-8'>
                <h2 className='font-extrabold text-3xl md:text-7xl text-blue  text-center'>
                    {healthyData.title}
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-6'>
                    {healthyData.healthyFeatures?.map((item: { title: string; description: string; image?: unknown; imageAlt: string }, index: number) => {
                        const imageUrl = item.image ? urlFor(item.image).url() : `/healthy-eating.jpg`; // fallback
                        return (
                            <ContentCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={imageUrl}
                                imageAlt={item.imageAlt}
                                titleColor="blue"
                                className="border-blue"
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HealthyHabits