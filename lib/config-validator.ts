/**
 * Configuration validator for Sanity environment variables
 * Helps debug deployment issues with missing environment variables
 */

export function validateSanityConfig() {
  const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiToken: process.env.SANITY_API_TOKEN,
    nodeEnv: process.env.NODE_ENV,
  }

  const issues: string[] = []

  if (!config.projectId) {
    issues.push('NEXT_PUBLIC_SANITY_PROJECT_ID is missing')
  }

  if (!config.dataset) {
    issues.push('NEXT_PUBLIC_SANITY_DATASET is missing')
  }

  if (!config.apiToken) {
    issues.push('SANITY_API_TOKEN is missing (required for admin operations)')
  }

  const isValid = issues.length === 0

  if (!isValid) {
    console.warn('[Config Validation] Sanity configuration issues detected:')
    issues.forEach(issue => console.warn(`  - ${issue}`))
    console.warn('[Config Validation] Available environment variables:')
    Object.keys(process.env)
      .filter(key => key.includes('SANITY') || key === 'NODE_ENV')
      .forEach(key => console.warn(`  - ${key}: ${process.env[key] ? 'SET' : 'MISSING'}`))
  } else {
    console.log('[Config Validation] ✅ All Sanity environment variables are properly configured')
  }

  return {
    isValid,
    issues,
    config,
    fallbacks: {
      projectId: 'w8a19ipn',
      dataset: 'production'
    }
  }
}

// Run validation on module load for debugging
if (typeof window === 'undefined') {
  // Only run server-side to avoid client-side noise
  validateSanityConfig()
}