/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, },
  reactStrictMode: true,
  images: { remotePatterns: [ { pathname: '/temp/**', }, ], unoptimized: true, },
}

module.exports = nextConfig
