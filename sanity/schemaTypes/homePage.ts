import { defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Home Page Content',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          initialValue: 'Where imagination takes flight.',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          initialValue: 'At Cuddles Preschool, we believe that every child\'s journey begins with a sense of wonder, joy, and discovery. We are more than just a place for early education, we\'re a second home where children feel loved, valued, and inspired to explore the world around them.',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Upload hero background image (current: hero-bg CSS class)',
          options: {
            hotspot: true
          }
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
              initialValue: 'Schedule A Visit'
            },
            {
              name: 'link',
              title: 'Button Link',
              type: 'string',
              initialValue: '/contact'
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
              initialValue: 'Explore Programs'
            },
            {
              name: 'link',
              title: 'Button Link',
              type: 'string',
              initialValue: '/curriculum'
            }
          ]
        },
        {
          name: 'decorations',
          title: 'Hero Decorations',
          type: 'array',
          description: 'Decorative images shown around the hero title (star.svg, plane_vector.svg)',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Decoration Name',
                type: 'string',
                description: 'e.g., "star", "plane"'
              },
              {
                name: 'image',
                title: 'Decoration Image',
                type: 'image',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'position',
                title: 'Position',
                type: 'string',
                description: 'CSS position identifier',
                options: {
                  list: [
                    { title: 'Star (top-right)', value: 'star-top-right' },
                    { title: 'Plane (bottom-left)', value: 'plane-bottom-left' }
                  ]
                }
              }
            ]
          }]
        }
      ]
    },
    {
      name: 'earlyEducationSection',
      title: 'Early Education Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Why Early Education Matters ?'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'The first five years of a child\'s life are when 90% of brain development occurs. Active learning and creative experiences don\'t just teach skills but they build the neural pathways that determine how children think, learn, and approach challenges for life. At Cuddles, we harness this incredible potential through purposeful play, hands-on exploration, and creative expression.'
        },
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
          description: 'Upload early education image (current: /early-education.jpg)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'features',
          title: 'Features List',
          type: 'array',
          initialValue: [
            'Holistic Development',
            'Experienced Educators',
            'Safe & Inclusive Environment',
            'Engaging Curriculum'
          ],
          of: [{ type: 'string' }]
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
          type: 'string',
          initialValue: 'Cuddles Program'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'What we offer ?'
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
          type: 'string',
          initialValue: '12 different activity zones'
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
          type: 'string',
          initialValue: 'What\'s Included and what\'s Not'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'We thoughtfully design every part of a child\'s early years.'
        },
        {
          name: 'includeItems',
          title: 'Include Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'include',
                title: 'What\'s Included',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'exclude',
                title: 'What\'s Not Included',
                type: 'string',
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
          type: 'string',
          initialValue: 'Ready to give your child the best start?'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Let\'s connect and explore how Cuddles can nurture your child\'s growth and happiness.'
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
    },
    {
      name: 'awardsSection',
      title: 'Awards Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'We Are Proud Winners Of'
        },
        {
          name: 'awards',
          title: 'Awards List',
          type: 'array',
          initialValue: [
            'Brainfeed',
            'Parents choice awards',
            'Education today',
            'India Preschool Jury Awards'
          ],
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required()
        }
      ]
    },
    {
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Frequently Asked Questions'
        },
        {
          name: 'faqs',
          title: 'FAQ Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'question',
                title: 'Question',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'answer',
                title: 'Answer',
                type: 'text',
                validation: (Rule) => Rule.required()
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
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'What Parents Say'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Hear from our happy families'
        },
        {
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'role',
                title: 'Role/Relation',
                type: 'string',
                description: 'e.g., Parent, Teacher, etc.',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'content',
                title: 'Testimonial Content',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'image',
                title: 'Photo',
                type: 'image',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'rating',
                title: 'Rating',
                type: 'number',
                validation: (Rule) => Rule.required().min(1).max(5),
                options: {
                  list: [1, 2, 3, 4, 5]
                }
              },
              {
                name: 'featured',
                title: 'Featured',
                type: 'boolean',
                description: 'Show in main testimonials carousel'
              },
              {
                name: 'displayOrder',
                title: 'Display Order',
                type: 'number'
              }
            ]
          }]
        }
      ]
    }
  ]
})