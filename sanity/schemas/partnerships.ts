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
      title: 'Partner With Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Section Content',
          type: 'text'
        }
      ]
    },
    {
      name: 'cuddlesPartnerSection',
      title: 'Cuddles Partner Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Section Content',
          type: 'text'
        }
      ]
    },
    {
      name: 'enrollSection',
      title: 'Enroll Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Section Content',
          type: 'text'
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