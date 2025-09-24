import { defineType } from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
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
          description: 'Upload hero background image (current: contactroom-hero-bg CSS class, contactroom.jpg)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'We are here to guide you through the first step into your child\'s journey'
        }
      ]
    },
    {
      name: 'locationsSection',
      title: 'Locations Section',
      type: 'object',
      fields: [
        {
          name: 'locations',
          title: 'Locations',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Location Name',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'address',
                title: 'Full Address',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'phoneNumbers',
                title: 'Phone Numbers',
                type: 'array',
                of: [{ type: 'string' }]
              },
              {
                name: 'email',
                title: 'Email Address',
                type: 'string',
                validation: (Rule) => Rule.email()
              },
              {
                name: 'mapEmbedUrl',
                title: 'Google Maps Embed URL',
                type: 'url'
              },
              {
                name: 'borderColor',
                title: 'Border Color',
                type: 'string',
                description: 'CSS color value for the border'
              }
            ]
          }]
        }
      ]
    }
  ]
})