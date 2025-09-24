import { defineType } from 'sanity'

export const curriculum = defineType({
  name: 'curriculum',
  title: 'Curriculum',
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
          description: 'Upload hero background image (current: curriculum-hero-bg CSS class)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Our thoughtfully designed curriculum'
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'In this period of STEM learning and rushing milestones, we have designed our programs to celebrate children\'s journey toward learning and discovering their passion. Our curriculum is designed to grow with your child, gently and intentionally supporting their development at every stage.'
        }
      ]
    },
    {
      name: 'programsSection',
      title: 'Programs Section',
      type: 'object',
      fields: [
        {
          name: 'programs',
          title: 'Programs',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Program Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'ageRange',
                title: 'Age Range',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'color',
                title: 'Theme Color',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'icon',
                title: 'Program Icon',
                type: 'image',
                description: 'Upload program icon (curStar.svg, fallingstar.svg, bluesunvector.svg, starspark.svg, heartvector.png, ThunderVector.svg)',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'colSpan',
                title: 'Column Span',
                type: 'number',
                initialValue: 1
              }
            ]
          }]
        }
      ]
    },
    {
      name: 'dayAtCuddlesSection',
      title: 'Day at Cuddles Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'A Day at Cuddles'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'Every day at Cuddles follows a rhythm designed to comfort, inspire, and engage. Here\'s what a typical day looks like'
        },
        {
          name: 'dailySchedule',
          title: 'Daily Schedule',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'timeSlot',
                title: 'Time Slot',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              }
            ]
          }]
        }
      ]
    }
  ]
})