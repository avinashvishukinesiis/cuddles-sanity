
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    return config // 👈 forces Webpack build, disables Turbopack
  },
}

module.exports = nextConfig
