import { defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
          validation: (Rule) => Rule.required()
        }
      ]
    },
    {
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
          validation: (Rule) => Rule.required()
        }
      ]
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'starDecoration',
      title: 'Star Decoration Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'planeDecoration',
      title: 'Plane Decoration Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
})