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