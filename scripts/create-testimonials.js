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

async function createTestimonials() {
  console.log('🚀 Creating testimonials...\n')

  try {
    // Upload testimonial images
    console.log('📸 Uploading testimonial images...')
    const image1 = await uploadImage('test1.png', 'Dr. Sandeep Joshi photo')
    const image2 = await uploadImage('test2.png', 'Anita Sharma photo')

    // Create testimonial documents
    const testimonials = [
      {
        _type: 'testimonial',
        name: 'Dr. Sandeep Joshi',
        role: 'Pediatrician',
        content: 'Cuddles Preschool provides an exceptional environment where every child feels valued and supported. As a pediatrician, I appreciate their holistic approach to early childhood development.',
        rating: 5,
        image: image1 ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: image1._id
          }
        } : null,
        featured: true,
        displayOrder: 1,
        dateGiven: '2024-01-15',
        status: 'published'
      },
      {
        _type: 'testimonial',
        name: 'Anita Sharma',
        role: 'Parent',
        content: 'The teachers at Cuddles are incredibly caring and the environment feels completely safe. My daughter looks forward to going to school every day!',
        rating: 5,
        image: image2 ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: image2._id
          }
        } : null,
        featured: true,
        displayOrder: 2,
        dateGiven: '2024-02-10',
        status: 'published'
      },
      {
        _type: 'testimonial',
        name: 'Rahul Mehta',
        role: 'Software Engineer',
        content: 'Cuddles strikes the perfect balance between fun and learning. My son has grown so much in confidence and creativity since joining.',
        rating: 5,
        featured: false,
        displayOrder: 3,
        dateGiven: '2024-03-05',
        status: 'published'
      },
      {
        _type: 'testimonial',
        name: 'Priya Patel',
        role: 'Teacher',
        content: 'As an educator myself, I am impressed by Cuddles\' child-centered approach and the way they nurture each child\'s unique potential.',
        rating: 5,
        featured: false,
        displayOrder: 4,
        dateGiven: '2024-03-20',
        status: 'published'
      }
    ]

    // Create testimonials in Sanity
    for (const testimonial of testimonials) {
      const result = await client.create(testimonial)
      console.log(`✅ Created testimonial for ${testimonial.name}`)
    }

    console.log('\n🎉 All testimonials created successfully!')
    console.log(`📋 Created ${testimonials.length} testimonials`)

  } catch (error) {
    console.error('❌ Error creating testimonials:', error)
  }
}

// Run the script
createTestimonials()