/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const assetPrefix = isProd ? '/temp/' : ''
const basePath = isProd ? '/temp' : ''

const nextConfig = {
  assetPrefix,
  basePath,
  experimental: { appDir: true, },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'punkyoon.github.io', port: '', pathname: '/temp/**', },
    ],
    path: basePath,
    unoptimized: true,
  },
}

module.exports = nextConfig
