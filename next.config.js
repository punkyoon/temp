/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/temp',
  experimental: { appDir: true, },
  reactStrictMode: true,
  images: { unoptimized: true, },
}

module.exports = nextConfig
