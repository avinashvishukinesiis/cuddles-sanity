
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    return config // 👈 forces Webpack build, disables Turbopack
  },
  // Skip static generation for studio route to avoid Html import issues
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
