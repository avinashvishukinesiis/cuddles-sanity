

/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack: (config:any) => {
    return config // 👈 forces Webpack build, disables Turbopack
  },
}

module.exports = nextConfig
