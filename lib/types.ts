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
  heroTitle: string
  heroDescription: string
  vision: string
  mission: string
  ceoInfo: {
    name: string
    title: string
    description: string
    image?: SanityImageSource
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