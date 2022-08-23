/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      'source.unsplash.com',
      'localhost',
      'api.sadosomalia.org',
      'cdn.sanity.io',
    ],
  },
  // eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
