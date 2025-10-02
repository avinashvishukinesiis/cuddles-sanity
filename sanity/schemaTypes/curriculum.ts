import { defineType } from 'sanity'

export const curriculum = defineType({
  name: 'curriculum',
  title: 'Curriculum',
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
          description: 'Upload hero background image (current: curriculum-hero-bg CSS class)',
          options: {
            hotspot: true
          }
        },
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Our thoughtfully designed curriculum'
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'In this period of STEM learning and rushing milestones, we have designed our programs to celebrate children\'s journey toward learning and discovering their passion. Our curriculum is designed to grow with your child, gently and intentionally supporting their development at every stage.'
        }
      ]
    },
    {
      name: 'programsSection',
      title: 'Programs Section',
      type: 'object',
      fields: [
        {
          name: 'programs',
          title: 'Programs',
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
                name: 'ageRange',
                title: 'Age Range',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'color',
                title: 'Theme Color',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'icon',
                title: 'Program Icon',
                type: 'image',
                description: 'Upload program icon (curStar.svg, fallingstar.svg, bluesunvector.svg, starspark.svg, heartvector.png, ThunderVector.svg)',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'colSpan',
                title: 'Column Span',
                type: 'number',
                initialValue: 1
              }
            ]
          }]
        }
      ]
    },
    {
      name: 'dayAtCuddlesSection',
      title: 'Day at Cuddles Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'A Day at Cuddles'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
          initialValue: 'Every day at Cuddles follows a rhythm designed to comfort, inspire, and engage. Here\'s what a typical day looks like'
        },
        {
          name: 'dailySchedule',
          title: 'Daily Schedule',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'timeSlot',
                title: 'Time Slot',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              }
            ]
          }]
        }
      ]
    },
    {
      name: 'learningMethodologySection',
      title: 'Learning Methodology Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Learning Methodologies'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Research-based approaches that make learning meaningful and joyful'
        },
        {
          name: 'methodologies',
          title: 'Teaching Methods',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Method Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Method Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'keyFeatures',
                title: 'Key Features',
                type: 'array',
                of: [{ type: 'string' }]
              },
              {
                name: 'icon',
                title: 'Method Icon',
                type: 'image',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'color',
                title: 'Theme Color',
                type: 'string'
              }
            ]
          }],
          initialValue: [
            {
              title: 'Montessori Approach',
              description: 'Child-led learning with specially designed materials that encourage independence, concentration, and a love for learning.',
              keyFeatures: ['Self-directed activity', 'Mixed age classrooms', 'Specialized educational materials', 'Freedom of movement and choice'],
              color: '#9769A5'
            },
            {
              title: 'STEM Integration',
              description: 'Science, Technology, Engineering, and Math concepts introduced through hands-on experiments and real-world problem solving.',
              keyFeatures: ['Inquiry-based learning', 'Critical thinking development', 'Creative problem solving', 'Real-world applications'],
              color: '#4AA6B1'
            },
            {
              title: 'Creative Arts Integration',
              description: 'Art, music, and creative expression woven throughout the curriculum to develop imagination and self-expression.',
              keyFeatures: ['Multi-sensory experiences', 'Creative thinking', 'Cultural appreciation', 'Emotional expression'],
              color: '#EBAA35'
            },
            {
              title: 'Play-Based Learning',
              description: 'Learning happens naturally through purposeful play, exploration, and hands-on experiences that spark curiosity.',
              keyFeatures: ['Learning through play', 'Hands-on exploration', 'Natural curiosity', 'Joyful discovery'],
              color: '#F9839D'
            }
          ]
        }
      ]
    },
    {
      name: 'subjectAreasSection',
      title: 'Subject Areas Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Subject Areas'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Comprehensive curriculum covering all aspects of child development'
        },
        {
          name: 'subjects',
          title: 'Subject Areas',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Subject Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Subject Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'activities',
                title: 'Key Activities',
                type: 'array',
                of: [{ type: 'string' }]
              },
              {
                name: 'icon',
                title: 'Subject Icon',
                type: 'image',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'color',
                title: 'Theme Color',
                type: 'string'
              }
            ]
          }],
          initialValue: [
            {
              title: 'Language & Literacy',
              description: 'Building communication skills through storytelling, phonics, vocabulary development, and early reading and writing experiences.',
              activities: ['Story time', 'Phonics games', 'Writing practice', 'Vocabulary building', 'Drama and role play'],
              color: '#9769A5'
            },
            {
              title: 'Mathematics & Logic',
              description: 'Exploring numbers, patterns, shapes, and problem-solving through hands-on activities and real-world applications.',
              activities: ['Number recognition', 'Pattern making', 'Shape exploration', 'Counting games', 'Simple problem solving'],
              color: '#4AA6B1'
            },
            {
              title: 'Science & Discovery',
              description: 'Encouraging curiosity about the natural world through experiments, observations, and hands-on exploration.',
              activities: ['Nature walks', 'Simple experiments', 'Weather observation', 'Plant care', 'Animal studies'],
              color: '#EBAA35'
            },
            {
              title: 'Creative Arts & Music',
              description: 'Developing creativity and self-expression through art, music, dance, and various creative mediums.',
              activities: ['Painting and drawing', 'Music and rhythm', 'Dance and movement', 'Craft projects', 'Creative expression'],
              color: '#F9839D'
            },
            {
              title: 'Physical Development',
              description: 'Building gross and fine motor skills through active play, sports, and coordination activities.',
              activities: ['Outdoor play', 'Yoga and stretching', 'Ball games', 'Climbing activities', 'Fine motor skills'],
              color: '#58BAC6'
            },
            {
              title: 'Social-Emotional Learning',
              description: 'Developing emotional intelligence, empathy, and social skills through group activities and mindful practices.',
              activities: ['Circle time', 'Emotion recognition', 'Conflict resolution', 'Sharing and cooperation', 'Mindfulness'],
              color: '#69CEE9'
            }
          ]
        }
      ]
    },
    {
      name: 'assessmentSection',
      title: 'Assessment & Progress Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Assessment & Progress Tracking'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'How we monitor and celebrate your child\'s development'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'We believe assessment should celebrate growth, not judge children. Our approach focuses on observing, documenting, and supporting each child\'s unique developmental journey.'
        },
        {
          name: 'assessmentMethods',
          title: 'Assessment Methods',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Method Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Method Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'frequency',
                title: 'Frequency',
                type: 'string'
              },
              {
                name: 'icon',
                title: 'Method Icon',
                type: 'image',
                options: {
                  hotspot: true
                }
              }
            ]
          }],
          initialValue: [
            {
              title: 'Observational Assessment',
              description: 'Teachers carefully observe children during their daily activities, documenting their progress, interests, and learning patterns in a natural environment.',
              frequency: 'Daily'
            },
            {
              title: 'Portfolio Documentation',
              description: 'We create individual portfolios showcasing each child\'s work, growth, and achievements over time, creating a beautiful record of their learning journey.',
              frequency: 'Weekly'
            },
            {
              title: 'Developmental Milestones',
              description: 'Regular tracking of developmental milestones across all domains - physical, cognitive, social, and emotional - ensuring holistic growth.',
              frequency: 'Monthly'
            },
            {
              title: 'Parent Conferences',
              description: 'Regular one-on-one meetings with parents to discuss their child\'s progress, share observations, and collaborate on supporting their development.',
              frequency: 'Quarterly'
            }
          ]
        }
      ]
    },
    {
      name: 'learningEnvironmentSection',
      title: 'Learning Environment Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Learning Environments'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Thoughtfully designed spaces that inspire exploration and discovery'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'Every space at Cuddles is intentionally designed to support different types of learning and development, creating an environment where children feel safe, engaged, and inspired.'
        },
        {
          name: 'environments',
          title: 'Learning Environments',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Environment Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Environment Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'features',
                title: 'Key Features',
                type: 'array',
                of: [{ type: 'string' }]
              },
              {
                name: 'image',
                title: 'Environment Image',
                type: 'image',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'ageGroups',
                title: 'Suitable Age Groups',
                type: 'array',
                of: [{ type: 'string' }]
              }
            ]
          }],
          initialValue: [
            {
              title: 'Montessori Classroom',
              description: 'Carefully prepared environments with child-sized furniture and materials that promote independence, concentration, and self-directed learning.',
              features: ['Child-sized furniture', 'Organized learning materials', 'Quiet work spaces', 'Natural lighting', 'Plants and nature elements'],
              ageGroups: ['2-3 years', '3-4 years', '4-5 years']
            },
            {
              title: 'Creative Arts Studio',
              description: 'A vibrant space dedicated to artistic expression, music, and creative exploration with various materials and instruments.',
              features: ['Art supplies and easels', 'Musical instruments', 'Drama props and costumes', 'Display areas for artwork', 'Washable surfaces'],
              ageGroups: ['2-3 years', '3-4 years', '4-5 years']
            },
            {
              title: 'Science Discovery Corner',
              description: 'An engaging area for hands-on experiments, nature observation, and scientific exploration designed to spark curiosity.',
              features: ['Microscopes and magnifying glasses', 'Nature specimens', 'Simple experiment materials', 'Weather station', 'Living plants'],
              ageGroups: ['3-4 years', '4-5 years']
            },
            {
              title: 'Outdoor Play Garden',
              description: 'A natural outdoor environment with gardens, play structures, and open spaces for physical activity and nature connection.',
              features: ['Vegetable garden', 'Sandbox and water play', 'Climbing structures', 'Open running space', 'Shaded quiet areas'],
              ageGroups: ['2-3 years', '3-4 years', '4-5 years']
            },
            {
              title: 'Reading Nook',
              description: 'A cozy, quiet space filled with books and comfortable seating that encourages a love for reading and storytelling.',
              features: ['Extensive book collection', 'Comfortable seating', 'Soft lighting', 'Story telling props', 'Quiet atmosphere'],
              ageGroups: ['2-3 years', '3-4 years', '4-5 years']
            }
          ]
        }
      ]
    },
    {
      name: 'parentPartnershipSection',
      title: 'Parent Partnership Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Parent Partnership'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Working together to support your child\'s growth and development'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'We believe parents are a child\'s first teachers. Our partnership approach ensures consistency between home and school, creating the best possible learning environment for your child.'
        },
        {
          name: 'partnershipAreas',
          title: 'Partnership Areas',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Area Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Area Description',
                type: 'text',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'activities',
                title: 'Activities/Methods',
                type: 'array',
                of: [{ type: 'string' }]
              },
              {
                name: 'icon',
                title: 'Area Icon',
                type: 'image',
                options: {
                  hotspot: true
                }
              }
            ]
          }],
          initialValue: [
            {
              title: 'Daily Communication',
              description: 'Regular, meaningful communication about your child\'s daily experiences, achievements, and areas of growth through various channels.',
              activities: ['Daily pickup conversations', 'Photo sharing', 'Progress notes', 'Quick check-ins', 'Email updates']
            },
            {
              title: 'Home-School Consistency',
              description: 'Collaborating to ensure consistent approaches between home and school environments, supporting your child\'s routines and values.',
              activities: ['Routine discussions', 'Behavioral strategies', 'Learning reinforcement', 'Value alignment', 'Goal setting']
            },
            {
              title: 'Parent Education & Resources',
              description: 'Providing parents with resources, workshops, and guidance to support their child\'s development at home.',
              activities: ['Parent workshops', 'Resource sharing', 'Development tips', 'Activity suggestions', 'Reading recommendations']
            },
            {
              title: 'Family Involvement',
              description: 'Creating opportunities for families to participate in their child\'s learning journey and school community.',
              activities: ['Family events', 'Volunteer opportunities', 'Classroom visits', 'Special celebrations', 'Community projects']
            },
            {
              title: 'Individual Support Plans',
              description: 'Working together to create personalized approaches that meet each child\'s unique needs and support their optimal development.',
              activities: ['Goal setting meetings', 'Progress reviews', 'Strategy development', 'Resource coordination', 'Celebration planning']
            }
          ]
        }
      ]
    },
    {
      name: 'specialProgramsSection',
      title: 'Special Programs Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Special Programs & Activities'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Enriching experiences that make learning memorable and fun'
        },
        {
          name: 'programs',
          title: 'Special Programs',
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
                name: 'duration',
                title: 'Duration/Frequency',
                type: 'string'
              },
              {
                name: 'ageGroups',
                title: 'Age Groups',
                type: 'array',
                of: [{ type: 'string' }]
              },
              {
                name: 'highlights',
                title: 'Program Highlights',
                type: 'array',
                of: [{ type: 'string' }]
              },
              {
                name: 'image',
                title: 'Program Image',
                type: 'image',
                options: {
                  hotspot: true
                }
              },
              {
                name: 'color',
                title: 'Theme Color',
                type: 'string'
              }
            ]
          }],
          initialValue: [
            {
              title: 'Nature Explorers',
              description: 'Weekly outdoor adventures that connect children with nature through guided exploration, garden work, and environmental discovery.',
              duration: 'Weekly sessions, 1 hour',
              ageGroups: ['3-4 years', '4-5 years'],
              highlights: ['Garden care and planting', 'Nature walks and observation', 'Outdoor science experiments', 'Weather studies', 'Wildlife discovery'],
              color: '#EBAA35'
            },
            {
              title: 'Little Scientists',
              description: 'Hands-on STEM activities that introduce scientific concepts through safe, age-appropriate experiments and discovery.',
              duration: 'Bi-weekly sessions, 45 minutes',
              ageGroups: ['3-4 years', '4-5 years'],
              highlights: ['Simple chemistry experiments', 'Physics through play', 'Building and engineering', 'Technology exploration', 'Mathematical concepts'],
              color: '#4AA6B1'
            },
            {
              title: 'Creative Expression',
              description: 'A comprehensive arts program including visual arts, music, drama, and creative movement to develop artistic abilities.',
              duration: 'Daily integration, 30-45 minutes',
              ageGroups: ['2-3 years', '3-4 years', '4-5 years'],
              highlights: ['Multi-media art projects', 'Music and rhythm', 'Drama and storytelling', 'Creative movement', 'Cultural arts exploration'],
              color: '#F9839D'
            },
            {
              title: 'Young Entrepreneurs',
              description: 'Introduction to basic economic concepts through play-based activities like classroom stores, trading, and simple business concepts.',
              duration: 'Monthly projects, 1 hour',
              ageGroups: ['4-5 years'],
              highlights: ['Classroom marketplace', 'Money recognition', 'Trading games', 'Resource management', 'Community helpers'],
              color: '#9769A5'
            },
            {
              title: 'Cultural Celebrations',
              description: 'Exploring different cultures, traditions, and celebrations from around the world to build global awareness and appreciation.',
              duration: 'Monthly themes, integrated daily',
              ageGroups: ['2-3 years', '3-4 years', '4-5 years'],
              highlights: ['International festivals', 'Cultural foods tasting', 'Traditional music and dance', 'Language exposure', 'Art from different cultures'],
              color: '#58BAC6'
            },
            {
              title: 'Mindfulness & Yoga',
              description: 'Daily practices that help children develop emotional regulation, body awareness, and peaceful focused attention.',
              duration: 'Daily practice, 15-20 minutes',
              ageGroups: ['2-3 years', '3-4 years', '4-5 years'],
              highlights: ['Breathing exercises', 'Gentle yoga poses', 'Meditation for children', 'Emotion recognition', 'Stress relief techniques'],
              color: '#69CEE9'
            }
          ]
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
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Get answers to common questions about our curriculum and programs'
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
                name: 'category',
                title: 'Category',
                type: 'string',
                options: {
                  list: [
                    { title: 'General', value: 'general' },
                    { title: 'Curriculum', value: 'curriculum' },
                    { title: 'Programs', value: 'programs' },
                    { title: 'Assessment', value: 'assessment' },
                    { title: 'Environment', value: 'environment' }
                  ]
                },
                initialValue: 'general'
              }
            ],
            preview: {
              select: {
                title: 'question',
                subtitle: 'category'
              }
            }
          }],
          initialValue: [
            {
              question: 'What teaching methodologies do you use?',
              answer: 'We use a combination of Montessori approach, STEM integration, creative arts, and play-based learning. Our curriculum is research-based and designed to support holistic child development through hands-on, child-led activities.',
              category: 'curriculum'
            },
            {
              question: 'How do you assess my child\'s progress?',
              answer: 'We use observational assessment, portfolio documentation, developmental milestone tracking, and regular parent conferences. Our approach celebrates growth rather than judging children, focusing on each child\'s unique developmental journey.',
              category: 'assessment'
            },
            {
              question: 'What age groups do your programs serve?',
              answer: 'We serve children from 3 months to 6 years across six programs: Infants (3+ months), Toddler (1-2 years), Play Group (2-3 years), Nursery (3-4 years), Prep-1 (4-5 years), and Prep-2 (5-6 years). Each program is tailored to specific developmental needs.',
              category: 'programs'
            },
            {
              question: 'How do you ensure a safe learning environment?',
              answer: 'Our learning environments are thoughtfully designed with child-sized furniture, natural lighting, and safe materials. We maintain small class sizes, have qualified staff, and create spaces that promote independence while ensuring safety and supervision.',
              category: 'environment'
            },
            {
              question: 'How do you involve parents in their child\'s learning?',
              answer: 'We believe in strong parent partnerships through daily communication, regular conferences, resource sharing, family involvement opportunities, and collaborative goal setting. Parents receive updates on their child\'s progress and activities to support learning at home.',
              category: 'general'
            },
            {
              question: 'What makes your curriculum different from traditional preschools?',
              answer: 'Our curriculum integrates multiple research-based approaches, emphasizes child-led learning, incorporates STEM and arts naturally, and focuses on developing the whole child. We celebrate the learning journey rather than rushing to meet arbitrary milestones.',
              category: 'curriculum'
            },
            {
              question: 'Do you offer special programs beyond regular curriculum?',
              answer: 'Yes, we offer enriching programs like Nature Explorers, Little Scientists, Creative Expression, Cultural Celebrations, Young Entrepreneurs, and daily Mindfulness & Yoga. These programs make learning memorable and fun while developing various skills.',
              category: 'programs'
            },
            {
              question: 'How do you prepare children for elementary school?',
              answer: 'Our Prep programs focus on school readiness through independence skills, social-emotional development, early literacy and numeracy, critical thinking, and confidence building. We ensure smooth transitions while maintaining our play-based, joyful approach to learning.',
              category: 'programs'
            }
          ]
        }
      ]
    }
  ]
})