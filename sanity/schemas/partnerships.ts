import { defineType } from 'sanity'

export const partnerships = defineType({
  name: 'partnerships',
  title: 'Partnerships',
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
          description: 'Upload hero background image (current: about-hero-bg CSS class)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Collaborate with us to support your employees'
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'At Cuddles, we understand the challenges working parents face. That\'s why we offer customised daycare solutions for corporate partners, ensuring that your employees\' children receive the best care and education while they focus on their work.'
        },
        {
          name: 'benefitsCards',
          title: 'Benefits Cards',
          type: 'array',
          initialValue: [
            { title: 'Discounted fees', description: 'Special rates based on the number of enrollments.', color: '#F0B54C' },
            { title: 'Customized Solutions', description: 'Tailored programs to meet your employees\' needs.', color: '#DE627D' },
            { title: 'Peace of Mind', description: 'A safe, nurturing environment for your employees\' children.', color: '#4AA6B1' }
          ],
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
          }]
        }
      ]
    },
    {
      name: 'partnerWithSection',
      title: 'Who We Partner With Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Who we partner with!'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Whether you are an industry giant or an emerging enterprise, we work closely with you to offer your employees quality preschool and day-care services that truly support their work-life balance.'
        },
        {
          name: 'partnerTypes',
          title: 'Partner Types',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Partner Type',
                type: 'string',
                validation: (Rule) => Rule.required()
              }
            ]
          }],
          initialValue: [
            { title: 'IT & Tech Companies' },
            { title: 'Multinational Corporations' },
            { title: 'Government Institutions' },
            { title: 'Healthcare Providers' },
            { title: 'Startups and Corporate Parks' }
          ]
        }
      ]
    },
    {
      name: 'cuddlesPartnerSection',
      title: 'Why Partner With Cuddles Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Why Partner With Cuddles?'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Every Day At Cuddles Follows A Rhythm Designed To Comfort, Inspire, And Engage. Here\'s What A Typical Day Looks Like'
        },
        {
          name: 'benefits',
          title: 'Partnership Benefits',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Benefit Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Benefit Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              }
            ]
          }],
          initialValue: [
            {
              title: 'Preferential Access & Fee Benefits',
              description: 'Corporate partners receive priority admissions and tailored fee structures, making our premium early education experience more accessible to their teams.'
            },
            {
              title: 'Custom Childcare Solutions',
              description: 'We offer flexible plans including full-time preschool, day-care support, emergency care, and on-demand parenting workshops to meet your team\'s evolving needs.'
            },
            {
              title: 'Trusted Early Learning Approach',
              description: 'Our play-based, process-driven curriculum fosters curiosity, creativity, and confidence. Children build lasting skills through experiences that go beyond academics — from emotional intelligence to collaborative thinking.'
            },
            {
              title: 'Reliable Communication & Involvement',
              description: 'From parent-teacher touchpoints to real-time updates, we keep families engaged every step of the way. You can trust that every child is cared for with intention and heart.'
            }
          ]
        }
      ]
    },
    {
      name: 'enrollSection',
      title: 'How To Enroll Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'How To Enroll'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Getting Started Is Simple And Seamless.'
        },
        {
          name: 'steps',
          title: 'Enrollment Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'step',
                title: 'Step Description',
                type: 'string',
                validation: (Rule) => Rule.required()
              }
            ]
          }],
          initialValue: [
            { step: 'Reach Out via the corporate inquiry form below' },
            { step: 'We Connect to understand your team\'s requirements' },
            { step: 'We Curate a custom enrollment and benefit structure' },
            { step: 'You Share Access to your employees' },
            { step: 'Children Enroll with priority placement and onboarding support' }
          ]
        }
      ]
    },
    {
      name: 'letsBuildSection',
      title: 'Lets Build Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Let\'s Build a Brighter Future Together!'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Contact us to explore partnership opportunities'
        },
        {
          name: 'formImage',
          title: 'Form Image',
          type: 'image',
          description: 'Upload form image (current: /LetsBuild.png)',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
})