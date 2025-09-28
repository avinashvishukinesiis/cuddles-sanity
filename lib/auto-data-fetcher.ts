/**
 * Automated Data Fetcher with caching and error handling
 * Automatically fetches and caches Sanity data with fallbacks
 */

import { client } from './sanity'
import { HeroSection, HomePage } from './types'

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
const cache = new Map<string, { data: unknown; timestamp: number }>()

// Auto-retry configuration
const MAX_RETRIES = 3
const RETRY_DELAY = 1000

/**
 * Generic cached fetch with auto-retry
 */
async function cachedFetch<T>(
  key: string,
  query: string,
  fallback?: T,
  maxAge = CACHE_DURATION
): Promise<T> {
  // Check cache first
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < maxAge) {
    return cached.data
  }

  // Fetch with retry logic
  let lastError: Error | null = null

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(`[AutoFetch] ${key} - Attempt ${attempt}/${MAX_RETRIES}`)

      const data = await client.fetch(query)

      // Cache successful result
      cache.set(key, { data, timestamp: Date.now() })

      console.log(`[AutoFetch] ${key} - Success ✅`)
      return data

    } catch (error) {
      lastError = error as Error
      console.warn(`[AutoFetch] ${key} - Attempt ${attempt} failed:`, error)

      if (attempt < MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * attempt))
      }
    }
  }

  // All retries failed - use fallback or cached data
  console.error(`[AutoFetch] ${key} - All attempts failed, using fallback`)

  if (cached) {
    console.log(`[AutoFetch] ${key} - Using stale cache data`)
    return cached.data
  }

  if (fallback !== undefined) {
    console.log(`[AutoFetch] ${key} - Using provided fallback`)
    return fallback
  }

  throw lastError || new Error(`Failed to fetch ${key} after ${MAX_RETRIES} attempts`)
}

/**
 * Auto Home Page Data Fetcher
 */
export async function autoFetchHomePage(): Promise<HomePage | null> {
  const homePageQuery = `*[_type == "homePage"][0]{
    title,
    heroSection{
      title,
      description,
      primaryButton,
      secondaryButton,
      backgroundImage
    },
    earlyEducationSection{
      title,
      description,
      image,
      features
    },
    cuddlesProgramSection{
      title,
      subtitle,
      sunDecoration,
      programItems[]{
        _key,
        title,
        description,
        image,
        order
      }
    },
    activityZoneSection{
      title,
      activityItems[]{
        _key,
        title,
        description,
        image
      }
    },
    includeSection{
      title,
      description,
      includeItems[]{
        _key,
        include,
        exclude,
        icon
      }
    },
    letsConnectSection{
      title,
      subtitle,
      formImage,
      heartDecoration
    },
    awardsSection{
      title,
      awards
    },
    faqSection{
      title,
      faqs[]{
        _key,
        question,
        answer,
        order
      }
    }
  }`

  const fallback = {
    title: 'Home Page Content',
    heroSection: {
      title: 'Where imagination takes flight.',
      description: 'At Cuddles Preschool, we believe that every child\'s journey begins with a sense of wonder, joy, and discovery.',
      primaryButton: { text: 'Schedule A Visit', link: '/contact' },
      secondaryButton: { text: 'Explore Programs', link: '/curriculum' }
    }
  }

  return cachedFetch('homePage', homePageQuery, fallback)
}

/**
 * Auto Hero Section Fetcher
 */
export async function autoFetchHeroSection(): Promise<HeroSection | null> {
  const query = `*[_type == "homePage"][0].heroSection{
    title,
    description,
    primaryButton,
    secondaryButton,
    backgroundImage
  }`

  const fallback: HeroSection = {
    title: 'Where imagination takes flight.',
    description: 'At Cuddles Preschool, we believe that every child\'s journey begins with a sense of wonder, joy, and discovery.',
    primaryButton: { text: 'Schedule A Visit', link: '/contact' },
    secondaryButton: { text: 'Explore Programs', link: '/curriculum' }
  }

  return cachedFetch('heroSection', query, fallback)
}

/**
 * Auto Testimonials Fetcher
 */
export async function autoFetchTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "homePage"][0].testimonialsSection.testimonials[]{
    name,
    role,
    content,
    image,
    rating,
    featured,
    displayOrder
  }`

  const fallback: Testimonial[] = []
  const result = await cachedFetch('testimonials', query, fallback)

  // Transform the data to include _id for compatibility
  return result.map((testimonial: { name: string; role: string; content: string; image?: unknown; rating?: number; featured?: boolean; displayOrder?: number }, index: number) => ({
    _id: `testimonial-${index}`,
    _type: 'testimonial' as const,
    ...testimonial
  }))
}

/**
 * Auto All Pages Data Fetcher
 */
export async function autoFetchAllPages() {
  console.log('[AutoFetch] Starting bulk data fetch...')

  const results = await Promise.allSettled([
    autoFetchHomePage(),
    autoFetchHeroSection(),
    autoFetchTestimonials(),
    cachedFetch('aboutUs', '*[_type == "aboutUs"][0]', null),
    cachedFetch('curriculum', '*[_type == "curriculum"][0]', null),
    cachedFetch('safety', '*[_type == "safety"][0]', null),
    cachedFetch('assistance', '*[_type == "assistance"][0]', null),
    cachedFetch('contact', '*[_type == "contact"][0]', null),
    cachedFetch('partnerships', '*[_type == "partnerships"][0]', null),
    cachedFetch('footer', '*[_type == "footer"][0]', null),
  ])

  const data = {
    homePage: results[0].status === 'fulfilled' ? results[0].value : null,
    heroSection: results[1].status === 'fulfilled' ? results[1].value : null,
    testimonials: results[2].status === 'fulfilled' ? results[2].value : [],
    aboutUs: results[3].status === 'fulfilled' ? results[3].value : null,
    curriculum: results[4].status === 'fulfilled' ? results[4].value : null,
    safety: results[5].status === 'fulfilled' ? results[5].value : null,
    assistance: results[6].status === 'fulfilled' ? results[6].value : null,
    contact: results[7].status === 'fulfilled' ? results[7].value : null,
    partnerships: results[8].status === 'fulfilled' ? results[8].value : null,
    footer: results[9].status === 'fulfilled' ? results[9].value : null,
  }

  console.log('[AutoFetch] Bulk fetch completed ✅')
  return data
}

/**
 * Cache management utilities
 */
export const cacheUtils = {
  clear: () => {
    cache.clear()
    console.log('[AutoFetch] Cache cleared')
  },

  size: () => cache.size,

  keys: () => Array.from(cache.keys()),

  invalidate: (key: string) => {
    cache.delete(key)
    console.log(`[AutoFetch] Cache invalidated for: ${key}`)
  },

  stats: () => {
    const now = Date.now()
    const stats = Array.from(cache.entries()).map(([key, { timestamp }]) => ({
      key,
      age: Math.round((now - timestamp) / 1000),
      fresh: now - timestamp < CACHE_DURATION
    }))
    return stats
  }
}

/**
 * Auto-refresh cache in background
 */
export function startAutoRefresh(intervalMs = 10 * 60 * 1000) { // 10 minutes
  console.log('[AutoFetch] Starting auto-refresh...')

  setInterval(async () => {
    try {
      console.log('[AutoFetch] Background refresh started')
      await autoFetchAllPages()
      console.log('[AutoFetch] Background refresh completed')
    } catch (error) {
      console.error('[AutoFetch] Background refresh failed:', error)
    }
  }, intervalMs)
}