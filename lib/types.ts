import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface HeroSection {
  _id: string
  _type: 'heroSection'
  title: string
  subtitle?: string
  description: string
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton: {
    text: string
    link: string
  }
  backgroundImage?: SanityImageSource
}

export interface AboutUs {
  _id: string
  _type: 'aboutUs'
  heroSection: {
    title: string
    description: string
    backgroundImage?: SanityImageSource
  }
  visionAndMissionSection: {
    sectionTitle: string
    vision: string
    visionIcon?: SanityImageSource
    mission: string
    missionIcon?: SanityImageSource
  }
  aboutCeoSection: {
    sectionTitle: string
    name: string
    title: string
    description: string[]
    image?: SanityImageSource
  }
  faqSection: {
    title: string
    faqs: {
      question: string
      answer: string
      order?: number
    }[]
  }
  letsConnectSection: {
    title: string
    subtitle: string
    formTitle: string
    formImage?: SanityImageSource
    heartDecoration?: SanityImageSource
    cloudIcon?: SanityImageSource
  }
}

export interface Program {
  _id: string
  _type: 'program'
  title: string
  description: string
  image?: SanityImageSource
  features: string[]
  ageGroup: string
  order: number
}

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  name: string
  role: string
  content: string
  image?: SanityImageSource
  rating: number
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  siteName: string
  siteDescription: string
  contactInfo: {
    phone: string
    email: string
    address: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface HomePage {
  _id: string
  _type: 'homePage'
  heroSection: HeroSection
  earlyEducationSection: {
    title: string
    description: string
    features: Array<{
      title: string
    }>
    image?: SanityImageSource
  }
  testimonialsSection: {
    title: string
    subtitle: string
    testimonials: Testimonial[]
  }
  includeSection: {
    title: string
    description: string
    includeItems: Array<{
      include: string
      exclude: string
      icon?: SanityImageSource
    }>
  }
}

export interface Curriculum {
  _id: string
  _type: 'curriculum'
  heroSection: {
    title: string
    description: string
    backgroundImage?: SanityImageSource
  }
  programsSection: {
    programs: {
      title: string
      ageRange: string
      color: string
      icon?: SanityImageSource
      colSpan?: number
      order?: number
    }[]
  }
  dayAtCuddlesSection: {
    title: string
    description: string
    dailySchedule: {
      timeSlot: string
      description: string
    }[]
  }
  learningMethodologySection: {
    title: string
    subtitle: string
    methodologies: {
      title: string
      description: string
      keyFeatures: string[]
      icon?: SanityImageSource
      color: string
    }[]
  }
  subjectAreasSection: {
    title: string
    subtitle: string
    subjects: {
      title: string
      description: string
      activities: string[]
      icon?: SanityImageSource
      color: string
    }[]
  }
  assessmentSection: {
    title: string
    subtitle: string
    description: string
    assessmentMethods: {
      title: string
      description: string
      frequency?: string
      icon?: SanityImageSource
    }[]
  }
  learningEnvironmentSection: {
    title: string
    subtitle: string
    description: string
    environments: {
      title: string
      description: string
      features: string[]
      image?: SanityImageSource
      ageGroups: string[]
    }[]
  }
  parentPartnershipSection: {
    title: string
    subtitle: string
    description: string
    partnershipAreas: {
      title: string
      description: string
      activities: string[]
      icon?: SanityImageSource
    }[]
  }
  specialProgramsSection: {
    title: string
    subtitle: string
    programs: {
      title: string
      description: string
      duration?: string
      ageGroups: string[]
      highlights: string[]
      image?: SanityImageSource
      color?: string
    }[]
  }
  faqSection: {
    title: string
    subtitle: string
    faqs: {
      question: string
      answer: string
      category: string
    }[]
  }
}

export interface Partnerships {
  _id: string
  _type: 'partnerships'
  heroSection: {
    title: string
    description: string
    backgroundImage?: SanityImageSource
    benefitsCards: {
      title: string
      description: string
      color: string
    }[]
  }
  partnerWithSection: {
    title: string
    subtitle: string
    partnerTypes: {
      title: string
    }[]
  }
  cuddlesPartnerSection: {
    title: string
    subtitle: string
    benefits: {
      title: string
      description: string
    }[]
  }
  enrollSection: {
    title: string
    subtitle: string
    steps: {
      step: string
    }[]
  }
  letsBuildSection: {
    title: string
    subtitle: string
    formImage?: SanityImageSource
  }
}

export interface Safety {
  _id: string
  _type: 'safety'
  heroSection: {
    title: string
    description: string
    backgroundImage?: SanityImageSource
    safetyFeatures: {
      title: string
      description: string
      image?: SanityImageSource
      imageAlt: string
      titleColor?: string
    }[]
  }
  emergencySection: {
    title: string
    emergencyFeatures: {
      title: string
      description: string
      icon?: SanityImageSource
    }[]
  }
  healthyHabitsSection: {
    title: string
    healthyFeatures: {
      title: string
      description: string
      image?: SanityImageSource
      imageAlt: string
    }[]
  }
}

export interface Assistance {
  _id: string
  _type: 'assistance'
  heroSection: {
    title: string
    description: string
    backgroundImage?: SanityImageSource
    subtitle?: string
    transitionSupport: {
      title: string
      description: string
      color: string
    }[]
  }
  continuedCareSection: {
    title: string
    description: string
    careFeatures: {
      title: string
      description: string
      icon?: SanityImageSource
    }[]
  }
  parentResourceSection: {
    title: string
    description: string
    resources: {
      title: string
      description: string
      image?: SanityImageSource
      imageAlt?: string
    }[]
  }
}

export interface Contact {
  _id: string
  _type: 'contact'
  heroSection: {
    title: string
    backgroundImage?: SanityImageSource
  }
  locationSection: {
    locations: {
      name: string
      address: string
      phoneNumbers: string[]
      email: string
      mapEmbedUrl?: string
      borderColor: string
      phoneColor: string
      emailColor: string
    }[]
  }
}