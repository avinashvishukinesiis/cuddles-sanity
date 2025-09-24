import { defineType } from 'sanity'

export const assistance = defineType({
  name: 'assistance',
  title: 'Assistance',
  type: 'document',
  fields: [
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Upload hero background image (current: assistance-hero-bg CSS class)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'We guide every transition with care'
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'We make the shift to formal school environments a positive, well-supported experience for both children and parents. Every element of our program — academic, emotional, and social — helps children step into their next chapter with readiness and joy.'
        }
      ]
    },
    {
      name: 'continuedCareSection',
      title: 'Continued Care Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Continued Care for Growing Children'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'Our connection with families grows stronger with time. For children graduating from our programs, we offer additional opportunities for continued growth and joyful exploration.'
        },
        {
          name: 'continuedCareItems',
          title: 'Continued Care Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Item Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Item Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'icon',
                title: 'Item Icon',
                type: 'image',
                description: 'Upload continued care icon (camp.svg, hand-heart.svg, engage.svg)',
                options: {
                  hotspot: true
                }
              }
            ]
          }]
        }
      ]
    },
    {
      name: 'parentResourceSection',
      title: 'Parent Resource Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Parent Resource Hub'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'We understand that parenting is a journey filled with questions and discovery. That\'s why we offer curated resources to help you support your child\'s growth at home too'
        },
        {
          name: 'parentResourceItems',
          title: 'Parent Resource Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Item Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Item Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'image',
                title: 'Item Image',
                type: 'image',
                description: 'Upload parent resource image (childonshoulder.png, writing.png, woman.png, typing.png)',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'imageAlt',
                title: 'Image Alt Text',
                type: 'string'
              },
              {
                name: 'titleColor',
                title: 'Title Color Theme',
                type: 'string',
                options: {
                  list: [
                    { title: 'Purple', value: 'purple' },
                    { title: 'Blue', value: 'blue' },
                    { title: 'Green', value: 'green' },
                    { title: 'Pink', value: 'pink' }
                  ]
                }
              }
            ]
          }]
        }
      ]
    }
  ]
})