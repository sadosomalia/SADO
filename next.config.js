/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['source.unsplash.com', 'localhost', '164.92.157.29'],
  },
  // eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
