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

async function updateHomePageDocument() {
  console.log('🚀 Updating Home Page document...\n')

  try {
    // First, upload a hero background image
    console.log('📸 Uploading hero background image...')
    const heroImage = await uploadImage('Hero_image.png', 'Hero background - Children learning and playing')

    // Get the existing document to check current structure
    const existingDoc = await client.fetch('*[_type == "homePage"][0]')
    console.log('📄 Current document structure:', Object.keys(existingDoc))

    // Update the document with missing data and proper structure
    const updateData = {}

    // Add hero background image if uploaded successfully
    if (heroImage) {
      updateData['heroSection.backgroundImage'] = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: heroImage._id
        }
      }
    }

    // Ensure all sections have proper structure with unique keys
    updateData['earlyEducationSection.features'] = [
      { _key: 'feat1', title: 'Holistic Development' },
      { _key: 'feat2', title: 'Experienced Educators' },
      { _key: 'feat3', title: 'Safe & Inclusive Environment' },
      { _key: 'feat4', title: 'Engaging Curriculum' }
    ]

    // Update activity items with proper keys
    const activityItems = [
      { _key: 'act1', title: 'Makerspace', description: 'Where tiny hands build big ideas through creativity and innovation.' },
      { _key: 'act2', title: 'Art Studio', description: 'A colorful world where imagination comes to life with every brushstroke.' },
      { _key: 'act3', title: 'Outdoor Play Space', description: 'Adventure awaits with climbing, running, and nature exploration.' },
      { _key: 'act4', title: 'Home rooms', description: 'A cozy, nurturing space where learning feels like a second home.' },
      { _key: 'act5', title: 'Movement Studio', description: 'Stretch, dance, and grow - where little bodies stay active and joyful.' },
      { _key: 'act6', title: 'Library & Reading Books', description: 'Storytime magic that sparks curiosity and a love for books.' },
      { _key: 'act7', title: 'Construction Area', description: 'Future architects at work, stacking, designing, and problem-solving.' },
      { _key: 'act8', title: 'Changing Room', description: 'A tidy, organized space for quick transitions and independence.' },
      { _key: 'act9', title: 'Dining Area', description: 'Fueling young minds with healthy meals and happy conversations.' },
      { _key: 'act10', title: 'Montessori Zone', description: 'Hands-on learning that fosters confidence and self-discovery.' },
      { _key: 'act11', title: 'Nap Room', description: 'A peaceful retreat for sweet dreams and recharging little energies.' },
      { _key: 'act12', title: 'Music Room', description: 'Where giggles, rhythm, and melodies create the soundtrack of childhood.' }
    ]

    // If existing document has activity items with images, preserve them
    if (existingDoc.activityZoneSection?.activityItems) {
      existingDoc.activityZoneSection.activityItems.forEach((item, index) => {
        if (activityItems[index] && item.image) {
          activityItems[index].image = item.image
        }
      })
    }

    updateData['activityZoneSection.activityItems'] = activityItems

    // Update include items with proper keys
    const includeItems = [
      {
        _key: 'inc1',
        include: 'Safe, child-friendly campus',
        exclude: 'Unscreened or untrained staff'
      },
      {
        _key: 'inc2',
        include: 'Experienced and compassionate educators',
        exclude: 'Academic pressure or rote learning'
      },
      {
        _key: 'inc3',
        include: 'Play-based, age-appropriate curriculum',
        exclude: 'One-size-fits-all teaching'
      },
      {
        _key: 'inc4',
        include: 'Personalised care with low student-to-teacher ratio',
        exclude: 'Overcrowded classrooms'
      },
      {
        _key: 'inc5',
        include: 'Daily learning updates and activity sheets',
        exclude: 'Generic or outdated lesson plans'
      }
    ]

    // Preserve existing icons if they exist
    if (existingDoc.includeSection?.includeItems) {
      existingDoc.includeSection.includeItems.forEach((item, index) => {
        if (includeItems[index] && item.icon) {
          includeItems[index].icon = item.icon
        }
      })
    }

    updateData['includeSection.includeItems'] = includeItems

    // Update program items with proper keys
    const programItems = [
      {
        _key: 'prog1',
        title: 'Preschool Programs',
        description: 'Your child discovers math through cooking, explores science in our garden, and builds confidence through music and movement, preparing for school while keeping childhood magical.',
        order: 1
      },
      {
        _key: 'prog2',
        title: 'Day Care',
        description: 'We offer the same attention and care at home as they get at school. While you work, you can be certain that your child is in good hands with qualified carers who provide healthy meals and age-appropriate activities.',
        order: 2
      },
      {
        _key: 'prog3',
        title: 'Parent Counselling',
        description: 'Our experienced counselors provide personalized guidance on developmental milestones and behavior management. We support you with practical advices and guidance in raising your child.',
        order: 3
      },
      {
        _key: 'prog4',
        title: 'Teacher Training',
        description: 'We share our expertise with educators creating transformative learning environments. Our programs focus on active learning methodologies and child development, helping teachers create classrooms where every child feels valued.',
        order: 4
      }
    ]

    // Preserve existing program images if they exist
    if (existingDoc.cuddlesProgramSection?.programItems) {
      existingDoc.cuddlesProgramSection.programItems.forEach((item, index) => {
        if (programItems[index] && item.image) {
          programItems[index].image = item.image
        }
      })
    }

    updateData['cuddlesProgramSection.programItems'] = programItems

    // Update FAQ items with proper keys
    updateData['faqSection.faqs'] = [
      {
        _key: 'faq1',
        question: 'What age groups do you accept?',
        answer: 'We take kids of 3 months and onwards.',
        order: 1
      },
      {
        _key: 'faq2',
        question: 'In what ways can learning via play help children perform better in school?',
        answer: 'Learning through play helps children develop critical thinking skills, creativity, and social abilities. It makes learning enjoyable and memorable, leading to better retention and academic performance.',
        order: 2
      },
      {
        _key: 'faq3',
        question: 'What security steps do you take, and how do you let parents know?',
        answer: 'We maintain strict security protocols including background checks for all staff, secure entry systems, regular safety drills, and real-time communication with parents through our app and daily reports.',
        order: 3
      },
      {
        _key: 'faq4',
        question: 'Are parents updated and involved in school happenings?',
        answer: 'Yes! We provide daily updates through our parent app, regular newsletters, parent-teacher conferences, and special events. We believe in maintaining open communication with families.',
        order: 4
      }
    ]

    // Apply all updates
    const result = await client.patch('EHHoFjhFP7hFaaHpW49QPG')
      .set(updateData)
      .commit()

    console.log('✅ Home Page document updated successfully!')
    console.log('📋 Updated sections:', Object.keys(updateData))

  } catch (error) {
    console.error('❌ Error updating document:', error)
  }
}

// Run the update
updateHomePageDocument()