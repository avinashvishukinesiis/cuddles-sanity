import { defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      description: 'Upload footer logo (current: ./footer_logo.svg)',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Footer Description',
      type: 'text',
      initialValue: 'Plant the roots of lifelong learning with Cuddles! Visit us and discover how bright beginnings shape brighter futures'
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url'
        }
      ]
    },
    {
      name: 'usefulLinks',
      title: 'Useful Links',
      type: 'array',
      initialValue: [
        { title: 'About Us', url: '/AboutUs' },
        { title: 'Curriculum', url: '/Curriculum' },
        { title: 'Partnerships', url: '/Partnerships' },
        { title: 'Safety', url: '/Safety' }
      ],
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Link Title',
            type: 'string'
          },
          {
            name: 'url',
            title: 'Link URL',
            type: 'string'
          }
        ]
      }]
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          initialValue: '+91 90360 90909'
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule) => Rule.email(),
          initialValue: 'info@cuddles.co.in'
        }
      ]
    },
    {
      name: 'branches',
      title: 'Branches',
      type: 'array',
      initialValue: [
        'Salarpuria Greenage',
        'AECS Layout',
        'Gadag'
      ],
      of: [{ type: 'string' }]
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: 'Like-themes © All Rights Reserved - 2025'
    },
    {
      name: 'footerVector',
      title: 'Footer Vector Image',
      type: 'image',
      description: 'Upload footer vector background (current: ./footer_vector.svg)',
      options: {
        hotspot: true
      }
    }
  ]
})