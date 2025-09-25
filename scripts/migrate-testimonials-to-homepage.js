const { createClient } = require('@sanity/client')

// Initialize Sanity client
const client = createClient({
  projectId: 'w8a19ipn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skRdS4HPGr6hUq5mrlB5pP39lkdJoNoHzkAwbFU4gJge5x7E5Y1y4oeRKQWp2cpuAPfcalMNkfeYW6aS2mW7OP6gtFmfRwQT5OO8GnQqhYoxBg8Ct2XgxRPmLUxikvlKVxwKrYCVkqPdL82yTqFg5OjrpFGHwsNj9fsPD9Ti6SNfl3b7RYPg'
})

async function migrateTestimonialsToHomePage() {
  console.log('🚀 Starting testimonials migration to homePage...\n')

  try {
    // First, get existing testimonials
    console.log('📋 Fetching existing testimonials...')
    const existingTestimonials = await client.fetch('*[_type == "testimonial"]{_id, name, role, content, image, rating}')
    console.log(`Found ${existingTestimonials.length} existing testimonials`)

    if (existingTestimonials.length === 0) {
      console.log('No testimonials found to migrate.')
      return
    }

    // Transform testimonials for homePage structure
    const testimonialsData = existingTestimonials.map((testimonial, index) => ({
      name: testimonial.name,
      role: testimonial.role,
      content: testimonial.content,
      image: testimonial.image,
      rating: testimonial.rating,
      featured: index < 3, // Mark first 3 as featured
      displayOrder: index + 1
    }))

    // Get the homePage document
    console.log('📄 Fetching homePage document...')
    const homePageDoc = await client.fetch('*[_type == "homePage"][0]{_id}')

    if (!homePageDoc) {
      console.log('❌ No homePage document found. Please create one first.')
      return
    }

    // Update the homePage document with testimonials section
    console.log('📝 Updating homePage with testimonials section...')
    const updatedDoc = await client
      .patch(homePageDoc._id)
      .set({
        testimonialsSection: {
          title: 'What Parents Say',
          subtitle: 'Hear from our happy families',
          testimonials: testimonialsData
        }
      })
      .commit()

    console.log('✅ Successfully updated homePage with testimonials section!')
    console.log(`📊 Migrated ${testimonialsData.length} testimonials`)

    // Optionally, you can delete the old separate testimonial documents
    // Uncomment the lines below if you want to remove the old documents
    /*
    console.log('🗑️ Deleting old testimonial documents...')
    for (const testimonial of existingTestimonials) {
      await client.delete(testimonial._id)
      console.log(`✅ Deleted testimonial: ${testimonial.name}`)
    }
    console.log('🎉 Old testimonial documents cleaned up!')
    */

    console.log('\n🎉 Migration completed successfully!')
    console.log('💡 Note: Old testimonial documents are preserved. Uncomment deletion code if you want to remove them.')

  } catch (error) {
    console.error('❌ Error during migration:', error)
  }
}

// Run the migration
migrateTestimonialsToHomePage()