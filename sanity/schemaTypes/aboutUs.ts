import { defineType } from 'sanity'

export const aboutUs = defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  preview: {
    select: {
      title: 'heroSection.title'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title || 'About Us Page',
        subtitle: 'About Us page content'
      }
    }
  },
  fields: [
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Driven by purpose and care'
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'Founded in 2008, Cuddles Preschool has evolved into a trusted space for early learning, where happy, confident, and independent children thrive. Over the years, we\'ve nurtured hundreds of little learners and witnessed their incredible journeys—each child\'s growth is a story that continues to inspire us.'
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Upload the hero background image (current: /About_hero_image.jpg)',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'visionAndMissionSection',
      title: 'Vision and Mission Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Vision & mission'
        },
        {
          name: 'vision',
          title: 'Vision Text',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'We envision a future where early childhood is honoured as the most powerful stage of learning. At Cuddles, we strive to redefine preschool education by creating environments where curiosity is cherished, imagination is nurtured, and the joy of learning lasts a lifetime.'
        },
        {
          name: 'visionIcon',
          title: 'Vision Icon',
          type: 'image',
          description: 'Upload vision icon (current: /eyes.svg)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'mission',
          title: 'Mission Text',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'Our mission is to nurture young minds through playful, purposeful learning that builds strong foundations for life. We aim to create a joyful environment where every child feels safe, supported, and inspired to grow with confidence and creativity.'
        },
        {
          name: 'missionIcon',
          title: 'Mission Icon',
          type: 'image',
          description: 'Upload mission icon (current: /hand-heart.svg)',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'aboutCeoSection',
      title: 'About CEO Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'About The CEO'
        },
        {
          name: 'name',
          title: 'CEO Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Chandrika Bharath'
        },
        {
          name: 'title',
          title: 'CEO Title/Position',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'CEO & Founder'
        },
        {
          name: 'description',
          title: 'CEO Description',
          type: 'array',
          of: [{ type: 'text' }]
        },
        {
          name: 'image',
          title: 'CEO Photo',
          type: 'image',
          description: 'Upload CEO photo (current: /CEO.jpg)',
          options: {
            hotspot: true
          }
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
          }],
          initialValue: [
            {
              question: 'What age groups do you accept?',
              answer: 'We take kids of 3 months and onwards.',
              order: 1
            },
            {
              question: 'In what ways can learning via play help children perform better in school?',
              answer: 'Learning through play helps children develop critical thinking skills, creativity, and social abilities. It makes learning enjoyable and memorable, leading to better retention and academic performance.',
              order: 2
            },
            {
              question: 'What security steps do you take, and how do you let parents know?',
              answer: 'We maintain strict security protocols including background checks for all staff, secure entry systems, regular safety drills, and real-time communication with parents through our app and daily reports.',
              order: 3
            },
            {
              question: 'Are parents updated and involved in school happenings?',
              answer: 'Yes! We provide daily updates through our parent app, regular newsletters, parent-teacher conferences, and special events. We believe in maintaining open communication with families.',
              order: 4
            }
          ]
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
          initialValue: 'Let\'s Connect'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'We\'d love to hear from you! Whether you have questions about our programs or want to schedule a visit, our team is here to help.'
        },
        {
          name: 'formTitle',
          title: 'Form Title',
          type: 'string',
          initialValue: 'Your Child\'s Bright Future Starts Here!'
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
          description: 'Upload heart decoration (current: /hand-heart.svg)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'cloudIcon',
          title: 'Cloud Icon',
          type: 'image',
          description: 'Upload cloud icon (current: /cloud.svg)',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
})