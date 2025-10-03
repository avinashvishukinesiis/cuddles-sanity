import { ContentCard } from '@/components/ContentCard'
import React from 'react'
import { Assistance } from '@/lib/types'
import { urlFor } from '@/lib/sanity'

interface ParentResourceProps {
  assistanceData?: Assistance | null
}

const ParentResource: React.FC<ParentResourceProps> = ({ assistanceData }) => {
  const section = assistanceData?.parentResourceSection

  return (
    <section>
      <div className="h-max px-4 md:px-14 flex flex-col items-center justify-center">
        <header className="mx-auto max-w-6xl px-6 py-10 text-purple flex flex-col gap-8 justify-center items-center">
          <h2
            className="text-center text-balance text-5xl relative inline font-extrabold"
          >
            {section?.title || 'Parent Resource Hub'}
          </h2>
          <p className="text-center text-balance text-2xl relative font-medium">
            {section?.description || "We understand that parenting is a journey filled with questions and discovery. That's why we offer curated resources to help you support your child's growth at home too"}
          </p>
        </header>
        <div className='max-w-[700px] grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-row-4 items-center justify-center text-purple text-center gap-8'>
          {section?.resources?.map((resource, index) => {
            const imageUrl = resource.image ? urlFor(resource.image).url() : '/placeholder.png'
            return (
              <ContentCard
                key={index}
                title={resource.title}
                description={resource.description}
                image={imageUrl}
                imageAlt={resource.imageAlt || resource.title}
                titleColor="purple"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ParentResource