/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
'use client'

import { NextStudio } from 'next-sanity/studio'
import { useEffect } from 'react'
import config from '../../../sanity.config'

export default function StudioPage() {
  useEffect(() => {
    console.log('[Studio] Loading Sanity Studio with config:', {
      projectId: config.projectId,
      dataset: config.dataset,
      name: config.name,
      title: config.title,
      pluginsCount: config.plugins?.length || 0,
      schemaTypesCount: config.schema?.types?.length || 0
    })
  }, [])

  return <NextStudio config={config} />
}
