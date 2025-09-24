import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries for fetching content
export const queries = {
  // Hero section content
  heroSection: `*[_type == "heroSection"][0]{
    title,
    subtitle,
    description,
    primaryButton,
    secondaryButton,
    backgroundImage
  }`,

  // About Us content
  aboutUs: `*[_type == "aboutUs"][0]{
    heroTitle,
    heroDescription,
    vision,
    mission,
    ceoInfo
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

  // Testimonials
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc){
    _id,
    name,
    role,
    content,
    image,
    rating
  }`,

  // Site settings
  siteSettings: `*[_type == "siteSettings"][0]{
    siteName,
    siteDescription,
    contactInfo,
    socialMedia
  }`
}