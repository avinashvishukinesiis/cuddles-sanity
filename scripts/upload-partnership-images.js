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

async function uploadPartnershipImages() {
  console.log('🚀 Starting partnership images upload...');

  const imagesToUpload = [
    { path: 'About_hero_image.jpg', filename: 'partnerships-hero-background.jpg' },
    { path: 'LetsBuild.png', filename: 'partnerships-form-image.png' }
  ];

  const results = {};

  for (const image of imagesToUpload) {
    const result = await uploadImage(image.path, image.filename);
    results[image.path] = result;
  }

  console.log('\n📋 Upload Results:');
  console.log('==================');

  Object.entries(results).forEach(([path, result]) => {
    if (result) {
      console.log(`✅ ${path}: Successfully uploaded (ID: ${result.asset._ref})`);
    } else {
      console.log(`❌ ${path}: Failed to upload`);
    }
  });

  console.log('\n📝 Next Steps:');
  console.log('1. Open Sanity Studio at http://localhost:3334');
  console.log('2. Create or edit a Partnerships document');
  console.log('3. In the Hero Section, select the partnerships-hero-background.jpg image');
  console.log('4. In the Let\'s Build Section, select the partnerships-form-image.png image');

  return results;
}

uploadPartnershipImages().catch(console.error);