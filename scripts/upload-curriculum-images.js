const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Initialize Sanity client
const client = createClient({
  projectId: 'w8a19ipn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skRdS4HPGr6hUq5mrlB5pP39lkdJoNoHzkAwbFU4gJge5x7E5Y1y4oeRKQWp2cpuAPfcalMNkfeYW6aS2mW7OP6gtFmfRwQT5OO8GnQqhYoxBg8Ct2XgxRPmLUxikvlKVxwKrYCVkqPdL82yTqFg5OjrpFGHwsNj9fsPD9Ti6SNfl3b7RYPg'
})

// Helper function to upload an image
async function uploadImage(imagePath, altText) {
  try {
    const fullPath = path.join(__dirname, '../public', imagePath)
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️ Image not found: ${imagePath} - skipping`)
      return null
    }

    const imageBuffer = fs.readFileSync(fullPath)
    const filename = path.basename(imagePath)

    console.log(`Uploading ${filename}...`)

    const asset = await client.assets.upload('image', imageBuffer, {
      filename: filename,
      title: altText
    })

    console.log(`✅ Uploaded ${filename}`)
    return asset
  } catch (error) {
    console.error(`❌ Failed to upload ${imagePath}:`, error.message)
    return null
  }
}

async function uploadCurriculumImages() {
  console.log('🚀 Uploading Curriculum page images to Sanity...\n')

  try {
    // Curriculum specific images based on component analysis
    console.log('📸 Uploading Curriculum images...')

    // Hero Section Background
    const heroImage = await uploadImage('classroom.jpg', 'Curriculum Hero Background - Classroom Image')

    // Program Icons
    const curStarIcon = await uploadImage('curStar.svg', 'Infants Program Icon - Curved Star')
    const fallingStarIcon = await uploadImage('fallingstar.svg', 'Toddler Program Icon - Falling Star')
    const blueSunIcon = await uploadImage('bluesunvector.svg', 'Play Group Program Icon - Blue Sun')
    const starSparkIcon = await uploadImage('starspark.svg', 'Nursery Program Icon - Star Spark')
    const heartIcon = await uploadImage('heartvector.png', 'Prep-1 Program Icon - Heart Vector')
    const thunderIcon = await uploadImage('ThunderVector.svg', 'Prep-2 Program Icon - Thunder Vector')

    // Let's Connect Section Images (shared with other pages but referenced in curriculum)
    const connectFormImage = await uploadImage('LetsConnect.png', 'Let\'s Connect Form Image')
    const heartDecoration = await uploadImage('hand-heart.svg', 'Heart Decoration for Let\'s Connect')

    console.log('\n📄 Updating Curriculum document with uploaded images...')

    // Check if curriculum document exists
    const existingDoc = await client.fetch('*[_type == "curriculum"][0]{_id}')

    if (!existingDoc) {
      console.log('❌ No Curriculum document found. Creating new one...')
    }

    const curriculumData = {
      _type: 'curriculum',
      heroSection: {
        title: 'Our thoughtfully designed curriculum',
        description: 'In this period of STEM learning and rushing milestones, we have designed our programs to celebrate children\'s journey toward learning and discovering their passion. Our curriculum is designed to grow with your child, gently and intentionally supporting their development at every stage.',
        backgroundImage: heroImage ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: heroImage._id
          }
        } : null
      },
      programsSection: {
        sectionTitle: 'Age-based Programs',
        programs: [
          {
            title: 'Infants',
            ageRange: '3 months babies onwards',
            color: '#9769A5',
            icon: curStarIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: curStarIcon._id
              }
            } : null,
            colSpan: 2,
            order: 1
          },
          {
            title: 'Toddler',
            ageRange: '1-2 years',
            color: '#EBAA35',
            icon: fallingStarIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: fallingStarIcon._id
              }
            } : null,
            colSpan: 1,
            order: 2
          },
          {
            title: 'Play group',
            ageRange: '2-3 years',
            color: '#58BAC6',
            icon: blueSunIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: blueSunIcon._id
              }
            } : null,
            colSpan: 1,
            order: 3
          },
          {
            title: 'Nursery',
            ageRange: '3-4 years',
            color: '#F9839D',
            icon: starSparkIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: starSparkIcon._id
              }
            } : null,
            colSpan: 1,
            order: 4
          },
          {
            title: 'Prep-1',
            ageRange: '4-5 years',
            color: '#69CEE9',
            icon: heartIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: heartIcon._id
              }
            } : null,
            colSpan: 1,
            order: 5
          },
          {
            title: 'Prep-2',
            ageRange: '5-6 years',
            color: '#F37D97',
            icon: thunderIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: thunderIcon._id
              }
            } : null,
            colSpan: 1,
            order: 6
          }
        ]
      },
      dayAtCuddlesSection: {
        title: 'A Day at Cuddles',
        description: 'Every day at Cuddles follows a rhythm designed to comfort, inspire, and engage. Here\'s what a typical day looks like',
        dailySchedule: [
          {
            timeSlot: '9:00 - 9:30 AM Warm Welcome And Movement',
            description: 'The day begins with greetings, prayer, yoga, and light exercises to help children feel settled and energised.'
          },
          {
            timeSlot: '9:30 AM - 11:00 AM Learning Time',
            description: 'Children explore academic concepts, language, and early literacy through Montessori tools, stories, rhymes, and hands-on activities.'
          },
          {
            timeSlot: '11:00 AM - 12:30 PM Creative Play and Outdoor Fun',
            description: 'New ideas and topics are introduced through stories, play, and interactive tools that spark curiosity.'
          },
          {
            timeSlot: '12:30 PM Preschool hours conclude',
            description: 'Children enrolled in our Day Care or Extended Day Care program continue with a peaceful, balanced routine for the rest of the day.'
          },
          {
            timeSlot: '12:30 PM - 1:30 PM Lunch and Wind Down',
            description: 'Children enjoy their home-packed lunch, freshen up, and ease into a restful afternoon.'
          },
          {
            timeSlot: '1:30 PM - 3:30 PM Nap and Quiet Time',
            description: 'A calm nap period helps children recharge in a cozy, supervised environment.'
          },
          {
            timeSlot: '3:30 PM - 6:30 PM Enrichment and Wrap-Up',
            description: 'Evenings include reading, drama, music, indoor games, and time to unwind before heading home.'
          }
        ]
      },
      learningMethodologySection: {
        title: 'Our Learning Methodologies',
        subtitle: 'Research-based approaches that make learning meaningful and joyful',
        methodologies: [
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
      },
      subjectAreasSection: {
        title: 'Our Subject Areas',
        subtitle: 'Comprehensive curriculum covering all aspects of child development',
        subjects: [
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
      },
      assessmentSection: {
        title: 'Assessment & Progress Tracking',
        subtitle: 'How we monitor and celebrate your child\'s development',
        description: 'We believe assessment should celebrate growth, not judge children. Our approach focuses on observing, documenting, and supporting each child\'s unique developmental journey.',
        assessmentMethods: [
          {
            title: 'Portfolio-Based Assessment',
            description: 'Collecting samples of children\'s work, photos, and observations to create a comprehensive picture of their growth.',
            frequency: 'Ongoing'
          },
          {
            title: 'Developmental Milestone Tracking',
            description: 'Regular observation and documentation of children\'s progress across all developmental domains.',
            frequency: 'Monthly'
          },
          {
            title: 'Parent-Teacher Conferences',
            description: 'Regular meetings to discuss your child\'s progress, celebrate achievements, and plan next steps.',
            frequency: 'Quarterly'
          },
          {
            title: 'Daily Learning Journals',
            description: 'Daily documentation of activities, discoveries, and moments of joy shared with families.',
            frequency: 'Daily'
          }
        ]
      },
      learningEnvironmentSection: {
        title: 'Our Learning Environments',
        subtitle: 'Thoughtfully designed spaces that inspire exploration and discovery',
        description: 'Every space at Cuddles is intentionally designed to support different types of learning and development, creating an environment where children feel safe, engaged, and inspired.',
        environments: [
          {
            title: 'Montessori Classrooms',
            description: 'Prepared environments with child-sized furniture and carefully selected materials that promote independence and concentration.',
            features: ['Child-sized furniture', 'Natural materials', 'Organized learning stations', 'Peaceful atmosphere'],
            ageGroups: ['Toddler', 'Play Group', 'Nursery']
          },
          {
            title: 'STEM Discovery Lab',
            description: 'Hands-on space for scientific exploration, experimentation, and discovery with age-appropriate materials.',
            features: ['Science materials', 'Building blocks', 'Measurement tools', 'Nature specimens'],
            ageGroups: ['Play Group', 'Nursery', 'Prep-1', 'Prep-2']
          },
          {
            title: 'Creative Arts Studio',
            description: 'Inspiring space for artistic expression with various materials and mediums for creative exploration.',
            features: ['Art supplies', 'Easels and tables', 'Natural light', 'Display areas'],
            ageGroups: ['All ages']
          },
          {
            title: 'Outdoor Learning Garden',
            description: 'Natural outdoor classroom where children connect with nature and learn through outdoor experiences.',
            features: ['Garden beds', 'Weather station', 'Outdoor seating', 'Natural play elements'],
            ageGroups: ['All ages']
          }
        ]
      },
      parentPartnershipSection: {
        title: 'Parent Partnership',
        subtitle: 'Working together to support your child\'s growth and development',
        description: 'We believe parents are a child\'s first teachers. Our partnership approach ensures consistency between home and school, creating the best possible learning environment for your child.',
        partnershipAreas: [
          {
            title: 'Communication & Updates',
            description: 'Regular communication through daily reports, photos, and milestone celebrations to keep you connected to your child\'s day.',
            activities: ['Daily learning journals', 'Photo sharing', 'Progress updates', 'Milestone celebrations']
          },
          {
            title: 'Home Learning Support',
            description: 'Guidance and resources to extend learning at home, creating consistency between school and home environments.',
            activities: ['Take-home activities', 'Learning tips', 'Resource recommendations', 'Family challenges']
          },
          {
            title: 'Parent Education & Workshops',
            description: 'Opportunities to learn about child development, positive parenting strategies, and supporting your child\'s growth.',
            activities: ['Parent workshops', 'Development seminars', 'Q&A sessions', 'Resource sharing']
          },
          {
            title: 'Family Events & Involvement',
            description: 'Special events and opportunities for families to participate in the school community and their child\'s learning journey.',
            activities: ['Family fun days', 'Cultural celebrations', 'Volunteer opportunities', 'Community projects']
          }
        ]
      },
      specialProgramsSection: {
        title: 'Special Programs & Activities',
        subtitle: 'Enriching experiences that make learning memorable and fun',
        programs: [
          {
            title: 'Summer Learning Adventures',
            description: 'Fun-filled summer program with themes, field trips, and special activities that keep learning exciting during break.',
            duration: '6-8 weeks during summer',
            ageGroups: ['Toddler', 'Play Group', 'Nursery', 'Prep-1', 'Prep-2'],
            highlights: ['Weekly themes', 'Water play', 'Nature exploration', 'Creative projects'],
            color: '#EBAA35'
          },
          {
            title: 'Cultural Celebrations',
            description: 'Learning about different cultures, traditions, and festivals through hands-on activities and celebrations.',
            duration: 'Throughout the year',
            ageGroups: ['All ages'],
            highlights: ['Festival celebrations', 'Cultural foods', 'Traditional crafts', 'Music and dance'],
            color: '#F9839D'
          },
          {
            title: 'Nature & Environmental Studies',
            description: 'Connecting with nature through gardening, environmental awareness, and outdoor exploration activities.',
            duration: 'Integrated throughout curriculum',
            ageGroups: ['All ages'],
            highlights: ['Garden maintenance', 'Recycling projects', 'Animal observation', 'Weather studies'],
            color: '#58BAC6'
          },
          {
            title: 'Community Helper Visits',
            description: 'Learning about different professions and community roles through visits from local community helpers.',
            duration: 'Monthly visits',
            ageGroups: ['Play Group', 'Nursery', 'Prep-1', 'Prep-2'],
            highlights: ['Police officers', 'Fire fighters', 'Doctors', 'Teachers'],
            color: '#9769A5'
          }
        ]
      },
      faqSection: {
        title: 'Frequently Asked Questions',
        faqs: []
      },
      letsConnectSection: {
        title: 'Ready to learn more about our curriculum?',
        subtitle: 'Schedule a visit to see our age-appropriate programs in action and meet our educators.',
        formImage: connectFormImage ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: connectFormImage._id
          }
        } : null,
        heartDecoration: heartDecoration ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: heartDecoration._id
          }
        } : null
      }
    }

    let result
    if (existingDoc) {
      console.log('📝 Updating existing curriculum document...')
      result = await client
        .patch(existingDoc._id)
        .set(curriculumData)
        .commit()
    } else {
      console.log('📝 Creating new curriculum document...')
      result = await client.create(curriculumData)
    }

    console.log('✅ Successfully updated Curriculum document with images!')
    console.log(`📋 Document ID: ${result._id}`)

    console.log('\n🎉 Curriculum images upload completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`✅ Hero Background: ${heroImage ? 'Uploaded' : 'Skipped'}`)
    console.log(`✅ Infants Icon: ${curStarIcon ? 'Uploaded' : 'Skipped'}`)
    console.log(`✅ Toddler Icon: ${fallingStarIcon ? 'Uploaded' : 'Skipped'}`)
    console.log(`✅ Play Group Icon: ${blueSunIcon ? 'Uploaded' : 'Skipped'}`)
    console.log(`✅ Nursery Icon: ${starSparkIcon ? 'Uploaded' : 'Skipped'}`)
    console.log(`✅ Prep-1 Icon: ${heartIcon ? 'Uploaded' : 'Skipped'}`)
    console.log(`✅ Prep-2 Icon: ${thunderIcon ? 'Uploaded' : 'Skipped'}`)
    console.log(`✅ Connect Form Image: ${connectFormImage ? 'Uploaded' : 'Skipped'}`)
    console.log(`✅ Heart Decoration: ${heartDecoration ? 'Uploaded' : 'Skipped'}`)

  } catch (error) {
    console.error('❌ Error uploading Curriculum images:', error)
  }
}

// Run the script
uploadCurriculumImages()