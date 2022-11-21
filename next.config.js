/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const assetPrefix = isProd ? '/temp/' : ''
const basePath = isProd ? '/temp' : ''

const nextConfig = {
  assetPrefix : assetPrefix,
  basePath : basePath,
  experimental: { appDir: true, },
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './app/utils/loader.js',
    unoptimized: true,
  },
}

module.exports = nextConfig
