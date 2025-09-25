const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Initialize Sanity client with write permissions
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

// Main function to upload all images and create Home page document
async function uploadAllImages() {
  console.log('🚀 Starting image upload process...\n')

  try {
    // 1. Upload Early Education image
    console.log('📚 Uploading Early Education images...')
    const earlyEducationImage = await uploadImage('early-education.jpg', 'Children playing with colorful balls on green lawn')

    // 2. Upload Cuddles Program images
    console.log('\n🎨 Uploading Cuddles Program images...')
    const sunDecoration = await uploadImage('sun.svg', 'Sun decoration')
    const cp1Image = await uploadImage('cp1.png', 'Preschool Programs')
    const cp2Image = await uploadImage('cp2.png', 'Day Care')
    const cp3Image = await uploadImage('cp3.png', 'Parent Counselling')
    const cp4Image = await uploadImage('cp4.png', 'Teacher Training')

    // 3. Upload Activity Zone images
    console.log('\n🏃 Uploading Activity Zone images...')
    const activityImages = [
      { path: 'photo/1.jpg', title: 'Makerspace', alt: 'Children building and creating in makerspace' },
      { path: 'photo/7.jpg', title: 'Art Studio', alt: 'Children creating art in studio' },
      { path: 'photo/18.jpg', title: 'Outdoor Play Space', alt: 'Children playing outdoors' },
      { path: 'photo/27.jpg', title: 'Home rooms', alt: 'Cozy home room environment' },
      { path: 'photo/22.jpg', title: 'Movement Studio', alt: 'Children in movement and dance' },
      { path: 'photo/14.jpg', title: 'Library & Reading Books', alt: 'Children reading books in library' },
      { path: 'photo/34.jpg', title: 'Construction Area', alt: 'Children building and constructing' },
      { path: 'photo/2.jpg', title: 'Changing Room', alt: 'Clean and organized changing area' },
      { path: 'photo/11.jpg', title: 'Dining Area', alt: 'Children eating in dining area' },
      { path: 'photo/42.jpg', title: 'Montessori Zone', alt: 'Montessori learning environment' },
      { path: 'photo/32.jpg', title: 'Music Room', alt: 'Children making music' }
    ]

    const uploadedActivityImages = []
    for (const activity of activityImages) {
      const asset = await uploadImage(activity.path, activity.alt)
      if (asset) {
        uploadedActivityImages.push({
          title: activity.title,
          description: getActivityDescription(activity.title),
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id
            }
          }
        })
      }
    }

    // 4. Upload Include section icons
    console.log('\n✅ Uploading Include section icons...')
    const reportIcon = await uploadImage('report.png', 'Report icon')
    const blubIcon = await uploadImage('blub.png', 'Bulb icon')
    const medalIcon = await uploadImage('medal.png', 'Medal icon')
    const thumbsupIcon = await uploadImage('thumbsup.png', 'Thumbs up icon')

    // 5. Upload Let's Connect images
    console.log('\n💬 Uploading Lets Connect images...')
    const letsConnectImage = await uploadImage('LetsConnect.png', 'Lets Connect form image')
    const heartDecoration = await uploadImage('handHeart.svg', 'Heart decoration')

    // 6. Create Home Page document
    console.log('\n📄 Creating Home Page document...')

    const homePageDoc = {
      _type: 'homePage',
      title: 'Home Page Content',
      earlyEducationSection: {
        title: 'Why Early Education Matters ?',
        description: 'The first five years of a child\'s life are when 90% of brain development occurs. Active learning and creative experiences don\'t just teach skills but they build the neural pathways that determine how children think, learn, and approach challenges for life. At Cuddles, we harness this incredible potential through purposeful play, hands-on exploration, and creative expression.',
        image: earlyEducationImage ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: earlyEducationImage._id
          }
        } : undefined,
        features: [
          'Holistic Development',
          'Experienced Educators',
          'Safe & Inclusive Environment',
          'Engaging Curriculum'
        ]
      },
      cuddlesProgramSection: {
        title: 'Cuddles Program',
        subtitle: 'What we offer ?',
        sunDecoration: sunDecoration ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: sunDecoration._id
          }
        } : undefined,
        programItems: [
          {
            title: 'Preschool Programs',
            description: 'Your child discovers math through cooking, explores science in our garden, and builds confidence through music and movement, preparing for school while keeping childhood magical.',
            image: cp1Image ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: cp1Image._id
              }
            } : undefined,
            order: 1
          },
          {
            title: 'Day Care',
            description: 'We offer the same attention and care at home as they get at school. While you work, you can be certain that your child is in good hands with qualified carers who provide healthy meals and age-appropriate activities.',
            image: cp2Image ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: cp2Image._id
              }
            } : undefined,
            order: 2
          },
          {
            title: 'Parent Counselling',
            description: 'Our experienced counselors provide personalized guidance on developmental milestones and behavior management. We support you with practical advices and guidance in raising your child.',
            image: cp3Image ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: cp3Image._id
              }
            } : undefined,
            order: 3
          },
          {
            title: 'Teacher Training',
            description: 'We share our expertise with educators creating transformative learning environments. Our programs focus on active learning methodologies and child development, helping teachers create classrooms where every child feels valued.',
            image: cp4Image ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: cp4Image._id
              }
            } : undefined,
            order: 4
          }
        ]
      },
      activityZoneSection: {
        title: '12 different activity zones',
        activityItems: uploadedActivityImages
      },
      includeSection: {
        title: 'What\'s Included and what\'s Not',
        description: 'We thoughtfully design every part of a child\'s early years.',
        includeItems: [
          {
            include: 'Safe, child-friendly campus',
            exclude: 'Unscreened or untrained staff',
            icon: reportIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: reportIcon._id
              }
            } : undefined
          },
          {
            include: 'Experienced and compassionate educators',
            exclude: 'Academic pressure or rote learning',
            icon: blubIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: blubIcon._id
              }
            } : undefined
          },
          {
            include: 'Play-based, age-appropriate curriculum',
            exclude: 'One-size-fits-all teaching',
            icon: medalIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: medalIcon._id
              }
            } : undefined
          },
          {
            include: 'Personalised care with low student-to-teacher ratio',
            exclude: 'Overcrowded classrooms',
            icon: thumbsupIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: thumbsupIcon._id
              }
            } : undefined
          },
          {
            include: 'Daily learning updates and activity sheets',
            exclude: 'Generic or outdated lesson plans',
            icon: reportIcon ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: reportIcon._id
              }
            } : undefined
          }
        ]
      },
      letsConnectSection: {
        title: 'Ready to give your child the best start?',
        subtitle: 'Let\'s connect and explore how Cuddles can nurture your child\'s growth and happiness.',
        formImage: letsConnectImage ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: letsConnectImage._id
          }
        } : undefined,
        heartDecoration: heartDecoration ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: heartDecoration._id
          }
        } : undefined
      },
      awardsSection: {
        title: 'We Are Proud Winners Of',
        awards: [
          'Brainfeed',
          'Parents choice awards',
          'Education today',
          'India Preschool Jury Awards'
        ]
      },
      faqSection: {
        title: 'Frequently Asked Questions',
        faqs: [
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
    }

    const result = await client.create(homePageDoc)
    console.log('✅ Home Page document created successfully!')
    console.log(`Document ID: ${result._id}`)

  } catch (error) {
    console.error('❌ Error during upload process:', error)
  }
}

// Helper function to get activity descriptions
function getActivityDescription(title) {
  const descriptions = {
    'Makerspace': 'Where tiny hands build big ideas through creativity and innovation.',
    'Art Studio': 'A colorful world where imagination comes to life with every brushstroke.',
    'Outdoor Play Space': 'Adventure awaits with climbing, running, and nature exploration.',
    'Home rooms': 'A cozy, nurturing space where learning feels like a second home.',
    'Movement Studio': 'Stretch, dance, and grow - where little bodies stay active and joyful.',
    'Library & Reading Books': 'Storytime magic that sparks curiosity and a love for books.',
    'Construction Area': 'Future architects at work, stacking, designing, and problem-solving.',
    'Changing Room': 'A tidy, organized space for quick transitions and independence.',
    'Dining Area': 'Fueling young minds with healthy meals and happy conversations.',
    'Montessori Zone': 'Hands-on learning that fosters confidence and self-discovery.',
    'Music Room': 'Where giggles, rhythm, and melodies create the soundtrack of childhood.'
  }
  return descriptions[title] || 'Activity description'
}

// Run the upload process
uploadAllImages()