/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
};

module.exports = nextConfig;
