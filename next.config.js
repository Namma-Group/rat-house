/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://localhost:3000', // Replace with your image host URL
  },
}

module.exports = nextConfig;
