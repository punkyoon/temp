/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/temp',
  experimental: { appDir: true, },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'punkyoon.github.io', port: '', pathname: '/temp/**', },
    ],
    path: `/temp/_next/image`,
    unoptimized: true,
  },
}

module.exports = nextConfig
