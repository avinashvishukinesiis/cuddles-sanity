import { client, queries } from './sanity'
import { HeroSection, AboutUs, Program, Testimonial, SiteSettings } from './types'

export async function getHeroSection(): Promise<HeroSection | null> {
  try {
    return await client.fetch(queries.heroSection)
  } catch (error) {
    console.error('Error fetching hero section:', error)
    return null
  }
}

export async function getAboutUs(): Promise<AboutUs | null> {
  try {
    return await client.fetch(queries.aboutUs)
  } catch (error) {
    console.error('Error fetching about us:', error)
    return null
  }
}

export async function getPrograms(): Promise<Program[]> {
  try {
    return await client.fetch(queries.programs)
  } catch (error) {
    console.error('Error fetching programs:', error)
    return []
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(queries.testimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await client.fetch(queries.siteSettings)
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}