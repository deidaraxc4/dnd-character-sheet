/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: false,
  assetPrefix: isProd ? "./dnd-character-sheet/" : "",
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
