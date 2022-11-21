/** @type {import('next').NextConfig} */

const basePath = '/temp';

const nextConfig = {
  basePath,
  experimental: { appDir: true, },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'punkyoon.github.io', port: '', pathname: '/temp/**', },
    ],
    path: `${basePath}/_next/image`,
    unoptimized: true,
  },
};

module.exports = nextConfig;
