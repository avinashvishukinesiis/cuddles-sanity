import { client, queries } from './sanity'
import { HeroSection, AboutUs, Program, Testimonial, SiteSettings, Curriculum, Partnerships, Safety, Assistance, Contact } from './types'

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

export async function getCurriculum(): Promise<Curriculum | null> {
  try {
    return await client.fetch(queries.curriculum)
  } catch (error) {
    console.error('Error fetching curriculum:', error)
    return null
  }
}

export async function getPartnerships(): Promise<Partnerships | null> {
  try {
    return await client.fetch(queries.partnerships)
  } catch (error) {
    console.error('Error fetching partnerships:', error)
    return null
  }
}

export async function getSafety(): Promise<Safety | null> {
  try {
    return await client.fetch(queries.safety)
  } catch (error) {
    console.error('Error fetching safety:', error)
    return null
  }
}

export async function getAssistance(): Promise<Assistance | null> {
  try {
    return await client.fetch(queries.assistance)
  } catch (error) {
    console.error('Error fetching assistance:', error)
    return null
  }
}

export async function getContact(): Promise<Contact | null> {
  try {
    return await client.fetch(queries.contact)
  } catch (error) {
    console.error('Error fetching contact:', error)
    return null
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