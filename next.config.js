/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'punkyoon.github.io', port: '', pathname: '/temp/**', },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
