const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Read .env.local file manually
const envPath = path.join(__dirname, '..', '.env.local');
const envFile = fs.readFileSync(envPath, 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    env[key.trim()] = value.trim();
  }
});

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: env.SANITY_API_TOKEN,
});

// Function to upload an asset from a URL or file path
async function uploadImage(imagePath, filename) {
  try {

    const fullPath = path.join(__dirname, '..', 'public', imagePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`Image not found: ${fullPath}`);
      return null;
    }

    const imageBuffer = fs.readFileSync(fullPath);
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: filename,
    });

    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (error) {
    console.error(`Error uploading ${imagePath}:`, error);
    return null;
  }
}

async function seedPartnerships() {
  try {
    console.log('Starting partnerships data seeding...');

    // Upload images first
    const heroBackgroundImage = await uploadImage('About_hero_image.jpg', 'partnerships-hero-bg.jpg');
    const formImage = await uploadImage('LetsBuild.png', 'lets-build-form.png');

    // Create the partnerships document
    const partnershipsDoc = {
      _type: 'partnerships',
      _id: 'partnerships-main',
      heroSection: {
        title: 'Collaborate with us to support your employees',
        description: "At Cuddles, we understand the challenges working parents face. That's why we offer customised daycare solutions for corporate partners, ensuring that your employees' children receive the best care and education while they focus on their work.",
        backgroundImage: heroBackgroundImage,
        benefitsCards: [
          {
            title: 'Discounted fees',
            description: 'Special rates based on the number of enrollments.',
            color: '#F0B54C'
          },
          {
            title: 'Customized Solutions',
            description: "Tailored programs to meet your employees' needs.",
            color: '#DE627D'
          },
          {
            title: 'Peace of Mind',
            description: "A safe, nurturing environment for your employees' children.",
            color: '#4AA6B1'
          }
        ]
      },
      partnerWithSection: {
        title: 'Who we partner with!',
        subtitle: 'Whether you are an industry giant or an emerging enterprise, we work closely with you to offer your employees quality preschool and day-care services that truly support their work-life balance.',
        partnerTypes: [
          { title: 'IT & Tech Companies' },
          { title: 'Multinational Corporations' },
          { title: 'Government Institutions' },
          { title: 'Healthcare Providers' },
          { title: 'Startups and Corporate Parks' }
        ]
      },
      cuddlesPartnerSection: {
        title: 'Why Partner With Cuddles?',
        subtitle: 'Every Day At Cuddles Follows A Rhythm Designed To Comfort, Inspire, And Engage. Here\'s What A Typical Day Looks Like',
        benefits: [
          {
            title: 'Preferential Access & Fee Benefits',
            description: 'Corporate partners receive priority admissions and tailored fee structures, making our premium early education experience more accessible to their teams.'
          },
          {
            title: 'Custom Childcare Solutions',
            description: 'We offer flexible plans including full-time preschool, day-care support, emergency care, and on-demand parenting workshops to meet your team\'s evolving needs.'
          },
          {
            title: 'Trusted Early Learning Approach',
            description: 'Our play-based, process-driven curriculum fosters curiosity, creativity, and confidence. Children build lasting skills through experiences that go beyond academics — from emotional intelligence to collaborative thinking.'
          },
          {
            title: 'Reliable Communication & Involvement',
            description: 'From parent-teacher touchpoints to real-time updates, we keep families engaged every step of the way. You can trust that every child is cared for with intention and heart.'
          }
        ]
      },
      enrollSection: {
        title: 'How To Enroll',
        subtitle: 'Getting Started Is Simple And Seamless.',
        steps: [
          { step: 'Reach Out via the corporate inquiry form below' },
          { step: 'We Connect to understand your team\'s requirements' },
          { step: 'We Curate a custom enrollment and benefit structure' },
          { step: 'You Share Access to your employees' },
          { step: 'Children Enroll with priority placement and onboarding support' }
        ]
      },
      letsBuildSection: {
        title: 'Let\'s Build a Brighter Future Together!',
        subtitle: 'Contact us to explore partnership opportunities',
        formImage: formImage
      }
    };

    // Create or update the document
    const result = await client.createOrReplace(partnershipsDoc);

    console.log('✅ Partnerships data seeded successfully!');
    console.log('Document ID:', result._id);
    console.log('✨ You can now view and edit the partnerships content in Sanity Studio at http://localhost:3334');

  } catch (error) {
    console.error('❌ Error seeding partnerships data:', error);
  }
}

// Run the seed function
seedPartnerships();