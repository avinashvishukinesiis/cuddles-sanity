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

async function populateIncludeSection() {
  console.log('🚀 Populating Include section in homePage...\n')

  try {
    // Upload icons
    console.log('📸 Uploading include section icons...')
    const reportIcon = await uploadImage('report.png', 'Report icon')
    const blubIcon = await uploadImage('blub.png', 'Bulb icon')
    const medalIcon = await uploadImage('medal.png', 'Medal icon')
    const thumbsUpIcon = await uploadImage('thumbsup.png', 'Thumbs up icon')

    // Create include items with uploaded icons
    const includeItems = [
      {
        include: 'Safe, child-friendly campus',
        exclude: 'Unscreened or untrained staff',
        icon: reportIcon ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: reportIcon._id
          }
        } : null
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
        } : null
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
        } : null
      },
      {
        include: 'Personalised care with low student-to-teacher ratio',
        exclude: 'Overcrowded classrooms',
        icon: thumbsUpIcon ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: thumbsUpIcon._id
          }
        } : null
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
        } : null
      }
    ]

    // Get the homePage document
    console.log('📄 Fetching homePage document...')
    const homePageDoc = await client.fetch('*[_type == "homePage"][0]{_id}')

    if (!homePageDoc) {
      console.log('❌ No homePage document found. Please create one first.')
      return
    }

    // Update the homePage document with include section
    console.log('📝 Updating homePage with include section...')
    const updatedDoc = await client
      .patch(homePageDoc._id)
      .set({
        includeSection: {
          title: "What's Included and what's Not",
          description: "We thoughtfully design every part of a child's early years.",
          includeItems: includeItems
        }
      })
      .commit()

    console.log('✅ Successfully updated homePage with include section!')
    console.log(`📊 Added ${includeItems.length} include items`)

    console.log('\n🎉 Include section population completed successfully!')

  } catch (error) {
    console.error('❌ Error populating include section:', error)
  }
}

// Run the script
populateIncludeSection()