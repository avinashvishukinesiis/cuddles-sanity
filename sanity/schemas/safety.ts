import { defineType } from 'sanity'

export const safety = defineType({
  name: 'safety',
  title: 'Safety',
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
          description: 'Upload hero background image (current: hallroom-hero-bg CSS class)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'A secure and nurturing space for your child'
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'At Cuddles Preschool, safety is not just a policy. It is a part of how we care, teach, and grow. Under the leadership of our founder Chandrika Bharath, every measure is thoughtfully planned to support playful learning without compromising on protection. We create an environment where children can explore freely while being safe, healthy, and supported at every step.'
        },
        {
          name: 'safetyFeatures',
          title: 'Safety Features',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Feature Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Feature Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'image',
                title: 'Feature Image',
                type: 'image',
                description: 'Upload feature image (daily-sanitization.jpg, temperature-checks.jpg, cctv-monitoring.jpg, child-proofing.jpg, pickup-verification.jpg)',
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
    },
    {
      name: 'emergencySection',
      title: 'Emergency Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Continued Care for Growing Children'
        },
        {
          name: 'content',
          title: 'Section Content',
          type: 'text'
        },
        {
          name: 'emergencyItems',
          title: 'Emergency Care Items',
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
                description: 'Upload emergency item icon (trained.svg, hand-heart.svg, engage.svg)',
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
      name: 'healthyHabitsSection',
      title: 'Healthy Habits Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Healthy Habits Start Early'
        },
        {
          name: 'healthyHabitsItems',
          title: 'Healthy Habits Items',
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
                description: 'Upload healthy habits image (healthy-eating.jpg, allergy-considerations.jpg, Supervision.jpg)',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'imageAlt',
                title: 'Image Alt Text',
                type: 'string'
              }
            ]
          }]
        }
      ]
    }
  ]
})