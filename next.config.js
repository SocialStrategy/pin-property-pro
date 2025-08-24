/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
  },
  // Keep existing static export for Vercel
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig