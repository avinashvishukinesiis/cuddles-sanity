import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import { validateSanityConfig } from './lib/config-validator'

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

// Validate configuration and get fallbacks
const validation = validateSanityConfig()
const projectId = validation.config.projectId || validation.fallbacks.projectId

export default defineConfig({
  name: isDev ? 'development' : 'production',
  title: `Cuddles Preschool${isDev ? ' (Development)' : ''}`,
  projectId: projectId, // Will always have a value due to fallback logic above
  dataset: getDataset(),

  plugins: [
    structureTool({
      title: 'Content',
      name: 'content',
    }),
    // Only include Vision Tool in development
    ...(isDev ? [visionTool({
      title: 'GROQ Vision',
      name: 'vision',
    })] : [])
  ],

  schema: {
    types: schemaTypes,
  },

  // Studio configuration
  studio: {
    components: {
      // You can add custom studio components here
    }
  },

  // CORS configuration for multiple environments
  cors: {
    allowCredentials: true,
    allowOrigins: [
      'http://localhost:3000',
      'http://localhost:3333',
      'http://127.0.0.1:3000',
      'https://studio.cuddles.co.in',
      'https://cuddles.co.in',
      'https://www.cuddles.co.in',
    ]
  },

  // API configuration
  api: {
    projectId: projectId,
    dataset: getDataset(),
    useCdn: !isDev,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
  }
})