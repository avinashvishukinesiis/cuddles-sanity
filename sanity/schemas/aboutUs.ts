import { defineType } from 'sanity'

export const aboutUs = defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
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
          description: 'Upload the hero background image (current: about-hero-bg CSS class)',
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
          description: 'Upload vision icon (current: ./eyes.svg)',
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
          description: 'Upload mission icon (current: ./hand-heart.svg)',
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
          of: [{ type: 'text' }],
          initialValue: [
            'At the center of cuddles preschool is our CEO: Chandrika Bharath - an engineer by training, a mother by instinct, and an educator by choice. Since 2002 she\'s been building a space where children are not just taught, but understood. Her approach blends structure with softness. Her background in engineering gives her an eye for detail and systems, but it\'s her lived experience as a parent that shapes the way she sees children - not as boxes to fit into molds, but as individuals who need space, security, and a little spark to thrive.',
            'Every part of the Cuddles experience - from the curriculum to classroom design - reflects her belief that learning should feel like play, and school should feel like home. She stays hands-on constantly updating the program with the newest research and best practices (tried and tested) but never losing sight of the heart of it all: joy.',
            'Whether she\'s training teachers, planning a new activity, or crouching down to tie a shoelace, she leads with care. And it shows - in the way children settle in, in the way parents trust, and in the way teachers grow. Because childhood comes only once. And our CEO is making sure it counts.'
          ]
        },
        {
          name: 'image',
          title: 'CEO Photo',
          type: 'image',
          description: 'Upload CEO photo (current: ./CEO.jpg)',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
})