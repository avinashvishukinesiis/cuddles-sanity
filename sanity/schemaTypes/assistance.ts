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
        },
        {
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'string',
          initialValue: 'Here\'s how we support this transition:'
        },
        {
          name: 'transitionSupport',
          title: 'Transition Support Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Card Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Card Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'color',
                title: 'Theme Color',
                type: 'string',
                validation: (Rule) => Rule.required()
              }
            ]
          }],
          initialValue: [
            { title: 'School Admission Guidance', description: 'We offer personalised advice on selecting the right school and navigating the admission process with ease.', color: '#F0B54C' },
            { title: 'Interview Readiness', description: 'Through playful mock sessions, storytelling, and expression games, children develop the confidence to communicate clearly during school interviews.', color: '#DE627D' },
            { title: 'Primary School Prep Activities', description: 'Age-appropriate worksheets, literacy and  numeracy boosters, and skill-building sessions bridge the gap between preschool and formal education.', color: '#4AA6B1' }
          ]
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
          name: 'careFeatures',
          title: 'Care Features',
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
          name: 'resources',
          title: 'Parent Resources',
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