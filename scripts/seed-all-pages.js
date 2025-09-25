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

// Function to upload an asset from a file path
async function uploadImage(imagePath, filename) {
  try {
    const fullPath = path.join(__dirname, '..', 'public', imagePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ Image not found: ${fullPath}`);
      return null;
    }

    console.log(`📤 Uploading ${imagePath}...`);
    const imageBuffer = fs.readFileSync(fullPath);
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: filename,
    });

    console.log(`✅ Uploaded ${filename} with ID: ${asset._id}`);

    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (error) {
    console.error(`❌ Error uploading ${imagePath}:`, error.message);
    return null;
  }
}

async function seedSafety() {
  console.log('\n🛡️  Seeding Safety page...');

  // Upload safety images
  const hallroomImage = await uploadImage('hallroom.jpg', 'safety-hero-bg.jpg');
  const dailySanitization = await uploadImage('daily-sanitization.jpg', 'daily-sanitization.jpg');
  const temperatureChecks = await uploadImage('temperature-checks.jpg', 'temperature-checks.jpg');
  const cctvMonitoring = await uploadImage('cctv-monitoring.jpg', 'cctv-monitoring.jpg');
  const childProofing = await uploadImage('child-proofing.jpg', 'child-proofing.jpg');
  const pickupVerification = await uploadImage('pickup-verification.jpg', 'pickup-verification.jpg');
  const healthyEating = await uploadImage('healthy-eating.jpg', 'healthy-eating.jpg');
  const allergyConsiderations = await uploadImage('allergy-considerations.jpg', 'allergy-considerations.jpg');
  const supervision = await uploadImage('Supervision.jpg', 'supervision.jpg');

  // Upload emergency icons
  const trainedIcon = await uploadImage('trained.svg', 'trained-icon.svg');
  const handHeartIcon = await uploadImage('hand-heart.svg', 'hand-heart-icon.svg');
  const engageIcon = await uploadImage('engage.svg', 'engage-icon.svg');

  const safetyDoc = {
    _type: 'safety',
    _id: 'safety-main',
    heroSection: {
      title: 'A secure and nurturing space for your child',
      description: 'At Cuddles Preschool, safety is not just a policy. It is a part of how we care, teach, and grow. Under the leadership of our founder Chandrika Bharath, every measure is thoughtfully planned to support playful learning without compromising on protection. We create an environment where children can explore freely while being safe, healthy, and supported at every step.',
      backgroundImage: hallroomImage,
      safetyFeatures: [
        { title: 'Daily Sanitization', description: 'Classrooms and play areas are cleaned and sanitised daily', image: dailySanitization, imageAlt: 'Hand using sanitizer bottle', titleColor: 'purple' },
        { title: 'Temperature Checks', description: 'Temperature checks are done for all children and staff', image: temperatureChecks, imageAlt: 'Hand holding thermometer for temperature check', titleColor: 'purple' },
        { title: 'CCTV Monitoring', description: '24/7 surveillance to ensure a secure environment.', image: cctvMonitoring, imageAlt: 'CCTV camera setup', titleColor: 'purple' },
        { title: 'Child Proofing', description: 'Every toy, tool, and piece of furniture is chosen with safety in mind', image: childProofing, imageAlt: 'Living room setup with safe furniture', titleColor: 'purple' },
        { title: 'Organised Spaces', description: 'Teachers maintain clean, organised learning spaces throughout the day', image: childProofing, imageAlt: 'Living room with neatly arranged furniture', titleColor: 'purple' },
        { title: 'Child Pick-Up Verification', description: 'Strict protocols to ensure your child\'s safety', image: pickupVerification, imageAlt: 'Hand showing thumbs up', titleColor: 'purple' }
      ]
    },
    emergencySection: {
      title: 'Continued Care for Growing Children',
      emergencyFeatures: [
        { title: 'Trained staff', description: 'All staff are trained in first aid and certified in CPR.', icon: trainedIcon },
        { title: 'Healthcare Partnership', description: 'We are partnered with Apollo Clinic for quick medical assistance.', icon: handHeartIcon },
        { title: 'Emergency ready', description: 'Emergency plans are in place and regularly practiced.', icon: engageIcon }
      ]
    },
    healthyHabitsSection: {
      title: 'Healthy Habits Start Early',
      healthyFeatures: [
        { title: 'Healthy Eating', description: 'Children bring vegetarian food from home; junk food is not allowed.', image: healthyEating, imageAlt: 'Healthy eating habits' },
        { title: 'Allergy Considerations', description: 'We work closely with parents to accommodate special dietary needs.', image: allergyConsiderations, imageAlt: 'Allergy Considerations' },
        { title: 'Supervision', description: 'Mealtimes are calm, clean, and closely supervised', image: supervision, imageAlt: 'Supervision' }
      ]
    }
  };

  const safetyResult = await client.createOrReplace(safetyDoc);
  console.log('✅ Safety data seeded successfully!');
  return safetyResult;
}

async function seedAssistance() {
  console.log('\n🤝 Seeding Assistance page...');

  // Upload assistance images
  const assistanceHeroImage = await uploadImage('assitance_hero_image.jpg', 'assistance-hero-bg.jpg');
  const campIcon = await uploadImage('camp.svg', 'camp-icon.svg');
  const handHeartIcon = await uploadImage('hand-heart.svg', 'hand-heart-icon.svg');
  const engageIcon = await uploadImage('engage.svg', 'engage-icon.svg');
  const childOnShoulder = await uploadImage('childonshoulder.png', 'child-on-shoulder.png');
  const writing = await uploadImage('writing.png', 'writing.png');
  const woman = await uploadImage('woman.png', 'woman.png');
  const typing = await uploadImage('typing.png', 'typing.png');

  const assistanceDoc = {
    _type: 'assistance',
    _id: 'assistance-main',
    heroSection: {
      title: 'We guide every transition with care',
      description: 'We make the shift to formal school environments a positive, well-supported experience for both children and parents. Every element of our program — academic, emotional, and social — helps children step into their next chapter with readiness and joy.',
      backgroundImage: assistanceHeroImage,
      subtitle: 'Here\'s how we support this transition:',
      transitionSupport: [
        { title: 'School Admission Guidance', description: 'We offer personalised advice on selecting the right school and navigating the admission process with ease.', color: '#F0B54C' },
        { title: 'Interview Readiness', description: 'Through playful mock sessions, storytelling, and expression games, children develop the confidence to communicate clearly during school interviews.', color: '#DE627D' },
        { title: 'Primary School Prep Activities', description: 'Age-appropriate worksheets, literacy and  numeracy boosters, and skill-building sessions bridge the gap between preschool and formal education.', color: '#4AA6B1' }
      ]
    },
    continuedCareSection: {
      title: 'Continued Care for Growing Children',
      description: 'Our connection with families grows stronger with time. For children graduating from our programs, we offer additional opportunities for continued growth and joyful exploration.',
      careFeatures: [
        { title: 'Seasonal Camps', description: 'Engaging, theme-based holiday programs that spark creativity, social bonding, and hands-on discovery.', icon: campIcon },
        { title: 'After-School Daycare', description: 'A caring environment for children to relax, play, and learn after school hours, surrounded by familiar faces and structured fun.', icon: handHeartIcon },
        { title: 'Alumni Engagement', description: 'We love seeing our little graduates return for special events, learning circles, or just a visit. Many continue to thrive in ways that trace back to their days at Cuddles.', icon: engageIcon }
      ]
    },
    parentResourceSection: {
      title: 'Parent Resource Hub',
      description: 'We understand that parenting is a journey filled with questions and discovery. That\'s why we offer curated resources to help you support your child\'s growth at home too',
      resources: [
        { title: 'Parenting Insights', description: 'Articles and advice on routines, emotional wellbeing, developmental milestones, and more.', image: childOnShoulder, imageAlt: 'Parent holding child in warm outdoor setting' },
        { title: 'Printable Worksheets & Activities', description: 'Designed by our CEO to encourage continued learning through play at home.', image: writing, imageAlt: 'Hands writing on paper with educational materials' },
        { title: 'Expert Advice', description: 'Contributions from child psychologists and early educators on important topics like screen time, separation anxiety, and resilience.', image: woman, imageAlt: 'Professional educator at desk with educational resources' },
        { title: 'The Cuddles Blog', description: 'Real stories, tips, and joyful moments from our classrooms, written to inspire and connect our parent community.', image: typing, imageAlt: 'Hands typing on laptop keyboard' }
      ]
    }
  };

  const assistanceResult = await client.createOrReplace(assistanceDoc);
  console.log('✅ Assistance data seeded successfully!');
  return assistanceResult;
}

async function seedContact() {
  console.log('\n📞 Seeding Contact page...');

  // Upload contact hero image
  const contactHeroImage = await uploadImage('contactroom.jpg', 'contact-hero-bg.jpg');

  const contactDoc = {
    _type: 'contact',
    _id: 'contact-main',
    heroSection: {
      title: 'We are here to guide you through the first step into your child\'s journey',
      backgroundImage: contactHeroImage
    },
    locationSection: {
      locations: [
        {
          name: 'Salarpuria Greenage Centre',
          address: 'Salarpuria Greenage Apartments, Next to Oxford Dental College, Hosur Road, Bommanahalli, Bengaluru 560068',
          phoneNumbers: ['+91-80503 07665', '+91-90360 90909'],
          email: 'greenage@cuddles.co.in',
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.100288112474!2d77.62657302404054!3d12.90127243740769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14954a9a34c3%3A0x109b9cf1d94096b9!2sSattva%20Greenage!5e0!3m2!1sen!2sin!4v1757799523332!5m2!1sen!2sin',
          borderColor: '#DE627D',
          phoneColor: '#D5973A',
          emailColor: '#4AA6B1'
        },
        {
          name: 'Cuddles AECS Layout',
          address: '#777, 12th Main, 60 Feet Road, Block-A, AECS Layout, Bengaluru 560068',
          phoneNumbers: ['+91-80503 05579', '+91-90360 90909'],
          email: 'play@cuddles.co.in',
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.100288112474!2d77.62657302404054!3d12.90127243740769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14954a9a34c3%3A0x109b9cf1d94096b9!2sSattva%20Greenage!5e0!3m2!1sen!2sin!4v1757799523332!5m2!1sen!2sin',
          borderColor: '#F0B54C',
          phoneColor: '#4AA6B1',
          emailColor: '#9769A5'
        },
        {
          name: 'Cuddles - Gadag',
          address: 'Cuddles Preschool, Jaycee school building, Hudco Colony, Mulgund road, Gadag- 582103',
          phoneNumbers: ['+91- 63646 93332', '+91-9036090909'],
          email: 'greenage@cuddles.co.in',
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.100288112474!2d77.62657302404054!3d12.90127243740769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14954a9a34c3%3A0x109b9cf1d94096b9!2sSattva%20Greenage!5e0!3m2!1sen!2sin!4v1757799523332!5m2!1sen!2sin',
          borderColor: '#DE627D',
          phoneColor: '#D5973A',
          emailColor: '#4AA6B1'
        }
      ]
    }
  };

  const contactResult = await client.createOrReplace(contactDoc);
  console.log('✅ Contact data seeded successfully!');
  return contactResult;
}

async function seedAllPages() {
  console.log('🚀 Starting to seed Safety, Assistance, and Contact pages...\n');

  try {
    await seedSafety();
    await seedAssistance();
    await seedContact();

    console.log('\n🎉 All pages seeded successfully!');
    console.log('✨ You can now view and edit the content in Sanity Studio at http://localhost:3334');
    console.log('📱 View the pages at:');
    console.log('   - http://localhost:3000/Safety');
    console.log('   - http://localhost:3000/Assistance');
    console.log('   - http://localhost:3000/Contact');

  } catch (error) {
    console.error('❌ Error seeding pages:', error);
  }
}

// Run the seed function
seedAllPages();