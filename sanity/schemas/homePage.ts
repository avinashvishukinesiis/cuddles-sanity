import { defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'earlyEducationSection',
      title: 'Early Education Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
          description: 'Upload early education image (current: /early-education.jpg)',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'cuddlesProgramSection',
      title: 'Cuddles Program Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'sunDecoration',
          title: 'Sun Decoration Image',
          type: 'image',
          description: 'Upload sun decoration (current: ./sun.svg)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'programItems',
          title: 'Program Items',
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
                name: 'description',
                title: 'Program Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'image',
                title: 'Program Image',
                type: 'image',
                description: 'Upload program image (cp1.png, cp2.png, cp3.png, cp4.png)',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'order',
                title: 'Display Order',
                type: 'number'
              }
            ]
          }]
        }
      ]
    },
    {
      name: 'activityZoneSection',
      title: 'Activity Zone Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'activityItems',
          title: 'Activity Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Activity Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Activity Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'image',
                title: 'Activity Image',
                type: 'image',
                description: 'Upload activity image (photo/1.jpg to photo/42.jpg)',
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
      name: 'includeSection',
      title: 'Include Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'includeItems',
          title: 'Include Items',
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
                description: 'Upload item icon (report.png, blub.png, medal.png, thumbsup.png)',
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
      name: 'letsConnectSection',
      title: 'Lets Connect Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'formImage',
          title: 'Form Image',
          type: 'image',
          description: 'Upload form image (current: /LetsConnect.png)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'heartDecoration',
          title: 'Heart Decoration Image',
          type: 'image',
          description: 'Upload heart decoration (current: ./handHeart.svg)',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
})