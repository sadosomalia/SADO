/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['source.unsplash.com'],
  },
  eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
