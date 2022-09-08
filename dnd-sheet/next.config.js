/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  assetPrefix: "./",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
