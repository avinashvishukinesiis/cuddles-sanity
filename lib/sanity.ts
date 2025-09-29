import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Environment detection
const isDev = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

// Dataset selection based on environment
const getDataset = () => {
  if (process.env.NEXT_PUBLIC_SANITY_DATASET_DEV && isDev) {
    return process.env.NEXT_PUBLIC_SANITY_DATASET_DEV
  }
  if (process.env.NEXT_PUBLIC_SANITY_DATASET_PROD && isProduction) {
    return process.env.NEXT_PUBLIC_SANITY_DATASET_PROD
  }
  return process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
}

// Debug logging and fallback for projectId
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
if (!projectId) {
  console.warn('[Sanity Client] Missing NEXT_PUBLIC_SANITY_PROJECT_ID, using fallback')
}

// Main client for public data fetching
export const client = createClient({
  projectId: projectId || 'w8a19ipn',
  dataset: getDataset(),
  useCdn: !isDev, // Use CDN in production, direct API in development
  apiVersion: '2024-01-01',
  perspective: 'published', // Only published content
})

// Admin client for mutations and previews (requires token)
export const adminClient = createClient({
  projectId: projectId || 'w8a19ipn',
  dataset: getDataset(),
  useCdn: false, // Always use direct API for admin operations
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  perspective: 'previewDrafts', // Include draft content
})

// Preview client for draft content
export const previewClient = createClient({
  projectId: projectId || 'w8a19ipn',
  dataset: getDataset(),
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  perspective: 'previewDrafts',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// GROQ queries for fetching content
export const queries = {
  // Hero section content
  heroSection: `*[_type == "homePage"][0].heroSection{
    title,
    description,
    primaryButton,
    secondaryButton,
    backgroundImage
  }`,

  // About Us content
  aboutUs: `*[_type == "aboutUs"][0]{
    _id,
    _type,
    heroSection{
      title,
      description,
      backgroundImage
    },
    visionAndMissionSection{
      sectionTitle,
      vision,
      visionIcon,
      mission,
      missionIcon
    },
    aboutCeoSection{
      sectionTitle,
      name,
      title,
      description,
      image
    },
    faqSection{
      title,
      faqs[]{
        question,
        answer,
        order
      }
    },
    letsConnectSection{
      title,
      subtitle,
      formTitle,
      formImage,
      heartDecoration,
      cloudIcon
    }
  }`,

  // Programs
  programs: `*[_type == "program"] | order(order asc){
    _id,
    title,
    description,
    image,
    features,
    ageGroup
  }`,

  // Testimonials from homePage
  testimonials: `*[_type == "homePage"][0].testimonialsSection{
    title,
    subtitle,
    testimonials[]{
      name,
      role,
      content,
      image,
      rating,
      featured,
      displayOrder
    }
  }`,

  // Include Section from homePage
  includeSection: `*[_type == "homePage"][0].includeSection{
    title,
    description,
    includeItems[]{
      include,
      exclude,
      icon
    }
  }`,

  // Curriculum content
  curriculum: `*[_type == "curriculum"][0]{
    _id,
    _type,
    heroSection{
      title,
      description,
      backgroundImage
    },
    programsSection{
      programs[]{
        title,
        ageRange,
        color,
        icon,
        colSpan
      }
    },
    dayAtCuddlesSection{
      title,
      description,
      dailySchedule[]{
        timeSlot,
        description
      }
    },
    learningMethodologySection{
      title,
      subtitle,
      methodologies[]{
        title,
        description,
        keyFeatures,
        icon,
        color
      }
    },
    subjectAreasSection{
      title,
      subtitle,
      subjects[]{
        title,
        description,
        activities,
        icon,
        color
      }
    },
    assessmentSection{
      title,
      subtitle,
      description,
      assessmentMethods[]{
        title,
        description,
        frequency,
        icon
      }
    },
    learningEnvironmentSection{
      title,
      subtitle,
      description,
      environments[]{
        title,
        description,
        features,
        image,
        ageGroups
      }
    },
    parentPartnershipSection{
      title,
      subtitle,
      description,
      partnershipAreas[]{
        title,
        description,
        activities,
        icon
      }
    },
    specialProgramsSection{
      title,
      subtitle,
      programs[]{
        title,
        description,
        duration,
        ageGroups,
        highlights,
        image,
        color
      }
    },
    faqSection{
      title,
      subtitle,
      faqs[]{
        question,
        answer,
        category
      }
    }
  }`,

  // Partnerships content
  partnerships: `*[_type == "partnerships"][0]{
    _id,
    _type,
    heroSection{
      title,
      description,
      backgroundImage,
      benefitsCards[]{
        title,
        description,
        color
      }
    },
    partnerWithSection{
      title,
      subtitle,
      partnerTypes[]{
        title
      }
    },
    cuddlesPartnerSection{
      title,
      subtitle,
      benefits[]{
        title,
        description
      }
    },
    enrollSection{
      title,
      subtitle,
      steps[]{
        step
      }
    },
    letsBuildSection{
      title,
      subtitle,
      formImage
    }
  }`,

  // Safety content
  safety: `*[_type == "safety"][0]{
    _id,
    _type,
    heroSection{
      title,
      description,
      backgroundImage,
      safetyFeatures[]{
        title,
        description,
        image,
        imageAlt,
        titleColor
      }
    },
    emergencySection{
      title,
      emergencyFeatures[]{
        title,
        description,
        icon
      }
    },
    healthyHabitsSection{
      title,
      healthyFeatures[]{
        title,
        description,
        image,
        imageAlt
      }
    }
  }`,

  // Assistance content
  assistance: `*[_type == "assistance"][0]{
    _id,
    _type,
    heroSection{
      title,
      description,
      backgroundImage,
      subtitle,
      transitionSupport[]{
        title,
        description,
        color
      }
    },
    continuedCareSection{
      title,
      description,
      careFeatures[]{
        title,
        description,
        icon
      }
    },
    parentResourceSection{
      title,
      description,
      resources[]{
        title,
        description,
        image,
        imageAlt
      }
    }
  }`,

  // Contact content
  contact: `*[_type == "contact"][0]{
    _id,
    _type,
    heroSection{
      title,
      backgroundImage
    },
    locationSection{
      locations[]{
        name,
        address,
        phoneNumbers,
        email,
        mapEmbedUrl,
        borderColor,
        phoneColor,
        emailColor
      }
    }
  }`,

  // Site settings
  siteSettings: `*[_type == "siteSettings"][0]{
    siteName,
    siteDescription,
    contactInfo,
    socialMedia
  }`
}