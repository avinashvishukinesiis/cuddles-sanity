import { ContentCard } from '@/components/ContentCard';
import React from 'react'

const HealthyHabits = () => {
    const safetyContentItems = [
        {
            id: "1",
            title: "Healthy Eating",
            description: "Children bring vegetarian food from home; junk food is not allowed.",
            image: "/healthy-eating.jpg",
            imageAlt: "Healthy eating habits",
            titleColor: "blue" as const,
        },
        {
            id: "2",
            title: "Allergy Considerations",
            description: "We work closely with parents to accommodate special dietary needs.",
            image: "/allergy-considerations.jpg",
            imageAlt: "Allergy Considerations",
            titleColor: "blue" as const,
        },
        {
            id: "3",
            title: "Supervision",
            description: "Mealtimes are calm, clean, and closely supervised",
            image: "/Supervision.jpg",
            imageAlt: "Supervision",
            titleColor: "blue" as const,
        },
    ];
    return (
        <section className="w-full h-max bg-white flex items-center justify-center pt-8">
            <div className='w-full px-4 md:px-0 md:w-[70vw] flex flex-col gap-8'>
                <h2 className='font-extrabold text-3xl md:text-7xl text-blue  text-center'>
                    Healthy Habits Start Early
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-6'>
                    {safetyContentItems.map((item) => {
                        return (
                            <ContentCard key={item.id} title={item.title} description={item.description} image={item.image} imageAlt={item.imageAlt} titleColor={item.titleColor} className={`border-blue`}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HealthyHabits