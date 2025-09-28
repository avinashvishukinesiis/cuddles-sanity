import { ContentCard } from '@/components/ContentCard'
import React from 'react'
import { Assistance } from '@/lib/types'

interface ParentResourceProps {
    assistanceData?: Assistance | null
}

const ParentResource: React.FC<ParentResourceProps> = ({ assistanceData }) => {
  const contentItems = [
    {
      id: "1",
      title: "Parenting Insights",
      description: "Articles and advice on routines, emotional wellbeing, developmental milestones, and more.",
      image: "/childonshoulder.png",
      imageAlt: "Parent holding child in warm outdoor setting",
      titleColor: "purple" as const,
    },
    {
      id: "2",
      title: "Printable Worksheets & Activities",
      description: "Designed by our CEO to encourage continued learning through play at home.",
      image: "/writing.png",
      imageAlt: "Hands writing on paper with educational materials",
      titleColor: "purple" as const,
    },
    {
      id: "3",
      title: "Expert Advice",
      description:
        "Contributions from child psychologists and early educators on important topics like screen time, separation anxiety, and resilience.",
      image: "/woman.png",
      imageAlt: "Professional educator at desk with educational resources",
      titleColor: "purple" as const,
    },
    {
      id: "4",
      title: "The Cuddles Blog",
      description:
        "Real stories, tips, and joyful moments from our classrooms, written to inspire and connect our parent community.",
      image: "/typing.png",
      imageAlt: "Hands typing on laptop keyboard",
      titleColor: "purple" as const,
    },
  ]
  return (
    <section>
      <div className="h-max px-4 md:px-14 flex flex-col items-center justify-center">
        <header className="mx-auto max-w-6xl px-6 py-10 text-purple flex flex-col gap-8 justify-center items-center">
          <h2
            className="text-center text-balance text-5xl relative inline font-extrabold"
          >
            Parent Resource Hub
          </h2>
          <p className="text-center text-balance text-2xl relative font-medium">
            We understand that parenting is a journey filled with questions and discovery. That’s why we offer curated resources to help you support your child’s growth at home too
          </p>
        </header>
        <div className='max-w-[700px] grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-row-4 items-center justify-center text-purple text-center gap-8'>
          {contentItems.map((item) => {
            return (
              <ContentCard key={item.id} title={item.title} description={item.description} image={item.image} imageAlt={item.imageAlt} titleColor={item.titleColor} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ParentResource