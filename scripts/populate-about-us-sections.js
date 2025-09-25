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

async function populateAboutUsData() {
  console.log('🚀 Populating About Us sections in Sanity...\n')

  try {
    // Upload images
    console.log('📸 Uploading About Us images...')
    const heroImage = await uploadImage('About_hero_image.jpg', 'About Us Hero Background')
    const ceoImage = await uploadImage('CEO.jpg', 'Chandrika Bharath - CEO & Founder')
    const visionIcon = await uploadImage('eyes.svg', 'Vision icon')
    const missionIcon = await uploadImage('hand-heart.svg', 'Mission icon')
    const connectImage = await uploadImage('LetsConnect.png', 'Let\'s Connect Form Image')
    const heartDecoration = await uploadImage('hand-heart.svg', 'Heart Decoration')
    const cloudIcon = await uploadImage('cloud.svg', 'Cloud Icon')

    // Check if aboutUs document exists
    console.log('📄 Checking for existing aboutUs document...')
    const existingDoc = await client.fetch('*[_type == "aboutUs"][0]{_id}')

    const aboutUsData = {
      _type: 'aboutUs',
      heroSection: {
        title: 'Driven by purpose and care',
        description: 'Founded in 2008, Cuddles Preschool has evolved into a trusted space for early learning, where happy, confident, and independent children thrive. Over the years, we\'ve nurtured hundreds of little learners and witnessed their incredible journeys—each child\'s growth is a story that continues to inspire us.',
        backgroundImage: heroImage ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: heroImage._id
          }
        } : null
      },
      visionAndMissionSection: {
        sectionTitle: 'Our Vision & mission',
        vision: 'We envision a future where early childhood is honoured as the most powerful stage of learning. At Cuddles, we strive to redefine preschool education by creating environments where curiosity is cherished, imagination is nurtured, and the joy of learning lasts a lifetime.',
        visionIcon: visionIcon ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: visionIcon._id
          }
        } : null,
        mission: 'Our mission is to nurture young minds through playful, purposeful learning that builds strong foundations for life. We aim to create a joyful environment where every child feels safe, supported, and inspired to grow with confidence and creativity.',
        missionIcon: missionIcon ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: missionIcon._id
          }
        } : null
      },
      aboutCeoSection: {
        sectionTitle: 'About The CEO',
        name: 'Chandrika Bharath',
        title: 'CEO & Founder',
        description: [
          'At the center of cuddles preschool is our CEO: Chandrika Bharath - an engineer by training, a mother by instinct, and an educator by choice. Since 2002 she\'s been building a space where children are not just taught, but understood. Her approach blends structure with softness. Her background in engineering gives her an eye for detail and systems, but it\'s her lived experience as a parent that shapes the way she sees children - not as boxes to fit into molds, but as individuals who need space, security, and a little spark to thrive.',
          'Every part of the Cuddles experience - from the curriculum to classroom design - reflects her belief that learning should feel like play, and school should feel like home. She stays hands-on constantly updating the program with the newest research and best practices (tried and tested) but never losing sight of the heart of it all: joy.',
          'Whether she\'s training teachers, planning a new activity, or crouching down to tie a shoelace, she leads with care. And it shows - in the way children settle in, in the way parents trust, and in the way teachers grow. Because childhood comes only once. And our CEO is making sure it counts.'
        ],
        image: ceoImage ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: ceoImage._id
          }
        } : null
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
      },
      letsConnectSection: {
        title: 'Let\'s Connect',
        subtitle: 'We\'d love to hear from you! Whether you have questions about our programs or want to schedule a visit, our team is here to help.',
        formTitle: 'Your Child\'s Bright Future Starts Here!',
        formImage: connectImage ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: connectImage._id
          }
        } : null,
        heartDecoration: heartDecoration ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: heartDecoration._id
          }
        } : null,
        cloudIcon: cloudIcon ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: cloudIcon._id
          }
        } : null
      }
    }

    let result
    if (existingDoc) {
      console.log('📝 Updating existing aboutUs document...')
      result = await client
        .patch(existingDoc._id)
        .set(aboutUsData)
        .commit()
    } else {
      console.log('📝 Creating new aboutUs document...')
      result = await client.create(aboutUsData)
    }

    console.log('✅ Successfully populated About Us sections!')
    console.log(`📋 Document ID: ${result._id}`)

    console.log('\n🎉 About Us sections population completed successfully!')

  } catch (error) {
    console.error('❌ Error populating About Us sections:', error)
  }
}

// Run the script
populateAboutUsData()